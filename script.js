/* ==============================================
   FMTC-MMA — JavaScript
   Vanilla JS • No dependencies • Clean & modular
   ============================================== */

/* ==============================================
   TRAINING PLAN DATABASE
   ============================================== */
const PLAN_DB = {
  Iniciante: {
    'Perda de peso': {
      intro: 'Ótima escolha! Foco total em queimar calorias e construir uma base sólida.',
      plan: '<ul><li><strong>Foco:</strong> Aulas de Muay Thai — alta intensidade e perfeitas para seu objetivo.</li><li><strong>Sugestão:</strong> Pelo menos duas aulas de Muay Thai {days}. Se tiver mais um dia, inclua Jiu-Jitsu (Iniciante) para trabalhar o corpo de forma diferente.</li><li><strong>Dica:</strong> Consistência é a chave. Seu corpo vai se adaptar e os resultados virão.</li></ul>'
    },
    'Defesa pessoal': {
      intro: 'Aprender a se defender é um investimento para a vida.',
      plan: '<ul><li><strong>Foco:</strong> Equilíbrio entre Jiu-Jitsu e Muay Thai.</li><li><strong>Sugestão:</strong> Alterne as modalidades {days}. Muay Thai para a luta em pé, Jiu-Jitsu para o controle no chão.</li><li><strong>Dica:</strong> Preste atenção nos detalhes sobre distância e posicionamento.</li></ul>'
    },
    'Competição': {
      intro: 'Mentalidade de campeão desde o primeiro dia!',
      plan: '<ul><li><strong>Foco:</strong> Absorver o máximo de informação em Jiu-Jitsu e Muay Thai.</li><li><strong>Sugestão:</strong> Tente treinar pelo menos 3 vezes na semana {days}, mesclando as modalidades.</li><li><strong>Dica:</strong> Assista a campeonatos e converse com os atletas mais experientes da academia.</li></ul>'
    },
    'Condicionamento físico': {
      intro: 'Vamos transformar seu corpo! Força, resistência e capacidade cardiovascular.',
      plan: '<ul><li><strong>Foco:</strong> Volume e intensidade — o Muay Thai se destaca aqui.</li><li><strong>Sugestão:</strong> Uma aula de Muay Thai e uma de Jiu-Jitsu por semana {days} para trabalho corporal completo.</li><li><strong>Dica:</strong> Não pule os aquecimentos! São essenciais para prevenir lesões.</li></ul>'
    }
  },
  'Intermediário': {
    'Perda de peso': {
      intro: 'Hora de acelerar e quebrar platôs.',
      plan: '<ul><li><strong>Foco:</strong> Treinos de alta intensidade e volume.</li><li><strong>Sugestão:</strong> Mantenha Muay Thai e participe das aulas de Jiu-Jitsu Avançado {days}.</li><li><strong>Dica:</strong> Considere os treinos de MMA na Sexta para um estímulo metabólico diferente.</li></ul>'
    },
    'Defesa pessoal': {
      intro: 'Base construída — agora vamos refinar suas reações.',
      plan: '<ul><li><strong>Foco:</strong> Transições e combinações entre modalidades.</li><li><strong>Sugestão:</strong> Aulas avançadas de Jiu-Jitsu e treinos de Muay Thai {days}.</li><li><strong>Dica:</strong> O Open Mat de Sábado é perfeito para praticar cenários de defesa.</li></ul>'
    },
    'Competição': {
      intro: 'Hora de refinar estratégia e preparação física.',
      plan: '<ul><li><strong>Foco:</strong> Aulas avançadas e treinos específicos.</li><li><strong>Sugestão:</strong> Jiu-Jitsu Avançado + MMA e Sparring na Sexta {days}.</li><li><strong>Dica:</strong> Grave seus treinos de sparring para análise. Autoavaliação é chave.</li></ul>'
    },
    'Condicionamento físico': {
      intro: 'Seu corpo já está adaptado. Novos estímulos são necessários.',
      plan: '<ul><li><strong>Foco:</strong> Aumentar a capacidade de trabalho.</li><li><strong>Sugestão:</strong> Jiu-Jitsu Avançado + MMA na Sexta {days} para variedade de movimentos.</li><li><strong>Dica:</strong> Foque na recuperação: sono de qualidade e boa hidratação.</li></ul>'
    }
  },
  Avançado: {
    'Perda de peso': {
      intro: 'Você é atleta. Este plano otimiza composição corporal sem sacrificar performance.',
      plan: '<ul><li><strong>Foco:</strong> Manter a intensidade máxima nos treinos.</li><li><strong>Sugestão:</strong> Jiu-Jitsu Avançado + MMA/Sparring {days}.</li><li><strong>Dica:</strong> Incorpore HIIT no aquecimento para impulso extra na queima.</li></ul>'
    },
    'Defesa pessoal': {
      intro: 'Neste nível, a defesa pessoal é instintiva. Foco em manter a lâmina afiada.',
      plan: '<ul><li><strong>Foco:</strong> Realismo e pressão.</li><li><strong>Sugestão:</strong> MMA Sparring na Sexta é o ambiente mais próximo do real {days}.</li><li><strong>Dica:</strong> Ajude os alunos mais novos — ensinar solidifica seu conhecimento.</li></ul>'
    },
    'Competição': {
      intro: 'O topo é o seu lugar. Estratégia, camp e mentalidade inabalável.',
      plan: '<ul><li><strong>Foco:</strong> Estratégia e Sparring.</li><li><strong>Sugestão:</strong> Jiu-Jitsu Avançado + MMA + Sparring de Sexta {days}.</li><li><strong>Dica:</strong> Trabalhe com os treinadores para desenvolver plano de jogo específico.</li></ul>'
    },
    'Condicionamento físico': {
      intro: 'Atleta de elite exige preparação de elite.',
      plan: '<ul><li><strong>Foco:</strong> Performance máxima e prevenção de lesões.</li><li><strong>Sugestão:</strong> Todos os treinos avançados (Jiu-Jitsu, MMA, Sparring) {days}.</li><li><strong>Dica:</strong> Incorpore mobilidade e flexibilidade para longevidade no esporte.</li></ul>'
    }
  }
};

/* ==============================================
   NAVIGATION
   ============================================== */
function initNavigation() {
  const header   = document.getElementById('header');
  const toggle   = document.getElementById('menu-toggle');
  const menu     = document.getElementById('mobile-menu');
  const navLinks = document.querySelectorAll('.nav-desktop a');
  const sections = document.querySelectorAll('main .section, main .hero');

  if (!header || !toggle || !menu) return;

  // Scroll header shadow
  function onScroll() {
    header.classList.toggle('scrolled', window.scrollY > 10);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Mobile menu toggle
  toggle.addEventListener('click', function () {
    const isOpen = menu.classList.toggle('open');
    toggle.setAttribute('aria-expanded', isOpen);
    menu.setAttribute('aria-hidden', !isOpen);
    document.body.classList.toggle('scroll-lock', isOpen);
  });

  // Close mobile menu on link click
  menu.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      menu.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
      menu.setAttribute('aria-hidden', 'true');
      document.body.classList.remove('scroll-lock');
    });
  });

  // Close on Escape
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && menu.classList.contains('open')) {
      menu.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
      menu.setAttribute('aria-hidden', 'true');
      document.body.classList.remove('scroll-lock');
      toggle.focus();
    }
  });

  // ScrollSpy for desktop nav
  if (sections.length && navLinks.length) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          var id = entry.target.id;
          navLinks.forEach(function (link) {
            link.classList.toggle('active', link.getAttribute('href') === '#' + id);
          });
        }
      });
    }, { rootMargin: '-40% 0px -40% 0px' });

    sections.forEach(function (s) { observer.observe(s); });
  }
}

/* ==============================================
   MODALS
   ============================================== */
function initModals() {
  var triggers = document.querySelectorAll('.modal-trigger');
  var modals   = document.querySelectorAll('.modal');

  function openModal(id) {
    var modal = document.getElementById('modal-' + id);
    if (!modal) return;
    modal.removeAttribute('hidden');
    document.body.classList.add('scroll-lock');
    // Focus the close button
    var closeBtn = modal.querySelector('.modal-close');
    if (closeBtn) closeBtn.focus();
  }

  function closeModal(modal) {
    if (!modal) return;
    modal.setAttribute('hidden', '');
    // Only unlock scroll if no other modals open
    var anyOpen = Array.from(modals).some(function (m) { return !m.hasAttribute('hidden'); });
    if (!anyOpen) document.body.classList.remove('scroll-lock');
  }

  triggers.forEach(function (trigger) {
    trigger.addEventListener('click', function () {
      openModal(trigger.dataset.modal);
    });
  });

  modals.forEach(function (modal) {
    // Close on overlay click
    var overlay = modal.querySelector('.modal-overlay');
    if (overlay) {
      overlay.addEventListener('click', function () { closeModal(modal); });
    }
    // Close button
    var closeBtn = modal.querySelector('.modal-close');
    if (closeBtn) {
      closeBtn.addEventListener('click', function () { closeModal(modal); });
    }
  });

  // Close on Escape
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      modals.forEach(function (modal) {
        if (!modal.hasAttribute('hidden')) closeModal(modal);
      });
    }
  });
}

/* ==============================================
   TRAINING PLAN GENERATOR
   ============================================== */
function initPlanGenerator() {
  var form      = document.getElementById('plan-form');
  var resultDiv = document.getElementById('plan-result');
  var btn       = document.getElementById('generate-plan-btn');

  if (!form || !resultDiv || !btn) return;

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    var formData = new FormData(form);
    var level = formData.get('level');
    var goal  = formData.get('goal');
    var days  = formData.getAll('days');

    if (days.length === 0) {
      resultDiv.innerHTML = '<p style="color:var(--color-primary); text-align:center; font-weight:500;">Selecione pelo menos um dia para treinar.</p>';
      return;
    }

    // Loading state
    btn.disabled = true;
    btn.textContent = 'Gerando...';
    resultDiv.innerHTML = '<div class="loader-spinner"></div><p style="text-align:center; color:var(--color-text-muted); margin-top:1rem;">Montando seu plano...</p>';

    setTimeout(function () {
      var daysStr = 'nos dias: <strong>' + days.join(', ') + '</strong>';
      var planData = PLAN_DB[level] && PLAN_DB[level][goal];

      if (planData) {
        var planHtml = planData.plan.replace(/{days}/g, daysStr);
        resultDiv.innerHTML =
          '<div style="display:flex; flex-direction:column; gap:1rem;">' +
            '<p style="font-weight:600; color:var(--color-heading);">' + planData.intro + '</p>' +
            planHtml +
            '<div style="background:var(--color-accent-light); padding:0.875rem 1rem; border-radius:var(--radius-sm); border-left:3px solid var(--color-accent); margin-top:0.5rem;">' +
              '<p style="font-size:0.875rem; color:var(--color-accent);"><strong>Lembre-se:</strong> Este plano é uma sugestão inicial. Converse com nossos instrutores para ajustes!</p>' +
            '</div>' +
          '</div>';
      } else {
        resultDiv.innerHTML = '<p style="color:var(--color-text-light);">Não encontramos um plano pré-definido para essa combinação. Converse com nossos instrutores para montar o plano ideal!</p>';
      }

      btn.disabled = false;
      btn.textContent = 'Gerar Plano de Treino';
    }, 800);
  });
}

/* ==============================================
   CONTACT FORM
   ============================================== */
function initContactForm() {
  var form    = document.getElementById('contact-form');
  var success = document.getElementById('form-success');

  if (!form || !success) return;

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    // Basic validation
    var name  = form.querySelector('[name="name"]');
    var phone = form.querySelector('[name="phone"]');

    if (!name.value.trim() || !phone.value.trim()) {
      return;
    }

    // Simulate submission (static site — no backend)
    form.style.display = 'none';
    success.removeAttribute('hidden');

    // Optionally redirect to WhatsApp
    // Uncomment and adjust the number below:
    // var msg = encodeURIComponent('Olá! Meu nome é ' + name.value.trim() + '. Gostaria de agendar uma aula experimental na FMTC-MMA.');
    // window.open('https://wa.me/5531999999999?text=' + msg, '_blank');
  });
}

/* ==============================================
   SCROLL ANIMATIONS (IntersectionObserver)
   ============================================== */
function initScrollAnimations() {
  var elements = document.querySelectorAll('.animate-on-scroll');
  if (!elements.length) return;

  // If user prefers reduced motion, show everything immediately
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    elements.forEach(function (el) { el.classList.add('visible'); });
    return;
  }

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -40px 0px'
  });

  elements.forEach(function (el) { observer.observe(el); });
}

/* ==============================================
   SMOOTH SCROLL (for anchor links)
   ============================================== */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(function (link) {
    link.addEventListener('click', function (e) {
      var href = link.getAttribute('href');
      if (href === '#') return;

      var target = document.querySelector(href);
      if (!target) return;

      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });

      // Update URL without triggering scroll
      if (history.pushState) {
        history.pushState(null, null, href);
      }
    });
  });
}

/* ==============================================
   INITIALIZATION
   ============================================== */
document.addEventListener('DOMContentLoaded', function () {
  initNavigation();
  initModals();
  initPlanGenerator();
  initContactForm();
  initScrollAnimations();
  initSmoothScroll();
});
