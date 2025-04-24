import styled from 'styled-components'
import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faArrowUpRightFromSquare, faCodeBranch } from '@fortawesome/free-solid-svg-icons'

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

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${({ theme }) => theme.space[12]};
`

const ProjectItem = styled(motion.div)`
  display: flex;
  flex-direction: column;
  
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    flex-direction: row;
    gap: ${({ theme }) => theme.space[8]};
  }
`

const ProjectContent = styled.div`
  flex: 1;
`

const ProjectTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes['3xl']};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.pink};
  margin-bottom: ${({ theme }) => theme.space[4]};
`

const ProjectDescription = styled.div`
  margin-bottom: ${({ theme }) => theme.space[6]};
`

const Paragraph = styled.p`
  color: ${({ theme }) => theme.colors.foreground};
  margin-bottom: ${({ theme }) => theme.space[4]};
  line-height: ${({ theme }) => theme.lineHeights.tall};
`

const StatusBadge = styled.span`
  display: inline-flex;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.orange};
  color: ${({ theme }) => theme.colors.background};
  padding: ${({ theme }) => theme.space[1]} ${({ theme }) => theme.space[3]};
  border-radius: ${({ theme }) => theme.radii.full};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  margin-bottom: ${({ theme }) => theme.space[4]};
  
  svg {
    margin-right: ${({ theme }) => theme.space[2]};
  }
`

const BulletList = styled.ul`
  margin-left: ${({ theme }) => theme.space[6]};
  margin-bottom: ${({ theme }) => theme.space[4]};
`

const BulletItem = styled.li`
  color: ${({ theme }) => theme.colors.foreground};
  margin-bottom: ${({ theme }) => theme.space[2]};
`

const TechStackTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  color: ${({ theme }) => theme.colors.cyan};
  margin-bottom: ${({ theme }) => theme.space[3]};
`

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.space[2]};
  margin-bottom: ${({ theme }) => theme.space[6]};
`

const TechItem = styled.span`
  background-color: ${({ theme }) => theme.colors.currentLine};
  color: ${({ theme }) => theme.colors.purple};
  padding: ${({ theme }) => theme.space[2]} ${({ theme }) => theme.space[3]};
  border-radius: ${({ theme }) => theme.radii.md};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
`

const ProjectLinks = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.space[4]};
`

const ProjectLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.space[2]};
  color: ${({ theme }) => theme.colors.green};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  text-decoration: none;
  transition: color 0.3s ease;
  
  &:hover {
    color: ${({ theme }) => theme.colors.cyan};
  }
`

const ProjectImageWrapper = styled.div`
  min-width: 280px;
  max-width: 400px;
  margin-bottom: ${({ theme }) => theme.space[6]};
  
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    margin-bottom: 0;
  }
`

const ProjectImage = styled.div`
  width: 100%;
  aspect-ratio: 16 / 9;
  border-radius: ${({ theme }) => theme.radii.lg};
  background-color: ${({ theme }) => theme.colors.currentLine};
  overflow: hidden;
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: ${({ theme }) => theme.radii.lg};
    box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.1);
  }
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

const Projects = () => {
  return (
    <PageContainer
      initial="initial"
      animate="animate"
      variants={stagger}
    >
      <PageTitle>My Projects</PageTitle>
      
      <ProjectGrid>
        <ProjectItem variants={fadeIn}>
          <ProjectContent>
            <ProjectTitle>LLM-Powered Natural Language Database Query System</ProjectTitle>
            
            <StatusBadge>
              <FontAwesomeIcon icon={faCodeBranch} /> Under Active Development
            </StatusBadge>
            
            <ProjectDescription>
              <Paragraph>
                I designed and implemented a full-stack web application that leverages large language models (LLMs) to translate natural language queries into SQL, execute them against a database, and render the results with appropriate visualizations.
              </Paragraph>
              
              <Paragraph>
                Currently, the application supports baseball statistics up to 2022 with season-long statistics. I'm working on migrating to event-level data from Retrosheet that will include every at-bat. New features like chat history have been developed but won't be pushed to the live app until the database transition is complete.
              </Paragraph>
              
              <BulletList>
                <BulletItem>
                  Built a sophisticated prompt engineering system to guide the LLM in generating accurate SQL
                </BulletItem>
                <BulletItem>
                  Implemented SQL sanitization middleware to prevent injection attacks
                </BulletItem>
                <BulletItem>
                  Created a dynamic visualization engine that automatically selects appropriate chart types
                </BulletItem>
                <BulletItem>
                  Designed a provider-agnostic LLM service architecture to support multiple providers
                </BulletItem>
                <BulletItem>
                  Built a ChatGPT/Gemini-style interface with conversation history
                </BulletItem>
              </BulletList>
              
              <TechStackTitle>Technologies Used</TechStackTitle>
              <TechStack>
                <TechItem>React</TechItem>
                <TechItem>TypeScript</TechItem>
                <TechItem>FastAPI</TechItem>
                <TechItem>SQLAlchemy</TechItem>
                <TechItem>LLM Integration</TechItem>
                <TechItem>SQL</TechItem>
                <TechItem>Recharts</TechItem>
                <TechItem>Python</TechItem>
              </TechStack>
              
              <ProjectLinks>
                <ProjectLink href="#" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faGithub} /> GitHub
                </ProjectLink>
                <ProjectLink href="https://llmquery.vercel.app/" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faArrowUpRightFromSquare} /> Live Demo
                </ProjectLink>
              </ProjectLinks>
            </ProjectDescription>
          </ProjectContent>
          
        </ProjectItem>
        
        <ProjectItem variants={fadeIn}>
          <ProjectContent>
            <ProjectTitle>GPU-Accelerated Data Visualization</ProjectTitle>
            
            <ProjectDescription>
              <Paragraph>
                At NASA JPL, I engineered a GPU-accelerated visualization system using OpenGL shaders to visualize billion-point memory error datasets, reducing rendering time from 15 minutes to 0.1 seconds (9000x speedup).
              </Paragraph>
              
              <BulletList>
                <BulletItem>
                  Rewritten inefficient Python visualization code for DRAM bit flip analysis
                </BulletItem>
                <BulletItem>
                  Engineered custom OpenGL shader for processing large-scale datasets
                </BulletItem>
                <BulletItem>
                  Implemented Vispy for GPU-accelerated rendering
                </BulletItem>
                <BulletItem>
                  Optimized data preprocessing to handle multi-terabyte datasets
                </BulletItem>
              </BulletList>
              
              <TechStackTitle>Technologies Used</TechStackTitle>
              <TechStack>
                <TechItem>C++</TechItem>
                <TechItem>OpenGL</TechItem>
                <TechItem>GLSL Shaders</TechItem>
                <TechItem>Python</TechItem>
                <TechItem>Vispy</TechItem>
                <TechItem>NumPy</TechItem>
                <TechItem>Data Visualization</TechItem>
              </TechStack>
            </ProjectDescription>
          </ProjectContent>
          
        </ProjectItem>
        
        <ProjectItem variants={fadeIn}>
          <ProjectContent>
            <ProjectTitle>Embedded Systems for Radiation Testing</ProjectTitle>
            
            <ProjectDescription>
              <Paragraph>
                Developed embedded software for ARM microprocessors to monitor memory errors during radiation testing, along with a custom test harness for experiment control.
              </Paragraph>
              
              <BulletList>
                <BulletItem>
                  Created low-level C code to access SRAM modules directly on ARM A5 processors
                </BulletItem>
                <BulletItem>
                  Modified bootloader to bypass OS virtualization for direct memory access
                </BulletItem>
                <BulletItem>
                  Built a custom test rig with Raspberry Pi for remote power-cycling
                </BulletItem>
                <BulletItem>
                  Implemented multithreaded TCP/IP communication between control laptop and test chamber
                </BulletItem>
                <BulletItem>
                  Developed multi-threaded test frameworks for Snapdragon processors
                </BulletItem>
              </BulletList>
              
              <TechStackTitle>Technologies Used</TechStackTitle>
              <TechStack>
                <TechItem>C</TechItem>
                <TechItem>ARM Assembly</TechItem>
                <TechItem>Python</TechItem>
                <TechItem>C#</TechItem>
                <TechItem>Multithreading</TechItem>
                <TechItem>TCP/IP</TechItem>
                <TechItem>Raspberry Pi</TechItem>
                <TechItem>GPIO</TechItem>
                <TechItem>UART</TechItem>
                <TechItem>JTAG</TechItem>
              </TechStack>
            </ProjectDescription>
          </ProjectContent>
          
        </ProjectItem>
        
        <ProjectItem variants={fadeIn}>
          <ProjectContent>
            <ProjectTitle>Quantum Circuit Simulator</ProjectTitle>
            
            <StatusBadge>
              <FontAwesomeIcon icon={faCodeBranch} /> Academic Project
            </StatusBadge>
            
            <ProjectDescription>
              <Paragraph>
                Developed a quantum circuit simulator in OCaml that enables the modeling and simulation of quantum algorithms. This tool provides a robust environment for experimentation with quantum gates and circuits.
              </Paragraph>
              
              <BulletList>
                <BulletItem>
                  Implemented core quantum gates (Hadamard, CNOT, Pauli-X/Y/Z) with complex matrix operations
                </BulletItem>
                <BulletItem>
                  Built circuit composition functionality for creating sophisticated quantum algorithms
                </BulletItem>
                <BulletItem>
                  Created visualization tools to represent quantum states and circuit diagrams
                </BulletItem>
                <BulletItem>
                  Optimized matrix operations for efficient simulation of multi-qubit systems
                </BulletItem>
                <BulletItem>
                  Implemented common quantum algorithms including Grover's search and quantum teleportation
                </BulletItem>
              </BulletList>
              
              <TechStackTitle>Technologies Used</TechStackTitle>
              <TechStack>
                <TechItem>OCaml</TechItem>
                <TechItem>Functional Programming</TechItem>
                <TechItem>Linear Algebra</TechItem>
                <TechItem>Quantum Computing</TechItem>
                <TechItem>Matrix Operations</TechItem>
                <TechItem>LaTeX</TechItem>
              </TechStack>
            </ProjectDescription>
          </ProjectContent>
          
        </ProjectItem>

        <ProjectItem variants={fadeIn}>
          <ProjectContent>
            <ProjectTitle>2048 Game AI Solver</ProjectTitle>
            
            <ProjectDescription>
              <Paragraph>
                Developed an AI agent that plays the game 2048 using the minimax algorithm with alpha-beta pruning for optimization. The solver consistently reaches the 2048 tile and occasionally the 4096 tile.
              </Paragraph>
              
              <BulletList>
                <BulletItem>
                  Implemented the minimax game tree search algorithm in C++.
                </BulletItem>
                <BulletItem>
                  Incorporated alpha-beta pruning to significantly reduce the search space and improve performance.
                </BulletItem>
                <BulletItem>
                  Designed and tuned a custom heuristic evaluation function based on board state features (e.g., empty tiles, monotonicity, smoothness).
                </BulletItem>
                <BulletItem>
                  Optimized search depth parameters to balance performance and decision quality.
                </BulletItem>
              </BulletList>
              
              <TechStackTitle>Technologies Used</TechStackTitle>
              <TechStack>
                <TechItem>C++</TechItem>
                <TechItem>Algorithms</TechItem>
                <TechItem>Game Theory</TechItem>
                <TechItem>Artificial Intelligence</TechItem>
                <TechItem>Minimax Search</TechItem>
                <TechItem>Alpha-Beta Pruning</TechItem>
              </TechStack>

              <ProjectLinks>
                <ProjectLink href="https://github.com/TTurchan/CPP-Twenty-Forty-Eight/" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faGithub} /> GitHub
                </ProjectLink>
              </ProjectLinks>
            </ProjectDescription>
          </ProjectContent>
        </ProjectItem>

      </ProjectGrid>
    </PageContainer>
  )
}

export default Projects 