import { useEffect, useRef } from "react";
import { usePrefersReducedMotion } from "../../hooks/usePrefersReducedMotion";

type Glyph = {
  x: number;
  y: number;
  char: string;
  size: number;
  baseAlpha: number;
  flickerSpeed: number;
  flickerPhase: number;
  driftY: number;
  accent: "none" | "red" | "blue";
  swapAt: number;
};

const GLYPH_COUNT = 90;
const CHARS = "01<>/{}[]();:*+-=#$%&@_|\\~^.".split("");

function randomChar() {
  return CHARS[Math.floor(Math.random() * CHARS.length)];
}

function themeColors() {
  const style = getComputedStyle(document.documentElement);
  return {
    base: style.getPropertyValue("--text-muted").trim() || "rgba(243,239,231,0.28)",
    red: style.getPropertyValue("--amber").trim() || "#e85a45",
    blue: style.getPropertyValue("--teal").trim() || "#7fb3d1",
  };
}

function AsciiField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const reducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let glyphs: Glyph[] = [];
    let width = 0;
    let height = 0;
    let rafId = 0;
    let colors = themeColors();

    const resize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = parent.clientWidth;
      height = parent.clientHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const seed = () => {
      glyphs = Array.from({ length: GLYPH_COUNT }, () => {
        const roll = Math.random();
        return {
          x: Math.random() * width,
          y: Math.random() * height,
          char: randomChar(),
          size: 9 + Math.random() * 6,
          baseAlpha: 0.25 + Math.random() * 0.5,
          flickerSpeed: 0.3 + Math.random() * 1.4,
          flickerPhase: Math.random() * Math.PI * 2,
          driftY: 0.05 + Math.random() * 0.18,
          accent: roll < 0.08 ? "red" : roll < 0.16 ? "blue" : "none",
          swapAt: Math.random() * 6000,
        };
      });
    };

    const draw = (time: number) => {
      ctx.clearRect(0, 0, width, height);
      for (const g of glyphs) {
        if (!reducedMotion) {
          g.y += g.driftY;
          if (g.y > height + 10) {
            g.y = -10;
            g.x = Math.random() * width;
          }
          if (time > g.swapAt) {
            g.char = randomChar();
            g.swapAt = time + 1500 + Math.random() * 6000;
          }
        }
        const flicker = reducedMotion
          ? 1
          : 0.55 + 0.45 * Math.sin(time * 0.001 * g.flickerSpeed + g.flickerPhase);
        const color =
          g.accent === "red" ? colors.red : g.accent === "blue" ? colors.blue : colors.base;
        ctx.font = `${g.size}px 'Share Tech Mono', monospace`;
        ctx.globalAlpha = g.baseAlpha * flicker * (g.accent === "none" ? 1 : 0.7);
        ctx.fillStyle = color;
        ctx.fillText(g.char, g.x, g.y);
      }
      ctx.globalAlpha = 1;
    };

    const loop = (time: number) => {
      draw(time);
      rafId = requestAnimationFrame(loop);
    };

    resize();
    seed();

    if (reducedMotion) {
      draw(0);
    } else {
      rafId = requestAnimationFrame(loop);
    }

    const onResize = () => {
      resize();
      seed();
      if (reducedMotion) draw(0);
    };
    window.addEventListener("resize", onResize);

    // re-read accent colors when the theme attribute flips
    const observer = new MutationObserver(() => {
      colors = themeColors();
      if (reducedMotion) draw(0);
    });
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", onResize);
      observer.disconnect();
    };
  }, [reducedMotion]);

  return <canvas ref={canvasRef} className="hero-ascii-field" aria-hidden="true" />;
}

export default AsciiField;
