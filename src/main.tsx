
import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './i18n';

// Import Cyberpunk Fonts
const fontLink = document.createElement('link');
fontLink.href = 'https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=Share+Tech+Mono:wght@400&family=Electrolize:wght@400&family=Aldrich&family=Iceland&family=Michroma&display=swap';
fontLink.rel = 'stylesheet';
document.head.appendChild(fontLink);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
