// ===== SISTEMA DE INTERNACIONALIZAÇÃO (i18n) =====

// Configurações de idiomas
const i18n = {
    // Idioma atual
    currentLang: 'pt',
    
    // Traduções
    translations: {
        pt: {
            // Meta tags
            meta: {
                title: 'Portfólio Cyberpunk - Desenvolvedor Front-End',
                description: 'Portfólio pessoal de desenvolvedor front-end com temática cyberpunk',
                keywords: 'front-end, developer, cyberpunk, portfolio, web development'
            },
            
            // Navegação
            nav: {
                home: 'Home',
                about: 'Sobre',
                projects: 'Projetos',
                skills: 'Habilidades',
                contact: 'Contato'
            },
            
            // Hero Section
            hero: {
                title: 'Matheus Cardoso',
                subtitle: [
                    'Desenvolvedor Full-Stack',
                    'Entusiasta de Tecnologia',
                    'Criador de Experiências Digitais'
                ],
                description: 'Transformando ideias em experiências digitais imersivas',
                buttons: {
                    contact: 'Vamos Conversar',
                    download: 'Download CV'
                }
            },
            
            // Sobre
            about: {
                title: 'Sobre Mim',
                subtitle: 'Quem sou eu',
                text1: 'Sou um desenvolvedor FullStack com foco em front-end, especializado na criação de interfaces web modernas, responsivas e centradas na experiência do usuário. No back-end, possuo experiência com Java e Node.js, desenvolvendo soluções robustas e integradas com APIs REST e bancos de dados PostgreSQL. Com conhecimentos em tecnologias como ReactJS, JavaScript e Bootstrap, transformo ideias criativas em aplicações funcionais e de alto desempenho.',
                text2: 'Minha jornada no desenvolvimento web começou há mais de 3 anos, e desde então tenho trabalhado em projetos desafiadores que me permitiram aprimorar minhas habilidades técnicas e criativas.',
                stats: {
                    projects: 'Projetos Concluídos',
                    experience: 'Anos de Experiência',
                    satisfaction: 'Satisfação do Cliente'
                }
            },
            
            // Projetos
            projects: {
                title: 'Projetos',
                subtitle: 'Meus trabalhos recentes',
                project1: {
                    title: 'E-commerce Cyberpunk',
                    description: 'Plataforma de e-commerce com design cyberpunk, integração de pagamentos e sistema de gestão.',
                    tech: ['React', 'Node.js', 'MongoDB']
                },
                project2: {
                    title: 'Dashboard Analytics',
                    description: 'Dashboard interativo com visualizações de dados em tempo real e gráficos animados.',
                    tech: ['Vue.js', 'D3.js', 'Firebase']
                },
                project3: {
                    title: 'Game Interface',
                    description: 'Interface de jogo com elementos cyberpunk, animações fluidas e sistema de pontuação.',
                    tech: ['JavaScript', 'Canvas API', 'WebGL']
                }
            },
            
            // Habilidades
            skills: {
                title: 'Habilidades Técnicas',
                subtitle: 'Minhas competências',
                frontend: 'Frontend',
                backend: 'Backend',
                tools: 'Ferramentas & Outros',
                frontendDesc: 'Desenvolvimento de interfaces modernas e responsivas',
                backendDesc: 'Consumo de API\'s e sistemas robustos',
                toolsDesc: 'Ferramentas essenciais para desenvolvimento',
                skillLevels: {
                    advanced: 'Avançado',
                    intermediate: 'Intermediário',
                    beginner: 'Iniciante'
                },
                technologies: '4 Tecnologias',
                tools: '4 Ferramentas',
                skillNames: {
                    html: 'HTML5 & CSS3',
                    js: 'JavaScript (ES6+)',
                    react: 'React.js',
                    vue: 'Vue.js',
                    java: 'Java',
                    postgresql: 'PostgreSQL',
                    postman: 'Postman',
                    git: 'Git & GitHub',
                    bootstrap: 'Bootstrap',
                    gsap: 'GSAP',
                    figma: 'Figma'
                }
            },
            
            // Contato
            contact: {
                title: 'Contato',
                subtitle: 'Vamos trabalhar juntos',
                info: {
                    title: 'Informações de Contato',
                    description: 'Estou sempre aberto a novas oportunidades e projetos interessantes. Entre em contato comigo para discutirmos como posso ajudar no seu projeto.',
                    email: 'Email',
                    linkedin: 'LinkedIn',
                    location: 'Localização',
                    locationValue: 'João Pessoa, Brasil'
                },
                action: {
                    title: 'Vamos Conversar!',
                    description: 'Pronto para transformar suas ideias em realidade? Entre em contato e vamos criar algo incrível juntos!',
                    button: 'Iniciar Conversa no WhatsApp'
                },
                features: {
                    fast: {
                        title: 'Resposta Rápida',
                        description: 'Resposta em até 2 horas'
                    },
                    chat: {
                        title: 'Conversa Direta',
                        description: 'Comunicação instantânea'
                    },
                    secure: {
                        title: '100% Seguro',
                        description: 'Conversa privada e segura'
                    }
                },
                availability: {
                    status: 'Disponível para projetos',
                    time: 'Segunda a Sexta • 9h às 18h'
                },
                infoAvailability: {
                    status: 'Perfil Ativo',
                    time: 'Sempre conectado • Resposta rápida'
                }
            },
            
            // Footer
            footer: {
                copyright: 'Todos os direitos reservados.',
                backToTop: 'Voltar ao topo'
            },
            
            // Loader
            loader: {
                messages: [
                    'Inicializando sistema...',
                    'Carregando módulos...',
                    'Conectando à rede...',
                    'Sistema pronto!'
                ]
            }
        },
        
        en: {
            // Meta tags
            meta: {
                title: 'Cyberpunk Portfolio - Front-End Developer',
                description: 'Personal portfolio of front-end developer with cyberpunk theme',
                keywords: 'front-end, developer, cyberpunk, portfolio, web development'
            },
            
            // Navegação
            nav: {
                home: 'Home',
                about: 'About',
                projects: 'Projects',
                skills: 'Skills',
                contact: 'Contact'
            },
            
            // Hero Section
            hero: {
                title: 'Matheus Cardoso',
                subtitle: [
                    'Full-Stack Developer',
                    'Technology Enthusiast',
                    'Digital Experience Creator'
                ],
                description: 'Transforming ideas into immersive digital experiences',
                buttons: {
                    contact: "Let's Talk",
                    download: 'Download CV'
                }
            },
            
            // Sobre
            about: {
                title: 'About Me',
                subtitle: 'Who I am',
                text1: 'I am a front-end developer passionate about creating unique and innovative digital experiences. With expertise in modern technologies, I transform creative concepts into functional and responsive interfaces that captivate users.',
                text2: 'My journey in web development began over 3 years ago, and since then I have worked on challenging projects that have allowed me to enhance my technical and creative skills.',
                stats: {
                    projects: 'Completed Projects',
                    experience: 'Years of Experience',
                    satisfaction: 'Client Satisfaction'
                }
            },
            
            // Projetos
            projects: {
                title: 'Projects',
                subtitle: 'My recent work',
                project1: {
                    title: 'Cyberpunk E-commerce',
                    description: 'E-commerce platform with cyberpunk design, payment integration and management system.',
                    tech: ['React', 'Node.js', 'MongoDB']
                },
                project2: {
                    title: 'Analytics Dashboard',
                    description: 'Interactive dashboard with real-time data visualizations and animated charts.',
                    tech: ['Vue.js', 'D3.js', 'Firebase']
                },
                project3: {
                    title: 'Game Interface',
                    description: 'Game interface with cyberpunk elements, fluid animations and scoring system.',
                    tech: ['JavaScript', 'Canvas API', 'WebGL']
                }
            },
            
            // Habilidades
            skills: {
                title: 'Technical Skills',
                subtitle: 'My competencies',
                frontend: 'Frontend',
                backend: 'Backend',
                tools: 'Tools & Others',
                frontendDesc: 'Development of modern and responsive interfaces',
                backendDesc: 'API consumption and robust systems',
                toolsDesc: 'Essential development tools',
                skillLevels: {
                    advanced: 'Advanced',
                    intermediate: 'Intermediate',
                    beginner: 'Beginner'
                },
                technologies: 'Technologies',
                skillNames: {
                    html: 'HTML5 & CSS3',
                    js: 'JavaScript (ES6+)',
                    react: 'React.js',
                    vue: 'Vue.js',
                    java: 'Java',
                    postgresql: 'PostgreSQL',
                    postman: 'Postman',
                    git: 'Git & GitHub',
                    bootstrap: 'Bootstrap',
                    gsap: 'GSAP',
                    figma: 'Figma'
                }
            },
            
            // Contato
            contact: {
                title: 'Contact',
                subtitle: "Let's work together",
                info: {
                    title: 'Contact Information',
                    description: 'I am always open to new opportunities and interesting projects. Contact me to discuss how I can help with your project.',
                    email: 'Email',
                    linkedin: 'LinkedIn',
                    location: 'Location',
                    locationValue: 'João Pessoa, Brazil'
                },
                action: {
                    title: "Let's Talk!",
                    description: 'Ready to turn your ideas into reality? Get in touch and let\'s create something amazing together!',
                    button: 'Start WhatsApp Conversation'
                },
                features: {
                    fast: {
                        title: 'Fast Response',
                        description: 'Response within 2 hours'
                    },
                    chat: {
                        title: 'Direct Chat',
                        description: 'Instant communication'
                    },
                    secure: {
                        title: '100% Secure',
                        description: 'Private and secure conversation'
                    }
                },
                availability: {
                    status: 'Available for projects',
                    time: 'Monday to Friday • 9am to 6pm'
                },
                infoAvailability: {
                    status: 'Active Profile',
                    time: 'Always connected • Quick response'
                }
            },
            
            // Footer
            footer: {
                copyright: 'All rights reserved.',
                backToTop: 'Back to top'
            },
            
            // Loader
            loader: {
                messages: [
                    'Initializing system...',
                    'Loading modules...',
                    'Connecting to network...',
                    'System ready!'
                ]
            }
        },
        
        fr: {
            // Meta tags
            meta: {
                title: 'Portfolio Cyberpunk - Développeur Front-End',
                description: 'Portfolio personnel de développeur front-end avec thème cyberpunk',
                keywords: 'front-end, développeur, cyberpunk, portfolio, développement web'
            },
            
            // Navegação
            nav: {
                home: 'Accueil',
                about: 'À propos',
                projects: 'Projets',
                skills: 'Compétences',
                contact: 'Contact'
            },
            
            // Hero Section
            hero: {
                title: 'Matheus Cardoso',
                subtitle: [
                    'Développeur Full-Stack',
                    'Passionné de Technologie',
                    'Créateur d\'Expériences Numériques'
                ],
                description: 'Transformer les idées en expériences numériques immersives',
                buttons: {
                    contact: 'Parlons-en',
                    download: 'Télécharger CV'
                }
            },
            
            // Sobre
            about: {
                title: 'À Propos de Moi',
                subtitle: 'Qui je suis',
                text1: 'Je suis un développeur front-end passionné par la création d\'expériences numériques uniques et innovantes. Avec une expertise dans les technologies modernes, je transforme les concepts créatifs en interfaces fonctionnelles et responsives qui captivent les utilisateurs.',
                text2: 'Mon parcours dans le développement web a commencé il y a plus de 3 ans, et depuis lors, j\'ai travaillé sur des projets stimulants qui m\'ont permis d\'améliorer mes compétences techniques et créatives.',
                stats: {
                    projects: 'Projets Terminés',
                    experience: 'Années d\'Expérience',
                    satisfaction: 'Satisfaction Client'
                }
            },
            
            // Projetos
            projects: {
                title: 'Projets',
                subtitle: 'Mes travaux récents',
                project1: {
                    title: 'E-commerce Cyberpunk',
                    description: 'Plateforme e-commerce avec design cyberpunk, intégration de paiements et système de gestion.',
                    tech: ['React', 'Node.js', 'MongoDB']
                },
                project2: {
                    title: 'Tableau de Bord Analytics',
                    description: 'Tableau de bord interactif avec visualisations de données en temps réel et graphiques animés.',
                    tech: ['Vue.js', 'D3.js', 'Firebase']
                },
                project3: {
                    title: 'Interface de Jeu',
                    description: 'Interface de jeu avec éléments cyberpunk, animations fluides et système de score.',
                    tech: ['JavaScript', 'Canvas API', 'WebGL']
                }
            },
            
            // Habilidades
            skills: {
                title: 'Compétences Techniques',
                subtitle: 'Mes compétences',
                frontend: 'Frontend',
                backend: 'Backend',
                tools: 'Outils & Autres',
                frontendDesc: 'Développement d\'interfaces modernes et responsives',
                backendDesc: 'Consommation d\'APIs et systèmes robustes',
                toolsDesc: 'Outils essentiels pour le développement',
                skillLevels: {
                    advanced: 'Avancé',
                    intermediate: 'Intermédiaire',
                    beginner: 'Débutant'
                },
                technologies: 'Technologies',
                skillNames: {
                    html: 'HTML5 & CSS3',
                    js: 'JavaScript (ES6+)',
                    react: 'React.js',
                    vue: 'Vue.js',
                    java: 'Java',
                    postgresql: 'PostgreSQL',
                    postman: 'Postman',
                    git: 'Git & GitHub',
                    bootstrap: 'Bootstrap',
                    gsap: 'GSAP',
                    figma: 'Figma'
                }
            },
            
            // Contato
            contact: {
                title: 'Contact',
                subtitle: 'Travaillons ensemble',
                info: {
                    title: 'Informations de Contact',
                    description: 'Je suis toujours ouvert aux nouvelles opportunités et projets intéressants. Contactez-moi pour discuter de la façon dont je peux vous aider avec votre projet.',
                    email: 'Email',
                    linkedin: 'LinkedIn',
                    location: 'Localisation',
                    locationValue: 'João Pessoa, Brésil'
                },
                action: {
                    title: 'Parlons-en !',
                    description: 'Prêt à transformer vos idées en réalité ? Contactez-moi et créons quelque chose d\'incroyable ensemble !',
                    button: 'Démarrer Conversation WhatsApp'
                },
                features: {
                    fast: {
                        title: 'Réponse Rapide',
                        description: 'Réponse en 2 heures'
                    },
                    chat: {
                        title: 'Chat Direct',
                        description: 'Communication instantanée'
                    },
                    secure: {
                        title: '100% Sécurisé',
                        description: 'Conversation privée et sécurisée'
                    }
                },
                availability: {
                    status: 'Disponible pour projets',
                    time: 'Lundi à Vendredi • 9h à 18h'
                },
                infoAvailability: {
                    status: 'Profil Actif',
                    time: 'Toujours connecté • Réponse rapide'
                }
            },
            
            // Footer
            footer: {
                copyright: 'Tous droits réservés.',
                backToTop: 'Retour en haut'
            },
            
            // Loader
            loader: {
                messages: [
                    'Initialisation du système...',
                    'Chargement des modules...',
                    'Connexion au réseau...',
                    'Système prêt!'
                ]
            }
        }
    },
    
    // Inicializar
    init() {
        // Verificar se já foi inicializado
        if (this.initialized) {
            return;
        }
        
        // Verificar idioma salvo
        const savedLang = localStorage.getItem('language') || 'pt';
        this.setLanguage(savedLang);
        
        // Adicionar botão de idioma
        this.addLanguageToggle();
        
        // Marcar como inicializado
        this.initialized = true;
    },
    
    // Definir idioma
    setLanguage(lang) {
        this.currentLang = lang;
        localStorage.setItem('language', lang);
        
        // Atualizar meta tags
        this.updateMetaTags();
        
        // Atualizar conteúdo
        this.updateContent();
        
        // Atualizar Typed.js se existir
        this.updateTypedJS();
        
        // Atualizar classes CSS
        document.documentElement.setAttribute('lang', lang);
        document.body.setAttribute('data-lang', lang);
    },
    
    // Atualizar meta tags
    updateMetaTags() {
        const meta = this.translations[this.currentLang].meta;
        
        document.title = meta.title;
        document.querySelector('meta[name="description"]').setAttribute('content', meta.description);
        document.querySelector('meta[name="keywords"]').setAttribute('content', meta.keywords);
    },
    
    // Atualizar conteúdo
    updateContent() {
        const t = this.translations[this.currentLang];
        
        // Navegação
        this.updateNavigation(t.nav);
        
        // Hero Section
        this.updateHero(t.hero);
        
        // Sobre
        this.updateAbout(t.about);
        
        // Projetos
        this.updateProjects(t.projects);
        
        // Habilidades
        this.updateSkills(t.skills);
        
        // Footer
        this.updateFooter(t.footer);
        
        // Atualizar elementos com data-i18n
        this.updateI18nElements();
        
        // Garantir visibilidade após atualização
        setTimeout(() => {
            if (window.ensureContentVisibility) {
                window.ensureContentVisibility();
            }
            // Re-inicializar scroll suave após mudança de idioma
            if (window.initSmoothScroll) {
                window.initSmoothScroll();
            }
        }, 100);
    },
    
    // Atualizar navegação
    updateNavigation(nav) {
        // A navegação será atualizada automaticamente pela função updateI18nElements
        // que é chamada depois desta função
    },
    
    // Atualizar hero section
    updateHero(hero) {
        // Título
        const titleElement = document.querySelector('.hero-title .glitch-text');
        if (titleElement) {
            titleElement.textContent = hero.title;
            titleElement.setAttribute('data-text', hero.title);
        }
        
        // Descrição
        const descElement = document.querySelector('.hero-description');
        if (descElement) {
            descElement.textContent = hero.description;
        }
        
        // Botões
        const buttons = document.querySelectorAll('.hero-buttons .btn');
        if (buttons[0]) {
            const href = buttons[0].getAttribute('href');
            buttons[0].innerHTML = `<i class="fas fa-rocket"></i> ${hero.buttons.contact}`;
            if (href) buttons[0].setAttribute('href', href);
        }
        if (buttons[1]) {
            const href = buttons[1].getAttribute('href');
            const download = buttons[1].getAttribute('download');
            buttons[1].innerHTML = `<i class="fas fa-download"></i> ${hero.buttons.download}`;
            if (href) buttons[1].setAttribute('href', href);
            if (download) buttons[1].setAttribute('download', download);
        }
    },
    
    // Atualizar seção sobre
    updateAbout(about) {
        // Título e subtítulo
        const titleElement = document.querySelector('#sobre .section-title');
        const subtitleElement = document.querySelector('#sobre .section-subtitle');
        
        if (titleElement) titleElement.textContent = about.title;
        if (subtitleElement) subtitleElement.textContent = about.subtitle;
        
        // Textos
        const textElements = document.querySelectorAll('#sobre .about-text');
        if (textElements[0]) textElements[0].textContent = about.text1;
        if (textElements[1]) textElements[1].textContent = about.text2;
        
        // Estatísticas
        const statLabels = document.querySelectorAll('#sobre .stat-label');
        const labels = [about.stats.projects, about.stats.experience, about.stats.satisfaction];
        
        statLabels.forEach((label, index) => {
            if (label && labels[index]) {
                label.textContent = labels[index];
            }
        });
    },
    
    // Atualizar projetos
    updateProjects(projects) {
        // Título e subtítulo
        const titleElement = document.querySelector('#projetos .section-title');
        const subtitleElement = document.querySelector('#projetos .section-subtitle');
        
        if (titleElement) titleElement.textContent = projects.title;
        if (subtitleElement) subtitleElement.textContent = projects.subtitle;
        
        // Cards de projeto no carrossel
        const projectCards = document.querySelectorAll('.carousel-item .project-card');
        const projectData = [projects.project1, projects.project2, projects.project3];
        
        projectCards.forEach((card, index) => {
            if (projectData[index]) {
                const title = card.querySelector('.project-title');
                const desc = card.querySelector('.project-description');
                const tech = card.querySelectorAll('.tech-tag');
                
                if (title) title.textContent = projectData[index].title;
                if (desc) desc.textContent = projectData[index].description;
                
                tech.forEach((tag, techIndex) => {
                    if (projectData[index].tech[techIndex]) {
                        tag.textContent = projectData[index].tech[techIndex];
                    }
                });
            }
        });
    },
    
    // Atualizar habilidades
    updateSkills(skills) {
        // As habilidades serão atualizadas automaticamente pela função updateI18nElements
        // que é chamada depois desta função
    },
    

    
    // Atualizar footer
    updateFooter(footer) {
        const copyright = document.querySelector('[data-i18n="footer.copyright"]');
        if (copyright) {
            copyright.textContent = footer.copyright;
        }
    },
    
    // Atualizar elementos com data-i18n
    updateI18nElements() {
        const t = this.translations[this.currentLang];
        
        // Atualizar todos os elementos com data-i18n
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            const value = this.getNestedValue(t, key);
            if (value) {
                element.textContent = value;
            }
        });
        
        // Atualizar atributos com data-i18n-attr
        document.querySelectorAll('[data-i18n-attr]').forEach(element => {
            const attrKey = element.getAttribute('data-i18n-attr');
            const [attr, key] = attrKey.split(':');
            const value = this.getNestedValue(t, key);
            if (value && attr) {
                element.setAttribute(attr, value);
            }
        });
    },
    
    // Função auxiliar para obter valores aninhados
    getNestedValue(obj, path) {
        return path.split('.').reduce((current, key) => {
            return current && current[key] !== undefined ? current[key] : null;
        }, obj);
    },
    
    // Atualizar Typed.js
    updateTypedJS() {
        // Destruir instância existente
        if (window.heroTyped) {
            window.heroTyped.destroy();
        }
        
        // Recriar com novo idioma
        const typedElement = document.querySelector('.hero-subtitle .typed-text');
        if (typedElement) {
            const strings = this.translations[this.currentLang].hero.subtitle;
            window.heroTyped = new Typed('.hero-subtitle .typed-text', {
                strings: strings,
                typeSpeed: 50,
                backSpeed: 30,
                backDelay: 2000,
                loop: true,
                showCursor: true,
                cursorChar: '|'
            });
        }
    },
    
    // Adicionar botão de alternância de idioma
    addLanguageToggle() {
        // Verificar se o botão de idioma já existe
        const existingLanguageDropdown = document.getElementById('languageDropdown');
        if (existingLanguageDropdown) {
            return; // Botão já existe, não criar outro
        }
        
        const navbar = document.querySelector('.navbar-nav');
        const themeToggle = document.querySelector('.theme-toggle');
        
        if (navbar && themeToggle) {
            // Criar container para botões
            const buttonContainer = document.createElement('div');
            buttonContainer.className = 'd-flex align-items-center gap-2';
            
            // Mover botão de tema para o container
            themeToggle.parentNode.removeChild(themeToggle);
            buttonContainer.appendChild(themeToggle);
            
            // Criar botão de idioma
            const langToggle = document.createElement('div');
            langToggle.className = 'dropdown';
            langToggle.innerHTML = `
                <button class="btn btn-outline-primary dropdown-toggle" type="button" id="languageDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                    <i class="fas fa-globe"></i>
                    <span class="lang-text">${this.getLanguageName(this.currentLang)}</span>
                </button>
                <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="languageDropdown">
                    <li><a class="dropdown-item" href="#" data-lang="pt">
                        <span class="flag-icon">🇧🇷</span> Português
                    </a></li>
                    <li><a class="dropdown-item" href="#" data-lang="en">
                        <span class="flag-icon">🇺🇸</span> English
                    </a></li>
                    <li><a class="dropdown-item" href="#" data-lang="fr">
                        <span class="flag-icon">🇫🇷</span> Français
                    </a></li>
                </ul>
            `;
            
            buttonContainer.appendChild(langToggle);
            
            // Adicionar ao navbar
            const navItem = document.createElement('li');
            navItem.className = 'nav-item';
            navItem.appendChild(buttonContainer);
            navbar.appendChild(navItem);
            
            // Event listeners
            const langItems = langToggle.querySelectorAll('.dropdown-item');
            langItems.forEach(item => {
                item.addEventListener('click', (e) => {
                    e.preventDefault();
                    const lang = item.getAttribute('data-lang');
                    this.setLanguage(lang);
                    
                    // Atualizar texto do botão
                    const langText = langToggle.querySelector('.lang-text');
                    if (langText) {
                        langText.textContent = this.getLanguageName(lang);
                    }
                });
            });
        }
    },
    
    // Obter nome do idioma
    getLanguageName(lang) {
        const names = {
            pt: 'PT',
            en: 'EN',
            fr: 'FR'
        };
        return names[lang] || 'PT';
    }
};

// Exportar para uso global
window.i18n = i18n;

// Inicializar quando o DOM estiver pronto
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        i18n.init();
    });
} else {
    i18n.init();
} 