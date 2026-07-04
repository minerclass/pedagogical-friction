/* =========================================================================
   Pedagogical Friction, Immersive Companion, interactions
   Vanilla JS, no dependencies. All content is authored from the proposal
   (Chapters 1 to 3) and follows Miner (2026a) terminology.
   ========================================================================= */
(function () {
  "use strict";

  var STAGES = [
    {
      era: "Pre-literate",
      name: "Primary Orality",
      body: "Without writing, knowledge must be preserved by repetition, so thought leans on rhythm, formula, and proverb. It is additive, agonistic, and participatory, lived in the existential present of voice, gesture, and shared presence.",
      note: "A complete cognitive ecology with its own logic, not a deficit stage."
    },
    {
      era: "Manuscript to print",
      name: "Literacy",
      body: "Writing externalizes memory and frees thought from constant repetition. It enables analytical detachment, abstraction, and the objectification of knowledge in texts that can be examined apart from any speaker.",
      note: "By separating the knower from the known, writing opens the psyche to articulate introspection, at the cost of oral immediacy."
    },
    {
      era: "Broadcast era",
      name: "Secondary Orality",
      body: "Electronic broadcast media retrieve immediacy, participation, and communal experience, but within a literate framework of scripts, schedules, and institutions. A renewed participatory mystique forms in mass audiences.",
      note: "Each medium creates its own epistemology. A teacher could still assume students shared an informational baseline."
    },
    {
      era: "Mid-2000s to early 2020s",
      name: "Algorithmic Secondary Orality",
      body: "Humans still create symbolic content, but algorithms increasingly decide what reaches which consciousness. The feed replaces the schedule; two people opening the same app meet different content tuned to prior behavior.",
      note: "The first extension. The media environment transforms while the human origin of symbols stays intact."
    },
    {
      era: "Generative-AI present",
      name: "Tertiary Algorithmicity",
      body: "Algorithmic systems now both curate and generate symbolic content, rendering human authorship optional at scale. The human role shifts from producer to prompt initiator, editor, and validator.",
      note: "The decisive rupture. If stage IV changed who sees human expression, this changes whether human expression is needed at all."
    }
  ];

  var DIMS = {
    noetic: {
      color: "var(--noetic)",
      tag: "The Head",
      name: "Noetic friction",
      counter: "Counterpart to noetic displacement",
      body: "The internal cognitive resistance of turning information into understanding: comprehending a hard text, synthesizing competing sources, building an argument from evidence, and revising one's own thinking when it proves inadequate.",
      practices: ["generation before solution", "retrieval practice", "annotated reading", "slow writing", "argument mapping", "reflection before AI use"]
    },
    rhetorical: {
      color: "var(--rhetorical)",
      tag: "The Room",
      name: "Rhetorical friction",
      counter: "Counterpart to rhetorical saturation",
      body: "The social and dialogic struggle of articulating, defending, and revising claims in response to unpredictable human interlocutors. Genuine disagreement and misunderstanding force cognitive adjustment that prepared or simulated dialogue cannot.",
      practices: ["seminars", "peer review", "oral explanation", "conferences", "debate", "critique protocols", "authentic audiences"]
    },
    existential: {
      color: "var(--existential)",
      tag: "The World",
      name: "Existential friction",
      counter: "Counterpart to existential abstraction",
      body: "The experience of being held personally accountable for claims in physical and social space, including the vulnerability of presenting one's own thinking to others who can respond to the person, not the text alone. Ownership is deeper than procedural submission.",
      practices: ["oral defenses", "authorship statements", "process memos", "place-based inquiry"]
    },
    infrastructural: {
      color: "var(--infrastructural)",
      tag: "The System",
      name: "Infrastructural friction",
      counter: "The condition of possibility for the other three",
      body: "The structural and policy condition that makes the learner-facing dimensions sustainable or impossible: AI policy, assessment expectations, professional learning, privacy governance, approved-tool ecosystems, leadership language, and schedules. When the system names productive struggle as a protected value, friction-preserving pedagogy can be designed with support rather than carried alone.",
      practices: ["AI policy", "assessment latitude", "professional learning", "leadership language", "governance", "protected time"]
    }
  };

  var CARDS = [
    { n: 1, v: "Teacher", t: "Students use AI to brainstorm possible claims, then draft the essay without AI.", note: "The drafting, the noetic core, stays with the student; AI touches only idea generation. The framework asks whether generating claims was itself the skill the task meant to build." },
    { n: 2, v: "Teacher", t: "A student submits an AI-assisted essay and then defends the thesis in a one-on-one conference.", note: "The oral defense recovers rhetorical and existential friction the artifact alone no longer guarantees. Understanding is tested at the point of accountability." },
    { n: 3, v: "Teacher", t: "A multilingual learner uses AI translation to understand the assignment directions before starting.", note: "Likely reduces exclusionary friction by removing a language barrier to access, without removing the learning goal, as long as the tool stays with directions rather than the disciplinary work." },
    { n: 4, v: "Teacher", t: "AI summarizes a source for the class before students read the original text.", note: "Convenient, yet it can pre-empt the interpretive labor of first contact with a text. Noetic friction may be removed before it has a chance to do its work." },
    { n: 5, v: "Teacher", t: "A school blocks all AI tools because district guidance is unclear.", note: "An infrastructural reaction to opacity. It may protect struggle or impose a blunt, exclusionary barrier; the framework asks whether the block preserves learning or only manages risk." },
    { n: 6, v: "Teacher", t: "A teacher uses AI to generate first-draft feedback on every student essay.", note: "This shifts the teacher's labor, not the student's. The question is whether feedback still carries a human reader's judgment that students can be accountable to." },
    { n: 7, v: "Student", t: "A student asks AI to explain a concept they do not understand, then completes the problem set alone.", note: "AI acts as a tutor that scaffolds understanding while the generative work of the problem set stays with the student. Often productive, unless the explanation quietly becomes the answer." },
    { n: 8, v: "Student", t: "A student has AI write the introduction, then writes the rest of the paper themselves.", note: "A partial substitution. The framework asks whether the introduction was where the thinking lived or a low-stakes on-ramp into the student's own work." },
    { n: 9, v: "Student", t: "A student with a writing-related disability uses AI to turn their own notes into an outline.", note: "The ideas originate with the student; AI handles a transcription and structuring barrier. This reads as accommodation reducing exclusionary friction rather than bypass." },
    { n: 10, v: "Student", t: "A student uses AI to generate counterarguments to stress-test their own thesis before a debate.", note: "Here AI raises rhetorical friction instead of lowering it, forcing the student to defend against stronger opposition. Struggle is added, not removed." }
  ];

  var FRICTION_LEVELS = ["Low", "Medium", "High"];
  var LEGIT_LEVELS = ["Not legitimate", "Contested", "Legitimate"];

  function $(sel, ctx) { return (ctx || document).querySelector(sel); }
  function $all(sel, ctx) { return Array.prototype.slice.call((ctx || document).querySelectorAll(sel)); }
  function el(tag, cls) { var e = document.createElement(tag); if (cls) e.className = cls; return e; }

  function initDefenseShortcuts() {
    var main = document.querySelector("main");
    if (!main || document.getElementById("defense-shortcuts")) return;

    var panel = document.createElement("section");
    panel.id = "defense-shortcuts";
    panel.className = "band";
    panel.setAttribute("aria-label", "Defense prep shortcuts");
    panel.style.background = "linear-gradient(135deg, rgba(181,133,42,0.16), rgba(29,78,107,0.08))";
    panel.style.borderBottom = "1px solid rgba(40, 49, 59, 0.12)";
    panel.innerHTML =
      '<div class="wrap">' +
        '<span class="section-tag">Defense prep shortcuts</span>' +
        '<h2 style="margin-bottom:0.7rem;">Start here for the defense additions</h2>' +
        '<p class="lede" style="max-width:76ch; margin-bottom:1.4rem;">Use these direct links to reach the two new rehearsal sections without hunting through the full scrollytelling page.</p>' +
        '<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:1rem;">' +
          '<a class="eco" href="#chapter-two" style="background:#fff;">' +
            '<div class="eco-top"><span class="eco-ico"><i class="fa-solid fa-diagram-project"></i></span><h3>Chapter 2: Stiegler and the intellectual genealogy</h3></div>' +
            '<span class="eco-kind">Defense walk</span>' +
            '<p>Go to the Stiegler connection, adjacent theorists, and likely committee questions about Ong, Stiegler, Hayles, Kittler, and technological determinism.</p>' +
          '</a>' +
          '<a class="eco" href="#defense" style="background:#fff;">' +
            '<div class="eco-top"><span class="eco-ico"><i class="fa-solid fa-chalkboard-user"></i></span><h3>Chapter 3: Merriam methodology defense</h3></div>' +
            '<span class="eco-kind">Defense walk</span>' +
            '<p>Go to the Merriam, Stake, and Yin comparison; case boundaries; mixed-methods alignment; and disconfirmation safeguards.</p>' +
          '</a>' +
        '</div>' +
      '</div>';

    main.insertBefore(panel, main.firstChild);
  }

  function initProgressAndNav() {
    var bar = $("#progress-bar");
    var links = $all("#nav-links a");
    var sections = links
      .map(function (a) { return document.getElementById(a.getAttribute("href").slice(1)); })
      .filter(Boolean);

    function onScroll() {
      var h = document.documentElement;
      var scrolled = h.scrollTop / (h.scrollHeight - h.clientHeight || 1);
      if (bar) bar.style.width = (scrolled * 100).toFixed(2) + "%";
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    if ("IntersectionObserver" in window && sections.length) {
      var spy = new IntersectionObserver(function (entries) {
        entries.forEach(function (en) {
          if (!en.isIntersecting) return;
          var id = en.target.id;
          links.forEach(function (a) {
            a.classList.toggle("active", a.getAttribute("href") === "#" + id);
          });
        });
      }, { rootMargin: "-45% 0px -50% 0px" });
      sections.forEach(function (s) { spy.observe(s); });
    }
  }

  function initReveal() {
    var items = $all(".reveal");
    if (!("IntersectionObserver" in window)) {
      items.forEach(function (i) { i.classList.add("in"); });
      return;
    }
    var obs = new IntersectionObserver(function (entries, o) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add("in"); o.unobserve(en.target); }
      });
    }, { threshold: 0.12 });
    items.forEach(function (i) { obs.observe(i); });
  }

  function initCounters() {
    var stats = $all(".stat .n[data-count]");
    if (!("IntersectionObserver" in window)) return;
    var obs = new IntersectionObserver(function (entries, o) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        var node = en.target;
        var target = parseInt(node.getAttribute("data-count"), 10);
        var suffix = node.getAttribute("data-suffix") || "";
        var start = null;
        var dur = 900;
        function step(ts) {
          if (start === null) start = ts;
          var p = Math.min((ts - start) / dur, 1);
          var eased = 1 - Math.pow(1 - p, 3);
          node.textContent = Math.round(eased * target) + suffix;
          if (p < 1) requestAnimationFrame(step);
        }
        requestAnimationFrame(step);
        o.unobserve(node);
      });
    }, { threshold: 0.6 });
    stats.forEach(function (s) { obs.observe(s); });
  }

  function initArc() {
    var rail = $("#arc-rail");
    var detail = $("#arc-detail");
    if (!rail || !detail) return;
    function render(i) {
      var s = STAGES[i];
      detail.innerHTML =
        '<div class="era">' + s.era + '</div>' +
        '<h3>' + s.name + '</h3>' +
        '<p>' + s.body + '</p>' +
        '<p class="noetic-note">' + s.note + '</p>';
      $all(".arc-chip", rail).forEach(function (c) {
        c.setAttribute("aria-selected", String(Number(c.getAttribute("data-stage")) === i));
      });
    }
    rail.addEventListener("click", function (e) {
      var chip = e.target.closest(".arc-chip");
      if (chip) render(Number(chip.getAttribute("data-stage")));
    });
    render(0);
  }

  function initFramework() {
    var detail = $("#dim-detail");
    var buttons = $all(".dim");
    if (!detail || !buttons.length) return;
    function render(key) {
      var d = DIMS[key];
      detail.style.borderTopColor = d.color;
      detail.innerHTML =
        '<div class="tag" style="color:' + d.color + '">' + d.tag + '</div>' +
        '<h3>' + d.name + '</h3>' +
        '<div class="counter">' + d.counter + '</div>' +
        '<p>' + d.body + '</p>' +
        '<ul class="practices">' + d.practices.map(function (p) { return '<li>' + p + '</li>'; }).join("") + '</ul>';
      buttons.forEach(function (b) { b.setAttribute("aria-selected", String(b.getAttribute("data-dim") === key)); });
    }
    buttons.forEach(function (b) {
      b.addEventListener("click", function () { render(b.getAttribute("data-dim")); });
    });
    render("noetic");
  }

  function initCardSort() {
    var grid = $("#card-grid");
    if (!grid) return;
    var countEl = $("#sort-count");
    var reflectEl = $("#sort-reflect");
    var state = {};

    function segGroup(labels, cls, cardN, key) {
      var seg = el("div", "seg" + (cls ? " " + cls : ""));
      labels.forEach(function (label, idx) {
        var b = el("button");
        b.type = "button";
        b.textContent = label;
        b.setAttribute("aria-pressed", "false");
        b.addEventListener("click", function () {
          state[cardN] = state[cardN] || {};
          state[cardN][key] = idx;
          $all("button", seg).forEach(function (x, xi) {
            x.setAttribute("aria-pressed", String(xi === idx));
          });
          update(cardN);
        });
        seg.appendChild(b);
      });
      return seg;
    }

    function update(cardN) {
      var card = grid.querySelector('[data-card="' + cardN + '"]');
      var s = state[cardN] || {};
      var complete = typeof s.friction === "number" && typeof s.legit === "number";
      if (card) {
        card.classList.toggle("placed", complete);
        var note = $(".note", card);
        if (note) note.hidden = !complete;
      }
      var placed = Object.keys(state).filter(function (k) {
        return typeof state[k].friction === "number" && typeof state[k].legit === "number";
      }).length;
      if (countEl) countEl.textContent = placed + " of " + CARDS.length + " placed";
      if (reflectEl) reflectEl.hidden = placed < 3;
    }

    CARDS.forEach(function (c) {
      var card = el("article", "scenario");
      card.setAttribute("data-card", String(c.n));

      var top = el("div", "top");
      var idx = el("span", "idx"); idx.textContent = c.n;
      var van = el("span", "vantage"); van.textContent = c.v + " card";
      top.appendChild(idx); top.appendChild(van);

      var text = el("p", "text"); text.textContent = c.t;

      var c1 = el("div", "control");
      var q1 = el("div", "q"); q1.textContent = "Productive friction preserved";
      c1.appendChild(q1); c1.appendChild(segGroup(FRICTION_LEVELS, "", c.n, "friction"));

      var c2 = el("div", "control");
      var q2 = el("div", "q"); q2.textContent = "Legitimate use of AI?";
      c2.appendChild(q2); c2.appendChild(segGroup(LEGIT_LEVELS, "legit", c.n, "legit"));

      var note = el("div", "note");
      note.hidden = true;
      note.innerHTML = "<b>The framework asks:</b> " + c.note;

      card.appendChild(top);
      card.appendChild(text);
      card.appendChild(c1);
      card.appendChild(c2);
      card.appendChild(note);
      grid.appendChild(card);
    });

    var reset = $("#sort-reset");
    if (reset) reset.addEventListener("click", function () {
      state = {};
      $all(".seg button", grid).forEach(function (b) { b.setAttribute("aria-pressed", "false"); });
      $all(".scenario", grid).forEach(function (c) { c.classList.remove("placed"); });
      $all(".note", grid).forEach(function (n) { n.hidden = true; });
      if (countEl) countEl.textContent = "0 of " + CARDS.length + " placed";
      if (reflectEl) reflectEl.hidden = true;
    });
  }

  function boot() {
    initDefenseShortcuts();
    initProgressAndNav();
    initReveal();
    initCounters();
    initArc();
    initFramework();
    initCardSort();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();
