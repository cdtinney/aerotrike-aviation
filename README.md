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
- [License](#license)

## Introduction

This website is built with:

- [GatsbyJS](gatsbyjs.org) - Static website generation using React
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

To run a development server with live-reload (and linting):

```bash
npm run dev
```

### Building

To build the website for production:

```bash
npm run build
```

Build output is located within the `public` folder.

## License

UNLICENSED
