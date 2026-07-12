# Nicholas Kyte — Personal Website

A professional, minimalist personal website and digital resume built with Next.js, TypeScript, and Tailwind CSS.

## Tech Stack

- **Framework:** Next.js (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Icons:** Lucide React
- **Animations:** Framer Motion
- **Theming:** next-themes (dark/light mode)

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx          # Root layout (nav, footer, theme)
│   ├── page.tsx            # Resume / home page
│   ├── portfolio/          # Coming soon
│   ├── education/          # Coming soon
│   ├── projects/           # Coming soon
│   ├── github/             # Coming soon
│   └── blog/               # Coming soon
├── components/
│   ├── layout/             # Navbar, Footer, ThemeToggle
│   ├── resume/             # Hero, Experience, Skills, Contact
│   └── ui/                 # SectionHeading, ComingSoon
├── data/
│   └── resumeData.ts       # All resume content (edit this!)
├── lib/
│   └── navigation.ts       # Nav link configuration
└── types/
    └── resume.ts           # TypeScript interfaces
public/
└── cv/                     # Downloadable resume PDF
```

## Updating Your Resume

Edit `src/data/resumeData.ts` — all content is centralized there. Components read from this file automatically.

Replace placeholder email, GitHub username, and experience entries with your real details. Drop an updated PDF into `private/cv/`.

### Password-protected CV download

The resume PDF is **not** in `public/` (so it cannot be accessed directly). Visitors must enter a password to download it.

1. Copy `.env.example` to `.env.local` for local development:
   ```bash
   cp .env.example .env.local
   ```
2. Set `CV_DOWNLOAD_PASSWORD` to your chosen password in `.env.local`.
3. On **Vercel**: Project → **Settings** → **Environment Variables** → add:
   - **Name:** `CV_DOWNLOAD_PASSWORD`
   - **Value:** your password
   - **Environments:** Production (and Preview if you want)
4. **Redeploy** after adding the variable (Vercel → Deployments → Redeploy).

Share the password privately with recruiters or contacts you trust.

## Build & Deploy

```bash
# Production build
npm run build

# Start production server
npm start
```

### Vercel

Push to GitHub and import the repo in [Vercel](https://vercel.com). Set `CV_DOWNLOAD_PASSWORD` in Environment Variables (see above).

### Docker (self-hosted / home server)

```bash
# Build and run with Docker Compose (set password in .env or shell)
npm run docker:build
CV_DOWNLOAD_PASSWORD=your-password npm run docker:up

# Stop containers
npm run docker:down
```

The site listens on port `3000` by default. Override with `PORT=8080 docker compose up -d`.

### Cloudflare Tunnel

Run the Docker container (or `npm start`) on your home PC, then point a Cloudflare Tunnel at `localhost:3000`. No hardcoded URLs are used in the app.

## Roadmap

- [ ] Blog (MDX or headless CMS)
- [ ] GitHub repo library (GitHub API)
- [ ] Portfolio showcase
- [ ] Education page
- [ ] Pet projects page
