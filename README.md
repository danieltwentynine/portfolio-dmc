##Whatever Happens, Happens...

## Setup

```bash
npm install
npm run personal:init   # creates src/data/personal.local.json from the example
npm start
```

### Personal data

Contact details, employers, and the education record live in
`src/data/personal.local.json`, which is **gitignored** — it never reaches the repo.
`src/data/personal.example.json` is committed with placeholder values so a fresh
clone still builds. Everything else (roles, bullets, project copy) stays in
`src/i18n/translations.ts`.

`src/data/personal.ts` resolves the data in this order:

1. `src/data/personal.local.json` — local development
2. `VITE_PERSONAL_JSON` — a JSON string env var, for hosts that build from the repo
3. `src/data/personal.example.json` — placeholders (dev logs a warning)

`personal.jobs` is matched **by index** to `translations.<lang>.jobs`, the same way
`PROJECT_META` is matched to `translations.<lang>.projects` — keep the arrays aligned.

### Deploying

Vercel builds from the repo, so the local file isn't there. Set the data as an env var:

```bash
npm run personal:env    # prints the one-line JSON to paste
```

Add it in Vercel as `VITE_PERSONAL_JSON` for the Production and Preview
environments. Without it, the deployed site renders the placeholders.

> Note: this is a static site — whatever renders ends up in the JS bundle. This keeps
> personal data out of the **public repo** (history, forks, scrapers); it is still
> visible to anyone reading the deployed page.
