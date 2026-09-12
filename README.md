# Ishappa N — Portfolio

A static portfolio site for **Ishappa N**, Software Engineer (Mobile & Frontend).

Built with Next.js (App Router, static export), TypeScript and Tailwind CSS. No backend, no
database, no paid services. Deploys free to GitHub Pages via GitHub Actions.

---

## Before you deploy — 2 things to fill in

Everything on the site comes from the resume. Two links could not, because the resume shows the
labels but not the addresses. Open [`src/data/profile.ts`](src/data/profile.ts) and replace:

```ts
github:   "GITHUB_URL_HERE",     // -> https://github.com/<your-username>
linkedin: "LINKEDIN_URL_HERE",   // -> https://www.linkedin.com/in/<your-handle>
```

Until they're replaced, those buttons render as visibly **pending** rather than linking somewhere
broken or invented.

### Project links (live sites / app stores)

Each project in [`src/data/projects.ts`](src/data/projects.ts) has a `links: []` array. Add real,
public URLs there and they render under the project card automatically:

```ts
links: [
  { kind: "site",    label: "R&B",         href: "https://..." },
  { kind: "ios",     label: "App Store",   href: "https://apps.apple.com/app/id..." },
  { kind: "android", label: "Google Play", href: "https://play.google.com/store/apps/details?id=..." },
],
```

Leave the array empty for anything not publicly linkable — nothing renders, and nothing is invented.

The **Resume** button downloads `public/Ishappa_N_Resume.pdf`, which is currently a copy of
`Ishappa_FE_Resume.pdf`. To change which resume the site serves, replace that one file.

---

## Local development

```bash
npm install      # once
npm run dev      # http://localhost:3000
```

Other scripts:

| Command | What it does |
| --- | --- |
| `npm run build` | Production build + static export into `out/` |
| `npm start` | Serves the built `out/` folder locally (`npx serve out`) |
| `npm run typecheck` | `tsc --noEmit` |

### Testing the production build the way GitHub Pages will serve it

If you deploy to a **project** site (`https://<user>.github.io/<repo>`), the site lives under a
subpath. Reproduce that locally:

```bash
NEXT_PUBLIC_BASE_PATH=/portfolio npm run build
npx serve out
```

Then open `http://localhost:3000/portfolio/`.

---

## Deployment — GitHub Pages + GitHub Actions

### One-time setup

1. **Create a public GitHub repository.** Name it anything (`portfolio` works).
   Naming it `<your-username>.github.io` instead publishes at the root domain — the workflow
   detects this automatically.

2. **Push this project to it:**

   ```bash
   git init
   git add .
   git commit -m "Portfolio site"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<repo>.git
   git push -u origin main
   ```

3. **Turn on Pages:** repository → **Settings** → **Pages** → under *Build and deployment*, set
   **Source** to **GitHub Actions**.
   Do **not** pick "Deploy from a branch" — this project deploys an Actions artifact.

4. **Watch the run:** the **Actions** tab shows `Deploy to GitHub Pages`. First run takes ~1–2
   minutes. When it goes green, the deploy job prints the live URL.

### Required repository settings

| Setting | Value |
| --- | --- |
| Repository visibility | Public (GitHub Pages + Actions are free for public repos) |
| Settings → Pages → Source | **GitHub Actions** |
| Default branch | `main` |
| Settings → Actions → General → Workflow permissions | Read is enough; the workflow requests `pages: write` and `id-token: write` itself |

### Build configuration

| Item | Value |
| --- | --- |
| Build command | `npm run build` |
| Output directory | `out/` |
| Node version | 22 (pinned in the workflow) |
| Workflow file | [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) |

The workflow resolves the base path automatically:

- repo named `<user>.github.io` → site at `/`
- any other repo name → site at `/<repo>`

To override (for example after attaching a custom domain), add repository **Variables** under
Settings → Secrets and variables → Actions:

| Variable | Example |
| --- | --- |
| `BASE_PATH` | *(empty string for a root domain)* |
| `SITE_URL` | `https://ishappa.dev` |

### Updating the site from now on

```bash
# edit content or code
git add .
git commit -m "Update experience"
git push
```

That's it. Every push to `main` rebuilds and redeploys automatically. No manual uploads.

---

## Updating content

All copy lives in `src/data/` — UI components never hardcode professional claims.

| File | Holds |
| --- | --- |
| `profile.ts` | Name, title, intro, about, contact, links |
| `experience.ts` | Codilar role, dates, tech, achievements |
| `projects.ts` | Projects and their case studies |
| `skills.ts` | Categorised toolkit (no ratings, by design) |
| `snapshot.ts` | The four "What I build" pillars |
| `impact.ts` | The measured-outcome tiles |
| `additional.ts` | Backend work + the three AI tiers |
| `certifications.ts`, `education.ts` | Credentials |

To add a case study, add a `caseStudy` object to a project in `projects.ts` — the page, route,
sitemap entry and metadata are generated from it. Sections with no data are **omitted**, not
padded.

See [`CONTENT_SOURCES.md`](CONTENT_SOURCES.md) for where every claim on the site comes from.

---

## Design and accessibility notes

- **No web fonts.** System font stacks (sans + mono) — no render-blocking font requests, no CLS.
- **No animation library.** Reveal-on-scroll is one small `IntersectionObserver` component; all
  motion is disabled under `prefers-reduced-motion`, and a `<noscript>` style makes every section
  visible without JavaScript.
- **Dark mode** follows `prefers-color-scheme`.
- Semantic landmarks, a single `h1` per page, skip-to-content link, `aria-current` on the active
  nav item, visible focus rings, 44px+ touch targets, and no horizontal overflow at 320px.

## Privacy

No analytics, no third-party scripts, no cookies, no tracking. Client work is described only at
the level the resume already states — no internal URLs, credentials, repositories, architecture
detail or business information.
