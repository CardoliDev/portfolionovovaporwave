
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useInView } from 'react-intersection-observer';
import styled from 'styled-components';

const AboutSection = styled.section`
  padding: 6rem 0;
  background: ${({ theme }) => theme.colors.background};
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: -20%;
    left: -10%;
    right: -10%;
    bottom: -20%;
    background: 
      radial-gradient(circle at 20% 30%, ${({ theme }) => theme.colors.neon.cyan}08 0%, transparent 50%),
      radial-gradient(circle at 80% 70%, ${({ theme }) => theme.colors.neon.pink}05 0%, transparent 50%);
    animation: floatBackground 30s ease-in-out infinite;
    z-index: -1;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: 
      linear-gradient(90deg, ${({ theme }) => theme.colors.border}05 1px, transparent 1px),
      linear-gradient(180deg, ${({ theme }) => theme.colors.border}05 1px, transparent 1px);
    background-size: 100px 100px;
    opacity: 0.3;
    z-index: -1;
    animation: gridMove 40s linear infinite;
  }

  @keyframes floatBackground {
    0%, 100% { transform: translateY(0) rotate(0deg); }
    50% { transform: translateY(-15px) rotate(1deg); }
  }

  @keyframes gridMove {
    0% { transform: translateY(0); }
    100% { transform: translateY(100px); }
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: 0 2rem;
  }
`;

const AboutGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 4rem;
  align-items: center;

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: 1fr 1fr;
    gap: 6rem;
  }
`;

const AboutContent = styled(motion.div)`
  order: 2;

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    order: 1;
  }
`;

const SectionTitle = styled(motion.h2)`
  font-size: 2.5rem;
  font-weight: 900;
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
  margin-bottom: 2rem;
`;

const AboutText = styled(motion.p)`
  font-size: 1.125rem;
  line-height: 1.7;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: 1.5rem;
`;

const AboutStats = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`;

const StatItem = styled(motion.div)`
  text-align: center;
  padding: 1.5rem;
  background: ${({ theme }) => theme.colors.surface};
  border-radius: 1rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
  transition: all ${({ theme }) => theme.animations.normal};

  &:hover {
    transform: translateY(-5px);
    box-shadow: ${({ theme }) => theme.shadows.large};
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

const StatNumber = styled(motion.div)`
  font-size: 2.5rem;
  font-weight: 900;
  color: ${({ theme }) => theme.colors.neon.cyan};
  font-family: ${({ theme }) => theme.fonts.secondary};
  margin-bottom: 0.5rem;
`;

const StatLabel = styled.div`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-weight: 500;
`;

const AboutImageContainer = styled(motion.div)`
  order: 1;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    order: 2;
  }
`;

const CyberFrame = styled(motion.div)`
  position: relative;
  width: 300px;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 400px;
    height: 400px;
  }
`;

const DataCrystal = styled(motion.div)`
  width: 200px;
  height: 200px;
  position: relative;
  transform-style: preserve-3d;
  animation: rotate3d 20s linear infinite;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 250px;
    height: 250px;
  }

  @keyframes rotate3d {
    0% { transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg); }
    33% { transform: rotateX(90deg) rotateY(180deg) rotateZ(120deg); }
    66% { transform: rotateX(180deg) rotateY(360deg) rotateZ(240deg); }
    100% { transform: rotateX(360deg) rotateY(540deg) rotateZ(360deg); }
  }
`;

const CrystalFacet = styled.div<{ index: number }>`
  position: absolute;
  width: 100%;
  height: 100%;
  background: ${({ theme, index }) => {
    const colors = [
      theme.colors.neon.cyan,
      theme.colors.neon.pink,
      theme.colors.neon.purple,
      theme.colors.neon.blue,
    ];
    return `linear-gradient(135deg, ${colors[index % colors.length]}22, ${colors[(index + 1) % colors.length]}44)`;
  }};
  border: 1px solid ${({ theme, index }) => {
    const colors = [
      theme.colors.neon.cyan,
      theme.colors.neon.pink,
      theme.colors.neon.purple,
      theme.colors.neon.blue,
    ];
    return colors[index % colors.length];
  }};
  border-radius: 1rem;
  transform: ${({ index }) => {
    const transforms = [
      'rotateY(0deg) translateZ(50px)',
      'rotateY(90deg) translateZ(50px)',
      'rotateY(180deg) translateZ(50px)',
      'rotateY(270deg) translateZ(50px)',
      'rotateX(90deg) translateZ(50px)',
      'rotateX(-90deg) translateZ(50px)',
    ];
    return transforms[index % transforms.length];
  }};
  opacity: 0.8;
`;

const CrystalCore = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 20px;
  height: 20px;
  background: ${({ theme }) => theme.colors.neon.cyan};
  border-radius: 50%;
  box-shadow: 
    0 0 20px ${({ theme }) => theme.colors.neon.cyan},
    0 0 40px ${({ theme }) => theme.colors.neon.cyan},
    0 0 60px ${({ theme }) => theme.colors.neon.cyan};
  animation: pulse 2s ease-in-out infinite;

  @keyframes pulse {
    0%, 100% { transform: translate(-50%, -50%) scale(1); }
    50% { transform: translate(-50%, -50%) scale(1.2); }
  }
`;

export const About: React.FC = () => {
  const { t } = useTranslation();
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

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

  const stats = [
    { number: '50+', key: 'projects' },
    { number: '3+', key: 'experience' },
  ];

  return (
    <AboutSection id="about" ref={ref}>
      <Container>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
          >
            <AboutGrid>
              <AboutContent>
                <SectionTitle variants={itemVariants}>
                  {t('about.title')}
                </SectionTitle>
                
                <SectionSubtitle variants={itemVariants}>
                  {t('about.subtitle')}
                </SectionSubtitle>

                <AboutText variants={itemVariants}>
                  {t('about.text1')}
                </AboutText>

                <AboutText variants={itemVariants}>
                  {t('about.text2')}
                </AboutText>

                <AboutStats variants={itemVariants}>
                  {stats.map((stat, index) => (
                    <StatItem
                      key={stat.key}
                      variants={itemVariants}
                      whileHover={{ 
                        scale: 1.05,
                        transition: { duration: 0.2 }
                      }}
                    >
                      <StatNumber
                        initial={{ opacity: 0, scale: 0 }}
                        animate={inView ? { 
                          opacity: 1, 
                          scale: 1,
                          transition: { 
                            delay: 1 + index * 0.2,
                            duration: 0.5,
                            type: 'spring',
                            stiffness: 200
                          }
                        } : {}}
                      >
                        {stat.number}
                      </StatNumber>
                      <StatLabel>
                        {t(`about.stats.${stat.key}`)}
                      </StatLabel>
                    </StatItem>
                  ))}
                </AboutStats>
              </AboutContent>

              <AboutImageContainer variants={itemVariants}>
                <CyberFrame>
                  <DataCrystal>
                    {Array.from({ length: 6 }, (_, index) => (
                      <CrystalFacet key={index} index={index} />
                    ))}
                    <CrystalCore />
                  </DataCrystal>
                </CyberFrame>
              </AboutImageContainer>
            </AboutGrid>
          </motion.div>
      </Container>
    </AboutSection>
  );
};

export default About;
