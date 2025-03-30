import React from 'react';
import styled from 'styled-components';
import { motion, useScroll, useTransform } from 'framer-motion';
import { PageSection } from '../common/PageSection';

const Content = styled.div`
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
  padding: 4rem 2rem;
  position: relative;
  overflow: hidden;
`;

const Title = styled(motion.h2)`
  font-size: clamp(2rem, 5vw, 3.5rem);
  margin-bottom: 2rem;
  background: ${({ theme }) => theme.gradient};
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  position: relative;
  z-index: 1;
`;

const Description = styled(motion.p)`
  font-size: 1.25rem;
  color: ${({ theme }) => theme.secondary};
  margin-bottom: 4rem;
  line-height: 1.8;
  position: relative;
  z-index: 1;

  strong {
    color: ${({ theme }) => theme.primary};
    font-weight: 600;
  }
`;

const ContactGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  position: relative;
  z-index: 1;
`;

const ContactItem = styled(motion.a)`
  background: ${({ theme }) => theme.card};
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 1rem;
  padding: 2rem;
  text-align: center;
  text-decoration: none;
  color: ${({ theme }) => theme.text};
  position: relative;
  overflow: hidden;
  isolation: isolate;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: ${({ theme }) => theme.gradient};
    opacity: 0;
    z-index: -1;
    transition: opacity 0.3s ease;
  }

  &:hover::before {
    opacity: 0.1;
  }

  &:hover {
    transform: translateY(-5px);
    border-color: ${({ theme }) => theme.primary};
  }
`;

const Icon = styled.div`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  transition: transform 0.3s ease;

  ${ContactItem}:hover & {
    transform: scale(1.1) rotate(5deg);
  }
`;

const ItemTitle = styled.h3`
  font-size: 1.25rem;
  color: ${({ theme }) => theme.text};
  margin-bottom: 0.5rem;
  transition: color 0.3s ease;

  ${ContactItem}:hover & {
    color: ${({ theme }) => theme.primary};
  }
`;

const ItemText = styled.p`
  color: ${({ theme }) => theme.secondary};
  font-size: 1rem;
  transition: color 0.3s ease;

  ${ContactItem}:hover & {
    color: ${({ theme }) => theme.text};
  }
`;

const Background = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: ${({ theme }) => `${theme.primary}05`};
  z-index: 0;
`;

const FloatingCircle = styled(motion.div)`
  position: absolute;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  background: ${({ theme }) => theme.gradient};
  opacity: 0.1;
  z-index: 0;
`;

const contactItems = [
  {
    icon: '📧',
    title: 'Email',
    text: 'jiyun0220@dgsw.hs.kr',
    href: 'mailto:jiyun0220@dgsw.hs.kr'
  },
  {
    icon: '💻',
    title: 'GitHub',
    text: 'github.com/jiyun0220',
    href: 'https://github.com/jiyun0220'
  },
  {
    icon: '📝',
    title: 'Portfolio',
    text: 'notion.so/Shin-Ji-Yun',
    href: 'https://www.notion.so/Shin-Ji-Yun-018e34132c1142da9fb4bb98489ecb99?pvs=4'
  },
  {
    icon: '💼',
    title: 'LinkedIn',
    text: 'linkedin.com/in/jiyun0220',
    href: 'https://linkedin.com/in/jiyun0220'
  },
];

export const Contact = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

  return (
    <PageSection id="contact">
      <Content>
        <Background 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        />
        <FloatingCircle
          style={{ top: '-150px', left: '-150px', scale }}
          animate={{
            y: [0, 30, 0],
            rotate: [0, 180],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <FloatingCircle
          style={{ bottom: '-150px', right: '-150px', scale }}
          animate={{
            y: [0, -30, 0],
            rotate: [180, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <Title
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          CONTACT
        </Title>
        <Description
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <strong>함께 일하고 싶으시다면 언제든 연락해주세요.</strong>
          <br />
          새로운 기회를 기다리고 있습니다.
        </Description>
        <ContactGrid
          style={{ y }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {contactItems.map((item, index) => (
            <ContactItem
              key={index}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Icon>{item.icon}</Icon>
              <ItemTitle>{item.title}</ItemTitle>
              <ItemText>{item.text}</ItemText>
            </ContactItem>
          ))}
        </ContactGrid>
      </Content>
    </PageSection>
  );
};
