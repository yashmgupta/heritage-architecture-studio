# Contributing to Ancient Architecture Engineering Studio

Thank you for improving the studio. Bug fixes, accessibility improvements, technical documentation, carefully researched architectural notes, and new custom-builder tools are all welcome.

## First contribution

1. Check [open issues](../../issues) and [the roadmap](ROADMAP.md) before implementing a major feature.
2. For a substantial change, create a feature-request issue explaining the user problem and expected behavior.
3. Fork the repository, make a focused branch, and edit `index.html` (the entire deployable app lives here).
4. Run `npm test`, then follow the browser checklist in [docs/TESTING.md](docs/TESTING.md).
5. Open a pull request using the template. Add before/after screenshots or a short recording if you changed the UI.

## Code and design principles

- **Keep the application runnable as one HTML file.** No required external runtime, network API, build step, or hosted service should be introduced without discussion.
- Prefer small, clearly commented enhancements. The embedded Three.js bundle is vendor code: avoid manually changing it.
- Preserve **Dr Yash Munnalal Gupta** copyright credit and bundled third-party notices.
- Avoid unsupported history, date, religious or cultural symbolism, structural capacity, and engineering accuracy claims. Clearly label inspired studies and link trustworthy sources when adding heritage information.
- Maintain keyboard and screen-reader usability; respect reduced motion and mobile viewports.
- Avoid silently breaking existing saved-study JSON state, browser-local storage, or exported files.
- Avoid transmitting local user files or personal data. Uploaded background pictures are currently session-only.
- Do not import chunks of third-party code without checking licenses, recording attribution, and obtaining maintainer approval.

## Changes to test manually

For new geometry: check all presets; adjust sliders to their minimum and maximum values; inspect 3D and plan views; test SVG export and geometry estimates. For custom editor changes: add, select, drag, snap, switch axes, undo/redo, duplicate/delete, save/load, export JSON/HTML, and verify orbit navigation still works. Also check small screens and browsers without WebGL2.

## Pull request format

Explain **what changed**, **why**, and **how you tested it**. Link an issue where practical. Contributions should be original or permissively licensed; the project will be published under the license in `LICENSE` after the owner approves that choice.
