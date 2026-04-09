# aerotrikeaviation.com

> A small business website.

## Contents

- [Contents](#contents)
- [Introduction](#introduction)
- [Developing](#developing)
  - [Requirements](#requirements)
  - [Installing](#installing)
  - [Running](#running)
  - [Building](#building)
- [Deploying](#deploying)
  - [GitHub Actions (automatic)](#github-actions-automatic)
  - [Setup](#setup)
- [Contentful](#contentful)
- [License](#license)

## Introduction

This website is built with:

- [Astro](https://astro.build) - Static site generator
- [Contentful](https://www.contentful.com) - Headless CMS
- GitHub Pages

## Developing

Development is done on the `develop` branch.

- All commits to `develop` are automatically deployed.
- Development should be done on branches sourced from `develop`, NOT `master`.

Deployment (i.e. build output) is found on `master`.

- This is because GitHub Pages User Pages must be deployed on `master`.

### Requirements

- Node.js - Latest LTS release

### Installing

First, clone the repository.

To install dependencies:

```bash
npm install
```

### Running

To run a development server with live-reload:

```bash
npm run dev
```

### Building

To build the website for production:

```bash
npm run build
```

Build output is located within the `dist` folder. To preview the production build locally:

```bash
npm run preview
```

## Deploying

### GitHub Actions (automatic)

Every push to `develop` triggers a GitHub Actions workflow that builds the site and deploys it to GitHub Pages.

The workflow is defined in `.github/workflows/github-pages.yml`.

### Setup

1. In your GitHub repository, go to **Settings > Pages**.
2. Under **Build and deployment > Source**, select **GitHub Actions**.
3. Add the following repository secrets under **Settings > Secrets and variables > Actions**:
   - `CONTENTFUL_SPACE_ID` - Your Contentful space ID
   - `CONTENTFUL_DELIVERY_TOKEN` - Your Contentful Content Delivery API token
   - `CONTENTFUL_PREVIEW_TOKEN` - Your Contentful Content Preview API token

   These are only required once Contentful is wired up to the pages. The site will build without them.

4. The workflow uses the `GITHUB_TOKEN` automatically provided by GitHub Actions — no personal access token is needed.

## Contentful

The Contentful client is configured in `src/lib/contentful.ts`. Copy `.env.example` to `.env` and fill in your credentials for local development:

```bash
cp .env.example .env
```

In development mode, the client uses the Preview API (showing draft content). In production builds, it uses the Delivery API (published content only).

## License

UNLICENSED
