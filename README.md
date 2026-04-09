# aerotrikeaviation.com

> A small business website for ultralight flight training.

## Contents

- [Introduction](#introduction)
- [Developing](#developing)
- [Deploying](#deploying)
- [Contentful](#contentful)
- [License](#license)

## Introduction

This website is built with:

- [Astro](https://astro.build) - Static site generator
- [Contentful](https://www.contentful.com) - Headless CMS (optional)
- [GitHub Pages](https://pages.github.com) - Hosting

## Developing

Development is done on the `develop` branch. Feature branches should be created from `develop`.

### Requirements

- Node.js 22+

### Getting started

```bash
npm install
npm run dev
```

### Building

```bash
npm run build
npm run preview  # preview the production build locally
```

Build output is located in the `dist` folder.

## Deploying

Every push to `develop` automatically builds and deploys the site to GitHub Pages via GitHub Actions.

The workflow is defined in `.github/workflows/github-pages.yml`. It uses the native GitHub Pages deployment API — no personal access token is needed.

### First-time setup

1. Go to **Settings > Pages > Build and deployment > Source** and select **GitHub Actions**.
2. Optionally, add Contentful secrets under **Settings > Secrets and variables > Actions**:
   - `CONTENTFUL_SPACE_ID`
   - `CONTENTFUL_DELIVERY_TOKEN`
   - `CONTENTFUL_PREVIEW_TOKEN`

   The site builds without these — it falls back to hardcoded content.

## Contentful

The Contentful client is configured in `src/lib/contentful.ts`. For local development:

```bash
cp .env.example .env
# Fill in your Contentful credentials
```

In development mode, the client uses the Preview API (draft content). In production builds, it uses the Delivery API (published content only).

## License

UNLICENSED
