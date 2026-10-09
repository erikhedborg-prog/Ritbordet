# Field

Etikett, fält och eventuell hjälp- eller feltext, inslaget i `<label class="field">`.

Etiketten är ett `<span>` först i `label`, i versaler (`label`-stilen, `ink-muted`). Fältet är `input`, `textarea` eller `select` på `sheet` med kant i `line-strong` och 4px hörn. Fokus ger en 2px ring i `focus`.

Hjälptext läggs i `<small>` efter fältet. Vid fel sätts klassen `invalid` på `.field`: kanten blir `danger` och `<small>` förklarar vad som är fel och hur man rättar det. Platshållartext ger exempel ("T.ex. Klassrum"), aldrig instruktioner som behövs för att fylla i fältet. Lägg fält i grid med `space-3` mellan.
