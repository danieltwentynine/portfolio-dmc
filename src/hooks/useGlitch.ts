import { useCallback, useEffect, useRef, useState } from "react";
import { usePrefersReducedMotion } from "./usePrefersReducedMotion";

export function useGlitch(duration = 400) {
  const [glitching, setGlitching] = useState(false);
  const timer = useRef<number | null>(null);
  const reducedMotion = usePrefersReducedMotion();

  const trigger = useCallback(() => {
    if (reducedMotion || timer.current !== null) return;
    setGlitching(true);
    timer.current = window.setTimeout(() => {
      setGlitching(false);
      timer.current = null;
    }, duration);
  }, [reducedMotion, duration]);

  useEffect(
    () => () => {
      if (timer.current !== null) window.clearTimeout(timer.current);
    },
    []
  );

  return { glitching, trigger };
}
