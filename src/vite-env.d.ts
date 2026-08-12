/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_EMAILJS_SERVICE_ID: string;
  readonly VITE_EMAILJS_TEMPLATE_ID: string;
  readonly VITE_EMAILJS_PUBLIC_KEY: string;
  /** Personal data as a JSON string; used on hosts that build from the repo. */
  readonly VITE_PERSONAL_JSON?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
