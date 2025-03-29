import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { PageSection } from './PageSection';

const Content = styled.div`
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
  padding: 0 2rem;
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
  font-size: 1.25rem;
  color: ${({ theme }) => theme.secondary};
  margin-bottom: 4rem;
  line-height: 1.8;
`;

const ContactGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
`;

const ContactItem = styled(motion.a)`
  background: ${({ theme }) => theme.card};
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 1rem;
  padding: 2rem;
  text-align: center;
  box-shadow: ${({ theme }) => theme.shadow};
  transition: all 0.3s ease;
  text-decoration: none;
  color: ${({ theme }) => theme.text};

  &:hover {
    transform: translateY(-5px);
    box-shadow: ${({ theme }) => `0 8px 16px ${theme.shadow}`};
  }
`;

const Icon = styled.div`
  font-size: 2rem;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.primary};
`;

const ItemTitle = styled.h3`
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
  color: ${({ theme }) => theme.text};
`;

const ItemText = styled.p`
  color: ${({ theme }) => theme.secondary};
  font-size: 1rem;
`;

const contactItems = [
  {
    icon: '📧',
    title: 'Email',
    text: 'example@email.com',
    href: 'mailto:example@email.com'
  },
  {
    icon: '💼',
    title: 'LinkedIn',
    text: 'linkedin.com/in/username',
    href: 'https://linkedin.com/in/username'
  },
  {
    icon: '💻',
    title: 'GitHub',
    text: 'github.com/username',
    href: 'https://github.com/username'
  }
];

export const Contact = () => {
  return (
    <PageSection id="contact">
      <Content>
        <Title
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          CONTACT
        </Title>
        <Description
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          함께 일하고 싶으시다면 언제든 연락해주세요.
          새로운 기회를 기다리고 있습니다.
        </Description>
        <ContactGrid
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {contactItems.map((item, index) => (
            <ContactItem
              key={index}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
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
