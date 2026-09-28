# Media intelligence subsite

Published at `https://www.lukasikic.info/media-intelligence/` from
`site/public/media-intelligence/index.html`. The page is a standalone document
with embedded CSS and JavaScript; Astro copies it and its assets unchanged.
The Croatian version is published at `/hr/media-intelligence/` from
`site/public/hr/media-intelligence/index.html`. Each language version of the
main site links to the matching subsite. Both subsites offer a language switch
and reciprocal `hreflang` metadata, with a separate canonical URL per language.

## Source

Imported from the fourth-edition portable website bundle packaged on
28 September 2026. All 12 original bundle checksums were verified before
integration. `HANDOFF.md`, `MANIFEST.sha256` and the evidence documents here
are historical source records, not current publication instructions.
The manifest describes the original bundle paths and bytes, not this folder.

Publication changes add navigation back to the academic homepage, canonical
and sharing metadata, search indexing, and main-site navigation and consulting
links. The original unpublished-concept labels have been removed.
Research copy, charts, methodology disclosures and interactive lenses are
preserved. The portrait and supplied Rimac PDF are copied byte-for-byte.
The unused DigiKat timeline image and promotional film are not included.

## Maintenance

Edit both language versions of the subsite HTML directly. Keep `luka-sikic.webp` and
`rimac-research-brief.pdf` alongside it so relative links continue to work.
The Croatian page references these same assets by absolute site paths.
Both subsite URLs are explicitly listed in `site/astro.config.mjs` for the sitemap.
Navigation and consulting copy live in the main site's bilingual string file.

Run `npm run validate` from `site/` before deployment. Also check the subsite
at desktop and phone widths, its five lens controls, mobile navigation,
disclosures, section anchors, portrait, PDF and email links.

Preserve the evidence qualifications documented in `HANDOFF.md` and
`portfolio-evidence.json`: in particular, model coding and pending manual
validation, nonrepresentative comments, monthly denominators, descriptive
headline-format results, and research-draft status. The page itself has no
live-data connection. Research subjects are not presented as clients.

## Integration verification — 28 September 2026

The complete `npm run validate` pipeline passed in a clean source export:
formatting, Astro diagnostics (zero errors/warnings), build and internal links.
The export excluded existing local Dropbox conflict copies.

Chromium checks covered the subsite and both homepages at 1440, 1280, 1101,
1024, 768, 390 and 320 pixels. No horizontal overflow, navigation overlap,
missing images or JavaScript errors occurred. All five lenses, all methods and
FAQ disclosures, menu open/close and Escape, section anchors, PDF response,
canonical/indexing metadata and sitemap inclusion passed. Desktop and mobile
screenshots were inspected. Email links were checked without sending messages.

## Croatian version

Added on 28 September 2026. The translation covers page copy, navigation,
chart labels, methodological qualifications, metadata, accessibility labels,
all five interactive lenses and email enquiry subjects and templates.
Displayed percentages use decimal commas and counts use Croatian separators;
the underlying chart geometry, reported estimates, sample sizes and intervals
are unchanged. The original Croatian Rimac PDF remains shared by both pages.
Named publications and repository titles retain their original names.

The full validation pipeline passed. Chromium checks covered both subsites and
both homepages at 1440, 1280, 1024, 959, 768, 740, 390 and 320 pixels (32
combinations), with no horizontal overflow, clipped tested labels, navigation
overlap or browser errors. Screenshots of the translated page and research
charts were inspected. Keyboard activation of all five translated lenses,
mobile navigation and Escape, disclosures, email templates, language switches,
locale-specific homepage links, canonical/alternate metadata, shared PDF and
sitemap inclusion passed. Chart geometry matches the English version exactly.
