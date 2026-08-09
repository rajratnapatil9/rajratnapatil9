# RajSavvy Portfolio — full background hero

A static-export Next.js portfolio with the enhanced `profile.png` used as the full-width hero background.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Production build

```bash
npm run build
```

The static site is generated in `out/`.

## Main files to edit

- `app/page.tsx` — homepage
- `app/globals.css` — all styling and responsive behavior
- `data/site.ts` — projects, experience, education, certifications and contact links
- `public/profile.png` — hero/background photo
- `public/CNAME` — custom domain

## Hero behavior

- Desktop: the photo fills the complete horizontal hero section, with the copy on the right in a translucent panel.
- Mobile: the photo occupies the top of the section and the text becomes normal document flow below it. No floating cards, orbit animations, viewport-height layout or transform-based hero positioning.

## GitHub Pages

The included workflow builds the static export and deploys the `out/` folder to GitHub Pages.
