import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

const FooterContainer = styled.footer`
  background-color: ${({ theme }) => theme.colors.currentLine};
  padding: ${({ theme }) => theme.space[6]} ${({ theme }) => theme.space[4]};
  width: 100%;
`

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: row;
    justify-content: space-between;
  }
`

const Copyright = styled.p`
  color: ${({ theme }) => theme.colors.foreground};
  margin-bottom: ${({ theme }) => theme.space[4]};
  
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    margin-bottom: 0;
  }
`

const SocialLinks = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.space[4]};
`

const SocialLink = styled.a`
  color: ${({ theme }) => theme.colors.foreground};
  font-size: ${({ theme }) => theme.fontSizes.xl};
  transition: color 0.3s ease;
  
  &:hover {
    color: ${({ theme }) => theme.colors.purple};
  }
`

const Footer = () => {
  const currentYear = new Date().getFullYear()
  
  return (
    <FooterContainer>
      <FooterContent>
        <Copyright>
          © {currentYear} Trevor Turchan. All rights reserved.
        </Copyright>
        
        <SocialLinks>
          <SocialLink href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FontAwesomeIcon icon={faGithub} />
          </SocialLink>
          
          <SocialLink href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FontAwesomeIcon icon={faLinkedin} />
          </SocialLink>
          
          <SocialLink href="mailto:trevor.turchan@gmail.com" aria-label="Email">
            <FontAwesomeIcon icon={faEnvelope} />
          </SocialLink>
        </SocialLinks>
      </FooterContent>
    </FooterContainer>
  )
}

export default Footer 