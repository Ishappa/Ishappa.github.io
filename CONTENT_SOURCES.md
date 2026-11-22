# Content sources

Every professional claim on this site traces back to one of Ishappa N's three resume PDFs.
This file is the audit trail. If a claim isn't listed here, it shouldn't be on the site.

**Sources**

- **FE** — `resumes/current/Ishappa_FE_Resume.pdf`
- **AI** — `resumes/current/Ishappa_FullStack_AI_Resume.pdf`
- **JV** — `resumes/current/Ishappa_FullStack_Java_Resume.pdf`

All resume variants (including the two AEM ones) are generated from one file,
`resumes/source/build.py`. Pre-November-2026 versions are kept in `resumes/old/`.
The whole `resumes/` folder is git-ignored; only `public/Ishappa_N_Resume.pdf`
(a copy of the FE variant) is published.
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
| React Native CLI (bare workflow) shopping apps (iOS + Android) — R&B, Lulu GCC, Whites, Koton | FE, AI, JV, USER 2026-11 |
| Individual Expo Modules for specific native capabilities; **not** Expo-managed, no EAS | USER 2026-11 |
| App submission and release activities for R&B, Whites and Koton GCC | USER 2026-11 |
| Hundreds of thousands of active shoppers | FE, AI |
| 20% cold-start reduction via AsyncStorage caching, batched API calls, JS bundle optimisation | FE, AI, JV |
| Measured via Firebase Performance Monitoring | FE, AI |
| Firebase Analytics + Crashlytics | FE, AI, JV |
| MoEngage push, in-app messaging, segmentation, deep-linked entry points, rebuilt React Navigation flows | FE, AI |
| Release pipeline: Xcode/Gradle, TestFlight/Play Console, review coordination, phased rollout | FE, AI, JV |
| Zero critical production incidents | FE, AI, JV |
| Koton live for Turkey region; Koton GCC submitted to both stores, in review | FE, AI, USER 2026-11 |
| Live on both stores: R&B, Lulu GCC, Whites | USER (store URLs below) |

> **Note on a resume inconsistency.** FE/JV say *"Shipped 2 cross-platform shopping apps"* while the
> section heading lists three brands. The site states the brands and omits the count, rather than
> resolving the discrepancy by guessing.

## Frontend / e-commerce (sections 02, 03, 04; case study `nextjs-ecommerce-storefronts`)

| Claim | Source |
| --- | --- |
| Work across high-traffic Next.js/React storefronts — R&B, Lulu GCC, Whites (no count stated) | FE, AI, JV, USER 2026-11 |
| 1M+ monthly users across GCC markets | FE, AI, JV |
| Core Web Vitals improvements and SEO ranking gains | FE, AI |
| Lighthouse 65 → 90+ via SSR/ISR, dynamic code splitting, CDN image delivery, removing render-blocking resources | FE, AI, JV |
| Checkout.com: tokenisation, 3DS, order-confirmation webhooks, PCI-compliant checkout | FE, AI, JV |
| Tailwind component library, 40+ components (cart slider, navigation, promotional widgets), ~30% faster delivery | FE, AI, JV |
| Redux Toolkit + Context API for cart, checkout, wishlist, desktop and mobile web | FE, AI |
| GTM data-layer events: impressions, add-to-cart, checkout steps, purchases | FE, AI |
| CI/CD and PR review workflows via Akinon ACC | FE, AI |

## Backend (section 06; case study `koton-multi-region-platform`)

| Claim | Source |
| --- | --- |
| Production Django storefront, Jinja2 SEO-first server-rendered pages | AI |
| Middleware and class-level overrides rather than core modifications | AI |
| Country/language switching, locale and country as independent axes, currency/payment/availability/content/RTL | AI |
| Cache-key correctness preventing cross-region content leakage | AI |
| Payment integration and session management across storefront and app | AI |
| Production support: API integration, performance, root-cause bug fixing on live multi-region traffic | AI |
| AEM migration PoC in Java (client not named) — custom components, Sling Servlets, OSGi, Core Components, HTL | JV, FE |
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

## Stated by Ishappa, 2026-11-22

- **Brands are R&B, Lulu GCC, Whites and Koton.** Clarks is removed from the site and from every
  resume. The Ooka name is removed from the site and from the FE / Full Stack resumes; the
  Java AEM proof-of-concept is still described there without naming the client. The two AEM
  resumes keep their Ooka/AEM projects unchanged (Clarks → Whites only).
- **Mobile stack:** React Native CLI (bare workflow) with individual Expo Modules for specific
  native capabilities. Not the Expo-managed workflow, no EAS.
- **Release ownership:** app submission/release activities for R&B GCC, Whites.sa and Koton GCC —
  iOS/Android build and release workflows, App Store and Google Play submissions, review
  coordination and release activities, as applicable. Lulu GCC is listed as an app worked on,
  without a submission claim.
- **Koton GCC status:** submitted to both stores, in review (supersedes "in UAT").
- **Do not claim:** CI/CD pipeline automation for mobile, Expo-managed/EAS, Swift/Kotlin, mentoring.
  "Release pipeline" wording was replaced with "release activities / submissions" for that reason.
- "Across **all** GCC storefronts" (Checkout.com) softened to "across GCC storefronts", because the
  storefront set changed and the claim was never stated for Whites.

## Final audit, 2026-11-22 (resumes and site locked for applications)

Removed or softened because they could not be backed with evidence in an interview:

- **SEO ranking gains / organic traffic improvement**: removed everywhere. Only the measured
  Lighthouse 65 → 90+ and the techniques used (SSR/ISR, code splitting, CDN images, render-blocking
  removal) remain. "SEO-focused pages" on Koton describes the page type, not an outcome.
- **~30% faster feature delivery** from the component library: removed. The 40+ shared components
  stay. Restore the figure only if there is a source for it.
- **"Zero critical production incidents"**: narrowed to "none of the releases I handled caused a
  critical production incident", and no longer a headline metric (impact tile is now
  "App submissions & releases").
- **Outcome claims without numbers**: "improving release quality" (Crashlytics) and "improving
  conversion from push clicks" (MoEngage) removed.
- **AI PoC**: "hallucination prevention" → grounding answers in live data / reducing hallucination
  risk. "Built and shipped" → "Built", always labelled a client proof of concept.
- **Groq**: removed from AI/LLM skills. It came from the old PerfLens wording; the README says Claude.
- **PerfLens on resumes** now matches the README-based site description (pre/post snapshots, diff,
  PR/MR comments, Lighthouse CI + Hermes, GitLab/GitHub/Bitbucket). The old resume claims of
  multi-run median aggregation, pinned throttling, tolerance bands and a threshold engine were
  dropped because the README does not list them.
- **AEM**: always called a proof of concept. "Integrating React/Next.js experiences with
  AEM-managed content" on the live storefronts was removed, because the migration was not adopted.
- **Django**: "large" and "owned production support" → "supported production".
- **Java**: "comfortable taking a feature … through to a Java backend" removed; JWT and
  Hibernate/JPA marked as coming from certification on the AEM Java resume as well.
- **Duplicated certification bullets** in the "AI-Assisted Development" sections removed (the
  certification is already in the summary and in Certifications).

## Explicitly NOT claimed anywhere on this site

AWS · GCP · Azure · Docker · Kubernetes · Terraform · Jenkins · microservices · distributed systems ·
system design · GraphQL · WebSockets · Kafka · Redis · MongoDB · Jest · React Testing Library ·
Cypress · Playwright · TDD · test coverage · Storybook · Figma · Vue · Angular · Svelte · Flutter ·
Swift · Kotlin · native iOS/Android · Expo-managed workflow · EAS · Stripe · Razorpay · team leadership · mentoring · team size ·
open-source contributions · repository stars · blog posts · talks · awards · testimonials ·
revenue figures · conversion-rate lifts · uptime/SLA numbers · any GitHub repo, demo, App Store or
Play Store URL · profile photo.
