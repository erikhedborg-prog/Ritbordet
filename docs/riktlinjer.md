# Riktlinjer

Gemensam formgivning för kontorets webbappar: Rumsbeskrivning, Teknisk beskrivning och Ritningslänkaren. Tanken är ett ark ritpapper på ett ritbord. Varm, beige grund, mörk tuschtext, en enda ritningsblå accent och tunna linjer i stället för skuggor. Det ska kännas sakligt och lugnt, som en handling från ett antikvarie- och arkitektkontor, inte som en app.

## Grundregler

- Sidans grund är alltid `paper`. Allt som är ett eget objekt (panel, kort, dialog, fält, topprad) ligger på `sheet`, med kant i `line`.
- Avgränsa med linjer, inte med skuggor. `shadow-pop` används bara på det som svävar ovanför sidan: dialoger, menyer och förslagslistor.
- En accent: `accent` (ritningsblå). Den markerar det man kan göra (primärknapp, länk, vald flik, fokus), aldrig dekoration.
- Statusfärgerna har fasta betydelser i alla appar. Använd dem bara för just det:
  - `rev` (ockra): revideringar, granskning, skrivskyddat läge, påminnelser.
  - `lib` (ljung): det som kommer från kontorets gemensamma bibliotek och mallar.
  - `ok` (grön): sparat, synkat, exporterat.
  - `danger` (järnoxid): fel och borttagning.
- Statusfärg står aldrig ensam. Skriv alltid ut ordet: "Rev B", "Synkad", "Bibliotek", "Ej sparad".
- Hörn är nästan raka: `radius-md` (4px) på knappar, fält och paneler, `radius-sm` (2px) på märken. Inga runda knappar, inga piller utom statusprickar.

## Färg

| Roll | Token | Används till |
| --- | --- | --- |
| Grund | `paper` | Sidans bakgrund |
| Ark | `sheet` | Paneler, fält, topprad, dialoger |
| Nedsänkt | `sunken` | Hover på rader, randning, platshållare |
| Linje | `line`, `line-strong` | Hårlinjer; kanter på kontroller |
| Text | `ink`, `ink-muted` | Brödtext; metadata och etiketter |
| Accent | `accent`, `accent-hover`, `accent-soft`, `on-accent` | Primärknapp, länkar, markerad rad, text på accent |

All text uppfyller minst 4,5:1 mot de ytor som token-anteckningen nämner, i både ljust och mörkt läge. `line-strong` och fokusringen klarar 3:1 mot `paper` och `sheet`.

**Mörkt läge** är samma ark i lampljus: varm, mörkbrun grund (aldrig blåsvart), ljus tuschtext och en ljusare ritningsblå. Text på accent blir då mörk (`on-accent`). Följ `prefers-color-scheme` och tillåt användaren att välja med `data-theme="light"` eller `data-theme="dark"` på `<html>`.

**Ritningslänkarens BEAst-färger** (grön, gul och cyan för länkmarkering i PDF:er) styrs av standarden *BEAst Hänvisningar i handlingar 1.1*. De ligger utanför paletten och används bara i själva PDF:en, aldrig i gränssnittet.

**Exporterade handlingar** (PDF, Word, Excel) behåller svartvitt tryck på vitt papper. Det beige är gränssnittets material, inte handlingarnas.

## Typografi

Tre familjer, alla fria:

- `display` – Barlow Semi Condensed. Rubriker, projektnamn, avsnittsrubriker i versaler. Smal och teknisk, som texten i en namnruta.
- `sans` – Barlow. All löptext, formulär och knappar.
- `mono` – IBM Plex Mono. Allt som är en kod: AMA-koder (`LCS.21`), ritningsnummer (`A-40.1-012`), NCS-kulörer (`NCS S 1002-Y`), rumsnummer i tabeller och filnamn.

Skala: `page-title` 32/36, `heading` 22/28, `section` 14/20 versaler, `body` 15/22, `small` 13/18, `label` 12/16 versaler, `code` 13/18. Grundstorleken är 15px. Versaler får alltid lite spärrning (0,05–0,06em). Siffror i kolumner sätts med `font-variant-numeric: tabular-nums`.

Appar som byggs med npm får typsnitten inpackade via `ritbordet/fonts.css`, så att de fungerar offline. Enkla HTML-appar hämtar dem från Google Fonts (`fonts-google.html`).

## Mått och avstånd

Steg om 4px: `space-1` 4, `space-2` 8, `space-3` 12, `space-4` 16, `space-6` 24, `space-8` 32, `space-12` 48. Panelernas utfyllnad är `space-4`, avståndet mellan paneler `space-6`. Sidan har alltid minst `space-4` i sidomarginal, även på telefon. Löptext hålls under cirka 70 tecken per rad.

## Tillstånd

- Hover: `sunken` på neutrala ytor, `accent-hover` på primärknappen, `accent-soft` på ghost-knappar.
- Fokus: 2px solid ring i `focus`, 2px från kanten. Ta aldrig bort fokusringen.
- Vald: `accent-soft` som bakgrund, texten behåller `ink`.
- Inaktiv: 45 % opacitet, ingen hover.
- Fel i fält: kanten blir `danger` och felet skrivs under fältet i klartext.

## Ton och språk

Svenska, sakligt och kort. Skriv som en kollega på kontoret skulle säga det.

- Knappar är verb som säger exakt vad som händer: "Skapa projekt", "Starta revidering", "Bjud in", "Ta bort från ritningen". "Avbryt" och "Klar" stänger.
- Versal bara i början av meningen och i egennamn: "Ny mall", inte "Ny Mall".
- Fel förklarar vad som hände och vad man gör: "Filen kunde inte läsas. Välj en PDF eller en bild."
- Fackord som branschen använder står som de är: rumsbeskrivning, materialförteckning, namnruta, skede, AMA-kod.
- Ingen emoji. Datum skrivs `2026-10-08`.

## Ikoner

Apparna använder inget ikonbibliotek i dag, bara enkla tecken: `←` tillbaka, `✕` stäng, `+` lägg till, `…` mer. Behåll det. Behövs riktiga ikoner, välj en tunn linjeikonserie med 1,5px streck i `currentColor`, och sätt alltid text bredvid eller som `title`.

## Logotyp

Det finns ingen logotyp i underlaget. Appens namn sätts i ren text i topprad och på startsida (`appname`, versaler i `ink-muted`). Kontorets logotyp kan läggas till som tillgång när den finns.
