import { useEffect, useRef } from 'react';

interface PixelArtCardProps {
  artType: 'cap' | 'star';
  title: string;
  description: string;
}

// Grid dimensions: 12 rows x 20 columns
const CAP_ART_GRID = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0],
  [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0],
  [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 2, 0, 0],
  [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 2, 0, 0],
  [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 2, 2, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0],
  [0, 0, 0, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 0, 0, 0, 0],
  [0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
];

const STAR_ART_GRID = [
  [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0],
  [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 2, 2, 2, 0, 0, 0, 0],
  [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 2, 2, 2, 2, 2, 0, 0, 0],
  [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 2, 2, 0, 0, 0, 0],
  [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 2, 2, 0, 0, 0, 0],
  [0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 2, 2, 0, 0, 0, 0],
  [0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 2, 2, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
];

export default function PixelArtCard({ artType, title, description }: PixelArtCardProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const grid = artType === 'cap' ? CAP_ART_GRID : STAR_ART_GRID;
    const rows = 12;
    const cols = 20;

    const drawPixelArt = () => {
      const w = canvas.width;
      const h = canvas.height;

      // Base background: #2460E8
      ctx.fillStyle = '#2460E8';
      ctx.fillRect(0, 0, w, h);

      const cellW = w / cols;
      const cellH = h / rows;

      // Draw grid pixels
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const val = grid[r][c];
          
          if (val === 1) {
            // Cap/Star primary
            ctx.fillStyle = artType === 'cap' ? '#EF4444' : '#FBBB21'; // Red or Yellow
            ctx.fillRect(c * cellW, r * cellH, cellW, cellH);
          } else if (val === 2) {
            // Secondary
            ctx.fillStyle = artType === 'cap' ? '#FBBB21' : '#22C55E'; // Yellow or Green
            ctx.fillRect(c * cellW, r * cellH, cellW, cellH);
          }
          
          // Draw grid lines
          ctx.strokeStyle = 'rgba(0,0,0,0.06)';
          ctx.lineWidth = 1;
          ctx.strokeRect(c * cellW, r * cellH, cellW, cellH);
        }
      }
    };

    drawPixelArt();
    
    // Resize support
    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      canvas.width = canvas.parentElement.clientWidth;
      canvas.height = canvas.parentElement.clientHeight || 200;
      drawPixelArt();
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // trigger initially

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [artType]);

  return (
    <div className="bg-white rounded-[22px] border-2 border-black overflow-hidden flex flex-col md:flex-row h-full transition-all duration-300 hover:shadow-2xl hover:-translate-y-1.5 group">
      <div className="w-full md:w-1/2 h-[180px] md:h-auto relative min-h-[160px] border-b-2 md:border-b-0 md:border-r-2 border-black overflow-hidden">
        <canvas ref={canvasRef} className="absolute inset-0 w-full h-full block" />
        <div className="absolute top-4 left-4 bg-black text-white text-[10px] uppercase font-bold tracking-widest px-3 py-1 rounded-full">
          PIXEL SYSTEM V1
        </div>
      </div>
      <div className="w-full md:w-1/2 p-6 flex flex-col justify-center bg-[#F0EBE3]">
        <div className="w-8 h-8 rounded-full bg-[#A855F7] text-white flex items-center justify-center font-bold mb-4">
          {artType === 'cap' ? '🎓' : '✦'}
        </div>
        <h3 className="font-display font-bold text-2xl text-black mb-2 group-hover:text-[#A855F7] transition-colors">{title}</h3>
        <p className="text-sm font-sans text-black/70 leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
