# Turning the repositories into a credible media-analysis portfolio

> Superseded portfolio recommendation: see [Revised portfolio direction](revised-portfolio-direction.md). This file records the earlier review and the existing preview, rather than the current recommended selection.

Reviewed 26 September 2026. Recommendations for Luka Šikić’s unpublished landing-page concept.

## Recommendation

Build the public story around four demonstrated capabilities: sustained media research, institutional coverage analysis, online-community analysis, and recurring brand reporting. DigiKat should be the flagship example; HNB, the published Reddit paper and Xiaomi show how the work extends to other subjects.

The strongest positioning is **a named analyst who turns a defined media question into an interpretable, documented research output**. The repositories support this through reports, figures, code and publications. They do not establish commercial client relationships or measured business outcomes.

Keep the landing page selective. A visitor should encounter an actual figure, a finished report, three short cases and the person responsible for the work. The broader repository inventory belongs behind those cases, where a technically interested visitor can inspect it.

## What is already added to the preview

- A featured DigiKat annual review with its original 2025 timeline, linked HTML report and PDF.
- Report-specific figures: 124,346 captured posts and 351 of 365 calendar days with collection. These are not presented as the size or coverage of the continuously growing general archive.
- Three evidence cards: HNB as a public research draft, Croatian Reddit as a published paper, and Xiaomi as a historical report archive.
- Further-reading links for the euro-adoption paper and Rimac event analysis.
- Attribution, study periods and publication status beside the evidence.

The five-lens illustration remains an explanation of the approach. The research section now supplies actual outputs. The preview remains local and unpublished.

## Priority projects and reusable material

| Project | What it demonstrates | Material worth reusing | Recommended role |
|---|---|---|---|
| [DigiKat](https://github.com/lusiki/DigiKat) | A sustained research programme with recurring reports, source profiles, coverage checks and interpretable findings | Annual-review timeline; report/PDF; one source-profile example; within-platform actor map | Main visual case and sample deliverable |
| [HNB Media Attention](https://github.com/lusiki/HNB_Media_Attention) | Institutional coverage analysis, source concentration and attention over time | Broad media hub; source-concentration chart; fixed-source comparison; bilingual brief | Recent institutional case, explicitly labelled research draft |
| [Connected but Divided](https://github.com/lusiki/Connected-but-divided) | Published work combining networks, topic models and lexical sentiment | Publication; community-composition or sentiment comparison; a short interpretation | Academic credibility and community-analysis case |
| [Xiaomi](https://github.com/lusiki/Xiaomi) | Recurring comparative reporting with general and platform-specific outputs | July–October 2021 reports; report structure; a carefully relabelled brand-frequency chart | Historical brand-analysis case |
| [Rimac-komunikacija](https://github.com/lusiki/Rimac-komunikacija) | A bounded analysis around a corporate event | Event scope, dated timeline, platform comparisons | Supporting event-analysis case |
| [Einfuhrung_des_Euro](https://github.com/lusiki/Einfuhrung_des_Euro) | Structured media-frame analysis by outlet and period | Frame-by-outlet/period comparisons, supported by the published paper | Supporting narrative-analysis case after editorial cleanup |

### 1. DigiKat: make the output tangible

The [2025 annual review](https://lusiki.github.io/DigiKat/assets/izvjestaji/annual-review-2025.html) is the clearest example of the deliverable a prospective buyer could understand immediately. It includes a complete English edition and a [PDF](https://lusiki.github.io/DigiKat/assets/izvjestaji/annual-review-2025.pdf).

**Best visual:** the [annotated 2025 timeline](https://github.com/lusiki/DigiKat/blob/7a13ef07c171cf353a36d88268c6092ac177048f/assets/izvjestaji/annual-review-2025_files/figures/fig04_year-1440.png). It shows an interpretable pattern, connects dates with events, and visibly marks the September collection interruption. It is now reproduced unchanged in the preview with attribution.

Suggested case title: **“From a year of coverage to a usable annual review.”**

Suggested interpretation: “The largest daily peak in the 2025 Catholic-topic corpus coincided with the death of Pope Francis on 21 April. An annotated timeline separates these event peaks from the interrupted collection period.” This establishes a descriptive result; it does not claim to identify the causal effect of an event.

For a later case page, add one source profile and a single panel from the [actor map](https://github.com/lusiki/DigiKat/blob/7a13ef07c171cf353a36d88268c6092ac177048f/assets/images/maps/mobile/plot-actor-map.png). The current three-panel map is too dense for a small homepage card. Keep comparisons within platforms, label the axes and explain what the reach estimate measures.

**Scope discipline:** the report’s [derived figures](https://github.com/lusiki/DigiKat/blob/7a13ef07c171cf353a36d88268c6092ac177048f/studies/annual-report/output/2025/annual_report_derived.csv) and [study README](https://github.com/lusiki/DigiKat/blob/7a13ef07c171cf353a36d88268c6092ac177048f/studies/annual-report/README.md) distinguish the official 413,985-post corpus from the older 710,307-record accumulator. Use the report-specific 124,346 posts for 2025; disclose the 1–14 September collection gap. The topic and tone analyses use smaller samples and should not be described as full-corpus classifications. An outlet profile concerns the Catholic-topic subset, not everything that outlet published.

The repository labels project materials CC BY 4.0. Preserve attribution to DigiKat, Luka and collaborators, and the university. Keep the academic project’s identity clear within the personal service page.

### 2. HNB: the strongest institutional example, with draft status visible

The [broad HNB media hub](https://lusiki.github.io/HNB_Media_Attention/media/) is especially relevant to communications and public-affairs buyers. It reports **33,235 captured publications explicitly mentioning HNB across 281 outlets for January 2021–August 2026**. These figures are documented in the [findings registry](https://github.com/lusiki/HNB_Media_Attention/blob/fd26489896d05b39a3b9e49ca2ea69d1125c4426/media-hub/public/data/media/findings.json) and [summary](https://github.com/lusiki/HNB_Media_Attention/blob/fd26489896d05b39a3b9e49ca2ea69d1125c4426/media-hub/public/data/media/summary.json).

Suggested case title: **“Where an institution appears—and how its coverage is distributed.”**

**Best next visual:** a source-concentration chart paired with a sentence explaining the distribution; alternatively, the all-source versus fixed-128-source comparison. The latter makes your judgement visible: changes in collection and source mix need to be distinguished from changes in coverage.

The reusable product patterns are as valuable as the figures: bilingual briefs, exportable charts, source downloads, explicit units, and versioned findings. A visitor can see both an executive interpretation and the evidence behind it.

**Keep the two studies separate.** The root [inflation-attention study](https://lusiki.github.io/HNB_Media_Attention/) has a different scope and endpoint from the broad media hub. Its saved [visibility figure](https://github.com/lusiki/HNB_Media_Attention/blob/fd26489896d05b39a3b9e49ca2ea69d1125c4426/public/figures/visibility-full.png) must not be presented as a visualisation of the 33,235-publication corpus.

The current [release record](https://github.com/lusiki/HNB_Media_Attention/blob/fd26489896d05b39a3b9e49ca2ea69d1125c4426/media-hub/content/releases.json) is presentation version 2026-09-22.2, a **public research draft with author review and independent validation pending**. Public aggregates can support rebuilding the presentation; the underlying article archive is not publicly available for a complete independent rerun. Keep this case labelled accordingly.

### 3. Croatian Reddit: published methodological credibility

[Connected but Divided](https://doi.org/10.22572/mi.32.1.2), by **Tamara Kunić and Luka Šikić**, is published in *Medijska istraživanja*, 32(1), 31–54 (2026). The study uses 11,503 Reddit comments from 14 March to 10 June 2024 and combines community detection, topic modelling and lexicon-based sentiment analysis.

Suggested case title: **“Shared topics, different patterns of discussion.”**

**Best visual:** community composition (Figure 2) or the [community sentiment comparison (Figure 4)](https://github.com/lusiki/Connected-but-divided/blob/8d76d6ccbbe38487abea0d67e8cdcc63ee04664c/assets/figures/figure-4.png). They explain a finding more quickly than the dense network graph. Reserve the network for a larger case page with an explanation of nodes, edges, communities and bridge scores.

Use the paper to support the analytical capability; avoid interpreting lexicon scores as direct measurements of participants’ emotions or as representative Croatian public opinion. The repository republishes the paper in HTML/PDF; it is not evidence that the complete underlying research pipeline is publicly reproducible.

The preview links to the paper rather than copying its figures. If a journal figure is later reproduced, use the journal’s reuse terms and preserve both authors’ credit; the repository’s site-code permission is limited to non-commercial academic use.

### 4. Xiaomi: demonstrate a repeatable reporting format

The [archive](https://github.com/lusiki/Xiaomi) contains monthly general and platform-specific reports for July–October 2021, plus weekly examples. This is valuable evidence of sustained reporting rather than an isolated analytical exercise.

Suggested case title: **“A recurring view of brand coverage and competitors.”**

Reuse the cadence, report anatomy and cross-platform organisation. Before placing an old chart on the homepage, rebuild or relabel it carefully. In the inspected [October source](https://github.com/lusiki/Xiaomi/blob/e9edf7e326ce5973d47bdf5b56512e970718cc68/10Oktober/General.Rmd), the brand timeline divides brand-word counts by all cleaned word counts for the day. It therefore represents **brand-token frequency**, not the share of articles mentioning a brand, consumer market share or a universal share-of-voice measure. Its facet scales also differ.

The README has some misdirected platform links. A short curated case page should eventually take visitors directly to selected, checked reports. The preview currently identifies this as a historical archive and does not reuse its charts or claim Xiaomi was a client.

### 5. Rimac and euro adoption: useful supporting cases

The [Rimac repository](https://github.com/lusiki/Rimac-komunikacija) documents a July 1–16, 2021 collection around Rimac/Nevera and the Bugatti announcement. It supports an event-reconstruction example. Reuse the bounded question and a dated source/platform timeline, after checking chart denominators. Do not turn descriptive activity into a claim that communication caused a business result.

The [euro-adoption analysis](https://github.com/lusiki/Einfuhrung_des_Euro) contains frame-by-outlet and frame-by-period comparisons. Pair it with the [2026 publication](https://www.lukasikic.info/publications/2026-competing-media-frames-euro-adoption-croatia/) to demonstrate narrative analysis. The source still has an “Untitled” document heading and a minimal README; clean its presentation and establish its relationship to the final published results before presenting it as a polished replication package.

## The next content worth producing

1. **Three short case pages.** Give each the same five-part structure: the question, the observed data, one finding, the resulting deliverable, and the study’s limits. Start with DigiKat, HNB and the published Reddit paper. Each should connect to one relevant service.
2. **A two-page sample brief.** Derive it from a stable published DigiKat result, with one chart, three findings and a compact methods box. Label it a portfolio sample. It would let prospects assess the form of the commissioned output without implying an engagement has already happened.
3. **One modern brand-report example.** Rework a historical Xiaomi report with consistent labels, explicit denominators and a short executive interpretation. Keep the 2021 date prominent; current data would require a new analysis.
4. **A small evidence note on every case.** Include study period, unit, source coverage, status, collaborators and a link to the original output. The detailed methods belong on the case page; the homepage needs only the information that changes interpretation.

For the personal brand, keep “Luka Šikić — Media Intelligence & Research” prominent. Describe DigiKat as the flagship collaborative research project. This makes the methods transferable without making all potential clients infer that the service only studies religious subjects.

## Material to keep out of the main portfolio for now

- **DigiKat news-gap profiles:** the study documents provisional classifications and outstanding manual validation. Do not promote them as established audience preferences or decision-ready outlet recommendations.
- **NativeAadvertising:** bibliographic placeholders in the README need resolution before it becomes a publication credential.
- **NewAge-Channels-on-YouTube:** explicitly ongoing; useful as a future creator-analysis case after findings and validation are finalised.
- **TaxiDisruption:** an older preliminary, outlet-specific study whose README still contains an unresolved article count.
- **Older HNB repositories and EchoChamber:** use the current HNB hub and the published Reddit study as the primary references; older versions can remain in a research archive.
- **Unrelated teaching, finance and general coding repositories:** useful evidence of methods expertise on the academic profile, but they dilute the media-service landing page.

## Review boundaries and verification

This was an inspection of the public repository inventory and the most relevant READMEs, source files, saved outputs, manifests and selected chart assets. The underlying research pipelines were not rerun, and the record-level media archive was not audited. Repository-reported checks are not represented as checks independently executed here.

The DigiKat HTML/PDF, HNB media hub, Reddit website, Reddit DOI and euro-publication page returned HTTP 200 during review. The DOI resolved to the journal record at Hrčak. Repository versions used for the detailed review were DigiKat `7a13ef07`, HNB `fd264898`, Reddit `8d76d6cc`, Xiaomi `e9edf7e3`, Rimac `d353796d` and euro adoption `1ff02b68`.

The new page content avoids client logos, endorsements, invented testimonials, causal business outcomes and a combined corpus total across incompatible versions. Suggested new case pages and the two-page sample brief are recommendations; they have not been created in this update.
