import { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { HelmetProvider } from 'react-helmet-async';
import { darkTheme } from '@styles/theme';
import GlobalStyles from '@styles/GlobalStyles';
import { AppProvider, useApp } from '@/contexts/AppContext';
import { Loader } from '@components/Loader';
import { Header } from '@components/Header';
import { Hero } from '@components/Hero';
import { About } from '@components/About';
import { Projects } from '@components/Projects';
import { Skills } from '@components/Skills';
import { Contact } from '@components/Contact';
import { Footer } from '@components/Footer';
import { BackToTop } from '@components/BackToTop';
import GhostShellEffect from './components/GhostShellEffect';

function AppContent() {
  const { isLoading, setIsLoading } = useApp();
  const [activeSection, setActiveSection] = useState('home');

  const currentTheme = darkTheme;

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'skills', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <ThemeProvider theme={currentTheme}>
      <HelmetProvider>
        <GlobalStyles />
        
        <Loader 
          isVisible={isLoading} 
          onComplete={() => setIsLoading(false)} 
        />

        {/* Ghost in the Shell Background Effect */}
        <GhostShellEffect />

        {!isLoading && (
          <>
            <Header activeSection={activeSection} />
            <main>
              <Hero />
              <About />
              <Projects />
              <Skills />
              <Contact />
            </main>
            <Footer />
            <BackToTop />
          </>
        )}
      </HelmetProvider>
    </ThemeProvider>
  );
}

function App() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
}

export default App;
