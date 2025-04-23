import styled from 'styled-components'

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.foreground};
  overflow-x: hidden; /* Prevent horizontal scrolling */
`

export const MainContent = styled.main`
  flex: 1;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: ${({ theme }) => theme.space[4]} ${({ theme }) => theme.space[4]};
  padding-top: calc(${({ theme }) => theme.space[16]} + ${({ theme }) => theme.space[8]}); /* Extra padding to account for fixed navbar */
  
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: ${({ theme }) => theme.space[8]} ${({ theme }) => theme.space[6]};
    padding-top: calc(${({ theme }) => theme.space[16]} + ${({ theme }) => theme.space[8]}); /* Extra padding to account for fixed navbar */
  }
  
  /* Add styling for section gaps */
  & > div {
    min-height: 100vh; /* Each section takes at least full viewport height */
    display: flex;
    flex-direction: column;
    padding-bottom: ${({ theme }) => theme.space[16]};
    scroll-margin-top: ${({ theme }) => theme.space[16]}; /* Offset for navbar when scrolling */
  }
  
  /* Add a subtle separator between sections */
  & > div:not(:last-child) {
    border-bottom: 1px solid ${({ theme }) => theme.colors.currentLine};
    margin-bottom: ${({ theme }) => theme.space[12]};
  }
` 