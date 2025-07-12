// Sistema de template para módulos
class ModuleRenderer {
    constructor() {
        this.currentModule = null;
        this.moduleData = null;
        this.checkpoints = [];
        this.progress = 0;
    }

    async init() {
        await this.loadModuleData();
        this.renderModule();
        this.setupInteractivity();
        this.updateProgress();
    }

    async loadModuleData() {
        // Extrair número do módulo da URL
        const urlPath = window.location.pathname;
        const moduleMatch = urlPath.match(/module-(\d+)/);
        
        if (!moduleMatch) {
            console.error('Número do módulo não encontrado na URL');
            return;
        }

        this.currentModule = parseInt(moduleMatch[1]);
        
        try {
            // Carregar conteúdo do módulo
            const response = await fetch(`module-${this.currentModule.toString().padStart(2, '0')}.md`);
            const markdownContent = await response.text();
            
            // Converter Markdown para HTML
            this.moduleData = this.parseMarkdown(markdownContent);
            
        } catch (error) {
            console.error('Erro ao carregar módulo:', error);
            this.showError();
        }
    }

    parseMarkdown(markdown) {
        // Parser simples de Markdown para HTML
        let html = markdown;
        
        // Headers
        html = html.replace(/^# (.+)$/gm, '<h1 class="module-main-title">$1</h1>');
        html = html.replace(/^## (.+)$/gm, '<h2 class="section-title">$1</h2>');
        html = html.replace(/^### (.+)$/gm, '<h3 class="subsection-title">$1</h3>');
        html = html.replace(/^#### (.+)$/gm, '<h4 class="sub-title">$1</h4>');
        
        // Bold e Italic
        html = html.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
        html = html.replace(/\*(.+?)\*/g, '<em>$1</em>');
        
        // Code blocks
        html = html.replace(/```(\w+)?\n([\s\S]*?)```/g, (match, lang, code) => {
            return `<div class="code-block">
                <div class="code-header">
                    <span class="code-lang">${lang || 'code'}</span>
                    <button class="copy-btn" onclick="copyCode(this)">
                        <i class="fas fa-copy"></i> Copiar
                    </button>
                </div>
                <pre><code class="language-${lang || 'text'}">${code.trim()}</code></pre>
            </div>`;
        });
        
        // Inline code
        html = html.replace(/`([^`]+)`/g, '<code class="inline-code">$1</code>');
        
        // Links
        html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener">$1 <i class="fas fa-external-link-alt"></i></a>');
        
        // Lists
        html = html.replace(/^\*   (.+)$/gm, '<li class="list-item">$1</li>');
        html = html.replace(/^(\*   .+\n)+/gm, (match) => {
            return '<ul class="task-list">' + match + '</ul>';
        });
        
        // Paragraphs
        html = html.replace(/^(?!<[h1-6]|<ul|<li|<div|<pre)(.+)$/gm, '<p>$1</p>');
        
        // Extrair seções especiais
        const sections = this.extractSections(html);
        
        return {
            title: this.extractTitle(markdown),
            content: html,
            sections: sections,
            duration: this.extractDuration(markdown),
            objectives: this.extractObjectives(markdown)
        };
    }

    extractTitle(markdown) {
        const titleMatch = markdown.match(/^# (.+)$/m);
        return titleMatch ? titleMatch[1] : `Módulo ${this.currentModule}`;
    }

    extractDuration(markdown) {
        const durationMatch = markdown.match(/\*\*Tempo Estimado:\*\* (.+)/);
        return durationMatch ? durationMatch[1] : '1-2 horas';
    }

    extractObjectives(markdown) {
        const objectivesSection = markdown.match(/## Objetivos do Dia\n\n([\s\S]*?)(?=\n## )/);
        if (!objectivesSection) return [];
        
        const objectives = objectivesSection[1].match(/\*   (.+)/g);
        return objectives ? objectives.map(obj => obj.replace(/\*   /, '')) : [];
    }

    extractSections(html) {
        const sections = [];
        const sectionRegex = /<h2 class="section-title">(.+?)<\/h2>/g;
        let match;
        
        while ((match = sectionRegex.exec(html)) !== null) {
            sections.push({
                title: match[1],
                id: this.slugify(match[1])
            });
        }
        
        return sections;
    }

    slugify(text) {
        return text.toLowerCase()
            .replace(/[^\w\s-]/g, '')
            .replace(/[\s_-]+/g, '-')
            .replace(/^-+|-+$/g, '');
    }

    renderModule() {
        if (!this.moduleData) return;

        const container = document.getElementById('module-content');
        if (!container) return;

        container.innerHTML = `
            <div class="module-header">
                <div class="module-nav">
                    <a href="../index.html" class="nav-back">
                        <i class="fas fa-arrow-left"></i>
                        Voltar ao Curso
                    </a>
                    <div class="module-info">
                        <span class="module-number">Módulo ${this.currentModule}</span>
                        <span class="module-duration">
                            <i class="fas fa-clock"></i>
                            ${this.moduleData.duration}
                        </span>
                    </div>
                </div>
                
                <h1 class="module-title">${this.moduleData.title}</h1>
                
                ${this.moduleData.objectives.length > 0 ? `
                    <div class="module-objectives">
                        <h3>Objetivos do Dia</h3>
                        <ul class="objectives-list">
                            ${this.moduleData.objectives.map(obj => `<li>${obj}</li>`).join('')}
                        </ul>
                    </div>
                ` : ''}
            </div>

            <div class="module-body">
                <div class="module-sidebar">
                    <div class="module-toc">
                        <h4>Conteúdo</h4>
                        <ul class="toc-list">
                            ${this.moduleData.sections.map(section => `
                                <li><a href="#${section.id}" class="toc-link">${section.title}</a></li>
                            `).join('')}
                        </ul>
                    </div>
                    
                    <div class="module-progress-sidebar">
                        <h4>Progresso</h4>
                        <div class="progress-circle">
                            <svg class="progress-ring" width="60" height="60">
                                <circle class="progress-ring-circle" stroke="#334155" stroke-width="4" fill="transparent" r="26" cx="30" cy="30"/>
                                <circle class="progress-ring-progress" stroke="#6366f1" stroke-width="4" fill="transparent" r="26" cx="30" cy="30"/>
                            </svg>
                            <span class="progress-text">0%</span>
                        </div>
                        <div class="checkpoints-list">
                            <!-- Checkpoints serão adicionados dinamicamente -->
                        </div>
                    </div>
                </div>

                <div class="module-main">
                    <div class="module-content-area">
                        ${this.moduleData.content}
                    </div>
                    
                    <div class="module-actions">
                        <div class="checkpoint-section">
                            <h3>Checkpoint do Módulo</h3>
                            <p>Marque como concluído quando terminar todas as atividades:</p>
                            <button class="btn btn-primary complete-module" onclick="completeModule()">
                                <i class="fas fa-check"></i>
                                Marcar como Concluído
                            </button>
                        </div>
                        
                        <div class="module-navigation">
                            ${this.currentModule > 1 ? `
                                <a href="module-${(this.currentModule - 1).toString().padStart(2, '0')}.html" class="btn btn-secondary">
                                    <i class="fas fa-chevron-left"></i>
                                    Módulo Anterior
                                </a>
                            ` : ''}
                            
                            ${this.currentModule < 30 ? `
                                <a href="module-${(this.currentModule + 1).toString().padStart(2, '0')}.html" class="btn btn-primary">
                                    Próximo Módulo
                                    <i class="fas fa-chevron-right"></i>
                                </a>
                            ` : `
                                <a href="../index.html" class="btn btn-success">
                                    <i class="fas fa-trophy"></i>
                                    Curso Concluído!
                                </a>
                            `}
                        </div>
                    </div>
                </div>
            </div>
        `;

        // Adicionar IDs às seções para navegação
        this.addSectionIds();
    }

    addSectionIds() {
        const sectionTitles = document.querySelectorAll('.section-title');
        sectionTitles.forEach(title => {
            const id = this.slugify(title.textContent);
            title.id = id;
        });
    }

    setupInteractivity() {
        this.setupScrollSpy();
        this.setupCheckpoints();
        this.setupCodeCopy();
        this.loadModuleProgress();
    }

    setupScrollSpy() {
        const tocLinks = document.querySelectorAll('.toc-link');
        const sections = document.querySelectorAll('.section-title');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const id = entry.target.id;
                    tocLinks.forEach(link => {
                        link.classList.remove('active');
                        if (link.getAttribute('href') === `#${id}`) {
                            link.classList.add('active');
                        }
                    });
                }
            });
        }, { threshold: 0.5 });

        sections.forEach(section => observer.observe(section));
    }

    setupCheckpoints() {
        // Criar checkpoints baseados nas seções
        const checkpointsList = document.querySelector('.checkpoints-list');
        if (!checkpointsList) return;

        this.moduleData.sections.forEach((section, index) => {
            const checkpoint = document.createElement('div');
            checkpoint.className = 'checkpoint-item';
            checkpoint.innerHTML = `
                <input type="checkbox" id="checkpoint-${index}" class="checkpoint-input">
                <label for="checkpoint-${index}" class="checkpoint-label">${section.title}</label>
            `;
            checkpointsList.appendChild(checkpoint);
        });

        // Event listeners para checkpoints
        document.querySelectorAll('.checkpoint-input').forEach(checkbox => {
            checkbox.addEventListener('change', () => {
                this.updateProgress();
                this.saveProgress();
            });
        });
    }

    setupCodeCopy() {
        // Função global para copiar código
        window.copyCode = async (button) => {
            try {
                const codeBlock = button.closest('.code-block');
                const code = codeBlock.querySelector('code').textContent;
                
                // Tentar usar a API moderna do clipboard
                if (navigator.clipboard && window.isSecureContext) {
                    await navigator.clipboard.writeText(code);
                } else {
                    // Fallback para navegadores mais antigos
                    const textArea = document.createElement('textarea');
                    textArea.value = code;
                    textArea.style.position = 'fixed';
                    textArea.style.left = '-999999px';
                    textArea.style.top = '-999999px';
                    document.body.appendChild(textArea);
                    textArea.focus();
                    textArea.select();
                    document.execCommand('copy');
                    textArea.remove();
                }
                
                // Feedback visual
                const originalText = button.innerHTML;
                button.innerHTML = '<i class="fas fa-check"></i> Copiado!';
                button.classList.add('copied');
                
                setTimeout(() => {
                    button.innerHTML = originalText;
                    button.classList.remove('copied');
                }, 2000);
                
            } catch (error) {
                console.error('Erro ao copiar código:', error);
                
                // Feedback de erro
                const originalText = button.innerHTML;
                button.innerHTML = '<i class="fas fa-exclamation"></i> Erro';
                button.classList.add('error');
                
                setTimeout(() => {
                    button.innerHTML = originalText;
                    button.classList.remove('error');
                }, 2000);
            }
        };
    }

    updateProgress() {
        const checkboxes = document.querySelectorAll('.checkpoint-input');
        const completed = document.querySelectorAll('.checkpoint-input:checked').length;
        const total = checkboxes.length;
        
        this.progress = total > 0 ? (completed / total) * 100 : 0;
        
        // Atualizar círculo de progresso
        const progressRing = document.querySelector('.progress-ring-progress');
        const progressText = document.querySelector('.progress-text');
        
        if (progressRing && progressText) {
            const circumference = 2 * Math.PI * 26;
            const offset = circumference - (this.progress / 100) * circumference;
            
            progressRing.style.strokeDasharray = circumference;
            progressRing.style.strokeDashoffset = offset;
            progressText.textContent = `${Math.round(this.progress)}%`;
        }
    }

    saveProgress() {
        const checkboxes = document.querySelectorAll('.checkpoint-input');
        const progress = Array.from(checkboxes).map(cb => cb.checked);
        
        localStorage.setItem(`module-${this.currentModule}-progress`, JSON.stringify(progress));
    }

    loadModuleProgress() {
        const saved = localStorage.getItem(`module-${this.currentModule}-progress`);
        if (!saved) return;
        
        try {
            const progress = JSON.parse(saved);
            const checkboxes = document.querySelectorAll('.checkpoint-input');
            
            progress.forEach((checked, index) => {
                if (checkboxes[index]) {
                    checkboxes[index].checked = checked;
                }
            });
            
            this.updateProgress();
        } catch (error) {
            console.error('Erro ao carregar progresso:', error);
        }
    }

    showError() {
        const container = document.getElementById('module-content');
        if (container) {
            container.innerHTML = `
                <div class="error-message">
                    <h2>Erro ao Carregar Módulo</h2>
                    <p>Não foi possível carregar o conteúdo deste módulo.</p>
                    <a href="../index.html" class="btn btn-primary">Voltar ao Curso</a>
                </div>
            `;
        }
    }
}

// Função global para marcar módulo como concluído
window.completeModule = () => {
    const moduleRenderer = window.moduleRenderer;
    if (!moduleRenderer) return;
    
    // Marcar todos os checkpoints
    const checkboxes = document.querySelectorAll('.checkpoint-input');
    checkboxes.forEach(cb => cb.checked = true);
    
    // Atualizar progresso
    moduleRenderer.updateProgress();
    moduleRenderer.saveProgress();
    
    // Marcar módulo como concluído no sistema principal
    if (window.parent && window.parent.VibeCoding) {
        window.parent.VibeCoding.markModuleAsCompleted(moduleRenderer.currentModule);
    }
    
    // Feedback visual
    const button = document.querySelector('.complete-module');
    if (button) {
        button.innerHTML = '<i class="fas fa-check"></i> Concluído!';
        button.classList.add('completed');
        button.disabled = true;
    }
    
    // Mostrar celebração
    showCelebration();
};

function showCelebration() {
    // Criar overlay de celebração
    const celebration = document.createElement('div');
    celebration.className = 'celebration-overlay';
    celebration.innerHTML = `
        <div class="celebration-content">
            <div class="celebration-icon">
                <i class="fas fa-trophy"></i>
            </div>
            <h2>Parabéns!</h2>
            <p>Você concluiu este módulo com sucesso!</p>
            <div class="celebration-actions">
                <button onclick="closeCelebration()" class="btn btn-secondary">Continuar</button>
            </div>
        </div>
    `;
    
    document.body.appendChild(celebration);
    
    // Animação de entrada
    setTimeout(() => {
        celebration.classList.add('show');
    }, 100);
}

window.closeCelebration = () => {
    const celebration = document.querySelector('.celebration-overlay');
    if (celebration) {
        celebration.classList.remove('show');
        setTimeout(() => {
            celebration.remove();
        }, 300);
    }
};

// Inicializar quando a página carregar
document.addEventListener('DOMContentLoaded', () => {
    window.moduleRenderer = new ModuleRenderer();
    window.moduleRenderer.init();
});

