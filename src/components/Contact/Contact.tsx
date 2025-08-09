
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useInView } from 'react-intersection-observer';
import styled from 'styled-components';
import { 
  Mail, 
  MapPin, 
  Linkedin, 
  MessageCircle, 
  Zap, 
  Shield 
} from 'lucide-react';

const ContactSection = styled.section`
  padding: 6rem 0;
  background: ${({ theme }) => theme.colors.surface};
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

const SectionTitle = styled(motion.h2)`
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
`;

const SectionSubtitle = styled(motion.div)`
  font-size: 1.125rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  text-align: center;
  margin-bottom: 4rem;
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
  }
`;

const ContactInfo = styled(motion.div)`
  background: ${({ theme }) => theme.colors.background};
  border-radius: 1rem;
  padding: 3rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: ${({ theme }) => theme.colors.gradient.neon};
    border-radius: 1rem 1rem 0 0;
  }
`;

const ContactTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 1rem;
`;

const ContactDescription = styled.p`
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 1.6;
  margin-bottom: 2rem;
`;

const ContactItem = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
  padding: 1rem;
  background: ${({ theme }) => theme.colors.surface};
  border-radius: 0.5rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
  transition: all ${({ theme }) => theme.animations.fast};

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};
    transform: translateX(5px);
  }
`;

const ContactIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.gradient.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  flex-shrink: 0;
`;

const ContactDetails = styled.div`
  flex: 1;
`;

const ContactLabel = styled.div`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: 0.25rem;
`;

const ContactValue = styled.div`
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
`;

const AvailabilityCard = styled(motion.div)`
  background: ${({ theme }) => theme.colors.background};
  border-radius: 1rem;
  padding: 2rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
  margin-top: 2rem;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: ${({ theme }) => theme.colors.gradient.neon};
    border-radius: 1rem 1rem 0 0;
  }
`;

const AvailabilityStatus = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
`;

const StatusDot = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.neon.green};
  box-shadow: 0 0 10px ${({ theme }) => theme.colors.neon.green};
  animation: pulse 2s infinite;

  @keyframes pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.5; }
  }
`;

const StatusText = styled.span`
  font-weight: 600;
  color: ${({ theme }) => theme.colors.neon.green};
`;

const AvailabilityTime = styled.div`
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 0.875rem;
`;

const ContactAction = styled(motion.div)`
  background: ${({ theme }) => theme.colors.background};
  border-radius: 1rem;
  padding: 3rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: ${({ theme }) => theme.colors.gradient.neon};
    border-radius: 1rem 1rem 0 0;
  }
`;

const ActionTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 1rem;
`;

const ActionDescription = styled.p`
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 1.6;
  margin-bottom: 2rem;
`;

const WhatsAppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;
`;

const WhatsAppButton = styled(motion.a)`
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem 2rem;
  background: ${({ theme }) => theme.colors.gradient.primary};
  color: white;
  border-radius: 2rem;
  text-decoration: none;
  font-weight: 700;
  font-size: 1.125rem;
  transition: all ${({ theme }) => theme.animations.fast};

  &:hover {
    box-shadow: ${({ theme }) => theme.shadows.neon};
    transform: translateY(-2px);
  }
`;

const WhatsAppAvailability = styled(motion.div)`
  background: rgba(0, 212, 255, 0.1);
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 0.75rem;
  padding: 0.75rem 1rem;
  backdrop-filter: blur(8px);
`;

const WhatsAppStatus = styled.div`
  color: ${({ theme }) => theme.colors.success};
  font-weight: 600;
  font-size: 0.875rem;
  margin-bottom: 0.25rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const WhatsAppTime = styled.div`
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 0.8rem;
  font-family: ${({ theme }) => theme.fonts.mono};
`;

const Features = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const Feature = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 1rem;
  background: ${({ theme }) => theme.colors.surface};
  border-radius: 0.5rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
  transition: all ${({ theme }) => theme.animations.fast};

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};
    transform: translateY(-2px);
  }
`;

const FeatureIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.gradient.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  margin-bottom: 0.75rem;
`;

const FeatureTitle = styled.h4`
  font-size: 0.875rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 0.25rem;
`;

const FeatureText = styled.div`
  font-size: 0.75rem;
  color: ${({ theme }) => theme.colors.textSecondary};
`;

export const Contact: React.FC = () => {
  const { t } = useTranslation();
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const whatsappNumber = "5583986087039";
  const whatsappMessage = encodeURIComponent(
    `Olá! Vi seu portfólio e gostaria de conversar sobre oportunidades de trabalho.`
  );
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  const contactItems = [
    {
      icon: <Mail size={20} />,
      label: t('contact.info.email'),
      value: 'matcardolidev@gmail.com',
      href: 'mailto:matcardolidev@gmail.com',
    },
    {
      icon: <Linkedin size={20} />,
      label: t('contact.info.linkedin'),
      value: 'Matheus Cardoso',
      href: 'https://www.linkedin.com/in/matheus-cardoso-aba863286/',
    },
    {
      icon: <MapPin size={20} />,
      label: t('contact.info.location'),
      value: t('contact.info.locationValue'),
      href: null,
    },
  ];

  const features = [
    {
      icon: <Zap size={20} />,
      title: t('contact.features.fast.title'),
      description: t('contact.features.fast.description'),
    },
    {
      icon: <MessageCircle size={20} />,
      title: t('contact.features.chat.title'),
      description: t('contact.features.chat.description'),
    },
    {
      icon: <Shield size={20} />,
      title: t('contact.features.secure.title'),
      description: t('contact.features.secure.description'),
    },
  ];

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
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };

  return (
    <ContactSection id="contact" ref={ref}>
      <Container>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <SectionTitle variants={itemVariants}>
            {t('contact.title')}
          </SectionTitle>
          
          <SectionSubtitle variants={itemVariants}>
            {t('contact.subtitle')}
          </SectionSubtitle>

          <ContactGrid>
            <ContactInfo variants={itemVariants}>
              <ContactTitle>{t('contact.info.title')}</ContactTitle>
              <ContactDescription>
                {t('contact.info.description')}
              </ContactDescription>

              {contactItems.map((item, index) => (
                <ContactItem
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ delay: index * 0.1 + 0.5 }}
                  whileHover={{ scale: 1.02 }}
                  onClick={() => item.href && window.open(item.href, '_blank')}
                  style={{ cursor: item.href ? 'pointer' : 'default' }}
                >
                  <ContactIcon>
                    {item.icon}
                  </ContactIcon>
                  <ContactDetails>
                    <ContactLabel>{item.label}</ContactLabel>
                    <ContactValue>{item.value}</ContactValue>
                  </ContactDetails>
                </ContactItem>
              ))}

              <AvailabilityCard
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.8 }}
              >
                <AvailabilityStatus>
                  <StatusDot />
                  <StatusText>{t('contact.infoAvailability.status')}</StatusText>
                </AvailabilityStatus>
                <AvailabilityTime>
                  {t('contact.infoAvailability.time')}
                </AvailabilityTime>
              </AvailabilityCard>
            </ContactInfo>

            <ContactAction variants={itemVariants}>
              <ActionTitle>{t('contact.action.title')}</ActionTitle>
              <ActionDescription>
                {t('contact.action.description')}
              </ActionDescription>

              <WhatsAppContainer>
                <WhatsAppButton
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <MessageCircle size={24} />
                  {t('contact.action.button')}
                </WhatsAppButton>

                <WhatsAppAvailability
                  initial={{ opacity: 0, y: 10 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                  transition={{ delay: 0.8 }}
                >
                  <WhatsAppStatus>
                    {t('contact.whatsappAvailability.status')}
                  </WhatsAppStatus>
                  <WhatsAppTime>
                    {t('contact.whatsappAvailability.time')}
                  </WhatsAppTime>
                </WhatsAppAvailability>
              </WhatsAppContainer>

              <Features>
                {features.map((feature, index) => (
                  <Feature
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ delay: index * 0.1 + 1 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <FeatureIcon>
                      {feature.icon}
                    </FeatureIcon>
                    <FeatureTitle>{feature.title}</FeatureTitle>
                    <FeatureText>{feature.description}</FeatureText>
                  </Feature>
                ))}
              </Features>
            </ContactAction>
          </ContactGrid>
        </motion.div>
      </Container>
    </ContactSection>
  );
};

export default Contact;
