# Pedagogical Friction, Immersive Companion

A visual, single-page companion to Micah J. Miner's dissertation proposal,
*Pedagogical Friction in the Age of Generative AI and Tertiary Algorithmicity: A
Qualitative-Dominant Convergent Mixed Methods Case Study* (Ed.D. in Curriculum,
Advocacy & Policy, National Louis University).

Where the [Pedagogical Friction Studio](https://minerclass.github.io/dissertation-proposal-studio/)
maps the argument's intellectual lineage and the [dissertation-overview](https://minerclass.github.io/dissertation-overview/)
hub is the front door, this site is the **scrollytelling walk through the proposal itself**:
the problem, Ong's extended arc, tertiary algorithmicity and its three pressures, the Chapter Two
intellectual genealogy, the friction framework, the equity boundary, an interactive scenario card sort,
and the Chapter Three methodological defense. It can be read top to bottom or used as a committee-question
rehearsal path.

## What it is

- **Public and scholarly.** It presents the argument and design for orientation. It reports **no
  dissertation findings** (the study is at the proposal stage, before data collection and IRB approval).
- **One page, one interactive.** A live version of the study's ten-scenario card sort (Appendix F)
  lets a reader draw the productive-versus-exclusionary line and see the question the framework asks.
- **A hub back into the ecosystem.** The closing section links the companion sites, the defense
  studio, the published article, the open data, and the learning games.
- **A defense rehearsal path.** Expandable prompts connect Stiegler and adjacent Chapter Two traditions
  to the framework, then rehearse the Merriam choice, case fence, mixed-methods fit, and disconfirmation plan.

## Structure

```
index.html          The whole single-page experience (content lives here)
css/styles.css       Styles, harmonized with the ecosystem palette
js/app.js            Scroll reveal, progress nav, Ong timeline, framework detail, card sort
README.md            This file
AGENTS.md            Guidance + canonical terminology for anyone editing
```

There is **no build step** and **no data collection**. All content is authored in `index.html`
and `js/app.js`.

## Run locally

Open `index.html` directly, or use a tiny server if you prefer:

```bash
python -m http.server 8000
# then open http://localhost:8000/
```

## Deploy to GitHub Pages

1. Create a **public** repo under `minerclass` named **`pedagogical-friction`**.
2. From this folder:
   ```bash
   git init && git add -A && git commit -m "Immersive pedagogical friction companion"
   git branch -M main
   git remote add origin https://github.com/minerclass/pedagogical-friction.git
   git push -u origin main
   ```
3. In repo settings, enable Pages: Deploy from a branch, `main`, `/ (root)`.
4. Visit `https://minerclass.github.io/pedagogical-friction/` and click through every section on
   desktop and mobile.
5. Add a link to it from the `dissertation-overview` hub so the ecosystem stays connected.

## Privacy

- No participant data, transcripts, district specifics, tokens, or committee names appear on the page.
- The public copy must not imply results before data collection and analysis.

## Writing convention

User-facing copy avoids em dashes by author preference. Use commas, semicolons, or restructured
sentences. En dashes in ranges (K-12) are fine.

## License

This repository is dual-licensed to separate code from scholarship:

- **Code** (HTML, CSS, JavaScript, config): [MIT License](LICENSE).
- **Written and scholarly content** (framework descriptions, prose, figures): [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/), reuse and adapt with attribution to Micah J. Miner.

The Pedagogical Friction framework and its terminology are the author's scholarly work; please cite the dissertation and related publications when building on them.
