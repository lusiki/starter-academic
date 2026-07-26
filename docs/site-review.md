# Site review — lukasikic.info

Date: 2026-07-26
Scope: the active Astro site in `site/`
Companion note: [site-review-follow-up.md](site-review-follow-up.md) records what was applied.

## Method

Six independent review lenses were run over the repository and the live site:
information architecture, professional positioning, English copy, Croatian copy,
visual design, and a cold-visitor walkthrough as three personas (an economics
professor deciding whether to invite the author to speak, a Croatian institution
considering an AI workshop, and a prospective student).

Each reviewer was paired with an adversarial critic that re-checked every claim
against the actual files and discarded advice that was generic, factually wrong,
or harmful to the site's minimal character. Roughly a third of the raw
suggestions were dropped or rewritten at that stage.

The Croatian lens lost its agent to a session limit and was reviewed directly
instead, so it carries less verification weight than the other five.

## Verdict

The site is already in the top decile of academic personal sites. The bones are
unusually good: a real design system, a complete bilingual mirror, content
collections with proper schemas, link checking in CI, and open materials behind
nearly every claim.

The consistent finding across all six lenses was that the site *undersold* its
own substance. The flagship AI study was hidden behind a two-character nav
label, the internationally legible credentials sat in a paragraph at the bottom
of the homepage, the consulting offer had no path to the evidence supporting it,
and the publication metadata carried legacy debris from the old Zotero export —
precisely the layer that scrupulous academic readers inspect.

| Lens | Finding |
| --- | --- |
| Architecture | Sound five-page structure and full EN/HR parity, undermined by a split-brain content model that left work orphaned and the `/ai/` study unreachable. |
| Positioning | A careful reader reaches the right conclusion, but has to work for it: credentials buried, homepage showing the newest papers rather than the strongest. |
| English | Genuinely good site-authored voice; flab in a few load-bearing sentences, and translated-sounding legacy abstracts underneath. |
| Croatian | Natural and well-formed — correct enclitics, dates, number formatting. A few calques and one wrong term of art. |
| Aesthetics | A better design system than almost any academic site, executed so quietly that its best ideas sat unused as dead CSS. |
| First impression | Professor: convinced, then distracted by metadata slips. Workshop client: interested, no path from offer to proof. Student: well served. |

## Applied in commit 2324354

Most verified findings were implemented the same day across 39 files. Recorded
here so the reasoning behind each change survives.

### Content organization

- Added the 2026 *Connected but Divided* paper to the publications collection.
  It had been described as published on the homepage and as a project, but was
  absent from `/publications/` — the one page peers and committees audit.
- Surfaced *How Economics Absorbed AI* three ways: a self-describing nav label
  ("05 AI study"), a link in the bio, and a featured current-work card. It had
  previously been reachable only through an unexplained two-character label.
- Gave workshops a linkable `#workshops` anchor, a proper section label, and a
  direct path from the homepage contact section.
- Switched homepage publications from automatic recency to explicit curation
  through the `selected` frontmatter flag, which the schema defined and three
  files set but no component ever read.
- Cross-linked publications and projects covering the same research.
- Reconciled the bio's teaching claim with what the teaching page evidences.
- Stopped homepage section numbers colliding with the nav's site-level numbers
  by moving homepage sections to letters.

### Positioning

- Lifted the international credentials (PhD Zagreb and Vienna, Kiel Institute)
  into the hero meta block. The visible name headline added in that pass was
  later removed at the owner's request; an accessible top-level heading remains.
- Added a proof strip computing honest counts from the content collections,
  using the stat-grid component that had been fully built but never rendered.
- Rewrote the consulting offer from one polite sentence into named service lines
  with a link to the workshop evidence.
- Replaced résumé boilerplate in the background section with concrete markers.
- Added a student-facing next step covering consultations and thesis
  supervision.

### Language

- Split the overlong final sentence of `bio1` and removed the borrowed metaphor
  "brings these threads into conversation".
- Untangled the seven-`and` list opening `bio2`.
- Renamed section headings: "Path" became "How I got here", "Selected current
  work" became "What I'm working on".
- Wrote English abstracts for the three Croatian-language publications, which
  had been showing Croatian text under an English "Abstract" label.
- Replaced the 2019 paper's draft abstract, whose stated findings contradicted
  the published abstract sitting in the same file's BibTeX block.
- Fixed a backtick used as an apostrophe in a publication title, standardised
  spelling variants, and corrected range dashes.
- Corrected "Economic Institute Zagreb" to the institute's own English name.

### Trust and metadata

- Removed a DOI on the 2023 EFZG working paper that belonged to a different 2024
  paper in a different journal. Anyone resolving it landed on the wrong work.
- Stripped raw ORCID markdown from author fields, which rendered as literal
  brackets and URLs on two detail pages.
- Replaced BibTeX blocks containing mojibake author names and local Windows
  Zotero file paths. Anyone citing the work copied broken entries.
- Normalised author diacritics. The owner's own name appeared both as "Luka
  Sikic" and "Luka Šikić" across his publication list; a co-author appeared with
  three different spellings across three papers.
- Moved DOIs out of venue strings into the `doi` field, so the DOI buttons
  appear and the raw URLs stop rendering as dead text in list views.
- Added BibTeX to the newest publications.

### Aesthetics

- Fixed a cascade bug where `.hero__title--page` was declared before
  `.hero__title` at equal specificity, so every subpage heading rendered at
  display size with a 14ch wrap.
- Fixed dead underline rules on publication titles.
- Repaired dark-mode contrast on text selection and the primary button, both of
  which put white text on the light-blue dark-mode accent.
- Added a restrained row hover treatment and a print stylesheet.
- Committed the portrait to full grayscale with a colour reveal on hover.
- Replaced the 800 KB portrait PNG with responsive WebP output.
- Consolidated seventeen inline style attributes into component classes.
- Extended the AI-site prepare step so the Quarto microsite inherits the main
  site's fonts and palette, softening the hand-off seam.

## Implemented in the follow-up

All eight verified follow-up items below were implemented on 2026-07-26. Their
original rationale is retained here as an audit trail.

### 1. Self-host Geist and Geist Mono

`site/src/styles/colors_and_type.css:6` imports the fonts from Google Fonts.
This is the worst-case loading pattern: the browser must download and parse the
site CSS before it discovers the Google stylesheet, then fetch the font files
from a third host — three serial round-trips, with no preconnect anywhere in
`Base.astro`, guaranteeing a font-swap flash on first visit.

Replace with self-hosted variable WOFF2 files plus `<link rel="preload">`. Two
variable files also replace the six static weights currently requested.

**Applied:** The Astro site now loads variable Geist packages locally and
preloads the primary Latin files. The Quarto preparation step copies the same
local font files and removes its Google Fonts requests.

### 2. Google Scholar citation meta tags

The sixteen publication detail pages emit no Highwire tags (`citation_title`,
`citation_author`, `citation_publication_date`, `citation_journal_title`,
`citation_pdf_url`, `citation_doi`), so Scholar cannot read them as scholarly
records. `Base.astro` exposes no head slot, so a page component currently cannot
inject them at all.

Add `<slot name="head" />` inside the layout's `<head>` and fill it from
`entry.data` in `PublicationPage.astro`. Every required value already exists in
frontmatter. This is the highest-value invisible change for the academic
audience.

**Applied:** `Base.astro` now exposes the head slot, and all publication detail
pages emit the available Highwire citation fields.

### 3. A 404 page and legacy redirects

There is no `src/pages/404.astro` and no `public/_redirects`, so any bad URL
serves Netlify's unbranded default with no route back into the site. The retired
Hugo site used singular section paths (`/publication/`, `/project/`, `/post/`,
`/talk/`), so previously indexed or externally linked URLs now dead-end.

Add a branded 404 in both locales, and a `_redirects` file mapping the legacy
paths to their current equivalents.

**Applied:** English and Croatian branded 404 routes are present, with Netlify
redirects for the retired singular section paths.

### 4. Bring the og.png motif onto the site

The social card's thin grayscale statistical traces with a single accent line
are the site's one recognisable visual idea, and they appear nowhere on the site
itself. Add a small inline SVG band — hairline strokes using the gray tokens,
one series in the accent — either along the bottom of the homepage hero or as a
full-width band above the footer.

Because it uses the CSS custom properties it adapts to both themes
automatically. Static is sufficient; an optional one-time stroke draw-in should
sit behind `prefers-reduced-motion: no-preference`. This is the single move that
takes the site from clean to memorable while staying inside its minimal
character.

**Applied:** A token-driven CSS trace band now sits between the homepage hero
and proof strip and adapts automatically to either color theme.

### 5. Favicon and theme toggle

The favicon is a flat `#171717` square data URI: invisible against dark browser
chrome and indistinguishable from a placeholder. Replace with a monogram or the
nav's dot mark, theme-aware via an embedded `<style>` inside the SVG, and reuse
the same icon in the Quarto build so both halves of the domain share a tab
identity.

Separately, the theme toggle in `Nav.astro` always shows a moon regardless of
state. Include both sun and moon paths and toggle visibility from
`:root[data-theme="dark"]`.

**Applied:** The favicon now uses the statistical trace mark and adapts to
browser color preference. It is shared with the Quarto microsite. The toggle
shows sun or moon according to its actual state.

### 6. Croatian micro-fixes

Three items, all small:

- `strings.ts`, `projects.hero` (HR): "Kod, podaci i tekstovi objavljeni u
  otvorenom kodu" is circular — it says code published in open code. Use "Kod,
  podaci i tekstovi — sve javno objavljeno."
- `2025-breakdown-portfolio-hedge-markov-switching.md`, `abstract_hr`:
  "dvostanični" is a biology term meaning two-celled. The econometrics term is
  "Markovljev model promjene režima s dva stanja".
- `2026-competing-media-frames-euro-adoption-croatia.md`, `abstract_hr`:
  "u društvenim i političkim pokrivanjima" — "pokrivanje" does not pluralise
  naturally as a count noun for coverage areas. Use "temama".

One judgement call rather than an error: "Kako sam stigao dovde" is warm and
colloquial, matching the English "How I got here". If it ever reads as too
informal beside "Docent", "Moj put" is the conservative alternative.

**Applied:** All three objective language corrections were made. The warmer
"Kako sam stigao dovde" wording was retained as the review recommended.

### 7. Funding and leadership markers

The NextGenerationEU grant is the final sentence of a workshop description, and
"Project lead" is two words inside a card body. Economists at strong
institutions foreground grants and principal-investigator roles. A small mono
eyebrow line on the relevant rows — "Funded — NextGenerationEU", "Role —
Project lead, 2025–27" — surfaces them without disturbing the design.

**Applied:** Both markers now appear in the relevant teaching and project rows,
in English and Croatian.

### 8. Re-export the social card

At roughly 890 KB the social card is heavy enough that social crawlers may time
out. A lossless re-export should reach under 300 KB with no visible change.

**Applied with a format adjustment:** The textured PNG could only be reduced to
roughly 554 KB losslessly. The same 1200 × 630 artwork is now a high-quality
JPEG at roughly 104 KB, and all main-site and Quarto metadata points to it.

## Design pass — aesthetics

A later pass took the five highest-leverage aesthetic recommendations. Three
were already covered by the work above (self-hosted fonts, the favicon and
stateful theme toggle, and a first version of the trace motif). The remaining
two, plus an upgrade to the motif, were implemented on 2026-07-26.

### Rebuilt the trace motif from real series

The first version drew three straight 1px rules rotated a degree or two. At a
band 900px wide it read as gently wavy lines rather than as data, which is the
whole point of the motif on an econometrician's site.

It is now `src/components/SignalBand.astro`: four seeded random walks rendered
as SVG polylines over a 1200 × 72 field, three recessive gray series and one
accent series that trends upward and terminates in a marker. `pathLength="1"`
normalises the draw-in animation so no path length has to be measured, and
`vector-effect="non-scaling-stroke"` keeps strokes at 1px under the non-uniform
stretch. The band is taller than the original so the walks have room to be
legible. Motion sits behind `prefers-reduced-motion: no-preference`.

### Gave the accent one resting job

Before this pass the accent appeared only on hover and focus — nowhere at rest —
which is why the pages read as flatter than the palette implies.

It now marks the author's own curation: on `/publications/`, entries with
`selected: true` in frontmatter carry an accent year and a 2px accent rule in
the margin. This encodes something true rather than decorating, and it reuses a
field the site already maintains. The marker is paired with a visually-hidden
"Selected work" label in both locales, so the distinction is never carried by
colour alone. The homepage list does not repeat the marker, since that list is
already curated by the same flag.

### Publication row hierarchy

The rows had three text tones doing four jobs. The year moved from `--muted` to
`--fg-2` to give it presence against the venue line, the title-to-venue gap
opened slightly, and the venue line gained line-height.

This surfaced a content problem the styling would otherwise have amplified: the
`_..._` emphasis in venue strings wrapped the *page range* rather than the
journal name, inverting citation convention. Across the collection, eleven
entries italicised page ranges, four had no emphasis at all, and one correctly
italicised a book title. All sixteen now italicise the venue name and leave
volume and pages plain. Journal names whose own titles contain commas —
*Croatian Review of Economic, Business and Social Statistics* and *Notitia —
časopis za ekonomske, poslovne i društvene teme* — needed hand correction after
the bulk rewrite.

## Deferred — owner decisions

These need information or a judgement only the owner has. Also recorded in
[site-review-follow-up.md](site-review-follow-up.md).

- **A public CV.** No CV is downloadable anywhere on the site, and it is the
  single most expected artifact for the academic-peer audience. The workspace in
  `cv/` is private and contains personal contact details, so publishing needs a
  deliberate redaction pass first.
- **ORCID.** No ORCID iD appears in the contact row or in the JSON-LD `sameAs`
  list, although co-authors' ORCIDs are shown. Add once a verified identifier is
  on file.
- **The Zagreb/Vienna PhD wording.** "PhD in Economics, University of Zagreb and
  University of Vienna" reads as a jointly awarded degree. If it was a joint
  programme, saying so adds weight; if Vienna was a research stay, saying that
  avoids the appearance of overclaiming.
- **Five hidden portfolio items.** The `featured: false` entries in
  `portfolio.ts` render nowhere on the deployed site. Two exist in no other form
  — the Croatian National Bank media-mapping engagement, which is the most
  client-relevant institutional proof the site has, and the ESG-tourism study.
  Decide: promote the CNB engagement to a project page, delete the entries that
  duplicate existing pages, or render non-featured items as a secondary list.
- **The mismatched 2016 slug.** One publication's URL says 2016 while its date
  says 2018. The slug was kept deliberately to avoid breaking inbound links. If
  the `_redirects` file from item 3 is added, renaming with a redirect becomes
  safe.
