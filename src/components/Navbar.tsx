import { useState, useEffect } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import { SectionRefs } from '../App'

const NavbarContainer = styled.header`
  position: fixed; /* Changed from sticky to fixed for better scroll experience */
  top: 0;
  left: 0;
  right: 0;
  z-index: ${({ theme }) => theme.zIndices.sticky};
  background-color: ${({ theme }) => theme.colors.background}CC; /* Added transparency */
  backdrop-filter: blur(10px);
  border-bottom: 1px solid ${({ theme }) => theme.colors.currentLine};
  width: 100%;
  transition: transform 0.3s ease;
`

const NavContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: ${({ theme }) => theme.space[4]} ${({ theme }) => theme.space[4]};
  
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: ${({ theme }) => theme.space[4]} ${({ theme }) => theme.space[6]};
  }
`

const Logo = styled.div`
  font-size: ${({ theme }) => theme.fontSizes['2xl']};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.purple};
  text-decoration: none;
  display: flex;
  align-items: center;
  transition: color 0.3s ease;
  cursor: pointer;
  
  &:hover {
    color: ${({ theme }) => theme.colors.pink};
  }
`

const NavLinks = styled.nav<{ isOpen: boolean }>`
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    width: 70vw;
    max-width: 300px;
    padding: ${({ theme }) => theme.space[16]} ${({ theme }) => theme.space[8]};
    background-color: ${({ theme }) => theme.colors.currentLine};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    transform: ${({ isOpen }) => isOpen ? 'translateX(0)' : 'translateX(100%)'};
    transition: transform 0.3s ease-in-out;
    box-shadow: ${({ isOpen, theme }) => isOpen ? theme.shadows.xl : 'none'};
    z-index: ${({ theme }) => theme.zIndices.modal};
  }
  
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    display: flex;
    gap: ${({ theme }) => theme.space[8]};
  }
`

const NavItem = styled.div`
  margin: ${({ theme }) => theme.space[4]} 0;
  
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    margin: 0;
  }
`

const NavLink = styled.div<{ active: boolean }>`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  color: ${({ active, theme }) => active ? theme.colors.pink : theme.colors.foreground};
  text-decoration: none;
  position: relative;
  padding: ${({ theme }) => theme.space[2]};
  cursor: pointer;
  
  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: ${({ theme }) => theme.colors.pink};
    transform: ${({ active }) => active ? 'scaleX(1)' : 'scaleX(0)'};
    transform-origin: bottom right;
    transition: transform 0.3s ease;
  }
  
  &:hover:after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }
`

const MobileMenuButton = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.foreground};
  font-size: ${({ theme }) => theme.fontSizes.xl};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: ${({ theme }) => theme.zIndices.overlay};
  
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    display: none;
  }
`

const Overlay = styled(motion.div)<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(3px);
  z-index: ${({ theme }) => theme.zIndices.overlay};
  display: ${({ isOpen }) => isOpen ? 'block' : 'none'};
  
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    display: none;
  }
`

interface NavbarProps {
  scrollToSection: (sectionName: keyof SectionRefs) => void;
}

const Navbar = ({ scrollToSection }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState<keyof SectionRefs>('home')
  const [prevScrollPos, setPrevScrollPos] = useState(0)
  const [visible, setVisible] = useState(true)
  
  const toggleMenu = () => setIsOpen(!isOpen)
  const closeMenu = () => setIsOpen(false)
  
  const handleNavClick = (section: keyof SectionRefs) => {
    scrollToSection(section)
    closeMenu()
    setActiveSection(section)
  }
  
  // Handle scroll to determine active section and navbar visibility
  useEffect(() => {
    const handleScroll = () => {
      // Navbar hide/show on scroll
      const currentScrollPos = window.scrollY
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 70)
      setPrevScrollPos(currentScrollPos)
      
      // Determine active section based on scroll position
      const sections = {
        home: document.getElementById('home'),
        about: document.getElementById('about'),
        projects: document.getElementById('projects'),
        contact: document.getElementById('contact')
      };
      
      const scrollPosition = window.scrollY + 300

      if (sections.contact && scrollPosition >= sections.contact.offsetTop) {
        setActiveSection('contact')
      } else if (sections.projects && scrollPosition >= sections.projects.offsetTop) {
        setActiveSection('projects')
      } else if (sections.about && scrollPosition >= sections.about.offsetTop) {
        setActiveSection('about')
      } else {
        setActiveSection('home')
      }
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [prevScrollPos])
  
  // Disable body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
    
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [isOpen])
  
  return (
    <NavbarContainer style={{ transform: visible ? 'translateY(0)' : 'translateY(-100%)' }}>
      <NavContent>
        <Logo onClick={() => handleNavClick('home')}>
          Trevor Turchan
        </Logo>
        
        <MobileMenuButton onClick={toggleMenu}>
          <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
        </MobileMenuButton>
        
        <Overlay 
          isOpen={isOpen}
          onClick={closeMenu}
          initial={{ opacity: 0 }}
          animate={{ opacity: isOpen ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        />
        
        <NavLinks isOpen={isOpen}>
          <NavItem>
            <NavLink 
              active={activeSection === 'home'}
              onClick={() => handleNavClick('home')}
            >
              Home
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink 
              active={activeSection === 'about'}
              onClick={() => handleNavClick('about')}
            >
              About
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink 
              active={activeSection === 'projects'}
              onClick={() => handleNavClick('projects')}
            >
              Projects
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink 
              active={activeSection === 'contact'}
              onClick={() => handleNavClick('contact')}
            >
              Contact
            </NavLink>
          </NavItem>
        </NavLinks>
      </NavContent>
    </NavbarContainer>
  )
}

export default Navbar 