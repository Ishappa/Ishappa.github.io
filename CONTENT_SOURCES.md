# Content sources

Every professional claim on this site traces back to one of Ishappa N's three resume PDFs.
This file is the audit trail. If a claim isn't listed here, it shouldn't be on the site.

**Sources**

- **FE** — `Ishappa_FE_Resume.pdf`
- **AI** — `Ishappa_FullStack_AI_Resume.pdf`
- **JV** — `Ishappa_FullStack_Java_Resume.pdf`
- **USER** — stated directly by Ishappa in conversation (see the bottom of this file)

---

## Identity and contact

| Claim | Source |
| --- | --- |
| Ishappa N | FE, AI, JV |
| Software Engineer, Codilar Technologies Pvt Ltd, Sep 2023 – Present, Bengaluru | FE, AI, JV |
| 3+ years experience | FE, AI, JV |
| ishwarkuri4@gmail.com · +91 85488-63304 · Bengaluru, India | FE, AI, JV |
| GitHub / LinkedIn URLs | **Not in any resume** → rendered as pending placeholders |

## Mobile (section 01, 02, 04; case study `react-native-shopping-apps`)

| Claim | Source |
| --- | --- |
| Cross-platform shopping apps (iOS + Android) on App Store and Play Store — R&B, Lulu GCC, Koton | FE, AI, JV |
| Hundreds of thousands of active shoppers | FE, AI |
| 20% cold-start reduction via AsyncStorage caching, batched API calls, JS bundle optimisation | FE, AI, JV |
| Measured via Firebase Performance Monitoring | FE, AI |
| Firebase Analytics + Crashlytics | FE, AI, JV |
| MoEngage push, in-app messaging, segmentation, deep-linked entry points, rebuilt React Navigation flows | FE, AI |
| Release pipeline: Xcode/Gradle, TestFlight/Play Console, review coordination, phased rollout | FE, AI, JV |
| Zero critical production incidents | FE, AI, JV |
| Koton live for Turkey region; GCC integrations in UAT | FE, AI |

> **Note on a resume inconsistency.** FE/JV say *"Shipped 2 cross-platform shopping apps"* while the
> section heading lists three brands. The site states the brands and omits the count, rather than
> resolving the discrepancy by guessing.

## Frontend / e-commerce (sections 02, 03, 04; case study `nextjs-ecommerce-storefronts`)

| Claim | Source |
| --- | --- |
| Work across 4 high-traffic Next.js/React storefronts — R&B, Lulu GCC, Clarks, Ooka | FE, AI, JV |
| 1M+ monthly users across GCC markets | FE, AI, JV |
| Core Web Vitals improvements and SEO ranking gains | FE, AI |
| Lighthouse 65 → 90+ via SSR/ISR, dynamic code splitting, CDN image delivery, removing render-blocking resources | FE, AI, JV |
| Checkout.com: tokenisation, 3DS, order-confirmation webhooks, PCI-compliant checkout | FE, AI, JV |
| Tailwind component library, 40+ components (cart slider, navigation, promotional widgets), ~30% faster delivery | FE, AI, JV |
| Redux Toolkit + Context API for cart, checkout, wishlist, desktop and mobile web | FE, AI |
| GTM data-layer events: impressions, add-to-cart, checkout steps, purchases | FE, AI |
| CI/CD and PR review workflows via Akinon ACC | FE, AI |
| Ooka rebuilt/stabilised on React/Next.js after AEM PoC evaluated | FE, AI, JV |

## Backend (section 06; case study `koton-multi-region-platform`)

| Claim | Source |
| --- | --- |
| Production Django storefront, Jinja2 SEO-first server-rendered pages | AI |
| Middleware and class-level overrides rather than core modifications | AI |
| Country/language switching, locale and country as independent axes, currency/payment/availability/content/RTL | AI |
| Cache-key correctness preventing cross-region content leakage | AI |
| Payment integration and session management across storefront and app | AI |
| Production support: API integration, performance, root-cause bug fixing on live multi-region traffic | AI |
| Ooka AEM migration PoC in Java — custom components, Sling Servlets, OSGi, Core Components, HTL | JV, FE |
| cWarmer: *basic backend functionality*, dashboard REST APIs, cache-status tracking, warmer-bot configuration | JV |

## AI / LLM (section 07; case studies `ai-enterprise-data-assistant`, `perflens`)

| Claim | Source |
| --- | --- |
| LLM tool-calling backend on FastAPI, client proof of concept, built independently | AI, JV, FE |
| Pydantic-generated tool schemas as single source of truth | AI |
| Model output validated as untrusted input: strict schemas, enum-constrained args, bounded ranges | AI |
| Capped iteration loop bounding latency and token cost | AI |
| Connector layer per system (Omnitron, GA4), auth/retries/response mapping/aggregation, pooled async HTTP | AI |
| Hallucination prevention: grounding in live tool results, reporting unavailability, surfacing date range/timezone/filters | AI |
| Client used it to approve a broader AI initiative | AI, JV, FE |
| PerfLens CLI: pre/post snapshot capture, diff engine, automatic PR/MR comments across GitLab/GitHub/Bitbucket, web (Lighthouse CI) + React Native (Hermes profiler) | USER — repo README, 2026-09 |
| AI root-cause analysis (Claude-based agent) — in development, not yet shipped | USER — repo README, 2026-09 |
| Claude Code + GitHub Copilot used daily across the SDLC | FE, AI, JV |

## Credentials

| Claim | Source |
| --- | --- |
| Claude Code: Software Engineering with Generative AI Agents — Vanderbilt University, Coursera (2026) | FE, AI, JV |
| Adobe Certified Professional, AEM Developer — Adobe (2024) | FE, AI, JV |
| Java Full Stack Development (Spring Boot, REST APIs, JWT, Hibernate/JPA, SQL) — JSpiders (2023) | JV, FE, AI |
| B.E. Mining Engineering, Dr. T Thimmaiah Institute of Technology, KGF — Jul 2018 – Jul 2022 | FE, AI, JV |

## Qualifiers preserved, not dropped

The resumes hedge some skills. The site keeps the hedge:

- **Spring Boot** — "via certification" (JV) → shown as *covered by certification and applied to internal dashboard REST APIs*.
- **AEM** — "working knowledge" (FE, AI) → labelled as such.
- **JWT auth, SSE streaming, RAG, embeddings & vector search, MCP** — listed in the AI resume as
  "studied, not yet shipped to production". Removed from the site entirely at Ishappa's request,
  rather than shown without the qualifier.

## PerfLens: repo README supersedes the original resume wording

Ishappa's own resume text described PerfLens as already having "optional AI root-cause analysis
(Groq-hosted Llama)... deliberately non-gating" — implying the AI piece was shipped. The actual
project README he shared (2026-09) shows a week-by-week roadmap where only **Week 1** is checked
done (CLI, snapshot engine, diff engine, CI pipelines for GitLab/GitHub/Bitbucket); AI root-cause
analysis is explicitly listed as "(Week 3)" using a Claude-based agent package, not Groq/Llama, and
carries no checkmark. The site now describes PerfLens using the more detailed and more current
README, and states the AI feature as **in development**, not shipped — the honest read of Ishappa's
own roadmap, not a downgrade invented here. If Week 3 has since been completed, this should be
updated again to reflect that.

## Stated by Ishappa directly (USER)

- Web releases ship through **Akinon ACC** using a **tag-based, zero-downtime deployment flow**:
  create and push a release tag, build the tag, deploy the tag. Extends the resume line
  *"contributed to CI/CD and PR review workflows via Akinon ACC"* (FE, AI).
  Appears in: Engineering Impact (release tile), the Next.js storefront case study, and the
  "Tag-based zero-downtime releases" toolkit entry.
- **Whites (whites.sa)** — currently building a Next.js storefront and a React Native mobile app
  on the Akinon platform. Not in any resume. Shown only in the "Now building" card in section 01,
  The web storefront and both mobile apps are live, so it appears both in the "Worked on" band
  and as the "Current project" card in section 01.
- **Live URLs supplied by Ishappa** and linked from the site:

  | Brand | Web | iOS | Android |
  | --- | --- | --- | --- |
  | R&B | randbfashion.com/en_ae | `id6450224883` | `com.akinon.randbfashion` |
  | Lulu GCC | gcc.luluhypermarket.com | `id6739010114` | `com.akinon.lulushopping` |
  | Koton | koton.ae | — | — |
  | Whites | whites.sa | `id1618189900` | `net.whites` |
  | Clarks, Ooka | — | — | — |

  The Koton GCC app is in store submission and not public yet — stated as a footnote on the
  mobile project rather than linked or omitted silently. `&hl=en_IN` was trimmed from the Play
  URLs so they open in each visitor's own locale.
- **Nature of the storefront work.** Only Koton was built from scratch. On the other brands the
  work was feature development, UI fixes, deployment and ongoing maintenance on live sites.
  The brand band is therefore labelled **"Worked on"** — not "Built" or "Shipped for", and the
  resume's phrase *"Engineered 4 high-traffic storefronts"* is reframed on the site as
  *"delivered features, payment integration and performance work across 4 storefronts"*.
  Every specific achievement (Checkout.com, Lighthouse 65 → 90+, the 40+ component library, GTM)
  is unchanged and still resume-sourced.
- Hands-on mobile app store submission and taking apps live — consistent with the release-pipeline
  ownership already in FE/AI/JV.

**AWS, Docker and testing are deliberately absent.** Akinon ACC runs on AWS, but that is the
platform's infrastructure, not a claim of AWS engineering experience, so no cloud or container
skill is listed anywhere on the site.

---

## Explicitly NOT claimed anywhere on this site

AWS · GCP · Azure · Docker · Kubernetes · Terraform · Jenkins · microservices · distributed systems ·
system design · GraphQL · WebSockets · Kafka · Redis · MongoDB · Jest · React Testing Library ·
Cypress · Playwright · TDD · test coverage · Storybook · Figma · Vue · Angular · Svelte · Flutter ·
Swift · Kotlin · native iOS/Android · Stripe · Razorpay · team leadership · mentoring · team size ·
open-source contributions · repository stars · blog posts · talks · awards · testimonials ·
revenue figures · conversion-rate lifts · uptime/SLA numbers · any GitHub repo, demo, App Store or
Play Store URL · profile photo.
