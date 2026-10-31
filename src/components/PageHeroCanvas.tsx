'use client';

import { useEffect, useRef, useState } from 'react';

/**
 * Voile WebGL décoratif superposé aux photos de bannière des pages de
 * contenu : aurores boréales animées, étincelles et neige légère. Le canvas
 * est opaque (fond noir) et composé en `mix-blend-mode: screen`, donc seules
 * les zones lumineuses éclairent la photo — aucun artefact d'alpha.
 * En l'absence de WebGL ou si `prefers-reduced-motion` est actif, l'effet
 * s'efface (une seule frame statique, ou rien du tout) : la photo reste seule.
 */
export type HeroVariant = 'sky' | 'gold' | 'teal' | 'violet';

const VARIANT_COLORS: Record<HeroVariant, { a: [number, number, number]; b: [number, number, number] }> = {
  sky: { a: [0.16, 0.42, 1.0], b: [0.05, 0.8, 0.9] },
  gold: { a: [1.0, 0.68, 0.18], b: [0.95, 0.32, 0.45] },
  teal: { a: [0.08, 0.85, 0.75], b: [0.15, 0.45, 1.0] },
  violet: { a: [0.62, 0.32, 1.0], b: [0.18, 0.65, 1.0] },
};

const VERTEX_SHADER_SOURCE = `
  attribute vec2 position;
  varying vec2 v;
  void main() {
    v = position * 0.5 + 0.5;
    gl_Position = vec4(position, 0.0, 1.0);
  }
`;

const FRAGMENT_SHADER_SOURCE = `
  precision mediump float;
  uniform float t;
  uniform vec2 res;
  uniform vec3 c1;
  uniform vec3 c2;
  varying vec2 v;

  float hash(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
  float n(vec2 p){
    vec2 i=floor(p),f=fract(p);
    f=f*f*(3.-2.*f);
    return mix(mix(hash(i),hash(i+vec2(1,0)),f.x),
               mix(hash(i+vec2(0,1)),hash(i+vec2(1,1)),f.x),f.y);
  }

  void main(){
    vec2 uv=v;
    float ar=res.x/max(res.y,1.0);

    /* Rubans d'aurore près du haut de la bannière */
    float w1=n(vec2(uv.x*2.4*ar+t*.06, uv.y*1.7-t*.03));
    float band1=smoothstep(.42,.95,w1)*smoothstep(.15,.75,uv.y);
    float w2=n(vec2(uv.x*3.3*ar-t*.05, uv.y*2.1+t*.04));
    float band2=smoothstep(.5,.98,w2)*smoothstep(.05,.6,uv.y);
    vec3 col=c1*band1*.6+c2*band2*.45;

    /* Étincelles scintillantes */
    float sp=step(.9975,hash(floor(uv*vec2(220.*ar,130.))+floor(t*1.6)));
    col+=sp*vec3(.55);

    /* Neige légère qui dérive */
    float sn=step(.993,hash(floor(uv*vec2(110.*ar,70.)+vec2(t*.05,-t*.2))));
    col+=sn*vec3(.16);

    /* Halo doux en bas pour asseoir la photo */
    col+=c1*smoothstep(.35,.0,uv.y)*.12;

    gl_FragColor=vec4(col,1.);
  }
`;

export default function PageHeroCanvas({ variant = 'sky' }: { variant?: HeroVariant }) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [hasWebGL, setHasWebGL] = useState(true);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    let gl: WebGLRenderingContext | null = null;
    try {
      gl =
        canvas.getContext('webgl', { alpha: false, depth: false, antialias: true }) ||
        (canvas.getContext('experimental-webgl', { alpha: false, depth: false, antialias: true }) as WebGLRenderingContext | null);
    } catch {
      gl = null;
    }
    if (!gl) {
      setHasWebGL(false);
      return;
    }
    const glc = gl;

    const createShader = (type: number, source: string) => {
      const shader = glc.createShader(type);
      if (!shader) return null;
      glc.shaderSource(shader, source);
      glc.compileShader(shader);
      if (!glc.getShaderParameter(shader, glc.COMPILE_STATUS)) {
        glc.deleteShader(shader);
        return null;
      }
      return shader;
    };

    let program: WebGLProgram | null = null;
    let vertexBuffer: WebGLBuffer | null = null;
    let tLoc: WebGLUniformLocation | null = null;
    let resLoc: WebGLUniformLocation | null = null;

    const buildGpuResources = (): boolean => {
      const vs = createShader(glc.VERTEX_SHADER, VERTEX_SHADER_SOURCE);
      const fs = createShader(glc.FRAGMENT_SHADER, FRAGMENT_SHADER_SOURCE);
      if (!vs || !fs) return false;

      program = glc.createProgram();
      if (!program) return false;
      glc.attachShader(program, vs);
      glc.attachShader(program, fs);
      glc.linkProgram(program);
      if (!glc.getProgramParameter(program, glc.LINK_STATUS)) return false;
      glc.useProgram(program);

      const vertices = new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]);
      vertexBuffer = glc.createBuffer();
      glc.bindBuffer(glc.ARRAY_BUFFER, vertexBuffer);
      glc.bufferData(glc.ARRAY_BUFFER, vertices, glc.STATIC_DRAW);

      const positionLoc = glc.getAttribLocation(program, 'position');
      glc.enableVertexAttribArray(positionLoc);
      glc.vertexAttribPointer(positionLoc, 2, glc.FLOAT, false, 0, 0);

      tLoc = glc.getUniformLocation(program, 't');
      resLoc = glc.getUniformLocation(program, 'res');
      const { a, b } = VARIANT_COLORS[variant];
      glc.uniform3f(glc.getUniformLocation(program, 'c1'), a[0], a[1], a[2]);
      glc.uniform3f(glc.getUniformLocation(program, 'c2'), b[0], b[1], b[2]);
      return true;
    };

    if (!buildGpuResources()) {
      setHasWebGL(false);
      return;
    }

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let animationId = 0;
    let running = true;
    let contextLost = false;
    const startTime = Date.now();

    const resizeCanvas = () => {
      if (!canvas.parentElement) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      const width = canvas.parentElement.clientWidth;
      const height = canvas.parentElement.clientHeight;
      if (!width || !height) return;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      glc.viewport(0, 0, canvas.width, canvas.height);
    };

    const drawFrame = () => {
      glc.uniform1f(tLoc, (Date.now() - startTime) / 1000);
      glc.uniform2f(resLoc, canvas.width, canvas.height);
      glc.drawArrays(glc.TRIANGLES, 0, 6);
    };

    const render = () => {
      if (contextLost || !running) return;
      animationId = requestAnimationFrame(render);
      if ((canvas.width === 0 || canvas.height === 0) && canvas.parentElement?.clientWidth) resizeCanvas();
      drawFrame();
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Pause hors du viewport pour préserver batterie et performances.
    const observer = new IntersectionObserver(
      ([entry]) => {
        const visible = entry?.isIntersecting ?? true;
        if (visible && !running && !reducedMotion) {
          running = true;
          render();
        } else if (!visible && running) {
          running = false;
          cancelAnimationFrame(animationId);
        }
      },
      { threshold: 0 }
    );
    observer.observe(canvas);

    const handleContextLost = (e: Event) => {
      e.preventDefault();
      contextLost = true;
      cancelAnimationFrame(animationId);
    };
    const handleContextRestored = () => {
      contextLost = false;
      if (buildGpuResources()) {
        resizeCanvas();
        if (running) render();
      } else {
        setHasWebGL(false);
      }
    };
    canvas.addEventListener('webglcontextlost', handleContextLost, false);
    canvas.addEventListener('webglcontextrestored', handleContextRestored, false);

    if (reducedMotion) {
      running = false;
      drawFrame();
    } else {
      render();
    }

    return () => {
      running = false;
      cancelAnimationFrame(animationId);
      observer.disconnect();
      window.removeEventListener('resize', resizeCanvas);
      canvas.removeEventListener('webglcontextlost', handleContextLost);
      canvas.removeEventListener('webglcontextrestored', handleContextRestored);
      if (vertexBuffer) glc.deleteBuffer(vertexBuffer);
      if (program) glc.deleteProgram(program);
    };
  }, [variant]);

  if (!hasWebGL) return null;

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ mixBlendMode: 'screen', opacity: 0.55 }}
    />
  );
}
