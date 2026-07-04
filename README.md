# Amogh Sharma Portfolio

Professional frontend portfolio for Amogh Sharma, a Computer Science Engineering student at PES University and Software Engineer Intern at SatSure. The site highlights AI systems, data engineering, blockchain, computer vision, hackathon wins, and selected projects from the resume.

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
| 3D | Three.js, React Three Fiber, Drei |
| Visual Effects | Canvas particles, Cobe globe, draggable cards |
| Contact | Frontend-only `mailto:` routing |
| Deployment | Vercel-ready static frontend |

## Features

- Animated 3D hero section with responsive desktop and mobile framing.
- Sticky glass navigation with mobile drawer.
- Resume download from `public/assets/Amogh_Sharma_Resume.pdf`.
- Frontend-only contact form that opens an email draft to `amoghrules20@gmail.com`.
- Filterable selected projects section.
- Satsure internship section with dbt, Airflow, Spark, and Databricks pipeline work.
- Dedicated blockchain project: Missile Command Logging System using Solidity, Python, blockchain audit trails, and ML-based validation.
- Hackathon, datathon, CTF, and MUN achievement band.
- Responsive design verified for desktop and mobile.

## Project Structure

```text
public/
  assets/
    Amogh_Sharma_Resume.pdf
    projects/
    logos/
  models/
    tenhun_falling_spaceman_fanart.glb
src/
  components/       Reusable UI, 3D, animation, modal, and visual components
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

Build passes. Lint has no errors; the remaining warnings come from existing animation helpers in the particles and globe components.

## Links

- GitHub: https://github.com/Chunnu-Munnu
- LinkedIn: https://www.linkedin.com/in/amogh-sharma-76ba49253/
- Email: amoghrules20@gmail.com
