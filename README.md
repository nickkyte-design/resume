# Nick Kyte — Portfolio

A single-page web portfolio built with plain HTML, CSS, and JavaScript. No build tools, no dependencies.

## Structure

```
index.html   — markup and content
style.css    — all styles (design tokens, layout, components, responsive)
script.js    — scroll reveal, active nav, mobile menu, footer year
favicon.svg  — monogram favicon
```

## Running locally

Open `index.html` directly in a browser, or serve with any static file server:

```bash
# Python 3
python -m http.server 8080

# Node (npx)
npx serve .
```

## Deploying to GitHub Pages

1. Go to **Settings → Pages** in this repository.
2. Under **Source**, select the branch (`main`) and folder (`/ (root)`).
3. Click **Save** — the site will be published at `https://nickkyte-design.github.io/resume/`.
