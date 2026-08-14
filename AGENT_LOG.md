# Agent Log

Append-only record of automated and agent-assisted changes to this repository.

Purpose: this work happens from more than one machine, so local notes are not a
reliable history. Anything an agent should know about a past change belongs
here, in the repository, not in a local file.

## Conventions

- Newest entry first. Never rewrite or delete an existing entry; correct it with
  a new one that says what it supersedes.
- Record what was verified and how, not just what was edited. "Fixed" without a
  check is not a result.
- Record open items and known-failing things explicitly, so the next agent does
  not rediscover them or assume they are already handled.
- No participant data, transcripts, consent records, committee or faculty names,
  credentials, or tokens. See AGENTS.md where present.

---

## 2026-08-09 - Interactive research-question alignment

Agent: OpenAI Codex, working from the July 24, 2026 Chapters 1-3 Google Doc.

- Kept the proposal's current RQ1-RQ3 wording verbatim and changed the three
  static cards into native button controls with stable RQ IDs, `aria-pressed`
  state, visible keyboard focus, and a shared detail panel.
- Added proposal-grounded participant/evidence, analysis, integration, and
  interpretive-boundary details for each question. Adult university students
  remain direct participant evidence for RQ1 and contextual for RQ2/RQ3; NCES
  and RAND remain structural context; AI-generated texts remain a separately
  labeled nonparticipant comparison.
- Added versioned CSS and JavaScript references so the published interaction is
  not hidden by stale browser caches.
- Preserved proposal-stage boundaries. No recruitment, participant data,
  analysis, findings, or framework validation was added or implied.

## 2026-07-25 - Link The Friction Atlas into the Explore and play group

Agent: Claude Opus 5 (Claude Code).

- Added a card for `friction-atlas`, the new seven-station interactive Chapter Two
  literature review, as the first item in the "Explore and play" ecosystem group.
- The group previously held four cards using stagger classes reveal, d1, d2, d3.
  A fifth needed a delay class that did not exist, so the group was reordered to
  reveal, d1, d2, d3, d4 and `.reveal.d4 { transition-delay: 0.32s; }` was added
  to `css/styles.css` beside the existing d1 to d3 rules.
- Verified locally: no console errors, the card renders with the correct href and
  kind label, and the five cards carry the expected stagger classes in order.

## 2026-07-25 - Miner citation lettering retired to the submitted two-entry scheme

Agent: Claude Opus 5 (Claude Code), working from the final submitted Chapters 1-3
Google Doc and a cross-repo terminology sweep.

- The submitted reference list contains exactly two Miner entries. Retired the old
  three-way lettering (2026a = qualifying paper, 2026b = Zenodo, 2026c = article)
  and swapped the site to match the draft: **2026a = the Zenodo open-data
  companion**, **2026b = the i.e.: inquiry in education article**, which is the
  framework source. There is no 2026c.
- Four call sites changed: `index.html` article card (was 2026c), `index.html`
  Zenodo card (was 2026b), `index.html` footer "framework and terminology follow"
  (was 2026a), and the `js/app.js` header comment (was 2026a). Done as an atomic
  placeholder swap so 2026a and 2026b could not collide mid-edit.
- `AGENTS.md` now states the mapping explicitly rather than describing the
  artifacts in prose, and adds a do-not-reintroduce list for the dropped
  case-study framing (case study, Merriam, Stake, Yin, bounded case, embedded
  role groups), with an explicit carve-out that "bounded, prespecified
  agentic-artifact task" is unrelated and correct.
- Pulled 8 commits from origin before editing; the local clone had been stale and
  most Chapter Three drift was already fixed remotely by the 2026-07-24 entry.
  README needed no change, its title line was already correct.
- Verified by serving locally: no console errors; the Ong timeline selects each of
  the five stages with exactly one selected at rest; the card sort places a
  scenario, reveals its note, and advances the "n of 10 placed" counter; and both
  ecosystem citation cards plus the footer render the new letters with no 2026c
  anywhere. No content or findings added; the site remains proposal-stage.
- Correction for the next agent: the AGENTS.md validation checklist says
  "framework dimensions switch," but the four dimensions are static side-by-side
  panels (`.dim.d-noetic` through `.dim.d-infra`), not a switcher. Nothing is
  broken; the checklist line is inaccurate and is left as-is pending a decision
  on whether to reword it or make the dimensions interactive.

## 2026-07-24 - Current-proposal and agentic-artifact alignment

Agent: OpenAI Codex, working from the revised Chapters 1-3 proposal and a
cross-site consistency review.

- Updated the proposal-companion date and added the explicit distinction
  between Stalder's curatorial algorithmicity and tertiary algorithmicity's
  extension into symbolic generation.
- Preserved the required nonparticipant comparison by stating that at least one
  bounded, prespecified agentic-artifact task remains even if systems, task
  count, or repeated runs are scaled.
- Clarified why the institutional layer is named infrastructural friction and
  made the artifact comparison open to disconfirming or counter-friction
  qualities.
- Kept the site proposal-stage. No participant findings, data, or collection
  features were added.
## 2026-07-22 - Weekly Pages review, accessibility and CI repair

Agent: Claude Opus 4.8 (Claude Code), working from a weekly review of the
`minerclass` GitHub Pages ecosystem against recent academic and professional
activity. Author present and approving changes.

### Ecosystem-wide finding: the accessibility gate was broken, not strict

The `Accessibility Checker` job in `.github/workflows/ci.yml` had been red since
2026-07-17 in every repository that runs it (`pedagogical-friction`,
`diss-proposal-defense`, `dissertationquestionsbeta`). The cause was not page
content. `@axe-core/cli` 4.12.1 bundles a ChromeDriver built for Chrome 151,
while the runner image had Chrome 150:

```
Error: session not created: This version of ChromeDriver only supports Chrome version 151
Current browser version is 150.0.7871.114
```

The browser session never started, so **no page was actually tested between
2026-07-17 and 2026-07-22**. The job reported failure for every file without
running a single check. Treat any result from that window as meaningless.

The workflow was repaired in all three repositories:

- ChromeDriver is now pinned at run time to the runner's installed Chrome major
  version, so image updates cannot silently break the job again.
- A tooling failure (no browser session) is now reported distinctly from a real
  accessibility violation, and fails with an explicit message. This is the
  specific confusion that hid the breakage for five days.
- The gate is scoped to `--tags wcag2a,wcag2aa,wcag21a,wcag21aa`. axe's advisory
  best-practice rules (`page-has-heading-one`, `landmark-one-main`, `region`,
  `landmark-complementary-is-top-level`) no longer block a push. They are still
  worth fixing; they are just not barriers.
- The job honours an optional `.a11yignore` file for generated bundles that
  cannot be corrected in-repo.

### Changes in this repository

Two colour-contrast failures, both verified by measurement rather than by eye:

- `.arc-chip .miner-tag` (the "Miner" attribution on the Ong arc) rendered
  `--gold` `#b5852a` on `--paper-2` `#efeae0`, a ratio of **2.76:1** against the
  4.5:1 required for small bold text. Added a `--gold-text` token `#876016`,
  measured at **4.71:1** on `--paper-2` and **5.56:1** on `--white`, scoped to
  this use. The global `--gold` is deliberately unchanged so gradients, borders,
  and focus rings keep their appearance. Use `--gold-text` for any small gold
  text added later.
- `.rupture .rn` (the large decorative 1/2/3 watermarks) sat at **1.29:1**.
  These repeat the card order and carry no information the headings do not, so
  they are marked `aria-hidden="true"` rather than darkened. This preserves the
  intended faint look; do not "fix" them by changing the colour.

Post-change: `index.html` reports zero axe violations under the full default
rule set.

### Verification method

Because CI could not run axe, results were verified independently: axe-core
4.10.2 was loaded into each deployed page in a same-origin iframe and run
against the live document. After the changes below, 17 of 18 pages across
`pedagogical-friction`, `diss-proposal-defense`, and `dissertationquestionsbeta`
report zero violations under axe's full default rule set. The exception is
`dissertationquestionsbeta/dashboard.html`, recorded in that repository's log.

Two earlier claims made during this review were wrong and are corrected here so
they are not repeated:

- `interactive-resume-2026` was reported as missing the EDSAFE AI Vanguard
  Fellowship and all publications. It was not. The page renders its credentials
  and resources from `docs/app.js` at run time, and a fetch of the static HTML
  shell shows an almost empty page. **Check client-rendered pages in a browser,
  not by fetching HTML.** The same mistake produced a false "23 orphaned sites"
  reading of the root hub, whose project grid is also JS-rendered.
- The EdSurge article "How My School Used Common Sense and Collaboration to
  Confront AI" (2026-07-15) is by Pattie Morales and cites the author's term
  *unproductive success*. It is press coverage, not an authored publication, and
  must not be listed as one.

### Cross-repository context

This change set spans five repositories: `pedagogical-friction`,
`diss-proposal-defense`, `dissertationquestionsbeta`, `conference-presentations`,
and `interactive-resume-2026`. Each carries its own `AGENT_LOG.md` entry for the
same date. Check the siblings before assuming a change was isolated.

## 2026-08-13 - Proposal defense milestone and next gate

Agent: OpenAI Codex, recording the researcher's reported milestone and planned sequence.

- Recorded that the Chapters 1-3 dissertation proposal defense was passed on
  August 13, 2026.
- Named the next sequence as interview-question revision, committee review, a
  planned three-educator conversational-flow rehearsal, and an IRB-materials update.
- Preserved the ethical and evidentiary boundary: the rehearsal is not presented
  as main-study recruitment or data collection, and no coding, analysis, findings,
  IRB approval, or ABD status is claimed.
