/* =====================================================================
   Button Petite website

   HOW TO ADD A NEW APP
   1. Put the app icon (square PNG, at least 512 x 512) in assets/icons/.
   2. Copy one of the objects in APPS below, paste it at the end of the
      list and change the fields. Only `id`, `name`, `pair`, `status`,
      `tagline` and `icon` are required; everything else is optional.
   3. Done. The app gets a card on the home page, its own page with help,
      FAQ and privacy (#/apps/<id>), and a link in the footer.

   Ideas that are not real apps yet go in COMING_SOON.
   When an app goes live, move it from COMING_SOON to APPS.

   status:  "live"     in a store / online, store links are shown
            "beta"     testable, but not finished
            "building" I'm working on it, no download yet
            "private"  only for friends / home, not public
   pair:    colour from the brand kit: mint, sky, lilac, cobalt, yellow,
            orange, red, purple, pink, black
   face:    smiley used where there is no icon: happy, laugh, stars, wink,
            grin, relieved, shock
   ===================================================================== */

const SITE = {
  name: "Button Petite",
  domain: "buttonpetite.com",              // PLACEHOLDER: domain not checked yet
  email: "hello@buttonpetite.com",         // PLACEHOLDER: general / ideas
  supportEmail: "support@buttonpetite.com",// PLACEHOLDER: help with an app
  // Optional: paste a form endpoint (for example from formspree.io) to receive
  // ideas without opening the visitor's mail app. Empty = the form opens an e-mail.
  formEndpoint: "",
  socials: [
    { label: "Instagram", url: "https://www.instagram.com/buttonpetite/" }, // PLACEHOLDER handle
    { label: "TikTok", url: "https://www.tiktok.com/@buttonpetite" }        // PLACEHOLDER handle
  ],
  privacyUpdated: "10 November 2026"
};

const APPS = [
  {
    id: "lafbekken",
    name: "Lafbekken",
    pair: "red",
    status: "live",
    icon: "assets/icons/lafbekken.png",
    tagline: "A party game for one phone. Do you play it safe?",
    text: "Every turn you pick LAF (play it safe) or LEF (all or nothing). LAF is safe, until you pick it too often. LEF is always fifty-fifty, and the stakes go up every time.",
    platforms: ["iPhone"],
    age: "18+",
    language: "English, Dutch",
    links: {
      appStore: "",            // PLACEHOLDER: paste the App Store link
      googlePlay: "",
      web: ""
    },
    features: [
      "One phone, passed around the table",
      "Two choices every turn: LAF or LEF",
      "Rounds get more exciting the braver you are",
      "No account needed"
    ],
    faq: [
      { q: "How do I play?", a: "Pass the phone around. On your turn, pick LAF to play it safe or LEF to go all in. The app tells you what happens next. That's it, go your gang." },
      { q: "How many players do I need?", a: "Two or more. It gets more fun with a full table." },
      { q: "Why is it 18+?", a: "Some challenges are meant for adults. Please play responsibly and never push anyone to do something they don't want to do." },
      { q: "What do LAF and LEF mean?", a: "They're Dutch. LAF means cowardly, LEF means guts. So every turn the question is simple: are you a chicken or are you brave?" },
      { q: "Something doesn't work. What now?", a: "Send me a message with what you did and what went wrong (and which phone you use). I fix bugs as fast as my evenings allow." }
    ],
    privacy: {
      // CHECK: make sure this matches what the app really does before you publish.
      summary: "Lafbekken doesn't collect any personal data. No account, no tracking, no ads.",
      points: [
        "The game runs on your phone. Player names you type in stay on your phone.",
        "I don't collect, store or sell any personal data.",
        "No analytics, no advertising and no tracking SDKs.",
        "If you e-mail me, I only use your e-mail to answer you."
      ]
    }
  },
  {
    id: "caffeine",
    name: "Caffeine",
    pair: "cobalt",
    status: "building",
    icon: "assets/icons/caffeine.png",
    tagline: "How much caffeine is still in your tank?",
    text: "One tap logs a drink. The tank shows an estimate of how much caffeine is still in your system, so you know if coffee number four is a good idea.",
    platforms: ["Web app"],
    links: {
      appStore: "",
      googlePlay: "",
      web: ""                  // PLACEHOLDER: paste the web app link when it's online
    },
    features: [
      "Log a coffee, tea or energy drink in one tap",
      "A tank that slowly empties during the day",
      "Set your own daily limit",
      "Everything stays on your phone"
    ],
    faq: [
      { q: "How does it know how much caffeine is left?", a: "It uses the average time your body needs to break caffeine down. It's an estimate, not medical advice. Everybody is different." },
      { q: "Can I add my own drinks?", a: "Yes. You can add a drink with its own amount of caffeine." },
      { q: "Where is my data stored?", a: "Only on your own device. Nothing goes to a server." },
      { q: "Is it free?", a: "Yes." }
    ],
    privacy: {
      summary: "Caffeine keeps everything on your phone. Nothing is sent to me or anyone else.",
      points: [
        "The drinks you log are stored only on your device.",
        "No account, no analytics, no ads, no tracking.",
        "Remove the app or clear its data and everything is gone.",
        "The caffeine numbers are estimates and not medical advice."
      ]
    }
  },
  {
    id: "notnow",
    name: "NotNow",
    pair: "orange",
    status: "beta",
    icon: "assets/icons/notnow.png",
    tagline: "Get it out of your head. I'll remember it.",
    text: "A thought pops up while you're busy? Throw it on a card, type it or just say it, and get back to what you were doing. Later you find everything back in your Thought Bank, with the important stuff on top.",
    platforms: ["Web app", "iPhone", "Android"],
    language: "English",
    links: {
      appStore: "",
      googlePlay: "",
      web: ""                  // PLACEHOLDER: paste the NotNow web app link (GitHub Pages)
    },
    screens: [
      "assets/screens/notnow-1.png",
      "assets/screens/notnow-2.png",
      "assets/screens/notnow-3.png",
      "assets/screens/notnow-4.png"
    ],
    features: [
      "Capture a thought in seconds, by typing or with your voice",
      "Mark what's important, so it stays on top",
      "Set a reminder for today or tomorrow",
      "A daily recap of what's still waiting for you",
      "Done thoughts clean themselves up the next day",
      "Works offline and without an account"
    ],
    faq: [
      { q: "How do I put NotNow on my home screen?", a: "iPhone: open the link in Safari, tap the share button and choose Add to Home Screen. Android: open the link in Chrome, tap the menu and choose Install app. Then open NotNow from your home screen." },
      { q: "Why don't I get reminders on my lock screen?", a: "Lock screen reminders need iOS 16.4 or newer, and only work when you open NotNow from your home screen, not from Safari. Then go to Settings and turn on Notifications. On Android it works in Chrome." },
      { q: "Where did my done thoughts go?", a: "Thoughts you mark as done stay for the rest of the day and are cleaned up the next day. That's on purpose: a fresh start every morning." },
      { q: "Voice input doesn't work. What now?", a: "Voice uses the speech recognition of your browser. It works in Safari and Chrome, not in Firefox, and sometimes not in an app on the iPhone home screen. You can always just type." },
      { q: "I added NotNow to my home screen and my thoughts are gone.", a: "Nothing is lost. On iPhone the home screen app has its own storage, separate from Safari. Your old thoughts are still in Safari." },
      { q: "Is it finished?", a: "Not yet, it's a beta. Most things work, some things I'm still building. If something breaks, nothing at the hand: send me a message and I'll fix it." }
    ],
    privacy: {
      summary: "Your thoughts stay on your phone. Only if you turn on lock screen reminders, a copy goes to my reminder server, and turning them off deletes it again.",
      points: [
        "No account, no ads, no analytics and no tracking.",
        "Your thoughts, places and settings are stored only in your browser on your own device.",
        "Lock screen reminders and the daily recap are optional. When you turn them on, a copy of your thoughts (text, important, done, reminder times), your recap schedule and your time zone is sent to my reminder server, so it can send the notification at the right moment. Your places are not sent.",
        "Turn Notifications off in Settings and that copy is deleted from the server.",
        "Use my current location only asks your phone for your position when you tap it. It's used inside the app and not sent to me.",
        "Voice input uses the speech recognition of your browser (Apple or Google). What you say is handled by them, not by me.",
        "The fonts are built into the app, so nothing is loaded from Google or any other outside server.",
        "Clear the app's site data or remove it from your home screen and everything on your device is gone."
      ]
    }
  }
];

const COMING_SOON = [
  {
    name: "Chores",
    pair: "mint",
    icon: "assets/icons/chores.png",
    status: "private",
    text: "Who cleaned the bathroom last? A chore tracker for sharing a home. Right now it's only used at home, but I'm working on a version for everyone."
  },
  {
    name: "Next idea",
    pair: "lilac",
    face: "stars",
    status: "building",
    text: "Something new is cooking. Now the monkey doesn't come out of the sleeve yet, but you'll see it here first."
  },
  {
    name: "Your idea?",
    pair: "yellow",
    face: "wink",
    status: "idea",
    link: "#/ideas",
    text: "Got a tiny everyday problem that needs a tiny app? Tell me, maybe it's the next one."
  }
];

/* ===================================================================== */
/* Below this line you normally don't need to change anything.           */
/* ===================================================================== */

const STATUS = {
  live: "Live",
  beta: "Beta",
  building: "Working on it",
  private: "Not public",
  idea: "Idea box"
};

const FACES = {
  happy:    { eyes: '<circle cx="34" cy="38" r="4"/><circle cx="66" cy="38" r="4"/>', mouth: '<path d="M24 54 q26 36 52 0 z"/>' },
  laugh:    { eyes: '<path d="M26 40 q8 -8 16 0 M58 40 q8 -8 16 0" fill="none" stroke-width="8"/>', mouth: '<path d="M24 54 q26 36 52 0 z"/>' },
  stars:    { eyes: '<path transform="translate(34 39) scale(.72) translate(-34 -39)" d="M34 26 l4 9 10 1 -8 6 3 10 -9 -6 -9 6 3 -10 -8 -6 10 -1z"/><path transform="translate(66 39) scale(.72) translate(-66 -39)" d="M66 26 l4 9 10 1 -8 6 3 10 -9 -6 -9 6 3 -10 -8 -6 10 -1z"/>', mouth: '<path d="M26 62 q24 32 48 0 z"/>' },
  wink:     { eyes: '<circle cx="34" cy="38" r="4"/><path d="M58 40 q8 -8 16 0" fill="none" stroke-width="8"/>', mouth: '<path d="M24 54 q26 36 52 0 z"/>' },
  grin:     { eyes: '<circle cx="34" cy="38" r="4"/><circle cx="66" cy="38" r="4"/>', mouth: '<path d="M32 62 q18 12 38 -6" fill="none" stroke-width="8"/>' },
  relieved: { eyes: '<path d="M26 40 q8 -8 16 0 M58 40 q8 -8 16 0" fill="none" stroke-width="8"/>', mouth: '<path d="M30 62 q20 16 40 0" fill="none" stroke-width="8"/>' },
  shock:    { eyes: '<circle cx="34" cy="38" r="6"/><circle cx="66" cy="38" r="6"/>', mouth: '<ellipse cx="50" cy="70" rx="7" ry="10"/>' }
};

const ICON = {
  arrow: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 12h15m-6-6 6 6-6 6" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  apple: '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M16.4 12.6c0-2.4 2-3.6 2.1-3.7-1.1-1.7-2.9-1.9-3.5-1.9-1.5-.2-2.9.9-3.7.9s-1.9-.9-3.2-.8c-1.6 0-3.1 1-4 2.4-1.7 3-.4 7.4 1.2 9.8.8 1.2 1.8 2.5 3 2.4 1.2 0 1.7-.8 3.1-.8s1.9.8 3.2.8 2.1-1.2 2.9-2.4c.9-1.3 1.3-2.7 1.3-2.8-.1 0-2.4-.9-2.4-3.9zM14 5.5c.7-.8 1.1-1.9 1-3-1 0-2.1.7-2.8 1.5-.6.7-1.2 1.8-1 2.9 1 .1 2.1-.6 2.8-1.4z"/></svg>',
  play: '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M4 3.5v17c0 .6.7 1 1.2.7l14.6-8.5c.5-.3.5-1.1 0-1.4L5.2 2.8C4.7 2.5 4 2.9 4 3.5z"/></svg>',
  globe: '<svg viewBox="0 0 24 24" aria-hidden="true"><g fill="none" stroke="currentColor" stroke-width="2.4"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.5 2.6 3.7 5.6 3.7 9s-1.2 6.4-3.7 9c-2.5-2.6-3.7-5.6-3.7-9S9.5 5.6 12 3z"/></g></svg>',
  mail: '<svg viewBox="0 0 24 24" aria-hidden="true"><g fill="none" stroke="currentColor" stroke-width="2.6" stroke-linejoin="round"><rect x="3" y="5" width="18" height="14" rx="3"/><path d="m4 7 8 6 8-6"/></g></svg>'
};

const esc = s => String(s ?? "").replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const $ = (sel, el = document) => el.querySelector(sel);
const $$ = (sel, el = document) => [...el.querySelectorAll(sel)];

function face(name = "happy", label = "") {
  const f = FACES[name] || FACES.happy;
  const a11y = label ? `role="img" aria-label="${esc(label)}"` : 'aria-hidden="true"';
  return `<svg class="face" viewBox="20 24 60 54" ${a11y}><g fill="currentColor" stroke="currentColor" stroke-width="7" stroke-linejoin="round" stroke-linecap="round"><g class="eyes">${f.eyes}</g><g class="mouth">${f.mouth}</g></g></svg>`;
}

function storeButtons(app, small = false) {
  const cls = small ? "btn btn--small" : "btn";
  const l = app.links || {};
  const out = [];
  if (l.appStore) out.push(`<a class="${cls}" href="${esc(l.appStore)}" rel="noopener">${ICON.apple}App Store</a>`);
  if (l.googlePlay) out.push(`<a class="${cls}" href="${esc(l.googlePlay)}" rel="noopener">${ICON.play}Google Play</a>`);
  if (l.web) out.push(`<a class="${cls}" href="${esc(l.web)}" rel="noopener">${ICON.globe}Open web app</a>`);
  if (!out.length) {
    const msg = app.status === "private" ? "Not public yet" : app.status === "live" ? "Link coming soon" : "Coming soon";
    out.push(`<span class="${cls}" aria-disabled="true">${msg}</span>`);
  }
  return out.join("");
}

function chips(app) {
  const list = [`<span class="chip status">${esc(STATUS[app.status] || app.status)}</span>`];
  (app.platforms || []).forEach(p => list.push(`<span class="chip">${esc(p)}</span>`));
  if (app.age) list.push(`<span class="chip">${esc(app.age)}</span>`);
  return list.join("");
}

/* ---------------------------------------------------------------- pages */

function pageHome() {
  return `
  <section class="hero">
    <div class="wrap hero__in">
      <div class="in">
        <span class="meta eyebrow">Hi, welcome</span>
        <h1 class="disp hero__title">Tiny apps,<br><span class="tag">made</span> for fun</h1>
        <p class="hero__text">I'm just a guy who likes messing around with apps. <strong>Button Petite</strong> is where I put the tiny apps I make for small everyday things: game nights, coffee, chores, busy heads and whatever comes next. No company, no team, bugs included.</p>
        <div class="btn-row">
          <a class="btn" href="#/apps">See my apps ${ICON.arrow}</a>
          <a class="btn btn--soft" href="#/ideas">Send an idea</a>
        </div>
      </div>
      <div class="hero__art">
        <button class="bigbutton" type="button" data-pair="yellow" aria-label="Press the button">
          <span class="bigbutton__side"></span>
          <span class="bigbutton__top" style="color:var(--yellow-ink)">${face("happy")}</span>
          <span class="meta bigbutton__hint">Go on, press it</span>
        </button>
      </div>
    </div>
  </section>

  <section class="section" id="apps" aria-labelledby="apps-title">
    <div class="wrap">
      <div class="section__head">
        <div>
          <span class="meta eyebrow">What I made</span>
          <h2 class="disp section__title" id="apps-title">My apps</h2>
        </div>
        <p class="section__lead">Small apps for real life. Tap an app for help, questions and how I handle your data.</p>
      </div>
      <div class="apps">
        ${APPS.map((app, i) => `
        <article class="card in" data-pair="${esc(app.pair)}" style="animation-delay:${0.06 * i}s">
          <div class="card__top">
            <img class="card__icon" src="${esc(app.icon)}" alt="" width="84" height="84" loading="lazy">
            <h3 class="disp card__name">${esc(app.name)}</h3>
          </div>
          <p class="card__tagline">${esc(app.tagline)}</p>
          ${app.text ? `<p class="card__text">${esc(app.text)}</p>` : ""}
          <div class="card__chips">${chips(app)}</div>
          <div class="card__foot">
            ${storeButtons(app, true)}
            <a class="btn btn--small btn--soft" href="#/apps/${esc(app.id)}">Help &amp; info</a>
          </div>
        </article>`).join("")}
      </div>
    </div>
  </section>

  <section class="section soon" id="soon" aria-labelledby="soon-title">
    <div class="wrap">
      <div class="section__head">
        <div>
          <span class="meta eyebrow">On my desk</span>
          <h2 class="disp section__title" id="soon-title">Coming soon</h2>
        </div>
        <p class="section__lead">Things I'm working on or thinking about. No promises on dates, we'll see how the cat comes out of the tree.</p>
      </div>
      <div class="soon-grid">
        ${COMING_SOON.map((s, i) => `
        <article class="soon-card in" style="animation-delay:${0.06 * i}s">
          <div class="soon-card__tile" data-pair="${esc(s.pair)}" style="color:var(--fg)">
            ${s.icon ? `<img src="${esc(s.icon)}" alt="" width="88" height="88" loading="lazy">` : face(s.face || "happy")}
          </div>
          <div><span class="chip">${esc(STATUS[s.status] || s.status)}</span></div>
          <h3 class="disp soon-card__name">${esc(s.name)}</h3>
          <p>${esc(s.text)}</p>
          ${s.link ? `<div><a class="btn btn--small" href="${esc(s.link)}">Tell me ${ICON.arrow}</a></div>` : ""}
        </article>`).join("")}
      </div>
    </div>
  </section>

  ${ideasSection()}`;
}

function ideasSection() {
  const appOptions = [...APPS.map(a => a.name), "A new app"];
  return `
  <section class="section ideas" id="ideas" aria-labelledby="ideas-title">
    <div class="wrap ideas__in">
      <div>
        <span class="meta eyebrow">Idea box</span>
        <h2 class="disp ideas__title" id="ideas-title">Got an idea?</h2>
        <p class="ideas__text">A tiny problem that needs a tiny app, a feature you miss or a bug that drives you crazy. Tell me. I read everything, and the best ideas end up on my desk.</p>
        <div class="ideas__face" style="color:var(--yellow-ink)">${face("stars")}</div>
      </div>
      <form class="form" id="idea-form" novalidate>
        <fieldset class="field choices">
          <legend>What is it about?</legend>
          ${appOptions.map((o, i) => `<label class="choice"><input type="radio" name="about" value="${esc(o)}" ${i === appOptions.length - 1 ? "checked" : ""}><span>${esc(o)}</span></label>`).join("")}
        </fieldset>
        <div class="field">
          <label for="idea">Your idea</label>
          <textarea class="textarea" id="idea" name="idea" required maxlength="2000" placeholder="I'd love an app that..."></textarea>
        </div>
        <div class="field">
          <label for="name">Your name <span class="hint">(optional)</span></label>
          <input class="input" id="name" name="name" autocomplete="nickname" maxlength="80">
        </div>
        <div class="field">
          <label for="email">Your e-mail <span class="hint">(optional, only if you want a reply)</span></label>
          <input class="input" id="email" name="email" type="email" autocomplete="email" maxlength="120">
        </div>
        <div class="hp" aria-hidden="true"><label>Leave this empty <input name="website" tabindex="-1" autocomplete="off"></label></div>
        <button class="btn" type="submit">Send my idea ${ICON.arrow}</button>
        <p class="form__status" id="form-status" role="status" aria-live="polite"></p>
      </form>
    </div>
  </section>`;
}

function pageApp(app) {
  const p = app.privacy || {};
  const mail = `mailto:${SITE.supportEmail}?subject=${encodeURIComponent(`Help with ${app.name}`)}&body=${encodeURIComponent("What happened:\n\nWhat I expected:\n\nMy phone / browser:\n")}`;
  return `
  <section class="apphero" data-pair="${esc(app.pair)}">
    <div class="wrap">
      <div class="apphero__in">
        <img class="apphero__icon in" src="${esc(app.icon)}" alt="${esc(app.name)} app icon" width="200" height="200">
        <div class="in">
          <a class="back" href="#/apps">${ICON.arrow}All apps</a>
          <h1 class="disp apphero__name">${esc(app.name)}</h1>
          <p class="apphero__tagline">${esc(app.tagline)}</p>
          <div class="card__chips">${chips(app)}</div>
          <div class="btn-row">${storeButtons(app)}</div>
        </div>
      </div>
    </div>
  </section>

  <section class="section">
    <div class="wrap detail">
      <div class="prose" style="--accent:var(--${esc(app.pair)})">
        ${app.text ? `<div class="block"><h2>About</h2><p>${esc(app.text)}</p>
          ${app.features?.length ? `<ul class="dots">${app.features.map(f => `<li>${esc(f)}</li>`).join("")}</ul>` : ""}</div>` : ""}
        ${app.screens?.length ? `<div class="block"><h2>Screens</h2><div class="shots">${app.screens.map(s => `<img src="${esc(s)}" alt="" loading="lazy">`).join("")}</div></div>` : ""}
        ${app.faq?.length ? `<div class="block" id="faq"><h2>Questions</h2><div class="faq">${app.faq.map(f => `<details><summary>${esc(f.q)}</summary><div class="faq__a"><p>${esc(f.a)}</p></div></details>`).join("")}</div></div>` : ""}
      </div>
      <aside class="side">
        <div class="panel panel--color" data-pair="${esc(app.pair)}">
          <h2>Need help?</h2>
          <p>Something broken or confusing? Send me a message. Tell me what happened and which phone you use, and I'll get back to you.</p>
          <a class="btn btn--small" href="${mail}">${ICON.mail}E-mail me</a>
        </div>
        <div class="panel">
          <h2>Privacy</h2>
          <p>${esc(p.summary || "See the privacy page for details.")}</p>
          <a class="btn btn--small btn--soft" href="#/apps/${esc(app.id)}/privacy">Read the privacy policy</a>
        </div>
        <div class="panel">
          <h2>Facts</h2>
          <dl class="facts">
            <div><dt>Status</dt><dd>${esc(STATUS[app.status] || app.status)}</dd></div>
            ${app.platforms?.length ? `<div><dt>Works on</dt><dd>${esc(app.platforms.join(", "))}</dd></div>` : ""}
            ${app.age ? `<div><dt>Age</dt><dd>${esc(app.age)}</dd></div>` : ""}
            ${app.language ? `<div><dt>Language</dt><dd>${esc(app.language)}</dd></div>` : ""}
            <div><dt>Price</dt><dd>${esc(app.price || "Free")}</dd></div>
          </dl>
        </div>
      </aside>
    </div>
  </section>`;
}

function pageAppPrivacy(app) {
  const p = app.privacy || {};
  return `
  <section class="section">
    <div class="wrap legal prose" style="--accent:var(--${esc(app.pair)})">
      <a class="back" href="#/apps/${esc(app.id)}">${ICON.arrow}${esc(app.name)}</a>
      <h1 class="disp section__title">${esc(app.name)} privacy</h1>
      <p class="updated">Last updated: ${esc(SITE.privacyUpdated)}</p>
      <div class="summary" data-pair="${esc(app.pair)}"><p>${esc(p.summary || "")}</p></div>
      <h2>What happens with your data</h2>
      <ul class="dots">${(p.points || []).map(x => `<li>${esc(x)}</li>`).join("")}</ul>
      <h3>Who makes this app?</h3>
      <p>${esc(app.name)} is made by one person, as a hobby, under the name Button Petite.</p>
      <h3>Children</h3>
      <p>${app.age === "18+" ? "This app is meant for adults (18+)." : "This app doesn't knowingly collect data from anyone, including children."}</p>
      <h3>Changes</h3>
      <p>If anything changes in how the app handles data, I'll update this page and the date at the top.</p>
      <h3>Questions?</h3>
      <p>Send an e-mail to <a href="mailto:${esc(SITE.supportEmail)}">${esc(SITE.supportEmail)}</a>.</p>
    </div>
  </section>`;
}

function pagePrivacy() {
  return `
  <section class="section">
    <div class="wrap legal prose">
      <h1 class="disp section__title">Privacy</h1>
      <p class="updated">Last updated: ${esc(SITE.privacyUpdated)}</p>
      <div class="summary" data-pair="mint"><p>The short version: this website doesn't track you, and my apps collect as little as possible. Usually nothing at all.</p></div>
      <h2>This website</h2>
      <ul class="dots">
        <li>No cookies, no analytics, no ads and no tracking.</li>
        <li>If you send an idea, I only get what you type in. Your name and e-mail are optional.</li>
        <li>I only use your e-mail to reply to you. I never share or sell it.</li>
        <li>Want your message deleted? E-mail me and it's gone.</li>
      </ul>
      <h2>My apps</h2>
      <p>Every app has its own privacy page:</p>
      <ul class="dots">${APPS.map(a => `<li><a href="#/apps/${esc(a.id)}/privacy">${esc(a.name)} privacy</a></li>`).join("")}</ul>
      <h3>Questions?</h3>
      <p>Send an e-mail to <a href="mailto:${esc(SITE.email)}">${esc(SITE.email)}</a>.</p>
    </div>
  </section>`;
}

function pageHelp() {
  return `
  <section class="section">
    <div class="wrap legal prose">
      <h1 class="disp section__title">Help &amp; contact</h1>
      <p class="updated">I make these apps on my own, in my spare time. I read every message, but sometimes it takes a few days to reply.</p>
      <h2>Help with an app</h2>
      <ul class="dots">${APPS.map(a => `<li><a href="#/apps/${esc(a.id)}">${esc(a.name)}</a>: questions, help and privacy</li>`).join("")}</ul>
      <h2>Contact</h2>
      <p>Help with an app: <a href="mailto:${esc(SITE.supportEmail)}">${esc(SITE.supportEmail)}</a><br>
      Anything else: <a href="mailto:${esc(SITE.email)}">${esc(SITE.email)}</a></p>
      <p>Got an idea for a new app? <a href="#/ideas">Use the idea box</a>.</p>
    </div>
  </section>`;
}

function pageNotFound() {
  return `
  <section class="section">
    <div class="wrap legal prose" style="text-align:left">
      <div style="width:120px;color:var(--yellow-ink);margin-bottom:24px">${face("shock")}</div>
      <h1 class="disp section__title">Oops</h1>
      <p>I thought I saw water burning: this page doesn't exist. Maybe it moved, maybe I broke it.</p>
      <p style="margin-top:20px"><a class="btn" href="#/">Back home ${ICON.arrow}</a></p>
    </div>
  </section>`;
}

/* --------------------------------------------------------------- router */

const main = $("#main");

function route() {
  const hash = location.hash.replace(/^#\/?/, "");
  const parts = hash.split("/").filter(Boolean);
  let html, title = SITE.name + ": tiny apps, made for fun", scrollTo = null;

  if (!parts.length || ["apps", "soon", "ideas"].includes(parts[0]) && parts.length === 1) {
    html = pageHome();
    if (parts[0]) scrollTo = parts[0];
  } else if (parts[0] === "apps") {
    const app = APPS.find(a => a.id === parts[1]);
    if (!app) html = pageNotFound();
    else if (parts[2] === "privacy") { html = pageAppPrivacy(app); title = `${app.name} privacy | ${SITE.name}`; }
    else { html = pageApp(app); title = `${app.name} | ${SITE.name}`; }
  } else if (parts[0] === "privacy") { html = pagePrivacy(); title = `Privacy | ${SITE.name}`; }
  else if (parts[0] === "help") { html = pageHelp(); title = `Help & contact | ${SITE.name}`; }
  else html = pageNotFound();

  // render only when the page changes (keeps form input when jumping within home)
  const key = parts[0] && !["apps", "soon", "ideas"].includes(parts[0]) || parts.length > 1 ? hash : "home";
  if (main.dataset.key !== key) {
    main.innerHTML = html;
    main.dataset.key = key;
    bindPage();
    if (!scrollTo) window.scrollTo(0, 0);
  }
  document.title = title;
  $$(".nav a").forEach(a => a.removeAttribute("aria-current"));
  const navMatch = $$(".nav a").find(a => a.getAttribute("href") === "#/" + (parts[0] || ""));
  if (navMatch && parts.length === 1) navMatch.setAttribute("aria-current", "page");

  if (scrollTo) {
    const el = document.getElementById(scrollTo);
    if (el) requestAnimationFrame(() => {
      const top = el.getBoundingClientRect().top + window.scrollY - ($(".top")?.offsetHeight || 0) + 1;
      window.scrollTo({ top, behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" });
    });
  }
}

/* -------------------------------------------------------- interactions */

function bindPage() {
  // faces in static places (header, footer)
  $$("[data-face]").forEach(el => { if (!el.innerHTML.trim()) { el.style.color = "var(--fg)"; el.innerHTML = face(el.dataset.face); } });

  const big = $(".bigbutton");
  if (big) {
    const lines = ["Ouch", "Again?", "Hehe", "That tickles", "Boop", "Nothing at the hand"];
    let n = 0;
    big.addEventListener("click", () => {
      big.classList.add("is-pressed");
      setTimeout(() => big.classList.remove("is-pressed"), 140);
      const hint = $(".bigbutton__hint", big);
      if (hint) hint.textContent = lines[n++ % lines.length];
    });
  }

  const form = $("#idea-form");
  if (form) form.addEventListener("submit", sendIdea);
}

async function sendIdea(e) {
  e.preventDefault();
  const form = e.currentTarget;
  const status = $("#form-status");
  const data = Object.fromEntries(new FormData(form));
  status.className = "form__status";

  if (data.website) return;                      // bot trap
  if (!String(data.idea || "").trim()) {
    status.textContent = "Oops, you forgot the idea itself.";
    status.classList.add("err");
    $("#idea").focus();
    return;
  }
  if (data.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    status.textContent = "That e-mail address doesn't look right.";
    status.classList.add("err");
    $("#email").focus();
    return;
  }

  if (SITE.formEndpoint) {
    try {
      status.textContent = "Sending...";
      const res = await fetch(SITE.formEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify({ about: data.about, idea: data.idea, name: data.name, email: data.email })
      });
      if (!res.ok) throw new Error(res.status);
      form.reset();
      status.textContent = "Thanks for the flowers! Your idea is in my inbox.";
      status.classList.add("ok");
    } catch {
      status.textContent = "That didn't work. Try again, or e-mail me at " + SITE.email + ".";
      status.classList.add("err");
    }
    return;
  }

  const body = `About: ${data.about}\n\n${data.idea}\n\n${data.name ? "From: " + data.name + "\n" : ""}${data.email ? "Reply to: " + data.email : ""}`;
  location.href = `mailto:${SITE.email}?subject=${encodeURIComponent("Idea for Button Petite: " + data.about)}&body=${encodeURIComponent(body)}`;
  status.textContent = "Your mail app should open now with your idea in it. Just press send.";
  status.classList.add("ok");
}

/* faces blink every 2.4 to 6.5 seconds, like in the videos */
function blinkLoop() {
  if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const tick = () => {
    $$(".face").forEach(f => {
      if (Math.random() < 0.35) {
        f.classList.add("blink");
        setTimeout(() => f.classList.remove("blink"), 170);
      }
    });
    setTimeout(tick, 2400 + Math.random() * 4100);
  };
  setTimeout(tick, 2000);
}

function renderChrome() {
  $("#foot-apps").innerHTML = APPS.map(a => `<li><a href="#/apps/${esc(a.id)}">${esc(a.name)}</a></li>`).join("");
  $("#foot-socials").innerHTML = SITE.socials.map(s => `<li><a href="${esc(s.url)}" rel="me noopener">${esc(s.label)}</a></li>`).join("")
    + `<li><a href="mailto:${esc(SITE.email)}">E-mail</a></li>`;
  $("#foot-small").textContent = `© ${new Date().getFullYear()} ${SITE.name}. Made by one person, for fun.`;
  const top = $(".top");
  addEventListener("scroll", () => top.classList.toggle("is-scrolled", scrollY > 8), { passive: true });
}

renderChrome();
addEventListener("hashchange", route);
route();
blinkLoop();
