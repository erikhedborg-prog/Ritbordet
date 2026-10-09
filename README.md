# Ritbordet

Kontorets gemensamma formgivning för webbapparna: färger för ljust och mörkt läge, typsnitt, mått och riktlinjer.
Ett ark ritpapper på ett ritbord: beige grund, mörk tuschtext, en ritningsblå accent och tunna linjer i stället för skuggor.

Bläddringsbar version med exempel: https://claude.ai/artifact/AdBDTJispmuRVLriPjM4sP

## Innehåll

- `ritbordet.css` – alla färger, typsnittsnamn, hörnradier och avstånd som CSS-variabler, för ljust och mörkt läge. Det här är källan.
- `fonts.css` – typsnitten (Barlow, Barlow Semi Condensed, IBM Plex Mono) för appar som byggs med npm.
- `fonts-google.html` – samma typsnitt från Google Fonts, för enkla HTML-appar.
- `docs/riktlinjer.md` – hur färgerna och typsnitten används, ton och språk.
- `docs/komponenter/` och `docs/komponenter.css` – knappar, fält, märken, notiser, paneler, topprad, namnruta och tabell.

## Använda i en app

**App som byggs med npm (Vite, React):**

```sh
npm i github:erikhedborg-prog/ritbordet#v1.0.0
```

```ts
// main.tsx, före appens egen CSS
import 'ritbordet/fonts.css'
import 'ritbordet/ritbordet.css'
import './index.css'
```

Lägg till `woff2` i `workbox.globPatterns` om appen är en PWA, så att typsnitten fungerar offline.

**Enkel HTML-app med `build.sh`:** bygget hämtar `ritbordet.css` för en bestämd version och bakar in den i `index.html`:

```sh
RITBORDET=v1.0.0
curl -fsSL "https://raw.githubusercontent.com/erikhedborg-prog/ritbordet/$RITBORDET/ritbordet.css"
```

Se `build.sh` i Ritningslänkaren eller PBL-lathunden.

I appens egen CSS används bara variablerna, aldrig färgkoder: `var(--accent)`, `var(--ink-muted)`, `var(--rev-soft)` och så vidare. Då följer mörkt läge med av sig självt.

## Ändra formgivningen

1. Ändra `ritbordet.css` här och kör `node test/check.mjs`. Testet kontrollerar att mörkt läge är komplett och att all text är läsbar.
2. Höj versionen i `package.json` och skapa en ny tagg, t.ex. `v1.1.0`.
3. Uppdatera apparna till den nya taggen: `npm i github:erikhedborg-prog/ritbordet#v1.1.0` respektive `RITBORDET=` i `build.sh`.

Apparna pekar på en bestämd version, så en ändring här slår inte igenom förrän varje app uppdateras. Då kan man förhandsgranska varje app innan den publiceras.

## Appar som använder Ritbordet

- [Rumsbeskrivning](https://github.com/erikhedborg-prog/rumsbeskrivning)
- [Teknisk beskrivning](https://github.com/erikhedborg-prog/teknisk-beskrivning)
- [Ritningslänkaren](https://github.com/erikhedborg-prog/ritningslankaren)
- [PBL-lathunden](https://github.com/erikhedborg-prog/pbl-lathund)
- [Rumsinventering ur 360-panoramor](https://github.com/erikhedborg-prog/rumsinventering-panorama) (granskningssidan, inbyggd kopia)
