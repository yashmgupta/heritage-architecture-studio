# Project roadmap

This is a suggested community roadmap, not a promise or a list of released features. Existing features are described in [README](README.md).

## Priority: reliability and editing

- Improve drag behavior for overlapping blocks and edge-on views; add clearer selection and transform handles.
- Introduce optional origin/center/corner snaps and alignment to existing blocks.
- Add robust undo/redo for **all** edit operations and improve recovery from save/import errors.
- Add broad browser/mobile regression coverage, including WebGL fallback tests.
- Improve editor keyboard accessibility and touch interaction.

## Priority: education and trustworthy measurements

- Source-backed architectural references and caveats for each tradition.
- Better volume/quantity semantics for timber, hollow structures, and repeated arch bays.
- Clear units and tolerances for SVG drawing exports; tests for dimension labels.
- Explicit geometry validation for unsupported or self-intersecting configurations.

## Future exploration

- CAD-style face/edge grips, multiple selection, alignment/distribution, grouping, and history panel.
- DXF export or import (would require additional implementation and testing).
- More precise parametric primitives and optional repeated arrays/assemblies.
- Curated, licensed downloadable example studies and tutorial content.
- Refactor readable source modules + a reproducible bundler while preserving a single downloadable HTML release.

## How to help

Open a GitHub issue using **Feature request**, explain who benefits, include an example or screenshot, and state whether the proposal preserves the one-file downloadable app requirement. Maintainers can promote specific issues into milestones later.
