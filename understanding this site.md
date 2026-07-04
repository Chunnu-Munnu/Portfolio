# Understanding This Site

## 1. What This Portfolio Is

This is a frontend-only personal portfolio for Amogh Sharma. It is built to present him as a technical builder with strong signals across AI systems, data engineering, blockchain, computer vision, drone-oriented work, hackathons, internships, and startup exposure.

The site does not use a backend, database, authentication system, or server-side contact API. It is meant to be deployed as a static Vite app on Vercel.

The current positioning is:

- Ex intern at SatSure.
- Ex intern at Corizo.in.
- YC Startup School India participant.
- PES University CSE student.
- Builder across AI, data pipelines, blockchain, computer vision, drones, OCR, risk intelligence, and full-stack systems.
- 15+ hackathon wins.
- JPMC Technology Innovation Forum 2026 India signal.

## 2. User Experience Review

The first screen is designed as a professional hero section. It has:

- A glass navigation bar.
- A strong headline: "Amogh Sharma builds..."
- Rotating focus words such as AI systems, data platforms, and secure products.
- Direct actions for projects, email contact, and resume.
- Metrics that emphasize external proof instead of CGPA.
- A desktop-only 3D astronaut scene on the right side.

The astronaut is intentionally scoped to desktop screens so mobile users do not pay the performance cost. On smaller screens, the hero remains clean and readable without the 3D scene.

The site then moves into:

- About section.
- Moments gallery with real photos.
- Projects section.
- Experience timeline.
- Wins/achievement marquee.
- Contact section.
- Footer links.

The site is meant to feel technical, polished, and credible, not like a generic student resume page.

## 3. Tech Stack

Core stack:

- React 19 for UI components.
- Vite for fast dev/build tooling.
- Tailwind CSS v4 for styling.
- Motion for React for animation and interaction.
- Three.js, React Three Fiber, and Drei for the astronaut hero.
- Cobe for the contained globe in the About section.
- Static WebP assets for real photos.

Deployment target:

- Vercel static frontend.

Contact strategy:

- `mailto:` only.
- No EmailJS.
- No backend.
- No exposed API keys.

## 4. Project Structure

Main folders:

```text
public/
  assets/
    amogh/                  Optimized real photos
    projects/               Project thumbnail fallbacks
    logos/                  Technology and social icons
    Amogh_Sharma_Resume.pdf Resume download
  models/
    tenhun_falling_spaceman_fanart.glb

src/
  components/               Reusable UI and visual components
  constants/                Portfolio data/content source
  sections/                 Page-level sections
  App.jsx                   Section composition
  index.css                 Tailwind and custom CSS
  main.jsx                  React entry
```

The most important content file is:

```text
src/constants/index.js
```

Most text, links, project details, experience items, achievement cards, social links, and media gallery entries are controlled there.

## 5. Major Sections

### Hero

Files:

```text
src/sections/Hero.jsx
src/components/HeroText.jsx
src/components/HeroAstronaut.jsx
src/components/Astronaut.jsx
```

The hero has the primary identity and call-to-action. `Hero.jsx` lazy-loads the 3D astronaut only on screens at least 1024px wide.

Why this matters:

- Desktop gets the visual impact of the 3D astronaut.
- Mobile stays lighter and smoother.
- The hero does not use random photos anymore, so the first viewport feels cleaner.

### About

File:

```text
src/sections/About.jsx
```

The About section explains the technical range, shows a clean engineering stack, restores the globe card, and provides direct email copy access.

The globe is contained inside one card so it does not dominate rendering or create layout instability.

### Moments

File:

```text
src/sections/Gallery.jsx
```

This section holds the real photos:

- JPMC Technology Innovation Forum 2026 India.
- Drone-based prototype.
- Pitch/demo room.
- Tech Solstice trophy.
- Vyuhatech stage.
- Mystara team.
- VisionX demo.
- MUN recognition.

The photos are optimized as WebP files under:

```text
public/assets/amogh/
```

Portrait photos use portrait-safe cards so faces and important context do not get cropped badly.

### Projects

Files:

```text
src/sections/Projects.jsx
src/components/Project.jsx
src/components/ProjectDetails.jsx
```

Projects are filterable by category. The old floating hover preview was removed because it caused random images to appear over the page. Now each project thumbnail is contained inside its row.

Important projects:

- PAYSHIELD AI OPS.
- Intelli-Credit.
- Missile Command Logging System.
- Questify-AI.
- PAML Ocular Disease Detection.
- Trinetra.

PAYSHIELD now includes JPMC Technology Innovation Forum 2026 India context.

Trinetra now includes drone-assisted sensing and field demonstration work.

### Experience

Files:

```text
src/sections/Experiences.jsx
src/components/Timeline.jsx
```

Experience currently includes:

- Ex Software Engineer Intern at SatSure.
- Ex Intern at Corizo.in.
- YC Startup School India.
- PES University CSE.
- Leadership and representation.

The CGPA is not highlighted. The site emphasizes projects, wins, technical work, and external proof instead.

### Contact

File:

```text
src/sections/Contact.jsx
```

The contact form builds a `mailto:` link. It does not send data through a backend. This is intentional for a static deployment.

Contact behavior:

- User fills name/email/message.
- The "Connect with me" link opens the user’s configured email app with a prefilled draft.
- If the user has no default mail app, the visible email address remains available.

## 6. Performance Review

The site was previously laggy because it had multiple expensive visual systems:

- Full WebGL astronaut.
- Globe canvas.
- Particle canvas.
- Floating project preview images.
- Draggable skill pile.
- Large 3D model always active.
- Extra animation packages and unused components.

Changes made:

- Removed particle canvas.
- Removed random floating project image previews.
- Removed draggable/orbit clutter.
- Optimized uploaded photos into small WebP files.
- Lazy-loaded the astronaut scene.
- Loaded the astronaut only on desktop.
- Kept the globe contained in a small card.
- Removed unused dependencies where possible.

Current build output is much lighter than the earlier version. The astronaut is still the heaviest piece, but it is isolated to desktop and lazy-loaded.

## 7. Security Review

This is a static frontend. The strongest security property is that there is no backend attack surface:

- No database.
- No auth.
- No admin panel.
- No server actions.
- No secret API keys.
- No EmailJS public service keys.

The site includes `vercel.json` with security headers:

- `Content-Security-Policy`
- `X-Frame-Options`
- `X-Content-Type-Options`
- `Referrer-Policy`
- `Permissions-Policy`

These headers reduce risk from:

- Clickjacking.
- MIME sniffing.
- Overbroad browser permissions.
- Unnecessary referrer leakage.
- Loading unexpected scripts/resources.

No website is literally impossible to hack, but this setup is appropriate and safe for a static Vercel portfolio.

## 8. Deployment Notes

Vercel settings:

```text
Framework Preset: Vite
Install Command: npm install
Build Command: npm run build
Output Directory: dist
```

Before deploying:

```bash
npm run build
npm run lint
```

The app should deploy cleanly as long as the GitHub repo contains:

- `package.json`
- `package-lock.json`
- `vite.config.js`
- `vercel.json`
- `src/`
- `public/`

## 9. How To Edit Content Later

For most text changes, edit:

```text
src/constants/index.js
```

Examples:

- Add a new project: update `myProjects`.
- Add a new internship: update `experiences`.
- Add a new achievement: update `achievements`.
- Change social links: update `profile` and `mySocials`.
- Add a new gallery photo: add optimized image to `public/assets/amogh/`, then add a record to `mediaMoments`.

For layout changes:

```text
src/index.css
```

For page order:

```text
src/App.jsx
```

## 10. Current Strengths

- Strong first impression with identity, motion, and 3D astronaut.
- Better professional focus than the cloned template.
- Content is grounded in real resume/project signals.
- No backend complexity.
- Vercel deployment is simple.
- Contact flow is static and safe.
- Real photos add credibility.
- CGPA is not overemphasized.
- PAYSHIELD, JPMC, drone work, and blockchain project signals are now visible.

## 11. Current Tradeoffs

- The astronaut adds visual impact but costs more JavaScript than a pure static hero.
- The contact form depends on the visitor having an email client configured.
- Some photos are event-style images, so careful cropping/focal positioning matters.
- A fully custom visual design could go further, but the current build balances polish, speed, and time.

## 12. Recommended Next Improvements

Highest value:

1. Add real project URLs or GitHub repo links once public.
2. Replace any remaining generic project thumbnails with custom screenshots.
3. Add a short downloadable project deck or one-page case study for PAYSHIELD.
4. Add a visible "Featured" case study for PAYSHIELD/JPMC and Trinetra/drone work.
5. Add Open Graph image metadata before public launch.

Optional:

1. Add route-level code splitting.
2. Add Lighthouse tuning after Vercel deployment.
3. Add custom favicon/brand icon.
4. Add a small "Now" section for current work.

## 13. Final Summary

This site is a polished, static, Vercel-ready frontend portfolio. It presents Amogh as a builder with strong technical range and proof across internships, startup exposure, hackathons, AI systems, blockchain, drones, and product engineering.

The current build intentionally avoids backend complexity, keeps contact simple, uses security headers, and balances visual impact with performance by lazy-loading the desktop 3D astronaut.
