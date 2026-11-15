# faintent.dev

Personal site for Jeremiah Earl — independent software engineer.

Built with SvelteKit 3, Svelte 5, and Tailwind CSS 4. The site is fully prerendered as static files and deployed to Cloudflare Pages.

## Development

```sh
pnpm install
pnpm dev
```

## Checks

```sh
pnpm check
pnpm lint
pnpm build
pnpm preview
```

`pnpm build` writes the static site to `build/`.

## Content

- `src/lib/content/site.ts` — name, role, availability, links, intro, about, and capabilities
- `src/lib/content/projects.ts` — project entries
- `src/routes/layout.css` — Tailwind theme tokens and base styles

## Deploying to Cloudflare Pages

Connect the repository to a Cloudflare Pages project with:

- **Build command:** `pnpm build`
- **Build output directory:** `build`
- **Node.js version:** `24` (set `NODE_VERSION=24` if the default is older)
- **Custom domain:** `faintent.dev`

No SPA fallback or rewrite rule is required. The root layout sets `prerender = true`, and the site is generated as static files at build time.
