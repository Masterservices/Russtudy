import { useEffect, useRef } from 'react';

interface ProgramBgCanvasProps {
  colorStart: string;
  colorEnd: string;
}

export default function ProgramBgCanvas({ colorStart, colorEnd }: ProgramBgCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const drawShapes = () => {
      const w = canvas.width;
      const h = canvas.height;

      // Draw gradient background
      const grad = ctx.createLinearGradient(0, 0, 0, h);
      grad.addColorStop(0, colorStart);
      grad.addColorStop(1, colorEnd);
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, w, h);

      // Draw 8 random white shapes with 18% opacity
      ctx.fillStyle = 'rgba(255, 255, 255, 0.18)';
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.18)';
      ctx.lineWidth = 2;

      // Seed-based random values to ensure consistency or clean drawing
      const seedRandom = (seed: number) => {
        const x = Math.sin(seed) * 10000;
        return x - Math.floor(x);
      };

      for (let i = 0; i < 8; i++) {
        // use basic pseudo-random calculations with index as seed
        const size = 20 + seedRandom(i * 12 + 1) * 60;
        const x = seedRandom(i * 45 + 2) * w;
        const y = seedRandom(i * 67 + 3) * h;
        const shapeType = Math.floor(seedRandom(i * 23 + 4) * 3); // 0=circle, 1=square, 2=triangle

        ctx.beginPath();
        if (shapeType === 0) {
          // Circle
          ctx.arc(x, y, size / 2, 0, Math.PI * 2);
          if (i % 2 === 0) ctx.fill();
          else ctx.stroke();
        } else if (shapeType === 1) {
          // Square
          if (i % 2 === 0) {
            ctx.fillRect(x - size / 2, y - size / 2, size, size);
          } else {
            ctx.strokeRect(x - size / 2, y - size / 2, size, size);
          }
        } else {
          // Triangle
          ctx.moveTo(x, y - size / 2);
          ctx.lineTo(x + size / 2, y + size / 2);
          ctx.lineTo(x - size / 2, y + size / 2);
          ctx.closePath();
          if (i % 2 === 0) ctx.fill();
          else ctx.stroke();
        }
      }
    };

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      canvas.width = canvas.parentElement.clientWidth;
      canvas.height = canvas.parentElement.clientHeight || 260;
      drawShapes();
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [colorStart, colorEnd]);

  return (
    <canvas 
      ref={canvasRef} 
      className="absolute inset-0 w-full h-full block"
    />
  );
}
