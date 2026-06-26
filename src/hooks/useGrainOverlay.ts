import { useEffect } from "react";
import { usePrefersReducedMotion } from "./usePrefersReducedMotion";

const GRAIN_INTERVAL_MS = 50;

export function useGrainOverlay() {
  const reducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    const canvas = document.getElementById("grain") as HTMLCanvasElement | null;
    if (!canvas) return;

    if (reducedMotion) {
      canvas.style.display = "none";
      return;
    }

    canvas.style.display = "";
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const renderGrain = () => {
      const imageData = ctx.createImageData(canvas.width, canvas.height);
      for (let i = 0; i < imageData.data.length; i += 4) {
        const value = (Math.random() * 255) | 0;
        imageData.data[i] = value;
        imageData.data[i + 1] = value;
        imageData.data[i + 2] = value;
        imageData.data[i + 3] = 255;
      }
      ctx.putImageData(imageData, 0, 0);
    };

    resize();
    window.addEventListener("resize", resize);
    const intervalId = window.setInterval(renderGrain, GRAIN_INTERVAL_MS);

    return () => {
      window.removeEventListener("resize", resize);
      window.clearInterval(intervalId);
    };
  }, [reducedMotion]);
}
