import { createGlobalStyle, useTheme } from 'styled-components';
import { CyberpunkTheme } from './theme';

const GlobalStylesComponent = createGlobalStyle<{ theme: CyberpunkTheme }>`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
    font-size: 16px;
  }

  body {
    font-family: ${({ theme }) => theme.fonts.primary};
    font-weight: 400;
    letter-spacing: 0.5px;
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    line-height: 1.6;
    overflow-x: hidden;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
    position: relative;

    /* Background pattern for dark theme */
    &[data-theme="dark"] {
      background: 
        radial-gradient(ellipse at top, #0d1117 0%, #010409 70%),
        radial-gradient(circle at 20% 80%, rgba(0, 212, 255, 0.05) 0%, transparent 50%),
        radial-gradient(circle at 80% 20%, rgba(157, 78, 221, 0.05) 0%, transparent 50%),
        repeating-linear-gradient(
          90deg,
          transparent,
          transparent 120px,
          rgba(0, 212, 255, 0.02) 120px,
          rgba(0, 212, 255, 0.02) 122px
        ),
        repeating-linear-gradient(
          0deg,
          transparent,
          transparent 120px,
          rgba(100, 255, 218, 0.02) 120px,
          rgba(100, 255, 218, 0.02) 122px
        );
      background-attachment: fixed;

      &::before {
        content: '';
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: 
          radial-gradient(circle at 20% 80%, rgba(0, 255, 255, 0.08) 0%, transparent 50%),
          radial-gradient(circle at 80% 20%, rgba(255, 20, 147, 0.08) 0%, transparent 50%),
          radial-gradient(circle at 40% 40%, rgba(0, 255, 255, 0.04) 0%, transparent 50%);
        pointer-events: none;
        z-index: -1;
        animation: atmosphereShift 30s ease-in-out infinite;
      }
    }

    /* Background pattern for light theme */
    &[data-theme="light"] {
      background: 
        linear-gradient(135deg, #fafbfc 0%, #f1f5f9 100%),
        radial-gradient(circle at 20% 80%, rgba(37, 99, 235, 0.03) 0%, transparent 50%),
        radial-gradient(circle at 80% 20%, rgba(124, 58, 237, 0.03) 0%, transparent 50%),
        repeating-linear-gradient(
          90deg,
          transparent,
          transparent 120px,
          rgba(37, 99, 235, 0.01) 120px,
          rgba(37, 99, 235, 0.01) 122px
        ),
        repeating-linear-gradient(
          0deg,
          transparent,
          transparent 120px,
          rgba(6, 182, 212, 0.01) 120px,
          rgba(6, 182, 212, 0.01) 122px
        );
      background-attachment: fixed;

      &::before {
        content: '';
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: 
          radial-gradient(circle at 20% 80%, rgba(37, 99, 235, 0.05) 0%, transparent 50%),
          radial-gradient(circle at 80% 20%, rgba(124, 58, 237, 0.04) 0%, transparent 50%),
          radial-gradient(circle at 40% 40%, rgba(6, 182, 212, 0.03) 0%, transparent 50%);
        pointer-events: none;
        z-index: -1;
        animation: atmosphereShift 30s ease-in-out infinite;
      }
    }

    @keyframes atmosphereShift {
      0%, 100% { opacity: 0.3; transform: scale(1) rotate(0deg); }
      50% { opacity: 0.6; transform: scale(1.1) rotate(180deg); }
    }
  }

  ::selection {
    background-color: ${({ theme }) => theme.colors.neon.cyan};
    color: ${({ theme }) => theme.colors.background};
  }

  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors.surface};
  }

  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.primary};
    border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => theme.colors.secondary};
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${({ theme }) => theme.fonts.heading};
    font-weight: 700;
    letter-spacing: 1px;
    text-transform: uppercase;
    line-height: 1.2;
  }

  h1 {
    font-family: ${({ theme }) => theme.fonts.display};
    font-weight: 900;
    letter-spacing: 2px;
    text-shadow: 0 0 20px rgba(0, 255, 255, 0.3);
  }

  h2 {
    font-family: ${({ theme }) => theme.fonts.heading};
    letter-spacing: 1.5px;
  }

  h3 {
    font-family: ${({ theme }) => theme.fonts.secondary};
    letter-spacing: 1px;
  }

  p {
    margin-bottom: 1rem;
  }

  a {
    text-decoration: none;
    color: inherit;
    transition: all ${({ theme }) => theme.animations.fast};
  }

  button {
    cursor: pointer;
    border: none;
    background: none;
    font-family: ${({ theme }) => theme.fonts.primary};
    font-weight: 500;
    letter-spacing: 0.5px;
    transition: all ${({ theme }) => theme.animations.fast};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code, pre {
    font-family: ${({ theme }) => theme.fonts.mono};
    letter-spacing: 0;
    font-weight: 400;
  }

  .cyber-text {
    font-family: ${({ theme }) => theme.fonts.display};
    text-transform: uppercase;
    letter-spacing: 2px;
    font-weight: 900;
  }

  .tech-text {
    font-family: ${({ theme }) => theme.fonts.mono};
    letter-spacing: 1px;
    font-weight: 400;
  }

  .glitch-title {
    font-family: ${({ theme }) => theme.fonts.display};
    text-transform: uppercase;
    letter-spacing: 3px;
    font-weight: 900;
    animation: glitchText 2s infinite;
  }

  .dystopian-heading {
    font-family: ${({ theme }) => theme.fonts.heading};
    text-transform: uppercase;
    letter-spacing: 2px;
    font-weight: bold;
    text-shadow: 0 0 20px rgba(0, 212, 255, 0.5);
  }

  .special-text {
    font-family: ${({ theme }) => theme.fonts.special};
    letter-spacing: 1.5px;
    text-transform: uppercase;
    font-weight: 700;
  }

  .ghost-shell-glow {
    text-shadow: 
      0 0 5px rgba(0, 212, 255, 0.8),
      0 0 10px rgba(0, 212, 255, 0.6),
      0 0 20px rgba(0, 212, 255, 0.4),
      0 0 40px rgba(0, 212, 255, 0.2);
    animation: ghostShellPulse 3s ease-in-out infinite;
  }

  .neural-interface {
    background: linear-gradient(45deg, transparent 30%, rgba(0, 212, 255, 0.1) 50%, transparent 70%);
    border: 1px solid rgba(0, 212, 255, 0.3);
    box-shadow: 
      inset 0 0 20px rgba(0, 212, 255, 0.1),
      0 0 20px rgba(0, 212, 255, 0.2);
    position: relative;
    overflow: hidden;
  }

  .neural-interface::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: 
      repeating-linear-gradient(
        0deg,
        transparent,
        transparent 2px,
        rgba(0, 212, 255, 0.05) 2px,
        rgba(0, 212, 255, 0.05) 4px
      );
    animation: neuralScan 4s linear infinite;
    pointer-events: none;
  }

  .holo-effect {
    background: linear-gradient(45deg, 
      rgba(100, 255, 218, 0.1) 0%,
      rgba(0, 212, 255, 0.1) 50%,
      rgba(157, 78, 221, 0.1) 100%
    );
    backdrop-filter: blur(2px);
    border: 1px solid rgba(100, 255, 218, 0.2);
    animation: holoFlicker 2s ease-in-out infinite;
  }

  @keyframes glitchText {
    0%, 100% { 
      transform: translate(0);
      filter: hue-rotate(0deg);
    }
    10% { 
      transform: translate(-2px, 2px);
      filter: hue-rotate(90deg);
    }
    20% { 
      transform: translate(-2px, -2px);
      filter: hue-rotate(180deg);
    }
    30% { 
      transform: translate(2px, 2px);
      filter: hue-rotate(270deg);
    }
    40% { 
      transform: translate(2px, -2px);
      filter: hue-rotate(360deg);
    }
    50% { 
      transform: translate(-2px, 2px);
      filter: hue-rotate(90deg);
    }
    60% { 
      transform: translate(-2px, -2px);
      filter: hue-rotate(180deg);
    }
    70% { 
      transform: translate(2px, 2px);
      filter: hue-rotate(270deg);
    }
    80% { 
      transform: translate(-2px, -2px);
      filter: hue-rotate(180deg);
    }
    90% { 
      transform: translate(2px, 2px);
      filter: hue-rotate(90deg);
    }
  }

  @keyframes ghostShellPulse {
    0%, 100% { 
      text-shadow: 
        0 0 5px rgba(0, 212, 255, 0.8),
        0 0 10px rgba(0, 212, 255, 0.6),
        0 0 20px rgba(0, 212, 255, 0.4);
    }
    50% { 
      text-shadow: 
        0 0 10px rgba(0, 212, 255, 1),
        0 0 20px rgba(0, 212, 255, 0.8),
        0 0 40px rgba(0, 212, 255, 0.6),
        0 0 80px rgba(0, 212, 255, 0.4);
    }
  }

  @keyframes neuralScan {
    0% { transform: translateY(-100%); }
    100% { transform: translateY(100%); }
  }

  @keyframes holoFlicker {
    0%, 100% { 
      opacity: 1;
      filter: brightness(1);
    }
    50% { 
      opacity: 0.8;
      filter: brightness(1.2);
    }
    75% { 
      opacity: 0.9;
      filter: brightness(0.9);
    }
  }

  @keyframes ghostShellFloat {
    0%, 100% { 
      transform: translateY(0px) rotate(0deg);
    }
    33% { 
      transform: translateY(-10px) rotate(1deg);
    }
    66% { 
      transform: translateY(5px) rotate(-0.5deg);
    }
  }

  img {
    max-width: 100%;
    height: auto;
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;

    @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
      padding: 0 2rem;
    }
  }

  .section {
    padding: 4rem 0;

    @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
      padding: 6rem 0;
    }
  }

  .section-title {
    font-size: 2.5rem;
    font-weight: 900;
    text-align: center;
    margin-bottom: 1rem;
    background: ${({ theme }) => theme.colors.gradient.primary};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;

    @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
      font-size: 3rem;
    }
  }

  .section-subtitle {
    font-size: 1.125rem;
    color: ${({ theme }) => theme.colors.textSecondary};
    text-align: center;
    margin-bottom: 3rem;
  }

  .glitch-text {
    position: relative;
    font-family: ${({ theme }) => theme.fonts.secondary};
    font-weight: 900;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    animation: glitch 2s infinite;
    
    &::before,
    &::after {
      content: attr(data-text);
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
    
    &::before {
      animation: glitch-1 0.5s infinite;
      color: ${({ theme }) => theme.colors.neon.cyan};
      z-index: -1;
    }
    
    &::after {
      animation: glitch-2 0.5s infinite;
      color: ${({ theme }) => theme.colors.neon.pink};
      z-index: -2;
    }
  }

  @keyframes glitch {
    0%, 74%, 76%, 80%, 83%, 100% {
      transform: translate(0);
    }
    75% {
      transform: translate(-2px, 2px);
    }
    77% {
      transform: translate(2px, -2px);
    }
    78% {
      transform: translate(-1px, 1px);
    }
    79% {
      transform: translate(1px, -1px);
    }
    81% {
      transform: translate(-1px, -1px);
    }
    82% {
      transform: translate(1px, 1px);
    }
  }

  @keyframes glitch-1 {
    0%, 49%, 51%, 100% {
      transform: translate(0);
    }
    50% {
      transform: translate(1px, -1px);
    }
  }

  @keyframes glitch-2 {
    0%, 24%, 26%, 100% {
      transform: translate(0);
    }
    25% {
      transform: translate(-1px, 1px);
    }
  }

  .neon-glow {
    text-shadow: 
      0 0 5px ${({ theme }) => theme.colors.neon.cyan},
      0 0 10px ${({ theme }) => theme.colors.neon.cyan},
      0 0 15px ${({ theme }) => theme.colors.neon.cyan},
      0 0 20px ${({ theme }) => theme.colors.neon.cyan};
  }

  .cyber-grid {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0.03;
    pointer-events: none;
    background-image: 
      linear-gradient(${({ theme }) => theme.colors.neon.cyan} 1px, transparent 1px),
      linear-gradient(90deg, ${({ theme }) => theme.colors.neon.cyan} 1px, transparent 1px);
    background-size: 50px 50px;
    animation: grid-move 20s linear infinite;
  }

  @keyframes grid-move {
    0% {
      transform: translate(0, 0);
    }
    100% {
      transform: translate(50px, 50px);
    }
  }

  .fade-in {
    opacity: 0;
    animation: fadeIn 1s ease-out forwards;
  }

  @keyframes fadeIn {
    to {
      opacity: 1;
    }
  }

  .slide-up {
    transform: translateY(30px);
    opacity: 0;
    animation: slideUp 0.8s ease-out forwards;
  }

  @keyframes slideUp {
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

  /* Cyberpunk Global Effects */
  .cyber-grid {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: -2;
    background-image: 
      linear-gradient(rgba(0, 255, 255, 0.05) 1px, transparent 1px),
      linear-gradient(90deg, rgba(0, 255, 255, 0.05) 1px, transparent 1px);
    background-size: 50px 50px;
    animation: gridPulse 4s ease-in-out infinite;
  }

  @keyframes gridPulse {
    0%, 100% { opacity: 0.3; }
    50% { opacity: 0.7; }
  }

  /* Glitch Effect for Text */
  .glitch {
    position: relative;
    color: ${({ theme }) => theme.colors.text};
    animation: glitch 3s infinite;
  }

  .glitch::before,
  .glitch::after {
    content: attr(data-text);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .glitch::before {
    animation: glitch-1 0.5s infinite;
    color: ${({ theme }) => theme.colors.neon.cyan};
    z-index: -1;
  }

  .glitch::after {
    animation: glitch-2 0.5s infinite;
    color: ${({ theme }) => theme.colors.neon.pink};
    z-index: -2;
  }

  @keyframes glitch {
    0%, 90%, 100% {
      transform: translate(0);
    }
    20% {
      transform: translate(-2px, 2px);
    }
    40% {
      transform: translate(-2px, -2px);
    }
    60% {
      transform: translate(2px, 2px);
    }
    80% {
      transform: translate(2px, -2px);
    }
  }

  @keyframes glitch-1 {
    0%, 90%, 100% {
      transform: translate(0);
    }
    10% {
      transform: translate(-2px, -2px);
    }
    30% {
      transform: translate(2px, 2px);
    }
    50% {
      transform: translate(-2px, 2px);
    }
    70% {
      transform: translate(2px, -2px);
    }
  }

  @keyframes glitch-2 {
    0%, 90%, 100% {
      transform: translate(0);
    }
    20% {
      transform: translate(2px, -2px);
    }
    40% {
      transform: translate(-2px, 2px);
    }
    60% {
      transform: translate(2px, 2px);
    }
    80% {
      transform: translate(-2px, -2px);
    }
  }

  /* Neon Border Effect */
  .neon-border {
    border: 2px solid ${({ theme }) => theme.colors.neon.cyan};
    box-shadow: 
      0 0 10px ${({ theme }) => theme.colors.neon.cyan},
      inset 0 0 10px ${({ theme }) => theme.colors.neon.cyan};
    animation: neonPulse 2s ease-in-out infinite alternate;
  }

  @keyframes neonPulse {
    from {
      box-shadow: 
        0 0 10px ${({ theme }) => theme.colors.neon.cyan},
        inset 0 0 10px ${({ theme }) => theme.colors.neon.cyan};
    }
    to {
      box-shadow: 
        0 0 20px ${({ theme }) => theme.colors.neon.cyan},
        0 0 30px ${({ theme }) => theme.colors.neon.cyan},
        inset 0 0 15px ${({ theme }) => theme.colors.neon.cyan};
    }
  }

  /* Holographic effect */
  .holographic {
    background: linear-gradient(
      45deg,
      transparent 30%,
      rgba(0, 255, 255, 0.1) 50%,
      transparent 70%
    );
    background-size: 200% 200%;
    animation: holographicShift 3s ease-in-out infinite;
  }

  @keyframes holographicShift {
    0%, 100% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
  }

  /* Data stream effect */
  .data-stream {
    position: relative;
    overflow: hidden;
  }

  .data-stream::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(0, 255, 255, 0.4),
      transparent
    );
    animation: dataFlow 2s linear infinite;
  }

  @keyframes dataFlow {
    0% {
      left: -100%;
    }
    100% {
      left: 100%;
    }
  }

  /* Melhorar renderização em dispositivos de alta densidade */
  @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
    * {
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }
  }

  /* Melhorar renderização em dispositivos móveis */
  @media (max-width: 768px) {
    * {
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      text-rendering: optimizeLegibility;
    }
    
    /* Prevenir zoom no foco de inputs em iOS */
    input, select, textarea {
      font-size: 16px;
    }
  }

  /* Overlay de transição gradual de tema */
  .theme-transition-overlay {
    position: fixed;
    top: -100vh;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 9999;
    pointer-events: none;
    transition: none;
    will-change: transform, opacity;
    transform: translateZ(0);
    backface-visibility: hidden;
  }

  .theme-transition-overlay.dark-to-light {
    background: linear-gradient(
      180deg,
      rgba(250, 251, 252, 0.9) 0%,
      rgba(241, 245, 249, 0.8) 25%,
      rgba(226, 232, 240, 0.7) 50%,
      rgba(203, 213, 225, 0.6) 75%,
      rgba(148, 163, 184, 0.5) 100%
    );
    mix-blend-mode: overlay;
  }

  .theme-transition-overlay.light-to-dark {
    background: linear-gradient(
      180deg,
      rgba(13, 17, 23, 0.9) 0%,
      rgba(22, 27, 34, 0.8) 25%,
      rgba(33, 38, 45, 0.7) 50%,
      rgba(48, 54, 61, 0.6) 75%,
      rgba(72, 79, 88, 0.5) 100%
    );
    mix-blend-mode: multiply;
  }

  .theme-transition-overlay.animating {
    animation: slideDownTransition 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
  }

  @keyframes slideDownTransition {
    0% {
      transform: translateY(-100vh);
      opacity: 0;
    }
    10% {
      opacity: 0.7;
    }
    50% {
      transform: translateY(0);
      opacity: 1;
    }
    90% {
      opacity: 0.7;
    }
    100% {
      transform: translateY(100vh);
      opacity: 0;
    }
  }
`;

const GlobalStyles = () => {
  const theme = useTheme() as CyberpunkTheme;
  return <GlobalStylesComponent theme={theme} />;
};

export default GlobalStyles;
