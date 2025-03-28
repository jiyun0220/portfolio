import styled from 'styled-components';
import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
  id?: string;
  background?: string;
}

const Section = styled.section`
  min-height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4rem 0;
  position: relative;
  scroll-snap-align: start;
  scroll-snap-stop: always;
  overflow: hidden;
  
  @media (max-width: 768px) {
    padding: 2rem 0;
    min-height: auto;
    scroll-snap-align: none;
  }
`;

const Container = styled(motion.div)`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

export const PageSection = ({ children, id, background }: SectionProps) => {
  return (
    <Section id={id} style={{ background }}>
      <Container
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {children}
      </Container>
    </Section>
  );
};
