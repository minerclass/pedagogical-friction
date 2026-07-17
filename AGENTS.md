# AGENTS.md

Guidance for any agent or collaborator editing this repository.

## Purpose

A public, single-page immersive companion to Micah Miner's dissertation proposal. It walks a reader
through Chapters One to Three visually and links back into the `minerclass` dissertation ecosystem.
It is orientation, not a findings report, and it collects no data.

## Canonical terminology (current as of the July 2026 draft, keep sibling sites consistent)

Some earlier sites carry outdated wording. This repo uses the **current** draft's language:

- **Design:** *qualitative-dominant convergent mixed methods* (QUAL + quan) grounded in constructivist qualitative inquiry.
- **Interpretive stance:** Participant meaning is situated and co-constructed. The Pedagogical Friction Framework is a sensitizing and revisable lens, not a container for the inquiry.
- **Participants:** Classroom-facing educators, building-level administrators, district or system-level leaders, and adult university students.
- **Evidence hierarchy:** Interviews, card-sort explanations, documents, and open-ended survey responses provide the qualitative core. Closed-ended survey items and NCES/RAND data provide supporting quantitative context. AI-generated texts are a distinct nonparticipant comparison source within the study.
- **Qualitative analysis:** Use first-cycle coding close to participant language, second-cycle theme development, reflexive memoing, peer debriefing, and attention to discrepant accounts. Avoid mechanical thresholds for theme or framework revision.
- **Five media-ecology stages:** primary orality, literacy, secondary orality, **algorithmic secondary
  orality** (Miner, mid-2000s to early 2020s), **tertiary algorithmicity** (Miner, generative-AI present).
- **Three pressures of tertiary algorithmicity:** noetic displacement, rhetorical saturation, existential
  abstraction.
- **Framework:** Pedagogical Friction with three **learner-facing** dimensions (noetic / head, rhetorical /
  room, existential / world) plus **infrastructural friction (system) as the conditioning layer** that
  enables or constrains the other three. Do not present the four as co-equal; infrastructural is the base.
- **Equity distinction:** **productive vs. exclusionary** friction, cutting across all dimensions.
- **Chapter Two defense framing:** present the literature review as an intellectual genealogy across media
  ecology, critical algorithm and platform studies, learning science, literacy and authorship, and K-12
  governance and adoption. Stiegler is a complementary bridge, not the organizing anchor.
- **Chapter Three defense framing:** constructivism explains how meaning is understood, sensemaking explains how participants interpret ambiguous conditions, and thematic analysis explains how patterns are developed across accounts.
- **Citations:** The completed qualifying paper is incorporated into the dissertation's intellectual foundation rather than treated as a separate authority. The Zenodo open-data companion and the *i.e.: inquiry in education* article remain distinct public artifacts.

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
