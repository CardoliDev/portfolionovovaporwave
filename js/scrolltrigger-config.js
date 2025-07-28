// ===== CONFIGURAÇÃO SCROLLTRIGGER GSAP =====

// Registrar ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Configurações globais do ScrollTrigger
ScrollTrigger.config({
    ignoreMobileResize: true,
    autoRefreshEvents: "visibilitychange,DOMContentLoaded,load"
});

// ===== ANIMAÇÕES DE SEÇÕES =====

// Animação da seção Sobre
gsap.from('.about-content', {
    scrollTrigger: {
        trigger: '.about-content',
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse'
    },
    duration: 1.5,
    x: -100,
    opacity: 0,
    ease: 'power3.out'
});

gsap.from('.about-image', {
    scrollTrigger: {
        trigger: '.about-image',
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse'
    },
    duration: 1.5,
    x: 100,
    opacity: 0,
    ease: 'power3.out',
    delay: 0.3
});

// Animação das estatísticas
gsap.from('.stat-item', {
    scrollTrigger: {
        trigger: '.about-stats',
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse'
    },
    duration: 1,
    y: 50,
    opacity: 0,
    ease: 'power3.out',
    stagger: 0.2
});

// ===== ANIMAÇÕES DE PROJETOS =====

// Animação do carrossel de projetos
gsap.from('.projects-carousel-container', {
    scrollTrigger: {
        trigger: '.projects-carousel-container',
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse'
    },
    duration: 1.5,
    y: 100,
    opacity: 0,
    ease: 'power3.out'
});

// Animação dos cards de projeto no carrossel
gsap.from('.carousel-item .project-card', {
    scrollTrigger: {
        trigger: '.carousel-item',
        start: 'top 85%',
        end: 'bottom 15%',
        toggleActions: 'play none none reverse'
    },
    duration: 1,
    scale: 0.8,
    opacity: 0,
    ease: 'back.out(1.7)'
});

// Animação quando o carrossel muda de slide
document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.getElementById('projectsCarousel');
    if (carousel) {
        carousel.addEventListener('slide.bs.carousel', (event) => {
            const activeItem = carousel.querySelector('.carousel-item.active');
            if (activeItem) {
                const projectCard = activeItem.querySelector('.project-card');
                if (projectCard) {
                    gsap.fromTo(projectCard, 
                        {
                            scale: 0.9,
                            opacity: 0.7
                        },
                        {
                            scale: 1,
                            opacity: 1,
                            duration: 0.6,
                            ease: 'power2.out'
                        }
                    );
                }
            }
        });
    }
});

// ===== ANIMAÇÕES DE HABILIDADES =====

// Animação das categorias de habilidades
gsap.from('.skills-category', {
    scrollTrigger: {
        trigger: '.skills-category',
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse'
    },
    duration: 1.2,
    scale: 0.8,
    opacity: 0,
    ease: 'back.out(1.7)',
    stagger: 0.2
});

// ===== ANIMAÇÕES DE CONTATO =====

// Animação das informações de contato
gsap.from('.contact-info', {
    scrollTrigger: {
        trigger: '.contact-info',
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse'
    },
    duration: 1.2,
    x: -100,
    opacity: 0,
    ease: 'power3.out'
});

gsap.from('.contact-form', {
    scrollTrigger: {
        trigger: '.contact-form',
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse'
    },
    duration: 1.2,
    x: 100,
    opacity: 0,
    ease: 'power3.out',
    delay: 0.3
});

// ===== ANIMAÇÕES DE ELEMENTOS ESPECÍFICOS =====

// Animação do título da seção
gsap.from('.section-title', {
    scrollTrigger: {
        trigger: '.section-title',
        start: 'top 90%',
        end: 'bottom 10%',
        toggleActions: 'play none none reverse'
    },
    duration: 1.5,
    y: 50,
    opacity: 0,
    ease: 'power3.out'
});

// Animação do subtítulo da seção
gsap.from('.section-subtitle', {
    scrollTrigger: {
        trigger: '.section-subtitle',
        start: 'top 90%',
        end: 'bottom 10%',
        toggleActions: 'play none none reverse'
    },
    duration: 1.5,
    y: 30,
    opacity: 0,
    ease: 'power3.out',
    delay: 0.2
});

// ===== EFEITOS DE PARALLAX =====

// Parallax suave para elementos de fundo
gsap.to('.cyber-grid', {
    scrollTrigger: {
        trigger: '.hero-section',
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1
    },
    y: -100,
    ease: 'none'
});

// Parallax para elementos de texto
gsap.to('.hero-description', {
    scrollTrigger: {
        trigger: '.hero-section',
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1
    },
    y: -50,
    ease: 'none'
});

// ===== ANIMAÇÕES DE NAVEGAÇÃO =====

// Animação da navbar no scroll
gsap.to('.navbar', {
    scrollTrigger: {
        start: 'top -100',
        end: '+=100',
        toggleActions: 'play none none reverse'
    },
    backgroundColor: 'rgba(10, 10, 10, 0.98)',
    backdropFilter: 'blur(15px)',
    duration: 0.3,
    ease: 'power2.out'
});

// ===== ANIMAÇÕES DE HOVER =====

// Efeito de hover nos cards de projeto
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        gsap.to(card, {
            duration: 0.5,
            scale: 1.01,
            y: -10,
            ease: 'power2.out'
        });
        
        // Adicionar efeito de brilho
        gsap.to(card, {
            duration: 0.3,
            boxShadow: '0 15px 30px rgba(0, 255, 255, 0.3), 0 0 15px rgba(0, 255, 255, 0.2)',
            ease: 'power2.out'
        });
    });
    
    card.addEventListener('mouseleave', () => {
        gsap.to(card, {
            duration: 0.5,
            scale: 1,
            y: 0,
            ease: 'power2.out'
        });
        
        // Remover efeito de brilho
        gsap.to(card, {
            duration: 0.3,
            boxShadow: '0 5px 15px rgba(0, 0, 0, 0.3)',
            ease: 'power2.out'
        });
    });
});

// Efeito de hover nas estatísticas
document.querySelectorAll('.stat-item').forEach(stat => {
    stat.addEventListener('mouseenter', () => {
        gsap.to(stat, {
            duration: 0.3,
            scale: 1.1,
            ease: 'power2.out'
        });
    });
    
    stat.addEventListener('mouseleave', () => {
        gsap.to(stat, {
            duration: 0.3,
            scale: 1,
            ease: 'power2.out'
        });
    });
});

// ===== ANIMAÇÕES DE CARREGAMENTO =====

// Animação de entrada dos elementos após o loader
gsap.from('.hero-content', {
    duration: 2,
    y: 100,
    opacity: 0,
    ease: 'power3.out',
    delay: 0.5
});

// ===== ANIMAÇÃO DO BOTÃO VOLTAR AO TOPO =====

// Animação de entrada do botão
gsap.from('.back-to-top-btn', {
    scrollTrigger: {
        trigger: 'body',
        start: 'top top',
        end: 'bottom bottom',
        toggleActions: 'play none none reverse'
    },
    duration: 0.5,
    scale: 0,
    opacity: 0,
    ease: 'back.out(1.7)',
    delay: 1
});

// Efeito de hover no botão voltar ao topo
document.addEventListener('DOMContentLoaded', () => {
    const backToTopBtn = document.querySelector('.back-to-top-btn');
    if (backToTopBtn) {
        backToTopBtn.addEventListener('mouseenter', () => {
            gsap.to(backToTopBtn, {
                duration: 0.3,
                scale: 1.1,
                y: -5,
                ease: 'power2.out'
            });
        });
        
        backToTopBtn.addEventListener('mouseleave', () => {
            gsap.to(backToTopBtn, {
                duration: 0.3,
                scale: 1,
                y: 0,
                ease: 'power2.out'
            });
        });
    }
});

gsap.from('.hero-buttons .btn', {
    duration: 1,
    y: 50,
    opacity: 0,
    ease: 'power3.out',
    delay: 1.5,
    stagger: 0.2
});

gsap.from('.social-link', {
    duration: 1,
    scale: 0,
    opacity: 0,
    ease: 'back.out(1.7)',
    delay: 2,
    stagger: 0.1
});

// ===== ANIMAÇÕES DE TEXTO =====

// Animação de digitação para elementos específicos
function animateText(element, text, speed = 50) {
    let index = 0;
    element.textContent = '';
    
    function typeChar() {
        if (index < text.length) {
            element.textContent += text[index];
            index++;
            setTimeout(typeChar, speed);
        }
    }
    
    typeChar();
}

// Aplicar animação de texto aos títulos das seções
ScrollTrigger.batch('.section-title', {
    onEnter: (elements) => {
        elements.forEach(element => {
            const originalText = element.textContent;
            animateText(element, originalText, 100);
        });
    },
    start: 'top 80%'
});

// ===== EFEITOS DE PARTÍCULAS =====

// Criar partículas flutuantes
function createParticles() {
    const heroSection = document.querySelector('.hero-section');
    
    for (let i = 0; i < 30; i++) {
        const particle = document.createElement('div');
        particle.className = 'floating-particle';
        particle.style.cssText = `
            position: absolute;
            width: 3px;
            height: 3px;
            background: ${Math.random() > 0.5 ? '#00ffff' : '#ff00ff'};
            border-radius: 50%;
            pointer-events: none;
            z-index: 1;
            opacity: ${Math.random() * 0.5 + 0.2};
        `;
        
        heroSection.appendChild(particle);
        
        // Posição inicial aleatória
        gsap.set(particle, {
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight
        });
        
        // Animação flutuante
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

// Inicializar partículas se não for mobile
if (window.innerWidth > 768) {
    createParticles();
}

// ===== UTILITÁRIOS =====

// Função para pausar animações quando a aba não está visível
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        ScrollTrigger.getAll().forEach(trigger => trigger.disable());
    } else {
        ScrollTrigger.getAll().forEach(trigger => trigger.enable());
    }
});

// Função para atualizar ScrollTrigger no resize
window.addEventListener('resize', () => {
    ScrollTrigger.refresh();
});

// ===== CONFIGURAÇÕES DE PERFORMANCE =====

// Desabilitar animações em dispositivos que preferem movimento reduzido
if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    ScrollTrigger.getAll().forEach(trigger => trigger.disable());
}

// Otimizar para dispositivos móveis
if (window.innerWidth <= 768) {
    // Reduzir complexidade das animações em mobile
    ScrollTrigger.config({
        autoRefreshEvents: "visibilitychange,DOMContentLoaded,load",
        ignoreMobileResize: true
    });
} 