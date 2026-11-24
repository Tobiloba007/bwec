# figma-make-app

React + Vite + Tailwind CSS project running inside Figma Make.

## Development Server

A Vite development server is **already running** on `$PORT` (default 8443). You don't need to start it manually.

- Preview URL: The user can access the running app through the preview panel
- Hot reload: Changes to source files are reflected immediately

## Project Structure

This is the canonical project structure. Start with task-relevant files below. Only follow imports or inspect other files when required, when a documented path is missing, or when the repository contradicts this guide.

- `src/main.tsx` - React entrypoint; imports `src/index.css` and mounts `src/App.tsx` into the `#root` element
- `src/App.tsx` - App shell only: renders `Header`, the active page, and `Footer` inside `RouterProvider`
- `src/app/router.tsx` - `Route` type, `routeFromPath`, `RouterProvider`, and the `useRouter()` hook (`route`, `navigate`) used for all navigation
- `src/pages/` - One component per route: `HomePage.tsx`, `AboutPage.tsx`, `ProgramsPage.tsx`, `MentorshipPage.tsx`, `EventsPage.tsx`
- `src/components/` - Shared UI: `Button.tsx`, `Header.tsx`, `Footer.tsx`, `CtaSection.tsx`, and `Reveal.tsx` (scroll-in `Reveal` wrapper plus the `CountUp` stat counter and the `useInView` hook)
- `src/data/` - Content and configuration: `site.ts` (nav items, contact details), `images.ts` (every `/assets` path), `programs.ts` (program cards and participant-support lists)
- `src/index.css` - The only stylesheet: Tailwind CSS v4 import, `@font-face` rules, the `@theme` design tokens, base element defaults, and the `shell` container utility
- `public/assets/` - Images grouped as `brand/`, `community/`, `icons/`, and `programs/`; reference them via `src/data/images.ts` rather than hard-coded paths
- `index.html` - Vite HTML shell containing the `#root` element and loading `src/main.tsx`
- `package.json` - Project dependencies and the Vite build, development, preview, and formatting scripts
- `vite.config.ts` - Vite configuration with React, Tailwind CSS v4, and Figma Make plugins plus the `@` alias for `src`
- `.mise.toml` - Toolchain versions for Node.js and pnpm

## Dependencies

- Runtime: React 19 and React DOM 19
- Styling: Tailwind CSS v4 with the `@tailwindcss/vite` plugin
- Build tooling: Vite 8, TypeScript 5.7, and `@vitejs/plugin-react`
- Formatting: oxfmt

## Styling

This project uses **Tailwind CSS v4** through the `@tailwindcss/vite` plugin configured in `vite.config.ts`. All styling is Tailwind utility classes in the JSX — do not add per-section stylesheets. `src/index.css` is the only stylesheet: it imports Tailwind, declares the `@font-face` rules, defines the design tokens in `@theme` (`bg-cream`, `text-ink`, `font-heading`, …), sets base element defaults, and defines the `shell` container utility. This scaffold does not need a Tailwind config file or PostCSS config.

The penultimate Figma breakpoint is 800px, so responsive utilities use arbitrary variants such as `max-[800px]:grid-cols-1`. Prefer arbitrary pixel font sizes (`text-[14px]`) over named sizes like `text-sm`, because the named ones also set a line-height and break parity with the design. Keep new tokens in `@theme` and new repeated structural utilities in `@utility`.

Tailwind emits utility classes in `@layer utilities`, and CSS outside any cascade layer overrides every layer regardless of specificity. Put global element styles, such as resets and defaults for `body`, headings, `button`, or `input`, inside `@layer base { ... }` so utility classes on those elements still apply. Tailwind's Preflight already applies `box-sizing: border-box`, removes default margins, and sets `font: inherit` on form controls, so do not repeat those rules.
