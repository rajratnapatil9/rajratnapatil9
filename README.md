# RajSavvy — Next.js v1

A modern rebuild of the original RajSavvy HTML/CSS/JS portfolio using **Next.js 16 + React 19 + TypeScript**.

## What changed

- Rebuilt the original Home, Introduction, Projects and Certifications content as reusable Next.js pages/components.
- Removed Bootstrap, jQuery, Magnific Popup, marquee tags and remote UI dependencies.
- Added a responsive modern visual system with subtle CSS motion.
- Preserved the original project/certificate assets.
- Configured `output: "export"` so the site can continue to deploy to **GitHub Pages**.
- Preserved the custom domain with `public/CNAME` → `rajsavvy.com`.
- Added a GitHub Actions deployment workflow.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Production build

```bash
npm run build
```

The static site is generated in `out/`.

## GitHub Pages

1. Push this project to the repository that serves RajSavvy.
2. In GitHub: **Settings → Pages → Build and deployment → Source → GitHub Actions**.
3. Push to `main`.
4. The included workflow builds and deploys `out/`.
5. Keep your existing DNS records for `rajsavvy.com`. The `CNAME` file is included automatically.

## Suggested v2 work

- Update experience/content to the current resume.
- Add individual case-study pages for major projects.
- Add GSAP / React Three Fiber effects to the hero and project architecture sections.
- Add dark-mode and richer scroll interactions.
- Only after the static portfolio is polished, add authentication/community/meetup features.
