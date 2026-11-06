# User guide

## Start

Open `index.html` in a current desktop browser. To use the website version, deploy `index.html` from the repository root using GitHub Pages. No backend is required.

## Presets

Use **Architectural form** to choose a preset, then use **Geometry & proportion** to adjust the available dimensions. Use **Architectural elements** for optional parts, **Surface material** for appearance, and **Planning grid** to overlay a study grid.

**3D view / Plan view:** switch visualization modes. **Inner cutaway:** inspect the model interior where supported. **View tools:** camera rotation, dimensions, ground grid, camera reset, screenshot, fullscreen.

## Custom design: move blocks with the mouse

1. Choose **Custom** from the architectural-form selector.
2. Use the custom builder's **Add component** control.
3. Click **Select & move**, then click the component in the 3D scene.
4. Drag to reposition it. Choose a movement axis from the builder panel and turn snapping on or off.
5. Use **Orbit camera** when you need to rotate the view without moving blocks.
6. Edit exact position, size, primitive, or surface material in the component inspector.
7. Use **Duplicate**, **Delete**, **Place above**, **Undo**, and **Redo** as needed.

**Keyboard tips:** Ctrl/Cmd+Z = undo; Ctrl/Cmd+Shift+Z or Ctrl/Cmd+Y = redo; Ctrl/Cmd+D = duplicate; Delete/Backspace = remove; Escape = deselect. Arrow keys nudge the selection; Shift+Up/Down moves vertically. These shortcuts do not apply while typing in a field.

## Atmosphere and background

Try daylight, dusk, or night, with studio haze or an illustrated scene. An uploaded image is loaded within the current browser tab only; it is not added to saved-study files or bundled into an HTML export.

## Saving and exporting

- **Save / My studies:** stores studies in this browser if local storage is allowed; it is not cloud sync.
- **Export study:** includes drawing/vector, image, data, and complete HTML options. File names and browser download permissions may vary.
- **PNG/Screenshot:** browser image capture may fail if WebGL2 is unavailable.
- **SVG:** vector plan and elevation drawing for educational reference; confirm dimensions and accuracy before using in professional documents.
- **JSON:** saves editable study parameters. Treat untrusted imported files cautiously.
- **HTML:** exports a copy of the standalone studio with embedded study state; file-uploaded backgrounds are not included.

If 3D does not render, try a browser with WebGL2 support and hardware acceleration. See [testing notes](TESTING.md).
