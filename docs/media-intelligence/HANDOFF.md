# Project handoff

## Current deliverables

Luka Šikić's independent media-intelligence service landing page, fourth edition, and (in the larger bundle) the third version of its standalone promotional film. Artifacts were last created on 26 September 2026 and packaged on 28 September 2026. Packaging did not change site content or reverify time-sensitive biography details.

The positioning is a personal, rigorous boutique research practice for communications, brands and public affairs. The site offers media-position reviews, narrative deep dives, event/crisis reviews and ongoing intelligence briefings. The user reports an archive that continues in real time; the page itself has no live-data connection.

## Preferences and decisions

- Keep real, attributable analytical work central to the page.
- DigiKat and its timeline chart were removed from the main portfolio after user feedback. DigiKat remains a biographical reference.
- The featured work is the supplied Rimac brief, euro-adoption framing, native advertising and institutional coverage. GIMES is supporting work in development; Reddit and Xiaomi are archive links.
- The film's current topics are Rimac, euro adoption and native advertising. It uses actual report pages and archived figures, spatial camera moves and a synchronized electronic score. Do not revert to the original DigiKat/HNB/Reddit film.
- Keep the video separate from the site unless the user requests integration.
- Do not invent clients, commercial outcomes, endorsements or live-data capabilities. Publication or deployment needs a user request.

## Evidence limits to preserve

Rimac figures are report-derived weighted, model-coded estimates; manual validation is pending. Recorded comments are not representative public opinion. Use the reported sample sizes and confidence intervals. Do not imply a commissioned client relationship.

Euro-adoption percentages use each month's denominator. Native-advertising results describe headline format, not advertising performance. HNB material is a research draft. Full provenance and limits are in the documentation and film notes.

## Editing

The website is entirely editable in `site/index.html`, with adjacent local assets. No npm build is required. The website in this bundle is byte-for-byte identical to the fourth-edition preview. Its data-description and contact-list input files, raw corpus, repository clones, old film versions and machine-specific dependencies are not included.

In the larger bundle, extract `film/editable-hyperframes-project.zip` to continue video editing. Read its README and source notes. Its CLI is pinned to HyperFrames 0.8.78. The reference tutorial is https://www.youtube.com/watch?v=7jHXoPGnA4c and the framework is https://github.com/heygen-com/hyperframes. No tutorial footage or audio was copied.

## Suggested continuation prompt

"Read HANDOFF.md and the included documentation, then inspect site/index.html. This is my existing media-intelligence landing page. Continue from its current design and evidence rather than starting over. Keep the promotional film separate unless I ask to add it. My next requested change is: [describe change]."
