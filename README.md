# Button Petite website

A plain HTML website: one HTML file per page, one stylesheet and a small script.
Every page works without JavaScript; the script only adds a few extras.

## Folder structure

```
index.html                      home: hero, my apps, coming soon, idea box
apps/
  lafbekken/index.html          app page: about, why I made it, what you can do, questions, help, facts
  lafbekken/privacy/index.html  privacy policy of the app
  caffeine/...                  same structure
  notnow/...                    same structure
privacy/index.html              privacy of the website itself
help/index.html                 help & contact
404.html                        shown by GitHub Pages for every address that doesn't exist
styles.css                      all styling, in the Button Petite colours and fonts
script.js                       extras: colour button, idea form, blinking faces, old #/ links
assets/
  icons.svg                     the small icons (arrow, App Store, globe, GitHub, mail)
  icons/                        app icons (square PNG, at least 512 x 512)
  screens/                      app screenshots (portrait, 600 x 1298)
  fonts/                        Barlow Condensed and Rubik
  favicon.svg, share-image.png
CNAME                           the domain: buttonpetite.com
```

Addresses online: `buttonpetite.com/apps/notnow/`, `buttonpetite.com/apps/notnow/privacy/`, and so on.
Use the app page as **Support URL** and the privacy page as **Privacy Policy URL** in the App Store and Google Play.

## Changing text
Open the HTML file of that page and change the text between the tags.
Each page has its own `<title>` and `<meta name="description">` in the `<head>`: that's what Google
and WhatsApp/Instagram show when the page is shared. Keep those in line with the page.

Text that appears on several pages:
- the **header and footer** are on every page. When you change them (for example a new app in the footer),
  change them in every HTML file. Tip: use "Find in files" in your editor.
- an app's **name, tagline and short text** are on the home page (its card) and on its own app page.

## Adding a new app
1. Put the icon in `assets/icons/` (for example `assets/icons/myapp.png`).
2. Copy the folder `apps/notnow/` to `apps/myapp/` and change the text in
   `apps/myapp/index.html` and `apps/myapp/privacy/index.html`:
   - in the `<head>`: title, description, `theme-color`, canonical and og:url / og:image
   - the colour: `data-pair="orange"` and `data-accent="orange"` (mint, sky, lilac, cobalt, yellow,
     orange, red, purple, pink, black)
   - the content blocks. Remove a block you don't need, like "Screens".
3. Add a card to the "My apps" section in `index.html` (copy an `<article class="card">`).
4. Add a link in the footer of every page, and in the list on `privacy/index.html` and `help/index.html`.

## Status labels and colours
Status chips: Live, Beta, Working on it, Not public, Idea box.
Colour pairs come from the brand kit and are set with `data-pair="..."` in the HTML.

## The idea form
Without a form service, the form opens the visitor's mail app with the idea filled in.
To receive ideas directly: create a free form at formspree.io and paste its URL in
`data-endpoint=""` on the `<form id="idea-form">` in `index.html`.

## Hosting on GitHub Pages
1. Everything in this folder goes in the root of the repository (index.html at the top level).
2. Settings > Pages > Deploy from a branch > main, / (root).
3. Custom domain: buttonpetite.com (set by the CNAME file), with Enforce HTTPS on.
4. The DNS is at TransIP: four A records for @ (185.199.108.153 to 185.199.111.153),
   CNAME www to samrozemeijer2001-ship-it.github.io., MX 10 mx.transip.email.

## Before going live with something new
- Replace PLACEHOLDER values: the Instagram and TikTok handles in the footer, the App Store link of Lafbekken.
- Check privacy texts against what each app really does.
