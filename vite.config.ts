import { defineConfig, loadEnv, Plugin } from "vite";
import react from "@vitejs/plugin-react";
import { existsSync, readFileSync } from "node:fs";
import { resolve } from "node:path";

// index.html is static and cannot import src/data/personal.ts, so the few personal
// values that must reach crawlers are substituted here using the same precedence:
// gitignored local file → VITE_PERSONAL_JSON → committed placeholders.
function resolvePersonal(env: Record<string, string>) {
  const local = resolve(process.cwd(), "src/data/personal.local.json");
  if (existsSync(local)) return JSON.parse(readFileSync(local, "utf8"));

  if (env.VITE_PERSONAL_JSON) {
    try {
      return JSON.parse(env.VITE_PERSONAL_JSON);
    } catch {
      console.warn("[personal] VITE_PERSONAL_JSON is not valid JSON — using placeholders.");
    }
  }

  return JSON.parse(readFileSync(resolve(process.cwd(), "src/data/personal.example.json"), "utf8"));
}

function personalHtml(env: Record<string, string>): Plugin {
  return {
    name: "personal-html",
    transformIndexHtml(html) {
      const personal = resolvePersonal(env);
      return html.replace(/\{\{X_HANDLE\}\}/g, personal.contact.xHandle);
    },
  };
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "VITE_");
  return {
    plugins: [react(), personalHtml(env)],
  };
});
