# Amogh Sharma Portfolio

Professional frontend portfolio for Amogh Sharma, a Computer Science Engineering student at PES University, ex intern at SatSure, ex intern at Corizo.in, and YC Startup School India participant. The site highlights AI systems, data engineering, blockchain, computer vision, hackathon wins, and selected projects from the resume.

## Live Preview

Run locally:

```bash
npm install
npm run dev
```

The app runs at:

```text
http://localhost:5173
```

## Tech Stack

| Layer | Tools |
| --- | --- |
| Framework | React 19, Vite |
| Styling | Tailwind CSS v4, custom glass UI utilities |
| Animation | Motion for React |
| 3D | Three.js, React Three Fiber, Drei, desktop-only astronaut hero |
| Media | Optimized WebP photos from pitches, demos, hackathons, and MUN |
| Visual Effects | CSS gradients, hover states, contained cobe globe |
| Contact | Frontend-only `mailto:` routing |
| Deployment | Vercel-ready static frontend |

## Features

- Desktop astronaut hero using a scoped React Three Fiber scene.
- Lightweight mobile hero without loading the 3D scene.
- Sticky glass navigation with mobile drawer.
- Resume download from `public/assets/Amogh_Sharma_Resume.pdf`.
- Frontend-only contact form that opens an email draft to `amoghrules20@gmail.com`.
- Real moments gallery featuring pitches, trophies, demos, hackathons, and MUN recognition.
- Filterable selected projects section.
- Ex SatSure internship section with dbt, Airflow, Spark, and Databricks pipeline work.
- Ex Corizo.in internship and YC Startup School India experience.
- PAYSHIELD AI OPS includes JPMorgan Chase Technology Innovation Forum 2026 India context.
- Trinetra includes drone-assisted sensing and field demonstration work.
- Dedicated blockchain project: Missile Command Logging System using Solidity, Python, blockchain audit trails, and ML-based validation.
- Hackathon, datathon, CTF, and MUN achievement band.
- Responsive design verified for desktop and mobile.
- Performance pass completed by removing particle canvas, random hover previews, and unused animation clutter.
- Globe is kept as a contained card element instead of a full-page effect.
- Vercel security headers are configured in `vercel.json`.

## Project Structure

```text
public/
  assets/
    Amogh_Sharma_Resume.pdf
    amogh/
    projects/
    logos/
  models/
    tenhun_falling_spaceman_fanart.glb
src/
  components/       Reusable UI, animation, modal, and visual components
  constants/        Portfolio content, links, projects, skills, and achievements
  sections/         Page sections such as Hero, About, Projects, Experience, Contact
  App.jsx           Section composition
  index.css         Tailwind theme and custom design utilities
  main.jsx          React entry point
```

## Editing Content

Most portfolio content is centralized in:

```text
src/constants/index.js
```

Update this file to change:

- Name, email, GitHub, LinkedIn, resume path
- Navigation items
- Skill groups
- Featured projects
- Experience timeline
- Achievement cards
- Footer socials

## Contact Flow

There is no backend and no EmailJS dependency. The contact form creates a mail draft with:

```text
mailto:amoghrules20@gmail.com
```

This keeps the portfolio static, simple, and easy to deploy on Vercel.

## Deployment On Vercel

Use these settings:

```text
Framework Preset: Vite
Build Command: npm run build
Output Directory: dist
Install Command: npm install
```

The included `vercel.json` sets common hardening headers:

- Content Security Policy
- X-Frame-Options
- X-Content-Type-Options
- Referrer-Policy
- Permissions-Policy

## Scripts

```bash
npm run dev      # Start local dev server
npm run build    # Create production build
npm run preview  # Preview production build locally
npm run lint     # Run ESLint
```

## Verification

Current checks:

```bash
npm run build
npm run lint
```

Build passes. Lint has no errors.

## Links

- GitHub: https://github.com/Chunnu-Munnu
- LinkedIn: https://www.linkedin.com/in/amogh-sharma-76ba49253/
- Email: amoghrules20@gmail.com
