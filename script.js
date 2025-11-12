/* ============================================
   FMTC-MMA | EVOLUTION JAVASCRIPT
   Sistema Modular de Interações e Animações
   ============================================ */

/* ============================================
   CONFIGURAÇÕES GLOBAIS
   ============================================ */
const CONFIG = {
    planDatabase: {
        'Iniciante': {
            'Perda de peso': [
                {
                    intro: "Ótima escolha! Foco total em queimar calorias e construir uma base sólida. Este plano vai acelerar seu metabolismo e te deixar mais resistente.",
                    plan: `<ul class="space-y-2"><li><strong>Foco Principal:</strong> Aulas de Muay Thai. Elas são de alta intensidade e perfeitas para o seu objetivo.</li><li><strong>Sugestão:</strong> Tente fazer pelo menos duas aulas de Muay Thai {daysString}. Se tiver mais um dia, inclua uma aula de Jiu-Jitsu (Iniciante) para trabalhar o corpo de forma diferente e melhorar a flexibilidade.</li><li><strong>Dica Pro:</strong> A consistência é a chave! Não desanime na primeira semana, seu corpo vai se adaptar e os resultados virão.</li></ul>`
                }
            ],
            'Defesa pessoal': [
                {
                    intro: "Excelente objetivo! Aprender a se defender é um investimento para a vida. Este plano foca em técnicas eficientes e consciência situacional.",
                    plan: `<ul class="space-y-2"><li><strong>Foco Principal:</strong> Equilíbrio entre Jiu-Jitsu (Iniciante) e Muay Thai.</li><li><strong>Sugestão:</strong> Alterne as modalidades {daysString}. O Muay Thai te dará a base em pé, e o Jiu-Jitsu o controle no chão, as duas situações mais comuns em uma defesa.</li><li><strong>Dica Pro:</strong> Preste atenção extra nos detalhes que os professores passam sobre distância e posicionamento. Isso é crucial.</li></ul>`
                }
            ],
            'Competição': [
                {
                    intro: "Mentalidade de campeão desde o primeiro dia! Para competir, a base técnica tem que ser impecável. Vamos construir isso juntos.",
                    plan: `<ul class="space-y-2"><li><strong>Foco Principal:</strong> Absorver o máximo de informação. Frequente tanto as aulas de Jiu-Jitsu (Iniciante) quanto as de Muay Thai.</li><li><strong>Sugestão:</strong> Tente treinar pelo menos 3 vezes na semana, mesclando as modalidades {daysString}.</li><li><strong>Dica Pro:</strong> Assista a campeonatos, estude os melhores e converse com os atletas mais experientes da academia. O aprendizado continua fora do tatame.</li></ul>`
                }
            ],
            'Condicionamento físico': [
                {
                    intro: "Vamos transformar seu corpo em uma máquina! Este plano é para construir força, resistência e uma capacidade cardiovascular de elite.",
                    plan: `<ul class="space-y-2"><li><strong>Foco Principal:</strong> Volume e intensidade. Todas as nossas aulas vão te ajudar, mas o Muay Thai se destaca.</li><li><strong>Sugestão:</strong> Faça uma aula de Muay Thai e uma de Jiu-Jitsu (Iniciante) na semana {daysString}. Isso garantirá um trabalho corporal completo.</li><li><strong>Dica Pro:</strong> Não pule os aquecimentos! Eles são essenciais para preparar seu corpo para o esforço e prevenir lesões.</li></ul>`
                }
            ]
        },
        'Intermediário': {
            'Perda de peso': [
                {
                    intro: "Você já conhece o caminho, agora é hora de acelerar. Vamos aumentar a intensidade para quebrar platôs e continuar vendo resultados.",
                    plan: `<ul class="space-y-2"><li><strong>Foco Principal:</strong> Treinos de alta intensidade e volume.</li><li><strong>Sugestão:</strong> Mantenha a frequência nas aulas de Muay Thai e participe das aulas de Jiu-Jitsu (Avançado) {daysString} para um desafio cardiovascular e técnico extra.</li><li><strong>Dica Pro:</strong> Considere participar dos treinos de MMA na Sexta-feira para um estímulo metabólico diferente e intenso.</li></ul>`
                }
            ],
            'Defesa pessoal': [
                {
                    intro: "Com a base já construída, vamos refinar suas reações e adicionar mais ferramentas ao seu arsenal. O foco agora é na aplicação e fluidez.",
                    plan: `<ul class="space-y-2"><li><strong>Foco Principal:</strong> Transições e combinações.</li><li><strong>Sugestão:</strong> Participe das aulas avançadas de Jiu-Jitsu e dos treinos regulares de Muay Thai {daysString}. O objetivo é conectar as técnicas que você já conhece de forma mais natural.</li><li><strong>Dica Pro:</strong> O Open Mat de Sábado é perfeito para praticar cenários de defesa pessoal com parceiros de confiança.</li></ul>`
                }
            ],
            'Competição': [
                {
                    intro: "É hora de refinar a estratégia e a preparação física. Para competir neste nível, cada detalhe importa.",
                    plan: `<ul class="space-y-2"><li><strong>Foco Principal:</strong> Aulas avançadas e treinos específicos.</li><li><strong>Sugestão:</strong> Sua semana deve incluir as aulas de Jiu-Jitsu (Avançado) e os treinos de MMA e Sparring na Sexta {daysString}.</li><li><strong>Dica Pro:</strong> Grave seus treinos de sparring para analisar seus erros e acertos. A autoavaliação é a chave para a evolução de um competidor.</li></ul>`
                }
            ],
            'Condicionamento físico': [
                {
                    intro: "Seu corpo já está adaptado. Para continuar evoluindo, precisamos de novos estímulos e desafios. Prepare-se para superar seus limites.",
                    plan: `<ul class="space-y-2"><li><strong>Foco Principal:</strong> Aumentar a capacidade de trabalho (work capacity).</li><li><strong>Sugestão:</strong> Combine as aulas de Jiu-Jitsu (Avançado) com os treinos de MMA na Sexta {daysString}. A intensidade e a variedade de movimentos levarão seu condicionamento a outro patamar.</li><li><strong>Dica Pro:</strong> Foque na recuperação: sono de qualidade e boa hidratação são tão importantes quanto o treino em si.</li></ul>`
                }
            ]
        },
        'Avançado': {
            'Perda de peso': [
                {
                    intro: "Você é um atleta. Manter o peso ideal é parte do jogo. Este plano é para otimizar sua composição corporal sem sacrificar a performance.",
                    plan: `<ul class="space-y-2"><li><strong>Foco Principal:</strong> Manter a intensidade máxima nos treinos.</li><li><strong>Sugestão:</strong> Continue com os treinos de Jiu-Jitsu (Avançado) e MMA/Sparring {daysString}. Você já sabe o que funciona, a chave é a disciplina.</li><li><strong>Dica Pro:</strong> Períodos de treinos de alta intensidade (HIIT) podem ser incorporados no seu aquecimento para um impulso extra na queima de calorias.</li></ul>`
                }
            ],
            'Defesa pessoal': [
                {
                    intro: "Neste nível, a defesa pessoal se torna instintiva. O foco é manter a lâmina afiada e estar preparado para qualquer cenário.",
                    plan: `<ul class="space-y-2"><li><strong>Foco Principal:</strong> Realismo e pressão.</li><li><strong>Sugestão:</strong> Os treinos de MMA Sparring na Sexta são o ambiente mais próximo de uma situação real. Sua presença {fridayText} é fundamental.</li><li><strong>Dica Pro:</strong> Ajude os alunos mais novos. Ensinar é uma das melhores formas de solidificar seu próprio conhecimento.</li></ul>`
                }
            ],
            'Competição': [
                {
                    intro: "O topo é o seu lugar. A preparação agora é um jogo de xadrez, focada em estratégia, camp de treino e mentalidade inabalável.",
                    plan: `<ul class="space-y-2"><li><strong>Foco Principal:</strong> Estratégia e Sparring.</li><li><strong>Sugestão:</strong> Sua agenda deve ser centrada nas aulas de Jiu-Jitsu (Avançado) e, principalmente, nos treinos de MMA e Sparring de Sexta {daysString}.</li><li><strong>Dica Pro:</strong> Trabalhe com os treinadores para desenvolver um plano de jogo específico para seus pontos fortes e para os adversários que você pode encontrar.</li></ul>`
                }
            ],
            'Condicionamento físico': [
                {
                    intro: "Atletas de elite exigem preparação de elite. Seu condicionamento já é ótimo, mas sempre há uma margem para se tornar mais forte, mais rápido e mais resistente.",
                    plan: `<ul class="space-y-2"><li><strong>Foco Principal:</strong> Performance máxima e prevenção de lesões.</li><li><strong>Sugestão:</strong> A combinação de todos os treinos avançados (Jiu-Jitsu, MMA, Sparring) {daysString} é o que vai te manter no auge.</li><li><strong>Dica Pro:</strong> Incorpore trabalho de mobilidade e flexibilidade na sua rotina para garantir a longevidade no esporte.</li></ul>`
                }
            ]
        }
    },
    quotes: [
        "A dor é temporária, a glória é eterna.",
        "O tatame é o espelho da alma. Ele não mente.",
        "Disciplina é fazer o que precisa ser feito, mesmo quando você não quer.",
        "Não conte os dias, faça os dias contarem.",
        "A faixa preta é uma faixa branca que nunca desistiu.",
        "A força não vem da capacidade corporal, e sim de uma vontade indomável.",
        "O único treino ruim é aquele que não aconteceu.",
        "Respeite todos, não tema ninguém.",
        "A maior vitória é a vitória sobre si mesmo.",
        "Um campeão tem medo de perder. Todos os outros têm medo de vencer.",
        "Sorte é o que acontece quando a preparação encontra a oportunidade.",
        "O suor no dojo economiza sangue no campo de batalha.",
        "Seja mais forte que sua melhor desculpa.",
        "A técnica conquista a força bruta.",
        "Cada gota de suor é um passo a mais rumo à maestria.",
        "Não se trata de ser o melhor. Trata-se de ser melhor do que você era ontem.",
        "A mente é seu melhor músculo. Treine-a.",
        "O fracasso é apenas a oportunidade de recomeçar com mais inteligência.",
        "A persistência realiza o impossível.",
        "Um leão não se preocupa com a opinião das ovelhas.",
        "O caminho do guerreiro é a aceitação total da morte.",
        "Transforme a dor em poder.",
        "A arte de vencer se aprende nas derrotas.",
        "Quanto mais você sua no treino, menos você sangra na batalha.",
        "A cor da faixa só serve para segurar as calças. O que vale é o seu jiu-jitsu.",
        "Vença a si mesmo e vencerá o mundo.",
        "Para cada técnica, existe uma contra-técnica.",
        "O medo é uma reação. A coragem é uma decisão.",
        "O objetivo não é ser invencível, mas sim nunca desistir de lutar.",
        "Um passo de cada vez. Um round de cada vez.",
        "O corpo alcança o que a mente acredita.",
        "A repetição é a mãe da habilidade.",
        "Humildade não é pensar menos de si mesmo, é pensar menos em si mesmo.",
        "Aprenda as regras como um profissional para que possa quebrá-las como um artista.",
        "O silêncio antes do combate é onde a estratégia nasce.",
        "Não levante a sua voz, melhore os seus argumentos.",
        "Seja calmo como um lago, mas com a fúria de um dragão por dentro.",
        "Um guerreiro não desiste do que ama, ele encontra amor no que faz.",
        "A excelência não é um ato, mas um hábito.",
        "A melhor defesa é um ataque inteligente.",
        "Conheça seu inimigo e a si mesmo, e você não precisará temer o resultado de cem batalhas.",
        "O tatame ensina o que os livros não podem.",
        "A jornada de mil quilômetros começa com um único passo.",
        "A verdadeira força está em dominar sua própria mente.",
        "A diferença entre o ordinário e o extraordinário é aquele pequeno 'extra'.",
        "Não espere pela oportunidade. Crie-a.",
        "Caia sete vezes, levante-se oito.",
        "O guerreiro de sucesso é um homem comum, com um foco de laser.",
        "Sua única limitação é você mesmo.",
        "O combate é vencido antes mesmo de começar, na mente do lutador."
    ]
};

/* ============================================
   CLASSE: LOADING MANAGER
   ============================================ */
class LoadingManager {
    constructor() {
        this.loadingScreen = document.getElementById('loading-screen');
    }

    hide() {
        if (this.loadingScreen) {
            setTimeout(() => {
                this.loadingScreen.classList.add('hidden');
                setTimeout(() => {
                    this.loadingScreen.remove();
                }, 600);
            }, 800);
        }
    }
}

/* ============================================
   CLASSE: PARTICLES CANVAS
   ============================================ */
class ParticlesCanvas {
    constructor(canvasId) {
        this.canvas = document.getElementById(canvasId);
        if (!this.canvas) return;
        
        this.ctx = this.canvas.getContext('2d');
        this.particles = [];
        this.particleCount = 50;
        
        this.resize();
        this.init();
        this.animate();
        
        window.addEventListener('resize', () => this.resize());
    }

    resize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }

    init() {
        for (let i = 0; i < this.particleCount; i++) {
            this.particles.push({
                x: Math.random() * this.canvas.width,
                y: Math.random() * this.canvas.height,
                vx: (Math.random() - 0.5) * 0.5,
                vy: (Math.random() - 0.5) * 0.5,
                radius: Math.random() * 2 + 1,
                opacity: Math.random() * 0.5 + 0.2
            });
        }
    }

    animate() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        this.particles.forEach(particle => {
            particle.x += particle.vx;
            particle.y += particle.vy;
            
            if (particle.x < 0 || particle.x > this.canvas.width) particle.vx *= -1;
            if (particle.y < 0 || particle.y > this.canvas.height) particle.vy *= -1;
            
            this.ctx.beginPath();
            this.ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
            this.ctx.fillStyle = `rgba(229, 9, 20, ${particle.opacity})`;
            this.ctx.fill();
        });
        
        requestAnimationFrame(() => this.animate());
    }
}

/* ============================================
   CLASSE: NAVIGATION MANAGER
   ============================================ */
class NavigationManager {
    constructor() {
        this.mobileMenuButton = document.getElementById('mobile-menu-button');
        this.mobileMenu = document.getElementById('mobile-menu');
        this.navLinks = document.querySelectorAll('#main-nav a, #mobile-menu a');
        this.sections = document.querySelectorAll('main section');
        
        this.init();
    }

    init() {
        // Mobile Menu Toggle
        if (this.mobileMenuButton && this.mobileMenu) {
            this.mobileMenuButton.addEventListener('click', () => this.toggleMobileMenu());
        }

        // Smooth Scroll
        this.navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                const href = link.getAttribute('href');
                if (href && href.startsWith('#')) {
                    e.preventDefault();
                    const target = document.querySelector(href);
                    if (target) {
                        target.scrollIntoView({ behavior: 'smooth' });
                        if (this.mobileMenu && !this.mobileMenu.classList.contains('hidden')) {
                            this.toggleMobileMenu();
                        }
                    }
                }
            });
        });

        // ScrollSpy
        this.initScrollSpy();
    }

    toggleMobileMenu() {
        this.mobileMenu.classList.toggle('active');
        document.body.classList.toggle('scroll-lock');
    }

    initScrollSpy() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const id = entry.target.id;
                    this.navLinks.forEach(link => {
                        link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
                    });
                }
            });
        }, { rootMargin: '-50% 0px -50% 0px' });

        this.sections.forEach(section => observer.observe(section));
    }
}

/* ============================================
   CLASSE: MODAL MANAGER
   ============================================ */
class ModalManager {
    constructor() {
        this.modalTriggers = document.querySelectorAll('.modal-trigger');
        this.modals = document.querySelectorAll('.modal');
        this.modalCloses = document.querySelectorAll('.modal-close');
        
        this.init();
    }

    init() {
        this.modalTriggers.forEach(trigger => {
            trigger.addEventListener('click', () => {
                const modalId = trigger.dataset.modal;
                this.openModal(modalId);
            });
        });

        this.modalCloses.forEach(button => {
            button.addEventListener('click', (e) => {
                const modal = e.target.closest('.modal');
                this.closeModal(modal);
            });
        });

        this.modals.forEach(modal => {
            modal.addEventListener('click', (e) => {
                if (e.target === modal) this.closeModal(modal);
            });
        });

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                document.querySelectorAll('.modal.modal-active').forEach(modal => {
                    this.closeModal(modal);
                });
            }
        });
    }

    openModal(modalId) {
        const modal = document.getElementById(`modal-${modalId}`);
        if (modal) {
            modal.classList.add('modal-active');
            document.body.classList.add('scroll-lock');
        }
    }

    closeModal(modal) {
        if (modal) {
            modal.classList.remove('modal-active');
            const isAnyModalActive = Array.from(this.modals).some(m => m.classList.contains('modal-active'));
            if (!isAnyModalActive) {
                document.body.classList.remove('scroll-lock');
            }
        }
    }
}

/* ============================================
   CLASSE: TRAINING PLAN GENERATOR
   ============================================ */
class TrainingPlanGenerator {
    constructor() {
        this.form = document.getElementById('offline-plan-form');
        this.resultDiv = document.getElementById('plan-result');
        this.button = document.getElementById('generate-plan-btn');
        
        if (this.form) this.init();
    }

    init() {
        this.form.addEventListener('submit', (e) => {
            e.preventDefault();
            this.generatePlan();
        });
    }

    generatePlan() {
        this.button.disabled = true;
        this.resultDiv.innerHTML = '<div class="loader mx-auto"></div><p class="text-center mt-4 text-text-secondary">Gerando seu plano personalizado...</p>';

        const formData = new FormData(this.form);
        const level = formData.get('level');
        const goal = formData.get('goal');
        const days = formData.getAll('days');

        if (days.length === 0) {
            this.resultDiv.innerHTML = '<p class="text-red-500 text-center">⚠️ Por favor, selecione pelo menos um dia para treinar.</p>';
            this.button.disabled = false;
            return;
        }

        setTimeout(() => {
            const plan = this.getOfflinePlan(level, goal, days);
            this.resultDiv.innerHTML = plan;
            this.button.disabled = false;
        }, 1000);
    }

    getOfflinePlan(level, goal, days) {
        const daysString = days.length > 0 ? `nos seus dias disponíveis (<strong>${days.join(', ')}</strong>)` : '';
        const fridayText = days.includes('Sexta') ? '' : ' (se disponível)';
        
        const planData = CONFIG.planDatabase[level]?.[goal];
        
        if (planData && planData.length > 0) {
            const selectedPlan = planData[Math.floor(Math.random() * planData.length)];
            let finalPlan = selectedPlan.plan
                .replaceAll('{daysString}', daysString)
                .replaceAll('{fridayText}', fridayText);
            
            return `
                <div class="space-y-4">
                    <p class="text-lg text-text-primary font-semibold">${selectedPlan.intro}</p>
                    ${finalPlan}
                    <div class="mt-6 p-4 bg-surface rounded-lg border-l-4 border-color-accent">
                        <p class="text-sm text-text-secondary"><strong>💡 Lembre-se:</strong> Este plano é uma sugestão inicial. Converse com nossos instrutores para ajustes personalizados!</p>
                    </div>
                </div>
            `;
        }
        
        return `
            <div class="space-y-4">
                <p class="text-lg text-text-primary">Com base nas suas escolhas, o ideal é focar na consistência e conversar com nossos instrutores para um plano ainda mais detalhado!</p>
                <ul class="space-y-2">
                    <li class="text-text-secondary"><strong>Dica:</strong> O Open Mat de Sábado é uma excelente oportunidade para treinar livremente.</li>
                    <li class="text-text-secondary"><strong>Dias selecionados:</strong> ${days.join(', ') || 'Nenhum'}</li>
                </ul>
            </div>
        `;
    }
}

/* ============================================
   CLASSE: MOTIVATION GENERATOR
   ============================================ */
class MotivationGenerator {
    constructor() {
        this.button = document.getElementById('get-motivation-btn');
        this.contentDiv = document.getElementById('motivation-content');
        this.modalManager = null;
        
        if (this.button) this.init();
    }

    init() {
        this.button.addEventListener('click', () => this.generateMotivation());
    }

    setModalManager(modalManager) {
        this.modalManager = modalManager;
    }

    generateMotivation() {
        const randomQuote = CONFIG.quotes[Math.floor(Math.random() * CONFIG.quotes.length)];
        
        this.contentDiv.innerHTML = `
            <div class="text-center space-y-4">
                <p class="text-2xl md:text-3xl text-text-primary font-semibold">"${randomQuote}"</p>
                <p class="text-sm text-color-accent uppercase tracking-wider">- Mestre FMTC</p>
            </div>
        `;
        
        if (this.modalManager) {
            this.modalManager.openModal('motivation');
        }
    }
}

/* ============================================
   CLASSE: TILT EFFECT (3D)
   ============================================ */
class TiltEffect {
    constructor() {
        this.init();
    }

    init() {
        if (typeof VanillaTilt !== 'undefined') {
            try {
                VanillaTilt.init(document.querySelectorAll("[data-tilt]"), {
                    max: 15,
                    speed: 400,
                    glare: true,
                    "max-glare": 0.3,
                });
            } catch (e) {
                console.warn("Vanilla Tilt failed to load, but the site will continue working.", e);
            }
        }
    }
}

/* ============================================
   INICIALIZAÇÃO PRINCIPAL
   ============================================ */
document.addEventListener('DOMContentLoaded', function() {
    // Inicializar Loading Screen
    const loadingManager = new LoadingManager();
    loadingManager.hide();

    // Inicializar Partículas
    new ParticlesCanvas('particles-canvas');

    // Inicializar Navegação
    new NavigationManager();

    // Inicializar Modais
    const modalManager = new ModalManager();

    // Inicializar Gerador de Plano
    new TrainingPlanGenerator();

    // Inicializar Gerador de Motivação
    const motivationGenerator = new MotivationGenerator();
    motivationGenerator.setModalManager(modalManager);

    // Inicializar Efeito 3D
    new TiltEffect();

    // Console Easter Egg
    console.log('%c🥋 FMTC-MMA EVOLUTION 🥊', 'font-size: 20px; color: #E50914; font-weight: bold;');
    console.log('%cForje sua evolução. Torne-se lenda.', 'font-size: 14px; color: #F59E0B;');
});