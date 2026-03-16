const athletes = [
  { name: 'Adair Rodrigues Junior', register: '323', modalities: 'Muay Thai, Taekwondo, Judô, Jiu Jitsu, Karatê, Krav Maga, MMA', level: 'MESTRE', team: 'Junior Top Team' },
  { name: 'Adilson Conceição Silva', register: '324', modalities: 'Muay Thai', level: 'ALUNO', team: 'Mago Team Vila Pinho' },
  { name: 'Adriana Álvares Tângari', register: '118', modalities: 'Muay Thai', level: 'ALUNO', team: 'Mago Team Centro Contagem' },
  { name: 'Adriano Contadini Nascimento', register: '035', modalities: 'Muay Thai', level: 'ALUNO', team: 'Mago Team Centro Contagem' },
  { name: 'Agnaldo Ferreira da Silva', register: '019', modalities: 'Muay Thai, Taekwondo', level: 'PROFESSOR', team: 'Mago Team Industrial Contagem' },
  { name: 'Alan Cristhian Ferraz Carvalhais', register: '152', modalities: 'Jiu Jitsu, MMA', level: 'ALUNO', team: 'Mago Team Centro Contagem' },
  { name: 'Alan Henrique Pessoa', register: '326', modalities: 'Muay Thai', level: 'ALUNO', team: 'Mago Team Vila Pinho' },
  { name: 'Aldete de Souza Matos Cezar', register: '071', modalities: 'Muay Thai', level: 'ALUNO', team: 'Mago Team Centro Contagem' },
  { name: 'Alessandro Pereira Julio', register: '119', modalities: 'Muay Thai, Boxe', level: 'ALUNO', team: 'Mago Team Centro Contagem' },
  { name: 'Alex Borges Gama', register: '022', modalities: 'Muay Thai, Taekwondo', level: 'INSTRUTOR', team: 'Mago Team Vila Pinho' },
  { name: 'Allan dos Santos Paiva Ferreira', register: '023', modalities: 'Muay Thai', level: 'INSTRUTOR', team: 'Mago Team Vila Pinho' },
  { name: 'Alysson Junior de Souza Lopes', register: '068', modalities: 'Muay Thai', level: 'ALUNO', team: 'NASEVEG Contagem' },
  { name: 'Amanda de Castro Silva', register: '338', modalities: 'Muay Thai', level: 'ALUNO', team: 'Mago Team Centro Contagem' },
  { name: 'Amanda do Nascimento Camelo', register: '081', modalities: 'Muay Thai', level: 'ALUNO', team: 'Mago Team Centro Contagem' },
  { name: 'Ana Carolina Diana Gonçalvez', register: '120', modalities: 'Muay Thai', level: 'ALUNO', team: 'Mago Team Centro Contagem' },
  { name: 'Anderson Correa da Silva', register: '336', modalities: 'Muay Thai', level: 'ALUNO', team: 'Mago Team Vila Pinho' },
  { name: 'André Luiz Delasalle da Silva', register: '121', modalities: 'Muay Thai', level: 'ALUNO', team: 'Mago Team Centro Contagem' },
  { name: 'André Vinícius Arcanjo Diniz Sousa', register: '164', modalities: 'Muay Thai', level: 'ALUNO', team: 'Mago Team Vila Pinho' },
  { name: 'André Vinicius Neto', register: '343', modalities: 'Muay Thai', level: 'ALUNO', team: 'Mago Team Centro Contagem' },
  { name: 'Antônio Brandão da Silva Neto', register: '004', modalities: 'Muay Thai, MMA', level: 'PROFESSOR', team: 'Mago Team Centro Contagem' },
  { name: 'Antônio Samuel da Costa Chaiya', register: '001', modalities: 'Muay Thai Chaiya', level: 'MESTRE', team: 'Costa Chaiya BH' },
  { name: 'Bruno Fernandes Sousa', register: '328', modalities: 'Muay Thai', level: 'ALUNO', team: 'Mago Team Vila Pinho' },
  { name: 'Carlos Eduardo Aguiar de Almeida', register: '115', modalities: 'Muay Thai', level: 'ALUNO', team: 'NASEVEG Contagem' },
  { name: 'Carlos José Vieira dos Silva', register: '339', modalities: 'Muay Thai', level: 'ALUNO', team: 'Mago Team Vila Pinho' },
  { name: 'Carla Cristina Henriques', register: '347', modalities: 'Muay Thai', level: 'ALUNO', team: 'Mago Team Centro Contagem' },
  { name: 'Fernanda Lucia de Souza Silva', register: '348', modalities: 'Muay Thai, Boxe', level: 'ALUNO', team: 'Mago Team Centro Contagem' },
  { name: 'Jemima de Amorim Teodoro', register: '349', modalities: 'Muay Thai, Boxe, Jiu Jitsu', level: 'ALUNO', team: 'Mago Team Centro Contagem' },
  { name: 'Marcus Vinicius Alves de Souza', register: '350', modalities: 'Muay Thai, Boxe', level: 'ALUNO', team: 'Mago Team Centro Contagem' },
  { name: 'Michele Karla Guedes Moraes Seppe', register: '351', modalities: 'Muay Thai', level: 'ALUNO', team: 'Mago Team Centro Contagem' },
  { name: 'Mirian Rosa de Souza', register: '352', modalities: 'Muay Thai', level: 'ALUNO', team: 'Mago Team Centro Contagem' },
  { name: 'Mauro Cipriano', register: '353', modalities: 'Muay Thai, Karatê', level: 'MESTRE', team: 'Dojo Cipriano' },
  { name: 'Myllena Brugger de Almeida', register: '354', modalities: 'Muay Thai', level: 'ALUNO', team: 'Mago Team Centro Contagem' },
  { name: 'Magno Costa', register: '355', modalities: 'Kung-Fu', level: 'MESTRE', team: 'AICCA' },
  { name: 'Gevesan Antônio da Silva Neto', register: '003', modalities: 'Muay Thai Chaiya, MMA', level: 'PROFESSOR', team: 'NASEVEG Contagem' },
  { name: 'Jaqueline Maria de Souza Pereira', register: '005', modalities: 'Muay Thai, Boxe, MMA, Jiu Jitsu', level: 'INSTRUTOR', team: 'Mago Team Centro Contagem' },
  { name: 'Rafael Ribeiro Silva', register: '006', modalities: 'Jiu Jitsu, Muay Thai, MMA', level: 'ALUNO', team: 'Mago Team' }
];

function initNavigation() {
  const header = document.getElementById('header');
  const toggle = document.getElementById('menu-toggle');
  const menu = document.getElementById('mobile-menu');
  const navLinks = document.querySelectorAll('.nav-desktop a');
  const sections = document.querySelectorAll('main section');

  if (!header || !toggle || !menu) return;

  const onScroll = () => {
    header.classList.toggle('scrolled', window.scrollY > 8);
  };

  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  toggle.addEventListener('click', () => {
    const isOpen = menu.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(isOpen));
    menu.setAttribute('aria-hidden', String(!isOpen));
    document.body.classList.toggle('scroll-lock', isOpen);
  });

  menu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      menu.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
      menu.setAttribute('aria-hidden', 'true');
      document.body.classList.remove('scroll-lock');
    });
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && menu.classList.contains('open')) {
      menu.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
      menu.setAttribute('aria-hidden', 'true');
      document.body.classList.remove('scroll-lock');
      toggle.focus();
    }
  });

  if (sections.length && navLinks.length) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const id = entry.target.id;
        navLinks.forEach((link) => {
          link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
        });
      });
    }, { rootMargin: '-40% 0px -45% 0px' });

    sections.forEach((section) => observer.observe(section));
  }
}

function initScrollAnimation() {
  const elements = document.querySelectorAll('.animate-on-scroll');
  if (!elements.length) return;

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    elements.forEach((el) => el.classList.add('visible'));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -30px 0px' });

  elements.forEach((el) => observer.observe(el));
}

function initAthleteDirectory() {
  const searchInput = document.getElementById('athlete-search');
  const teamSelect = document.getElementById('filter-team');
  const modalitySelect = document.getElementById('filter-modality');
  const levelSelect = document.getElementById('filter-level');
  const listEl = document.getElementById('athlete-list');
  const countEl = document.getElementById('athlete-count');

  if (!searchInput || !teamSelect || !modalitySelect || !levelSelect || !listEl || !countEl) return;

  const uniqueTeams = [...new Set(athletes.map((a) => a.team))].sort((a, b) => a.localeCompare(b));
  const uniqueModalities = [...new Set(
    athletes.flatMap((a) => a.modalities.split(',').map((m) => m.trim()))
  )].sort((a, b) => a.localeCompare(b));

  uniqueTeams.forEach((team) => {
    const option = document.createElement('option');
    option.value = team;
    option.textContent = team;
    teamSelect.appendChild(option);
  });

  uniqueModalities.forEach((modality) => {
    const option = document.createElement('option');
    option.value = modality;
    option.textContent = modality;
    modalitySelect.appendChild(option);
  });

  function normalizeLevel(level) {
    if (level === 'INTRUTOR') return 'INSTRUTOR';
    return level;
  }

  function levelClass(level) {
    const normalized = normalizeLevel(level).toLowerCase();
    if (normalized.includes('mestre')) return 'level-mestre';
    if (normalized.includes('professor')) return 'level-professor';
    return '';
  }

  function render(data) {
    listEl.innerHTML = '';

    if (!data.length) {
      listEl.innerHTML = '<div class="athlete-empty">Nenhum atleta encontrado com os filtros selecionados.</div>';
      countEl.textContent = '0 atletas encontrados';
      return;
    }

    const cards = data.map((athlete) => {
      const level = normalizeLevel(athlete.level);
      const badgeClass = levelClass(level);

      return `
        <article class="athlete-card">
          <div class="athlete-head">
            <h3>${athlete.name}</h3>
            <span class="badge ${badgeClass}">${level}</span>
          </div>
          <div class="athlete-meta">
            <p><strong>Registro:</strong> ${athlete.register}</p>
            <p><strong>Modalidades:</strong> ${athlete.modalities}</p>
            <p><strong>Equipe:</strong> ${athlete.team}</p>
          </div>
        </article>
      `;
    }).join('');

    listEl.innerHTML = cards;
    countEl.textContent = `${data.length} atleta${data.length > 1 ? 's' : ''} encontrado${data.length > 1 ? 's' : ''}`;
  }

  function applyFilters() {
    const search = searchInput.value.trim().toLowerCase();
    const team = teamSelect.value;
    const modality = modalitySelect.value;
    const level = levelSelect.value;

    const filtered = athletes.filter((athlete) => {
      const normalizedLevel = normalizeLevel(athlete.level);
      const matchesSearch =
        athlete.name.toLowerCase().includes(search) ||
        athlete.register.toLowerCase().includes(search);

      const matchesTeam = !team || athlete.team === team;
      const matchesModality = !modality || athlete.modalities.toLowerCase().includes(modality.toLowerCase());
      const matchesLevel = !level || normalizedLevel === level;

      return matchesSearch && matchesTeam && matchesModality && matchesLevel;
    });

    render(filtered);
  }

  searchInput.addEventListener('input', applyFilters);
  teamSelect.addEventListener('change', applyFilters);
  modalitySelect.addEventListener('change', applyFilters);
  levelSelect.addEventListener('change', applyFilters);

  render(athletes);
}

function initContactForm() {
  const form = document.getElementById('contact-form');
  const success = document.getElementById('form-success');
  if (!form || !success) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = form.querySelector('#contact-name');
    const phone = form.querySelector('#contact-phone');
    const subject = form.querySelector('#contact-subject');

    if (!name.value.trim() || !phone.value.trim() || !subject.value) return;

    form.style.display = 'none';
    success.hidden = false;
  });
}

document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  initScrollAnimation();
  initAthleteDirectory();
  initContactForm();
});
