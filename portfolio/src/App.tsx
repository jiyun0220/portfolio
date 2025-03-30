import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './styles/theme';
import { GlobalStyle } from './styles/GlobalStyle';
import { Navigation } from './components/layout/Navigation';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Skills } from './components/sections/Skills';
import { Projects } from './components/sections/Projects';
import { Activities } from './components/sections/Activities';
import { Awards } from './components/sections/Awards';
import { Contact } from './components/sections/Contact';
import { ThemeToggle } from './components/common/ThemeToggle';

interface MainContainerProps {
  $isDark: boolean;
}

const MainContainer = styled.div<MainContainerProps>`
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  transition: all 0.3s ease;
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

export const App = () => {
  const [isDark, setIsDark] = useState(true); // 기본값을 true로 설정

  const theme = isDark ? darkTheme : lightTheme;

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <MainContainer $isDark={isDark}>
        <Navigation />
        <ThemeToggle isDark={isDark} toggleTheme={toggleTheme} />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Activities />
        <Awards />
        <Contact />
      </MainContainer>
    </ThemeProvider>
  );
};
