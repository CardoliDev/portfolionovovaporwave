import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { Menu, X, Globe } from 'lucide-react';
import { useApp } from '@/contexts/AppContext';
import { LanguageCode } from '@/types';

const HeaderContainer = styled(motion.header)<{ isScrolled: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: 1rem 0;
  background: ${({ isScrolled, theme }) => 
    isScrolled 
      ? `${theme.colors.background}cc` 
      : 'transparent'
  };
  backdrop-filter: ${({ isScrolled }) => isScrolled ? 'blur(10px)' : 'none'};
  border-bottom: ${({ isScrolled, theme }) => 
    isScrolled 
      ? `1px solid ${theme.colors.border}` 
      : 'none'
  };
  transition: all ${({ theme }) => theme.animations.normal};
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: 0 2rem;
  }
`;

const Logo = styled(motion.div)`
  font-family: ${({ theme }) => theme.fonts.special};
  font-size: 1.5rem;
  font-weight: 900;
  color: ${({ theme }) => theme.colors.text};
  cursor: pointer;
  letter-spacing: 2px;
  text-transform: uppercase;
  text-shadow: 0 0 15px rgba(0, 255, 255, 0.4);
  
  .brand-text {
    color: ${({ theme }) => theme.colors.text};
  }
  
  .brand-glow {
    color: ${({ theme }) => theme.colors.neon.cyan};
    text-shadow: 0 0 10px ${({ theme }) => theme.colors.neon.cyan};
  }
`;

const NavMenu = styled(motion.ul)<{ isOpen: boolean }>`
  /* Base styles */
  list-style: none;
  margin: 0;
  padding: 0;

  /* Desktop: sempre visível, layout horizontal */
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 2rem;
  position: static;
  background: transparent;
  height: auto;
  width: auto;
  transform: none;
  border: none;
  box-shadow: none;
  z-index: auto;

  /* Mobile: menu lateral deslizante */
  @media (max-width: calc(${({ theme }) => theme.breakpoints.md} - 1px)) {
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    background: ${({ theme }) => theme.colors.surface}f5;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    transform: ${({ isOpen }) => isOpen ? 'translateX(0)' : 'translateX(100%)'};
    transition: transform ${({ theme }) => theme.animations.normal};
    border-left: 1px solid ${({ theme }) => theme.colors.border};
    z-index: 1001;
    box-shadow: -5px 0 15px rgba(0, 0, 0, 0.3);
  }
`;

const NavItem = styled(motion.li)`
  a {
    color: ${({ theme }) => theme.colors.textSecondary};
    font-family: ${({ theme }) => theme.fonts.primary};
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 1px;
    position: relative;
    padding: 0.5rem 0;
    transition: color ${({ theme }) => theme.animations.fast};
    text-decoration: none;
    font-size: 1rem;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    /* Mobile styles */
    @media (max-width: calc(${({ theme }) => theme.breakpoints.md} - 1px)) {
      font-size: 1.125rem;
      font-weight: 600;
      color: ${({ theme }) => theme.colors.text};
      padding: 1rem 0;
    }

    &:hover {
      color: ${({ theme }) => theme.colors.neon.cyan};
    }

    &.active {
      color: ${({ theme }) => theme.colors.neon.cyan};
      
      &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 2px;
        background: ${({ theme }) => theme.colors.gradient.neon};
        border-radius: 1px;

        @media (max-width: calc(${({ theme }) => theme.breakpoints.md} - 1px)) {
          left: 50%;
          transform: translateX(-50%);
          width: 50px;
        }
      }
    }
  }
`;

const NavActions = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;


const LanguageSelector = styled.div`
  position: relative;
`;

const LanguageButton = styled(motion.button)`
  padding: 0.5rem;
  border-radius: 0.5rem;
  background: ${({ theme }) => theme.colors.surface};
  color: ${({ theme }) => theme.colors.text};
  border: 1px solid ${({ theme }) => theme.colors.border};
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.875rem;
  font-weight: 600;
  transition: all ${({ theme }) => theme.animations.fast};

  &:hover {
    background: ${({ theme }) => theme.colors.primary};
    color: white;
  }
`;

const LanguageDropdown = styled(motion.div)`
  position: absolute;
  top: 100%;
  right: 0;
  margin-top: 0.5rem;
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 0.5rem;
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadows.large};
  min-width: 120px;
`;

const LanguageOption = styled.button`
  width: 100%;
  padding: 0.75rem 1rem;
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.text};
  text-align: left;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.875rem;
  transition: background-color ${({ theme }) => theme.animations.fast};

  &:hover {
    background: ${({ theme }) => theme.colors.primary};
    color: white;
  }
`;

const MobileMenuButton = styled(motion.button)`
  display: none;
  padding: 0.5rem;
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.text};
  cursor: pointer;

  @media (max-width: calc(${({ theme }) => theme.breakpoints.md} - 1px)) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const MobileMenuCloseButton = styled(motion.button)`
  position: absolute;
  top: 1rem;
  right: 1rem;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  border: 1px solid ${({ theme }) => theme.colors.border};
  cursor: pointer;
  display: none;
  align-items: center;
  justify-content: center;
  z-index: 1002;
  transition: all ${({ theme }) => theme.animations.fast};

  @media (max-width: calc(${({ theme }) => theme.breakpoints.md} - 1px)) {
    display: flex;
  }

  &:hover {
    background: ${({ theme }) => theme.colors.primary};
    color: white;
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: ${({ theme }) => theme.shadows.neon};
  }
`;

interface HeaderProps {
  activeSection: string;
}

export const Header: React.FC<HeaderProps> = ({ activeSection }) => {
  const { t } = useTranslation();
  const { language, setLanguage } = useApp();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);

  const navItems = [
    { key: 'home', href: '#home' },
    { key: 'about', href: '#about' },
    { key: 'projects', href: '#projects' },
    { key: 'skills', href: '#skills' },
    { key: 'contact', href: '#contact' },
  ];

  const languages = [
    { code: 'pt' as LanguageCode, name: 'PT', flag: '🇧🇷' },
    { code: 'en' as LanguageCode, name: 'EN', flag: '🇺🇸' },
    { code: 'fr' as LanguageCode, name: 'FR', flag: '🇫🇷' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Fechar menu mobile com ESC ou ao clicar fora
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden'; // Prevenir scroll quando menu aberto
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const currentLanguage = languages.find(lang => lang.code === language);

  return (
    <HeaderContainer
      isScrolled={isScrolled}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Nav>
        <Logo
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => handleNavClick('#home')}
        >
          <span className="brand-text">Cardoli</span>
          <span className="brand-glow">Dev</span>
        </Logo>

        <NavMenu 
          isOpen={isMobileMenuOpen}
          onClick={(e) => e.stopPropagation()} // Prevenir fechamento ao clicar dentro do menu
        >
          {/* Botão de close dentro do menu mobile */}
          <MobileMenuCloseButton
            onClick={() => setIsMobileMenuOpen(false)}
            whileHover={{ scale: 1.1, rotate: 90 }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0, scale: 0 }}
            animate={isMobileMenuOpen ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
            transition={{ delay: 0.2 }}
          >
            <X size={20} />
          </MobileMenuCloseButton>

          {navItems.map((item, index) => (
            <NavItem
              key={item.key}
              initial={{ opacity: 1, y: 0 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 + 0.1 }}
            >
              <a
                href={item.href}
                className={activeSection === item.key ? 'active' : ''}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
              >
                {t(`nav.${item.key}`)}
              </a>
            </NavItem>
          ))}
        </NavMenu>

        <NavActions>
          <LanguageSelector>
            <LanguageButton
              onClick={() => setIsLanguageDropdownOpen(!isLanguageDropdownOpen)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Globe size={16} />
              {currentLanguage?.name}
            </LanguageButton>

            <AnimatePresence>
              {isLanguageDropdownOpen && (
                <LanguageDropdown
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                >
                  {languages.map((lang) => (
                    <LanguageOption
                      key={lang.code}
                      onClick={() => {
                        setLanguage(lang.code);
                        setIsLanguageDropdownOpen(false);
                      }}
                    >
                      <span>{lang.flag}</span>
                      {lang.name}
                    </LanguageOption>
                  ))}
                </LanguageDropdown>
              )}
            </AnimatePresence>
          </LanguageSelector>

          <MobileMenuButton
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </MobileMenuButton>
        </NavActions>
      </Nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'rgba(0, 0, 0, 0.7)',
              zIndex: 1000,
              cursor: 'pointer',
            }}
            onClick={(e) => {
              e.stopPropagation();
              setIsMobileMenuOpen(false);
            }}
            whileTap={{ opacity: 0.8 }}
          />
        )}
      </AnimatePresence>
    </HeaderContainer>
  );
};

export default Header;
