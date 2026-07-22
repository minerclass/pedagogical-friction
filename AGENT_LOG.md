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
