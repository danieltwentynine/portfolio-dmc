import { useEffect, useRef, useState, useCallback } from "react";
import { Disc3, Pause } from "lucide-react";
import { prefersReducedMotion } from "../../hooks/usePrefersReducedMotion";
import { useLanguage } from "../../context/LanguageContext";
import {
  introState,
  INTRO_DONE_MS,
  INTRO_STORAGE_KEY,
  JAZZ_PULSE_EVENT,
  JAZZ_PULSE_WINDOW_MS,
} from "../IntroSequence/introState";
import { ToggleButton } from "./styles";

const AUDIO_SRC = "/audio/jazz.mp3";
const VOLUME = 0.4;

function AudioToggle() {
  const { t } = useLanguage();
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const introWasSkippedOnLoad = useRef(
    prefersReducedMotion() || sessionStorage.getItem(INTRO_STORAGE_KEY) === "1"
  );

  const getAudio = useCallback(() => {
    if (!audioRef.current) {
      const audio = new Audio(AUDIO_SRC);
      audio.loop = true;
      audio.volume = VOLUME;
      audioRef.current = audio;
    }
    return audioRef.current;
  }, []);

  const tryPlay = useCallback(async () => {
    const audio = getAudio();
    try {
      await audio.play();
      setPlaying(true);
      if (
        introState.endedAt !== null &&
        Date.now() - introState.endedAt < JAZZ_PULSE_WINDOW_MS
      ) {
        window.dispatchEvent(new Event(JAZZ_PULSE_EVENT));
      }
      return true;
    } catch {
      return false;
    }
  }, [getAudio]);

  const toggle = async () => {
    const audio = getAudio();

    if (playing) {
      audio.pause();
      setPlaying(false);
      return;
    }

    await tryPlay();
  };

  useEffect(() => {
    if (prefersReducedMotion()) return;

    const delay = introWasSkippedOnLoad.current ? 0 : INTRO_DONE_MS;
    const timer = window.setTimeout(() => {
      void tryPlay();
    }, delay);

    const onInteraction = () => {
      void tryPlay();
    };
    document.addEventListener("pointerdown", onInteraction, { once: true });

    return () => {
      window.clearTimeout(timer);
      document.removeEventListener("pointerdown", onInteraction);
    };
  }, [tryPlay]);

  useEffect(
    () => () => {
      audioRef.current?.pause();
    },
    []
  );

  return (
    <ToggleButton
      type="button"
      onClick={toggle}
      className="cursor-target"
      aria-label={playing ? t.audio.pause : t.audio.play}
      title={playing ? t.audio.pause : t.audio.play}
    >
      {playing ? <Pause size={16} /> : <Disc3 size={16} />}
    </ToggleButton>
  );
}

export default AudioToggle;
