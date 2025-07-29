// ===== ANIMAÇÃO DO FOGUETE - BOTÃO VOLTAR AO TOPO =====

document.addEventListener('DOMContentLoaded', function() {
    const backToTopBtn = document.getElementById('backToTop');
    
    if (backToTopBtn) {
        // Adicionar elementos para a animação do foguete
        setupRocketAnimation(backToTopBtn);
        
        // Listener para o clique do botão
        backToTopBtn.addEventListener('click', function(e) {
            e.preventDefault();
            triggerRocketLaunch();
        });
    }
});

// Configurar animação do foguete
function setupRocketAnimation(button) {
    // Criar container para o foguete
    const rocketContainer = document.createElement('div');
    rocketContainer.className = 'rocket-container';
    rocketContainer.style.cssText = `
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: 10;
        overflow: hidden;
    `;
    
    // Criar o foguete
    const rocket = document.createElement('div');
    rocket.className = 'rocket';
    rocket.innerHTML = '<i class="fas fa-rocket"></i>';
    rocket.style.cssText = `
        position: absolute;
        bottom: 50%;
        left: 50%;
        transform: translate(-50%, 50%);
        font-size: 1.2em;
        color: var(--primary-color);
        transition: all 0.3s ease;
        z-index: 11;
    `;
    
    // Criar efeito de propulsão
    const thrust = document.createElement('div');
    thrust.className = 'rocket-thrust';
    thrust.style.cssText = `
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        width: 20px;
        height: 0;
        background: linear-gradient(to top, #ff6b35, #f7931e, #ffd700);
        border-radius: 50% 50% 0 0;
        opacity: 0;
        transition: all 0.3s ease;
        z-index: 10;
    `;
    
    // Criar partículas de fumaça
    const smokeContainer = document.createElement('div');
    smokeContainer.className = 'smoke-container';
    smokeContainer.style.cssText = `
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: 9;
    `;
    
    // Adicionar elementos ao container
    rocketContainer.appendChild(rocket);
    rocketContainer.appendChild(thrust);
    rocketContainer.appendChild(smokeContainer);
    
    // Adicionar ao botão
    button.style.position = 'relative';
    button.appendChild(rocketContainer);
    
    // Armazenar referências para uso posterior
    button.rocket = rocket;
    button.thrust = thrust;
    button.smokeContainer = smokeContainer;
    button.rocketContainer = rocketContainer;
}

// Disparar animação do foguete
function triggerRocketLaunch() {
    const backToTopBtn = document.getElementById('backToTop');
    if (!backToTopBtn) return;
    
    const rocket = backToTopBtn.rocket;
    const thrust = backToTopBtn.thrust;
    const smokeContainer = backToTopBtn.smokeContainer;
    
    // Desabilitar botão durante a animação
    backToTopBtn.disabled = true;
    backToTopBtn.style.pointerEvents = 'none';
    
    // Fase 1: Preparação do lançamento
    gsap.to(thrust, {
        height: '30px',
        opacity: 1,
        duration: 0.3,
        ease: 'power2.out'
    });
    
    // Criar partículas de fumaça
    createSmokeParticles(smokeContainer);
    
    // Fase 2: Lançamento
    gsap.to(rocket, {
        y: '-100vh',
        rotation: -15,
        scale: 0.8,
        duration: 1.5,
        ease: 'power2.in',
        delay: 0.3,
        onUpdate: function() {
            // Ajustar efeito de propulsão durante o voo
            const progress = this.progress();
            gsap.to(thrust, {
                height: 30 - (progress * 20),
                opacity: 1 - (progress * 0.5),
                duration: 0.1
            });
        },
        onComplete: function() {
            // Fase 3: Reset e scroll para o topo
            resetRocket(backToTopBtn);
            scrollToTop();
        }
    });
    
    // Efeito de brilho no botão
    gsap.to(backToTopBtn, {
        boxShadow: '0 0 30px rgba(0, 255, 255, 0.8)',
        duration: 0.3,
        ease: 'power2.out',
        yoyo: true,
        repeat: 1
    });
}

// Criar partículas de fumaça
function createSmokeParticles(container) {
    for (let i = 0; i < 15; i++) {
        setTimeout(() => {
            const smoke = document.createElement('div');
            smoke.className = 'smoke-particle';
            smoke.style.cssText = `
                position: absolute;
                bottom: 0;
                left: 50%;
                width: ${Math.random() * 8 + 4}px;
                height: ${Math.random() * 8 + 4}px;
                background: rgba(128, 128, 128, 0.6);
                border-radius: 50%;
                transform: translateX(-50%);
                pointer-events: none;
            `;
            
            container.appendChild(smoke);
            
            // Animação da partícula de fumaça
            gsap.to(smoke, {
                y: -100,
                x: (Math.random() - 0.5) * 60,
                opacity: 0,
                scale: 2,
                duration: 2,
                ease: 'power2.out',
                onComplete: function() {
                    if (smoke.parentNode) {
                        smoke.parentNode.removeChild(smoke);
                    }
                }
            });
        }, i * 50);
    }
}

// Resetar foguete
function resetRocket(button) {
    const rocket = button.rocket;
    const thrust = button.thrust;
    
    // Resetar foguete
    gsap.set(rocket, {
        y: '50%',
        rotation: 0,
        scale: 1
    });
    
    // Resetar propulsão
    gsap.set(thrust, {
        height: 0,
        opacity: 0
    });
    
    // Limpar partículas de fumaça
    const smokeContainer = button.smokeContainer;
    const smokeParticles = smokeContainer.querySelectorAll('.smoke-particle');
    smokeParticles.forEach(particle => {
        if (particle.parentNode) {
            particle.parentNode.removeChild(particle);
        }
    });
    
    // Reabilitar botão
    setTimeout(() => {
        button.disabled = false;
        button.style.pointerEvents = 'auto';
    }, 500);
}

// Scroll suave para o topo
function scrollToTop() {
    gsap.to(window, {
        scrollTo: { y: 0 },
        duration: 1.5,
        ease: 'power2.inOut',
        delay: 0.5
    });
}

// Efeito de hover no foguete
document.addEventListener('DOMContentLoaded', function() {
    const backToTopBtn = document.getElementById('backToTop');
    
    if (backToTopBtn && backToTopBtn.rocket) {
        backToTopBtn.addEventListener('mouseenter', function() {
            if (!backToTopBtn.disabled) {
                gsap.to(backToTopBtn.rocket, {
                    scale: 1.2,
                    rotation: -5,
                    duration: 0.3,
                    ease: 'power2.out'
                });
                
                gsap.to(backToTopBtn.thrust, {
                    height: '10px',
                    opacity: 0.5,
                    duration: 0.3,
                    ease: 'power2.out'
                });
            }
        });
        
        backToTopBtn.addEventListener('mouseleave', function() {
            if (!backToTopBtn.disabled) {
                gsap.to(backToTopBtn.rocket, {
                    scale: 1,
                    rotation: 0,
                    duration: 0.3,
                    ease: 'power2.out'
                });
                
                gsap.to(backToTopBtn.thrust, {
                    height: 0,
                    opacity: 0,
                    duration: 0.3,
                    ease: 'power2.out'
                });
            }
        });
    }
});

// Efeito de partículas de estrelas durante o voo
function createStarTrail() {
    const stars = [];
    
    for (let i = 0; i < 20; i++) {
        setTimeout(() => {
            const star = document.createElement('div');
            star.className = 'star-trail';
            star.style.cssText = `
                position: fixed;
                top: ${Math.random() * window.innerHeight}px;
                right: ${Math.random() * 100}px;
                width: 2px;
                height: 2px;
                background: white;
                border-radius: 50%;
                pointer-events: none;
                z-index: 1000;
                opacity: 0;
            `;
            
            document.body.appendChild(star);
            
            gsap.to(star, {
                x: -window.innerWidth,
                opacity: 1,
                duration: 1,
                ease: 'power2.out',
                onComplete: function() {
                    if (star.parentNode) {
                        star.parentNode.removeChild(star);
                    }
                }
            });
            
            stars.push(star);
        }, i * 50);
    }
}

// Função para ativar efeito de estrelas (opcional)
function activateStarTrail() {
    createStarTrail();
}

// Exportar funções para uso global
window.rocketAnimation = {
    triggerRocketLaunch,
    createStarTrail,
    activateStarTrail
};

 