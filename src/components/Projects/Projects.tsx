
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useInView } from 'react-intersection-observer';
import styled from 'styled-components';
import { ExternalLink, Github } from 'lucide-react';

const ProjectsSection = styled.section`
  padding: 6rem 0;
  background: ${({ theme }) => theme.colors.surface};
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
      radial-gradient(circle at 80% 20%, ${({ theme }) => theme.colors.neon.pink}06 0%, transparent 50%),
      radial-gradient(circle at 20% 80%, ${({ theme }) => theme.colors.neon.cyan}04 0%, transparent 50%);
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
      linear-gradient(45deg, ${({ theme }) => theme.colors.border}03 1px, transparent 1px),
      linear-gradient(-45deg, ${({ theme }) => theme.colors.border}03 1px, transparent 1px);
    background-size: 80px 80px;
    opacity: 0.2;
    z-index: -1;
    animation: diagonalMove 50s linear infinite;
  }

  @keyframes diagonalMove {
    0% { transform: translate(0, 0); }
    100% { transform: translate(80px, 80px); }
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

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const ProjectCard = styled(motion.div)`
  background: ${({ theme }) => theme.colors.surface};
  border-radius: 1rem;
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.colors.border};
  position: relative;
  transition: all ${({ theme }) => theme.animations.normal};

  &:hover {
    transform: translateY(-5px);
    box-shadow: ${({ theme }) => theme.shadows.medium};
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

const ProjectImageContainer = styled.div`
  position: relative;
  height: 200px;
  background: ${({ theme }) => theme.colors.gradient.neon};
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(45deg, 
      ${({ theme }) => theme.colors.neon.cyan}20,
      ${({ theme }) => theme.colors.neon.pink}20,
      ${({ theme }) => theme.colors.neon.purple}20
    );
    opacity: 0.7;
  }
`;

const ProjectIcon = styled.div`
  position: relative;
  z-index: 2;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.background};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.neon.cyan};
  font-size: 2rem;
  font-weight: 900;
  font-family: ${({ theme }) => theme.fonts.secondary};
  border: 2px solid ${({ theme }) => theme.colors.neon.cyan};
  box-shadow: 0 0 20px ${({ theme }) => theme.colors.neon.cyan}50;
`;

const ProjectContent = styled.div`
  padding: 2rem;
`;

const ProjectTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 1rem;
`;

const ProjectDescription = styled.p`
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

const ProjectTech = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`;

const TechTag = styled.span`
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.neon.cyan};
  padding: 0.25rem 0.75rem;
  border-radius: 1rem;
  font-size: 0.75rem;
  font-weight: 600;
  border: 1px solid ${({ theme }) => theme.colors.border};
  transition: all ${({ theme }) => theme.animations.fast};

  &:hover {
    background: ${({ theme }) => theme.colors.neon.cyan};
    color: ${({ theme }) => theme.colors.background};
    box-shadow: 0 0 10px ${({ theme }) => theme.colors.neon.cyan}50;
  }
`;

const ProjectActions = styled.div`
  display: flex;
  gap: 1rem;
`;

const ActionButton = styled(motion.a)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1rem;
  background: transparent;
  color: ${({ theme }) => theme.colors.text};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 0.5rem;
  text-decoration: none;
  font-size: 0.875rem;
  font-weight: 600;
  transition: all ${({ theme }) => theme.animations.fast};
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.colors.primary};
    color: white;
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: ${({ theme }) => theme.shadows.neon};
  }

  &.primary {
    background: ${({ theme }) => theme.colors.gradient.primary};
    color: white;
    border-color: transparent;

    &:hover {
      box-shadow: ${({ theme }) => theme.shadows.neon};
      transform: translateY(-2px);
    }
  }
`;

// Overlay removido para melhor legibilidade

interface Project {
  id: string;
  icon: string;
  technologies: string[];
  githubUrl?: string;
  demoUrl?: string;
}

export const Projects: React.FC = () => {
  const { t } = useTranslation();
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const projects: Project[] = [
    {
      id: 'project1',
      icon: 'E-C',
      technologies: ['React', 'Node.js', 'MongoDB'],
      githubUrl: 'https://github.com/seu-usuario/ecommerce-cyberpunk',
      demoUrl: 'https://demo-ecommerce.vercel.app',
    },
    {
      id: 'project2',
      icon: 'D-A',
      technologies: ['Vue.js', 'D3.js', 'Firebase'],
      githubUrl: 'https://github.com/seu-usuario/dashboard-analytics',
      demoUrl: 'https://dashboard-demo.vercel.app',
    },
    {
      id: 'project3',
      icon: 'G-I',
      technologies: ['JavaScript', 'Canvas API', 'WebGL'],
      githubUrl: 'https://github.com/seu-usuario/game-interface',
      demoUrl: 'https://game-demo.vercel.app',
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

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  return (
    <ProjectsSection id="projects" ref={ref}>
      <Container>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <SectionTitle variants={itemVariants}>
            {t('projects.title')}
          </SectionTitle>
          
          <SectionSubtitle variants={itemVariants}>
            {t('projects.subtitle')}
          </SectionSubtitle>

          <ProjectsGrid>
            {projects.map((project, index) => (
              <ProjectCard
                key={project.id}
                variants={cardVariants}
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.2 }
                }}
                style={{ 
                  animationDelay: `${index * 0.2}s` 
                }}
              >
                <ProjectImageContainer>
                  <ProjectIcon>
                    {project.icon}
                  </ProjectIcon>
                </ProjectImageContainer>

                <ProjectContent>
                  <ProjectTitle>
                    {t(`projects.${project.id}.title`)}
                  </ProjectTitle>

                  <ProjectDescription>
                    {t(`projects.${project.id}.description`)}
                  </ProjectDescription>

                  <ProjectTech>
                    {project.technologies.map((tech, techIndex) => (
                      <TechTag key={techIndex}>
                        {tech}
                      </TechTag>
                    ))}
                  </ProjectTech>

                  <ProjectActions>
                    {project.githubUrl && (
                      <ActionButton
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Github size={16} />
                        GitHub
                      </ActionButton>
                    )}

                    {project.demoUrl && (
                      <ActionButton
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="primary"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <ExternalLink size={16} />
                        Demo
                      </ActionButton>
                    )}
                  </ProjectActions>
                </ProjectContent>


              </ProjectCard>
            ))}
          </ProjectsGrid>
        </motion.div>
      </Container>
    </ProjectsSection>
  );
};

export default Projects;
