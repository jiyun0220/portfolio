import React from 'react';
import styled from 'styled-components';
import { motion, useScroll, useTransform } from 'framer-motion';
import { PageSection } from '../common/PageSection';

const Content = styled.div`
  max-width: 1200px;
  width: 100%;
  display: flex;
  align-items: center;
  gap: 4rem;
  padding: 2rem;
  position: relative;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 2rem;
    text-align: center;
  }
`;

const ImageContainer = styled(motion.div)`
  flex: 1;
  position: relative;
  perspective: 1000px;
  z-index: 1;
`;

const Image = styled(motion.img)`
  width: 100%;
  max-width: 400px;
  height: auto;
  border-radius: 1rem;
  box-shadow: ${({ theme }) => theme.shadow};
`;

const ImageOverlay = styled(motion.div)`
  position: absolute;
  top: -10px;
  left: -10px;
  right: 10px;
  bottom: 10px;
  border: 2px solid ${({ theme }) => theme.primary};
  border-radius: 1rem;
  z-index: -1;
`;

const Info = styled(motion.div)`
  flex: 1;
  position: relative;
`;

const Title = styled(motion.h2)`
  font-size: clamp(2rem, 5vw, 3.5rem);
  margin-bottom: 2rem;
  background: ${({ theme }) => theme.gradient};
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Description = styled(motion.p)`
  font-size: 1.125rem;
  line-height: 1.8;
  margin-bottom: 2rem;
  
  strong {
    color: ${({ theme }) => theme.primary};
    font-weight: 600;
  }

  span {
    background: linear-gradient(120deg, ${({ theme }) => theme.primary}20, ${({ theme }) => theme.primary}20);
    background-repeat: no-repeat;
    background-size: 100% 0.4em;
    background-position: 0 88%;
    transition: background-size 0.25s ease-in;
    
    &:hover {
      background-size: 100% 88%;
    }
  }
`;

const SocialLinks = styled(motion.div)`
  display: flex;
  gap: 1.5rem;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const SocialLink = styled(motion.a)`
  color: ${({ theme }) => theme.text};
  font-size: 1.5rem;
  transition: all 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.primary};
    transform: translateY(-3px);
  }
`;

export const About = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);

  return (
    <PageSection id="about">
      <Content>
        <ImageContainer>
          <Image
            src="/assets/me.jpeg"
            alt="Profile"
            initial={{ scale: 0.8, opacity: 0, rotateY: -15 }}
            animate={{ scale: 1, opacity: 1, rotateY: 0 }}
            transition={{ duration: 0.8 }}
            style={{ y }}
          />
          <ImageOverlay
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
        </ImageContainer>
        <Info>
          <Title
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            About Me
          </Title>
          <Description
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            안녕하세요, <strong>대구소프트웨어마이스터고 인공지능소프트웨어과</strong>에서 프론트엔드 개발을 공부하고 있는 <strong>신지윤</strong>입니다.
            <br /><br />
            <span>배움을 갈망하는 개발자</span>로서 하루하루 새로운 것을 익히며 성장하고 있습니다. 웹과 iOS 개발을 공부하고 있으며, 디자인과 기획 경험도 쌓아왔습니다.
            <br /><br />
            더 많은 경험을 위해 <span>끊임없이 도전</span>하며, 개발자로서 한 걸음씩 나아가고 있습니다.
          </Description>
          <SocialLinks
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <SocialLink
              href="https://github.com/jiyun0220"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              style={{ rotate }}
            >
              <i className="fab fa-github"></i>
            </SocialLink>
            <SocialLink
              href="mailto:your.email@example.com"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              style={{ rotate }}
            >
              <i className="fas fa-envelope"></i>
            </SocialLink>
          </SocialLinks>
        </Info>
      </Content>
    </PageSection>
  );
};
