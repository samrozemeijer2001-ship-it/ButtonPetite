# Lichaamschemie

Encyclopedie van stoffen in je lijf, in Lafbekken-stijl. Gewone HTML, CSS en JavaScript, geen bouwstap, geen backend. Interface in het Nederlands.

## Bestanden

```
index.html              app-schil, navigatie onderaan, iconen (SVG)
manifest.webmanifest    installatie op beginscherm
sw.js                   service worker (offline en updates)
.nojekyll               laat GitHub Pages de bestanden ongewijzigd serveren
css/app.css             alle stijlen
js/content.js           alle kopij: 8 stoffen, 17 begrippen, 20 themalessen, 5 stofgroepen
js/app.js               schermen, hash-navigatie, zoeken, opslag, begrippenkaartjes, kennisvragen
fonts/                  Barlow Condensed 900 en Rubik 400/700/800 (SIL OFL, lokaal gehost)
icons/                  PNG-iconen 192, 512, maskable en Apple touch icon
```

## Inhoud aanpassen

Alle tekst staat in `js/content.js`. Opmaak in de tekst:

- `**vet**` wordt vetgedrukt.
- `{1,2}` of `{1-3}` wordt een aantikbaar bronnummer (alleen bij artikelen met genummerde bronnen, zoals oxytocine).
- Begrippen worden automatisch herkend via `pat` in `LC.begrippen` (woordvormen, gescheiden door `|`). De eerste keer per pagina wordt het woord aantikbaar.
- Verwijzingen bij themalessen en stofgroepen staan in `rel`: `adrenaline` is een stof, `b:receptor` een begrip, `g:afweerstoffen` een stofgroep.

## Lokaal starten

Dubbelklikken op `index.html` werkt, maar zonder offline-modus. Voor de volledige app start je een lokale webserver in deze map:

```
python3 -m http.server 8000
```

Open daarna `http://localhost:8000/`.

## Publiceren op GitHub Pages

1. Maak een repository aan en zet de inhoud van deze map in de root (of in `/docs`).
2. Ga naar Settings, Pages. Kies bij Source "Deploy from a branch", kies `main` en `/ (root)` (of `/docs`). Opslaan.
3. Na een minuut staat de app op `https://<gebruikersnaam>.github.io/<repository>/`. Alle paden zijn relatief, dus het subpad werkt.
4. Zet je een nieuwe versie online, verhoog dan `VERSION` in `sw.js`. De app toont dan "Nieuwe versie klaar" met een knop om te herladen.

## Op het beginscherm zetten

- iPhone (Safari): open de link, tik op Deel, kies "Zet op beginscherm".
- Android (Chrome): open de link, menu met drie puntjes, "App installeren" of "Toevoegen aan startscherm".

## Navigatie

Elke pagina heeft een eigen adres, zodat terug, vooruit en delen werken:

```
#/                      start
#/stof/adrenaline       stofartikel
#/thema/koffie          themales
#/groep/afweerstoffen   stofgroep
#/begrip/receptor       begrippenkaart
#/index                 A tot Z
#/zoek?q=calcium        zoeken
#/bewaard               bewaard en leesgeschiedenis
```

Sneltoets: `/` opent zoeken. `Esc` sluit een begrippenkaartje.

## Opslag

- Leesgeschiedenis (`lc.gelezen`), bewaarde artikelen (`lc.bewaard`) en de ronde van "Leer me wat nieuws" (`lc.ronde`) staan in `localStorage` van deze browser op dit apparaat. Geen account, geen synchronisatie.
- Lukt opslaan niet (bijvoorbeeld privévenster), dan werkt de app gewoon door en onthoudt hij alles tot je de pagina sluit.
- "Leer me wat nieuws" kiest willekeurig een stof, themales of stofgroep die in de huidige ronde nog niet geopend is. Zijn alle 33 gezien, dan begint een nieuwe ronde. Begrippenkaarten tellen niet mee.

## Offline

Na het eerste bezoek via http(s) werkt de hele app offline. Alleen de bronlinks hebben internet nodig.
