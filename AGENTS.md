# AGENTS.md

Guidance for any agent or collaborator editing this repository.

## Purpose

A public, single-page immersive companion to Micah Miner's dissertation proposal. It walks a reader
through Chapters One to Three visually and links back into the `minerclass` dissertation ecosystem.
It is orientation, not a findings report, and it collects no data.

## Canonical terminology (current as of the July 2026 draft, keep sibling sites consistent)

Some earlier sites carry outdated wording. This repo uses the **current** draft's language:

- **Design:** *qualitative-dominant convergent mixed methods case study* (QUAL + quan).
- **Case study tradition:** **Merriam's interpretive, constructivist tradition.** Do **not** write
  "applied," "collective," "instrumental," or "Stake-aligned." Stake and Yin appear only as contrast
  lenses the proposal argues against.
- **Case boundary:** bounded **by the phenomenon** (K-12 educator and institutional sensemaking about
  pedagogical friction) and by the post-generative-AI period, **not by a single site**. The Pedagogical
  Friction Framework is the interpretive **lens**, not the boundary of the case.
- **Five media-ecology stages:** primary orality, literacy, secondary orality, **algorithmic secondary
  orality** (Miner, mid-2000s to early 2020s), **tertiary algorithmicity** (Miner, generative-AI present).
- **Three pressures of tertiary algorithmicity:** noetic displacement, rhetorical saturation, existential
  abstraction.
- **Framework:** Pedagogical Friction with three **learner-facing** dimensions (noetic / head, rhetorical /
  room, existential / world) plus **infrastructural friction (system) as the conditioning layer** that
  enables or constrains the other three. Do not present the four as co-equal; infrastructural is the base.
- **Equity distinction:** **productive vs. exclusionary** friction, cutting across all dimensions.
- **Sampling (current draft):** roughly 12 to 16 practitioner interviews (about 6 to 8 classroom-facing
  educators, 3 to 4 building administrators, 3 to 4 district or system leaders), 4 university students
  (supporting retrospective strand), and about 200 survey respondents.
- **Citations:** Miner **2026a** = qualifying paper (framework source); Miner **2026b** = Zenodo open-data
  companion (RAND/Gallup + NCES evidence arc); Miner **2026c** = the *i.e.: inquiry in education* article.

## Data and privacy restrictions

- Do not fabricate citations, quotations, page numbers, or findings.
- No participant data, transcripts, district specifics, tokens, committee names, or raw unverified AI
  output in any tracked file.
- Do not add analytics, forms, or response storage. This page collects nothing.

## Editing model

- No build step. Vanilla HTML/CSS/JS. Narrative content is in `index.html`; the arc, framework, and
  card-sort data are arrays at the top of `js/app.js`.
- User-facing copy avoids em dashes by author preference.

## Validation

```bash
python -m http.server 8000     # click through every section at http://localhost:8000/
# check: Ong timeline switches stages, framework dimensions switch, card sort reveals notes,
# nav highlights on scroll, layout holds at mobile width.
```

## Related repositories

Part of the `minerclass` dissertation ecosystem: `dissertation-overview` (hub),
`dissertation-proposal-studio` (intellectual history), `diss-proposal-defense` (defense prep),
`dissertationquestionsbeta` (instruments and concept companions),
`genAI-ML-pedagogy-of-friction-site`, `genAI-ML-the-technologizing-word-site`,
`When-Output-Looks-Like-Learning` (article), `k12-ai-evidence-arc-2024-2026` (open data).
Check the `dissertation-overview` hub and this file for canonical wording before changing terminology.
