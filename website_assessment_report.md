# Website Assessment Report: lusiki/starter-academic

## Overview

Your personal academic website is built on Hugo with the Wowchemy (Academic) theme, deployed via Netlify. The repository has 223 commits spanning from November 2017 to December 2024. The site is bilingual (English/Croatian) and serves as a professional academic portfolio showcasing your role as Assistant Professor of Statistics at Croatian Catholic University.

---

## 1. Technology Stack

The site uses Hugo as its static site generator with Wowchemy Academic theme (commit `58c7dd7a` from November 2020). Hugo version pinned in Netlify is `0.78.2`. The Go module system manages the theme dependency. You also have an R based workflow (`bibtex.R`, `academic.Rproj`) for converting BibTeX publications into Hugo content pages.

**Key concern:** Both Hugo and Wowchemy versions are significantly outdated. Wowchemy has since rebranded to HugoBlox and undergone major structural changes. Hugo 0.78.2 is from late 2020 and the current Hugo version is well past 0.120+. This means you are missing years of performance improvements, security patches, and new features.

---

## 2. Site Configuration

**Base URL** is empty in the config, which means it relies entirely on Netlify environment variables at build time. This works for deployment but prevents local preview from generating correct absolute URLs.

**Site metadata** is set to type "Person" for schema.org, which is correct for a personal academic page. The site title is "Luka Sikic" in English and "Luka Šikić" in Croatian.

**Font size** is set to Large (L). The theme is "minimal" with day/night toggle enabled.

**Analytics:** Google Analytics is not configured. No tracking is active.

**Search:** Uses the built in Academic search engine (engine = 1). Algolia is not configured.

**Maps:** Uses OpenStreetMap (Mapnik) at zoom level 15, which is appropriate for showing an office location.

**Comments:** Disabled (engine = 0). The comment system supports posts, pages, docs, projects, publications, and talks but none of it is active.

**Math/diagrams:** Both LaTeX math rendering and Mermaid diagrams are disabled.

---

## 3. Content Structure

### 3.1 Homepage Widgets

The homepage uses Wowchemy's widget system. Here is the full inventory:

| Widget | Status | Weight | Notes |
|---|---|---|---|
| Hero | inactive | 10 | Default template hero, not customized |
| About | active | 20 | Your profile and bio |
| Skills | inactive | 30 | Default template content |
| Experience | active | 40 | Three positions listed |
| Publications | active | 50 | Shows recent publications |
| Teaching | active | 50 | Links to course pages |
| Accomplishments | inactive | 50 | Default template content |
| Posts | inactive | 60 | Blog section, empty |
| Talks | inactive | 70 | No talks content |
| Featured | inactive | 80 | Featured publications |
| Tags | inactive | 120 | Tag cloud |
| Contact | active | 130 | Full contact info |

Five widgets are active: About, Experience, Publications, Teaching, and Contact. The rest are disabled but still present in the repo as template defaults. Publications and Teaching share weight 50, meaning their ordering may be unpredictable.

### 3.2 Author Profile

Your profile (`content/authors/admin/_index.en.md`) contains:

**Typo in role:** "Asistant professor" should be "Assistant professor" (missing an 's').

**Bio line** is written in Croatian ("Moji interesi uključuju...") despite being in the English profile file. This will display Croatian text to English language visitors.

**Education section** is partially commented out. The degree names appear but institutions and years are hidden. This results in a list of degree names with no context.

**Social links** include Twitter, Google Scholar, GitHub, and a contact form link. The CV link is commented out. Twitter is now X and the icon/URL may need updating.

**Extended bio** is well written and covers your research interests, current projects (DigiKat and Convergence), and personal interests. It references two external project links.

### 3.3 Publications

You have 11 publication folders spanning 2011 to 2024. The BibTeX file contains 7 entries while the content directory has 11 publications, suggesting some were added manually. Publications cover economics, convergence, financial markets, media analytics, and Croatian structural change.

**Publication types** use Croatian labels in some cases ("Članak u časopisu") rather than the standard Wowchemy numeric codes (0 through 6). This may cause rendering issues with the theme's publication type filtering.

The `bibtex.R` script handles BibTeX to markdown conversion using RefManageR and tidyverse. This is a solid workflow for maintaining publications programmatically.

### 3.4 Teaching

The teaching widget links to five courses:

**Undergraduate:** Applied Statistics in R

**Graduate:** Data Science for Social Scientists, Natural Language Processing for Social Sciences, Multivariate Statistics, Learning Social Media Analytics

All links point to external GitHub Pages sites (lusiki.github.io). There is a typo: "Data Sceience" should be "Data Science".

### 3.5 Experience

Three positions listed chronologically: Institute Ivo Pilar (2012 to 2020), Faculty of Croatian Studies (2020 to 2023), and Croatian Catholic University (2023 to present). Clean and well structured.

---

## 4. Multilingual Support

The site supports English (primary, weight 1) and Croatian (secondary, weight 2). There is a Croatian translation file (`i18n/hr.yaml`) with 133 UI string translations.

Content files exist in both languages for the About, Experience, and Teaching widgets. The author profile has both `_index.en.md` and `_index.hr.md` versions.

**Navigation menu issues in Croatian (`menus.hr.toml`):**

The Croatian menu uses incorrect fragment identifiers. "Radovi" points to `#feat` instead of `#featured`, and "Kontakt" points to `#cont` instead of `#contact`. These broken anchors mean Croatian visitors clicking those menu items will not scroll to the correct sections.

---

## 5. Deployment

Netlify is configured as the hosting platform. The build command runs `hugo --gc --minify` with the site URL injected from environment variables. Deploy previews include future dated content via `--buildFuture`.

**Hugo version pinned at 0.78.2** in `netlify.toml`. This is over 5 years old.

Custom headers are configured for WebManifest and RSS content types.

---

## 6. Repository Hygiene

Several files that should not be in the repo are present:

`.RData` (2.6 KB) and `.Rhistory` (16.4 KB) contain R session data and command history. These are personal working files that leak information about your R workflow and should be in `.gitignore`.

`.vs/slnx.sqlite` is a Visual Studio cache file that should also be gitignored.

`exampleSite/` directory contains Wowchemy template example content that is not used by your site.

`content/home/New Text Document.txt` is an empty Windows text file accidentally committed.

The `.gitignore` only excludes `.idea/`, `/resources/`, `public/`, and `.Rproj.user`. It is missing entries for common artifacts.

**Commit messages** are almost entirely "weiter" (German for "further/continue"), which makes the git history essentially useless for understanding what changed and when.

---

## 7. Issues Summary

### Critical

1. **Outdated stack.** Hugo 0.78.2 and Wowchemy from November 2020 are 5+ years behind. Security patches, bug fixes, and significant performance improvements are missing.
2. **Broken Croatian navigation.** Menu anchors `#feat` and `#cont` do not match actual widget IDs `#featured` and `#contact`.
3. **Role typo.** "Asistant professor" displayed prominently on the About section.

### High Priority

4. **Mixed language in English profile.** The short bio line is in Croatian within the English language file.
5. **Teaching typo.** "Data Sceience" in the teaching widget.
6. **Empty base URL.** No `baseurl` configured, relying entirely on Netlify injection.
7. **No analytics.** Google Analytics or any alternative is not configured. You have no visibility into site traffic.

### Medium Priority

8. **Education details hidden.** Institution names and graduation years are commented out, leaving bare degree titles.
9. **CV not linked.** The CV download is commented out in the profile.
10. **Publication type labels.** Some use Croatian strings instead of numeric codes, potentially breaking theme filtering.
11. **Duplicate widget weights.** Publications and Teaching both have weight 50.
12. **Twitter to X migration.** Social link still references twitter.com and uses the Twitter icon.

### Low Priority / Cleanup

13. **Stale files in repo.** `.RData`, `.Rhistory`, `.vs/`, `New Text Document.txt`, `exampleSite/`.
14. **Uninformative commit messages.** Nearly all commits say "weiter".
15. **Inactive widgets still in repo.** Hero, Skills, Accomplishments, Posts, Talks, Tags, Featured all contain default template content.
16. **No privacy policy content.** `content/privacy.md` exists but is minimal/template.
17. **Social sharing includes Weibo.** Unlikely to be relevant for your audience.

---

## 8. What Works Well

Your site has a clean minimal theme with day/night mode that is appropriate for an academic portfolio. The bilingual setup is structurally sound even if it needs anchor fixes. The publication management through BibTeX and R is a smart workflow for an R user. The teaching section with links to dedicated course sites is practical and well organized. Contact information is thorough, including physical address and office location with a map. The extended bio strikes a good balance between professional and personal.

---

## 9. Recommendations for Next Steps

The most impactful improvements would be, in order of priority: fixing the typos and broken Croatian anchors (quick wins), upgrading the Hugo and Wowchemy versions (significant effort but essential for long term maintenance), adding analytics to understand your audience, completing the profile (education details, CV link), and cleaning up the repository. After that, you could consider activating dormant sections like blog posts or talks if you have content for them, and potentially migrating from Wowchemy to a simpler Hugo theme given that Wowchemy's upgrade path has become complex with its rebrand to HugoBlox.
