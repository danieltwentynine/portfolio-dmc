import { useEffect, useRef, useState } from "react";
import { Disc3, Pause } from "lucide-react";
import {
  introState,
  JAZZ_PULSE_EVENT,
  JAZZ_PULSE_WINDOW_MS,
} from "../IntroSequence/introState";
import { ToggleButton } from "./styles";

const AUDIO_SRC = "/audio/lofi-jazz.mp3";

function AudioToggle() {
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const toggle = async () => {
    if (!audioRef.current) {
      const audio = new Audio(AUDIO_SRC);
      audio.loop = true;
      audio.volume = 0.4;
      audioRef.current = audio;
    }
    const audio = audioRef.current;

    if (playing) {
      audio.pause();
      setPlaying(false);
      return;
    }

    try {
      await audio.play();
      setPlaying(true);
      if (
        introState.endedAt !== null &&
        Date.now() - introState.endedAt < JAZZ_PULSE_WINDOW_MS
      ) {
        window.dispatchEvent(new Event(JAZZ_PULSE_EVENT));
      }
    } catch {
      // audio file missing or playback blocked — fail silently
    }
  };

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
      aria-label={playing ? "Pause lofi jazz" : "Play lofi jazz"}
      title={playing ? "Pause lofi jazz" : "Play lofi jazz"}
    >
      {playing ? <Pause size={16} /> : <Disc3 size={16} />}
    </ToggleButton>
  );
}

export default AudioToggle;
