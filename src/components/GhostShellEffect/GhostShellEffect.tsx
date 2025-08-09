import styled from 'styled-components';
import { motion } from 'framer-motion';

const GhostShellContainer = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: -1;
  overflow: hidden;
`;

const MatrixLine = styled(motion.div)<{ delay: number }>`
  position: absolute;
  width: 2px;
  height: 100%;
  background: linear-gradient(
    to bottom,
    transparent 0%,
    ${({ theme }) => theme.colors.neon.cyan} 50%,
    transparent 100%
  );
  opacity: 0.3;
  animation: matrixFall 8s linear infinite;
  animation-delay: ${({ delay }) => delay}s;

  @keyframes matrixFall {
    0% {
      transform: translateY(-100%);
      opacity: 0;
    }
    10% {
      opacity: 0.3;
    }
    90% {
      opacity: 0.3;
    }
    100% {
      transform: translateY(100vh);
      opacity: 0;
    }
  }
`;

const HologramGrid = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: 
    linear-gradient(rgba(0, 212, 255, 0.02) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0, 212, 255, 0.02) 1px, transparent 1px);
  background-size: 50px 50px;
  animation: gridShift 20s linear infinite;

  @keyframes gridShift {
    0% { transform: translate(0, 0); }
    100% { transform: translate(50px, 50px); }
  }
`;

const NeuralConnection = styled(motion.div)<{ x: number; y: number }>`
  position: absolute;
  width: 4px;
  height: 4px;
  background: ${({ theme }) => theme.colors.neon.cyan};
  border-radius: 50%;
  left: ${({ x }) => x}%;
  top: ${({ y }) => y}%;
  
  &::before {
    content: '';
    position: absolute;
    width: 2px;
    height: 60px;
    background: linear-gradient(
      to bottom,
      ${({ theme }) => theme.colors.neon.cyan},
      transparent
    );
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    animation: neuralPulse 3s ease-in-out infinite;
  }

  @keyframes neuralPulse {
    0%, 100% { opacity: 0.3; }
    50% { opacity: 1; }
  }
`;

const GhostShellEffect = () => {
  const matrixLines = Array.from({ length: 20 }, (_, i) => (
    <MatrixLine
      key={i}
      delay={i * 0.5}
      style={{ left: `${(i * 5) % 100}%` }}
    />
  ));

  const neuralPoints = Array.from({ length: 8 }, (_, i) => (
    <NeuralConnection
      key={i}
      x={Math.random() * 100}
      y={Math.random() * 100}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ 
        opacity: [0, 1, 0],
        scale: [0, 1, 0]
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        delay: i * 0.8
      }}
    />
  ));

  return (
    <GhostShellContainer>
      <HologramGrid />
      {matrixLines}
      {neuralPoints}
    </GhostShellContainer>
  );
};

export default GhostShellEffect;
