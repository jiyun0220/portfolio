import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { awards } from '../data/awards';
import { containerVariants, itemVariants, contentVariants } from '../animations/timeline';

const AwardsSection = styled.section`
  position: relative;
  background: ${({ theme }) => theme.background};
  padding: 4rem 0;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 100%;
    background: linear-gradient(
      135deg,
      ${({ theme }) => theme.accent}15,
      ${({ theme }) => theme.primary}15
    );
    z-index: 0;
  }
`;

const Content = styled.div`
  position: relative;
  z-index: 1;
  max-width: 800px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const Title = styled(motion.h2)`
  font-size: clamp(2rem, 5vw, 3.5rem);
  color: ${({ theme }) => theme.primary};
  margin-bottom: 3rem;
  text-align: center;
  background: ${({ theme }) => theme.gradient};
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Timeline = styled(motion.div)`
  position: relative;
  padding: 2rem 0;

  &::before {
    content: '';
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 2px;
    height: 100%;
    background: ${({ theme }) => theme.border};
    z-index: 0;
  }

  @media (max-width: 768px) {
    &::before {
      left: 20px;
    }
  }
`;

const TimelineItem = styled(motion.div)<{ isEven: boolean }>`
  display: flex;
  justify-content: ${({ isEven }) => (isEven ? 'flex-start' : 'flex-end')};
  padding: 2rem 0;
  width: 100%;

  @media (max-width: 768px) {
    justify-content: flex-start;
    padding-left: 50px;
  }
`;

const TimelineContent = styled(motion.div)<{ isEven: boolean }>`
  width: 45%;
  background: ${({ theme }) => theme.card};
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 1rem;
  padding: 1.5rem;
  position: relative;
  box-shadow: ${({ theme }) => theme.shadow};
  
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    ${({ isEven }) => (isEven ? 'right: -0.5rem' : 'left: -0.5rem')};
    transform: translateY(-50%) rotate(45deg);
    width: 1rem;
    height: 1rem;
    background: ${({ theme }) => theme.card};
    border: 1px solid ${({ theme }) => theme.border};
    border-bottom: none;
    border-left: none;
  }

  @media (max-width: 768px) {
    width: 100%;
    
    &::before {
      left: -0.5rem;
    }
  }
`;

const Date = styled.div`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.primary};
  margin-bottom: 0.5rem;
  font-weight: 500;
`;

const AwardTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: ${({ theme }) => theme.text};
`;

const Description = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: ${({ theme }) => theme.secondary};
`;

export const Awards = () => {
  return (
    <AwardsSection>
      <div className="container">
        <Content>
          <Title
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            AWARD
          </Title>
          <Timeline
            variants={containerVariants}
            initial="hidden"
            animate="show"
          >
            {awards.map((award, index) => (
              <TimelineItem
                key={index}
                isEven={index % 2 === 0}
                custom={index % 2 === 0}
                variants={itemVariants}
              >
                <TimelineContent
                  isEven={index % 2 === 0}
                  whileHover="hover"
                  variants={contentVariants}
                >
                  <Date>{award.date}</Date>
                  <AwardTitle>{award.title}</AwardTitle>
                  <Description>{award.description}</Description>
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
        </Content>
      </div>
    </AwardsSection>
  );
};
