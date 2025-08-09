export interface CyberpunkTheme {
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    background: string;
    surface: string;
    text: string;
    textSecondary: string;
    border: string;
    success: string;
    warning: string;
    error: string;
    neon: {
      blue: string;
      cyan: string;
      pink: string;
      purple: string;
      green: string;
    };
    gradient: {
      primary: string;
      secondary: string;
      neon: string;
    };
  };
  fonts: {
    primary: string;
    heading: string;
    secondary: string;
    mono: string;
    display: string;
    special: string;
  };
  shadows: {
    small: string;
    medium: string;
    large: string;
    neon: string;
  };
  breakpoints: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
  };
  animations: {
    fast: string;
    normal: string;
    slow: string;
  };
}

const baseTheme = {
  fonts: {
    primary: '"Orbitron", "Electrolize", sans-serif',
    heading: '"SD Dystopian", "Michroma", "Orbitron", monospace',
    secondary: '"Aldrich", "Iceland", sans-serif', 
    mono: '"Share Tech Mono", "Electrolize", monospace',
    display: '"Glitch Goblin", "SD Dystopian", "Iceland", monospace',
    special: '"Valorax", "Orbitron", monospace',
  },
  breakpoints: {
    xs: '480px',
    sm: '768px',
    md: '1024px',
    lg: '1200px',
    xl: '1400px',
  },
  animations: {
    fast: '0.2s ease-out',
    normal: '0.3s ease-out',
    slow: '0.5s ease-out',
  },
};

export const lightTheme: CyberpunkTheme = {
  ...baseTheme,
  shadows: {
    small: '0 2px 8px rgba(37, 99, 235, 0.08)',
    medium: '0 4px 16px rgba(37, 99, 235, 0.12)',
    large: '0 8px 32px rgba(37, 99, 235, 0.16)',
    neon: '0 0 20px rgba(37, 99, 235, 0.3), 0 0 40px rgba(124, 58, 237, 0.2)',
  },
  colors: {
    primary: '#2563eb', // Azul sofisticado e profissional
    secondary: '#7c3aed', // Roxo elegante
    accent: '#0891b2', // Ciano suave
    background: '#fafbfc', // Branco com leve toque azulado
    surface: '#f1f5f9', // Cinza azulado muito suave
    text: '#0f172a', // Preto azulado profundo
    textSecondary: '#475569', // Cinza azulado médio
    border: '#cbd5e1', // Borda suave azul-cinza
    success: '#059669', // Verde elegante
    warning: '#d97706', // Laranja sofisticado
    error: '#dc2626', // Vermelho elegante
    neon: {
      blue: '#3b82f6', // Azul neon suave
      cyan: '#06b6d4', // Ciano elegante
      pink: '#ec4899', // Rosa sofisticado
      purple: '#8b5cf6', // Roxo neon suave
      green: '#10b981', // Verde neon elegante
    },
    gradient: {
      primary: 'linear-gradient(135deg, #2563eb 0%, #7c3aed 100%)', // Azul para roxo elegante
      secondary: 'linear-gradient(135deg, #06b6d4 0%, #2563eb 100%)', // Ciano para azul suave
      neon: 'linear-gradient(90deg, #3b82f6, #06b6d4, #8b5cf6, #ec4899)', // Paleta harmoniosa
    },
  },
};

export const darkTheme: CyberpunkTheme = {
  ...baseTheme,
  shadows: {
    small: '0 2px 8px rgba(0, 212, 255, 0.1)',
    medium: '0 4px 16px rgba(0, 212, 255, 0.15)',
    large: '0 8px 32px rgba(0, 212, 255, 0.2)',
    neon: '0 0 20px rgba(0, 212, 255, 0.5), 0 0 40px rgba(157, 78, 221, 0.3)',
  },
  colors: {
    primary: '#00d4ff', // Azul ciano Ghost in the Shell
    secondary: '#ff6b35', // Laranja vibrante do filme
    accent: '#9d4edd', // Roxo neural characteristic
    background: '#0d1117', // Preto azulado profundo
    surface: '#161b22', // Superfície com tom azul escuro
    text: '#c9d1d9', // Branco azulado Ghost in the Shell
    textSecondary: '#8b949e', // Cinza azulado suave
    border: '#30363d', // Bordas em tom de grafite
    success: '#238636', // Verde matrix/dados
    warning: '#d29922', // Amarelo de alerta
    error: '#da3633', // Vermelho de sistema
    neon: {
      blue: '#00d4ff', // Azul característico Ghost in the Shell
      cyan: '#64ffda', // Ciano dados/holograma
      pink: '#ff79c6', // Rosa neural interface
      purple: '#9d4edd', // Roxo profundo neural
      green: '#50fa7b', // Verde matrix/código
    },
    gradient: {
      primary: 'linear-gradient(135deg, #00d4ff 0%, #9d4edd 100%)', // Azul para roxo neural
      secondary: 'linear-gradient(135deg, #64ffda 0%, #00d4ff 100%)', // Ciano para azul Ghost
      neon: 'linear-gradient(90deg, #00d4ff, #64ffda, #9d4edd, #ff79c6)', // Paleta completa Ghost in the Shell
    },
  },
};


