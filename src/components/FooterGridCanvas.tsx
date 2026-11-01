import { useEffect, useRef } from 'react';

export default function FooterGridCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let time = 0;

    const colors = [
      '#A855F7', // purple
      '#2460E8', // blue
      '#FBBB21', // yellow
      '#F97316', // orange
      '#22C55E', // green
      '#EF4444'  // red
    ];

    const draw = () => {
      if (!ctx || !canvas) return;

      const w = canvas.width;
      const h = canvas.height;

      // Solid black background
      ctx.fillStyle = '#050508';
      ctx.fillRect(0, 0, w, h);

      const columns = 14;
      const cellW = w / columns;
      const rows = Math.ceil(h / cellW);
      
      time += 0.02;

      // Draw grid
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < columns; c++) {
          const x = c * cellW;
          const y = r * cellW;

          // Decide if cell is lit based on a sine wave pattern over time
          const waveVal = Math.sin(c * 0.5 + r * 0.3 + time);
          const isLit = waveVal > 0.88;

          if (isLit) {
            // Pick a color based on row + column
            const color = colors[(r + c) % colors.length];
            ctx.fillStyle = color;
            ctx.globalAlpha = 0.35 * (waveVal - 0.88) / 0.12; // fade in/out
            ctx.fillRect(x + 2, y + 2, cellW - 4, cellW - 4);
            ctx.globalAlpha = 1.0;
          }

          // Cell border
          ctx.strokeStyle = 'rgba(255, 255, 255, 0.03)';
          ctx.lineWidth = 1;
          ctx.strokeRect(x, y, cellW, cellW);
        }
      }

      animId = requestAnimationFrame(draw);
    };

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      canvas.width = canvas.parentElement.clientWidth;
      canvas.height = canvas.parentElement.clientHeight || 250;
    };

    window.addEventListener('resize', handleResize);
    handleResize();
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="absolute inset-0 w-full h-full block"
    />
  );
}
