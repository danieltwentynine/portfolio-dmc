import { useEffect, useRef } from "react";
import { usePrefersReducedMotion } from "../../hooks/usePrefersReducedMotion";

type Particle = {
  x: number;
  y: number;
  radius: number;
  bornAt: number;
  vx: number;
  vy: number;
};

const LIFETIME_MS = 600;
const MAX_PARTICLES = 80;

function ParticleTrail() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const reducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (reducedMotion) return;
    // skip on touch devices — no persistent pointer to trail
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let particles: Particle[] = [];
    let rafId = 0;
    let running = false;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const loop = () => {
      const now = performance.now();
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
      particles = particles.filter((p) => now - p.bornAt < LIFETIME_MS);

      for (const p of particles) {
        const t = (now - p.bornAt) / LIFETIME_MS; // 0 → 1
        p.x += p.vx;
        p.y += p.vy;
        const alpha = 0.35 * (1 - t);
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius * (1 - t * 0.5), 0, Math.PI * 2);
        ctx.fillStyle = `rgba(232, 80, 26, ${alpha})`;
        ctx.fill();
      }

      if (particles.length > 0) {
        rafId = requestAnimationFrame(loop);
      } else {
        running = false;
        ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
      }
    };

    const onMove = (e: MouseEvent) => {
      if (particles.length >= MAX_PARTICLES) return;
      particles.push({
        x: e.clientX + (Math.random() - 0.5) * 6,
        y: e.clientY + (Math.random() - 0.5) * 6,
        radius: 1.5 + Math.random() * 1, // 3–5px diameter
        bornAt: performance.now(),
        vx: (Math.random() - 0.5) * 0.6,
        vy: (Math.random() - 0.5) * 0.6 + 0.2,
      });
      if (!running) {
        running = true;
        rafId = requestAnimationFrame(loop);
      }
    };

    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", onMove, { passive: true });

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
    };
  }, [reducedMotion]);

  if (reducedMotion) return null;

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position: "fixed",
        inset: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: 9996,
      }}
    />
  );
}

export default ParticleTrail;
