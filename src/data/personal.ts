import example from "./personal.example.json";
import { Language } from "../i18n/translations";

export type Localized = Record<Language, string>;

export interface ContactLink {
  /** Short uppercase key shown in the contact list (EMAIL, LINKEDIN, …). */
  k: string;
  label: string;
  href: string;
}

export interface PersonalData {
  contact: {
    email: string;
    /** Handle for the twitter:creator meta tag, injected into index.html at build time. */
    xHandle: string;
    links: ContactLink[];
  };
  /** Aligned by index with `translations.<lang>.jobs`. */
  jobs: { company: string; period: Localized }[];
  education: { institution: string; period: Localized };
}

// personal.local.json is gitignored, so it is absent on a fresh clone and on CI.
// import.meta.glob resolves to an empty object when the file is missing, where a
// plain import would break the build.
const localModules = import.meta.glob<{ default: PersonalData }>("./personal.local.json", {
  eager: true,
});

function fromLocalFile(): PersonalData | undefined {
  return Object.values(localModules)[0]?.default;
}

// Deploy targets (Vercel) build from the repo and have no local file, so they get
// the same object as a single VITE_PERSONAL_JSON env var. See `npm run personal:env`.
function fromEnv(): PersonalData | undefined {
  const raw = import.meta.env.VITE_PERSONAL_JSON;
  if (!raw) return undefined;
  try {
    return JSON.parse(raw) as PersonalData;
  } catch {
    console.error("[personal] VITE_PERSONAL_JSON is not valid JSON — ignoring it.");
    return undefined;
  }
}

const resolved = fromLocalFile() ?? fromEnv();

export const personal: PersonalData = resolved ?? (example as PersonalData);

if (import.meta.env.DEV && !resolved) {
  console.warn(
    "[personal] Rendering placeholder details. Run `npm run personal:init` and fill in src/data/personal.local.json."
  );
}
