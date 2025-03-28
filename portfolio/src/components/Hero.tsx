import styled from 'styled-components';
import { motion } from 'framer-motion';
import { PageSection } from './PageSection';

const HeroSection = styled(PageSection)`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  padding: 0;
  
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
  position: relative;
  z-index: 1;
  text-align: center;
  max-width: 800px;
  width: 100%;
  padding: 0 2rem;
`;

const Greeting = styled(motion.h1)`
  font-size: clamp(2rem, 8vw, 4rem);
  margin-bottom: 2rem;
  background: ${({ theme }) => theme.gradient};
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
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
  margin-bottom: 3rem;
  white-space: pre-line;
`;

const ScrollIndicator = styled(motion.div)`
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  color: ${({ theme }) => theme.text};
  font-size: 0.875rem;
  opacity: 0.8;
  
  &::after {
    content: '';
    width: 2px;
    height: 60px;
    background: ${({ theme }) => theme.text};
    animation: scroll 2s ease-in-out infinite;
  }
  
  @keyframes scroll {
    0% {
      transform: scaleY(0);
      transform-origin: top;
    }
    50% {
      transform: scaleY(1);
      transform-origin: top;
    }
    50.1% {
      transform: scaleY(1);
      transform-origin: bottom;
    }
    100% {
      transform: scaleY(0);
      transform-origin: bottom;
    }
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
          저는 열정적인 웹 개발자입니다
        </Title>
        <Description
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {`사용자 경험을 중요시하며, 새로운 기술을 배우고 적용하는 것을 좋아합니다.
웹 개발을 통해 사람들의 삶을 더 편리하고 즐겁게 만들고 싶습니다.`}
        </Description>
        <ScrollIndicator
          onClick={scrollToNextSection}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          더 알아보기
        </ScrollIndicator>
      </Content>
    </HeroSection>
  );
};
