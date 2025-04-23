import styled from 'styled-components'
import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

// Animation variants
const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 }
  }
}

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

// Styled components
const HeroSection = styled(motion.section)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 90vh;
  padding: ${({ theme }) => theme.space[8]} 0;
  text-align: center;
  
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    min-height: 80vh;
    text-align: left;
    align-items: flex-start;
  }
`

const HeroHeading = styled(motion.h1)`
  font-size: ${({ theme }) => theme.fontSizes['4xl']};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.foreground};
  margin-bottom: ${({ theme }) => theme.space[2]};
  
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.fontSizes['5xl']};
  }
  
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    font-size: ${({ theme }) => theme.fontSizes['6xl']};
  }
`

const GradientText = styled.span`
  background: linear-gradient(45deg, 
    ${({ theme }) => theme.colors.purple} 0%, 
    ${({ theme }) => theme.colors.pink} 50%, 
    ${({ theme }) => theme.colors.cyan} 100%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  display: inline;
`

const SubHeading = styled(motion.h2)`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  color: ${({ theme }) => theme.colors.comment};
  margin-bottom: ${({ theme }) => theme.space[6]};
  max-width: 600px;
  
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.fontSizes['2xl']};
  }
`

const HeroButtons = styled(motion.div)`
  display: flex;
  gap: ${({ theme }) => theme.space[4]};
  margin-bottom: ${({ theme }) => theme.space[8]};
`

const PrimaryButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.space[3]} ${({ theme }) => theme.space[6]};
  background-color: ${({ theme }) => theme.colors.purple};
  color: ${({ theme }) => theme.colors.foreground};
  border-radius: ${({ theme }) => theme.radii.md};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  text-decoration: none;
  transition: all 0.3s ease;
  border: none;
  cursor: pointer;
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.pink};
    transform: translateY(-2px);
  }
`

const SecondaryButton = styled(PrimaryButton)`
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.colors.purple};
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.currentLine};
    border-color: ${({ theme }) => theme.colors.pink};
  }
`

const SocialBar = styled(motion.div)`
  display: flex;
  gap: ${({ theme }) => theme.space[4]};
  margin-bottom: ${({ theme }) => theme.space[8]};
`

const SocialLink = styled.a`
  color: ${({ theme }) => theme.colors.comment};
  font-size: ${({ theme }) => theme.fontSizes['2xl']};
  transition: color 0.3s ease;
  
  &:hover {
    color: ${({ theme }) => theme.colors.pink};
  }
`

const SectionTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes['3xl']};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.foreground};
  margin-bottom: ${({ theme }) => theme.space[6]};
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -${({ theme }) => theme.space[2]};
    width: 60px;
    height: 4px;
    background-color: ${({ theme }) => theme.colors.purple};
  }
`

const FeaturedSection = styled.section`
  margin-bottom: ${({ theme }) => theme.space[16]};
`

const ProjectsGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${({ theme }) => theme.space[6]};
  
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: repeat(2, 1fr);
  }
`

const ProjectCard = styled(motion.div)`
  background-color: ${({ theme }) => theme.colors.currentLine};
  border-radius: ${({ theme }) => theme.radii.lg};
  overflow: hidden;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
  }
`

const ProjectContent = styled.div`
  padding: ${({ theme }) => theme.space[6]};
`

const ProjectTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  color: ${({ theme }) => theme.colors.foreground};
  margin-bottom: ${({ theme }) => theme.space[2]};
`

const ProjectDescription = styled.p`
  color: ${({ theme }) => theme.colors.comment};
  margin-bottom: ${({ theme }) => theme.space[4]};
`

const ProjectTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.space[2]};
  margin-bottom: ${({ theme }) => theme.space[4]};
`

const ProjectTag = styled.span`
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.purple};
  padding: ${({ theme }) => theme.space[1]} ${({ theme }) => theme.space[3]};
  border-radius: ${({ theme }) => theme.radii.full};
  font-size: ${({ theme }) => theme.fontSizes.sm};
`

const ProjectLink = styled.button`
  display: inline-flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.purple};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  text-decoration: none;
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  transition: color 0.3s ease;
  
  svg {
    margin-left: ${({ theme }) => theme.space[2]};
    transition: transform 0.3s ease;
  }
  
  &:hover {
    color: ${({ theme }) => theme.colors.pink};
    
    svg {
      transform: translateX(4px);
    }
  }
`

const Home = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <HeroSection
        initial="initial"
        animate="animate"
        variants={stagger}
      >
        <HeroHeading variants={fadeIn}>
          Hi, I'm <GradientText>Trevor Turchan</GradientText>
        </HeroHeading>
        
        <SubHeading variants={fadeIn}>
          Machine Learning Engineer & Software Developer specialized in AI/ML, Computer Vision, and Full-Stack Development
        </SubHeading>
        
        <HeroButtons variants={fadeIn}>
          <PrimaryButton onClick={() => scrollToSection('projects')}>
            View Projects
          </PrimaryButton>
          <SecondaryButton onClick={() => scrollToSection('contact')}>
            Contact Me
          </SecondaryButton>
        </HeroButtons>
        
        <SocialBar variants={fadeIn}>
          <SocialLink href="https://github.com/trevorturchan" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FontAwesomeIcon icon={faGithub} />
          </SocialLink>
          <SocialLink href="https://linkedin.com/in/trevorturchan" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FontAwesomeIcon icon={faLinkedin} />
          </SocialLink>
        </SocialBar>
      </HeroSection>
      
      <FeaturedSection>
        <SectionTitle>Featured Projects</SectionTitle>
        
        <ProjectsGrid
          initial="initial"
          animate="animate"
          variants={stagger}
        >
          <ProjectCard variants={fadeIn}>
            <ProjectContent>
              <ProjectTitle>LLM-Powered Natural Language Database Query System</ProjectTitle>
              <ProjectDescription>
                A full-stack application that translates natural language into SQL using LLMs, with interactive visualizations.
              </ProjectDescription>
              
              <ProjectTags>
                <ProjectTag>React</ProjectTag>
                <ProjectTag>TypeScript</ProjectTag>
                <ProjectTag>FastAPI</ProjectTag>
                <ProjectTag>LLM</ProjectTag>
              </ProjectTags>
              
              <ProjectLink onClick={() => scrollToSection('projects')}>
                View Details <FontAwesomeIcon icon={faArrowRight} />
              </ProjectLink>
            </ProjectContent>
          </ProjectCard>
          
          <ProjectCard variants={fadeIn}>
            <ProjectContent>
              <ProjectTitle>GPU-Accelerated Data Visualization</ProjectTitle>
              <ProjectDescription>
                OpenGL-based visualization system for billion-point datasets, with 9000x performance improvement.
              </ProjectDescription>
              
              <ProjectTags>
                <ProjectTag>C++</ProjectTag>
                <ProjectTag>OpenGL</ProjectTag>
                <ProjectTag>Python</ProjectTag>
                <ProjectTag>GLSL</ProjectTag>
              </ProjectTags>
              
              <ProjectLink onClick={() => scrollToSection('projects')}>
                View Details <FontAwesomeIcon icon={faArrowRight} />
              </ProjectLink>
            </ProjectContent>
          </ProjectCard>
        </ProjectsGrid>
      </FeaturedSection>
    </>
  );
};

export default Home; 