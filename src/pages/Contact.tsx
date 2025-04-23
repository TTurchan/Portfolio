import { useState, FormEvent } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faPhone, faPaperPlane } from '@fortawesome/free-solid-svg-icons'

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

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${({ theme }) => theme.space[12]};
  
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: 1fr 1fr;
  }
`

const ContactInfo = styled(motion.div)`
  margin-bottom: ${({ theme }) => theme.space[8]};
  
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    margin-bottom: 0;
  }
`

const Paragraph = styled.p`
  color: ${({ theme }) => theme.colors.foreground};
  margin-bottom: ${({ theme }) => theme.space[8]};
  line-height: ${({ theme }) => theme.lineHeights.tall};
  max-width: 500px;
`

const ContactDetailsTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes['2xl']};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  color: ${({ theme }) => theme.colors.pink};
  margin-bottom: ${({ theme }) => theme.space[6]};
`

const ContactDetailsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space[4]};
  margin-bottom: ${({ theme }) => theme.space[8]};
`

const ContactDetail = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.space[4]};
`

const ContactIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: ${({ theme }) => theme.radii.full};
  background-color: ${({ theme }) => theme.colors.currentLine};
  color: ${({ theme }) => theme.colors.purple};
`

const ContactText = styled.a`
  color: ${({ theme }) => theme.colors.foreground};
  text-decoration: none;
  transition: color 0.3s ease;
  
  &:hover {
    color: ${({ theme }) => theme.colors.pink};
  }
`

const SocialLinksTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes['2xl']};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  color: ${({ theme }) => theme.colors.pink};
  margin-bottom: ${({ theme }) => theme.space[6]};
`

const SocialLinks = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.space[4]};
`

const SocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: ${({ theme }) => theme.radii.full};
  background-color: ${({ theme }) => theme.colors.currentLine};
  color: ${({ theme }) => theme.colors.purple};
  font-size: ${({ theme }) => theme.fontSizes.xl};
  transition: all 0.3s ease;
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.purple};
    color: ${({ theme }) => theme.colors.background};
    transform: translateY(-3px);
  }
`

const ContactForm = styled(motion.form)`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space[6]};
  padding: ${({ theme }) => theme.space[8]};
  background-color: ${({ theme }) => theme.colors.currentLine};
  border-radius: ${({ theme }) => theme.radii.lg};
`

const FormTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes['2xl']};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  color: ${({ theme }) => theme.colors.foreground};
  margin-bottom: ${({ theme }) => theme.space[4]};
`

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space[2]};
`

const Label = styled.label`
  color: ${({ theme }) => theme.colors.foreground};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
`

const Input = styled.input`
  padding: ${({ theme }) => theme.space[3]};
  background-color: ${({ theme }) => theme.colors.background};
  border: 1px solid ${({ theme }) => theme.colors.comment};
  border-radius: ${({ theme }) => theme.radii.md};
  color: ${({ theme }) => theme.colors.foreground};
  font-family: ${({ theme }) => theme.fonts.body};
  
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.purple};
    box-shadow: 0 0 0 1px ${({ theme }) => theme.colors.purple};
  }
`

const Textarea = styled.textarea`
  padding: ${({ theme }) => theme.space[3]};
  background-color: ${({ theme }) => theme.colors.background};
  border: 1px solid ${({ theme }) => theme.colors.comment};
  border-radius: ${({ theme }) => theme.radii.md};
  color: ${({ theme }) => theme.colors.foreground};
  font-family: ${({ theme }) => theme.fonts.body};
  min-height: 150px;
  resize: vertical;
  
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.purple};
    box-shadow: 0 0 0 1px ${({ theme }) => theme.colors.purple};
  }
`

const SubmitButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.space[2]};
  padding: ${({ theme }) => theme.space[3]} ${({ theme }) => theme.space[6]};
  background-color: ${({ theme }) => theme.colors.purple};
  color: ${({ theme }) => theme.colors.foreground};
  border: none;
  border-radius: ${({ theme }) => theme.radii.md};
  font-family: ${({ theme }) => theme.fonts.body};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.pink};
    transform: translateY(-2px);
  }
  
  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.background}, 0 0 0 4px ${({ theme }) => theme.colors.purple};
  }
`

const FormMessage = styled.div<{ isError?: boolean }>`
  padding: ${({ theme }) => theme.space[3]} ${({ theme }) => theme.space[4]};
  background-color: ${({ theme, isError }) => isError ? theme.colors.red : theme.colors.green};
  color: ${({ theme }) => theme.colors.foreground};
  border-radius: ${({ theme }) => theme.radii.md};
  opacity: 0.9;
`

const Contact = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  
  const [formStatus, setFormStatus] = useState({
    message: '',
    isError: false,
    isVisible: false
  })
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    })
  }
  
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    
    // Use Formspree to send emails - must use a form ID from Formspree
    fetch('https://formspree.io/f/xpzvgwbd', {
      method: 'POST',
      body: JSON.stringify({
        name: formState.name,
        email: formState.email,
        subject: formState.subject,
        message: formState.message,
        _replyto: formState.email // This helps Formspree know where to reply
      }),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
    .then(response => {
      if (response.ok) {
        setFormStatus({
          message: 'Thank you for your message! I will get back to you soon.',
          isError: false,
          isVisible: true
        })
        
        // Reset form
        setFormState({
          name: '',
          email: '',
          subject: '',
          message: ''
        })
      } else {
        throw new Error('Failed to send message')
      }
    })
    .catch(error => {
      console.error('Error sending message:', error)
      setFormStatus({
        message: 'There was an error sending your message. Please try again later.',
        isError: true,
        isVisible: true
      })
    })
    
    // Hide the message after 5 seconds
    setTimeout(() => {
      setFormStatus(prev => ({ ...prev, isVisible: false }))
    }, 5000)
  }
  
  return (
    <PageContainer
      initial="initial"
      animate="animate"
      variants={stagger}
    >
      <PageTitle>Contact Me</PageTitle>
      
      <ContactGrid>
        <ContactInfo variants={fadeIn}>
          <Paragraph>
            I'm currently looking for new opportunities in machine learning and software engineering.
            Whether you have a question or just want to say hi, I'll do my best to get back to you!
          </Paragraph>
          
          <ContactDetailsTitle>Contact Details</ContactDetailsTitle>
          <ContactDetailsList>
            <ContactDetail>
              <ContactIcon>
                <FontAwesomeIcon icon={faEnvelope} />
              </ContactIcon>
              <ContactText href="mailto:trevor.turchan@gmail.com">
                trevor.turchan@gmail.com
              </ContactText>
            </ContactDetail>
            
            <ContactDetail>
              <ContactIcon>
                <FontAwesomeIcon icon={faPhone} />
              </ContactIcon>
              <ContactText href="tel:+16264609021">
                (626) 460-9021
              </ContactText>
            </ContactDetail>
          </ContactDetailsList>
          
          <SocialLinksTitle>Connect With Me</SocialLinksTitle>
          <SocialLinks>
            <SocialLink href="https://github.com/trevorturchan" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FontAwesomeIcon icon={faGithub} />
            </SocialLink>
            
            <SocialLink href="https://linkedin.com/in/trevorturchan" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FontAwesomeIcon icon={faLinkedin} />
            </SocialLink>
          </SocialLinks>
        </ContactInfo>
        
        <ContactForm 
          variants={fadeIn}
          onSubmit={handleSubmit}
        >
          <FormTitle>Send Me a Message</FormTitle>
          
          {formStatus.isVisible && (
            <FormMessage isError={formStatus.isError}>
              {formStatus.message}
            </FormMessage>
          )}
          
          <FormGroup>
            <Label htmlFor="name">Name</Label>
            <Input
              type="text"
              id="name"
              name="name"
              value={formState.name}
              onChange={handleChange}
              required
            />
          </FormGroup>
          
          <FormGroup>
            <Label htmlFor="email">Email</Label>
            <Input
              type="email"
              id="email"
              name="email"
              value={formState.email}
              onChange={handleChange}
              required
            />
          </FormGroup>
          
          <FormGroup>
            <Label htmlFor="subject">Subject</Label>
            <Input
              type="text"
              id="subject"
              name="subject"
              value={formState.subject}
              onChange={handleChange}
              required
            />
          </FormGroup>
          
          <FormGroup>
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              name="message"
              value={formState.message}
              onChange={handleChange}
              required
            />
          </FormGroup>
          
          <SubmitButton type="submit">
            <FontAwesomeIcon icon={faPaperPlane} /> Send Message
          </SubmitButton>
        </ContactForm>
      </ContactGrid>
    </PageContainer>
  )
}

export default Contact 