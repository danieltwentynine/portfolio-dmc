import { useEffect, useRef } from "react";
import { usePrefersReducedMotion } from "../../hooks/usePrefersReducedMotion";
import { ART_ROWS, ART_TONES, ART_COLS } from "./swordfishArt";

// tone -> paint role; alphas tuned so the art sits behind the hero content
const TONE_ALPHA: Record<string, number> = { "1": 0.1, "2": 0.34, "3": 0.42 };
const CHAR_ASPECT = 0.6; // monospace glyph width/height
const MIN_CHAR_H = 6; // below this the art is unreadable; crop instead of shrinking
const SHIP_CENTER_X = 0.47; // keep the ship in frame when cropping horizontally
const EDGE_FADE = 0.12; // fraction of art size over which edges dissolve
const TWINKLE_COUNT = 140;
const SWAP_CHARS = "01<>/{}[]();:*+-=#$%&@_|\\~^.".split("");

type Twinkle = {
  row: number;
  col: number;
  speed: number;
  phase: number;
  char: string;
  swapAt: number;
};

function themeColors() {
  const style = getComputedStyle(document.documentElement);
  return {
    text: style.getPropertyValue("--color-text").trim() || "#f3efe7",
    red: style.getPropertyValue("--amber").trim() || "#e85a45",
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

    const rows = ART_ROWS.length;
    let colors = themeColors();
    let rafId = 0;
    let charW = 0;
    let charH = 0;
    let originX = 0;
    let originY = 0;
    let cropDamp = 1; // quieter when the art overflows small screens
    let twinkles: Twinkle[] = [];

    const toneColor = (tone: string) => (tone === "3" ? colors.red : colors.text);

    const edgeFade = (row: number, col: number) => {
      const fadeR = rows * EDGE_FADE;
      const fadeC = ART_COLS * EDGE_FADE;
      const f = Math.min(
        (row + 1) / fadeR,
        (rows - row) / fadeR,
        (col + 1) / fadeC,
        (ART_COLS - col) / fadeC,
        1
      );
      return f * f; // ease-in so the falloff reads smooth
    };

    const layout = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const w = parent.clientWidth;
      const h = parent.clientHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      charH = Math.max(Math.min(h / rows, w / (ART_COLS * CHAR_ASPECT)), MIN_CHAR_H);
      charW = charH * CHAR_ASPECT;
      const artW = ART_COLS * charW;
      const artH = rows * charH;
      // center; when cropped horizontally, keep the ship in view
      if (artW <= w) {
        originX = (w - artW) / 2;
        cropDamp = 1;
      } else {
        originX = Math.min(0, Math.max(w - artW, w / 2 - artW * SHIP_CENTER_X));
        cropDamp = 0.55;
      }
      originY = (h - artH) / 2;
    };

    const drawCell = (row: number, col: number, char: string, alpha: number) => {
      const tone = ART_TONES[row][col];
      if (tone === "0") return;
      const x = originX + col * charW;
      const y = originY + row * charH;
      if (x < -charW || x > canvas.clientWidth) return;
      ctx.globalAlpha = alpha * cropDamp * edgeFade(row, col);
      ctx.fillStyle = toneColor(tone);
      ctx.fillText(char, x, y);
    };

    const drawAll = () => {
      ctx.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight);
      ctx.font = `${charH}px 'Share Tech Mono', monospace`;
      ctx.textBaseline = "top";
      for (let r = 0; r < rows; r++) {
        const rowChars = ART_ROWS[r];
        const rowTones = ART_TONES[r];
        for (let c = 0; c < rowChars.length; c++) {
          const tone = rowTones[c];
          if (tone === "0") continue;
          drawCell(r, c, rowChars[c], TONE_ALPHA[tone]);
        }
      }
      ctx.globalAlpha = 1;
    };

    const seedTwinkles = () => {
      twinkles = [];
      let guard = 0;
      while (twinkles.length < TWINKLE_COUNT && guard++ < TWINKLE_COUNT * 40) {
        const row = Math.floor(Math.random() * rows);
        const col = Math.floor(Math.random() * ART_COLS);
        if (ART_TONES[row][col] === "0") continue;
        twinkles.push({
          row,
          col,
          speed: 0.4 + Math.random() * 1.2,
          phase: Math.random() * Math.PI * 2,
          char: ART_ROWS[row][col],
          swapAt: 2000 + Math.random() * 8000,
        });
      }
    };

    const animate = (time: number) => {
      ctx.font = `${charH}px 'Share Tech Mono', monospace`;
      ctx.textBaseline = "top";
      for (const t of twinkles) {
        if (time > t.swapAt) {
          // brief glyph swap, then settle back to the artwork's character
          t.char =
            t.char === ART_ROWS[t.row][t.col]
              ? SWAP_CHARS[Math.floor(Math.random() * SWAP_CHARS.length)]
              : ART_ROWS[t.row][t.col];
          t.swapAt = time + 1500 + Math.random() * 8000;
        }
        const base = TONE_ALPHA[ART_TONES[t.row][t.col]];
        const flicker = 0.45 + 0.55 * Math.sin(time * 0.001 * t.speed + t.phase);
        ctx.clearRect(originX + t.col * charW, originY + t.row * charH, charW, charH);
        drawCell(t.row, t.col, t.char, base * flicker);
      }
      ctx.globalAlpha = 1;
      rafId = requestAnimationFrame(animate);
    };

    const render = () => {
      layout();
      drawAll();
    };

    render();
    if (!reducedMotion) {
      seedTwinkles();
      rafId = requestAnimationFrame(animate);
    }

    const onResize = () => {
      render();
      if (!reducedMotion) seedTwinkles();
    };
    window.addEventListener("resize", onResize);

    // re-read accent colors when the theme attribute flips
    const observer = new MutationObserver(() => {
      colors = themeColors();
      drawAll();
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
