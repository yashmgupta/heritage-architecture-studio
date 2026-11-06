# Testing guide

## Automated static checks

Install Node.js 20 or later and run `npm test`. The zero-dependency script checks that the HTML entry point exists; important controls and attribution remain present; embedded JavaScript parses; the sample SVG exists; and the initial study JSON is valid. These checks **do not execute 3D rendering** or guarantee behavior in every browser.

## Manual browser matrix

| Area | Test |
|---|---|
| Startup | Open `index.html` from disk, then from a local web server or GitHub Pages; no console errors or missing app assets |
| WebGL | In a WebGL2-capable browser, verify a preset renders and orbits smoothly; observe graceful fallback when disabled |
| Presets | Select every architectural form and test geometry sliders at minimum, midpoint and maximum |
| Custom add/edit | Add box, column, drum and pyramid; select by clicking; inspect highlight and numeric values |
| Direct drag | Move on ground plane; constrain X/Z and vertical movement; toggle grid snap and snap spacing |
| Camera | Switch Select & move / Orbit camera; right-drag pan and wheel zoom should work independently |
| History | Add, edit, drag, duplicate, place above, undo/redo, delete; check keyboard shortcuts with and without focused inputs |
| Exports | Export SVG, PNG, JSON and standalone HTML; reopen SVG/HTML, and reimport JSON in the app |
| Persistence | Save and reopen studies in a normal browser profile; verify graceful handling of restricted/private storage |
| Backgrounds | Switch atmosphere/backdrops; upload a small valid image; clear image; verify upload is not serialized |
| Layout | At least one wide desktop, one tablet width, and one narrow phone width; keyboard-only navigation |
| Accessibility | Visible focus, descriptive control labels, reduced-motion preference, perceivable feedback |

## Useful limitations to report

The renderer needs WebGL2. Automated headless environments sometimes disable WebGL or local storage; document that limitation rather than concluding the entire application is broken. Test imported files conservatively and do not upload private files to an issue. Historical and structural correctness require separate subject-matter review.
