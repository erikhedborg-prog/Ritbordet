// Kontrollerar ritbordet.css: att mörkt läge sätter samma färger på båda ställena och att texten är läsbar (WCAG).
import { readFileSync } from 'node:fs'

const css = readFileSync(new URL('../ritbordet.css', import.meta.url), 'utf8')
const block = (re) => Object.fromEntries([...re.exec(css)[1].matchAll(/--([a-z0-9-]+):\s*([^;]+);/g)].map((m) => [m[1], m[2].trim()]))
const light = block(/^:root \{([\s\S]*?)^\}/m)
const darkMedia = block(/:root:not\(\[data-theme="light"\]\) \{([\s\S]*?)\}/)
const darkAttr = block(/:root\[data-theme="dark"\] \{([\s\S]*?)\}/)

let fel = 0
const fail = (msg) => { console.log('FEL ' + msg); fel++ }

if (JSON.stringify(darkMedia) !== JSON.stringify(darkAttr)) fail('mörkt läge skiljer sig mellan @media och [data-theme="dark"]')
for (const k of Object.keys(darkMedia)) if (!(k in light)) fail(`--${k} finns i mörkt läge men inte i ljust`)
const colors = Object.keys(light).filter((k) => /^#[0-9a-f]{6}$/i.test(light[k]))
for (const k of colors) if (!(k in darkMedia)) fail(`--${k} saknar värde i mörkt läge`)

const lum = (hex) => {
  const c = [1, 3, 5].map((i) => parseInt(hex.slice(i, i + 2), 16) / 255).map((x) => (x <= 0.03928 ? x / 12.92 : ((x + 0.055) / 1.055) ** 2.4))
  return 0.2126 * c[0] + 0.7152 * c[1] + 0.0722 * c[2]
}
const ratio = (a, b) => { const [x, y] = [lum(a), lum(b)].sort((p, q) => q - p); return (x + 0.05) / (y + 0.05) }

// Text mot de ytor den används på (4,5:1), kontrollkanter och fokus (3:1).
const pairs = [
  ['ink', ['paper', 'sheet', 'sunken', 'accent-soft', 'rev-soft', 'lib-soft', 'ok-soft', 'danger-soft'], 4.5],
  ['ink-muted', ['paper', 'sheet', 'sunken'], 4.5],
  ['accent', ['paper', 'sheet', 'accent-soft'], 4.5],
  ['on-accent', ['accent', 'accent-hover'], 4.5],
  ['ok', ['sheet', 'ok-soft'], 4.5],
  ['rev', ['sheet', 'rev-soft'], 4.5],
  ['lib', ['sheet', 'lib-soft'], 4.5],
  ['danger', ['sheet', 'danger-soft'], 4.5],
  ['line-strong', ['paper', 'sheet'], 3],
]
for (const [tema, v] of [['ljust', light], ['mörkt', { ...light, ...darkMedia }]]) {
  for (const [fg, grounds, min] of pairs) for (const bg of grounds) {
    const r = ratio(v[fg], v[bg])
    if (r < min) fail(`${tema}: --${fg} på --${bg} har kontrast ${r.toFixed(2)}, behöver ${min}`)
  }
}
console.log(fel ? `${fel} fel` : `ritbordet.css ok (${colors.length} färger, båda lägena)`)
process.exit(fel ? 1 : 0)
