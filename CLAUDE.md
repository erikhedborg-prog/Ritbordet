# Driftsättning

- Varje commit som hamnar på `main` (merge, squash eller direkt push) ska ha `[skip netlify]` i commitmeddelandet, t.ex. `gh pr merge --squash --subject "Titel (#12) [skip netlify]"`. Då startar Netlify ingen produktionsdeploy.
- Utelämna `[skip netlify]` bara när användaren uttryckligen ber om att produktion ska deployas.
