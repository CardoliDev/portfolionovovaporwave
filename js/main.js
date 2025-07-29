// ===== CONFIGURAÇÃO INICIAL =====
document.addEventListener('DOMContentLoaded', function() {
    // Garantir que o conteúdo seja visível
    ensureContentVisibility();
    
    // Inicializar sistema de internacionalização primeiro
    if (window.i18n) {
        i18n.init();
    }
    
    // Inicializar todas as funcionalidades
    initLoader();
    initTypedJS();
    initAOS();
    initScrollReveal();
    initGSAP();
    initScrollSpy();
    initThemeToggle();
    initContactForm();
    initSkillBars();
    initSmoothScroll();
    initBackToTop();
});

// ===== GARANTIR VISIBILIDADE DO CONTEÚDO =====
function ensureContentVisibility() {
    // Garantir que os elementos da hero section sejam visíveis
    const heroElements = [
        '.hero-title',
        '.hero-subtitle',
        '.hero-description',
        '.hero-buttons',
        '.social-links'
    ];
    
    heroElements.forEach(selector => {
        const elements = document.querySelectorAll(selector);
        elements.forEach(element => {
            if (element) {
                element.style.visibility = 'visible';
                element.style.opacity = '1';
                element.style.display = 'block';
            }
        });
    });
    
    // Garantir que o texto glitch seja visível
    const glitchTexts = document.querySelectorAll('.glitch-text');
    glitchTexts.forEach(element => {
        if (element) {
            element.style.visibility = 'visible';
            element.style.opacity = '1';
            element.style.zIndex = '1';
        }
    });
}

// Tornar funções globais
window.ensureContentVisibility = ensureContentVisibility;
window.initSmoothScroll = initSmoothScroll;

// Função de debug para o botão back-to-top
window.debugBackToTop = function() {
    const backToTopBtn = document.getElementById('backToTop');
    if (backToTopBtn) {
        backToTopBtn.classList.add('force-show');
        console.log('Botão back-to-top forçado a ficar visível');
    } else {
        console.log('Botão back-to-top não encontrado');
    }
};

// ===== LOADER ANIMADO =====
function initLoader() {
    const loader = document.getElementById('loader');
    const loaderText = document.querySelector('.loader-text .typed-text');
    
    // Verificar se deve usar loader rápido (para desenvolvimento)
    const fastLoader = window.location.search.includes('fast-loader=true');
    
    if (fastLoader) {
        // Loader ultra-rápido para desenvolvimento
        setTimeout(() => {
            loader.classList.add('hidden');
            setTimeout(() => {
                loader.style.display = 'none';
            }, 200);
        }, 500);
        return;
    }
    
    // Texto do loader baseado no idioma atual
    const currentLang = window.i18n ? window.i18n.currentLang : 'pt';
    const loaderMessages = window.i18n ? window.i18n.translations[currentLang].loader.messages : [
        'Inicializando...',
        'Sistema pronto!'
    ];
    
    let currentMessage = 0;
    
    function typeLoaderText() {
        if (currentMessage < loaderMessages.length) {
            const message = loaderMessages[currentMessage];
            let charIndex = 0;
            
            loaderText.textContent = '';
            
            const typeInterval = setInterval(() => {
                loaderText.textContent += message[charIndex];
                charIndex++;
                
                if (charIndex >= message.length) {
                    clearInterval(typeInterval);
                    setTimeout(() => {
                        currentMessage++;
                        typeLoaderText();
                    }, 300);
                }
            }, 50);
        } else {
            // Esconder loader após 0.3 segundos
            setTimeout(() => {
                loader.classList.add('hidden');
                setTimeout(() => {
                    loader.style.display = 'none';
                }, 300);
            }, 300);
        }
    }
    
    // Iniciar animação do loader
    setTimeout(typeLoaderText, 200);
}

// ===== TYPED.JS =====
function initTypedJS() {
    // Obter strings do idioma atual
    const currentLang = window.i18n ? window.i18n.currentLang : 'pt';
    const strings = window.i18n ? window.i18n.translations[currentLang].hero.subtitle : [
        'Desenvolvedor Front-End',
        'Designer UI/UX',
        'Entusiasta de Tecnologia',
        'Criador de Experiências Digitais'
    ];
    
    // Typed.js para o hero subtitle
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

// ===== AOS (ANIMATE ON SCROLL) =====
function initAOS() {
    AOS.init({
        duration: 1000,
        easing: 'ease-in-out',
        once: true,
        mirror: false,
        offset: 100
    });
}

// ===== SCROLLREVEAL =====
function initScrollReveal() {
    ScrollReveal().reveal('.hero-content', {
        delay: 200,
        distance: '50px',
        origin: 'bottom',
        duration: 1000,
        easing: 'ease-out'
    });
    
    ScrollReveal().reveal('.project-card', {
        delay: 200,
        distance: '30px',
        origin: 'bottom',
        duration: 800,
        easing: 'ease-out',
        interval: 200
    });
    
    ScrollReveal().reveal('.skill-item', {
        delay: 100,
        distance: '20px',
        origin: 'left',
        duration: 600,
        easing: 'ease-out',
        interval: 100
    });
}

// ===== GSAP ANIMAÇÕES =====
function initGSAP() {
    // Registrar ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);
    
    // Animação do título principal
    gsap.from('.hero-title', {
        duration: 2,
        y: 100,
        opacity: 0,
        ease: 'power3.out',
        delay: 0.5
    });
    
    // Animação dos botões
    gsap.from('.hero-buttons .btn', {
        duration: 1,
        y: 50,
        opacity: 0,
        ease: 'power3.out',
        delay: 1.5,
        stagger: 0.2
    });
    
    // Animação dos links sociais
    gsap.from('.social-link', {
        duration: 1,
        scale: 0,
        opacity: 0,
        ease: 'back.out(1.7)',
        delay: 2,
        stagger: 0.1
    });
    
    // Animação do scroll indicator
    gsap.from('.scroll-indicator', {
        duration: 1,
        y: 30,
        opacity: 0,
        ease: 'power3.out',
        delay: 2.5
    });
    
    // Animação das estatísticas
    gsap.from('.stat-number', {
        duration: 2,
        textContent: 0,
        ease: 'power2.out',
        snap: { textContent: 1 },
        stagger: 0.2,
        scrollTrigger: {
            trigger: '.about-stats',
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
        }
    });
    
    // Animação do grid cyberpunk
    gsap.to('.cyber-grid', {
        duration: 20,
        x: 50,
        y: 50,
        ease: 'none',
        repeat: -1
    });
    
    // Parallax para elementos de fundo
    gsap.to('.neon-lines', {
        yPercent: -50,
        ease: 'none',
        scrollTrigger: {
            trigger: '.hero-section',
            start: 'top bottom',
            end: 'bottom top',
            scrub: true
        }
    });
}

// ===== SCROLLSPY =====
function initScrollSpy() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    
    function updateActiveNavLink() {
        const scrollPos = window.scrollY + 100;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }
    
    window.addEventListener('scroll', updateActiveNavLink);
    updateActiveNavLink(); // Executar uma vez no carregamento
}

// ===== TOGGLE DE TEMA =====
function initThemeToggle() {
    const themeToggle = document.getElementById('themeToggle');
    const body = document.body;
    const icon = themeToggle.querySelector('i');
    
    // Verificar tema salvo
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        body.setAttribute('data-theme', savedTheme);
        updateThemeIcon(savedTheme === 'light');
    }
    
    themeToggle.addEventListener('click', function() {
        const currentTheme = body.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        
        body.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateThemeIcon(newTheme === 'light');
        
        // Animação de transição
        gsap.to('body', {
            duration: 0.5,
            backgroundColor: newTheme === 'light' ? '#ffffff' : '#0a0a0a',
            ease: 'power2.out'
        });
    });
    
    function updateThemeIcon(isLight) {
        icon.className = isLight ? 'fas fa-sun' : 'fas fa-moon';
    }
}

// ===== FORMULÁRIO DE CONTATO =====
function initContactForm() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Obter dados do formulário
            const formData = new FormData(contactForm);
            const data = Object.fromEntries(formData);
            
            // Validação básica
            if (!validateForm(data)) {
                return;
            }
            
            // Simular envio (substitua por sua lógica de envio real)
            showNotification('Mensagem enviada com sucesso!', 'success');
            contactForm.reset();
            
            // Aqui você pode integrar com serviços como:
            // - EmailJS
            // - Formspree
            // - Netlify Forms
            // - Sua própria API
        });
    }
    
    function validateForm(data) {
        const errors = [];
        
        if (!data.name || data.name.trim().length < 2) {
            errors.push('Nome deve ter pelo menos 2 caracteres');
        }
        
        if (!data.email || !isValidEmail(data.email)) {
            errors.push('Email inválido');
        }
        
        if (!data.subject || data.subject.trim().length < 5) {
            errors.push('Assunto deve ter pelo menos 5 caracteres');
        }
        
        if (!data.message || data.message.trim().length < 10) {
            errors.push('Mensagem deve ter pelo menos 10 caracteres');
        }
        
        if (errors.length > 0) {
            showNotification(errors.join('\n'), 'error');
            return false;
        }
        
        return true;
    }
    
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    
    function showNotification(message, type) {
        // Criar notificação
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.innerHTML = `
            <div class="notification-content">
                <i class="fas fa-${type === 'success' ? 'check-circle' : 'exclamation-circle'}"></i>
                <span>${message}</span>
            </div>
        `;
        
        // Adicionar estilos
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: ${type === 'success' ? '#00ff00' : '#ff0000'};
            color: #000;
            padding: 1rem 1.5rem;
            border-radius: 5px;
            z-index: 10000;
            transform: translateX(100%);
            transition: transform 0.3s ease;
            max-width: 300px;
            box-shadow: 0 5px 15px rgba(0,0,0,0.3);
        `;
        
        document.body.appendChild(notification);
        
        // Animar entrada
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 100);
        
        // Remover após 5 segundos
        setTimeout(() => {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => {
                document.body.removeChild(notification);
            }, 300);
        }, 5000);
    }
}

// ===== BARRAS DE HABILIDADES =====
function initSkillBars() {
    const skillBars = document.querySelectorAll('.skill-progress');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progressBar = entry.target;
                const width = progressBar.getAttribute('data-width');
                
                gsap.to(progressBar, {
                    width: `${width}%`,
                    duration: 2,
                    ease: 'power2.out'
                });
                
                observer.unobserve(progressBar);
            }
        });
    }, {
        threshold: 0.5
    });
    
    skillBars.forEach(bar => {
        observer.observe(bar);
    });
}

// ===== SCROLL SUAVE =====
function initSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');
    

    
    links.forEach(link => {
        // Remover event listeners existentes para evitar duplicação
        link.removeEventListener('click', smoothScrollHandler);
        
        // Adicionar novo event listener
        link.addEventListener('click', smoothScrollHandler);
    });
}

// Handler para scroll suave
function smoothScrollHandler(e) {
    e.preventDefault();
    
    const targetId = this.getAttribute('href');
    const targetSection = document.querySelector(targetId);
    

    
    if (targetSection) {
        const offsetTop = targetSection.offsetTop - 80; // Ajuste para navbar fixa
        
        // Usar scroll nativo com comportamento suave
        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });
        
        // Fechar menu mobile se estiver aberto
        const navbarCollapse = document.querySelector('.navbar-collapse');
        if (navbarCollapse && navbarCollapse.classList.contains('show')) {
            const bsCollapse = new bootstrap.Collapse(navbarCollapse);
            bsCollapse.hide();
        }
    }
}

// ===== EFEITOS DE HOVER ADICIONAIS =====
function initHoverEffects() {
    // Efeito de partículas nos cards de projeto
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            gsap.to(this, {
                duration: 0.3,
                scale: 1.02,
                ease: 'power2.out'
            });
        });
        
        card.addEventListener('mouseleave', function() {
            gsap.to(this, {
                duration: 0.3,
                scale: 1,
                ease: 'power2.out'
            });
        });
    });
    
    // Efeito de glow nos botões
    const buttons = document.querySelectorAll('.btn');
    
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            gsap.to(this, {
                duration: 0.3,
                boxShadow: '0 0 30px rgba(0, 255, 255, 0.6)',
                ease: 'power2.out'
            });
        });
        
        button.addEventListener('mouseleave', function() {
            gsap.to(this, {
                duration: 0.3,
                boxShadow: '0 0 20px rgba(0, 255, 255, 0.3)',
                ease: 'power2.out'
            });
        });
    });
}

// ===== BOTÃO VOLTAR AO TOPO =====
function initBackToTop() {
    const backToTopBtn = document.getElementById('backToTop');
    
    if (!backToTopBtn) {
        console.warn('Botão back-to-top não encontrado');
        return;
    }
    
    // Garantir que o botão seja visível inicialmente se necessário
    backToTopBtn.style.display = 'flex';
    
    // Mostrar/ocultar botão baseado no scroll
    const handleScroll = () => {
        if (window.pageYOffset > 100) {
            backToTopBtn.classList.add('show');
        } else {
            backToTopBtn.classList.remove('show');
        }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    // Scroll suave ao clicar no botão
    backToTopBtn.addEventListener('click', () => {
        
        // Animação do foguete decolando
        const rocketIcon = backToTopBtn.querySelector('i');
        if (rocketIcon) {
            gsap.to(rocketIcon, {
                duration: 0.8,
                y: -20,
                scale: 1.3,
                rotation: -45,
                ease: 'power2.out'
            });
            
            // Criar partículas de fumaça
            createRocketParticles(backToTopBtn);
            
            // Reset da animação após o scroll
            setTimeout(() => {
                gsap.to(rocketIcon, {
                    duration: 0.5,
                    y: 0,
                    scale: 1,
                    ease: 'power2.out'
                });
            }, 1000);
        }
        
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // Verificar posição inicial
    handleScroll();
    
    // Verificação adicional após um delay
    setTimeout(() => {
        handleScroll();
    }, 1000);
}



// Função para criar partículas de fumaça do foguete
function createRocketParticles(button) {
    const buttonRect = button.getBoundingClientRect();
    const centerX = buttonRect.left + buttonRect.width / 2;
    const centerY = buttonRect.top + buttonRect.height / 2;
    
    for (let i = 0; i < 8; i++) {
        const particle = document.createElement('div');
        particle.style.cssText = `
            position: fixed;
            width: 4px;
            height: 4px;
            background: rgba(255, 255, 255, 0.8);
            border-radius: 50%;
            pointer-events: none;
            z-index: 9999;
            left: ${centerX}px;
            top: ${centerY}px;
        `;
        
        document.body.appendChild(particle);
        
        // Animação da partícula
        gsap.to(particle, {
            duration: 1 + Math.random(),
            x: (Math.random() - 0.5) * 100,
            y: Math.random() * 50 + 20,
            opacity: 0,
            scale: 0,
            ease: 'power2.out',
            onComplete: () => {
                document.body.removeChild(particle);
            }
        });
    }
}

// ===== ANIMAÇÃO DE PARTÍCULAS (OPCIONAL) =====
function initParticles() {
    // Criar partículas flutuantes no fundo
    const heroSection = document.querySelector('.hero-section');
    
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.cssText = `
            position: absolute;
            width: 2px;
            height: 2px;
            background: ${Math.random() > 0.5 ? '#00ffff' : '#ff00ff'};
            border-radius: 50%;
            pointer-events: none;
            z-index: 1;
        `;
        
        heroSection.appendChild(particle);
        
        // Animação aleatória
        gsap.set(particle, {
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            opacity: Math.random() * 0.5 + 0.2
        });
        
        gsap.to(particle, {
            duration: Math.random() * 10 + 10,
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            repeat: -1,
            ease: 'none',
            yoyo: true
        });
    }
}

// ===== UTILITÁRIOS =====

// Função para debounce
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Função para throttle
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// Função para detectar dispositivo móvel
function isMobile() {
    return window.innerWidth <= 768;
}

// Função para detectar preferência de movimento reduzido
function prefersReducedMotion() {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

// ===== EVENT LISTENERS ADICIONAIS =====

// Resize handler
window.addEventListener('resize', debounce(function() {
    // Recalcular animações se necessário
    ScrollTrigger.refresh();
}, 250));

// Scroll handler otimizado
window.addEventListener('scroll', throttle(function() {
    // Lógica adicional de scroll se necessário
}, 16));

// Inicializar efeitos adicionais após carregamento
window.addEventListener('load', function() {
    initHoverEffects();
    
    // Inicializar partículas apenas se não for mobile e não preferir movimento reduzido
    if (!isMobile() && !prefersReducedMotion()) {
        initParticles();
    }
    
    // Garantir visibilidade após carregamento completo
    setTimeout(ensureContentVisibility, 1000);
    
    // Garantir que os links funcionem corretamente
    setTimeout(initSmoothScroll, 1500);
    
    // Inicializar botão voltar ao topo
    initBackToTop();
    
    // Verificação adicional do botão após carregamento
    setTimeout(() => {
        const backToTopBtn = document.getElementById('backToTop');
        if (backToTopBtn) {
            // Forçar verificação de scroll
            const handleScroll = () => {
                if (window.pageYOffset > 100) {
                    backToTopBtn.classList.add('show');
                } else {
                    backToTopBtn.classList.remove('show');
                }
            };
            handleScroll();
        }
    }, 2000);
});

// ===== CONFIGURAÇÕES DE PERFORMANCE =====



 