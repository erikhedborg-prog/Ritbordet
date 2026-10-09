# Badge

Litet märke som visar status eller ursprung på en rad, ett rum eller en post.

| Klass | Betydelse | Exempel |
| --- | --- | --- |
| `rev` | Revidering, granskning | "Rev B", "Granskas" |
| `ok` | Sparat, synkat | "Synkad", "Exporterad" |
| `lib` | Från kontorets bibliotek eller mall | "Bibliotek", "Mall" |
| (ingen) | Neutral egenskap | "Lokal", "Utkast" |
| `danger` | Något måste åtgärdas | "Ej sparad", "Saknar kulör" |

Konsumenten ger texten; den ska bära betydelsen även utan färg. En statusprick (`<span class="dot">`) får läggas före texten för tillstånd som ändras, som synk. Max ett eller två märken per rad.
