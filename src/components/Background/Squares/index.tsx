import { useRef, useEffect } from "react";
import { SquareContainer } from "./styles";

const SPEED = 0.5;
const SQUARE_SIZE = 40;
const BORDER_COLOR = "rgba(128, 128, 140, 0.35)";

function Squares({ animated }: { animated: boolean }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let rafId = 0;
    const offset = { x: 0, y: 0 };

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    const drawGrid = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      ctx.strokeStyle = BORDER_COLOR;
      for (let x = -(offset.x % SQUARE_SIZE); x < canvas.width; x += SQUARE_SIZE) {
        for (let y = -(offset.y % SQUARE_SIZE); y < canvas.height; y += SQUARE_SIZE) {
          ctx.strokeRect(x, y, SQUARE_SIZE, SQUARE_SIZE);
        }
      }

      const gradient = ctx.createRadialGradient(
        canvas.width / 2,
        canvas.height / 2,
        0,
        canvas.width / 2,
        canvas.height / 2,
        Math.sqrt(canvas.width ** 2 + canvas.height ** 2) / 2
      );
      gradient.addColorStop(0, "rgba(0, 0, 0, 0)");
      gradient.addColorStop(1, "#060010");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    };

    const updateAnimation = () => {
      offset.x = (offset.x - SPEED + SQUARE_SIZE) % SQUARE_SIZE;
      offset.y = (offset.y - SPEED + SQUARE_SIZE) % SQUARE_SIZE;
      drawGrid();
      rafId = requestAnimationFrame(updateAnimation);
    };

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();

    if (animated) {
      rafId = requestAnimationFrame(updateAnimation);
    } else {
      drawGrid();
    }

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(rafId);
    };
  }, [animated]);

  return <SquareContainer ref={canvasRef} />;
}

export default Squares;
