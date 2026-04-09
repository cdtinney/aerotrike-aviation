# Gatsby to Astro + Contentful Migration Plan

## Current State

- **Framework**: Gatsby 2, React 16
- **Content**: All hardcoded in React components (no CMS)
- **Styling**: Bootstrap 3 + custom CSS files
- **Pages**: ~10 static pages (Home, About, Training, Gift Certificates, Sales, Gallery, FAQ, Contact, Thank You, 404)
- **Deployment**: GitHub Pages via GitHub Actions (`develop` -> builds -> `master`)
- **Domain**: aerotrikeaviation.com (CNAME file)
- **Analytics**: Google Analytics (UA-87415138-2)
- **SEO**: React Helmet
- **Image handling**: gatsby-image/gatsby-plugin-sharp + static files in `/static/img`
- **Interactive features**: Photo gallery with lightbox (`react-photo-gallery`, `react-images`)

## Migration Steps

### Phase 1: Scaffold Astro Project

- [ ] Create a new Astro project alongside the existing Gatsby source:
  ```bash
  npm create astro@latest -- --template minimal --typescript strict
  ```
- [ ] Configure `astro.config.mjs`:
  - Set `site: 'https://aerotrikeaviation.com'`
  - Set `trailingSlash: 'always'` to preserve existing URL structure
- [ ] Install core dependencies:
  ```bash
  npm install @astrojs/sitemap @astrojs/react
  ```
- [ ] Install React integration for interactive components (gallery/lightbox):
  ```bash
  npx astro add react
  ```

### Phase 2: Move Static Assets

- [ ] Move `static/css/`, `static/img/`, `static/fonts/` into Astro's `public/` directory
- [ ] Move `static/vendor/bootstrap/` into `public/vendor/` (or replace with a modern Bootstrap or alternative)
- [ ] Move `src/images/` into `src/assets/` for Astro's built-in image optimization
- [ ] Copy `CNAME` file into `public/`

### Phase 3: Set Up Contentful

- [ ] Create a Contentful space for Aerotrike Aviation
- [ ] Define content models:
  - **Page** — title, slug, meta description, hero image, body content (Rich Text)
  - **Training Program** — name, description, cost, requirements
  - **Manufacturer** — name, logo, website URL, description
  - **Gallery Image** — image asset, caption, sort order
  - **FAQ Item** — question, answer, sort order
  - **Gift Certificate** — name, price, description, PayPal button ID
  - **Site Settings** (singleton) — site title, phone, email, address, social links, Google Analytics ID
- [ ] Populate Contentful with existing hardcoded content from current pages
- [ ] Install Contentful SDK:
  ```bash
  npm install contentful @contentful/rich-text-html-renderer
  ```
- [ ] Create `.env` with Contentful credentials:
  ```
  CONTENTFUL_SPACE_ID=...
  CONTENTFUL_DELIVERY_TOKEN=...
  CONTENTFUL_PREVIEW_TOKEN=...
  ```
- [ ] Create `src/lib/contentful.ts` client with preview/delivery API switching:
  ```typescript
  import * as contentful from "contentful";

  export const contentfulClient = contentful.createClient({
    space: import.meta.env.CONTENTFUL_SPACE_ID,
    accessToken: import.meta.env.DEV
      ? import.meta.env.CONTENTFUL_PREVIEW_TOKEN
      : import.meta.env.CONTENTFUL_DELIVERY_TOKEN,
    host: import.meta.env.DEV
      ? "preview.contentful.com"
      : "cdn.contentful.com",
  });
  ```
- [ ] Define TypeScript interfaces for each content model

### Phase 4: Convert Layouts and Components

- [ ] Create `src/layouts/DefaultLayout.astro`:
  - Full HTML shell (`<html>`, `<head>`, `<body>`)
  - Include global CSS (Bootstrap, main.css, normalize.css, fonts)
  - Include Google Analytics script
  - Use `<slot />` instead of `{children}`
- [ ] Convert `SEO.js` -> metadata handled directly in layout `<head>` using `Astro.props`
- [ ] Convert `Navbar.js` -> `src/components/Navbar.astro`
  - Replace `<Link to="...">` with `<a href="...">`
  - Replace `className` with `class`
  - Use `Astro.url.pathname` for active link detection
- [ ] Convert `Footer.js` -> `src/components/Footer.astro`
  - Fetch contact info from Contentful Site Settings
- [ ] Convert `Jumbotron.js` -> `src/components/Jumbotron.astro`
  - Use Astro's `<Image>` component for optimized hero image
- [ ] Convert contact sub-components (`Email`, `Phone`, `Address`, `Social`) to `.astro` files
- [ ] Convert inline style objects to HTML style strings throughout

### Phase 5: Convert Pages

Each page conversion follows this pattern:
1. Create `src/pages/<name>/index.astro` (preserves trailing slash URLs)
2. Move JSX return block into Astro HTML template section
3. Convert JSX syntax: `className` -> `class`, style objects -> strings, `Link` -> `<a>`
4. Fetch relevant content from Contentful in the `---` code fence
5. Render Rich Text fields with `documentToHtmlString()`

Pages to convert:
- [ ] `index.js` -> `src/pages/index.astro` (Home)
- [ ] `about.js` -> `src/pages/about/index.astro`
- [ ] `training.js` -> `src/pages/training/index.astro`
- [ ] `gift-certificates.js` -> `src/pages/gift-certificates/index.astro`
- [ ] `sales.js` -> `src/pages/sales/index.astro`
- [ ] `gallery.js` -> `src/pages/gallery/index.astro` (keep React island for interactivity)
- [ ] `faq.js` -> `src/pages/faq/index.astro`
- [ ] `contact.js` -> `src/pages/contact/index.astro`
- [ ] `thank-you.js` -> `src/pages/thank-you/index.astro`
- [ ] `404.js` -> `src/pages/404.astro`

### Phase 6: Handle Interactive Components (Client Islands)

- [ ] Gallery page: keep `react-photo-gallery` + `react-images` as a React island component
  - Create `src/components/Gallery.tsx` (React)
  - Use `client:load` directive in the Astro page:
    ```astro
    <Gallery client:load photos={photos} />
    ```
- [ ] Evaluate whether gallery libraries are still maintained; consider Astro-native alternatives

### Phase 7: SEO and Metadata

- [ ] Configure `@astrojs/sitemap` in `astro.config.mjs`
- [ ] Add `robots.txt` to `public/`
- [ ] Set up `<meta>` tags per page via layout props (title, description, og:image)
- [ ] Ensure canonical URLs are correct
- [ ] Migrate Google Analytics to GA4 (UA properties are deprecated) or add via Astro integration

### Phase 8: Deployment

- [ ] Update GitHub Actions workflow for Astro build:
  ```yaml
  - run: npm ci
  - run: npm run build
  ```
  Build output goes to `dist/` instead of `public/`
- [ ] Set Contentful env vars as GitHub Actions secrets
- [ ] Set up Contentful webhook to trigger GitHub Actions rebuild on content publish
- [ ] Verify CNAME and custom domain configuration
- [ ] Test deployment to GitHub Pages (or consider Netlify/Vercel for webhook support)

### Phase 9: Cleanup and Verification

- [ ] Verify all pages render correctly and match existing site
- [ ] Test all links, images, and interactive elements
- [ ] Run Lighthouse audit — target 100/100/100/100 (Astro's zero-JS default helps)
- [ ] Verify sitemap.xml and robots.txt generation
- [ ] Test PayPal gift certificate buttons still work
- [ ] Test Google Maps embed on contact page
- [ ] Check responsive layout across devices
- [ ] Remove old Gatsby source files, config, and dependencies
- [ ] Remove Travis CI config (`.travis.yml`)
- [ ] Update `package.json` — remove all `gatsby-*` dependencies

## Decisions to Make

1. **Bootstrap 3**: Keep as-is in `public/vendor/`, or upgrade to Bootstrap 5 / replace with Tailwind / use plain CSS?
2. **Gallery**: Keep `react-photo-gallery` + `react-images` as React island, or find an Astro-native lightbox?
3. **Hosting**: Stay on GitHub Pages, or move to Netlify/Vercel for easier webhook-driven rebuilds from Contentful?
4. **Google Analytics**: Migrate from UA to GA4?
5. **Content granularity**: Which content truly benefits from Contentful? Static pages with rarely-changing content may be simpler as local `.md` or `.astro` files.

## Contentful Integration Plan

Wire up Contentful for **Gallery**, **Sales** (manufacturers), and **Pricing** (training + gift certificates). All pages keep hardcoded fallbacks so the site builds without Contentful credentials.

### Content Models

**`galleryCollection`** (singleton)

| Field | Type | Notes |
|-------|------|-------|
| `title` | Short text | Internal label |
| `photos` | Media, many files | Drag to reorder in editor; each asset has `title` (alt text), `file.url`, `file.details.image.width/height` |

**`manufacturer`**

| Field | Type | Notes |
|-------|------|-------|
| `name` | Short text | e.g. "Airborne Australia" |
| `website` | Short text (URL) | Link target |
| `logo` | Media, one file | Single image asset |
| `sortOrder` | Integer | Lower = first |
| `active` | Boolean | Hide without deleting |

**`pricingTable`**

| Field | Type | Notes |
|-------|------|-------|
| `title` | Short text | e.g. "Flight Training Costs", "Ground School Costs" |
| `note` | Short text (optional) | e.g. "All prices exclude applicable taxes." |
| `lineItems` | Reference, many `pricingLineItem` | Drag to reorder |

**`pricingLineItem`**

| Field | Type | Notes |
|-------|------|-------|
| `service` | Short text | Row label |
| `price` | Short text | Display string — NOT a number (supports "$195 / hour (includes plane, instructor, and fuel)") |

**`giftCertificate`**

| Field | Type | Notes |
|-------|------|-------|
| `title` | Short text | "30 Minute Discovery Flight" |
| `price` | Short text | "$125" |
| `description` | Short text | Body copy |
| `paypalButtonId` | Short text | e.g. "TCAW3VTBMV55J" |
| `section` | Short text | "Flights" or "Lessons" — used for grouping |
| `sortOrder` | Integer | Display order within section |

### Implementation Steps

#### 1. Config changes

- Add `images.ctfassets.net` to `astro.config.mjs` so Astro's `<Image>` can optimize remote Contentful images:
  ```js
  image: { domains: ['images.ctfassets.net'] }
  ```

#### 2. Add fetch helper to `src/lib/contentful.ts`

```ts
export async function fetchWithFallback<T>(
  fetchFn: () => Promise<T>,
  fallback: T,
): Promise<T> {
  try {
    return await fetchFn();
  } catch {
    return fallback;
  }
}
```

#### 3. Gallery page

- Extract `photos` array into a `FALLBACK_PHOTOS` constant
- Fetch `galleryCollection` entry; map assets to `{ src, alt, width, height }`
- Contentful URLs are protocol-relative — prepend `https:`
- Pass photo data into the lightbox `<script>` via `JSON.stringify` in a `data-` attribute instead of duplicating the array

#### 4. Sales page

- Extract manufacturers into a `FALLBACK_MANUFACTURERS` constant
- Fetch `manufacturer` entries with `'fields.active': true, order: 'fields.sortOrder'`
- Use `<Image>` for logos; append `?w=300&fit=pad` to Contentful URLs for consistent sizing
- Keep the "Used" section hardcoded (or add a separate content type later if needed)

#### 5. Training page

- Extract both pricing tables into `FALLBACK_FLIGHT_PRICES` and `FALLBACK_GROUND_SCHOOL_PRICES` constants
- Fetch `pricingTable` entries by title with `include: 2` to resolve nested `lineItems`
- Render rows from data instead of hardcoded `<tr>` elements
- Keep all non-pricing content (prerequisites, policies, steps to licensing) hardcoded

#### 6. Gift certificates page

- Extract packages into a `FALLBACK_GIFT_CERTIFICATES` constant
- Fetch `giftCertificate` entries with `order: 'fields.sortOrder'`
- Group by `section` field, render each group under its heading
- PayPal form structure stays the same — only `hosted_button_id` comes from data

### Key Details

- **Fallback pattern**: Define typed fallback constants. Wrap Contentful fetches in `fetchWithFallback`. If Contentful is down or unconfigured, the build succeeds with hardcoded data.
- **Asset URLs**: SDK returns `//images.ctfassets.net/...` — always prepend `https:`.
- **Link resolution**: Use `include: 2` when fetching `pricingTable` so `lineItems` references are resolved (default is 1 level, which only resolves the table itself, not its children).
- **Price as Short text**: Prices are display strings with varied formatting. Do not use a Number field.

## Reference Resources

- [Migrating Gatsby to Astro with Claude](https://www.userhat.com/migrating-gatsby-to-astro-with-claude/)
- [Astro Docs: Migrate from Gatsby](https://docs.astro.build/en/guides/migrate-to-astro/from-gatsby/)
- [Astro Docs: Contentful Integration](https://docs.astro.build/en/guides/cms/contentful/)
- [Astro Documentation](https://docs.astro.build/)
- [Contentful JavaScript SDK](https://github.com/contentful/contentful.js)
