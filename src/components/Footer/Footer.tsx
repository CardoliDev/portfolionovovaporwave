
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const FooterContainer = styled.footer`
  background: ${({ theme }) => theme.colors.background};
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  padding: 3rem 0 2rem;
  position: relative;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: 0 2rem;
  }
`;

const FooterContent = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  margin-bottom: 2rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr auto 1fr;
    align-items: center;
  }
`;

const Brand = styled(motion.div)`
  text-align: center;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    text-align: left;
  }
`;

const BrandName = styled.h3`
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-size: 1.5rem;
  font-weight: 900;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 0.5rem;
  
  .brand-text {
    color: ${({ theme }) => theme.colors.text};
  }
  
  .brand-glow {
    color: ${({ theme }) => theme.colors.neon.cyan};
    text-shadow: 0 0 10px ${({ theme }) => theme.colors.neon.cyan};
  }
`;

const BrandTagline = styled.p`
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 0.875rem;
`;

const SocialLinks = styled(motion.div)`
  display: flex;
  gap: 1rem;
  justify-content: center;
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

const QuickLinks = styled(motion.div)`
  text-align: center;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    text-align: right;
  }
`;

const QuickLinksTitle = styled.h4`
  color: ${({ theme }) => theme.colors.text};
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 1rem;
`;

const QuickLinksList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    justify-content: flex-end;
  }
`;

const QuickLink = styled(motion.a)`
  color: ${({ theme }) => theme.colors.textSecondary};
  text-decoration: none;
  font-size: 0.875rem;
  transition: color ${({ theme }) => theme.animations.fast};
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.neon.cyan};
  }
`;

const FooterBottom = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding-top: 2rem;
  border-top: 1px solid ${({ theme }) => theme.colors.border};

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const Copyright = styled.div`
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 0.875rem;
  text-align: center;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const MadeWith = styled.div`
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 0.875rem;
  text-align: center;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const HeartIcon = styled(motion.div)`
  color: ${({ theme }) => theme.colors.neon.pink};
  display: flex;
  align-items: center;
`;

const FooterGlow = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 200px;
  height: 1px;
  background: ${({ theme }) => theme.colors.gradient.neon};
  box-shadow: 0 0 20px ${({ theme }) => theme.colors.neon.cyan};
`;

export const Footer: React.FC = () => {
  const { t } = useTranslation();

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/seu-usuario',
      icon: <Github size={20} />,
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/matheus-cardoso-aba863286/',
      icon: <Linkedin size={20} />,
    },
    {
      name: 'Email',
      url: 'mailto:matcardolidev@gmail.com',
      icon: <Mail size={20} />,
    },
  ];

  const quickLinks = [
    { name: t('nav.home'), href: '#home' },
    { name: t('nav.about'), href: '#about' },
    { name: t('nav.projects'), href: '#projects' },
    { name: t('nav.skills'), href: '#skills' },
    { name: t('nav.contact'), href: '#contact' },
  ];

  const handleQuickLinkClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <FooterContainer>
      <FooterGlow />
      <Container>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <FooterContent>
            <Brand variants={itemVariants}>
              <BrandName>
                <span className="brand-text">Cardoli</span>
                <span className="brand-glow">Dev</span>
              </BrandName>
              <BrandTagline>
                {t('footer.brand.tagline')}
              </BrandTagline>
            </Brand>

            <SocialLinks variants={itemVariants}>
              {socialLinks.map((link, index) => (
                <SocialLink
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ 
                    scale: 1.1, 
                    rotate: index % 2 === 0 ? 5 : -5 
                  }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={link.name}
                >
                  {link.icon}
                </SocialLink>
              ))}
            </SocialLinks>

            <QuickLinks variants={itemVariants}>
              <QuickLinksTitle>{t('footer.quickLinks.title')}</QuickLinksTitle>
              <QuickLinksList>
                {quickLinks.map((link) => (
                  <QuickLink
                    key={link.name}
                    onClick={() => handleQuickLinkClick(link.href)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {link.name}
                  </QuickLink>
                ))}
              </QuickLinksList>
            </QuickLinks>
          </FooterContent>

          <FooterBottom>
            <Copyright>
              © 2024 Matheus Cardoso. {t('footer.copyright')}
            </Copyright>

            <MadeWith>
              {t('footer.madeWith')}
              <HeartIcon
                animate={{ 
                  scale: [1, 1.2, 1],
                }}
                transition={{ 
                  duration: 1.5, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <Heart size={16} />
              </HeartIcon>
              {t('footer.coffee')}
            </MadeWith>
          </FooterBottom>
        </motion.div>
      </Container>
    </FooterContainer>
  );
};

export default Footer;
