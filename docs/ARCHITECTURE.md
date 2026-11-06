# Implementation overview

## The single-file constraint

`index.html` is intentionally self-contained for deployment. It includes document markup, inline CSS, an embedded Three.js runtime (with upstream MIT header), and application JavaScript. Browser-native downloads create SVG, PNG, JSON, or HTML artifacts. It requires no server/API to render or edit studies.

**Do not modify the minified Three.js bundle by hand.** New contributors should first study the human-readable extension logic toward the end of `index.html`, then the named app functions and control IDs. A future refactor into readable source modules plus a reproducible bundling script is welcome provided the distributed result remains one HTML file.

## Data and state

Preset parameters and custom-component objects drive model generation. Custom objects have primitive type, dimensions, placement coordinates, material and an ID used for selection. A selection state and editing tool track drag operations; raycasting picks visible meshes and ground-plane intersections compute movement. Snap quantizes component coordinates. Undo/redo records prior states. Camera/orbit controls must be disabled while a block drag is active.

Browser storage keeps saved studies when permitted. JSON/HTML exports serialize editable study state. Uploaded background images currently remain in memory for the browser tab and are intentionally not serialized.

## Rendering and measurements

The model uses Three.js geometry and materials. SVG export generates a dimensioned educational plan/elevation rather than tracing the WebGL canvas. Quantities are simplified parametric model estimates — there is **no** structural solver, heritage survey, or professional materials takeoff. Preset geometry generators can differ, so changes should be tested across all designs.

## Extension guidance

- Make a clear distinction between **model-space metres** and screen pixels for drag coordinates.
- Keep IDs for interactive components stable across saves and exports.
- Treat sloped/circular/timber geometry differently from rectangular stone block volume estimates.
- Keep history mutation pathways consistent for mouse edits, keyboard edits and numeric inputs.
- Add and test any new export format in the single HTML without needing a server.

See [TESTING](TESTING.md) and [HISTORICAL-FRAMING](HISTORICAL-FRAMING.md).
