import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useParallax, useMultiLayerParallax } from '../../hooks/useParallax';

const ParallaxContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  pointer-events: none;
  z-index: 0;
`;

const ParallaxLayer = styled.div<{ transform: string }>`
  position: absolute;
  width: 120%;
  height: 120%;
  left: -10%;
  top: -10%;
  will-change: transform;
  transform: ${({ transform }) => transform};
`;

// Partículas flutuantes cyberpunk
const CyberParticle = styled(motion.div)<{ size: number; color: string }>`
  position: absolute;
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  background: ${({ color }) => color};
  border-radius: 50%;
  box-shadow: 0 0 ${({ size }) => size * 2}px ${({ color }) => color};
  opacity: 0.6;
`;

// Linhas de código matriz
const MatrixLine = styled.div<{ delay: number }>`
  position: absolute;
  width: 2px;
  height: 100px;
  background: linear-gradient(
    180deg,
    transparent 0%,
    ${({ theme }) => theme.colors.neon.cyan}80 50%,
    transparent 100%
  );
  animation: matrixFall 8s linear infinite;
  animation-delay: ${({ delay }) => delay}s;
  opacity: 0.4;

  @keyframes matrixFall {
    0% {
      transform: translateY(-100px);
      opacity: 0;
    }
    10% {
      opacity: 0.4;
    }
    90% {
      opacity: 0.4;
    }
    100% {
      transform: translateY(100vh);
      opacity: 0;
    }
  }
`;

// Hexágonos cyberpunk
const CyberHex = styled.div<{ size: number; rotation: number }>`
  position: absolute;
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  border: 1px solid ${({ theme }) => theme.colors.neon.cyan}30;
  transform: rotate(${({ rotation }) => rotation}deg);
  
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 70%;
    height: 70%;
    border: 1px solid ${({ theme }) => theme.colors.neon.purple}20;
    transform: translate(-50%, -50%) rotate(30deg);
  }
`;

interface ParallaxParticle {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
  layer: number;
}

interface ParallaxEffectsProps {
  variant?: 'hero' | 'section' | 'minimal';
}

export const ParallaxEffects: React.FC<ParallaxEffectsProps> = ({ 
  variant = 'hero' 
}) => {
  const layers = useMultiLayerParallax([
    { speed: 0.1, direction: 'up' },    // Camada de fundo
    { speed: 0.3, direction: 'up' },    // Camada média
    { speed: 0.6, direction: 'up' },    // Camada frontal
  ]);

  // Gerar partículas proceduralmente
  const particles: ParallaxParticle[] = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 1,
    color: [
      '#00d4ff', 
      '#9d4edd', 
      '#ff006e', 
      '#00f5ff'
    ][Math.floor(Math.random() * 4)],
    layer: Math.floor(Math.random() * 3),
  }));

  // Linhas matriz
  const matrixLines = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    delay: Math.random() * 8,
  }));

  // Hexágonos
  const hexagons = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 60 + 40,
    rotation: Math.random() * 360,
    layer: Math.floor(Math.random() * 3),
  }));

  if (variant === 'minimal') {
    return (
      <ParallaxContainer>
        <ParallaxLayer transform={layers[0]}>
          {particles.slice(0, 15).map((particle) => (
            <CyberParticle
              key={`minimal-${particle.id}`}
              size={particle.size}
              color={particle.color}
              style={{
                left: `${particle.x}%`,
                top: `${particle.y}%`,
              }}
              animate={{
                opacity: [0.3, 0.8, 0.3],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          ))}
        </ParallaxLayer>
      </ParallaxContainer>
    );
  }

  return (
    <ParallaxContainer>
      {/* Camada de fundo - movimento lento */}
      <ParallaxLayer transform={layers[0]}>
        {hexagons
          .filter((hex) => hex.layer === 0)
          .map((hex) => (
            <CyberHex
              key={`hex-bg-${hex.id}`}
              size={hex.size}
              rotation={hex.rotation}
              style={{
                left: `${hex.x}%`,
                top: `${hex.y}%`,
              }}
            />
          ))}
      </ParallaxLayer>

      {/* Camada média */}
      <ParallaxLayer transform={layers[1]}>
        {particles
          .filter((particle) => particle.layer === 1)
          .map((particle) => (
            <CyberParticle
              key={`particle-mid-${particle.id}`}
              size={particle.size}
              color={particle.color}
              style={{
                left: `${particle.x}%`,
                top: `${particle.y}%`,
              }}
              animate={{
                opacity: [0.4, 0.9, 0.4],
                scale: [1, 1.3, 1],
              }}
              transition={{
                duration: 4 + Math.random() * 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          ))}

        {/* Linhas matriz */}
        {matrixLines.map((line) => (
          <MatrixLine
            key={`matrix-${line.id}`}
            delay={line.delay}
            style={{
              left: `${line.x}%`,
            }}
          />
        ))}
      </ParallaxLayer>

      {/* Camada frontal - movimento rápido */}
      <ParallaxLayer transform={layers[2]}>
        {particles
          .filter((particle) => particle.layer === 2)
          .map((particle) => (
            <CyberParticle
              key={`particle-front-${particle.id}`}
              size={particle.size * 1.5}
              color={particle.color}
              style={{
                left: `${particle.x}%`,
                top: `${particle.y}%`,
              }}
              animate={{
                opacity: [0.6, 1, 0.6],
                scale: [1, 1.4, 1],
              }}
              transition={{
                duration: 2 + Math.random() * 1.5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          ))}

        {hexagons
          .filter((hex) => hex.layer === 2)
          .map((hex) => (
            <CyberHex
              key={`hex-front-${hex.id}`}
              size={hex.size * 0.7}
              rotation={hex.rotation}
              style={{
                left: `${hex.x}%`,
                top: `${hex.y}%`,
              }}
            />
          ))}
      </ParallaxLayer>
    </ParallaxContainer>
  );
};
