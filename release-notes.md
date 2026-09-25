# Jade University Release Notes

## v0.3.0 — Purple-First UX Remodel
- Shifted the visual hierarchy from jade-first to purple-first, with jade retained as the secondary accent.
- Rebuilt the global visual language around a richer purple identity, lighter glass-like surfaces, and a more distinct studio-style learning atmosphere.
- Remodeled the header, navigation pills, hero, cards, page banners, rails, lesson surfaces, callouts, tables, footer, and button treatments for a more premium and cohesive experience.
- Updated the home-page messaging so the site feels like a focused technician workshop rather than a generic course landing page.
- Updated browser theme colors and the web-manifest theme color to the new purple-primary system.
- Bumped the service-worker cache key to `jade-university-v0.3.0` so users receive the remodeled assets cleanly.

## v0.2.0 — Technician Core Reconstruction
- Rebuilt the curriculum around the minimum electronics/test-technician skill set instead of broad electronics coverage.
- Preserved the eight-block structure but moved oscilloscope competence into the five-block technician core.
- Reused Alfred source concepts from Weeks 1–3, 5, 7–9, 11–13, 16–19, 22, 24–25, 27–29 instead of creating a second independent electronics course.
- Added explicit component recognition, PCB anatomy, datasheet use, function-generator fundamentals, test procedures, acceptance criteria, calibration-status awareness, and basic SMD workmanship.
- Replaced 48 very short prototype teaching sections with 64 deeper technician-focused teaching sections.
- Replaced one-question lesson checks with two-question required checks.
- Fixed false completion: opening a teaching page no longer marks it complete.
- Added explicit section-completion controls and gated sequential progression.
- Added structured practicals with equipment, safety, setup, numbered procedure, expected evidence, acceptance criteria, evidence fields, and attestation.
- Core readiness now requires deliberate teaching completion, passed checks, and completed practical evidence across Blocks 1–5.
- Added 21 real external resources reused from Alfred or verified from manufacturer/university/government sources; removed placeholder resource slots.
- Expanded the glossary from 31 to 96 technician terms.
- Made Study competency checkboxes persistent.
- Added progress export/import JSON backup.
- Added state migration from v0.1; old page-view completion flags are intentionally not carried forward because completion semantics changed.
- Improved service-worker update behavior with cache cleanup, `skipWaiting`, `clients.claim`, and a network-first navigation strategy.
- Added global keyboard focus-visible styling.
- Added optimized WebP versions of the six Jade brand graphics, reducing the active brand-image payload by roughly 90%.
- Cleaned the duplicate release-notes heading and removed the unestablished founding year from footer text.

## v0.1.1 — GitHub root-asset path fix
- Updated university image references to match the repository root layout.
- Updated service-worker cache paths.
- Revalidated internal file references.

## v0.1 — Initial working build
- Created the separate Jade University site.
- Added the original eight-priority prototype curriculum and core Learn/Study/Practice/Progress structure.
- Added Jade branding, glossary behavior, focus prep, responsive design, and basic PWA support.
