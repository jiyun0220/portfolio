import styled from 'styled-components';
import { motion } from 'framer-motion';
import { PageSection } from './PageSection';

const Content = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const Title = styled(motion.h2)`
  font-size: clamp(2rem, 5vw, 3.5rem);
  text-align: center;
  margin-bottom: 4rem;
  background: ${({ theme }) => theme.gradient};
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Timeline = styled(motion.div)`
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 2px;
    background: ${({ theme }) => theme.border};
  }
`;

const TimelineItem = styled(motion.div)`
  position: relative;
  padding-left: 2rem;
  padding-bottom: 3rem;
  
  &:last-child {
    padding-bottom: 0;
  }
  
  &::before {
    content: '';
    position: absolute;
    left: -4px;
    top: 0;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: ${({ theme }) => theme.primary};
  }
`;

const Date = styled.div`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.primary};
  margin-bottom: 0.5rem;
  font-weight: 500;
`;

const School = styled.h3`
  font-size: 1.25rem;
  color: ${({ theme }) => theme.text};
  margin-bottom: 0.5rem;
`;

const Degree = styled.div`
  font-size: 1rem;
  color: ${({ theme }) => theme.secondary};
  margin-bottom: 1rem;
`;

const Description = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.secondary};
  line-height: 1.6;
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
  color: ${({ theme }) => theme.text};
  font-size: 0.875rem;
  
  &::before {
    content: '🎓';
    position: absolute;
    left: 0;
  }
`;

const educationData = [
  {
    date: "2023 - 현재",
    school: "대구소프트웨어마이스터고등학교",
    degree: "소프트웨어개발과",
    description: "웹 개발 및 소프트웨어 엔지니어링 전문 교육과정 이수",
    achievements: [
      "전공 성적 우수상 수상",
      "교내 프로젝트 발표회 최우수상",
      "알고리즘 동아리 부장",
      "웹 개발 스터디 리더"
    ]
  },
  {
    date: "2023.07 - 2023.08",
    school: "삼성 청년 SW 아카데미",
    degree: "웹 개발 과정",
    description: "React와 Spring Boot를 활용한 웹 서비스 개발 교육 이수",
    achievements: [
      "팀 프로젝트 우수상 수상",
      "프론트엔드 개발 담당"
    ]
  }
];

export const Education = () => {
  return (
    <PageSection id="education">
      <Content>
        <Title
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          EDUCATION
        </Title>
        <Timeline
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {educationData.map((edu, index) => (
            <TimelineItem
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
            >
              <Date>{edu.date}</Date>
              <School>{edu.school}</School>
              <Degree>{edu.degree}</Degree>
              <Description>{edu.description}</Description>
              <AchievementList>
                {edu.achievements.map((achievement, i) => (
                  <AchievementItem key={i}>{achievement}</AchievementItem>
                ))}
              </AchievementList>
            </TimelineItem>
          ))}
        </Timeline>
      </Content>
    </PageSection>
  );
};
