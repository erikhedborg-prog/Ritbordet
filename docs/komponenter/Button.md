# Button

Knappar för allt man gör i apparna; fyra varianter som klasser på ett vanligt `<button>`.

- `primary`: sidans eller dialogens huvudhandling. Högst en per vy. `accent` med `on-accent`.
- standard (ingen klass): sekundära handlingar som "Avbryt". `sheet` med kant i `line-strong`.
- `ghost`: verktygsknappar i rader och topprad, stäng (`✕`), "Kopiera…". Ingen kant förrän hover.
- `danger` kombineras med `ghost` för borttagning: "Ta bort", "Ta bort från ritningen".
- `small` för knappar inne i listor och kommentarer.

Konsumenten ger knapptexten. Texten är ett verb som säger vad som händer; "…" när ett steg till följer. Inaktiv knapp (`disabled`) får 45 % opacitet. Rader av knappar läggs i `.row` med `space-2` mellan.
