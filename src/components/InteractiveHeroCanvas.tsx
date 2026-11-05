import React, { useEffect, useRef } from 'react';

export const InteractiveHeroCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };

    window.addEventListener('resize', handleResize);

    // Particle nodes for technical constellation
    const particleCount = 42;
    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      color: string;
      alpha: number;
    }> = [];

    const colors = ['#9B7CFF', '#55D6E8', '#FFFFFF', '#6E45E2'];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.7,
        vy: (Math.random() - 0.5) * 0.7,
        radius: Math.random() * 2 + 1,
        color: colors[Math.floor(Math.random() * colors.length)],
        alpha: Math.random() * 0.6 + 0.2,
      });
    }

    let angle = 0;
    let mouseX = width / 2;
    let mouseY = height / 2;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    };

    canvas.addEventListener('mousemove', handleMouseMove);

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Center coords
      const cx = width / 2;
      const cy = height / 2;

      // Draw subtle orbital rings representing digital computing architecture
      angle += 0.008;

      ctx.save();
      ctx.translate(cx, cy);

      // Ring 1 - Cyan ellipse
      ctx.beginPath();
      ctx.ellipse(0, 0, 160, 80, angle, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(85, 214, 232, 0.22)';
      ctx.lineWidth = 1.5;
      ctx.setLineDash([8, 12]);
      ctx.stroke();

      // Ring 2 - Violet ellipse
      ctx.beginPath();
      ctx.ellipse(0, 0, 140, 100, -angle * 1.3, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(155, 124, 255, 0.28)';
      ctx.lineWidth = 1.2;
      ctx.setLineDash([4, 8]);
      ctx.stroke();

      // Ring 3 - Outer ambient glow ring
      ctx.beginPath();
      ctx.ellipse(0, 0, 190, 190, angle * 0.5, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.05)';
      ctx.lineWidth = 1;
      ctx.setLineDash([]);
      ctx.stroke();

      ctx.restore();

      // Draw connecting lines between nearby particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 110) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(155, 124, 255, ${0.18 * (1 - dist / 110)})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      // Update & draw particles
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        // Bounce on edges
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        // Mouse gentle push
        const mdx = p.x - mouseX;
        const mdy = p.y - mouseY;
        const mdist = Math.sqrt(mdx * mdx + mdy * mdy);
        if (mdist < 80) {
          p.x += (mdx / mdist) * 1.2;
          p.y += (mdy / mdist) * 1.2;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.alpha;
        ctx.fill();
        ctx.globalAlpha = 1;
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      canvas.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="relative w-full aspect-square max-w-[480px] mx-auto flex items-center justify-center">
      {/* Ambient background glows */}
      <div className="absolute inset-0 bg-gradient-to-tr from-[#9B7CFF]/15 via-transparent to-[#55D6E8]/15 rounded-3xl blur-2xl pointer-events-none" />
      
      {/* HTML5 Interactive Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full cursor-crosshair rounded-3xl"
      />

      {/* Center 3D-inspired GS monogram core */}
      <div className="relative z-10 w-44 h-44 rounded-2xl glass-panel flex flex-col items-center justify-center p-6 border border-[#9B7CFF]/30 shadow-[0_0_50px_-10px_rgba(155,124,255,0.35)] backdrop-blur-xl group hover:border-[#55D6E8]/50 transition-all duration-500">
        {/* Core glowing ring */}
        <div className="absolute inset-2 rounded-xl border border-white/10 group-hover:border-[#55D6E8]/30 transition-colors pointer-events-none" />
        
        {/* Decorative corner markers */}
        <div className="absolute top-2 left-2 w-2 h-2 border-t-2 border-l-2 border-[#55D6E8]" />
        <div className="absolute top-2 right-2 w-2 h-2 border-t-2 border-r-2 border-[#9B7CFF]" />
        <div className="absolute bottom-2 left-2 w-2 h-2 border-b-2 border-l-2 border-[#9B7CFF]" />
        <div className="absolute bottom-2 right-2 w-2 h-2 border-b-2 border-r-2 border-[#55D6E8]" />

        {/* Monogram Initials */}
        <span className="font-heading font-extrabold text-5xl tracking-wider text-transparent bg-clip-text bg-gradient-to-br from-white via-[#9B7CFF] to-[#55D6E8] select-none">
          GS
        </span>
        <span className="text-[11px] font-mono tracking-widest text-[#55D6E8] uppercase mt-2">
          SRIJA.DEV
        </span>

        {/* Binary / Hex subtle decoration */}
        <div className="text-[9px] font-mono text-zinc-500 mt-1 flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping inline-block" />
          <span>CSE @ 2027</span>
        </div>
      </div>

      {/* Floating technical badges with micro-animations */}
      <div className="absolute -top-3 -left-2 glass-pill px-3 py-1.5 rounded-xl text-xs font-mono text-zinc-300 flex items-center gap-2 border border-[#9B7CFF]/30 shadow-lg animate-float-slow">
        <span className="w-2 h-2 rounded-full bg-[#9B7CFF]" />
        <span>Gemini AI & ML</span>
      </div>

      <div 
        className="absolute -bottom-4 right-2 glass-pill px-3 py-1.5 rounded-xl text-xs font-mono text-zinc-300 flex items-center gap-2 border border-[#55D6E8]/30 shadow-lg animate-float-slow"
        style={{ animationDelay: '2s' }}
      >
        <span className="w-2 h-2 rounded-full bg-[#55D6E8]" />
        <span>Full-Stack Engineering</span>
      </div>

      <div 
        className="absolute top-1/2 -right-4 -translate-y-1/2 glass-pill px-2.5 py-1 rounded-lg text-[11px] font-mono text-zinc-400 border border-white/10 hidden sm:flex items-center gap-1.5"
        style={{ animationDelay: '3.5s' }}
      >
        <span className="text-[#55D6E8]">8.58</span>
        <span>CGPA</span>
      </div>
    </div>
  );
};
