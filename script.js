/* =====================================================================
   Button Petite website: small extras on top of plain HTML.
   Every page works without this file. It only adds:
   1. old links (#/apps/notnow) still work
   2. the header gets a background when you scroll
   3. the big yellow button changes the colours of the hero
   4. the idea form sends nicely (and checks the input first)
   5. the faces blink now and then
   ===================================================================== */

/* ---------- settings ---------- */
const EMAIL = "hello@buttonpetite.com";

/* ---------- 1. old links from the previous version of the site ---------- */
(function redirectOldLinks() {
  const hash = location.hash;
  if (!hash.startsWith("#/")) return;

  const parts = hash.slice(2).split("/").filter(Boolean);
  const root = document.querySelector('link[rel="stylesheet"]').getAttribute("href").replace("styles.css", "");
  let target = null;

  if (parts.length === 0) target = root || "./";
  else if (parts[0] === "apps" && parts[1] && parts[2] === "privacy") target = `${root}apps/${parts[1]}/privacy/`;
  else if (parts[0] === "apps" && parts[1]) target = `${root}apps/${parts[1]}/`;
  else if (["apps", "soon", "ideas"].includes(parts[0])) target = `${root || "./"}#${parts[0]}`;
  else if (parts[0] === "privacy") target = `${root}privacy/`;
  else if (parts[0] === "help") target = `${root}help/`;

  if (target) location.replace(target);
})();

/* ---------- 2. header background when scrolling ---------- */
const topBar = document.querySelector(".top");
if (topBar) {
  const update = () => topBar.classList.toggle("is-scrolled", window.scrollY > 8);
  window.addEventListener("scroll", update, { passive: true });
  update();
}

/* ---------- 3. the big button on the home page ---------- */
const bigButton = document.querySelector(".bigbutton");
if (bigButton) {
  const lines = ["Ouch", "Again?", "Hehe", "That tickles", "Boop", "Nothing at the hand"];
  // The colour pairs of the apps: Caffeine, Lafbekken, NotNow, Chores
  const schemes = ["cobalt", "red", "orange", "mint"];
  const hero = document.querySelector(".hero");
  const hint = bigButton.querySelector(".bigbutton__hint");
  let presses = 0;

  bigButton.addEventListener("click", () => {
    bigButton.classList.add("is-pressed");
    setTimeout(() => bigButton.classList.remove("is-pressed"), 140);
    hint.textContent = lines[presses % lines.length];
    presses++;
    hero.dataset.scheme = schemes[presses % schemes.length];
  });
}

/* ---------- 4. the idea form ---------- */
const form = document.querySelector("#idea-form");
if (form) {
  const status = form.querySelector("#form-status");
  const say = (text, kind) => {
    status.textContent = text;
    status.className = "form__status " + kind;
  };

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(form));

    if (data.website) return; // filled in by a bot
    if (!String(data.idea || "").trim()) {
      say("Oops, you forgot the idea itself.", "err");
      form.idea.focus();
      return;
    }
    if (data.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      say("That e-mail address doesn't look right.", "err");
      form.email.focus();
      return;
    }

    // With a form service (for example formspree.io) in data-endpoint, the idea goes straight to my inbox.
    const endpoint = form.dataset.endpoint;
    if (endpoint) {
      try {
        say("Sending...", "");
        const response = await fetch(endpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify({ about: data.about, idea: data.idea, name: data.name, email: data.email }),
        });
        if (!response.ok) throw new Error(response.status);
        form.reset();
        say("Thanks for the flowers! Your idea is in my inbox.", "ok");
      } catch {
        say(`That didn't work. Try again, or e-mail me at ${EMAIL}.`, "err");
      }
      return;
    }

    // Without a form service, the visitor's mail app opens with the idea filled in.
    const body = `About: ${data.about}\n\n${data.idea}\n\n${data.name ? "From: " + data.name + "\n" : ""}${data.email ? "Reply to: " + data.email : ""}`;
    const subject = `Idea for Button Petite: ${data.about}`;
    location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    say("Your mail app should open now with your idea in it. Just press send.", "ok");
  });
}

/* ---------- 5. faces blink every 2.4 to 6.5 seconds ---------- */
if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  const blink = () => {
    document.querySelectorAll(".face").forEach((face) => {
      if (Math.random() < 0.35) {
        face.classList.add("blink");
        setTimeout(() => face.classList.remove("blink"), 170);
      }
    });
    setTimeout(blink, 2400 + Math.random() * 4100);
  };
  setTimeout(blink, 2000);
}
