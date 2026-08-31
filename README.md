# Rick Allauigan — Engineering Portfolio

A static Astro and TypeScript portfolio documenting backend engineering experience and a careful progression into platform engineering, DevSecOps, and cloud security. Planned work is visibly separated from demonstrated evidence.

## Requirements and commands

Use Node.js 24 and npm.

```sh
npm ci
npm run dev
npm run format:check
npm run lint
npm run check
npm run build
npm run links
npm run preview
npm run validate
```

The complete validation command formats nothing: it checks formatting, lint, Astro/TypeScript content, the production build, and generated internal links.

## Content

- Edit personal facts and external links in `src/data/profile.ts`. Nullable links are hidden from the rendered site.
- Add case studies under `src/content/case-studies/` and writing under `src/content/writing/`.
- Keep planned controls and actual evidence distinct. Do not add unverified metrics or professional claims.

## Deployment

Pushes to `main` validate, scan, build, and deploy through GitHub Actions after all required jobs pass. The site targets `https://allauigan.com`. No workflow uses long-lived deployment credentials.
