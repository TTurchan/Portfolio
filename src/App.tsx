import { ThemeProvider } from 'styled-components'
import { AnimatePresence } from 'framer-motion'
import { useRef, useEffect } from 'react'

// Import components directly to avoid lazy loading issues
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

// Styles
import { theme } from './styles/theme'
import { AppContainer, MainContent } from './styles/AppStyles'

// Section context for scroll navigation
export type SectionRefs = {
  home: React.RefObject<HTMLDivElement | null>;
  about: React.RefObject<HTMLDivElement | null>;
  projects: React.RefObject<HTMLDivElement | null>;
  contact: React.RefObject<HTMLDivElement | null>;
}

function App() {
  // Create refs for each section
  const sectionRefs: SectionRefs = {
    home: useRef<HTMLDivElement>(null),
    about: useRef<HTMLDivElement>(null),
    projects: useRef<HTMLDivElement>(null),
    contact: useRef<HTMLDivElement>(null)
  }

  const scrollToSection = (sectionName: keyof SectionRefs) => {
    sectionRefs[sectionName]?.current?.scrollIntoView({ behavior: 'smooth' });
  }
  
  // Use Intersection Observer for more efficient scroll reveal
  useEffect(() => {
    // Add a small delay to ensure elements are rendered before observing
    const timer = setTimeout(() => {
      const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
      };
      
      const handleIntersect = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          } else {
            entry.target.classList.remove('active');
          }
        });
      };
      
      // Only create the observer if the elements exist
      if (document.querySelectorAll('.reveal').length > 0) {
        const observer = new IntersectionObserver(handleIntersect, observerOptions);
        
        document.querySelectorAll('.reveal').forEach(element => {
          observer.observe(element);
        });
        
        return () => {
          observer.disconnect();
        };
      }
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <AppContainer>
        <Navbar scrollToSection={scrollToSection} />
        <MainContent>
          <AnimatePresence mode="wait">
            <div ref={sectionRefs.home} id="home" className="section">
              <Home />
            </div>
            <div ref={sectionRefs.about} id="about" className="section reveal from-bottom">
              <About />
            </div>
            <div ref={sectionRefs.projects} id="projects" className="section reveal from-bottom">
              <Projects />
            </div>
            <div ref={sectionRefs.contact} id="contact" className="section reveal from-bottom">
              <Contact />
            </div>
          </AnimatePresence>
        </MainContent>
        <Footer />
      </AppContainer>
    </ThemeProvider>
  )
}

export default App 