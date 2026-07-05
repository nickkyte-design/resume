<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

## Cursor Cloud specific instructions

- This is a static, front-end-only Next.js 16 (App Router, Turbopack) app. There is no backend, database, or API, and no environment variables are required to run it.
- The runnable app lives on this feature branch; the `main` base branch only contains a `README.md` and the resume PDF. The startup update script guards on `package.json`/`package-lock.json`, so it is a no-op when run against `main`.
- Standard commands are documented in `README.md` and `package.json` scripts: `npm run dev` (dev server on port 3000), `npm run lint`, `npm run build`, `npm start`. The update script already runs `npm ci`, so dependencies are installed on startup.
- All resume content is centralized in `src/data/resumeData.ts` — edit there rather than in components.
- The `/portfolio`, `/education`, `/projects`, `/github`, and `/blog` routes are intentional "Coming Soon" placeholders, not bugs.
