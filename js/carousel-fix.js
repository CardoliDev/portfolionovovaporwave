// ===== CORREÇÕES DO CARROSSEL DE PROJETOS =====

document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.getElementById('projectsCarousel');
    
    if (carousel) {
        // Garantir que o primeiro slide esteja sempre visível
        const firstSlide = carousel.querySelector('.carousel-item.active');
        if (firstSlide) {
            ensureSlideVisibility(firstSlide);
        }
        
        // Listener para mudanças de slide
        carousel.addEventListener('slide.bs.carousel', function(event) {
            const activeSlide = carousel.querySelector('.carousel-item.active');
            if (activeSlide) {
                ensureSlideVisibility(activeSlide);
            }
        });
        
        // Listener para quando o slide termina de mudar
        carousel.addEventListener('slid.bs.carousel', function(event) {
            const activeSlide = carousel.querySelector('.carousel-item.active');
            if (activeSlide) {
                ensureSlideVisibility(activeSlide);
            }
        });
        
        // Verificar periodicamente se os slides estão visíveis
        setInterval(() => {
            const activeSlide = carousel.querySelector('.carousel-item.active');
            if (activeSlide) {
                ensureSlideVisibility(activeSlide);
            }
        }, 1000);
    }
});

// Função para garantir que um slide seja visível
function ensureSlideVisibility(slide) {
    if (slide) {
        // Garantir que o slide seja visível
        slide.style.opacity = '1';
        slide.style.visibility = 'visible';
        slide.style.display = 'block';
        slide.style.transform = 'translateX(0)';
        
        // Garantir que o card do projeto seja visível
        const projectCard = slide.querySelector('.project-card');
        if (projectCard) {
            projectCard.style.opacity = '1';
            projectCard.style.visibility = 'visible';
            projectCard.style.transform = 'scale(1)';
            projectCard.style.display = 'block';
        }
        
        // Garantir que a imagem seja visível
        const projectImage = slide.querySelector('.project-image img');
        if (projectImage) {
            projectImage.style.opacity = '1';
            projectImage.style.visibility = 'visible';
            projectImage.style.display = 'block';
        }
        
        // Garantir que o conteúdo seja visível
        const projectContent = slide.querySelector('.project-content');
        if (projectContent) {
            projectContent.style.opacity = '1';
            projectContent.style.visibility = 'visible';
            projectContent.style.display = 'block';
        }
    }
}

// Função para resetar todos os slides
function resetAllSlides() {
    const carousel = document.getElementById('projectsCarousel');
    if (carousel) {
        const allSlides = carousel.querySelectorAll('.carousel-item');
        allSlides.forEach(slide => {
            slide.style.opacity = '1';
            slide.style.visibility = 'visible';
            slide.style.display = 'block';
            slide.style.transform = 'translateX(0)';
            
            const projectCard = slide.querySelector('.project-card');
            if (projectCard) {
                projectCard.style.opacity = '1';
                projectCard.style.visibility = 'visible';
                projectCard.style.transform = 'scale(1)';
                projectCard.style.display = 'block';
            }
        });
    }
}

// Função para forçar a visibilidade do slide ativo
function forceActiveSlideVisibility() {
    const carousel = document.getElementById('projectsCarousel');
    if (carousel) {
        const activeSlide = carousel.querySelector('.carousel-item.active');
        if (activeSlide) {
            // Forçar visibilidade com !important via JavaScript
            activeSlide.style.setProperty('opacity', '1', 'important');
            activeSlide.style.setProperty('visibility', 'visible', 'important');
            activeSlide.style.setProperty('display', 'block', 'important');
            activeSlide.style.setProperty('transform', 'translateX(0)', 'important');
            
            const projectCard = activeSlide.querySelector('.project-card');
            if (projectCard) {
                projectCard.style.setProperty('opacity', '1', 'important');
                projectCard.style.setProperty('visibility', 'visible', 'important');
                projectCard.style.setProperty('transform', 'scale(1)', 'important');
                projectCard.style.setProperty('display', 'block', 'important');
            }
        }
    }
}

// Executar correções quando a página carrega
window.addEventListener('load', function() {
    setTimeout(() => {
        forceActiveSlideVisibility();
        resetAllSlides();
    }, 100);
    
    setTimeout(() => {
        forceActiveSlideVisibility();
    }, 500);
    
    setTimeout(() => {
        forceActiveSlideVisibility();
    }, 1000);
});

// Executar correções quando a janela é redimensionada
window.addEventListener('resize', function() {
    setTimeout(() => {
        forceActiveSlideVisibility();
    }, 100);
});

// Executar correções quando a aba se torna visível
document.addEventListener('visibilitychange', function() {
    if (!document.hidden) {
        setTimeout(() => {
            forceActiveSlideVisibility();
        }, 100);
    }
});



// Exportar funções para uso global (se necessário)
window.carouselFix = {
    ensureSlideVisibility,
    resetAllSlides,
    forceActiveSlideVisibility
}; 