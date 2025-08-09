import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { Rocket } from 'lucide-react';

const BackToTopContainer = styled(motion.button)`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.gradient.primary};
  color: white;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: ${({ theme }) => theme.shadows.large};
  z-index: 1000;
  overflow: hidden;
  
  &:hover {
    box-shadow: ${({ theme }) => theme.shadows.neon};
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${({ theme }) => theme.colors.gradient.neon};
    opacity: 0;
    transition: opacity ${({ theme }) => theme.animations.fast};
  }

  &:hover::before {
    opacity: 0.2;
  }
`;

const RocketIcon = styled(motion.div)`
  position: relative;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ParticleContainer = styled.div`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  width: 60px;
  height: 60px;
  pointer-events: none;
  z-index: 999;
`;

const Particle = styled(motion.div)<{ delay: number }>`
  position: absolute;
  width: 4px;
  height: 4px;
  background: ${({ theme }) => theme.colors.neon.cyan};
  border-radius: 50%;
  bottom: 50%;
  left: 50%;
`;

const TrailParticle = styled(motion.div)<{ index: number }>`
  position: absolute;
  width: 3px;
  height: 3px;
  background: ${({ theme, index }) => {
    const colors = [
      theme.colors.neon.cyan,
      theme.colors.neon.pink,
      theme.colors.neon.purple,
    ];
    return colors[index % colors.length];
  }};
  border-radius: 50%;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  opacity: 0.8;
`;

export const BackToTop: React.FC = () => {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [showParticles, setShowParticles] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    setIsAnimating(true);
    setShowParticles(true);
    
    // Hide particles after animation
    setTimeout(() => {
      setShowParticles(false);
    }, 1500);

    // Reset animation state
    setTimeout(() => {
      setIsAnimating(false);
    }, 2000);

    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const createParticles = () => {
    return Array.from({ length: 6 }, (_, i) => (
      <Particle
        key={i}
        delay={i * 0.1}
        initial={{ opacity: 0, scale: 0 }}
        animate={{
          opacity: [0, 1, 0],
          scale: [0, 1, 0],
          x: (Math.random() - 0.5) * 100,
          y: Math.random() * -100 - 50,
        }}
        transition={{
          duration: 1.5,
          delay: i * 0.1,
          ease: 'easeOut',
        }}
      />
    ));
  };

  const createTrail = () => {
    return Array.from({ length: 8 }, (_, i) => (
      <TrailParticle
        key={i}
        index={i}
        initial={{ opacity: 0.8, y: 0 }}
        animate={{
          opacity: [0.8, 0.4, 0],
          y: [0, 30 + i * 5, 60 + i * 10],
          scale: [1, 0.8, 0.4],
        }}
        transition={{
          duration: 2,
          delay: i * 0.05,
          ease: 'easeOut',
        }}
      />
    ));
  };

  return (
    <>
      <AnimatePresence>
        {isVisible && (
          <BackToTopContainer
            initial={{ opacity: 0, scale: 0, y: 100 }}
            animate={{ 
              opacity: 1, 
              scale: 1, 
              y: 0,
              rotate: isAnimating ? [0, -15, 15, 0] : 0,
            }}
            exit={{ 
              opacity: 0, 
              scale: 0, 
              y: 100,
              transition: { duration: 0.3 }
            }}
            whileHover={{ 
              scale: 1.1,
              rotate: [0, -5, 5, 0],
              transition: { duration: 0.3 }
            }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToTop}
            aria-label={t('footer.backToTop')}
            transition={{
              type: 'spring',
              stiffness: 260,
              damping: 20,
              rotate: { duration: 0.5, repeat: isAnimating ? 2 : 0 }
            }}
          >
            <RocketIcon
              animate={isAnimating ? {
                y: [-5, -15, -5],
                rotate: [0, -10, 10, 0],
              } : {}}
              transition={{
                duration: 1,
                ease: 'easeInOut',
              }}
            >
              <Rocket size={24} />
            </RocketIcon>
          </BackToTopContainer>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showParticles && (
          <ParticleContainer>
            {createParticles()}
            {createTrail()}
          </ParticleContainer>
        )}
      </AnimatePresence>
    </>
  );
};

export default BackToTop;
