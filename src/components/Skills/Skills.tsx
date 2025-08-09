
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useInView } from 'react-intersection-observer';
import styled from 'styled-components';
import { ParallaxEffects } from '../ParallaxEffects';
import { Code, Server, Wrench } from 'lucide-react';

const SkillsSection = styled.section`
  padding: 6rem 0;
  background: 
    radial-gradient(ellipse at top left, rgba(255, 20, 147, 0.05) 0%, transparent 50%),
    radial-gradient(ellipse at bottom right, rgba(0, 255, 255, 0.05) 0%, transparent 50%),
    ${({ theme }) => theme.colors.surface};
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      repeating-linear-gradient(
        90deg,
        transparent,
        transparent 48px,
        rgba(0, 255, 255, 0.03) 50px
      );
    pointer-events: none;
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

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const SkillCard = styled(motion.div)`
  background: 
    linear-gradient(135deg, 
      rgba(0, 212, 255, 0.05) 0%, 
      rgba(157, 78, 221, 0.08) 100%
    );
  backdrop-filter: blur(8px);
  border-radius: 1rem;
  padding: 2rem;
  border: 1px solid rgba(0, 212, 255, 0.3);
  position: relative;
  overflow: hidden;
  transition: all ${({ theme }) => theme.animations.normal};

  &:hover {
    transform: translateY(-8px) scale(1.02);
    box-shadow: 
      0 20px 40px rgba(0, 0, 0, 0.4),
      0 0 30px rgba(0, 212, 255, 0.3),
      inset 0 0 30px rgba(0, 212, 255, 0.08);
    border-color: rgba(0, 212, 255, 0.5);
    animation: ghostShellFloat 3s ease-in-out infinite;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: ${({ theme }) => theme.colors.gradient.neon};
    filter: drop-shadow(0 0 8px ${({ theme }) => theme.colors.neon.cyan});
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(0, 255, 255, 0.1),
      transparent
    );
    transition: left 0.5s;
  }

  &:hover::after {
    left: 100%;
  }
`;

const SkillIcon = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.gradient.neon};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  color: white;
  position: relative;
  filter: drop-shadow(0 0 15px rgba(0, 255, 255, 0.5));
  animation: iconPulse 3s ease-in-out infinite;

  &::before {
    content: '';
    position: absolute;
    top: -5px;
    left: -5px;
    right: -5px;
    bottom: -5px;
    border: 2px solid transparent;
    border-radius: 50%;
    background: linear-gradient(45deg, ${({ theme }) => theme.colors.neon.cyan}, ${({ theme }) => theme.colors.neon.pink}) border-box;
    mask: linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0);
    mask-composite: exclude;
    animation: borderRotate 4s linear infinite;
  }

  @keyframes iconPulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.05); }
  }

  @keyframes borderRotate {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

const SkillTitle = styled.h3`
  font-size: 1.5rem;
  font-family: ${({ theme }) => theme.fonts.heading};
  font-weight: 700;
  margin-bottom: 0.5rem;
  color: ${({ theme }) => theme.colors.text};
  letter-spacing: 2px;
  text-transform: uppercase;
  text-shadow: 0 0 10px rgba(0, 255, 255, 0.3);
`;

const SkillDescription = styled.p`
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: 2rem;
  line-height: 1.6;
  font-family: ${({ theme }) => theme.fonts.secondary};
  letter-spacing: 0.5px;
  font-weight: 300;
`;

const SkillsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const SkillItem = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
`;

const SkillName = styled.span`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-weight: 400;
  color: ${({ theme }) => theme.colors.text};
  font-size: 0.9rem;
  letter-spacing: 0.5px;
  text-transform: uppercase;
`;

const SkillLevel = styled.span`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 0.8rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  padding: 0.25rem 0.5rem;
  background: ${({ theme }) => theme.colors.surface};
  border-radius: 0.25rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
  letter-spacing: 0.5px;
  text-transform: uppercase;
`;

const SkillProgressContainer = styled.div`
  width: 100%;
  height: 12px;
  background: rgba(0, 255, 255, 0.1);
  border-radius: 6px;
  overflow: hidden;
  margin-top: 0.5rem;
  position: relative;
  border: 1px solid rgba(0, 255, 255, 0.2);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      repeating-linear-gradient(
        90deg,
        transparent,
        transparent 10px,
        rgba(0, 255, 255, 0.1) 12px
      );
    animation: progressGrid 2s linear infinite;
  }

  @keyframes progressGrid {
    0% { transform: translateX(0); }
    100% { transform: translateX(12px); }
  }
`;

const SkillProgress = styled(motion.div)<{ level: number }>`
  height: 100%;
  background: ${({ theme }) => theme.colors.gradient.neon};
  border-radius: 6px;
  position: relative;
  width: 0%;
  filter: drop-shadow(0 0 8px rgba(0, 255, 255, 0.6));
  z-index: 2;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      90deg,
      rgba(255, 255, 255, 0.2),
      transparent,
      rgba(255, 255, 255, 0.2)
    );
    background-size: 40px 100%;
    animation: energyFlow 1.5s linear infinite;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    right: -2px;
    width: 4px;
    height: 100%;
    background: rgba(255, 255, 255, 0.8);
    border-radius: 2px;
    filter: drop-shadow(0 0 4px rgba(255, 255, 255, 0.8));
    animation: energyPulse 1s ease-in-out infinite;
  }

  @keyframes energyFlow {
    0% { background-position: -40px 0; }
    100% { background-position: 100% 0; }
  }

  @keyframes energyPulse {
    0%, 100% { opacity: 0.6; transform: scaleY(1); }
    50% { opacity: 1; transform: scaleY(1.2); }
  }
`;

const SkillStats = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1.5rem;
  padding-top: 1.5rem;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
`;

const StatItem = styled.div`
  text-align: center;
`;

const StatNumber = styled.div`
  font-size: 1.25rem;
  font-weight: 900;
  color: ${({ theme }) => theme.colors.neon.cyan};
  font-family: ${({ theme }) => theme.fonts.display};
  letter-spacing: 1px;
  text-shadow: 0 0 10px rgba(0, 255, 255, 0.5);
`;

const StatLabel = styled.div`
  font-size: 0.75rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-top: 0.25rem;
  font-family: ${({ theme }) => theme.fonts.mono};
  letter-spacing: 0.5px;
  text-transform: uppercase;
`;

interface Skill {
  name: string;
  level: number;
}

interface SkillCategory {
  id: string;
  icon: React.ReactNode;
  skills: Skill[];
  count: string;
}

export const Skills: React.FC = () => {
  const { t } = useTranslation();
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const skillCategories: SkillCategory[] = [
    {
      id: 'frontend',
      icon: <Code size={24} />,
      skills: [
        { name: t('skills.skillNames.html'), level: 90 },
        { name: t('skills.skillNames.js'), level: 85 },
        { name: t('skills.skillNames.react'), level: 80 },
        { name: t('skills.skillNames.vue'), level: 70 },
      ],
      count: t('skills.technologies'),
    },
    {
      id: 'backend',
      icon: <Server size={24} />,
      skills: [
        { name: t('skills.skillNames.java'), level: 75 },
        { name: t('skills.skillNames.nodejs'), level: 70 },
        { name: t('skills.skillNames.postgresql'), level: 80 },
        { name: t('skills.skillNames.postman'), level: 85 },
      ],
      count: t('skills.technologies'),
    },
    {
      id: 'tools',
      icon: <Wrench size={24} />,
      skills: [
        { name: t('skills.skillNames.git'), level: 85 },
        { name: t('skills.skillNames.bootstrap'), level: 90 },
        { name: t('skills.skillNames.gsap'), level: 75 },
        { name: t('skills.skillNames.figma'), level: 70 },
      ],
      count: t('skills.toolsCount'),
    },
  ];

  const getSkillLevelText = (level: number): string => {
    if (level >= 80) return t('skills.skillLevels.advanced');
    if (level >= 60) return t('skills.skillLevels.intermediate');
    return t('skills.skillLevels.beginner');
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

  const skillVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <SkillsSection id="skills" ref={ref}>
      <ParallaxEffects variant="minimal" />
      <Container>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <SectionTitle variants={itemVariants}>
            {t('skills.title')}
          </SectionTitle>
          
          <SectionSubtitle variants={itemVariants}>
            {t('skills.subtitle')}
          </SectionSubtitle>

          <SkillsGrid>
            {skillCategories.map((category, categoryIndex) => (
              <SkillCard
                key={category.id}
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.02,
                  transition: { duration: 0.2 }
                }}
              >
                <SkillIcon>
                  {category.icon}
                </SkillIcon>

                <SkillTitle>
                  {t(`skills.${category.id}`)}
                </SkillTitle>

                <SkillDescription>
                  {t(`skills.${category.id}Desc`)}
                </SkillDescription>

                <SkillsList>
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      variants={skillVariants}
                      initial="hidden"
                      animate={inView ? 'visible' : 'hidden'}
                      transition={{ delay: categoryIndex * 0.2 + skillIndex * 0.1 }}
                    >
                      <SkillItem>
                        <SkillName>{skill.name}</SkillName>
                        <SkillLevel>{getSkillLevelText(skill.level)}</SkillLevel>
                      </SkillItem>
                      
                      <SkillProgressContainer>
                        <SkillProgress
                          level={skill.level}
                          initial={{ width: '0%' }}
                          animate={inView ? { width: `${skill.level}%` } : { width: '0%' }}
                          transition={{ 
                            duration: 1.5, 
                            delay: categoryIndex * 0.3 + skillIndex * 0.2,
                            ease: 'easeOut'
                          }}
                        />
                      </SkillProgressContainer>
                    </motion.div>
                  ))}
                </SkillsList>

                <SkillStats>
                  <StatItem>
                    <StatNumber>{category.skills.length}</StatNumber>
                    <StatLabel>{category.count}</StatLabel>
                  </StatItem>
                  <StatItem>
                    <StatNumber>
                      {Math.round(category.skills.reduce((acc, skill) => acc + skill.level, 0) / category.skills.length)}%
                    </StatNumber>
                    <StatLabel>Média</StatLabel>
                  </StatItem>
                </SkillStats>
              </SkillCard>
            ))}
          </SkillsGrid>
        </motion.div>
      </Container>
    </SkillsSection>
  );
};

export default Skills;
