# Topbar

Toppraden i varje app: tillbaka, vyns namn, status och verktyg.

`<header class="topbar">` på `sheet` med hårlinje under. Ordning från vänster: tillbakalänk `←` (klass `back`, med `title`), vyns rubrik som `<h1>` i `heading`-stilen, eventuellt märke, en `.spacer`, appens namn (`appname`) och högst tre ghost-knappar. Toppraden är sticky (`top: env(safe-area-inset-top, 0px)`) och radbryts på smal skärm.
