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

Replace placeholder email, GitHub username, and experience entries with your real details. Drop an updated PDF into `public/cv/`.

## Build & Deploy

```bash
# Production build
npm run build

# Start production server
npm start
```

### Vercel

Push to GitHub and import the repo in [Vercel](https://vercel.com). No environment variables are required for Phase 1.

### Docker (self-hosted / home server)

```bash
# Build and run with Docker Compose
npm run docker:build
npm run docker:up

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
