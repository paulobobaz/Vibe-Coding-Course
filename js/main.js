// Dados dos módulos
const modulesData = [
    {
        id: 1,
        title: "Introdução ao Vibe Coding e IA",
        description: "Descubra a metodologia Vibe Coding e como a IA será sua aliada no desenvolvimento.",
        category: "frontend",
        duration: "1h 30min",
        status: "available"
    },
    {
        id: 2,
        title: "Fundamentos de HTML",
        description: "Aprenda a estruturar páginas web com HTML semântico e acessível.",
        category: "frontend",
        duration: "2h",
        status: "available"
    },
    {
        id: 3,
        title: "Fundamentos de CSS",
        description: "Domine estilos, layouts e responsividade com CSS moderno.",
        category: "frontend",
        duration: "2h",
        status: "available"
    },
    {
        id: 4,
        title: "Fundamentos de JavaScript",
        description: "Comece sua jornada com JavaScript: variáveis, funções e DOM.",
        category: "frontend",
        duration: "2h",
        status: "available"
    },
    {
        id: 5,
        title: "JavaScript Avançado - Eventos",
        description: "Aprenda a criar interatividade com eventos e manipulação do DOM.",
        category: "frontend",
        duration: "1h 45min",
        status: "available"
    },
    {
        id: 6,
        title: "Lógica de Programação",
        description: "Desenvolva o pensamento lógico com estruturas condicionais e loops.",
        category: "frontend",
        duration: "2h",
        status: "available"
    },
    {
        id: 7,
        title: "JavaScript Avançado - Arrays e Objetos",
        description: "Manipule dados complexos com arrays e objetos JavaScript.",
        category: "frontend",
        duration: "1h 45min",
        status: "available"
    },
    {
        id: 8,
        title: "JavaScript Avançado - Funções",
        description: "Domine funções, callbacks e programação funcional.",
        category: "frontend",
        duration: "2h",
        status: "available"
    },
    {
        id: 9,
        title: "Comunicação Assíncrona",
        description: "Aprenda fetch API, promises e async/await para requisições HTTP.",
        category: "frontend",
        duration: "1h 30min",
        status: "available"
    },
    {
        id: 10,
        title: "Introdução ao Backend",
        description: "Entenda o que é backend e como ele se conecta ao frontend.",
        category: "backend",
        duration: "1h 30min",
        status: "available"
    },
    {
        id: 11,
        title: "Backend com Express.js - Fundamentos",
        description: "Crie seu primeiro servidor web com Node.js e Express.js.",
        category: "backend",
        duration: "2h",
        status: "available"
    },
    {
        id: 12,
        title: "Backend com Express.js - Rotas e APIs",
        description: "Construa APIs RESTful com rotas, parâmetros e middleware.",
        category: "backend",
        duration: "2h",
        status: "available"
    },
    {
        id: 13,
        title: "Conectando Frontend e Backend",
        description: "Integre seu frontend com o backend através de requisições HTTP.",
        category: "backend",
        duration: "1h 45min",
        status: "available"
    },
    {
        id: 14,
        title: "Introdução a Bancos de Dados",
        description: "Conceitos fundamentais de bancos de dados relacionais e SQL.",
        category: "backend",
        duration: "1h 30min",
        status: "available"
    },
    {
        id: 15,
        title: "Integrando Banco de Dados ao Backend",
        description: "Use SQLite e Knex.js para persistir dados na sua aplicação.",
        category: "backend",
        duration: "2h",
        status: "available"
    },
    {
        id: 16,
        title: "Autenticação e Autorização",
        description: "Proteja sua API com JWT e sistemas de login seguros.",
        category: "backend",
        duration: "2h",
        status: "available"
    },
    {
        id: 17,
        title: "Autorização - Controle de Acesso",
        description: "Implemente controle de acesso baseado em papéis (RBAC).",
        category: "backend",
        duration: "1h 45min",
        status: "available"
    },
    {
        id: 18,
        title: "Frontend e Autenticação",
        description: "Gerencie tokens JWT e estados de autenticação no frontend.",
        category: "frontend",
        duration: "1h 30min",
        status: "available"
    },
    {
        id: 19,
        title: "Frontend e Autorização",
        description: "Exiba conteúdo condicionalmente baseado em permissões do usuário.",
        category: "frontend",
        duration: "1h 30min",
        status: "available"
    },
    {
        id: 20,
        title: "Boas Práticas de Código",
        description: "Refatore e otimize seu código seguindo boas práticas.",
        category: "backend",
        duration: "1h 45min",
        status: "available"
    },
    {
        id: 21,
        title: "Deploy - Conceitos e Opções",
        description: "Entenda as opções de deploy e prepare sua aplicação para produção.",
        category: "deploy",
        duration: "1h 30min",
        status: "available"
    },
    {
        id: 22,
        title: "Deploy do Frontend",
        description: "Publique seu frontend usando plataformas de hospedagem estática.",
        category: "deploy",
        duration: "1h 45min",
        status: "available"
    },
    {
        id: 23,
        title: "Deploy do Backend",
        description: "Implante seu backend usando Plataformas como Serviço (PaaS).",
        category: "deploy",
        duration: "2h",
        status: "available"
    },
    {
        id: 24,
        title: "Monitoramento e Logs",
        description: "Configure logs e monitore a saúde da sua aplicação em produção.",
        category: "deploy",
        duration: "1h 30min",
        status: "available"
    },
    {
        id: 25,
        title: "Otimização de Desempenho",
        description: "Otimize sua aplicação para melhor performance e escalabilidade.",
        category: "deploy",
        duration: "1h 45min",
        status: "available"
    },
    {
        id: 26,
        title: "Manutenção e Atualizações",
        description: "Mantenha sua aplicação atualizada e segura em produção.",
        category: "deploy",
        duration: "1h 30min",
        status: "available"
    },
    {
        id: 27,
        title: "Coleta de Feedback",
        description: "Implemente sistemas de feedback e iteração contínua.",
        category: "deploy",
        duration: "1h 30min",
        status: "available"
    },
    {
        id: 28,
        title: "Aprendizado Contínuo",
        description: "Estratégias para continuar evoluindo como desenvolvedor.",
        category: "frontend",
        duration: "1h 30min",
        status: "available"
    },
    {
        id: 29,
        title: "Preparação para Apresentação",
        description: "Prepare seu projeto para apresentação e construa seu portfólio.",
        category: "deploy",
        duration: "1h 45min",
        status: "available"
    },
    {
        id: 30,
        title: "Apresentação Final",
        description: "Apresente seu produto digital e celebre sua jornada!",
        category: "deploy",
        duration: "2h",
        status: "available"
    }
];

// Estado da aplicação
let currentFilter = 'all';
let completedModules = JSON.parse(localStorage.getItem('completedModules') || '[]');

// Inicialização
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    setupNavigation();
    renderModules();
    updateProgress();
    setupFilters();
    setupAnimations();
}

// Navegação
function setupNavigation() {
    // Smooth scroll para links internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Menu mobile toggle
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    }

    // Header scroll effect
    window.addEventListener('scroll', () => {
        const header = document.querySelector('.header');
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
}

// Renderização dos módulos
function renderModules() {
    const modulesGrid = document.getElementById('modules-grid');
    if (!modulesGrid) return;

    const filteredModules = currentFilter === 'all' 
        ? modulesData 
        : modulesData.filter(module => module.category === currentFilter);

    modulesGrid.innerHTML = filteredModules.map(module => createModuleCard(module)).join('');
}

function createModuleCard(module) {
    const isCompleted = completedModules.includes(module.id);
    const statusClass = isCompleted ? 'completed' : 'available';
    const statusText = isCompleted ? 'Concluído' : 'Disponível';
    
    return `
        <a href="modules/module-${module.id.toString().padStart(2, '0')}.html" class="module-card" data-category="${module.category}">
            <div class="module-header">
                <div class="module-number">${module.id}</div>
                <div class="module-category">${getCategoryName(module.category)}</div>
            </div>
            <h3 class="module-title">${module.title}</h3>
            <p class="module-description">${module.description}</p>
            <div class="module-meta">
                <div class="module-duration">
                    <i class="fas fa-clock"></i>
                    <span>${module.duration}</span>
                </div>
                <div class="module-status ${statusClass}">${statusText}</div>
            </div>
        </a>
    `;
}

function getCategoryName(category) {
    const categories = {
        'frontend': 'Frontend',
        'backend': 'Backend',
        'deploy': 'Deploy'
    };
    return categories[category] || category;
}

// Filtros
function setupFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            button.classList.add('active');
            
            // Update current filter
            currentFilter = button.dataset.filter;
            
            // Re-render modules
            renderModules();
        });
    });
}

// Progresso
function updateProgress() {
    const progressFill = document.querySelector('.progress-fill');
    const progressText = document.querySelector('.progress-text');
    
    if (!progressFill || !progressText) return;
    
    const totalModules = modulesData.length;
    const completedCount = completedModules.length;
    const progressPercentage = (completedCount / totalModules) * 100;
    
    progressFill.style.width = `${progressPercentage}%`;
    progressText.textContent = `${completedCount} de ${totalModules} módulos concluídos`;
}

// Animações
function setupAnimations() {
    // Intersection Observer para animações de entrada
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);

    // Observar elementos que devem ser animados
    document.querySelectorAll('.overview-card, .module-card, .principle, .timeline-item').forEach(el => {
        observer.observe(el);
    });

    // Animação do código no hero
    animateCodeWindow();
}

function animateCodeWindow() {
    const codeLines = document.querySelectorAll('.code-line');
    
    codeLines.forEach((line, index) => {
        line.style.opacity = '0';
        line.style.transform = 'translateX(-20px)';
        
        setTimeout(() => {
            line.style.transition = 'all 0.5s ease';
            line.style.opacity = '1';
            line.style.transform = 'translateX(0)';
        }, index * 300 + 1000);
    });
}

// Utilitários
function markModuleAsCompleted(moduleId) {
    if (!completedModules.includes(moduleId)) {
        completedModules.push(moduleId);
        localStorage.setItem('completedModules', JSON.stringify(completedModules));
        updateProgress();
        renderModules();
    }
}

function resetProgress() {
    completedModules = [];
    localStorage.removeItem('completedModules');
    updateProgress();
    renderModules();
}

// Exportar funções para uso global
window.VibeCoding = {
    markModuleAsCompleted,
    resetProgress,
    modulesData
};

// CSS adicional para animações
const additionalStyles = `
    .animate-in {
        animation: slideInUp 0.6s ease forwards;
    }

    @keyframes slideInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    .header.scrolled {
        background: rgba(15, 23, 42, 0.98);
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    }

    @media (max-width: 768px) {
        .nav-menu {
            position: fixed;
            top: 70px;
            left: 0;
            right: 0;
            background: var(--surface);
            flex-direction: column;
            padding: var(--spacing-lg);
            border-top: 1px solid var(--border);
            transform: translateY(-100%);
            opacity: 0;
            visibility: hidden;
            transition: all 0.3s ease;
        }

        .nav-menu.active {
            transform: translateY(0);
            opacity: 1;
            visibility: visible;
        }

        .nav-toggle.active span:nth-child(1) {
            transform: rotate(45deg) translate(5px, 5px);
        }

        .nav-toggle.active span:nth-child(2) {
            opacity: 0;
        }

        .nav-toggle.active span:nth-child(3) {
            transform: rotate(-45deg) translate(7px, -6px);
        }
    }
`;

// Adicionar estilos adicionais
const styleSheet = document.createElement('style');
styleSheet.textContent = additionalStyles;
document.head.appendChild(styleSheet);

