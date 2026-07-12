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
private/
└── cv/                     # Local PDF only (gitignored) — use Vercel Blob in production
```

## Updating Your Resume

Edit `src/data/resumeData.ts` — all content is centralized there. Components read from this file automatically.

### Secure CV storage (not on GitHub or public web)

Your resume PDF is **never committed to git** and **never served from a public URL**. It lives in:

| Environment | Where the PDF lives |
|-------------|----------------------|
| **Production (Vercel)** | [Vercel Blob](https://vercel.com/docs/vercel-blob/private-storage) **private** store — encrypted, auth-only access |
| **Local dev** | `private/cv/nicholas-kyte-network-engineer.pdf` on your machine only (gitignored) |

#### One-time setup on Vercel

1. **Create a private Blob store**
   - Vercel Dashboard → your project → **Storage** → **Create Database/Store** → **Blob** → choose **Private**

2. **Upload your PDF** (from your computer, not from GitHub):
   ```bash
   cp .env.example .env.local
   # Add BLOB_READ_WRITE_TOKEN from Vercel → Storage → your store → .env.local tab
   # Place your PDF at private/cv/nicholas-kyte-network-engineer.pdf
   npm run upload-cv
   ```

3. **Set environment variables** in Vercel → **Settings** → **Environment Variables**:

   | Variable | Value |
   |----------|-------|
   | `CV_DOWNLOAD_PASSWORD` | Password you share with recruiters |
   | `CV_BLOB_PATHNAME` | Printed by upload script (e.g. `cv/nicholas-kyte-network-engineer.pdf`) |
   | `BLOB_READ_WRITE_TOKEN` | Auto-linked if store is connected to project; otherwise copy from store settings |

4. **Redeploy** production after saving variables.

#### Password-protected download flow

Visitors click **Download CV** → enter password → your API route verifies it → fetches the PDF from private Blob storage → streams the file. No direct link exists.

Share `CV_DOWNLOAD_PASSWORD` privately with recruiters you trust.

#### Local development

```bash
cp .env.example .env.local
# Set CV_DOWNLOAD_PASSWORD=your-password
# Place PDF at private/cv/nicholas-kyte-network-engineer.pdf
npm run dev
```

(Omit `CV_BLOB_PATHNAME` locally to read from the gitignored file on disk.)

## Build & Deploy

```bash
# Production build
npm run build

# Start production server
npm start
```

### Vercel

Push to GitHub and import the repo in [Vercel](https://vercel.com). Complete the **Secure CV storage** steps above (private Blob + env vars).

### Docker (self-hosted / home server)

Place the PDF at `private/cv/nicholas-kyte-network-engineer.pdf` on the host before building, or mount it as a volume.

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
