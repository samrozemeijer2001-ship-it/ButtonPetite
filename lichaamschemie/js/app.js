/* Lichaamschemie: schermen, navigatie, opslag en interactie */
(function(){
"use strict";
var rustig = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
var view = document.getElementById("view");
if ("scrollRestoration" in history) history.scrollRestoration = "manual";

/* ---------------- Opslag (lokaal, met vangnet) ---------------- */
var mem = {};
function lees(k, d){ try { var v = localStorage.getItem("lc." + k); return v ? JSON.parse(v) : d; } catch(e){ return mem[k] !== undefined ? mem[k] : d; } }
function bewaar(k, v){ mem[k] = v; try { localStorage.setItem("lc." + k, JSON.stringify(v)); } catch(e){} }

/* ---------------- Pagina's ---------------- */
var PAG = {};      // sleutel -> pagina
var LIJST = [];
function voeg(p){ PAG[p.key] = p; LIJST.push(p); }
LC.stoffen.forEach(function(s){ s.key = "stof:" + s.id; s.type = "stof"; s.href = "#/stof/" + s.id; voeg(s); });
var THEMAKLEUR = ["blauw","mint","lila","geel","oranje","roze"];
LC.themas.forEach(function(t, i){ t.key = "thema:" + t.id; t.type = "thema"; t.href = "#/thema/" + t.id; t.kleur = THEMAKLEUR[i % THEMAKLEUR.length]; voeg(t); });
LC.groepen.forEach(function(g, i){ g.key = "groep:" + g.id; g.type = "groep"; g.href = "#/groep/" + g.id; g.kleur = ["lila","mint","blauw","geel","oranje"][i % 5]; voeg(g); });
LC.begrippen.forEach(function(b){ b.key = "begrip:" + b.id; b.type = "begrip"; b.href = "#/begrip/" + b.id; b.kleur = "zwart"; voeg(b); });
var TYPENAAM = {stof:"Stof", thema:"Themales", groep:"Stofgroep", begrip:"Begrip"};
var TYPEMV = {stof:"Stoffen", thema:"Thema's", groep:"Stofgroepen", begrip:"Begrippen"};
var LEERBAAR = LIJST.filter(function(p){ return p.type !== "begrip"; });

function relNaarKey(r){
  if (r.indexOf("b:") === 0) return "begrip:" + r.slice(2);
  if (r.indexOf("g:") === 0) return "groep:" + r.slice(2);
  if (r.indexOf("t:") === 0) return "thema:" + r.slice(2);
  return "stof:" + r;
}

/* platte tekst per pagina, voor zoeken en verbanden */
function plat(s){ return String(s || "").replace(/\*\*/g,"").replace(/\{[\d,\-]+\}/g,"").replace(/<\/?sub>/g,""); }
function blokTekst(bl){
  var u = [];
  (bl || []).forEach(function(b){
    if (b.x) u.push(b.x);
    if (b.items) b.items.forEach(function(it){ if (typeof it === "string") u.push(it); else u.push([it.b, it.tag, it.kop, it.lead, it.x].join(" ")); });
  });
  return u.join(" ");
}
function secTekst(arr){ return (arr || []).map(function(s){ return s.kop + " " + blokTekst(s.blocks); }).join(" "); }
LIJST.forEach(function(p){
  var u = [p.titel];
  if (p.type === "stof"){
    u.push(p.vraag, p.intro.join(" "), secTekst(p.kern), blokTekst(p.mv.blocks), secTekst(p.mv.details), secTekst(p.verdieping));
    u.push(typeof p.wist === "string" ? p.wist : p.wist.map(function(w){ return w.kop + " " + w.x; }).join(" "));
    p.kennis.forEach(function(k){ u.push(k.v, k.a || "", (k.opties || []).map(function(o){ return o.x + " " + o.uitleg; }).join(" ")); });
    if (p.denk) u.push(p.denk.v, p.denk.a);
  } else if (p.type === "begrip") { u.push(p.d); }
  else u.push(p.x);
  p.tekst = plat(u.join(" "));
});

/* ---------------- Begrippen herkennen ---------------- */
var TERMEN = LC.begrippen.filter(function(b){ return b.pat; }).map(function(b){ return {id:b.id, pat:b.pat}; }).concat(LC.extraTermen);
TERMEN.forEach(function(t){ t.re = new RegExp("(?<![\\p{L}\\d-])(" + t.pat + ")(?![\\p{L}\\d])", "iu"); });
LIJST.forEach(function(p){ p.termen = TERMEN.filter(function(t){ return t.re.test(p.tekst); }).map(function(t){ return t.id; }); });
function termInfo(id, pagina){
  if (pagina && pagina.woordenlijst){
    var alias = id === "neuromodulatie" ? "neuromodulator" : id;
    var w = pagina.woordenlijst.filter(function(r){ return r[0] === alias; })[0];
    if (w) return {titel:w[1], d:w[2], kaart:PAG["begrip:" + id] ? "#/begrip/" + id : null};
  }
  var b = PAG["begrip:" + id];
  return b ? {titel:b.titel, d:b.d, kaart:b.href} : null;
}
function pagsMetTerm(id, behalve){
  return LIJST.filter(function(p){ return p.type !== "begrip" && p.key !== behalve && p.termen.indexOf(id) >= 0; });
}

/* ---------------- Hulpjes ---------------- */
function esc(s){ return String(s).replace(/[&<>"]/g, function(c){ return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]; }); }
function md(s){
  var h = esc(s).replace(/&lt;(\/?)sub&gt;/g, "<$1sub>").replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
  return h.replace(/\{([\d,\-]+)\}/g, function(_, r){
    var n = [];
    r.split(",").forEach(function(d){ if (d.indexOf("-") > 0){ var a = d.split("-"); for (var i = +a[0]; i <= +a[1]; i++) n.push(i); } else n.push(+d); });
    return '<span class="refs">' + n.map(function(i){ return '<button type="button" class="ref" data-bron="' + i + '" aria-label="Bron ' + i + '">' + i + "</button>"; }).join("") + "</span>";
  });
}
function norm(s){ return String(s).toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, ""); }
function ico(id){ return '<svg aria-hidden="true" focusable="false"><use href="#i-' + id + '"/></svg>'; }
function bronLabel(u){
  var m;
  if ((m = u.match(/pmc\.ncbi\.nlm\.nih\.gov\/articles\/(PMC\d+)/))) return "PubMed Central, artikel " + m[1];
  if ((m = u.match(/pubmed\.ncbi\.nlm\.nih\.gov\/(\d+)/))) return "PubMed, artikel " + m[1];
  if ((m = u.match(/ncbi\.nlm\.nih\.gov\/books\/(NBK\d+)/))) return "NCBI Bookshelf, " + m[1];
  if (u.indexOf("openstax.org/details") >= 0) return "OpenStax: Anatomy and Physiology 2e";
  if (u.indexOf("openstax.org") >= 0) return "OpenStax: Anatomy and Physiology, communicatie tussen neuronen";
  if ((m = u.match(/familyId=(\d+)/))) return "IUPHAR Guide to Pharmacology, receptorfamilie " + m[1];
  if ((m = u.match(/doi\.org\/(.+)$/))) return "DOI " + m[1];
  return u;
}
function bronLi(u, nr){
  return '<li class="tint"' + (nr ? ' id="bron-' + nr + '"' : "") + ">" + (nr ? '<span class="b-nr" aria-hidden="true">' + nr + "</span>" : '<span class="b-nr" aria-hidden="true">' + ico("link").replace("<svg", '<svg style="width:22px;height:22px"') + "</span>") +
    '<a href="' + esc(u) + '" target="_blank" rel="noopener">' + esc(bronLabel(u)) + ico("uit") + '<span class="sr-only"> (opent in nieuw tabblad)</span></a></li>';
}

/* ---------------- Smileys ---------------- */
function ster(cx, cy, r){
  var pts = [];
  for (var i = 0; i < 10; i++){ var a = -Math.PI / 2 + i * Math.PI / 5, rr = i % 2 ? r * .45 : r; pts.push((cx + rr * Math.cos(a)).toFixed(1) + " " + (cy + rr * Math.sin(a)).toFixed(1)); }
  return '<path class="f" d="M' + pts.join(" L") + ' Z"/>';
}
var EXPR = {
  relieved:{o:'<path class="l" d="M26 40 q8 -8 16 0 M58 40 q8 -8 16 0"/>', m:'<path class="l" d="M30 62 q20 16 40 0"/>'},
  sleepy:{o:'<path class="l" d="M27 40 q7 6 14 0 M59 40 q7 6 14 0"/>', m:'<path class="l" d="M44 66 q6 4 12 0"/>'},
  meh:{o:'<path class="l" d="M29 37.5 h10"/><circle class="f" cx="66" cy="38" r="5"/>', m:'<path class="l" d="M34 66 h32"/>'},
  happy:{o:'<circle class="f" cx="34" cy="38" r="4"/><circle class="f" cx="66" cy="38" r="4"/>', m:'<path class="f" d="M24 54 q26 36 52 0 z"/>'},
  smirk:{o:'<circle class="f" cx="34" cy="38" r="4"/><circle class="f" cx="66" cy="38" r="4"/>', m:'<path class="l" d="M32 62 q18 12 38 -6"/>'},
  stars:{o:ster(34, 38, 8) + ster(66, 38, 8), m:'<path class="f" d="M26 62 q24 32 48 0 z"/>'},
  shock:{o:'<circle class="f" cx="34" cy="38" r="6"/><circle class="f" cx="66" cy="38" r="6"/>', m:'<ellipse class="f" cx="50" cy="70" rx="7" ry="10"/>'},
  panic:{o:'<path class="l" d="M25 31 q15 7 15 9 q0 2 -15 9 M75 31 q-15 7 -15 9 q0 2 15 9"/>', m:'<path class="l" d="M26 76 q6 -12 12 0 q6 12 12 0 q6 -12 12 0 q6 12 12 0"/>'}
};
function smiley(expr, leeft){
  var e = EXPR[expr] || EXPR.relieved;
  return '<svg class="smiley" data-expr="' + expr + '"' + (leeft ? " data-leeft" : "") + ' viewBox="8 10 84 84" aria-hidden="true" focusable="false"><g class="eyes"><g class="blink">' + e.o + '</g></g><g class="mouth">' + e.m + "</g></svg>";
}
function zetExpr(svg, expr){
  var e = EXPR[expr]; if (!e || !svg) return;
  svg.querySelector(".blink").innerHTML = e.o; svg.querySelector(".mouth").innerHTML = e.m; svg.dataset.expr = expr;
  if (!rustig && svg.animate) svg.animate([{transform:"scale(.7) rotate(-8deg)"},{transform:"none"}], {duration:520, easing:"cubic-bezier(.34,1.56,.64,1)"});
}
function rnd(a, b){ return a + Math.random() * (b - a); }
function knipper(svg){
  var oog = svg.querySelector(".blink"); if (!oog || !oog.animate) return;
  var d = rnd(170, 230), k = [{transform:"scaleY(1)"},{transform:"scaleY(.08)",offset:.5},{transform:"scaleY(1)"}];
  oog.animate(k, {duration:d, easing:"cubic-bezier(.4,0,.2,1)"});
  if (Math.random() < .18) setTimeout(function(){ oog.animate(k, {duration:d, easing:"cubic-bezier(.4,0,.2,1)"}); }, 280);
}
var BLIK = [[0,0],[-7,0],[6,0],[0,-4],[-5,-3],[5,-3],[0,0]];
function laatLeven(svg){
  if (rustig || !svg.animate) return;
  var ogen = svg.querySelector(".eyes"), mond = svg.querySelector(".mouth"), x = 0, y = 0;
  (function bl(){ setTimeout(function(){ if (!svg.isConnected) return; knipper(svg); bl(); }, rnd(2400, 6500)); })();
  (function kijk(){ setTimeout(function(){
    if (!svg.isConnected) return;
    var b = BLIK[Math.floor(Math.random() * BLIK.length)], af = Math.hypot(b[0] - x, b[1] - y), d = 380 + af * 18;
    ogen.animate([{transform:"translate(" + x + "px," + y + "px)"},{transform:"translate(" + b[0] + "px," + b[1] + "px)"}], {duration:d, easing:"cubic-bezier(.33,0,.15,1)", fill:"forwards"});
    mond.animate([{transform:"translate(" + x*.3 + "px," + y*.3 + "px)"},{transform:"translate(" + b[0]*.3 + "px," + b[1]*.3 + "px)"}], {duration:d, delay:60, easing:"cubic-bezier(.33,0,.15,1)", fill:"forwards"});
    if (af > 9 && Math.random() < .5) setTimeout(function(){ knipper(svg); }, d * .4);
    x = b[0]; y = b[1]; kijk();
  }, rnd(1300, 3800)); })();
}

/* ---------------- Leesgeschiedenis, bewaard, ronde ---------------- */
function gelezen(){ return lees("gelezen", {}); }
function markeerGelezen(key){
  var g = gelezen(); g[key] = Date.now(); bewaar("gelezen", g);
  var r = lees("ronde", []); if (r.indexOf(key) < 0){ r.push(key); bewaar("ronde", r); }
}
function bewaardLijst(){ return lees("bewaard", []); }
function isBewaard(k){ return bewaardLijst().indexOf(k) >= 0; }
function wisselBewaard(k){
  var b = bewaardLijst(), i = b.indexOf(k);
  if (i >= 0) b.splice(i, 1); else b.unshift(k);
  bewaar("bewaard", b); return i < 0;
}

/* Leer me wat nieuws: willekeurig een nog niet geopende pagina, daarna opnieuw */
function leerIetsNieuws(huidig){
  var ronde = lees("ronde", []);
  var pool = LEERBAAR.filter(function(p){ return ronde.indexOf(p.key) < 0 && p.key !== huidig; });
  var opnieuw = false;
  if (!pool.length){
    opnieuw = true; bewaar("ronde", huidig ? [huidig] : []);
    pool = LEERBAAR.filter(function(p){ return p.key !== huidig; });
  }
  var keuze = pool[Math.floor(Math.random() * pool.length)];
  if (opnieuw) toast("Alles gezien. Je begint aan een nieuwe ronde.");
  ga(keuze.href);
}

/* ---------------- Toast ---------------- */
var toastEl = document.getElementById("toast"), toastT;
function toast(t){
  toastEl.textContent = t; toastEl.classList.add("zichtbaar");
  clearTimeout(toastT); toastT = setTimeout(function(){ toastEl.classList.remove("zichtbaar"); }, 2600);
}

/* ---------------- Bouwstenen voor artikelen ---------------- */
function blokken(bl, ctx){
  return (bl || []).map(function(b){
    if (b.t === "p") return "<p>" + md(b.x) + "</p>";
    if (b.t === "lead") return '<p class="lead">' + md(b.x) + "</p>";
    if (b.t === "list") return '<ul class="lijst">' + b.items.map(function(it){ return '<li class="tint"><strong>' + esc(it.b) + "</strong> " + md(it.x) + "</li>"; }).join("") + "</ul>";
    if (b.t === "steps") return '<ol class="stappen">' + b.items.map(function(it, i){ return '<li class="tint"><span class="nr" aria-hidden="true">' + (i + 1) + "</span><span><span class=\"sr-only\">Stap " + (i + 1) + ": </span>" + md(it) + "</span></li>"; }).join("") + "</ol>";
    if (b.t === "cards"){
      var kl = ctx && ctx.kaartKleuren || ["oranje","roze","mint","geel","lila","blauw"];
      var n = b.items.length;
      return '<div class="tegels ' + (n >= 3 ? "drie" : "twee") + '" style="margin-bottom:22px">' + b.items.map(function(it, i){
        return '<article class="tegel vlak k-' + kl[i % kl.length] + '">' + (it.tag ? '<span class="tag">' + esc(it.tag) + "</span>" : "") + "<h3>" + esc(it.kop) + "</h3>" + (it.lead ? '<p class="kaart-lead">' + md(it.lead) + "</p>" : "") + "<p>" + md(it.x) + "</p></article>";
      }).join("") + "</div>";
    }
    return "";
  }).join("");
}
function uitklap(sec){
  return '<details class="uitklap tint"><summary><span>' + esc(sec.kop) + '</span><span class="plus" aria-hidden="true">' + ico("plus") + '</span></summary><div class="inhoud">' + blokken(sec.blocks) + "</div></details>";
}
function openVraag(k, idx, titel){
  var id = "kv-" + idx;
  return '<div class="kv tint" data-open-vraag>' +
    '<div class="kv-kop"><h3 id="' + id + '">' + esc(k.v) + "</h3>" + smiley("meh", true) + "</div>" +
    '<label for="' + id + '-in">Jouw antwoord</label><textarea id="' + id + '-in" placeholder="Schrijf kort wat jij denkt."></textarea>' +
    '<div class="knoppen"><button type="button" class="knop" data-check aria-disabled="true">Bekijk uitleg</button><button type="button" class="knop zacht" data-weetniet>Ik weet het niet</button></div>' +
    '<div class="uitleg tint" role="status" aria-live="polite" aria-atomic="true"></div>' +
    '<button type="button" class="knop zacht" data-opnieuw hidden style="margin-top:12px;width:100%">' + ico("opnieuw") + "Opnieuw</button>" +
    '<template>' + esc(k.a) + "</template></div>";
}
function keuzeVraag(k, idx){
  var id = "kv-" + idx;
  return '<div class="kv tint" data-keuze-vraag><div class="kv-kop"><h3 id="' + id + '">' + esc(k.v) + "</h3>" + smiley("meh", true) + "</div>" +
    '<div class="opties" role="group" aria-labelledby="' + id + '">' + k.opties.map(function(o, i){
      return '<button type="button" class="optie tint" data-juist="' + (o.juist ? "ja" : "nee") + '" data-uitleg="' + esc(o.uitleg) + '"><span class="letter" aria-hidden="true">' + "AB"[i] + '</span><span><span class="sr-only">Antwoord ' + "AB"[i] + ": </span>" + esc(o.x) + "</span></button>";
    }).join("") + "</div>" +
    '<div class="uitleg tint" role="status" aria-live="polite" aria-atomic="true"></div>' +
    '<button type="button" class="knop zacht" data-opnieuw hidden style="margin-top:12px;width:100%">' + ico("opnieuw") + "Opnieuw</button></div>";
}
function bewaarKnop(p){
  var aan = isBewaard(p.key);
  return '<button type="button" class="icoonknop" data-bewaar="' + p.key + '" aria-pressed="' + aan + '" aria-label="Bewaar ' + esc(p.titel) + '">' + ico("bewaar") + "</button>";
}
function topbalk(p){
  return '<div class="topbalk"><button type="button" class="icoonknop" data-terug aria-label="Terug">' + ico("terug") + "</button>" + bewaarKnop(p) + "</div>";
}
function paginaKaart(p, extraSub){
  var g = gelezen()[p.key];
  var sub = extraSub || (p.type === "stof" ? p.vraag : p.type === "begrip" ? p.d : p.x.split(". ")[0] + ".");
  return '<a class="kaart vlak k-' + p.kleur + '" href="' + p.href + '">' + (p.type === "stof" ? smiley(p.smiley) : "") +
    '<span class="meta" style="margin:0">' + TYPENAAM[p.type] + "</span>" +
    '<span class="k-titel">' + esc(p.titel) + '</span><span class="k-sub">' + esc(sub) + "</span>" +
    (g ? '<span class="tag gelezen">Gelezen</span>' : "") + "</a>";
}
function paginaRij(p, sub, metDef){
  var icoon = p.type === "stof" ? smiley(p.smiley) : ico({thema:"thema", groep:"groep", begrip:"begrip"}[p.type]);
  var s = sub !== undefined ? sub : (metDef && p.type === "begrip" ? "" : TYPENAAM[p.type]);
  return '<a class="rij" href="' + p.href + '"><span class="icoontegel vlak k-' + p.kleur + '">' + icoon + '</span><span class="r-tekst"><span class="r-titel">' + esc(p.titel) + "</span>" +
    (metDef && p.type === "begrip" ? '<span class="begrip-def">' + esc(p.d) + "</span>" : "") +
    (s ? '<span class="r-sub">' + s + "</span>" : "") + "</span></a>";
}
function verwant(p){
  var keys = [];
  function add(k){ if (PAG[k] && k !== p.key && keys.indexOf(k) < 0) keys.push(k); }
  (p.rel || []).forEach(function(r){ add(relNaarKey(r)); });
  // andere stoffen die in de tekst genoemd worden
  LC.stoffen.forEach(function(s){
    if (s.key === p.key) return;
    var re = new RegExp("(?<![\\p{L}])" + s.titel + "(?![\\p{L}])", "iu");
    if (re.test(p.tekst)) add(s.key);
  });
  // thema's en stofgroepen die naar deze pagina verwijzen
  LC.themas.concat(LC.groepen).forEach(function(t){ if ((t.rel || []).some(function(r){ return relNaarKey(r) === p.key; })) add(t.key); });
  return keys.map(function(k){ return PAG[k]; });
}

/* ---------------- Weergaven ---------------- */
function vStof(p){
  var h = "";
  var donker = ["kobalt","rood","paars","zwart"].indexOf(p.kleur) >= 0;
  h += '<header class="hero vlak k-' + p.kleur + '"><div class="wrap">' + topbalk(p) +
    '<div class="hero-kop"><p class="meta" style="margin:0">Stof</p>' + smiley(p.smiley, true) + '</div><h1 tabindex="-1">' + esc(p.titel) + "</h1>" +
    (p.labels ? '<ul class="labels" aria-label="Soort stof">' + p.labels.map(function(l){ return '<li class="tint">' + esc(l) + "</li>"; }).join("") + "</ul>" : "") +
    '<p class="vraag">' + esc(p.vraag) + "</p>" +
    (p.introKop ? '<section class="kort" aria-labelledby="kop-kort"><h2 id="kop-kort">' + esc(p.introKop) + "</h2>" + p.intro.map(function(x){ return "<p>" + md(x) + "</p>"; }).join("") + "</section>"
                : p.intro.map(function(x){ return '<p class="intro">' + md(x) + "</p>"; }).join("")) +
    "</div></header>";

  // Kern
  var grid = [], kernH = "";
  var tegelKleur = ["papier","papier","papier"];
  function spoel(){
    if (!grid.length) return;
    kernH += '<div class="tegels ' + (grid.length > 1 ? "twee" : "") + '">' + grid.map(function(s){
      return '<article class="tegel vlak k-papier"><h3>' + esc(s.kop) + "</h3>" + blokken(s.blocks) + "</article>";
    }).join("") + "</div>";
    grid = [];
  }
  p.kern.forEach(function(s){
    if (s.breed){ spoel(); kernH += '<section class="kern-breed" style="margin:8px 0 40px"><h2>' + esc(s.kop) + "</h2>" + blokken(s.blocks) + "</section>"; }
    else grid.push(s);
  });
  spoel();
  h += '<section class="sectie" aria-label="De kern"><div class="wrap"><p class="meta">De kern</p>' + kernH + "</div></section>";

  // Bij mannen en vrouwen
  h += '<section class="sectie vlak k-' + (p.kleur === "mint" ? "blauw" : "mint") + '" aria-labelledby="kop-mv"><div class="wrap"><h2 id="kop-mv">Bij mannen en vrouwen</h2>' +
    blokken(p.mv.blocks, {kaartKleuren:["papier","geel","lila"]}) + (p.mv.details || []).map(uitklap).join("") + "</div></section>";

  // Wist je dit
  var wist = typeof p.wist === "string"
    ? '<div class="stickers een"><div class="sticker enkel vlak k-geel">' + md(p.wist) + "</div></div>"
    : '<div class="stickers">' + p.wist.map(function(w, i){ return '<article class="sticker vlak k-' + ["lila","geel","mint"][i % 3] + '"><h3>' + esc(w.kop) + "</h3><p>" + md(w.x) + "</p></article>"; }).join("") + "</div>";
  h += '<section class="sectie" aria-labelledby="kop-wist"><div class="wrap"><h2 id="kop-wist">Wist je dit?</h2>' + wist + "</div></section>";

  // Kennisvragen
  h += '<section class="sectie vlak k-zwart" aria-labelledby="kop-kv"><div class="wrap smal"><h2 id="kop-kv">' + (p.kennis.length > 1 ? "Kennisvragen" : "Kennisvraag") + "</h2>" +
    p.kennis.map(function(k, i){ return k.opties ? keuzeVraag(k, "k" + i) : openVraag(k, "k" + i); }).join("") + "</div></section>";

  // Verdieping
  h += '<section class="sectie licht" aria-labelledby="kop-verd"><div class="wrap smal"><h2 id="kop-verd">Verdieping</h2>' +
    p.verdieping.map(uitklap).join("") +
    (p.denk ? '<div style="margin-top:28px" class="k-papier"><p class="meta">Denkvraag</p>' + openVraag(p.denk, "d") + "</div>" : "") + "</div></section>";

  // Woordenlijst (eigen bij oxytocine)
  if (p.woordenlijst){
    h += '<section class="sectie" aria-labelledby="kop-wl"><div class="wrap"><h2 id="kop-wl">Woordenlijst</h2><div class="rijen twee">' +
      p.woordenlijst.map(function(r){ var id = r[0] === "neuromodulator" ? "neuromodulatie" : r[0]; var b = PAG["begrip:" + id];
        var inner = '<span class="icoontegel vlak k-zwart">' + ico("begrip") + '</span><span class="r-tekst"><span class="r-titel">' + esc(r[1]) + '</span><span class="begrip-def">' + esc(r[2]) + "</span></span>";
        return b ? '<a class="rij" href="' + b.href + '">' + inner + "</a>" : '<div class="rij">' + inner + "</div>"; }).join("") + "</div></div></section>";
  }

  // Bronnen
  h += '<section class="sectie licht" aria-labelledby="kop-bron"><div class="wrap smal"><h2 id="kop-bron">Bronnen</h2>';
  if (p.genummerd) h += '<ol class="bronnen">' + p.genummerd.map(function(b, i){
      return '<li class="tint" id="bron-' + (i + 1) + '"><span class="b-nr" aria-hidden="true">' + (i + 1) + '</span><a href="' + esc(b[0]) + '" target="_blank" rel="noopener">' + esc(b[1]) + ico("uit") + '<span class="sr-only"> (opent in nieuw tabblad)</span></a></li>'; }).join("") + "</ol>";
  else {
    h += '<ul class="bronnen">' + p.bronnen.map(function(u){ return bronLi(u); }).join("") + "</ul>";
    if (p.verder && p.verder.length) h += '<p class="meta" style="margin-top:28px">Verder lezen</p><ul class="bronnen">' + p.verder.map(function(u){ return bronLi(u); }).join("") + "</ul>";
  }
  h += "</div></section>";
  h += verwantSectie(p);
  return h;
}
function verwantSectie(p){
  var v = verwant(p), h = "";
  var termen = p.termen.filter(function(t){ return PAG["begrip:" + t]; });
  if (!v.length && !termen.length) return "";
  h += '<section class="sectie" aria-labelledby="kop-verw"><div class="wrap">';
  if (v.length) h += '<h2 id="kop-verw">Verwant</h2><div class="rijen twee">' + v.map(function(x){ return paginaRij(x, x.type === "stof" ? esc(x.vraag) : TYPENAAM[x.type]); }).join("") + "</div>";
  if (termen.length) h += '<p class="meta" style="margin-top:34px"' + (v.length ? "" : ' id="kop-verw"') + '>Begrippen in dit artikel</p><div class="chips">' + termen.map(function(t){ var b = PAG["begrip:" + t]; return '<a class="chip" href="' + b.href + '">' + esc(b.titel) + "</a>"; }).join("") + "</div>";
  return h + "</div></section>";
}
function vKort(p){ // thema of stofgroep
  var h = '<header class="hero vlak k-' + p.kleur + '"><div class="wrap smal">' + topbalk(p) +
    '<p class="meta">' + TYPENAAM[p.type] + '</p><h1 tabindex="-1" style="font-size:clamp(52px,13vw,120px)">' + esc(p.titel) + "</h1>" +
    "</div></header>";
  h += '<section class="sectie licht"><div class="wrap smal"><p class="lead" style="font-weight:700">' + md(p.x) + "</p></div></section>";
  h += verwantSectie(p);
  var bron = p.type === "thema" ? LC.themaBron : p.bron;
  if (bron) h += '<section class="sectie licht" aria-labelledby="kop-bron"><div class="wrap smal"><h2 id="kop-bron">' + (p.type === "thema" ? "Basisbron" : "Bron") + '</h2><ul class="bronnen">' + bronLi(bron) + "</ul></div></section>";
  return h;
}
function vBegrip(p){
  var h = '<header class="hero vlak k-zwart"><div class="wrap smal">' + topbalk(p) +
    '<p class="meta">Begrippenkaart</p><h1 tabindex="-1" style="font-size:clamp(48px,13vw,120px)">' + esc(p.titel) + "</h1>" +
    '<p class="vraag" style="max-width:34ch">' + esc(p.d) + "</p></div></header>";
  var in_ = pagsMetTerm(p.id);
  var rel = LC.themas.concat(LC.groepen).filter(function(t){ return (t.rel || []).indexOf("b:" + p.id) >= 0 && in_.indexOf(t) < 0; });
  in_ = in_.concat(rel);
  h += '<section class="sectie"><div class="wrap smal"><h2>Komt voor in</h2>' +
    (in_.length ? '<div class="rijen">' + in_.map(function(x){ return paginaRij(x); }).join("") + "</div>"
                : '<p class="lead" style="font-weight:700">Dit begrip helpt bij het lezen van alle artikelen. Het staat nog niet letterlijk in een tekst.</p>') + "</div></section>";
  var anders = LC.begrippen.filter(function(b){ return b.id !== p.id; });
  h += '<section class="sectie licht"><div class="wrap smal"><p class="meta">Andere begrippen</p><div class="chips">' + anders.map(function(b){ return '<a class="chip" href="' + b.href + '">' + esc(b.titel) + "</a>"; }).join("") + "</div></div></section>";
  return h;
}
function vStart(){
  var g = gelezen(), ronde = lees("ronde", []);
  var nieuw = LEERBAAR.filter(function(p){ return ronde.indexOf(p.key) < 0; }).length;
  var recent = Object.keys(g).filter(function(k){ return PAG[k]; }).sort(function(a, b){ return g[b] - g[a]; }).slice(0, 4);
  var h = '<header class="start-hero vlak k-kobalt"><div class="wrap">' +
    '<div class="start-top"><p class="meta" style="margin-top:6px">Encyclopedie van je lijf</p>' + smiley("relieved", true) + "</div>" +
    '<h1 tabindex="-1">Lichaams&shy;chemie</h1>' +
    '<button type="button" class="leerknop" data-leer><span><span class="lk-tekst">Leer me wat nieuws</span><span class="lk-sub">' + (nieuw ? "Nog " + nieuw + " van " + LEERBAAR.length + " ongeopend" : "Alles gezien, start een nieuwe ronde") + "</span></span>" + smiley("stars") + "</button>" +
    '<a class="zoekveld-knop" href="#/zoek">' + ico("zoek") + "Zoek op stof, begrip of woord</a>" +
    "</div></header>";
  if (recent.length) h += '<section class="sectie" aria-labelledby="kop-recent"><div class="wrap"><h2 id="kop-recent">Verder lezen</h2><div class="rijen twee">' + recent.map(function(k){ return paginaRij(PAG[k]); }).join("") + "</div></div></section>";
  h += '<section class="sectie licht" aria-labelledby="kop-stoffen"><div class="wrap"><h2 id="kop-stoffen">Stoffen</h2><div class="kaarten vier">' + LC.stoffen.map(function(s){ return paginaKaart(s); }).join("") + "</div></div></section>";
  h += '<section class="sectie" aria-labelledby="kop-themas"><div class="wrap"><h2 id="kop-themas">Themalessen</h2><div class="rijen twee">' + LC.themas.map(function(t){ return paginaRij(t, g[t.key] ? "Gelezen" : "Themales"); }).join("") + "</div></div></section>";
  h += '<section class="sectie licht" aria-labelledby="kop-groepen"><div class="wrap"><h2 id="kop-groepen">Stofgroepen</h2><div class="rijen twee">' + LC.groepen.map(function(t){ return paginaRij(t, g[t.key] ? "Gelezen" : "Om te bestuderen"); }).join("") + "</div></div></section>";
  h += '<section class="sectie" aria-labelledby="kop-begr"><div class="wrap"><h2 id="kop-begr">Begrippen</h2><div class="chips">' + LC.begrippen.map(function(b){ return '<a class="chip" href="' + b.href + '">' + esc(b.titel) + "</a>"; }).join("") + "</div></div></section>";
  return h + '<div class="wrap voet">Lichaamschemie v1</div>';
}
var indexFilter = "alles";
function vIndex(){
  var h = '<header class="start-hero vlak k-geel"><div class="wrap"><p class="meta">Alles van A tot Z</p><h1 tabindex="-1">Index</h1></div></header>';
  h += '<section class="sectie licht"><div class="wrap smal"><div class="segment" role="group" aria-label="Toon">' +
    ["alles","stof","thema","groep","begrip"].map(function(f){ return '<button type="button" data-filter="' + f + '" aria-pressed="' + (indexFilter === f) + '">' + (f === "alles" ? "Alles" : TYPEMV[f]) + "</button>"; }).join("") + "</div>";
  var items = LIJST.filter(function(p){ return indexFilter === "alles" || p.type === indexFilter; }).slice().sort(function(a, b){ return norm(a.titel).localeCompare(norm(b.titel), "nl"); });
  var groepen = {};
  items.forEach(function(p){ var l = norm(p.titel).charAt(0).toUpperCase(); (groepen[l] = groepen[l] || []).push(p); });
  var letters = Object.keys(groepen);
  h += '<nav class="letters" aria-label="Spring naar letter">' + letters.map(function(l){ return '<button type="button" data-letter="' + l + '" aria-label="Letter ' + l + '">' + l + "</button>"; }).join("") + "</nav>";
  h += letters.map(function(l){ return '<section class="letterblok" id="letter-' + l + '" aria-labelledby="lt-' + l + '"><h2 class="letter" id="lt-' + l + '" tabindex="-1">' + l + '</h2><div class="rijen">' + groepen[l].map(function(p){ return paginaRij(p, undefined, true); }).join("") + "</div></section>"; }).join("");
  return h + "</div></section>";
}
function vZoek(q){
  var h = '<header class="start-hero vlak k-lila"><div class="wrap smal"><p class="meta">Titel, synoniem of tekst</p><h1 tabindex="-1">Zoeken</h1>' +
    '<div class="zoekbalk" style="margin-top:24px" role="search">' + ico("zoek") + '<label for="zoek" class="sr-only">Zoek</label><input id="zoek" type="search" autocomplete="off" spellcheck="false" placeholder="Bijvoorbeeld epinefrine of receptor" value="' + esc(q || "") + '"></div></div></header>';
  h += '<section class="sectie licht"><div class="wrap smal"><div id="resultaten" aria-live="polite"></div></div></section>';
  return h;
}
function zoek(q){
  var nq = norm(q).trim(); if (!nq) return [];
  var woorden = nq.split(/\s+/);
  return LIJST.map(function(p){
    var t = norm(p.titel), syn = (p.syn || []).map(norm), tx = norm(p.tekst), score = 0, hitSyn = null;
    var alle = woorden.every(function(w){ return t.indexOf(w) >= 0 || syn.some(function(s){ return s.indexOf(w) >= 0; }) || tx.indexOf(w) >= 0; });
    if (!alle) return null;
    woorden.forEach(function(w){
      if (t === w) score += 100; else if (t.indexOf(w) === 0) score += 60; else if (t.indexOf(w) >= 0) score += 40;
      syn.forEach(function(s, i){ if (s.indexOf(w) >= 0){ score += 35; hitSyn = p.syn[i]; } });
      var n = tx.split(w).length - 1; score += Math.min(n, 8) * 2;
    });
    return {p:p, score:score, syn:hitSyn};
  }).filter(Boolean).sort(function(a, b){ return b.score - a.score || a.p.titel.localeCompare(b.p.titel); });
}
function fragment(p, q){
  var w = norm(q).trim().split(/\s+/)[0], tx = p.tekst, ntx = norm(tx), i = ntx.indexOf(w);
  if (i < 0) return esc(tx.slice(0, 120)) + "…";
  var s = Math.max(0, i - 50), e = Math.min(tx.length, i + w.length + 70);
  return (s > 0 ? "…" : "") + esc(tx.slice(s, i)) + "<mark>" + esc(tx.slice(i, i + w.length)) + "</mark>" + esc(tx.slice(i + w.length, e)) + (e < tx.length ? "…" : "");
}
function toonResultaten(q){
  var box = document.getElementById("resultaten"); if (!box) return;
  if (!q.trim()){
    box.innerHTML = '<p class="meta">Probeer bijvoorbeeld</p><div class="chips">' + ["epinefrine","cafeïne","receptor","bijnier","slaap","calcium"].map(function(s){ return '<button type="button" class="chip" style="border:0;cursor:pointer" data-probeer="' + s + '">' + s + "</button>"; }).join("") + "</div>";
    return;
  }
  var r = zoek(q);
  if (!r.length){ box.innerHTML = '<div class="leeg vlak k-roze">' + smiley("meh") + '<p class="lead" style="margin:0">Niets gevonden voor “' + esc(q) + '”. Probeer een ander woord.</p></div>'; return; }
  box.innerHTML = '<p class="resultaat-aantal">' + r.length + (r.length === 1 ? " resultaat" : " resultaten") + '</p><div class="rijen">' + r.slice(0, 40).map(function(x){
    var sub = TYPENAAM[x.p.type] + (x.syn ? ", ook: <mark>" + esc(x.syn) + "</mark>" : "") + "<br>" + fragment(x.p, q);
    return paginaRij(x.p, sub);
  }).join("") + "</div>";
}
function vBewaard(){
  var b = bewaardLijst().filter(function(k){ return PAG[k]; }), g = gelezen();
  var hist = Object.keys(g).filter(function(k){ return PAG[k]; }).sort(function(a, c){ return g[c] - g[a]; });
  var h = '<header class="start-hero vlak k-mint"><div class="wrap smal"><p class="meta">Op dit apparaat</p><h1 tabindex="-1">Bewaard</h1></div></header>';
  h += '<section class="sectie licht"><div class="wrap smal">' +
    (b.length ? '<div class="rijen">' + b.map(function(k){ return paginaRij(PAG[k]); }).join("") + "</div>"
              : '<div class="leeg vlak k-geel">' + smiley("smirk", true) + '<p class="lead" style="margin:0">Nog niets bewaard. Tik in een artikel op het bladwijzertje.</p></div>') + "</div></section>";
  h += '<section class="sectie" aria-labelledby="kop-hist"><div class="wrap smal"><h2 id="kop-hist">Leesgeschiedenis</h2>' +
    (hist.length ? '<div class="rijen">' + hist.map(function(k){ return paginaRij(PAG[k], TYPENAAM[PAG[k].type] + ", " + wanneer(g[k])); }).join("") + "</div>" +
       '<button type="button" class="knop zacht" data-wis style="margin-top:20px;width:100%;--bg:var(--pagina)">Geschiedenis wissen</button>'
     : '<p class="lead" style="font-weight:700">Je hebt nog niets gelezen.</p>') + "</div></section>";
  return h;
}
function wanneer(t){
  var d = (Date.now() - t) / 1000;
  if (d < 60) return "net";
  if (d < 3600) return Math.floor(d / 60) + " min geleden";
  if (d < 86400) return Math.floor(d / 3600) + " uur geleden";
  var dg = Math.floor(d / 86400); return dg === 1 ? "gisteren" : dg + " dagen geleden";
}

/* ---------------- Interactie na het tekenen ---------------- */
var huidig = null;
function koppel(p){
  view.querySelectorAll("svg.smiley[data-leeft]").forEach(laatLeven);
  // begrippen in lopende tekst: eerste keer per pagina aantikbaar
  if (p && p.type !== "begrip"){
    var gebruikt = {};
    var doelen = view.querySelectorAll(".hero .intro, .kort p, .tegel p, .lijst li, .stappen li, .sticker, .uitklap .inhoud p, .lead, .kern-breed p");
    doelen.forEach(function(el){ linkTermen(el, gebruikt, p); });
  }
}
function linkTermen(el, gebruikt, p){
  var walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT, {acceptNode:function(n){
    var a = n.parentElement.closest("button,a,h1,h2,h3,summary,.refs,.sr-only,template");
    return a ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT;
  }});
  var nodes = []; while (walker.nextNode()) nodes.push(walker.currentNode);
  nodes.forEach(function(node){
    var rest = node;
    while (rest){
      var best = null;
      TERMEN.forEach(function(t){
        if (gebruikt[t.id] || !termInfo(t.id, p)) return;
        var m = t.re.exec(rest.nodeValue);
        if (m && (!best || m.index < best.m.index)) best = {t:t, m:m};
      });
      if (!best) break;
      gebruikt[best.t.id] = true;
      var na = rest.splitText(best.m.index);
      var verder = na.splitText(best.m[0].length);
      var btn = document.createElement("button");
      btn.type = "button"; btn.className = "term"; btn.dataset.term = best.t.id;
      btn.setAttribute("aria-expanded", "false"); btn.setAttribute("aria-controls", "termkaart");
      btn.textContent = na.nodeValue;
      na.parentNode.replaceChild(btn, na);
      rest = verder;
    }
  });
}

/* Begrippenkaartje op de plek zelf */
var kaart = document.createElement("span");
kaart.className = "termkaart"; kaart.id = "termkaart"; kaart.setAttribute("role", "note"); kaart.hidden = true;
var actief = null;
function plaats(){
  if (!actief || kaart.hidden) return;
  var host = kaart.offsetParent || document.body, hr = host.getBoundingClientRect();
  var rs = actief.getClientRects(), r = rs[rs.length - 1] || actief.getBoundingClientRect();
  var vw = document.documentElement.clientWidth, w = kaart.offsetWidth;
  var links = Math.min(Math.max(16, r.left), vw - 16 - w);
  kaart.style.left = (links - hr.left) + "px"; kaart.style.top = (r.bottom - hr.top + 10) + "px";
  kaart.style.setProperty("--ox", Math.max(16, Math.min(w - 16, r.left + r.width / 2 - links)) + "px");
}
function sluitKaart(focus){
  if (!actief) return;
  var k = actief; k.setAttribute("aria-expanded", "false"); kaart.hidden = true; actief = null;
  if (focus) k.focus();
}
function openKaart(btn){
  var id = btn.dataset.term, info = termInfo(id, huidig);
  if (!info) return;
  if (actief && actief !== btn) actief.setAttribute("aria-expanded", "false");
  actief = btn;
  var ook = pagsMetTerm(id, huidig && huidig.key).slice(0, 3);
  kaart.innerHTML = '<span class="tk-kop"><span class="tk-titel">' + esc(info.titel) + '</span><button type="button" class="icoonknop" data-sluit aria-label="Uitleg sluiten">' + ico("x") + '</button></span><span class="tk-tekst">' + esc(info.d) + "</span>" +
    '<span class="tk-links">' + (info.kaart ? '<a class="hoofd" href="' + info.kaart + '">Begrippenkaart</a>' : "") + ook.map(function(p){ return '<a href="' + p.href + '">' + esc(p.titel) + "</a>"; }).join("") + "</span>";
  btn.insertAdjacentElement("afterend", kaart);
  kaart.hidden = false; kaart.style.animation = "none"; void kaart.offsetWidth; kaart.style.animation = "";
  btn.setAttribute("aria-expanded", "true");
  plaats();
}
window.addEventListener("resize", plaats);

/* Kennisvragen */
function meld(box, oordeel, tekst, extra){
  box.textContent = "";
  setTimeout(function(){
    box.innerHTML = '<span class="oordeel"></span><span class="tekst"></span>' + (extra ? '<span class="jouw" style="display:block"></span>' : "");
    box.querySelector(".oordeel").textContent = oordeel; box.querySelector(".tekst").textContent = tekst;
    if (extra) box.querySelector(".jouw").textContent = extra;
  }, 50);
}

/* ---------------- Klikken en toetsen ---------------- */
var pushNav = false;
document.addEventListener("click", function(e){
  var t = e.target;
  var a = t.closest("a[href^='#/']");
  if (a){ pushNav = true; sluitKaart(false); return; }
  var term = t.closest(".term");
  if (term){ e.stopPropagation(); if (actief === term) sluitKaart(false); else openKaart(term); return; }
  if (t.closest("[data-sluit]")){ sluitKaart(true); return; }
  if (!t.closest(".termkaart")) sluitKaart(false);

  var ref = t.closest(".ref");
  if (ref){
    var doel = document.getElementById("bron-" + ref.dataset.bron);
    if (doel){ doel.scrollIntoView({behavior:rustig ? "auto" : "smooth", block:"center"}); doel.classList.remove("oplichten"); void doel.offsetWidth; doel.classList.add("oplichten");
      setTimeout(function(){ doel.classList.remove("oplichten"); }, 2200); var l = doel.querySelector("a"); if (l) setTimeout(function(){ l.focus({preventScroll:true}); }, 300); }
    return;
  }
  if (t.closest("[data-leer]")){ leerIetsNieuws(huidig && huidig.key); return; }
  if (t.closest("[data-terug]")){ terug(); return; }
  var bw = t.closest("[data-bewaar]");
  if (bw){ var aan = wisselBewaard(bw.dataset.bewaar); bw.setAttribute("aria-pressed", aan); toast(aan ? "Bewaard" : "Niet meer bewaard"); return; }
  var f = t.closest("[data-filter]");
  if (f){ indexFilter = f.dataset.filter; render(true); var nf = view.querySelector('[data-filter="' + indexFilter + '"]'); if (nf) nf.focus(); return; }
  var lt = t.closest("[data-letter]");
  if (lt){ var blk = document.getElementById("letter-" + lt.dataset.letter); if (blk){ blk.scrollIntoView({behavior:rustig ? "auto" : "smooth"}); blk.querySelector(".letter").focus({preventScroll:true}); } return; }
  var pr = t.closest("[data-probeer]");
  if (pr){ var inp = document.getElementById("zoek"); inp.value = pr.dataset.probeer; inp.dispatchEvent(new Event("input")); inp.focus(); return; }
  var wis = t.closest("[data-wis]");
  if (wis){
    if (wis.dataset.zeker){ bewaar("gelezen", {}); bewaar("ronde", []); toast("Leesgeschiedenis gewist"); render(true); }
    else { wis.dataset.zeker = "1"; wis.textContent = "Tik nog een keer om te wissen"; setTimeout(function(){ if (wis.isConnected){ delete wis.dataset.zeker; wis.textContent = "Geschiedenis wissen"; } }, 4000); }
    return;
  }
  // open kennisvraag
  var ov = t.closest("[data-open-vraag]");
  if (ov && (t.closest("[data-check]") || t.closest("[data-weetniet]") || t.closest("[data-opnieuw]"))){
    var ta = ov.querySelector("textarea"), box = ov.querySelector(".uitleg"), op = ov.querySelector("[data-opnieuw]"), sm = ov.querySelector(".smiley");
    var antw = ov.querySelector("template").innerHTML.replace(/&amp;/g,"&").replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&quot;/g,'"');
    if (t.closest("[data-opnieuw]")){ box.textContent = ""; ta.value = ""; ta.disabled = false; op.hidden = true; ov.querySelector("[data-check]").setAttribute("aria-disabled", "true"); ov.querySelector("[data-weetniet]").hidden = false; ov.querySelector("[data-check]").hidden = false; zetExpr(sm, "meh"); ta.focus(); return; }
    var weetniet = !!t.closest("[data-weetniet]");
    if (!weetniet && !ta.value.trim()){ toast("Schrijf eerst kort je antwoord"); ta.focus(); return; }
    meld(box, "Uitleg", antw, weetniet ? "" : "Jij schreef: " + ta.value.trim());
    ta.disabled = true; op.hidden = false; ov.querySelector("[data-check]").hidden = true; ov.querySelector("[data-weetniet]").hidden = true;
    zetExpr(sm, weetniet ? "smirk" : "happy");
    return;
  }
  // meerkeuzevraag
  var optie = t.closest(".optie");
  if (optie){
    var kv = optie.closest("[data-keuze-vraag]");
    if (kv.dataset.klaar || optie.getAttribute("aria-disabled") === "true") return;
    var goed = optie.dataset.juist === "ja", alle = kv.querySelectorAll(".optie");
    alle.forEach(function(o){ o.classList.remove("is-fout"); });
    if (goed){ kv.dataset.klaar = "1"; optie.classList.add("is-juist"); alle.forEach(function(o){ o.setAttribute("aria-disabled", "true"); }); zetExpr(kv.querySelector(".smiley"), "happy"); }
    else { optie.classList.add("is-fout"); zetExpr(kv.querySelector(".smiley"), "shock"); }
    meld(kv.querySelector(".uitleg"), goed ? "Juist." : "Probeer opnieuw.", optie.dataset.uitleg);
    kv.querySelector("[data-opnieuw]").hidden = false;
    return;
  }
  var opn = t.closest("[data-keuze-vraag] [data-opnieuw]");
  if (opn){ var kq = opn.closest("[data-keuze-vraag]"); delete kq.dataset.klaar; kq.querySelectorAll(".optie").forEach(function(o){ o.classList.remove("is-juist","is-fout"); o.removeAttribute("aria-disabled"); });
    kq.querySelector(".uitleg").textContent = ""; opn.hidden = true; zetExpr(kq.querySelector(".smiley"), "meh"); kq.querySelector(".optie").focus(); }
});
document.addEventListener("input", function(e){
  if (e.target.id === "zoek"){
    var q = e.target.value;
    history.replaceState(null, "", "#/zoek" + (q ? "?q=" + encodeURIComponent(q) : ""));
    toonResultaten(q);
  }
  if (e.target.matches("[data-open-vraag] textarea")){
    e.target.closest("[data-open-vraag]").querySelector("[data-check]").setAttribute("aria-disabled", e.target.value.trim() ? "false" : "true");
  }
});
document.addEventListener("keydown", function(e){
  if (e.key === "Escape" && actief){ e.preventDefault(); sluitKaart(true); return; }
  var typt = /INPUT|TEXTAREA/.test(document.activeElement.tagName);
  if (e.key === "/" && !typt){ e.preventDefault(); pushNav = true; ga("#/zoek"); }
});

/* ---------------- Router ---------------- */
var scrollPos = {}, vorigeHash = null, diepte = 0;
function ga(h){ pushNav = true; location.hash = h; }
function terug(){ if (diepte > 0) history.back(); else ga("#/"); }
function parse(){
  var h = location.hash || "#/", q = "";
  var qi = h.indexOf("?"); if (qi >= 0){ q = decodeURIComponent(h.slice(qi + 3)); h = h.slice(0, qi); }
  var d = h.replace(/^#\/?/, "").split("/");
  return {deel:d[0] || "", id:d[1] || "", q:q};
}
function render(behoudScroll){
  sluitKaart(false);
  var r = parse(), p = null, html, titel = "Lichaamschemie", tab = "ontdek";
  if (r.deel === "stof" || r.deel === "thema" || r.deel === "groep" || r.deel === "begrip"){
    p = PAG[r.deel + ":" + r.id];
  }
  if (p){
    html = p.type === "stof" ? vStof(p) : p.type === "begrip" ? vBegrip(p) : vKort(p);
    titel = p.titel + ", Lichaamschemie"; tab = p.type === "begrip" ? "index" : "ontdek";
    if (p.type !== "begrip") markeerGelezen(p.key);
  } else if (r.deel === "index"){ html = vIndex(); titel = "Index, Lichaamschemie"; tab = "index"; }
  else if (r.deel === "zoek"){ html = vZoek(r.q); titel = "Zoeken, Lichaamschemie"; tab = "zoek"; }
  else if (r.deel === "bewaard"){ html = vBewaard(); titel = "Bewaard, Lichaamschemie"; tab = "bewaard"; }
  else { html = vStart(); }
  huidig = p;
  document.title = titel;
  var y = window.scrollY;
  view.innerHTML = html;
  view.style.animation = "none"; void view.offsetWidth; view.style.animation = "";
  document.querySelectorAll(".tabbalk a").forEach(function(a){ if (a.dataset.tab === tab) a.setAttribute("aria-current", "page"); else a.removeAttribute("aria-current"); });
  koppel(p);
  if (r.deel === "zoek"){ toonResultaten(r.q); }
  return y;
}
function opHash(){
  var nieuw = location.hash || "#/";
  if (vorigeHash !== null) scrollPos[vorigeHash] = window.scrollY;
  var wasPush = pushNav; pushNav = false;
  if (wasPush) diepte++; else diepte = Math.max(0, diepte - 1);
  render();
  var basis = nieuw.split("?")[0];
  if (!wasPush && scrollPos[basis] !== undefined) window.scrollTo(0, scrollPos[basis]);
  else window.scrollTo(0, 0);
  vorigeHash = basis;
  // focus naar de titel, of naar het zoekveld
  var zoekIn = document.getElementById("zoek");
  if (zoekIn && wasPush){ zoekIn.focus(); var v = zoekIn.value; zoekIn.value = ""; zoekIn.value = v; }
  else { var h1 = view.querySelector("h1"); if (h1 && vorigeHash !== null && document.activeElement !== h1) h1.focus({preventScroll:true}); }
}
window.addEventListener("hashchange", opHash);
var eerste = location.hash || "#/";
vorigeHash = null; render(); vorigeHash = eerste.split("?")[0];

/* ---------------- Offline en updates (alleen via http/https) ---------------- */
if ("serviceWorker" in navigator && /^https?:$/.test(location.protocol)){
  var updateEl = document.getElementById("update");
  function toonUpdate(reg){
    if (!updateEl) return;
    updateEl.hidden = false;
    updateEl.querySelector("button").onclick = function(){ if (reg.waiting) reg.waiting.postMessage("skipWaiting"); };
  }
  navigator.serviceWorker.register("sw.js").then(function(reg){
    if (reg.waiting && navigator.serviceWorker.controller) toonUpdate(reg);
    reg.addEventListener("updatefound", function(){
      var nw = reg.installing; if (!nw) return;
      nw.addEventListener("statechange", function(){ if (nw.state === "installed" && navigator.serviceWorker.controller) toonUpdate(reg); });
    });
  }).catch(function(){});
  var herladen = false;
  navigator.serviceWorker.addEventListener("controllerchange", function(){ if (herladen) return; herladen = true; location.reload(); });
}
})();
