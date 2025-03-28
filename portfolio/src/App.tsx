import styled from 'styled-components';
import { ThemeProvider } from './contexts/ThemeContext';
import { GlobalStyle } from './styles/GlobalStyle';
import { ThemeToggle } from './components/ThemeToggle';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Education } from './components/Education';
import { Activities } from './components/Activities';
import { Awards } from './components/Awards';
import { Contact } from './components/Contact';

const MainContainer = styled.main`
  height: 100vh;
  overflow-y: auto;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;

  @media (max-width: 768px) {
    scroll-snap-type: none;
  }

  > section {
    scroll-snap-align: start;
    scroll-snap-stop: always;
  }
`;

const App = () => {
  return (
    <ThemeProvider>
      <GlobalStyle />
      <ThemeToggle />
      <Navigation />
      <MainContainer>
        <Hero />
        <About />
        <Education />
        <Skills />
        <Projects />
        <Activities />
        <Awards />
        <Contact />
      </MainContainer>
    </ThemeProvider>
  );
};

export default App;
