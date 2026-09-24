# Scottie Murrell — Portfolio

Personal portfolio site built with Angular 22, deployed to GitHub Pages at
[scottie113.github.io](https://scottie113.github.io).

## Stack

- Angular 22 (standalone components, signals, lazy-loaded routes)
- TypeScript, SCSS
- GitHub Actions → GitHub Pages deployment on every push to `main`

## Structure

```
src/app/
├── core/
│   ├── models/        # TypeScript interfaces (Project, ExperienceEntry, ...)
│   └── constants/      # Static data-driven content (projects, skills, profile)
├── shared/
│   └── components/     # Reusable UI (navbar, footer, project-card, ...)
└── features/            # Routed pages (home, about, experience, projects, research, contact)
```

## Development

```bash
npm install
npm start        # http://localhost:4200
```

## Build

```bash
npm run build     # outputs to dist/scottie-portfolio/browser
```

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the app and
publishes it to GitHub Pages automatically.

## TODO before going live

- [ ] Replace placeholder email/LinkedIn in `src/app/core/constants/profile.data.ts`
- [ ] Add a real résumé PDF at `public/resume.pdf`
- [ ] Fill in real work history in `src/app/core/constants/experience.data.ts`
- [ ] Fill in real publications/teaching in `src/app/features/research/research.ts`
- [ ] Add project GitHub/demo links in `src/app/core/constants/projects.data.ts`
