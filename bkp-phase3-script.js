/* ════════════════════════════════════════════════════════════════
   FMTC-MMA  ·  MAIN SCRIPT
   Navigation, scroll animations, counter animation,
   athlete directory (36 athletes), contact form
   ════════════════════════════════════════════════════════════════ */

/* ── ATHLETE DATA ────────────────────────────────────────────── */
const athletes = [
  { name: "Agnaldo Ferreira da Silva", register: "019", modalities: "Muay Thai, Taekwondo", level: "PROFESSOR", team: "Mago Team" },
  { name: "Allan S. Paiva Ferreira", register: "020", modalities: "Muay Thai", level: "INSTRUTOR", team: "Mago Team" },
  { name: "Amanda Aparecida da Silva Lima", register: "013", modalities: "MMA, Muay Thai", level: "ALUNO", team: "Mago Team" },
  { name: "Ana Luiza N. de Almeida", register: "010", modalities: "Muay Thai", level: "ALUNO", team: "Mago Team" },
  { name: "Antônio Brandão da Silva Neto", register: "004", modalities: "Muay Thai, Jiu-Jitsu", level: "INSTRUTOR", team: "Junior Top Team" },
  { name: "Antônio Samuel da Costa Chaiya", register: "001", modalities: "Muay Thai Chaiya", level: "MESTRE", team: "Mago Team" },
  { name: "Carlos Henrique M. S. Lima", register: "015", modalities: "Muay Thai", level: "ALUNO", team: "Mago Team" },
  { name: "Claudio Adriano de Carvalho", register: "011", modalities: "MMA, Muay Thai", level: "INSTRUTOR", team: "Mago Team" },
  { name: "Cristhian A. Celestino de Oliveira", register: "022", modalities: "Muay Thai", level: "ALUNO", team: "Junior Top Team" },
  { name: "Daniel A. M. Souza", register: "035", modalities: "Muay Thai, MMA", level: "ALUNO", team: "Mago Team" },
  { name: "Deibson da Silva Faria", register: "008", modalities: "MMA", level: "ALUNO", team: "Mago Team" },
  { name: "Derick M. M. Viana", register: "027", modalities: "Muay Thai, MMA", level: "ALUNO", team: "Junior Top Team" },
  { name: "Diego Emílio dos Reis", register: "007", modalities: "Marketing, Muay Thai", level: "INSTRUTOR", team: "Mago Team" },
  { name: "Eduardo Rafael", register: "024", modalities: "Muay Thai", level: "ALUNO", team: "Mago Team" },
  { name: "Gabriel de Oliveira Pereira", register: "029", modalities: "Muay Thai, Jiu-Jitsu", level: "ALUNO", team: "Mago Team" },
  { name: "Gevesan Antônio da Silva Neto", register: "003", modalities: "Muay Thai, MMA", level: "PROFESSOR", team: "Mago Team" },
  { name: "Gustavo R. Dumont", register: "025", modalities: "Muay Thai", level: "ALUNO", team: "Mago Team" },
  { name: "Igor Torres de Oliveira Freitas", register: "028", modalities: "Muay Thai, MMA", level: "ALUNO", team: "Mago Team" },
  { name: "Jaqueline Maria de Souza Pereira", register: "005", modalities: "Muay Thai, Boxe, MMA, Jiu-Jitsu", level: "INSTRUTOR", team: "Mago Team" },
  { name: "João Viktor R. P. de Souza", register: "023", modalities: "Muay Thai", level: "ALUNO", team: "Junior Top Team" },
  { name: "Juan Pablo Souza Pereira", register: "009", modalities: "Muay Thai, MMA", level: "ALUNO", team: "Mago Team" },
  { name: "Leonardo E. do Nascimento", register: "032", modalities: "Muay Thai", level: "ALUNO", team: "Mago Team" },
  { name: "Lucas G. da Silva", register: "030", modalities: "Muay Thai, Boxe", level: "ALUNO", team: "Mago Team" },
  { name: "Luiz Miguel da Cruz", register: "033", modalities: "MMA, Muay Thai", level: "ALUNO", team: "Junior Top Team" },
  { name: "Magno Costa", register: "XT2", modalities: "Kung-Fu", level: "MESTRE", team: "Equipe Magno" },
  { name: "Marcellus G. da Costa Pereira", register: "018", modalities: "Muay Thai", level: "ALUNO", team: "Mago Team" },
  { name: "Matheus H. C. Pires", register: "036", modalities: "Muay Thai", level: "ALUNO", team: "Mago Team" },
  { name: "Mauro Cipriano", register: "XT1", modalities: "Muay Thai, Karatê", level: "MESTRE", team: "Dojo Cipriano" },
  { name: "Nicolas R. M. de Paula", register: "031", modalities: "Muay Thai, MMA", level: "ALUNO", team: "Mago Team" },
  { name: "Paulo Henrique da Silveira", register: "016", modalities: "Muay Thai, MMA", level: "ALUNO", team: "Mago Team" },
  { name: "Poliana C. de Souza", register: "026", modalities: "Muay Thai", level: "ALUNO", team: "Mago Team" },
  { name: "Rafael Ribeiro Silva", register: "006", modalities: "Muay Thai, Jiu-Jitsu", level: "INSTRUTOR", team: "Mago Team" },
  { name: "Robson Teixeira da Costa", register: "002", modalities: "Muay Thai Chaiya, Taekwondo, Boxe, Jiu-Jitsu", level: "MESTRE", team: "Mago Team" },
  { name: "Vinicius D. R. Ribeiro", register: "034", modalities: "Muay Thai", level: "ALUNO", team: "Mago Team" },
  { name: "Adair Rodrigues Junior", register: "323", modalities: "MMA, Muay Thai", level: "INSTRUTOR", team: "Junior Top Team" },
  { name: "Mateus A. F. de Oliveira", register: "021", modalities: "Muay Thai", level: "ALUNO", team: "Mago Team" }
];

/* ── BOOTSTRAP ───────────────────────────────────────────────── */
document.addEventListener("DOMContentLoaded", () => {
  initNavigation();
  initScrollAnimations();
  initCounterAnimation();
  initAthleteDirectory();
  initContactForm();
});

/* ── NAVIGATION ──────────────────────────────────────────────── */
function initNavigation() {
  const header   = document.getElementById("header");
  const toggle   = document.getElementById("menu-toggle");
  const mobile   = document.getElementById("mobile-menu");
  const navLinks = document.querySelectorAll(".nav-desktop a, .mobile-menu nav a");

  /* scroll class */
  const setScrolled = () => header.classList.toggle("scrolled", window.scrollY > 20);
  window.addEventListener("scroll", setScrolled, { passive: true });
  setScrolled();

  /* mobile menu */
  toggle.addEventListener("click", () => {
    const open = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", !open);
    mobile.setAttribute("aria-hidden", open);
    mobile.classList.toggle("open", !open);
    document.body.style.overflow = open ? "" : "hidden";
  });

  const closeMobile = () => {
    toggle.setAttribute("aria-expanded", "false");
    mobile.setAttribute("aria-hidden", "true");
    mobile.classList.remove("open");
    document.body.style.overflow = "";
  };

  mobile.querySelectorAll("a").forEach(a => a.addEventListener("click", closeMobile));

  /* scrollspy */
  const sections = document.querySelectorAll("section[id]");
  const spy = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        navLinks.forEach(a => {
          a.classList.toggle("active", a.getAttribute("href") === `#${id}`);
        });
      }
    });
  }, { rootMargin: `-${parseInt(getComputedStyle(document.documentElement).getPropertyValue('--header-h')) + 10}px 0px -55% 0px`, threshold: 0 });

  sections.forEach(s => spy.observe(s));
}

/* ── SCROLL ANIMATIONS ───────────────────────────────────────── */
function initScrollAnimations() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    document.querySelectorAll(".anim-up, .anim-hero").forEach(el => el.classList.add("visible"));
    document.querySelector(".hero-stats-bar")?.classList.add("visible");
    return;
  }

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });

  document.querySelectorAll(".anim-up, .anim-hero, .hero-stats-bar").forEach(el => {
    observer.observe(el);
  });
}

/* ── COUNTER ANIMATION ───────────────────────────────────────── */
function initCounterAnimation() {
  const counters = document.querySelectorAll(".stat-num[data-target]");
  if (!counters.length) return;

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    counters.forEach(el => { el.textContent = el.dataset.target; });
    return;
  }

  const animate = (el) => {
    const target = parseInt(el.dataset.target, 10);
    const duration = 1600;
    const start = performance.now();
    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); /* ease-out cubic */
      el.textContent = Math.round(eased * target);
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  };

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animate(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(el => observer.observe(el));
}

/* ── ATHLETE DIRECTORY ───────────────────────────────────────── */
function initAthleteDirectory() {
  const listEl    = document.getElementById("athlete-list");
  const countEl   = document.getElementById("athlete-count");
  const searchEl  = document.getElementById("athlete-search");
  const teamEl    = document.getElementById("filter-team");
  const modalEl   = document.getElementById("filter-modality");
  const levelEl   = document.getElementById("filter-level");

  if (!listEl) return;

  /* populate team & modality selects */
  const teams = [...new Set(athletes.map(a => a.team))].sort();
  const mods  = [...new Set(athletes.flatMap(a => a.modalities.split(",").map(m => m.trim())))].sort();

  teams.forEach(t => { const o = document.createElement("option"); o.value = t; o.textContent = t; teamEl.appendChild(o); });
  mods.forEach(m => { const o = document.createElement("option"); o.value = m; o.textContent = m; modalEl.appendChild(o); });

  /* helper: normalize level for tag class */
  const levelClass = (lev) => {
    const map = { MESTRE: "mestre", PROFESSOR: "professor", INSTRUTOR: "instrutor", ALUNO: "aluno" };
    return map[lev] || "aluno";
  };
  const levelLabel = (lev) => {
    const map = { MESTRE: "Mestre", PROFESSOR: "Professor(a)", INSTRUTOR: "Instrutor(a)", ALUNO: "Aluno(a)" };
    return map[lev] || lev;
  };

  /* render */
  function render(list) {
    countEl.textContent = `${list.length} atleta${list.length !== 1 ? "s" : ""} encontrado${list.length !== 1 ? "s" : ""}`;
    if (!list.length) {
      listEl.innerHTML = `<p style="grid-column:1/-1;text-align:center;color:var(--text-muted);padding:2rem 0;">Nenhum atleta encontrado.</p>`;
      return;
    }
    listEl.innerHTML = list.map(a => `
      <div class="ath-card">
        <span class="ath-name">${a.name}</span>
        <span class="ath-reg">Reg. ${a.register}</span>
        <div class="ath-meta">
          <span class="ath-tag ath-tag--${levelClass(a.level)}">${levelLabel(a.level)}</span>
          ${a.modalities.split(",").map(m => `<span class="ath-tag">${m.trim()}</span>`).join("")}
        </div>
      </div>
    `).join("");
  }

  /* filter */
  function applyFilters() {
    const q     = searchEl.value.toLowerCase().trim();
    const team  = teamEl.value;
    const mod   = modalEl.value;
    const level = levelEl.value;

    const filtered = athletes.filter(a => {
      if (q && !a.name.toLowerCase().includes(q) && !a.register.toLowerCase().includes(q)) return false;
      if (team  && a.team !== team) return false;
      if (mod   && !a.modalities.includes(mod)) return false;
      if (level && a.level !== level) return false;
      return true;
    });
    render(filtered);
  }

  [searchEl, teamEl, modalEl, levelEl].forEach(el => el.addEventListener("input", applyFilters));
  render(athletes);
}

/* ── CONTACT FORM ────────────────────────────────────────────── */
function initContactForm() {
  const form    = document.getElementById("contact-form");
  const success = document.getElementById("form-success");
  if (!form || !success) return;

  form.addEventListener("submit", e => {
    e.preventDefault();
    const name    = form.querySelector('[name="name"]').value.trim();
    const phone   = form.querySelector('[name="phone"]').value.trim();
    const subject = form.querySelector('[name="subject"]').value;

    if (!name || !phone || !subject) {
      alert("Preencha todos os campos obrigatórios.");
      return;
    }
    form.hidden    = true;
    success.hidden = false;
  });
}
