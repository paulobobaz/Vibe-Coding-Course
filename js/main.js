// Dados dos módulos com conteúdo embutido
const modulesData = [
    {
        id: 1,
        title: "Introdução ao Vibe Coding e IA",
        description: "Descubra a metodologia Vibe Coding e como a IA será sua aliada no desenvolvimento.",
        category: "frontend",
        duration: "1h 30min",
        objectives: [
            "Entender o que é a metodologia Vibe Coding",
            "Configurar ambiente de desenvolvimento inicial",
            "Escrever seu primeiro 'Hello, World!' com IA",
            "Compreender comunicação eficaz com IA"
        ],
        content: `
            <h1>Módulo 1: Introdução ao Vibe Coding e IA</h1>
            
            <h2>O que é Vibe Coding?</h2>
            <p>O Vibe Coding é uma abordagem de desenvolvimento que combina intuição humana com inteligência artificial. Em vez de escrever cada linha de código manualmente, você descreve suas ideias em linguagem natural e a IA auxilia na geração, correção e otimização do código.</p>
            
            <div style="background: rgba(99, 102, 241, 0.1); padding: 20px; border-radius: 10px; margin: 20px 0; border-left: 4px solid #6366f1;">
                <h3>🎯 Principais Benefícios</h3>
                <ul>
                    <li>Acelera o aprendizado de programação</li>
                    <li>Permite foco no "o quê" em vez do "como"</li>
                    <li>Reduz erros comuns de sintaxe</li>
                    <li>Facilita experimentação e iteração</li>
                </ul>
            </div>
            
            <h2>Configurando seu Ambiente</h2>
            <p>Para este curso, recomendamos usar o <strong>Replit</strong> como ambiente de desenvolvimento online:</p>
            
            <ol style="background: rgba(255, 255, 255, 0.05); padding: 20px; border-radius: 8px;">
                <li>Acesse <a href="https://replit.com" target="_blank" style="color: #6366f1;">replit.com</a> e crie uma conta gratuita</li>
                <li>Clique em "+ Create Repl" e selecione o template "HTML, CSS, JS"</li>
                <li>Nomeie como "vibe-coding-projeto"</li>
                <li>Pronto! Você tem um ambiente completo no navegador</li>
            </ol>
            
            <h2>Seu Primeiro "Hello, World!" com IA</h2>
            <p>Agora vamos criar nossa primeira página web usando a IA como assistente:</p>
            
            <div class="code-block" style="background: #1e293b; border-radius: 8px; margin: 20px 0; overflow: hidden; border: 1px solid #334155;">
                <div class="code-header" style="background: #334155; padding: 10px 15px; display: flex; justify-content: space-between; align-items: center;">
                    <span style="color: #cbd5e1; font-size: 12px; font-weight: bold;">HTML</span>
                    <button class="copy-btn" onclick="copyCode(this)" style="background: #6366f1; color: white; border: none; padding: 5px 10px; border-radius: 4px; cursor: pointer; font-size: 12px;">
                        📋 Copiar
                    </button>
                </div>
                <pre style="padding: 20px; margin: 0; overflow-x: auto; color: #f8fafc;"><code>&lt;!DOCTYPE html&gt;
&lt;html lang="pt-BR"&gt;
&lt;head&gt;
    &lt;meta charset="UTF-8"&gt;
    &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
    &lt;title&gt;Meu Primeiro Projeto Vibe Coding&lt;/title&gt;
    &lt;style&gt;
        body {
            font-family: 'Arial', sans-serif;
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            min-height: 100vh;
            color: white;
        }
        .container {
            background: rgba(255, 255, 255, 0.1);
            padding: 30px;
            border-radius: 15px;
            backdrop-filter: blur(10px);
            text-align: center;
        }
        h1 {
            font-size: 2.5em;
            margin-bottom: 20px;
            text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
        }
        .highlight {
            background: rgba(255, 255, 255, 0.2);
            padding: 15px;
            border-radius: 10px;
            border-left: 4px solid #ffeb3b;
        }
    &lt;/style&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;div class="container"&gt;
        &lt;h1&gt;🚀 Meu Primeiro Projeto Vibe Coding&lt;/h1&gt;
        &lt;p&gt;Olá, Mundo! Esta é minha primeira página criada com ajuda da IA.&lt;/p&gt;
        &lt;div class="highlight"&gt;
            &lt;p&gt;&lt;strong&gt;Vibe Coding em ação:&lt;/strong&gt; Esta página foi criada descrevendo o que eu queria em linguagem natural, e a IA me ajudou a transformar isso em código!&lt;/p&gt;
        &lt;/div&gt;
    &lt;/div&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre>
            </div>
            
            <h2>Comunicação Eficaz com IA</h2>
            <p>Para obter os melhores resultados, siga estas diretrizes:</p>
            
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 15px; margin: 20px 0;">
                <div style="background: rgba(255, 255, 255, 0.05); padding: 15px; border-radius: 8px; border-left: 3px solid #10b981;">
                    <h4 style="color: #10b981; margin-bottom: 10px;">✅ Seja Específico</h4>
                    <p style="margin: 0; color: #cbd5e1;">Em vez de "crie uma página", diga "crie uma página com título azul, parágrafo explicativo e botão verde".</p>
                </div>
                
                <div style="background: rgba(255, 255, 255, 0.05); padding: 15px; border-radius: 8px; border-left: 3px solid #f59e0b;">
                    <h4 style="color: #f59e0b; margin-bottom: 10px;">🎯 Use Contexto</h4>
                    <p style="margin: 0; color: #cbd5e1;">Explique o que você está fazendo: "Estou criando minha primeira página para o curso de Vibe Coding".</p>
                </div>
                
                <div style="background: rgba(255, 255, 255, 0.05); padding: 15px; border-radius: 8px; border-left: 3px solid #8b5cf6;">
                    <h4 style="color: #8b5cf6; margin-bottom: 10px;">🔄 Itere e Melhore</h4>
                    <p style="margin: 0; color: #cbd5e1;">Se não ficou perfeito, peça ajustes: "Pode mudar a cor para azul e centralizar o texto?".</p>
                </div>
                
                <div style="background: rgba(255, 255, 255, 0.05); padding: 15px; border-radius: 8px; border-left: 3px solid #ef4444;">
                    <h4 style="color: #ef4444; margin-bottom: 10px;">❓ Peça Explicações</h4>
                    <p style="margin: 0; color: #cbd5e1;">Sempre pergunte: "Como este código funciona?" para aprender enquanto cria.</p>
                </div>
            </div>
            
            <h2>Tarefa Prática</h2>
            <div style="background: rgba(16, 185, 129, 0.1); padding: 20px; border-radius: 10px; border-left: 4px solid #10b981;">
                <h3 style="color: #10b981;">🎯 Sua Missão</h3>
                <ol>
                    <li>Configure sua conta no Replit</li>
                    <li>Crie um projeto "HTML, CSS, JS"</li>
                    <li>Cole o código acima no arquivo index.html</li>
                    <li>Clique em "Run" para ver sua página funcionando</li>
                    <li>Modifique o texto para personalizar com suas informações</li>
                </ol>
            </div>
        `
    },
    {
        id: 2,
        title: "Fundamentos de HTML",
        description: "Aprenda a estruturar páginas web com HTML semântico e acessível.",
        category: "frontend",
        duration: "2h",
        objectives: [
            "Dominar tags HTML essenciais",
            "Criar estruturas semânticas",
            "Implementar formulários funcionais",
            "Usar HTML5 de forma correta"
        ],
        content: `
            <h1>Módulo 2: Fundamentos de HTML</h1>
            
            <h2>O que é HTML?</h2>
            <p>HTML (HyperText Markup Language) é a linguagem de marcação usada para estruturar conteúdo na web. Pense nele como o esqueleto da sua página web.</p>
            
            <div style="background: rgba(99, 102, 241, 0.1); padding: 20px; border-radius: 10px; margin: 20px 0;">
                <h3>🏗️ Analogia da Construção</h3>
                <p>Se uma página web fosse uma casa:</p>
                <ul>
                    <li><strong>HTML</strong> = Estrutura (paredes, cômodos, portas)</li>
                    <li><strong>CSS</strong> = Decoração (cores, móveis, estilo)</li>
                    <li><strong>JavaScript</strong> = Funcionalidades (eletricidade, encanamento)</li>
                </ul>
            </div>
            
            <h2>Estrutura Básica do HTML</h2>
            <div class="code-block" style="background: #1e293b; border-radius: 8px; margin: 20px 0; overflow: hidden; border: 1px solid #334155;">
                <div class="code-header" style="background: #334155; padding: 10px 15px; display: flex; justify-content: space-between; align-items: center;">
                    <span style="color: #cbd5e1; font-size: 12px; font-weight: bold;">HTML</span>
                    <button class="copy-btn" onclick="copyCode(this)" style="background: #6366f1; color: white; border: none; padding: 5px 10px; border-radius: 4px; cursor: pointer; font-size: 12px;">📋 Copiar</button>
                </div>
                <pre style="padding: 20px; margin: 0; overflow-x: auto; color: #f8fafc;"><code>&lt;!DOCTYPE html&gt;
&lt;html lang="pt-BR"&gt;
&lt;head&gt;
    &lt;meta charset="UTF-8"&gt;
    &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
    &lt;title&gt;Minha Página&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;h1&gt;Bem-vindo à minha página!&lt;/h1&gt;
    &lt;p&gt;Este é meu primeiro parágrafo.&lt;/p&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre>
            </div>
            
            <h2>Tags HTML Essenciais</h2>
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 15px; margin: 20px 0;">
                <div style="background: rgba(255, 255, 255, 0.05); padding: 15px; border-radius: 8px;">
                    <h4>&lt;h1&gt; - &lt;h6&gt;</h4>
                    <p>Títulos e subtítulos</p>
                    <code style="background: rgba(255, 255, 255, 0.1); padding: 5px; border-radius: 3px;">&lt;h1&gt;Título Principal&lt;/h1&gt;</code>
                </div>
                
                <div style="background: rgba(255, 255, 255, 0.05); padding: 15px; border-radius: 8px;">
                    <h4>&lt;p&gt;</h4>
                    <p>Parágrafos de texto</p>
                    <code style="background: rgba(255, 255, 255, 0.1); padding: 5px; border-radius: 3px;">&lt;p&gt;Este é um parágrafo.&lt;/p&gt;</code>
                </div>
                
                <div style="background: rgba(255, 255, 255, 0.05); padding: 15px; border-radius: 8px;">
                    <h4>&lt;a&gt;</h4>
                    <p>Links para outras páginas</p>
                    <code style="background: rgba(255, 255, 255, 0.1); padding: 5px; border-radius: 3px;">&lt;a href="#"&gt;Link&lt;/a&gt;</code>
                </div>
                
                <div style="background: rgba(255, 255, 255, 0.05); padding: 15px; border-radius: 8px;">
                    <h4>&lt;img&gt;</h4>
                    <p>Imagens</p>
                    <code style="background: rgba(255, 255, 255, 0.1); padding: 5px; border-radius: 3px;">&lt;img src="foto.jpg" alt="Descrição"&gt;</code>
                </div>
            </div>
            
            <h2>Tarefa Prática</h2>
            <div style="background: rgba(16, 185, 129, 0.1); padding: 20px; border-radius: 10px; border-left: 4px solid #10b981;">
                <h3 style="color: #10b981;">🎯 Crie sua Página de Apresentação</h3>
                <p>Use a IA para criar uma página pessoal que contenha:</p>
                <ul>
                    <li>Header com seu nome e navegação</li>
                    <li>Seção "Sobre Mim" com sua foto e descrição</li>
                    <li>Seção "Objetivos" com uma lista de suas metas</li>
                    <li>Footer com informações adicionais</li>
                </ul>
            </div>
        `
    },
    {
        id: 3,
        title: "Fundamentos de CSS",
        description: "Domine estilos, layouts e responsividade com CSS moderno.",
        category: "frontend",
        duration: "2h",
        objectives: [
            "Aplicar estilos CSS básicos",
            "Trabalhar com seletores e propriedades", 
            "Criar layouts responsivos",
            "Usar Flexbox e Grid"
        ],
        content: `
            <h1>Módulo 3: Fundamentos de CSS</h1>
            
            <h2>O que é CSS?</h2>
            <p>CSS (Cascading Style Sheets) é a linguagem usada para estilizar páginas HTML. Enquanto HTML define a estrutura, CSS define a aparência.</p>
            
            <h2>Seletores CSS</h2>
            <div class="code-block" style="background: #1e293b; border-radius: 8px; margin: 20px 0; overflow: hidden; border: 1px solid #334155;">
                <div class="code-header" style="background: #334155; padding: 10px 15px; display: flex; justify-content: space-between; align-items: center;">
                    <span style="color: #cbd5e1; font-size: 12px; font-weight: bold;">CSS</span>
                    <button class="copy-btn" onclick="copyCode(this)" style="background: #6366f1; color: white; border: none; padding: 5px 10px; border-radius: 4px; cursor: pointer; font-size: 12px;">📋 Copiar</button>
                </div>
                <pre style="padding: 20px; margin: 0; overflow-x: auto; color: #f8fafc;"><code>/* Seletor de Elemento */
p { color: red; }

/* Seletor de Classe */
.destaque { color: blue; }

/* Seletor de ID */
#titulo { color: green; }

/* Seletor Descendente */
div p { color: orange; }</code></pre>
            </div>
            
            <h2>Flexbox - Layout Moderno</h2>
            <p>Flexbox é uma ferramenta poderosa para criar layouts flexíveis e responsivos.</p>
            
            <div class="code-block" style="background: #1e293b; border-radius: 8px; margin: 20px 0; overflow: hidden; border: 1px solid #334155;">
                <div class="code-header" style="background: #334155; padding: 10px 15px; display: flex; justify-content: space-between; align-items: center;">
                    <span style="color: #cbd5e1; font-size: 12px; font-weight: bold;">CSS</span>
                    <button class="copy-btn" onclick="copyCode(this)" style="background: #6366f1; color: white; border: none; padding: 5px 10px; border-radius: 4px; cursor: pointer; font-size: 12px;">📋 Copiar</button>
                </div>
                <pre style="padding: 20px; margin: 0; overflow-x: auto; color: #f8fafc;"><code>/* Container flexível */
.container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
}

/* Card responsivo */
.card {
    background: #f8f9fa;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    flex: 1;
}

/* Responsividade */
@media (max-width: 768px) {
    .container {
        flex-direction: column;
    }
}</code></pre>
            </div>
            
            <h2>Tarefa Prática</h2>
            <div style="background: rgba(16, 185, 129, 0.1); padding: 20px; border-radius: 10px; border-left: 4px solid #10b981;">
                <h3 style="color: #10b981;">🎯 Estilize sua Página</h3>
                <p>Pegue a página HTML do módulo anterior e adicione CSS para:</p>
                <ul>
                    <li>Definir cores e tipografia</li>
                    <li>Criar um layout com Flexbox</li>
                    <li>Adicionar efeitos hover nos botões</li>
                    <li>Tornar a página responsiva</li>
                </ul>
            </div>
        `
    }
];

// Estado da aplicação
let currentModuleId = null;
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
}

function setupNavigation() {
    // Smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

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
        <div class="module-card" data-category="${module.category}" onclick="startModule(${module.id})">
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
        </div>
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

function setupFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            currentFilter = button.dataset.filter;
            renderModules();
        });
    });
}

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

function startModule(moduleId) {
    currentModuleId = moduleId;
    const module = modulesData.find(m => m.id === moduleId);
    
    if (!module) return;
    
    // Esconder seções do curso
    document.querySelectorAll('.hero, .overview, .modules, .methodology, .cta').forEach(section => {
        section.style.display = 'none';
    });
    
    // Mostrar seção do módulo
    const moduleSection = document.getElementById('module-content');
    moduleSection.classList.remove('hidden');
    
    // Carregar conteúdo do módulo
    loadModuleContent(module);
    
    // Scroll para o topo
    window.scrollTo(0, 0);
}

function loadModuleContent(module) {
    // Atualizar header do módulo
    document.getElementById('current-module-number').textContent = `Módulo ${module.id}`;
    document.getElementById('current-module-duration').innerHTML = `<i class="fas fa-clock"></i> ${module.duration}`;
    
    // Carregar conteúdo
    document.getElementById('module-content-area').innerHTML = module.content;
    
    // Criar TOC
    createTOC(module);
    
    // Criar checkpoints
    createCheckpoints(module);
    
    // Atualizar navegação
    updateModuleNavigation(module);
}

function createTOC(module) {
    const tocList = document.getElementById('module-toc');
    const contentArea = document.getElementById('module-content-area');
    const headings = contentArea.querySelectorAll('h2');
    
    tocList.innerHTML = '';
    
    headings.forEach((heading, index) => {
        const id = `section-${index}`;
        heading.id = id;
        
        const li = document.createElement('li');
        li.innerHTML = `<a href="#${id}" class="toc-link">${heading.textContent}</a>`;
        tocList.appendChild(li);
    });
}

function createCheckpoints(module) {
    const checkpointsList = document.getElementById('checkpoints-list');
    checkpointsList.innerHTML = '';
    
    if (module.objectives) {
        module.objectives.forEach((objective, index) => {
            const div = document.createElement('div');
            div.className = 'checkpoint-item';
            div.innerHTML = `
                <input type="checkbox" id="checkpoint-${index}" class="checkpoint-input">
                <label for="checkpoint-${index}" class="checkpoint-label">${objective}</label>
            `;
            checkpointsList.appendChild(div);
        });
        
        // Adicionar event listeners
        checkpointsList.querySelectorAll('.checkpoint-input').forEach(checkbox => {
            checkbox.addEventListener('change', updateModuleProgress);
        });
    }
}

function updateModuleNavigation(module) {
    const prevBtn = document.getElementById('prev-module');
    const nextBtn = document.getElementById('next-module');
    
    if (module.id === 1) {
        prevBtn.style.display = 'none';
    } else {
        prevBtn.style.display = 'flex';
    }
    
    if (module.id === modulesData.length) {
        nextBtn.innerHTML = '<i class="fas fa-trophy"></i> Parabéns! Módulos Concluídos!';
        nextBtn.className = 'btn btn-success';
    } else {
        nextBtn.innerHTML = 'Próximo Módulo <i class="fas fa-chevron-right"></i>';
        nextBtn.className = 'btn btn-primary';
    }
}

function updateModuleProgress() {
    const checkboxes = document.querySelectorAll('.checkpoint-input');
    const completed = document.querySelectorAll('.checkpoint-input:checked').length;
    const total = checkboxes.length;
    
    const progress = total > 0 ? (completed / total) * 100 : 0;
    
    const progressText = document.querySelector('.progress-circle .progress-text');
    if (progressText) {
        progressText.textContent = `${Math.round(progress)}%`;
    }
}

function goToPrevModule() {
    if (currentModuleId > 1) {
        startModule(currentModuleId - 1);
    }
}

function goToNextModule() {
    if (currentModuleId < modulesData.length) {
        startModule(currentModuleId + 1);
    } else {
        alert('🎉 Parabéns! Você completou todos os módulos disponíveis!');
    }
}

function showCourseHome() {
    document.getElementById('module-content').classList.add('hidden');
    document.querySelectorAll('.hero, .overview, .modules, .methodology, .cta').forEach(section => {
        section.style.display = '';
    });
    currentModuleId = null;
    
    // Scroll para módulos
    setTimeout(() => {
        document.getElementById('modules').scrollIntoView({ behavior: 'smooth' });
    }, 100);
}

function completeModule() {
    if (!currentModuleId) return;
    
    // Marcar todos os checkpoints
    document.querySelectorAll('.checkpoint-input').forEach(cb => {
        cb.checked = true;
    });
    
    updateModuleProgress();
    
    if (!completedModules.includes(currentModuleId)) {
        completedModules.push(currentModuleId);
        localStorage.setItem('completedModules', JSON.stringify(completedModules));
    }
    
    const button = document.querySelector('.complete-module');
    if (button) {
        button.innerHTML = '<i class="fas fa-check"></i> Concluído!';
        button.className = 'btn btn-success complete-module';
        button.disabled = true;
    }
    
    updateProgress();
    
    // Mostrar mensagem de sucesso
    alert(`🎉 Parabéns! Você concluiu o Módulo ${currentModuleId}!`);
}

function copyCode(button) {
    const codeBlock = button.closest('.code-block');
    const code = codeBlock.querySelector('pre code').textContent;
    
    navigator.clipboard.writeText(code).then(() => {
        const originalText = button.innerHTML;
        button.innerHTML = '✅ Copiado!';
        button.style.background = '#10b981';
        
        setTimeout(() => {
            button.innerHTML = originalText;
            button.style.background = '#6366f1';
        }, 2000);
    }).catch(err => {
        console.error('Erro ao copiar código:', err);
        alert('Erro ao copiar código. Tente selecionar manualmente.');
    });
}

// Exportar funções globais
window.startModule = startModule;
window.goToPrevModule = goToPrevModule;
window.goToNextModule = goToNextModule;
window.showCourseHome = showCourseHome;
window.completeModule = completeModule;
window.copyCode = copyCode;