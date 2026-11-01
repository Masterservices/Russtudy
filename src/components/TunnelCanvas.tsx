import { useEffect, useRef } from 'react';

export default function TunnelCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let time = 0;

    const resize = () => {
      if (!canvas || !canvas.parentElement) return;
      canvas.width = canvas.parentElement.clientWidth;
      canvas.height = canvas.parentElement.clientHeight || 400;
    };

    resize();
    window.addEventListener('resize', resize);

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      // Normalize mouse coordinates from -1 to 1
      mouseRef.current.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      mouseRef.current.y = ((e.clientY - rect.top) / rect.height) * 2 - 1;
    };

    canvas.parentElement?.addEventListener('mousemove', handleMouseMove);

    // Color list for panels
    const panelColors = [
      '#2460E8', // Blue
      '#F97316', // Orange
      '#FBBB21', // Yellow
      '#EF4444', // Red
      '#22C55E', // Green
      '#A855F7', // Purple
    ];

    const draw = () => {
      if (!ctx || !canvas) return;

      const w = canvas.width;
      const h = canvas.height;

      // Dark background
      ctx.fillStyle = '#050508';
      ctx.fillRect(0, 0, w, h);

      // Center point slightly shifted by mouse
      const vpx = w / 2 + mouseRef.current.x * (w * 0.08);
      const vpy = h / 2 + mouseRef.current.y * (h * 0.08);

      time += 0.005; // Continuously speed up tunnel

      const depthLayers = 10;
      const wallPanelsCount = 11;

      // Draw perspective tunnel rings from back to front
      for (let i = depthLayers; i >= 1; i--) {
        // Calculate depth (from 0 to 1) and wrap it
        const rawZ = (i / depthLayers) - (time % (1 / depthLayers));
        const z = Math.max(0.01, Math.min(0.99, rawZ));

        // Scale factors for perspective (1/z represents distance)
        const scale = 1 / z;
        const ringW = (w * 0.22) * scale;
        const ringH = (h * 0.22) * scale;

        const rx1 = vpx - ringW / 2;
        const ry1 = vpy - ringH / 2;
        const rx2 = vpx + ringW / 2;
        const ry2 = vpy + ringH / 2;

        // Calculate outer coordinates (depth closer to viewer)
        const zOuter = z + (1 / depthLayers);
        const scaleOuter = 1 / zOuter;
        const ringWOuter = (w * 0.22) * scaleOuter;
        const ringHOuter = (h * 0.22) * scaleOuter;

        const ox1 = vpx - ringWOuter / 2;
        const oy1 = vpy - ringHOuter / 2;
        const ox2 = vpx + ringWOuter / 2;
        const oy2 = vpy + ringHOuter / 2;

        // Draw ring outline
        ctx.strokeStyle = `rgba(168, 85, 247, ${0.12 * (1 - z)})`; // purple tint
        ctx.lineWidth = 1;
        ctx.strokeRect(rx1, ry1, ringW, ringH);

        // Draw grid divisions (wall panels)
        const sectors = 8;
        for (let s = 0; s < sectors; s++) {
          const angle = (s / sectors) * Math.PI * 2;
          
          // Math coordinates to get ring points
          const getRingPoint = (rx: number, ry: number, rw: number, rh: number, index: number) => {
            // Distribute points along the rectangle perimeter
            const sectorAngle = (index / sectors) * Math.PI * 2;
            const cos = Math.cos(sectorAngle);
            const sin = Math.sin(sectorAngle);
            
            // Simple projection on rectangle boundaries
            let px = vpx + rw * 0.5 * cos;
            let py = vpy + rh * 0.5 * sin;
            return { x: px, y: py };
          };

          const p1 = getRingPoint(rx1, ry1, ringW, ringH, s);
          const p2 = getRingPoint(rx1, ry1, ringW, ringH, s + 1);
          const o1 = getRingPoint(ox1, oy1, ringWOuter, ringHOuter, s);
          const o2 = getRingPoint(ox1, oy1, ringWOuter, ringHOuter, s + 1);

          // Connecting grid lines
          ctx.beginPath();
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(o1.x, o1.y);
          ctx.strokeStyle = `rgba(255, 255, 255, ${0.08 * (1 - z)})`;
          ctx.stroke();

          // Draw some decorative colored panels on the tunnel walls
          // Seed-based decision to draw a panel
          const panelSeed = Math.floor((s + i * 7 + Math.floor(time * 0.5)) % wallPanelsCount);
          if (panelSeed === 2 || panelSeed === 5) {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.lineTo(o2.x, o2.y);
            ctx.lineTo(o1.x, o1.y);
            ctx.closePath();

            // Random color from the list based on index
            const color = panelColors[(s + i) % panelColors.length];
            ctx.fillStyle = color;
            ctx.globalAlpha = 0.15 * (1 - z);
            ctx.fill();
            ctx.globalAlpha = 1.0;
            
            ctx.strokeStyle = color;
            ctx.lineWidth = 1.5;
            ctx.stroke();
          }
        }
      }

      // Draw central radial glow
      const radialGlow = ctx.createRadialGradient(vpx, vpy, 2, vpx, vpy, w * 0.28);
      radialGlow.addColorStop(0, 'rgba(255, 255, 255, 0.9)');
      radialGlow.addColorStop(0.1, 'rgba(168, 85, 247, 0.4)');
      radialGlow.addColorStop(0.5, 'rgba(36, 96, 232, 0.08)');
      radialGlow.addColorStop(1, 'transparent');

      ctx.fillStyle = radialGlow;
      ctx.beginPath();
      ctx.arc(vpx, vpy, w * 0.4, 0, Math.PI * 2);
      ctx.fill();

      // UI text overlay on canvas for depth
      ctx.fillStyle = 'rgba(255, 255, 255, 0.1)';
      ctx.font = "bold 10px 'Space Grotesk'";
      ctx.fillText("TUNNEL D'ORIENTATION PERSPECTIVE", 20, 30);
      ctx.fillText("RUSSTUDY CORE V2.0", w - 160, h - 20);

      animId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
      canvas.parentElement?.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="absolute inset-0 w-full h-full object-cover rounded-[22px] block bg-black"
    />
  );
}
