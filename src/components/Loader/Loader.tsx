import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { TypeAnimation } from 'react-type-animation';

const LoaderContainer = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(ellipse at center, #0a0a0a 0%, #000000 70%);
  z-index: 9999;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      repeating-linear-gradient(
        90deg,
        transparent,
        transparent 98px,
        rgba(0, 255, 255, 0.03) 100px
      ),
      repeating-linear-gradient(
        0deg,
        transparent,
        transparent 98px,
        rgba(255, 20, 147, 0.03) 100px
      );
    animation: gridMove 20s linear infinite;
  }

  @keyframes gridMove {
    0% { transform: translate(0, 0); }
    100% { transform: translate(100px, 100px); }
  }
`;

const SpinnerContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const TextContainer = styled.div`
  position: absolute;
  bottom: 25%;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  text-align: center;
`;

const CyberSpinnerWrapper = styled.div`
  position: relative;
  width: 120px;
  height: 120px;
`;

const CyberSpinner = styled.div`
  width: 120px;
  height: 120px;
  border: 3px solid transparent;
  border-top: 3px solid ${({ theme }) => theme.colors.neon.cyan};
  border-right: 3px solid ${({ theme }) => theme.colors.neon.pink};
  border-radius: 50%;
  animation: spin 2s linear infinite;
  position: relative;
  filter: drop-shadow(0 0 10px ${({ theme }) => theme.colors.neon.cyan}) 
          drop-shadow(0 0 20px ${({ theme }) => theme.colors.neon.cyan});

  &::before {
    content: '';
    position: absolute;
    top: 8px;
    left: 8px;
    right: 8px;
    bottom: 8px;
    border: 2px solid transparent;
    border-top: 2px solid ${({ theme }) => theme.colors.neon.pink};
    border-left: 2px solid ${({ theme }) => theme.colors.neon.cyan};
    border-radius: 50%;
    animation: spin 1.5s linear infinite reverse;
    filter: drop-shadow(0 0 8px ${({ theme }) => theme.colors.neon.pink});
  }

  &::after {
    content: '';
    position: absolute;
    top: 16px;
    left: 16px;
    right: 16px;
    bottom: 16px;
    border: 1px solid transparent;
    border-bottom: 1px solid ${({ theme }) => theme.colors.accent};
    border-right: 1px solid ${({ theme }) => theme.colors.accent};
    border-radius: 50%;
    animation: spin 1s linear infinite;
    filter: drop-shadow(0 0 6px ${({ theme }) => theme.colors.accent});
  }

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

const OuterRing = styled.div`
  position: absolute;
  top: -15px;
  left: -15px;
  width: 150px;
  height: 150px;
  border: 1px solid transparent;
  border-top: 1px solid rgba(0, 255, 255, 0.3);
  border-bottom: 1px solid rgba(255, 20, 147, 0.3);
  border-radius: 50%;
  animation: slowSpin 8s linear infinite;

  @keyframes slowSpin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

const InnerPulse = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 20px;
  height: 20px;
  background: radial-gradient(circle, ${({ theme }) => theme.colors.neon.cyan}, transparent);
  border-radius: 50%;
  transform: translate(-50%, -50%);
  animation: pulse 2s ease-in-out infinite;

  @keyframes pulse {
    0%, 100% { 
      transform: translate(-50%, -50%) scale(1);
      opacity: 1;
    }
    50% { 
      transform: translate(-50%, -50%) scale(1.5);
      opacity: 0.7;
    }
  }
`;

const LoadingDots = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 1rem;
  justify-content: center;
`;

const Dot = styled.div`
  width: 8px;
  height: 8px;
  background: ${({ theme }) => theme.colors.neon.cyan};
  border-radius: 50%;
  animation: dotPulse 1.5s ease-in-out infinite;
  filter: drop-shadow(0 0 4px ${({ theme }) => theme.colors.neon.cyan});

  &:nth-child(1) { animation-delay: 0s; }
  &:nth-child(2) { animation-delay: 0.2s; }
  &:nth-child(3) { animation-delay: 0.4s; }
  &:nth-child(4) { animation-delay: 0.6s; }
  &:nth-child(5) { animation-delay: 0.8s; }

  @keyframes dotPulse {
    0%, 80%, 100% { 
      transform: scale(0.8);
      opacity: 0.5;
    }
    40% { 
      transform: scale(1.2);
      opacity: 1;
    }
  }
`;

const GlitchEffect = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    45deg,
    transparent 49%,
    rgba(255, 20, 147, 0.1) 50%,
    transparent 51%
  );
  animation: glitch 3s infinite;
  pointer-events: none;

  @keyframes glitch {
    0%, 90%, 100% { opacity: 0; }
    91%, 99% { opacity: 1; }
  }
`;

const LoaderText = styled.div`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.neon.cyan};
  min-height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  letter-spacing: 2px;
  filter: drop-shadow(0 0 8px ${({ theme }) => theme.colors.neon.cyan});
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: -5px;
    left: -10px;
    right: -10px;
    bottom: -5px;
    background: linear-gradient(45deg, transparent, rgba(0, 255, 255, 0.1), transparent);
    border-radius: 4px;
    animation: textGlow 2s ease-in-out infinite alternate;
  }

  @keyframes textGlow {
    0% { opacity: 0.3; }
    100% { opacity: 0.8; }
  }
`;

const ProgressBar = styled.div`
  width: 300px;
  height: 4px;
  background: rgba(0, 255, 255, 0.1);
  border-radius: 2px;
  margin-top: 2rem;
  position: relative;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      ${({ theme }) => theme.colors.neon.cyan},
      transparent
    );
    animation: progressSweep 2s ease-in-out infinite;
  }

  @keyframes progressSweep {
    0% { left: -100%; }
    100% { left: 100%; }
  }
`;

const HexGrid = styled.div`
  position: absolute;
  width: 200px;
  height: 200px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0.1;

  &::before,
  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background-image: 
      repeating-linear-gradient(
        30deg,
        transparent,
        transparent 10px,
        rgba(0, 255, 255, 0.2) 12px
      ),
      repeating-linear-gradient(
        -30deg,
        transparent,
        transparent 10px,
        rgba(255, 20, 147, 0.2) 12px
      );
    animation: hexRotate 10s linear infinite;
  }

  &::after {
    animation-direction: reverse;
    animation-duration: 15s;
  }

  @keyframes hexRotate {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

interface LoaderProps {
  isVisible: boolean;
  onComplete: () => void;
}

export const Loader: React.FC<LoaderProps> = ({ isVisible, onComplete }) => {
  const { t } = useTranslation();
  const messages = t('loader.messages', { returnObjects: true }) as string[];

  useEffect(() => {
    if (!isVisible) return;

    const timer = setTimeout(() => {
      onComplete();
    }, 4500);

    return () => clearTimeout(timer);
  }, [isVisible, onComplete]);

  const sequenceArray: (string | number)[] = [];
  messages.forEach((message, index) => {
    sequenceArray.push(message);
    sequenceArray.push(1000); // pause between messages
    if (index < messages.length - 1) {
      sequenceArray.push('');
      sequenceArray.push(300); // clear text pause
    }
  });

  return (
    <AnimatePresence>
      {isVisible && (
        <LoaderContainer
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            scale: 0.8,
            transition: { duration: 0.5, ease: 'easeInOut' }
          }}
        >
          {/* Background effects */}
          <GlitchEffect />
          <HexGrid />
          
          {/* Spinner sempre centralizado */}
          <SpinnerContainer>
            <motion.div
              initial={{ scale: 0, opacity: 0, rotateY: 180 }}
              animate={{ 
                scale: 1, 
                opacity: 1,
                rotateY: 0,
                transition: { 
                  duration: 0.8, 
                  delay: 0.2,
                  type: "spring",
                  stiffness: 100
                }
              }}
            >
              <CyberSpinnerWrapper>
                <OuterRing />
                <CyberSpinner />
                <InnerPulse />
              </CyberSpinnerWrapper>
            </motion.div>
          </SpinnerContainer>
          
          {/* Texto posicionado independentemente */}
          <TextContainer>
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ 
                y: 0, 
                opacity: 1,
                transition: { duration: 0.6, delay: 0.8 }
              }}
            >
              <LoaderText>
                <TypeAnimation
                  sequence={sequenceArray}
                  speed={60}
                  style={{ 
                    fontSize: '1.2rem',
                    textTransform: 'uppercase',
                    letterSpacing: '2px'
                  }}
                  repeat={0}
                  cursor={true}
                />
              </LoaderText>
              
              <LoadingDots>
                <Dot />
                <Dot />
                <Dot />
                <Dot />
                <Dot />
              </LoadingDots>
              
              <ProgressBar />
            </motion.div>
          </TextContainer>
        </LoaderContainer>
      )}
    </AnimatePresence>
  );
};

export default Loader;
