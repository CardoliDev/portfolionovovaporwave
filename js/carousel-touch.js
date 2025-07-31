// ===== FUNCIONALIDADE DE SWIPE/TOUCH PARA O CARROSSEL =====

document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.getElementById('projectsCarousel');
    
    if (carousel && isMobileDevice()) {
        setupTouchCarousel(carousel);
    }
});

// Verificar se é dispositivo móvel
function isMobileDevice() {
    return window.innerWidth <= 768 || 
           'ontouchstart' in window || 
           navigator.maxTouchPoints > 0;
}

// Configurar carrossel com touch/swipe
function setupTouchCarousel(carousel) {
    let startX = 0;
    let startY = 0;
    let endX = 0;
    let endY = 0;
    let isDragging = false;
    let currentSlide = 0;
    const totalSlides = carousel.querySelectorAll('.carousel-item').length;
    
    // Eventos de touch
    carousel.addEventListener('touchstart', handleTouchStart, { passive: false });
    carousel.addEventListener('touchmove', handleTouchMove, { passive: false });
    carousel.addEventListener('touchend', handleTouchEnd, { passive: false });
    
    // Eventos de mouse (para desktop com touch)
    carousel.addEventListener('mousedown', handleMouseStart, { passive: false });
    carousel.addEventListener('mousemove', handleMouseMove, { passive: false });
    carousel.addEventListener('mouseup', handleMouseEnd, { passive: false });
    carousel.addEventListener('mouseleave', handleMouseEnd, { passive: false });
    
    // Prevenir seleção de texto durante o swipe
    carousel.addEventListener('selectstart', preventDefault);
    carousel.addEventListener('dragstart', preventDefault);
    
    function preventDefault(e) {
        e.preventDefault();
    }
    
    function handleTouchStart(e) {
        const touch = e.touches[0];
        startX = touch.clientX;
        startY = touch.clientY;
        isDragging = true;
        
        // Pausar autoplay se existir
        if (window.bootstrap && window.bootstrap.Carousel) {
            const bsCarousel = bootstrap.Carousel.getInstance(carousel);
            if (bsCarousel) {
                bsCarousel.pause();
            }
        }
    }
    
    function handleTouchMove(e) {
        if (!isDragging) return;
        
        e.preventDefault();
        const touch = e.touches[0];
        endX = touch.clientX;
        endY = touch.clientY;
        
        // Calcular distância movida
        const deltaX = endX - startX;
        const deltaY = endY - startY;
        
        // Se o movimento vertical for maior que o horizontal, não fazer swipe
        if (Math.abs(deltaY) > Math.abs(deltaX)) {
            return;
        }
        
        // Aplicar transformação visual ao carrossel
        const carouselInner = carousel.querySelector('.carousel-inner');
        if (carouselInner) {
            const translateX = Math.max(-100, Math.min(0, (deltaX / carousel.offsetWidth) * 100));
            carouselInner.style.transform = `translateX(${translateX}%)`;
            carouselInner.style.transition = 'none';
        }
    }
    
    function handleTouchEnd(e) {
        if (!isDragging) return;
        
        isDragging = false;
        const deltaX = endX - startX;
        const deltaY = endY - startY;
        
        // Resetar transformação
        const carouselInner = carousel.querySelector('.carousel-inner');
        if (carouselInner) {
            carouselInner.style.transition = 'transform 0.3s ease-out';
            carouselInner.style.transform = 'translateX(0)';
        }
        
        // Verificar se é um swipe válido
        const minSwipeDistance = 50;
        const maxVerticalDistance = 100;
        
        if (Math.abs(deltaX) > minSwipeDistance && Math.abs(deltaY) < maxVerticalDistance) {
            if (deltaX > 0) {
                // Swipe para direita - slide anterior
                goToPreviousSlide();
            } else {
                // Swipe para esquerda - próximo slide
                goToNextSlide();
            }
        }
        
        // Retomar autoplay se existir
        if (window.bootstrap && window.bootstrap.Carousel) {
            const bsCarousel = bootstrap.Carousel.getInstance(carousel);
            if (bsCarousel) {
                bsCarousel.cycle();
            }
        }
    }
    
    function handleMouseStart(e) {
        if (e.button !== 0) return; // Apenas botão esquerdo
        
        startX = e.clientX;
        startY = e.clientY;
        isDragging = true;
        
        // Pausar autoplay se existir
        if (window.bootstrap && window.bootstrap.Carousel) {
            const bsCarousel = bootstrap.Carousel.getInstance(carousel);
            if (bsCarousel) {
                bsCarousel.pause();
            }
        }
    }
    
    function handleMouseMove(e) {
        if (!isDragging) return;
        
        e.preventDefault();
        endX = e.clientX;
        endY = e.clientY;
        
        // Calcular distância movida
        const deltaX = endX - startX;
        const deltaY = endY - startY;
        
        // Se o movimento vertical for maior que o horizontal, não fazer swipe
        if (Math.abs(deltaY) > Math.abs(deltaX)) {
            return;
        }
        
        // Aplicar transformação visual ao carrossel
        const carouselInner = carousel.querySelector('.carousel-inner');
        if (carouselInner) {
            const translateX = Math.max(-100, Math.min(0, (deltaX / carousel.offsetWidth) * 100));
            carouselInner.style.transform = `translateX(${translateX}%)`;
            carouselInner.style.transition = 'none';
        }
    }
    
    function handleMouseEnd(e) {
        if (!isDragging) return;
        
        isDragging = false;
        const deltaX = endX - startX;
        const deltaY = endY - startY;
        
        // Resetar transformação
        const carouselInner = carousel.querySelector('.carousel-inner');
        if (carouselInner) {
            carouselInner.style.transition = 'transform 0.3s ease-out';
            carouselInner.style.transform = 'translateX(0)';
        }
        
        // Verificar se é um swipe válido
        const minSwipeDistance = 50;
        const maxVerticalDistance = 100;
        
        if (Math.abs(deltaX) > minSwipeDistance && Math.abs(deltaY) < maxVerticalDistance) {
            if (deltaX > 0) {
                // Swipe para direita - slide anterior
                goToPreviousSlide();
            } else {
                // Swipe para esquerda - próximo slide
                goToNextSlide();
            }
        }
        
        // Retomar autoplay se existir
        if (window.bootstrap && window.bootstrap.Carousel) {
            const bsCarousel = bootstrap.Carousel.getInstance(carousel);
            if (bsCarousel) {
                bsCarousel.cycle();
            }
        }
    }
    
    function goToPreviousSlide() {
        if (window.bootstrap && window.bootstrap.Carousel) {
            const bsCarousel = bootstrap.Carousel.getInstance(carousel);
            if (bsCarousel) {
                bsCarousel.prev();
            }
        }
    }
    
    function goToNextSlide() {
        if (window.bootstrap && window.bootstrap.Carousel) {
            const bsCarousel = bootstrap.Carousel.getInstance(carousel);
            if (bsCarousel) {
                bsCarousel.next();
            }
        }
    }
}

// Adicionar indicadores visuais de swipe
function addSwipeIndicators() {
    if (!isMobileDevice()) return;
    
    const carousel = document.getElementById('projectsCarousel');
    if (!carousel) return;
    
    // Criar indicadores de swipe
    const swipeIndicator = document.createElement('div');
    swipeIndicator.className = 'swipe-indicator';
    swipeIndicator.innerHTML = `
        <div class="swipe-arrow left">
            <i class="fas fa-chevron-left"></i>
        </div>
        <div class="swipe-text">Deslize para navegar</div>
        <div class="swipe-arrow right">
            <i class="fas fa-chevron-right"></i>
        </div>
    `;
    
    carousel.appendChild(swipeIndicator);
    
    // Adicionar estilos CSS inline
    const style = document.createElement('style');
    style.textContent = `
        .swipe-indicator {
            position: absolute;
            bottom: 20px;
            left: 50%;
            transform: translateX(-50%);
            display: flex;
            align-items: center;
            gap: 10px;
            background: rgba(0, 0, 0, 0.7);
            padding: 8px 16px;
            border-radius: 20px;
            color: #00ffff;
            font-size: 12px;
            z-index: 10;
            opacity: 0.8;
            transition: opacity 0.3s ease;
        }
        
        .swipe-indicator:hover {
            opacity: 1;
        }
        
        .swipe-arrow {
            animation: swipePulse 2s ease-in-out infinite;
        }
        
        .swipe-arrow.left {
            animation-delay: 0s;
        }
        
        .swipe-arrow.right {
            animation-delay: 1s;
        }
        
        @keyframes swipePulse {
            0%, 100% { opacity: 0.5; transform: scale(1); }
            50% { opacity: 1; transform: scale(1.2); }
        }
        
        .swipe-text {
            font-family: 'Rajdhani', sans-serif;
            font-weight: 500;
        }
    `;
    
    document.head.appendChild(style);
    
    // Remover indicador após alguns segundos
    setTimeout(() => {
        swipeIndicator.style.opacity = '0';
        setTimeout(() => {
            if (swipeIndicator.parentNode) {
                swipeIndicator.parentNode.removeChild(swipeIndicator);
            }
        }, 300);
    }, 5000);
}

// Inicializar indicadores de swipe
window.addEventListener('load', function() {
    setTimeout(addSwipeIndicators, 2000);
});

// Exportar funções para uso global
window.carouselTouch = {
    setupTouchCarousel,
    addSwipeIndicators,
    isMobileDevice
}; 