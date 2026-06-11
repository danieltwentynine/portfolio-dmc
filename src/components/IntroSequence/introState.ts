// Shared between IntroSequence and AudioToggle: if the user hits play within
// 3s of the intro ending, the "Jazz." text gets a celebratory pulse.
export const introState = {
  endedAt: null as number | null,
};

export const JAZZ_PULSE_EVENT = "bebop-jazz-pulse";
export const JAZZ_PULSE_WINDOW_MS = 3000;
