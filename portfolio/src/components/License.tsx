import styled from 'styled-components';
import { motion } from 'framer-motion';

const Section = styled.section`
  padding: 2rem;
  background: ${({ theme }) => theme.card};
  border-radius: 1rem;
  margin: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
  font-size: 2rem;
  color: ${({ theme }) => theme.primary};
  margin-bottom: 1.5rem;
  font-weight: 600;
  border-bottom: 2px solid ${({ theme }) => theme.primary};
  padding-bottom: 0.5rem;
`;

const LicenseCard = styled(motion.a)`
  display: block;
  padding: 1.5rem;
  background: ${({ theme }) => theme.background};
  border-radius: 0.5rem;
  border: 1px solid ${({ theme }) => theme.cardHover};
  color: ${({ theme }) => theme.text};
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    border-color: ${({ theme }) => theme.primary};
    transform: translateY(-2px);
  }
`;

export const License = () => {
  return (
    <Section>
      <Title>LICENSE</Title>
      <LicenseCard
        href="https://www.notion.so/AI-1-11c38762d45680a79106c328185d319a"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        AI코딩활용능력 1급
      </LicenseCard>
    </Section>
  );
};
