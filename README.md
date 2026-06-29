# Resume Website

A clean, minimal resume website built with HTML & CSS, ready to deploy on [Vercel](https://vercel.com).

## Project Structure

```
├── index.html          # Main resume page
├── styles/
│   └── main.css        # All styles (design tokens, layout, responsive)
├── vercel.json         # Vercel deployment configuration
└── README.md
```

## Deploying to Vercel

1. Push this repository to GitHub (already done).
2. Go to [vercel.com](https://vercel.com) → **Add New Project** → import this repo.
3. Vercel auto-detects a static site — no build command needed. Click **Deploy**.
4. Your resume will be live at `https://<project-name>.vercel.app`.

To use a custom domain, add it under **Project Settings → Domains** in the Vercel dashboard.

## Updating Content

All resume content is in `index.html`. Replace the placeholder text in each section:

- **Header** — name, title, contact links
- **Summary** — two-to-three sentence overview
- **Experience** — companies, dates, bullet points
- **Skills** — grouped skill lists
- **Education** — degree, institution, dates

## Local Preview

No build step required. Open `index.html` directly in a browser, or run a simple local server:

```bash
npx serve .
# → http://localhost:3000
```
