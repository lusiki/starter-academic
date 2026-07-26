# Site review follow-up

Updated: 2026-07-26

This note records how the multi-agent profile-site review was applied to the
active Astro site. The review itself — findings, reasoning, and the suggestions
from both implementation passes — is in [site-review.md](site-review.md).

## Implemented

- Lifted Luka Šikić's international credentials into the homepage hero. The
  visible name headline was later removed at the owner's request while keeping
  an accessible top-level heading.
- Added a compact proof strip for publications, open projects, public courses,
  and workshop series.
- Surfaced the _How Economics Absorbed AI_ study in the homepage copy, current
  work, and navigation.
- Added a direct homepage path to a linkable workshops section and clarified
  the workshop offer and formats.
- Added a student contact path for consultations and thesis supervision.
- Changed homepage publications from automatic recency to explicit curation
  through the existing `selected` field.
- Added the 2026 _Connected but Divided_ publication and cross-linked related
  publications and projects.
- Corrected publication DOI placement, author names, venue formatting,
  abstracts, publication types, and corrupted BibTeX records.
- Added BibTeX records for the newest publications.
- Improved English and Croatian homepage, course, workshop, and project copy.
- Fixed the page-heading type-scale cascade, title-link styling, theme
  contrast, row interaction, print behavior, and repeated inline styles.
- Optimized the homepage portrait from a roughly 788 KB source PNG to responsive
  WebP outputs (about 11–36 KB).
- Extended the repeatable AI-site preparation step so the Quarto microsite
  inherits the main site's fonts and color palette.
- Self-hosted Geist and Geist Mono across both the Astro and Quarto sections.
- Added Google Scholar Highwire metadata to every publication detail page.
- Added branded English and Croatian 404 pages plus legacy Hugo redirects.
- Added the social card's statistical trace motif to the homepage.
- Added a theme-aware favicon shared across the main and AI sites, and made the
  theme toggle reflect its current state.
- Surfaced NextGenerationEU funding and DigiKat project leadership in their
  relevant rows.
- Applied the three verified Croatian terminology and phrasing corrections.
- Re-exported the social card from an 890 KB PNG to a visually equivalent
  104 KB JPEG.
- Removed the homepage graphic and the counter strip. Successive attempts (a
  trace motif, then a cumulative publications chart) were both rejected as
  decoration; the aesthetic layer is now motion rather than a graphic element.
- Added a restrained entrance and scroll reveal: the hero arrives on load, and
  each section's content and its hairline rule draw in as it is reached. Guarded
  by prefers-reduced-motion, gated on a pre-paint JS hook so nothing flashes,
  and backed by a timeout so content can never remain hidden.
- Gave the accent colour a resting role: curated publications are marked in the
  year column, with a visually-hidden label so the cue is not colour alone.
- Strengthened the publication row hierarchy and moved venue emphasis from page
  ranges onto journal names across all sixteen entries.

## Deliberately deferred

- Publishing a CV: the CV workspace is private and should not be exposed without
  a deliberate review of personal information.
- Adding Luka's ORCID: no verified identifier is stored in the active site.
- Rewording the Zagreb/Vienna PhD relationship more precisely: the current
  source does not establish whether this was a joint degree or a research stay.
- Publishing incomplete or unlinked portfolio items: these need source
  material or an owner decision before they can become credible public pages.
- Changing historical publication URLs: old slugs are retained to avoid
  breaking inbound links.
