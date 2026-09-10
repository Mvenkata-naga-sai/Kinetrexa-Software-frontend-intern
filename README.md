# Kinetrexa Corporate Website

A modern, responsive multi-page corporate website for Kinetrexa, an independent strategy and design studio.

## Pages

- Home: `index.html`
- About: `about.html`
- Services: `services.html`
- Portfolio: `portfolio.html`
- Careers: `careers.html`
- Contact: `contact.html`

## Features

- Responsive layouts for mobile, tablet, and desktop
- Shared navigation and footer across all pages
- Light and dark theme toggle persisted with `localStorage`
- Scroll reveal transitions using the native Intersection Observer API
- Accessible labels, focus states, live form status, semantic sections, and page metadata
- Static contact form interaction with a clear integration point for Formspree, Netlify Forms, or an API
- No build step or runtime dependency required

## Run locally

Open `index.html` directly in a browser, or serve the folder with any static server. For example:

```bash
npx serve .
```

## Deploy

This project is ready for GitHub Pages, Netlify, Vercel static hosting, or any CDN that serves static files. For GitHub Pages:

1. Create a public repository and push the contents of this folder.
2. Open **Settings → Pages**.
3. Set the source to **Deploy from a branch**, choose `main`, and select `/ (root)`.
4. Save. GitHub will provide the live URL after the workflow finishes.

The current contact form is intentionally frontend-only. Connect the submit handler in `script.js` to your preferred form provider before production use.

## Design direction

The visual system uses a warm paper canvas, deep green ink, lime utility accents, and coral moments. Space Grotesk provides display character while DM Sans keeps body copy practical and readable.
