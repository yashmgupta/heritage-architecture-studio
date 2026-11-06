/** Zero-dependency validation of the distributed standalone HTML.
 *  This checks syntax/invariants only; always manually test browser/WebGL behavior.
 */
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import assert from 'node:assert/strict';

const root = path.resolve(import.meta.dirname, '..');
const html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
const required = [
  '<!doctype html>', '<title>Ancient Architecture Engineering Studio</title>',
  'Dr Yash Munnalal Gupta', 'id="scene"', 'id="blueprints"',
  'id="custom-builder"', 'id="editor-select"', 'id="editor-orbit"',
  'id="builder-undo"', 'id="builder-redo"', 'id="snap-enabled"',
  'id="move-axis"', 'id="export"', 'id="backdrop-upload"'
];
for (const token of required) {
  assert.ok(html.includes(token), `Missing expected HTML feature: ${token}`);
}
const scripts = [...html.matchAll(/<script\b([^>]*)>([\s\S]*?)<\/script>/gi)];
assert.ok(scripts.length >= 2, 'Expected study-state and main inline scripts');
let checked = 0;
for (const [, attrs, body] of scripts) {
  if (attrs.includes('application/json')) {
    JSON.parse(body);
  } else {
    new vm.Script(body, {filename: 'index.html:inline-script'});
    checked++;
  }
}
assert.ok(checked > 0, 'No inline JavaScript was checked');
// Only scan literal document markup: JavaScript can contain strings that look like id attributes.
const htmlMarkup = html.slice(0, html.indexOf('<script id="initial-study"'));
const ids = [...htmlMarkup.matchAll(/\bid="([^"]+)"/g)].map(m => m[1]);
assert.equal(new Set(ids).size, ids.length, 'Duplicate HTML IDs were found');
const sampleSvg = fs.readFileSync(path.join(root, 'examples', 'Maya-Temple-Example-Plan.svg'), 'utf8');
assert.match(sampleSvg, /<svg\b/);
assert.match(sampleSvg, /<\/svg>/);
assert.ok(fs.existsSync(path.join(root, 'LICENSE')), 'Missing project license');
assert.ok(fs.existsSync(path.join(root, 'THIRD_PARTY_NOTICES.md')), 'Missing dependency notices');
console.log(`PASS: ${checked} embedded JavaScript block(s) parsed; ${ids.length} unique DOM IDs; sample SVG and credits present.`);
console.log('Note: this is a static smoke test, not a WebGL or browser-storage integration test.');
