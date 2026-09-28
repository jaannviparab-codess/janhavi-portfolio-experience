# Janhavi Prashant Parab — Portfolio

A personal portfolio website for Janhavi Prashant Parab — AI Automation Specialist, Python developer and B.Sc. IT graduate. Built as a single-page site with smooth scroll navigation, a dark navy theme with blue/teal accents, and subtle scroll/entrance animations.

**Live demo:** _add your Vercel URL here after deploying_

## Overview

This is a standalone React + Vite project. It has no backend — all content lives in one data file, and the contact form opens the visitor's email client (no server required).

## Features

- Single-page layout with 10 sections: Hero, About, Experience, Skills, Projects, Job Simulations, Education, Certification, Contact, Footer
- Sticky navbar with scroll-spy active-link highlighting and a mobile hamburger menu
- Featured project card (AI Nivaran) and a secondary project card (Automated Wheelchair)
- Scroll-reveal and entrance animations, respecting `prefers-reduced-motion`
- Fully responsive from 375px phones up to 1920px desktops, no horizontal scroll
- Resume download button wired to a real PDF in `public/resume/`
- Accessible: semantic HTML, skip-to-content link, visible focus states, aria-labels on icon buttons

## Technologies

- [React 19](https://react.dev/)
- [Vite 6](https://vitejs.dev/)
- Plain CSS (CSS variables for theming, no CSS framework)
- No icon library or animation library — icons are hand-written inline SVG, animations are CSS + a small `IntersectionObserver` hook

## Project Structure

```
jpp/
├── public/
│   ├── favicon.svg
│   └── resume/
│       └── Janhavi_Prashant_Parab_Resume.pdf   ← replace this to update the downloadable resume
├── src/
│   ├── components/       # small reusable pieces (icons, cards, buttons, Reveal wrapper)
│   ├── sections/          # one file per page section (Navbar, Hero, About, ...)
│   ├── hooks/              # useReveal (scroll animations), useActiveSection (nav highlighting)
│   ├── data/
│   │   └── profile.js     # ALL editable content lives here — see below
│   ├── styles/
│   │   └── index.css       # design tokens (colors, spacing) + global styles
│   ├── App.jsx
│   └── main.jsx
├── index.html               # page title + SEO/Open Graph meta tags
└── package.json
```

## Local Setup

Requires [Node.js](https://nodejs.org/) 18 or later.

```bash
npm install
npm run dev
```

Open the URL printed in the terminal (usually `http://localhost:5173`).

## Other Commands

```bash
npm run build      # production build, output goes to dist/
npm run preview    # preview the production build locally
npm run lint        # check code style with ESLint
```

## Updating Content

Almost everything on the page is driven by **[`src/data/profile.js`](src/data/profile.js)** — edit that one file to update:

- Name, headline, contact details, GitHub/LinkedIn links
- About paragraph and highlight chips
- Experience bullets
- Skills categories
- Projects (description, features, tech tags, links)
- Job simulations, education, certification

You generally don't need to touch any component file just to update text or links.

### Replacing the Resume PDF

1. Put your updated resume PDF in `public/resume/`.
2. Name it `Janhavi_Prashant_Parab_Resume.pdf` (or update `resumeUrl` in `src/data/profile.js` to match a different filename).

### Adding a LinkedIn Link

`personal.linkedin` in `src/data/profile.js` is currently `null` because no LinkedIn URL was available. Set it to a real URL and the navbar, hero, contact and footer will all automatically show a LinkedIn button — no other code changes needed.

### Connecting the Contact Form to a Real Email Service

Right now, submitting the contact form (`src/sections/Contact.jsx`) opens the visitor's email client with the message pre-filled — it works with zero setup, but it's not automatic. To send messages without the visitor needing an email client, replace the `handleSubmit` function in that file with a request to a form backend such as [Formspree](https://formspree.io/), [EmailJS](https://www.emailjs.com/), or your own API route. The form fields (name/email/message) won't need to change.

## Deploying to Vercel

1. Create a new GitHub repository and push this project to it:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio commit"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<your-repo>.git
   git push -u origin main
   ```
2. Go to [vercel.com](https://vercel.com/) and click **Add New → Project**.
3. Import the GitHub repository you just pushed.
4. Vercel auto-detects the **Vite** framework preset — no configuration changes are needed (build command `npm run build`, output directory `dist`).
5. Click **Deploy**.
6. Once deployed, open the production URL Vercel gives you and click through every nav link, the resume download, and the project links to confirm everything works in production.

## Known follow-ups

- The GitHub link for the AI Nivaran project (`github.com/jaannviparab-codess/ai-nivaran`) currently returns a 404 — the repository appears to be private or not yet pushed. Make it public before sharing this portfolio with recruiters.
- `index.html` references `/og-image.png` for social share previews (Open Graph/Twitter cards) — add a 1200×630 image at `public/og-image.png` to enable rich link previews on LinkedIn/Twitter/etc. The site works fully without it; this only affects how a shared link looks on social media.
