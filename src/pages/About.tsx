import styled from 'styled-components'
import { motion } from 'framer-motion'

// Animation variants
const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 }
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
const PageContainer = styled(motion.div)`
  margin-bottom: ${({ theme }) => theme.space[16]};
`

const PageTitle = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes['4xl']};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.foreground};
  margin-bottom: ${({ theme }) => theme.space[8]};
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -${({ theme }) => theme.space[3]};
    width: 80px;
    height: 4px;
    background-color: ${({ theme }) => theme.colors.purple};
  }
`

const Section = styled(motion.section)`
  margin-bottom: ${({ theme }) => theme.space[12]};
`

const SectionTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes['2xl']};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  color: ${({ theme }) => theme.colors.pink};
  margin-bottom: ${({ theme }) => theme.space[6]};
`

const Paragraph = styled.p`
  color: ${({ theme }) => theme.colors.foreground};
  margin-bottom: ${({ theme }) => theme.space[4]};
  line-height: ${({ theme }) => theme.lineHeights.tall};
`

const HighlightSpan = styled.span`
  color: ${({ theme }) => theme.colors.cyan};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
`

const ExperienceItem = styled(motion.div)`
  margin-bottom: ${({ theme }) => theme.space[8]};
`

const ExperienceHeader = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: ${({ theme }) => theme.space[3]};
  
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`

const ExperienceTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  color: ${({ theme }) => theme.colors.purple};
  margin-bottom: ${({ theme }) => theme.space[1]};
  
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    margin-bottom: 0;
  }
`

const ExperienceCompany = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  color: ${({ theme }) => theme.colors.foreground};
`

const ExperiencePeriod = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.md};
  color: ${({ theme }) => theme.colors.comment};
`

const ExperienceDescription = styled.div`
  margin-top: ${({ theme }) => theme.space[3]};
`

const BulletList = styled.ul`
  margin-left: ${({ theme }) => theme.space[6]};
  margin-bottom: ${({ theme }) => theme.space[4]};
`

const BulletItem = styled.li`
  color: ${({ theme }) => theme.colors.foreground};
  margin-bottom: ${({ theme }) => theme.space[2]};
`

const EducationItem = styled(motion.div)`
  margin-bottom: ${({ theme }) => theme.space[6]};
  
  &:last-child {
    margin-bottom: 0;
  }
`

const EducationHeader = styled.div`
  margin-bottom: ${({ theme }) => theme.space[2]};
`

const EducationDegree = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  color: ${({ theme }) => theme.colors.purple};
  margin-bottom: ${({ theme }) => theme.space[1]};
`

const EducationSchool = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  color: ${({ theme }) => theme.colors.foreground};
`

const EducationPeriod = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.md};
  color: ${({ theme }) => theme.colors.comment};
  margin-left: ${({ theme }) => theme.space[2]};
`

const SkillsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${({ theme }) => theme.space[8]};
  
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: repeat(2, 1fr);
  }
`

const SkillCategory = styled(motion.div)`
  margin-bottom: ${({ theme }) => theme.space[6]};
`

const SkillCategoryTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  color: ${({ theme }) => theme.colors.purple};
  margin-bottom: ${({ theme }) => theme.space[4]};
`

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${({ theme }) => theme.space[2]};
  
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: repeat(3, 1fr);
  }
`

const SkillItem = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.md};
  color: ${({ theme }) => theme.colors.foreground};
  padding: ${({ theme }) => theme.space[2]};
`

const About = () => {
  return (
    <PageContainer
      initial="initial"
      animate="animate"
      variants={stagger}
    >
      <PageTitle>About Me</PageTitle>
      
      <Section variants={fadeIn}>
        <Paragraph>
          I'm a <HighlightSpan>Machine Learning Engineer</HighlightSpan> with a strong mathematical background and software development expertise. 
          I specialize in optimizing computational pipelines and implementing ML/NLP systems, including LLM applications.
        </Paragraph>
        <Paragraph>
          With experience at NASA's Jet Propulsion Laboratory and a deep understanding of both the theoretical and practical aspects of machine learning,
          I combine technical knowledge with implementation skills in ML, computer vision, and high-performance computing.
        </Paragraph>
        <Paragraph>
          I'm currently pursuing my MS in Computer Science with a focus on Machine Learning and AI at UT Austin.
        </Paragraph>
      </Section>
      
      <Section variants={fadeIn}>
        <SectionTitle>Experience</SectionTitle>
        
        <ExperienceItem variants={fadeIn}>
          <ExperienceHeader>
            <div>
              <ExperienceTitle>Software Engineering Intern</ExperienceTitle>
              <ExperienceCompany>NASA Jet Propulsion Laboratory</ExperienceCompany>
            </div>
            <ExperiencePeriod>2019 - 2020</ExperiencePeriod>
          </ExperienceHeader>
          
          <ExperienceDescription>
            <BulletList>
              <BulletItem>
                Engineered GPU-accelerated visualization with OpenGL for radiation datasets, reducing rendering time from 15 min to 0.1 sec (9000x speedup)
              </BulletItem>
              <BulletItem>
                Developed embedded ARM software for memory error monitoring using low-level C and custom bootloader integration
              </BulletItem>
              <BulletItem>
                Built custom test harness for radiation experiments using a Raspberry Pi connected via TCP to a control laptop
              </BulletItem>
              <BulletItem>
                Optimized multi-terabyte data processing pipelines using pandas/NumPy, improving efficiency by 100x
              </BulletItem>
              <BulletItem>
                Created multi-threaded test frameworks for Snapdragon processors using Java, Kotlin, and C++
              </BulletItem>
              <BulletItem>
                Implemented CNN image classifier with Keras/TensorFlow achieving 90%+ accuracy for radiation test evaluation
              </BulletItem>
            </BulletList>
          </ExperienceDescription>
        </ExperienceItem>
        
        <ExperienceItem variants={fadeIn}>
          <ExperienceHeader>
            <div>
              <ExperienceTitle>Graduate Teaching Assistant</ExperienceTitle>
              <ExperienceCompany>University of Maryland</ExperienceCompany>
            </div>
            <ExperiencePeriod>2021 - 2022</ExperiencePeriod>
          </ExperienceHeader>
          
          <ExperienceDescription>
            <BulletList>
              <BulletItem>
                Led weekly discussion sections (90+ students total) for probability theory and multivariable calculus
              </BulletItem>
              <BulletItem>
                Delivered substitute lectures to 250+ students and created/graded assignments with detailed feedback
              </BulletItem>
            </BulletList>
          </ExperienceDescription>
        </ExperienceItem>
      </Section>
      
      <Section variants={fadeIn}>
        <SectionTitle>Education</SectionTitle>
        
        <EducationItem variants={fadeIn}>
          <EducationHeader>
            <EducationDegree>MS in Computer Science (ML/AI)</EducationDegree>
            <EducationSchool>University of Texas at Austin</EducationSchool>
            <EducationPeriod>Fall 2024 - Present</EducationPeriod>
          </EducationHeader>
          <Paragraph>
            GPA: 4.0 | Coursework: Machine Learning, Deep Learning, Optimization, Algorithms
          </Paragraph>
        </EducationItem>
        
        <EducationItem variants={fadeIn}>
          <EducationHeader>
            <EducationDegree>PhD Applied Math (Incomplete)</EducationDegree>
            <EducationSchool>University of Maryland</EducationSchool>
            <EducationPeriod>2021 - 2022</EducationPeriod>
          </EducationHeader>
          <Paragraph>
            Coursework: Quantum Computing, Advanced Probability, Scientific Computing
          </Paragraph>
        </EducationItem>
        
        <EducationItem variants={fadeIn}>
          <EducationHeader>
            <EducationDegree>BS Applied Mathematics, CS Minor</EducationDegree>
            <EducationSchool>Texas A&M University</EducationSchool>
            <EducationPeriod>2017 - 2021</EducationPeriod>
          </EducationHeader>
          <Paragraph>
            Magna cum laude, Honors, GPA: 3.768 | Coursework: Linear Algebra, Algorithms, Statistics, Numerical Methods
          </Paragraph>
        </EducationItem>
      </Section>
      
      <Section variants={fadeIn}>
        <SectionTitle>Skills</SectionTitle>
        
        <SkillsContainer>
          <SkillCategory variants={fadeIn}>
            <SkillCategoryTitle>Machine Learning & AI</SkillCategoryTitle>
            <SkillsGrid>
              <SkillItem>PyTorch</SkillItem>
              <SkillItem>TensorFlow</SkillItem>
              <SkillItem>Keras</SkillItem>
              <SkillItem>scikit-learn</SkillItem>
              <SkillItem>LLM Integration</SkillItem>
              <SkillItem>NLP</SkillItem>
              <SkillItem>Computer Vision</SkillItem>
              <SkillItem>Deep Learning</SkillItem>
              <SkillItem>Neural Networks</SkillItem>
            </SkillsGrid>
          </SkillCategory>
          
          <SkillCategory variants={fadeIn}>
            <SkillCategoryTitle>Programming</SkillCategoryTitle>
            <SkillsGrid>
              <SkillItem>Python</SkillItem>
              <SkillItem>C++</SkillItem>
              <SkillItem>TypeScript</SkillItem>
              <SkillItem>JavaScript</SkillItem>
              <SkillItem>React</SkillItem>
              <SkillItem>FastAPI</SkillItem>
              <SkillItem>OpenGL</SkillItem>
              <SkillItem>Java</SkillItem>
              <SkillItem>C</SkillItem>
              <SkillItem>Kotlin</SkillItem>
              <SkillItem>ARM Assembly</SkillItem>
              <SkillItem>Git</SkillItem>
            </SkillsGrid>
          </SkillCategory>
          
          <SkillCategory variants={fadeIn}>
            <SkillCategoryTitle>Data Engineering</SkillCategoryTitle>
            <SkillsGrid>
              <SkillItem>pandas</SkillItem>
              <SkillItem>NumPy</SkillItem>
              <SkillItem>SQL</SkillItem>
              <SkillItem>ETL</SkillItem>
              <SkillItem>Data Visualization</SkillItem>
              <SkillItem>Statistical Analysis</SkillItem>
            </SkillsGrid>
          </SkillCategory>
          
          <SkillCategory variants={fadeIn}>
            <SkillCategoryTitle>Systems & Math</SkillCategoryTitle>
            <SkillsGrid>
              <SkillItem>Multithreading</SkillItem>
              <SkillItem>GPU Programming</SkillItem>
              <SkillItem>Linux</SkillItem>
              <SkillItem>Linear Algebra</SkillItem>
              <SkillItem>Optimization</SkillItem>
              <SkillItem>High Performance Computing</SkillItem>
            </SkillsGrid>
          </SkillCategory>
        </SkillsContainer>
      </Section>
    </PageContainer>
  )
}

export default About 