# TitleBlock

En namnruta som på en ritning: projektets uppgifter i ett rutnät av fält med etikett och värde.

Används på projektets startsida och överst i förhandsvisningar av export, så att gränssnittet och handlingen (BEAst-försättsbladet) visar samma uppgifter i samma ordning. Byggs som `<dl class="titleblock">` med fyra kolumner; varje fält är en `<div>` med `<dt>` (etikett) och `<dd>` (värde). `wide` tar två kolumner, `full` hela raden. Sista fältet i en rad får `end`, sista raden `last`. Projektnamnet sätts med `big`; datum, revision och nummer med `mono`.

Konsumenten ger fälten. Ytterkanten är `ink`, inre linjer `line-strong`. Ingen färg i namnrutan.
