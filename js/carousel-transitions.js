// ===== EFEITOS DE TRANSIÇÃO DO CARROSSEL DE PROJETOS =====

document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.getElementById('projectsCarousel');
    
    if (carousel) {
        // Configurar efeitos de transição
        setupCarouselTransitions(carousel);
        
        // Adicionar listeners para eventos do carrossel
        carousel.addEventListener('slide.bs.carousel', handleSlideStart);
        carousel.addEventListener('slid.bs.carousel', handleSlideComplete);
        
        // Inicializar primeiro slide
        initializeFirstSlide();
    }
});

// Configurar efeitos de transição
function setupCarouselTransitions(carousel) {
    // Adicionar classes CSS para animações
    const carouselInner = carousel.querySelector('.carousel-inner');
    if (carouselInner) {
        carouselInner.style.transition = 'transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
    }
    
    // Configurar indicadores com efeitos
    const indicators = carousel.querySelectorAll('.carousel-indicators button');
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            animateIndicatorClick(indicator);
        });
    });
    
    // Configurar controles com efeitos
    const prevBtn = carousel.querySelector('.carousel-control-prev');
    const nextBtn = carousel.querySelector('.carousel-control-next');
    
    if (prevBtn) {
        prevBtn.addEventListener('click', () => animateControlClick(prevBtn, 'prev'));
    }
    if (nextBtn) {
        nextBtn.addEventListener('click', () => animateControlClick(nextBtn, 'next'));
    }
}

// Inicializar primeiro slide
function initializeFirstSlide() {
    const carousel = document.getElementById('projectsCarousel');
    const firstSlide = carousel.querySelector('.carousel-item.active');
    
    if (firstSlide) {
        // Animação de entrada do primeiro slide
        gsap.fromTo(firstSlide, 
            {
                opacity: 0,
                scale: 0.9,
                y: 50
            },
            {
                opacity: 1,
                scale: 1,
                y: 0,
                duration: 1.2,
                ease: 'power3.out',
                delay: 0.3
            }
        );
        
        // Animação do card do projeto
        const projectCard = firstSlide.querySelector('.project-card');
        if (projectCard) {
            gsap.fromTo(projectCard,
                {
                    opacity: 0,
                    scale: 0.8,
                    rotationY: -15
                },
                {
                    opacity: 1,
                    scale: 1,
                    rotationY: 0,
                    duration: 1,
                    ease: 'back.out(1.7)',
                    delay: 0.5
                }
            );
        }
        
        // Animação dos elementos internos
        animateSlideElements(firstSlide, 0.8);
    }
}

// Manipular início da transição
function handleSlideStart(event) {
    const carousel = event.target;
    const currentSlide = carousel.querySelector('.carousel-item.active');
    const nextSlide = carousel.querySelectorAll('.carousel-item')[event.to];
    
    // Animação de saída do slide atual
    if (currentSlide) {
        gsap.to(currentSlide, {
            opacity: 0.7,
            scale: 0.95,
            y: -20,
            duration: 0.4,
            ease: 'power2.in'
        });
        
        // Animação do card atual
        const currentCard = currentSlide.querySelector('.project-card');
        if (currentCard) {
            gsap.to(currentCard, {
                opacity: 0.5,
                scale: 0.9,
                rotationY: 10,
                duration: 0.4,
                ease: 'power2.in'
            });
        }
    }
    
    // Preparar próximo slide
    if (nextSlide) {
        gsap.set(nextSlide, {
            opacity: 0,
            scale: 0.9,
            y: 50
        });
        
        const nextCard = nextSlide.querySelector('.project-card');
        if (nextCard) {
            gsap.set(nextCard, {
                opacity: 0,
                scale: 0.8,
                rotationY: -15
            });
        }
    }
}

// Manipular conclusão da transição
function handleSlideComplete(event) {
    const carousel = event.target;
    const activeSlide = carousel.querySelector('.carousel-item.active');
    
    if (activeSlide) {
        // Animação de entrada do slide ativo
        gsap.to(activeSlide, {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 0.6,
            ease: 'power3.out'
        });
        
        // Animação do card ativo
        const projectCard = activeSlide.querySelector('.project-card');
        if (projectCard) {
            gsap.to(projectCard, {
                opacity: 1,
                scale: 1,
                rotationY: 0,
                duration: 0.8,
                ease: 'back.out(1.7)',
                delay: 0.1
            });
        }
        
        // Animação dos elementos internos
        animateSlideElements(activeSlide, 0.2);
        
        // Efeito de brilho no card
        addGlowEffect(projectCard);
    }
    
    // Resetar outros slides
    const allSlides = carousel.querySelectorAll('.carousel-item:not(.active)');
    allSlides.forEach(slide => {
        gsap.set(slide, {
            opacity: 0,
            scale: 0.9,
            y: 50
        });
        
        const card = slide.querySelector('.project-card');
        if (card) {
            gsap.set(card, {
                opacity: 0,
                scale: 0.8,
                rotationY: -15
            });
        }
    });
}

// Animar elementos internos do slide
function animateSlideElements(slide, delay = 0) {
    const elements = slide.querySelectorAll('.project-title, .project-description, .project-tech, .project-links');
    
    elements.forEach((element, index) => {
        gsap.fromTo(element,
            {
                opacity: 0,
                y: 30,
                scale: 0.9
            },
            {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 0.6,
                ease: 'power3.out',
                delay: delay + (index * 0.1)
            }
        );
    });
}

// Adicionar efeito de brilho
function addGlowEffect(card) {
    if (!card) return;
    
    // Criar elemento de brilho
    const glow = document.createElement('div');
    glow.className = 'card-glow';
    glow.style.cssText = `
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(45deg, transparent, rgba(0, 255, 255, 0.1), transparent);
        border-radius: inherit;
        pointer-events: none;
        z-index: 1;
        opacity: 0;
    `;
    
    card.style.position = 'relative';
    card.appendChild(glow);
    
    // Animação do brilho
    gsap.to(glow, {
        opacity: 1,
        duration: 0.3,
        ease: 'power2.out',
        onComplete: () => {
            gsap.to(glow, {
                opacity: 0,
                duration: 0.5,
                ease: 'power2.in',
                delay: 0.2,
                onComplete: () => {
                    if (glow.parentNode) {
                        glow.parentNode.removeChild(glow);
                    }
                }
            });
        }
    });
}

// Animar clique no indicador
function animateIndicatorClick(indicator) {
    gsap.to(indicator, {
        scale: 1.3,
        duration: 0.2,
        ease: 'power2.out',
        yoyo: true,
        repeat: 1
    });
    
    // Efeito de pulso
    gsap.to(indicator, {
        boxShadow: '0 0 20px rgba(0, 255, 255, 0.8)',
        duration: 0.3,
        ease: 'power2.out',
        yoyo: true,
        repeat: 1
    });
}

// Animar clique no controle
function animateControlClick(button, direction) {
    // Animação do botão
    gsap.to(button, {
        scale: 0.9,
        duration: 0.1,
        ease: 'power2.out',
        yoyo: true,
        repeat: 1
    });
    
    // Efeito de brilho
    gsap.to(button, {
        boxShadow: '0 0 25px rgba(0, 255, 255, 0.9)',
        duration: 0.3,
        ease: 'power2.out',
        yoyo: true,
        repeat: 1
    });
    
    // Animação do ícone
    const icon = button.querySelector('.carousel-control-prev-icon, .carousel-control-next-icon');
    if (icon) {
        gsap.to(icon, {
            x: direction === 'prev' ? -5 : 5,
            duration: 0.2,
            ease: 'power2.out',
            yoyo: true,
            repeat: 1
        });
    }
}

// Efeito de hover nos cards (apenas para cards do carrossel)
function setupCarouselCardHover() {
    const carouselCards = document.querySelectorAll('.carousel-item .project-card');
    
    carouselCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            gsap.to(card, {
                scale: 1.02,
                y: -5,
                duration: 0.3,
                ease: 'power2.out'
            });
            
            // Efeito de brilho sutil
            gsap.to(card, {
                boxShadow: '0 10px 25px rgba(0, 255, 255, 0.2), 0 0 10px rgba(0, 255, 255, 0.1)',
                duration: 0.3,
                ease: 'power2.out'
            });
        });
        
        card.addEventListener('mouseleave', () => {
            gsap.to(card, {
                scale: 1,
                y: 0,
                duration: 0.3,
                ease: 'power2.out'
            });
            
            // Remover brilho
            gsap.to(card, {
                boxShadow: '0 5px 15px rgba(0, 0, 0, 0.3)',
                duration: 0.3,
                ease: 'power2.out'
            });
        });
    });
}

// Efeito de partículas flutuantes no carrossel
function createCarouselParticles() {
    const carouselContainer = document.querySelector('.projects-carousel-container');
    if (!carouselContainer) return;
    
    for (let i = 0; i < 15; i++) {
        const particle = document.createElement('div');
        particle.className = 'carousel-particle';
        particle.style.cssText = `
            position: absolute;
            width: 2px;
            height: 2px;
            background: ${Math.random() > 0.5 ? '#00ffff' : '#ff00ff'};
            border-radius: 50%;
            pointer-events: none;
            z-index: 1;
            opacity: ${Math.random() * 0.3 + 0.1};
        `;
        
        carouselContainer.appendChild(particle);
        
        // Posição inicial
        gsap.set(particle, {
            x: Math.random() * carouselContainer.offsetWidth,
            y: Math.random() * carouselContainer.offsetHeight
        });
        
        // Animação flutuante
        gsap.to(particle, {
            duration: Math.random() * 8 + 6,
            x: Math.random() * carouselContainer.offsetWidth,
            y: Math.random() * carouselContainer.offsetHeight,
            repeat: -1,
            ease: 'none',
            yoyo: true
        });
    }
}

// Inicializar efeitos quando a página carrega
window.addEventListener('load', function() {
    setTimeout(() => {
        setupCarouselCardHover();
        createCarouselParticles();
    }, 1000);
});

// Funções utilitárias para debug
window.carouselTransitions = {
    setupCarouselTransitions,
    animateSlideElements,
    addGlowEffect,
    createCarouselParticles
}; 