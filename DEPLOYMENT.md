# Deployment

The site is a static Vite build deployed to Vercel through the GitHub
integration. Nothing here needs a server runtime.

## How the deploy runs

| Step | Command |
| --- | --- |
| Install | `pnpm install` |
| Build | `pnpm build` |
| Output | `dist/` |

`vercel.json` pins these commands, so Vercel's auto-detection cannot drift.
Node 20.11+ is required (`packageManager` and `engines` are set in
`package.json`).

## Set the production domain

Absolute URLs in the document head, plus `robots.txt` and `sitemap.xml`, are
generated from one value. It defaults to `https://bloomingwells.ca`.

To use a different origin, add a build-time environment variable in the Vercel
project settings (Settings → Environment Variables) for the Production
environment:

```
VITE_SITE_URL = https://your-domain.example
```

Redeploy after changing it. The value is baked into `dist/` at build time, so a
change only takes effect on the next build. Verify with:

```sh
curl -s https://your-domain.example/robots.txt
curl -s https://your-domain.example/sitemap.xml
```

At runtime the canonical link and `og:url` are rewritten per route from
`location.origin`, so those stay correct without a rebuild.

## Routing

The app uses client-side routes (`/about`, `/programs`, `/mentorship`,
`/events`). `vercel.json` rewrites every unmatched path to `index.html`, so a
deep link or a hard refresh resolves correctly. Do not remove that rewrite:
without it, every route except `/` returns 404.

## Caching

- `/assets/index-*.{js,css}` — hashed filenames, cached for one year as
  immutable.
- `/assets/**` images and icons — one day, with stale-while-revalidate. These
  filenames are not hashed, so a swapped photo appears within a day.
- `/index.html` — always revalidated, so a new build is picked up immediately.

## Things worth doing before launch

1. **Compress the photography.** `public/assets/community/` and
   `public/assets/programs/` hold about 10 MB of PNGs. Exporting them as
   JPEG/WebP at about 1600 px wide typically lands near 1 MB and cuts the
   largest page weight substantially. Update `src/data/images.ts` if the
   filenames change.
2. **Confirm the forms.** `CONTACT`, `FORMS` and the address in
   `src/data/site.ts` are what visitors actually use — check the Google Forms
   links are still live and the phone number and address are current.
3. **Check the domain in Google Search Console** and submit
   `/sitemap.xml`.
