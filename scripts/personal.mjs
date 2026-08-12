// Helpers for the gitignored personal data file. See README.
import { copyFileSync, existsSync, readFileSync } from "node:fs";
import { resolve } from "node:path";

const EXAMPLE = resolve("src/data/personal.example.json");
const LOCAL = resolve("src/data/personal.local.json");

switch (process.argv[2]) {
  case "init": {
    if (existsSync(LOCAL)) {
      console.log("src/data/personal.local.json already exists — left untouched.");
    } else {
      copyFileSync(EXAMPLE, LOCAL);
      console.log("Created src/data/personal.local.json — fill in your real details.");
    }
    break;
  }
  case "env": {
    if (!existsSync(LOCAL)) {
      console.error("src/data/personal.local.json not found. Run `npm run personal:init` first.");
      process.exit(1);
    }
    // Single-line JSON to paste as the VITE_PERSONAL_JSON value in the host's env settings.
    console.log(JSON.stringify(JSON.parse(readFileSync(LOCAL, "utf8"))));
    break;
  }
  default:
    console.error("Usage: node scripts/personal.mjs <init|env>");
    process.exit(1);
}
