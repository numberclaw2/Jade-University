# Jade University v0.1

This is a separate, standalone companion site derived from the teaching/UX principles of the latest Alfred University AU-ESET 301 site.

## Start
Open `index.html` in a browser, or publish the folder with GitHub Pages/static hosting.

## Main pages
- `index.html` — dashboard/home
- `learn.html` — accelerated classroom
- `study.html` — selectable study priority
- `practice.html` — unfinished required checks/labs
- `progress.html` — readiness/progress tracking
- `resources.html` — teaching-media/library architecture
- `glossary.html` — technical vocabulary
- `about.html` — scope and relationship to Alfred

## Data
- `curriculum.js` — 8-priority / 16-lesson curriculum
- `glossary-data.js` — technical glossary
- `app.js` — navigation, Learn/Study state, progress, glossary popovers, checks, labs
- `styles.css` — Jade University visual system

## Branding
All current logo assets are under `assets/brand/`.

## Current intentional limitation
The external video/written-literature placement architecture is implemented, but v0.1 uses resource slots rather than hard-coded external URLs. This avoids inventing or downgrading Alfred's already-curated sources. The next content pass should import the strongest verified Alfred Teaching Media resources into the matching Jade priority sections.

## Safety / scope
Jade University is a fictional independent-study environment, not an accredited institution.


## v0.1.1 GitHub packaging
The current GitHub repository stores the six brand PNG files at the repository root. All HTML and service-worker references in v0.1.1 match that layout.
