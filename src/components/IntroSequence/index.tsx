import { useEffect, useState } from "react";
import { prefersReducedMotion } from "../../hooks/usePrefersReducedMotion";
import { introState, INTRO_STORAGE_KEY, JAZZ_PULSE_EVENT, JAZZ_PULSE_WINDOW_MS } from "./introState";
import { Overlay } from "./styles";

const STEPS = ["1", "2", "3", "Jazz."];

type Phase = "running" | "fading" | "linger" | "done";

function IntroSequence() {
  const [skipped] = useState(
    () => prefersReducedMotion() || sessionStorage.getItem(INTRO_STORAGE_KEY) === "1"
  );
  const [step, setStep] = useState(0);
  const [phase, setPhase] = useState<Phase>("running");
  const [pulsing, setPulsing] = useState(false);

  useEffect(() => {
    if (skipped) return;
    sessionStorage.setItem(INTRO_STORAGE_KEY, "1");

    const timers = [
      window.setTimeout(() => setStep(1), 400),
      window.setTimeout(() => setStep(2), 800),
      window.setTimeout(() => setStep(3), 1200),
      window.setTimeout(() => setPhase("fading"), 2100),
      window.setTimeout(() => {
        setPhase("linger");
        introState.endedAt = Date.now();
      }, 2600),
      window.setTimeout(
        () => setPhase("done"),
        2600 + JAZZ_PULSE_WINDOW_MS + 1200
      ),
    ];
    return () => timers.forEach(window.clearTimeout);
  }, [skipped]);

  useEffect(() => {
    const onPulse = () => {
      setPulsing(true);
      window.setTimeout(() => setPulsing(false), 1100);
    };
    window.addEventListener(JAZZ_PULSE_EVENT, onPulse);
    return () => window.removeEventListener(JAZZ_PULSE_EVENT, onPulse);
  }, []);

  if (skipped || phase === "done") return null;
  // after the fade the overlay sticks around invisibly for the pulse window
  if (phase === "linger" && !pulsing) return null;

  return (
    <Overlay
      className={
        phase === "fading" ? "fading" : phase === "linger" ? "linger" : undefined
      }
      aria-hidden="true"
    >
      {phase === "linger" ? (
        <span className="jazz pulse">Jazz.</span>
      ) : (
        <span key={step} className={step === 3 ? "jazz" : "digit"}>
          {STEPS[step]}
        </span>
      )}
    </Overlay>
  );
}

export default IntroSequence;
