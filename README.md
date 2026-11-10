# Button Petite website

Three files plus an assets folder:
- index.html : the page shell (header, footer)
- styles.css : all styling, in the Button Petite brand colours and fonts
- app.js     : ALL content (apps, coming soon, e-mail addresses) + the page logic
- assets/    : fonts, app icons, favicon, share image

## Add or change an app
Open app.js. Everything you need is at the top:
- SITE: domain, e-mail addresses, socials, optional form endpoint
- APPS: one object per app. Copy one, paste, change. Put its icon in assets/icons/.
- COMING_SOON: ideas and apps that aren't public yet.

## Pages
- #/                       home (hero, apps, coming soon, idea box)
- #/apps/<id>              app page: about, FAQ, help, privacy summary
- #/apps/<id>/privacy      privacy policy of that app (use this as Privacy Policy URL in the stores)
- #/apps/<id>              use this as Support URL in the stores
- #/privacy, #/help        general privacy and contact

## Before going online
- Replace the PLACEHOLDER values in app.js (domain, e-mail, handles, store links).
- Check the Lafbekken privacy text (marked CHECK) matches what the app really does.
- Idea box: without formEndpoint it opens the visitor's mail app. For a real form,
  create a free form at formspree.io and paste its URL in SITE.formEndpoint.

## Hosting
Any static host works (GitHub Pages, Netlify, Cloudflare Pages). Upload the whole folder.
