import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { PageSection } from './PageSection';
import { FaGithub, FaEnvelope } from 'react-icons/fa';

const HeroSection = styled(PageSection)`
  min-height: 100vh;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 100%;
    background: linear-gradient(
      135deg,
      ${({ theme }) => theme.accent}10,
      ${({ theme }) => theme.primary}10
    );
    z-index: 0;
  }
`;

const Content = styled.div`
  text-align: center;
  max-width: 800px;
  width: 100%;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`;

const TextContent = styled.div`
  margin-bottom: 8rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ScrollContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  position: relative;
`;

const Greeting = styled(motion.h1)`
  font-size: clamp(2rem, 8vw, 4rem);
  margin-bottom: 2rem;
  color: ${({ theme }) => theme.primary};
`;

const Title = styled(motion.h2)`
  font-size: clamp(1.5rem, 6vw, 3rem);
  margin-bottom: 2rem;
  color: ${({ theme }) => theme.text};
  line-height: 1.4;
`;

const Description = styled(motion.p)`
  font-size: clamp(1rem, 4vw, 1.25rem);
  color: ${({ theme }) => theme.secondary};
  line-height: 1.8;
  white-space: pre-line;
`;

const ScrollIndicator = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  color: ${({ theme }) => theme.text};
  font-weight: 500;
  font-size: 1.125rem;
  cursor: pointer;
  background: ${({ theme }) => `${theme.background}80`};
  padding: 1rem 2rem;
  border-radius: 2rem;
  backdrop-filter: blur(8px);

  &::after {
    content: '';
    width: 2px;
    height: 40px;
    background: ${({ theme }) => theme.primary};
    animation: scroll 2s ease-in-out infinite;
  }

  @keyframes scroll {
    0% {
      transform: scaleY(0);
      transform-origin: top;
      opacity: 0;
    }
    50% {
      transform: scaleY(1);
      transform-origin: top;
      opacity: 1;
    }
    50.1% {
      transform: scaleY(1);
      transform-origin: bottom;
      opacity: 1;
    }
    100% {
      transform: scaleY(0);
      transform-origin: bottom;
      opacity: 0;
    }
  }

  &:hover {
    color: ${({ theme }) => theme.primary};
    transform: translateY(-5px);
  }
`;

export const Hero = () => {
  const scrollToNextSection = () => {
    const nextSection = document.getElementById('about');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <HeroSection id="hero">
      <Content>
        <TextContent>
          <Greeting
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            안녕하세요! 👋
          </Greeting>
          <Title
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            배움을 갈망하는 개발자, 신지윤입니다.
          </Title>
          <Description
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {`새로운 기술을 배우고 도전하며,
            코드로 가치를 창출해 세상을 변화시킵니다.`}
          </Description>
        </TextContent>
        <ScrollContainer>
          <ScrollIndicator
            onClick={scrollToNextSection}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
            whileHover={{ scale: 1.05 }}
          >
            더보기
          </ScrollIndicator>
        </ScrollContainer>
      </Content>
    </HeroSection>
  );
};
