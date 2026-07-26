# Site review follow-up

Updated: 2026-07-26

This note records how the multi-agent profile-site review was applied to the
active Astro site.

## Implemented

- Made Luka Šikić's name and international credentials visible in the homepage
  hero.
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
