# AGENTS.md

## Cursor Cloud specific instructions

### Product overview

Single Next.js portfolio site (Pages Router). No backend, database, or Docker. All content is static/bundled from `data/*.js`.

### Services

| Service | Command | Port | Required? |
|---------|---------|------|-----------|
| Next.js dev server | `npm run dev` | 3000 | Yes (local development) |

Only one process is needed. Use a tmux session for long-running dev servers.

### Standard commands

See `package.json` scripts and `README.md`:

- **Install:** `npm install` (repo has `package-lock.json`; README mentions Yarn but either works)
- **Dev:** `npm run dev` → http://localhost:3000
- **Lint:** `npm run lint`
- **Build:** `npm run build`
- **Prod server:** `npm run start` (run after `npm run build`)

### Runtime requirements

- **Node.js:** >= 18.18 (Next.js 15 requirement). Node 20+ LTS recommended.
- **No environment variables** are required for local dev. PWA is disabled in dev (`next.config.js`).

### Gotchas

- `npm run build` regenerates `public/sw.js` (PWA service worker). Do not commit this file unless intentionally updating PWA assets.
- CI workflow (`.github/workflows/lint.yml`) still pins Node 14.x, which is incompatible with Next 15; local/Cloud Agent setup should use Node 18+.
- `next.config.js` logs a warning about unrecognized `pwa` key — harmless, from `next-pwa` integration.
- No automated tests are configured in this repo; verify changes manually in the browser (sections, i18n EN/PT toggle, theme toggle).
