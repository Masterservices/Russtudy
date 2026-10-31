import React, { useEffect, useRef, useState } from 'react';

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
  uniform float scroll;
  uniform vec2 res;
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
    float para=scroll*0.18;          /* PARALLAX immeubles */
    vec2 uvB=vec2(uv.x,uv.y+para);   /* UV décalé pour immeubles */

    /* Ciel */
    vec3 sky=mix(vec3(.05,.10,.28),vec3(.12,.22,.55),uv.y);

    /* Étoiles */
    float star=step(.994,hash(floor(uv*180.+t*.01)));
    sky+=star*vec3(1.,1.,.9)*.8;

    /* Aurore boréale */
    float aurora=n(vec2(uv.x*3.+t*.08,uv.y*2.+t*.04))*.5;
    aurora*=smoothstep(.5,.8,uv.y)*smoothstep(1.,.65,uv.y);
    sky+=aurora*vec3(.1,.4,.9)*.6;

    /* Immeubles — 16 bâtiments avec parallax individuel */
    vec3 bldg=vec3(.06,.08,.14);
    float bh=0.;
    for(int i=0; i<16; i++){
      float fi=float(i);
      float bx=fi/16.;                          /* ← VALEUR CANONIQUE */
      float bw=.055+hash(vec2(fi,.0))*.025;     /* ← VALEUR CANONIQUE */
      float height=.12+hash(vec2(fi,1.))*.32;   /* ← VALEUR CANONIQUE */
      if(i==4||i==8||i==12)height+=.18;         /* ← VALEUR CANONIQUE */
      float inB=step(bx,uvB.x)*step(uvB.x,bx+bw);
      bh=max(bh,inB*height);
    }

    float ground=step(uvB.y,.15);
    float building=step(uvB.y,.15+bh)*(1.-ground);

    if(building>.5){
      vec2 wg=fract(uvB*vec2(80.,20.));          /* ← VALEUR CANONIQUE : 80,20 */
      float win=step(.15,wg.x)*step(wg.x,.7)
               *step(.15,wg.y)*step(wg.y,.7);   /* ← VALEUR CANONIQUE */
      float lit=step(.6,hash(floor(uvB*vec2(80.,20.))+vec2(0.,t*.15)));
      sky=mix(sky,bldg+lit*vec3(.9,.75,.3)*win*.9,building); /* ← CANONIQUE */
    }

    sky=mix(sky,vec3(.04,.07,.18)+(sky*.25),ground);

    /* Neige */
    float snow=step(.97,hash(floor(uvB*vec2(40.,60.)+vec2(t*.02,-t*.12))))*(1.-building);
    sky+=snow*.5;

    /* Vignette */
    float vig=length((uv-.5)*vec2(1.2,1.));
    sky*=1.-vig*.7;

    gl_FragColor=vec4(sky,1.);
  }
`;

export default function WebGLHero() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [hasWebGL, setHasWebGL] = useState(true);
  const [tiltStyle, setTiltStyle] = useState('');

  // 3D Tilt Effect on Desktop Only
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!window.matchMedia('(pointer:fine)').matches || !containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Normalize coordinates -0.5 to 0.5
    const px = (x / rect.width) - 0.5;
    const py = (y / rect.height) - 0.5;
    
    // Calculate rotation angles (mx, my)
    const mx = px * 10; // max 5 degrees tilt left/right
    const my = py * 8;  // max 4 degrees tilt up/down
    
    setTiltStyle(`perspective(900px) rotateY(${mx}deg) rotateX(${-my}deg)`);
  };

  const handleMouseLeave = () => {
    setTiltStyle('');
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    let gl: WebGLRenderingContext | null = null;
    try {
      gl = canvas.getContext('webgl', { alpha: false, depth: false, antialias: true }) ||
           canvas.getContext('experimental-webgl', { alpha: false, depth: false, antialias: true }) as WebGLRenderingContext;
    } catch (e) {
      console.warn('WebGL not supported, falling back to CSS background.', e);
    }

    if (!gl) {
      setHasWebGL(false);
      return;
    }
    const glc = gl; // référence non-null stable

    // Compile shaders
    const createShader = (glContext: WebGLRenderingContext, type: number, source: string) => {
      const shader = glContext.createShader(type);
      if (!shader) return null;
      glContext.shaderSource(shader, source);
      glContext.compileShader(shader);
      if (!glContext.getShaderParameter(shader, glContext.COMPILE_STATUS)) {
        console.error('Shader compilation error:', glContext.getShaderInfoLog(shader));
        glContext.deleteShader(shader);
        return null;
      }
      return shader;
    };

    // Ressources GPU (re-créables après une perte de contexte)
    let program: WebGLProgram | null = null;
    let vertexBuffer: WebGLBuffer | null = null;
    let tLoc: WebGLUniformLocation | null = null;
    let scrollLoc: WebGLUniformLocation | null = null;
    let resLoc: WebGLUniformLocation | null = null;

    // (Re)construit programme + géométrie + uniformes. Renvoie false en cas d'échec.
    const buildGpuResources = (): boolean => {
      const vs = createShader(glc, glc.VERTEX_SHADER, VERTEX_SHADER_SOURCE);
      const fs = createShader(glc, glc.FRAGMENT_SHADER, FRAGMENT_SHADER_SOURCE);
      if (!vs || !fs) return false;

      program = glc.createProgram();
      if (!program) return false;
      glc.attachShader(program, vs);
      glc.attachShader(program, fs);
      glc.linkProgram(program);
      if (!glc.getProgramParameter(program, glc.LINK_STATUS)) {
        console.error('Program linking error:', glc.getProgramInfoLog(program));
        return false;
      }
      glc.useProgram(program);

      const vertices = new Float32Array([
        -1, -1,
         1, -1,
        -1,  1,
        -1,  1,
         1, -1,
         1,  1,
      ]);
      vertexBuffer = glc.createBuffer();
      glc.bindBuffer(glc.ARRAY_BUFFER, vertexBuffer);
      glc.bufferData(glc.ARRAY_BUFFER, vertices, glc.STATIC_DRAW);

      const positionLoc = glc.getAttribLocation(program, 'position');
      glc.enableVertexAttribArray(positionLoc);
      glc.vertexAttribPointer(positionLoc, 2, glc.FLOAT, false, 0, 0);

      tLoc = glc.getUniformLocation(program, 't');
      scrollLoc = glc.getUniformLocation(program, 'scroll');
      resLoc = glc.getUniformLocation(program, 'res');
      return true;
    };

    if (!buildGpuResources()) {
      setHasWebGL(false);
      return;
    }

    let animationId = 0;
    const startTime = Date.now();
    let scrollVal = 0;
    let contextLost = false;

    // Handle scroll
    const handleScroll = () => {
      const heroHeight = containerRef.current?.clientHeight || 600;
      scrollVal = Math.min(window.scrollY / heroHeight, 1.0);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Handle resize (et re-synchronise la taille du backing store)
    const resizeCanvas = () => {
      if (!canvas || !canvas.parentElement) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const width = canvas.parentElement.clientWidth;
      const height = canvas.parentElement.clientHeight;
      if (!width || !height) return; // parent masqué / non mesuré : on retentera
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      glc.viewport(0, 0, canvas.width, canvas.height);
    };

    // Initial size
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Render loop
    const render = () => {
      animationId = requestAnimationFrame(render);
      if (contextLost || glc.isContextLost()) return;

      // Le backing store peut tomber à 0 après un retour de scroll sur mobile :
      // on le rétablit dès qu'il est invalide alors que le parent a une taille.
      if ((canvas.width === 0 || canvas.height === 0) && canvas.parentElement?.clientWidth) {
        resizeCanvas();
      }

      const currentTime = (Date.now() - startTime) / 1000;
      glc.uniform1f(tLoc, currentTime);
      glc.uniform1f(scrollLoc, scrollVal);
      glc.uniform2f(resLoc, canvas.width, canvas.height);
      glc.drawArrays(glc.TRIANGLES, 0, 6);
    };

    // ── Perte / restauration du contexte WebGL (scroll mobile qui « casse » le hero) ──
    const handleContextLost = (e: Event) => {
      e.preventDefault(); // autorise la restauration
      contextLost = true;
      cancelAnimationFrame(animationId);
    };
    const handleContextRestored = () => {
      contextLost = false;
      if (buildGpuResources()) {
        resizeCanvas();
        cancelAnimationFrame(animationId);
        render();
      } else {
        setHasWebGL(false);
      }
    };
    canvas.addEventListener('webglcontextlost', handleContextLost as EventListener, false);
    canvas.addEventListener('webglcontextrestored', handleContextRestored as EventListener, false);

    // Certains navigateurs mobiles vident le canvas au retour d'onglet/scroll sans
    // émettre d'évènement : on force une re-synchro quand la page redevient visible.
    const handleVisibility = () => {
      if (document.visibilityState === 'visible') resizeCanvas();
    };
    document.addEventListener('visibilitychange', handleVisibility);

    render();

    // Clean up
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', resizeCanvas);
      document.removeEventListener('visibilitychange', handleVisibility);
      canvas.removeEventListener('webglcontextlost', handleContextLost as EventListener);
      canvas.removeEventListener('webglcontextrestored', handleContextRestored as EventListener);
      if (vertexBuffer) glc.deleteBuffer(vertexBuffer);
      if (program) glc.deleteProgram(program);
    };
  }, []);

  return (
    <div 
      id="heroBoxContainer"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="absolute inset-0 w-full h-full overflow-hidden"
    >
      <div 
        id="heroBox"
        className="w-full h-full transition-transform duration-150 ease-out"
        style={{ 
          transform: tiltStyle,
          background: !hasWebGL ? 'linear-gradient(180deg, #0d1a3e, #1a3080)' : 'transparent' 
        }}
      >
        {hasWebGL ? (
          <canvas 
            ref={canvasRef} 
            className="absolute inset-0 w-full h-full object-cover block"
          />
        ) : (
          /* Fallback view when WebGL fails */
          <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-[#0d1a3e] to-[#1a3080] flex flex-col justify-end">
            {/* Ambient stars */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent opacity-60"></div>
            {/* Simple static Skyline */}
            <div className="w-full h-[240px] flex items-end justify-between px-2 gap-1 opacity-40">
              <div className="w-[6%] bg-black/90 h-[50%] rounded-t"></div>
              <div className="w-[8%] bg-black/90 h-[70%] rounded-t"></div>
              <div className="w-[5%] bg-black/90 h-[40%] rounded-t"></div>
              <div className="w-[7%] bg-black/90 h-[85%] rounded-t"></div>
              <div className="w-[10%] bg-black/90 h-[60%] rounded-t"></div>
              <div className="w-[6%] bg-black/90 h-[45%] rounded-t"></div>
              <div className="w-[8%] bg-black/90 h-[75%] rounded-t"></div>
              <div className="w-[5%] bg-black/90 h-[30%] rounded-t"></div>
              <div className="w-[9%] bg-black/90 h-[65%] rounded-t"></div>
              <div className="w-[6%] bg-black/90 h-[50%] rounded-t"></div>
              <div className="w-[8%] bg-black/90 h-[80%] rounded-t"></div>
              <div className="w-[5%] bg-black/90 h-[45%] rounded-t"></div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
