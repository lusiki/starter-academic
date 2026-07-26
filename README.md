# lukasikic.info

Source for Luka Šikić's bilingual academic and professional website.

## Active project

The deployed site lives in [`site/`](site/) and is built with Astro. English
routes are served from `/`; Croatian routes use the `/hr/` prefix. Netlify
builds only this directory.

```sh
cd site
npm ci
npm run check
npm run build
npm run dev
```

Publications and projects are Markdown content collections. Shared bilingual
portfolio data lives in `site/src/data/portfolio.ts`; interface copy lives in
`site/src/i18n/strings.ts`.

## Other folders

- `cv/` is an ignored local CV workspace and is not deployed. This keeps its
  personal contact details and generated files outside the public repository.
- `site/public/ai/` is a generated Quarto microsite published at `/ai/`.
  Its README records the source and reproduction details.
- `docs/archive/` contains historical documentation from the retired
  Hugo/Wowchemy implementation.
- `starter-academic/`, when present locally, is the retired nested repository.
  It is ignored and is not part of the build.

## Deployment

Netlify uses the root `netlify.toml`, runs the site checks and production build,
and publishes `site/dist`. Do not commit `node_modules` or `dist`.
