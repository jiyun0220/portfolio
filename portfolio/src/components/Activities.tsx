import styled from 'styled-components';
import { motion } from 'framer-motion';
import { PageSection } from './PageSection';
import { activities } from '../data/activities';
import { containerVariants, itemVariants, contentVariants } from '../animations/timeline';

const Content = styled.div`
  max-width: 1200px;
  width: 100%;
  text-align: center;
  padding: 2rem;
`;

const Title = styled(motion.h2)`
  font-size: clamp(2rem, 5vw, 3.5rem);
  margin-bottom: 4rem;
  background: ${({ theme }) => theme.gradient};
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Timeline = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 4rem;
  max-width: 800px;
  margin: 0 auto;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    left: calc(50% - 1px);
    width: 2px;
    height: 100%;
    background: ${({ theme }) => theme.border};

    @media (max-width: 768px) {
      left: 20px;
    }
  }
`;

const TimelineItem = styled(motion.div)`
  display: flex;
  justify-content: flex-end;
  padding-right: 50%;
  position: relative;
  
  &:nth-child(even) {
    justify-content: flex-start;
    padding-right: 0;
    padding-left: 50%;
  }

  @media (max-width: 768px) {
    justify-content: flex-start;
    padding-right: 0;
    padding-left: 50px;

    &:nth-child(even) {
      padding-left: 50px;
    }
  }
  
  &::before {
    content: '';
    position: absolute;
    width: 16px;
    height: 16px;
    background: ${({ theme }) => theme.primary};
    border-radius: 50%;
    left: calc(50% - 8px);
    top: 0;

    @media (max-width: 768px) {
      left: 13px;
    }
  }
`;

interface TimelineContentProps {
  position: 'left' | 'right';
}

const TimelineContent = styled(motion.div)<TimelineContentProps>`
  background: ${({ theme }) => theme.card};
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 1rem;
  padding: 2rem;
  width: calc(100% - 3rem);
  text-align: left;
  position: relative;
  box-shadow: ${({ theme }) => theme.shadow};
  
  &::before {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    border-style: solid;
    top: 10px;
    
    ${({ position, theme }) =>
      position === 'left'
        ? `
          left: -10px;
          border-width: 10px 10px 10px 0;
          border-color: transparent ${theme.card} transparent transparent;
        `
        : `
          right: -10px;
          border-width: 10px 0 10px 10px;
          border-color: transparent transparent transparent ${theme.card};
        `}

    @media (max-width: 768px) {
      left: -10px;
      border-width: 10px 10px 10px 0;
      border-color: transparent ${({ theme }) => theme.card} transparent transparent;
    }
  }
`;

const Date = styled.div`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.primary};
  margin-bottom: 0.5rem;
  font-weight: 500;
`;

const ActivityTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.text};
`;

const Description = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: ${({ theme }) => theme.secondary};
  margin-bottom: 1rem;
`;

const AchievementList = styled.ul`
  list-style: none;
  padding: 0;
  margin-top: 1rem;
`;

const AchievementItem = styled.li`
  position: relative;
  padding-left: 1.5rem;
  margin-bottom: 0.5rem;
  line-height: 1.6;
  color: ${({ theme }) => theme.text};
  
  &:before {
    content: '🏆';
    position: absolute;
    left: 0;
  }
`;

export const Activities = () => {
  return (
    <PageSection id="activities">
      <Content>
        <Title
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          ACTIVITIES
        </Title>
        <Timeline
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          {activities.map((activity, index) => (
            <TimelineItem
              key={index}
              custom={index % 2 === 0}
              variants={itemVariants}
            >
              <TimelineContent
                position={index % 2 === 0 ? 'right' : 'left'}
                whileHover="hover"
                variants={contentVariants}
              >
                <Date>{activity.date}</Date>
                <ActivityTitle>{activity.title}</ActivityTitle>
                <Description>{activity.description}</Description>
                <AchievementList>
                  {activity.achievements.map((achievement, i) => (
                    <AchievementItem key={i}>{achievement}</AchievementItem>
                  ))}
                </AchievementList>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </Content>
    </PageSection>
  );
};
