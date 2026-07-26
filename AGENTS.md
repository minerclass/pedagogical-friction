# AGENTS.md

Guidance for any agent or collaborator editing this repository.

## Purpose

A public, single-page immersive companion to Micah Miner's dissertation proposal. It walks a reader
through Chapters One to Three visually and links back into the `minerclass` dissertation ecosystem.
It is orientation, not a findings report, and it collects no data.

## Canonical terminology (the final submitted Chapters 1–3, July 2026; keep sibling sites consistent)

Some earlier sites carry outdated wording. This repo uses the **final submitted** draft's language:

- **Design:** *qualitative-dominant convergent mixed methods study* (QUAL + quan) grounded in
  constructivist qualitative inquiry, per Creswell and Plano Clark (2018).
  **The case-study framing was dropped from the submitted draft.** Do not reintroduce "case study,"
  Merriam, Stake, Yin, "bounded case," "case boundary," or "embedded role groups." The study is
  bounded by phenomenon, participant roles, and period, and it is not described as a case.
  (Note: "bounded, prespecified agentic-artifact task" is unrelated and correct — leave it.)
- **Interpretive stance:** Participant meaning is situated and co-constructed. The Pedagogical Friction Framework is a sensitizing and revisable lens, not a container for the inquiry.
- **Participants:** Classroom-facing educators, building-level administrators, district or system-level leaders, and adult university students.
- **Evidence hierarchy:** Role-based practitioner interviews and the educator survey form the analytic core. Retrospective university-student accounts, documents, national datasets, and the AI-generated text and agentic-artifact comparison supplement that core. The distinct nonparticipant comparison retains at least one bounded, prespecified agentic-artifact task even if systems, task count, or repeated runs are scaled.
- **Qualitative analysis:** Use first-cycle coding close to participant language, second-cycle theme development, reflexive memoing, peer debriefing, and attention to discrepant accounts. Avoid mechanical thresholds for theme or framework revision.
- **Five media-ecology stages:** primary orality, literacy, secondary orality, **algorithmic secondary
  orality** (Miner, mid-2000s to early 2020s), **tertiary algorithmicity** (Miner, generative-AI present).
- **Three pressures of tertiary algorithmicity:** noetic displacement, rhetorical saturation, existential
  abstraction.
- **Framework:** Pedagogical Friction with three **learner-facing** dimensions (noetic / head, rhetorical /
  room, existential / world) plus **infrastructural friction (system) as the conditioning layer** that
  enables or constrains the other three. The institutional environment is not a neutral backdrop. Do not present the four as co-equal; infrastructural is the base.
- **Equity distinction:** **productive vs. exclusionary** friction, cutting across all dimensions.
- **Chapter Two defense framing:** present the literature review as an intellectual genealogy across media
  ecology, critical algorithm and platform studies, learning science, literacy and authorship, and K-12
  governance and adoption. Stiegler is a complementary bridge, not the organizing anchor. Distinguish Stalder's
  curatorial account of algorithmicity from tertiary algorithmicity's extension into symbolic generation.
- **Chapter Three defense framing:** constructivism explains how meaning is understood, sensemaking explains how participants interpret ambiguous conditions, and thematic analysis explains how patterns are developed across accounts.
- **Citations, current lettering:** The submitted proposal's reference list contains exactly two Miner
  entries, and this repo must match them:
  - **Miner (2026a)** = the Zenodo open-data companion, *K–12 teacher AI evidence arc, 2024–2026*.
  - **Miner (2026b)** = the *i.e.: inquiry in education* article, *When the output looks like learning*.
    This is the **framework source** — cite it for pedagogical friction and tertiary algorithmicity.
  - **There is no Miner (2026c).** Earlier versions of this repo used a three-way scheme
    (2026a = qualifying paper, 2026b = Zenodo, 2026c = article). That lettering is retired. The
    completed qualifying paper is incorporated into the dissertation's intellectual foundation
    rather than cited as a separate authority.

## Change history

`AGENT_LOG.md` in this repository is the append-only record of agent-assisted
changes. Read it before editing, and add an entry when you change anything.
This work happens from more than one machine, so local notes are not a reliable
history. Sibling dissertation repositories carry their own `AGENT_LOG.md`.

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
