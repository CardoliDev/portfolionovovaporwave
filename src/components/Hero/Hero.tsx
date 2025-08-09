
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useMemo } from 'react';
import styled from 'styled-components';
import { TypeAnimation } from 'react-type-animation';
import { Download, MessageCircle, Github, Linkedin, Mail } from 'lucide-react';
import { ParallaxEffects } from '../ParallaxEffects';

const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  background: 
    radial-gradient(ellipse at center, rgba(0, 255, 255, 0.05) 0%, transparent 50%),
    radial-gradient(ellipse at 80% 20%, rgba(255, 20, 147, 0.05) 0%, transparent 50%),
    ${({ theme }) => theme.colors.background};
`;

const HeroBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
`;

const CyberGrid = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0.1;
  background-image: 
    linear-gradient(${({ theme }) => theme.colors.neon.cyan} 1px, transparent 1px),
    linear-gradient(90deg, ${({ theme }) => theme.colors.neon.cyan} 1px, transparent 1px);
  background-size: 50px 50px;
  animation: gridMove 20s linear infinite;

  @keyframes gridMove {
    0% { transform: translate(0, 0); }
    100% { transform: translate(50px, 50px); }
  }
`;

const NeonLines = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0.6;

  &::before,
  &::after {
    content: '';
    position: absolute;
    background: ${({ theme }) => theme.colors.gradient.neon};
    filter: drop-shadow(0 0 15px ${({ theme }) => theme.colors.neon.cyan});
    animation: float 6s ease-in-out infinite;
  }

  &::before {
    top: 20%;
    right: 10%;
    width: 3px;
    height: 200px;
    animation-delay: 0s;
  }

  &::after {
    bottom: 30%;
    left: 15%;
    width: 150px;
    height: 3px;
    animation-delay: 3s;
  }

  @keyframes float {
    0%, 100% { 
      transform: translateY(0);
      opacity: 0.6;
    }
    50% { 
      transform: translateY(-20px);
      opacity: 1;
    }
  }
`;

const HolographicOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: 
    repeating-linear-gradient(
      45deg,
      transparent,
      transparent 2px,
      rgba(0, 255, 255, 0.03) 3px,
      rgba(0, 255, 255, 0.03) 4px
    );
  animation: hologramFlicker 3s ease-in-out infinite;
  pointer-events: none;
  z-index: 1;

  @keyframes hologramFlicker {
    0%, 100% { opacity: 0.8; }
    50% { opacity: 0.3; }
  }
`;

const DataParticles = styled.div`
  position: absolute;
  width: 4px;
  height: 4px;
  background: ${({ theme }) => theme.colors.neon.cyan};
  border-radius: 50%;
  animation: particleFloat 8s linear infinite;
  filter: drop-shadow(0 0 4px ${({ theme }) => theme.colors.neon.cyan});

  &:nth-child(1) {
    top: 10%;
    left: 20%;
    animation-delay: 0s;
  }

  &:nth-child(2) {
    top: 70%;
    right: 15%;
    animation-delay: 2s;
    background: ${({ theme }) => theme.colors.neon.pink};
    filter: drop-shadow(0 0 4px ${({ theme }) => theme.colors.neon.pink});
  }

  &:nth-child(3) {
    top: 30%;
    left: 80%;
    animation-delay: 4s;
  }

  &:nth-child(4) {
    bottom: 20%;
    left: 10%;
    animation-delay: 6s;
    background: ${({ theme }) => theme.colors.accent};
    filter: drop-shadow(0 0 4px ${({ theme }) => theme.colors.accent});
  }

  @keyframes particleFloat {
    0%, 100% {
      transform: translateY(0) scale(1);
      opacity: 0.7;
    }
    25% {
      transform: translateY(-30px) scale(1.2);
      opacity: 1;
    }
    50% {
      transform: translateY(0) scale(0.8);
      opacity: 0.5;
    }
    75% {
      transform: translateY(20px) scale(1.1);
      opacity: 0.9;
    }
  }
`;

const HeroParticles = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
`;

const Particle = styled(motion.div)<{ size: number; delay: number }>`
  position: absolute;
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  background: ${({ theme }) => theme.colors.neon.cyan};
  border-radius: 50%;
  opacity: 0.6;
`;

const HeroContent = styled(motion.div)`
  position: relative;
  z-index: 2;
  text-align: center;
  max-width: 800px;
  padding: 0 2rem;
`;

const HeroTitle = styled(motion.h1)`
  font-size: 3rem;
  font-family: ${({ theme }) => theme.fonts.display};
  font-weight: 700;
  margin-top: 3rem;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.colors.textSecondary};

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    margin-top: 4rem;
  }
  position: relative;
  text-transform: uppercase;
  letter-spacing: 2px;
  filter: drop-shadow(0 0 15px rgba(0, 212, 255, 0.3));
  text-shadow: 
    0 0 8px rgba(0, 212, 255, 0.4),
    0 0 15px rgba(0, 212, 255, 0.3);

  &::before {
    content: attr(data-text);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    color: ${({ theme }) => theme.colors.neon.cyan};
    animation: ghostShellPulse 4s infinite;
    opacity: 0;
  }

  @keyframes titleGlitch {
    0%, 90%, 100% { opacity: 0; }
    91%, 99% { 
      opacity: 0.8;
      transform: translate(-2px, 1px);
    }
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 4rem;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    font-size: 5rem;
  }
`;

const HeroSubtitle = styled(motion.div)`
  font-size: 1.125rem;
  font-weight: 400;
  background: ${({ theme }) => theme.colors.gradient.primary};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 1rem;
  min-height: 2rem;
  font-family: ${({ theme }) => theme.fonts.mono};
  letter-spacing: 0.5px;
  text-transform: none;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 1.25rem;
  }
`;

const HeroDescription = styled(motion.p)`
  font-size: 1.125rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: 3rem;
  line-height: 1.6;
  font-family: ${({ theme }) => theme.fonts.secondary};
  letter-spacing: 0.5px;
  font-weight: 300;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 1.25rem;
  }
`;

const HeroButtons = styled(motion.div)`
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 3rem;
`;

const HeroButton = styled(motion.a)<{ variant?: 'primary' | 'outline' }>`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  font-family: ${({ theme }) => theme.fonts.primary};
  font-weight: 500;
  letter-spacing: 1px;
  text-transform: uppercase;
  text-decoration: none;
  transition: all ${({ theme }) => theme.animations.fast};
  border: 2px solid;
  cursor: pointer;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.2),
      transparent
    );
    transition: left 0.5s;
  }

  &:hover::before {
    left: 100%;
  }

  ${({ variant, theme }) => {
    if (variant === 'outline') {
      return `
        background: rgba(0, 0, 0, 0.3);
        backdrop-filter: blur(10px);
        color: ${theme.colors.neon.cyan};
        border-color: ${theme.colors.neon.cyan};
        border-image: linear-gradient(45deg, ${theme.colors.neon.cyan}, ${theme.colors.neon.pink}) 1;

        &:hover {
          background: rgba(139, 148, 158, 0.15);
          color: ${theme.colors.text};
          border-color: ${theme.colors.textSecondary};
          box-shadow: 
            0 0 15px rgba(139, 148, 158, 0.2),
            0 0 30px rgba(139, 148, 158, 0.1),
            inset 0 0 20px rgba(139, 148, 158, 0.05);
          transform: translateY(-2px) scale(1.02);
          text-shadow: 0 0 8px rgba(201, 209, 217, 0.3);
        }
      `;
    }
    return `
      background: ${theme.colors.gradient.primary};
      color: white;
      border-color: transparent;
      box-shadow: 0 0 15px rgba(0, 255, 255, 0.3);

      &:hover {
        box-shadow: 
          0 0 20px rgba(139, 148, 158, 0.4),
          0 0 35px rgba(139, 148, 158, 0.2),
          inset 0 0 20px rgba(201, 209, 217, 0.1);
        transform: translateY(-2px) scale(1.02);
        background: linear-gradient(135deg, #8b949e 0%, #c9d1d9 100%);
        color: ${theme.colors.background};
      }
    `;
  }}
`;

const SocialLinks = styled(motion.div)`
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-bottom: 3rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    margin-bottom: 4rem;
  }
`;

const SocialLink = styled(motion.a)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.surface};
  color: ${({ theme }) => theme.colors.textSecondary};
  border: 1px solid ${({ theme }) => theme.colors.border};
  transition: all ${({ theme }) => theme.animations.fast};

  &:hover {
    background: ${({ theme }) => theme.colors.primary};
    color: white;
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: ${({ theme }) => theme.shadows.neon};
    transform: translateY(-2px);
  }
`;

const ScrollIndicator = styled(motion.div)`
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;
  cursor: pointer;
  padding: 1rem;
  transition: all ${({ theme }) => theme.animations.fast};

  &:hover {
    transform: translateX(-50%) scale(1.1);
  }
`;

const ScrollArrow = styled(motion.div)`
  width: 24px;
  height: 24px;
  border: 2px solid ${({ theme }) => theme.colors.neon.cyan};
  border-top: none;
  border-left: none;
  transform: rotate(45deg);
  animation: bounce 2s infinite;

  @keyframes bounce {
    0%, 20%, 50%, 80%, 100% { transform: rotate(45deg) translateY(0); }
    40% { transform: rotate(45deg) translateY(-10px); }
    60% { transform: rotate(45deg) translateY(-5px); }
  }
`;

export const Hero: React.FC = () => {
  const { t, i18n } = useTranslation();

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const particles = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    size: Math.random() * 4 + 2,
    delay: i * 0.5,
    x: Math.random() * 100,
    y: Math.random() * 100,
  }));

  const sequenceArray = useMemo(() => {
    const subtitles = t('hero.subtitle', { returnObjects: true }) as string[];
    const sequence: (string | number)[] = [];
    
    subtitles.forEach((subtitle, index) => {
      sequence.push(subtitle);
      sequence.push(2000);
      if (index < subtitles.length - 1) {
        sequence.push('');
        sequence.push(500);
      }
    });
    
    return sequence;
  }, [t, i18n.language]);

  const handleScrollToContact = () => {
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDownloadCV = () => {
    // Create a temporary link to download the CV
    const link = document.createElement('a');
    link.href = '/assets/curriculo.pdf';
    link.download = 'Matheus_Cardoso_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <HeroSection id="home">
      <ParallaxEffects variant="hero" />
      <HeroBackground>
        <CyberGrid />
        <NeonLines />
        <HolographicOverlay />
        <DataParticles />
        <DataParticles />
        <DataParticles />
        <DataParticles />
        <HeroParticles>
          {particles.map((particle) => (
            <Particle
              key={particle.id}
              size={particle.size}
              delay={particle.delay}
              style={{
                left: `${particle.x}%`,
                top: `${particle.y}%`,
              }}
              animate={{
                y: [-20, 20, -20],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: 4,
                delay: particle.delay,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          ))}
        </HeroParticles>
      </HeroBackground>

      <HeroContent
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="neural-interface"
      >
        <HeroTitle
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          data-text={t('hero.title')}
        >
          {t('hero.title')}
        </HeroTitle>

        <HeroSubtitle
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <TypeAnimation
            key={i18n.language}
            sequence={sequenceArray}
            speed={50}
            repeat={Infinity}
            cursor={true}
          />
        </HeroSubtitle>

        <HeroDescription
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          {t('hero.description')}
        </HeroDescription>

        <HeroButtons
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
        >
          <HeroButton
            onClick={handleScrollToContact}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <MessageCircle size={20} />
            {t('hero.buttons.contact')}
          </HeroButton>

          <HeroButton
            variant="outline"
            onClick={handleDownloadCV}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Download size={20} />
            {t('hero.buttons.download')}
          </HeroButton>
        </HeroButtons>

        <SocialLinks
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <SocialLink
            href="https://github.com/seu-usuario"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
          >
            <Github size={24} />
          </SocialLink>

          <SocialLink
            href="https://www.linkedin.com/in/matheus-cardoso-aba863286/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1, rotate: -5 }}
            whileTap={{ scale: 0.9 }}
          >
            <Linkedin size={24} />
          </SocialLink>

          <SocialLink
            href="mailto:matcardolidev@gmail.com"
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
          >
            <Mail size={24} />
          </SocialLink>
        </SocialLinks>
      </HeroContent>

      <ScrollIndicator
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        onClick={scrollToAbout}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <ScrollArrow />
      </ScrollIndicator>
    </HeroSection>
  );
};

export default Hero;
