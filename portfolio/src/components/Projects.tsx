import styled from 'styled-components';
import { motion } from 'framer-motion';
import { PageSection } from './PageSection';

const Content = styled.div`
  max-width: 1200px;
  width: 100%;
  text-align: center;
`;

const Title = styled(motion.h2)`
  font-size: clamp(2rem, 5vw, 3.5rem);
  margin-bottom: 4rem;
`;

const ProjectsContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 6rem;
  width: 100%;
`;

const Project = styled(motion.div)`
  display: flex;
  gap: 4rem;
  align-items: center;
  text-align: left;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 2rem;
  }

  &:nth-child(even) {
    flex-direction: row-reverse;

    @media (max-width: 768px) {
      flex-direction: column;
    }
  }
`;

const ProjectImage = styled(motion.div)`
  flex: 1;
  border-radius: 1rem;
  overflow: hidden;
  aspect-ratio: 16/9;
  background: ${({ theme }) => theme.border};

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ProjectInfo = styled(motion.div)`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const ProjectTitle = styled.h3`
  font-size: clamp(1.5rem, 3vw, 2rem);
  font-weight: 700;
`;

const ProjectDescription = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  opacity: 0.8;
`;

const TechStack = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
`;

const TechTag = styled.span`
  padding: 0.5rem 1rem;
  border-radius: 9999px;
  font-size: 0.875rem;
  background: ${({ theme }) => theme.border};
`;

const projects = [
  {
    title: '대구소프트웨어마이스터고등학교',
    description: '학교 홈페이지 리뉴얼 프로젝트. React와 Spring Boot를 사용하여 개발하였으며, AWS를 통해 배포하였습니다.',
    image: '/project1.jpg',
    tech: ['React', 'TypeScript', 'Spring Boot', 'AWS']
  },
  {
    title: 'Portfolio Website',
    description: '현재 보고 계신 포트폴리오 웹사이트입니다. React와 TypeScript를 사용하여 개발하였으며, 다양한 인터랙티브 요소를 추가하였습니다.',
    image: '/project2.jpg',
    tech: ['React', 'TypeScript', 'Styled Components', 'Framer Motion']
  },
  {
    title: 'Daily Kick',
    description: '완벽한 하루를 위한 작은 변화',
    details: [
      '사용자의 일정을 분석해 자투리 시간을 효율적으로 활용할 수 있도록 돕는 AI 기반 플래너 관리 서비스',
      '플래너 분석: 사용자가 등록한 일정 데이터를 자동 분석하여 짜투리 시간을 계산',
      'AI 작업 추천: 시간대별 맞춤형 활동 추천',
      '동적 업데이트: 실시간 일정 변경에 따른 자동 추천 작업 업데이트'
    ],
    techStack: ['React', 'TypeScript', 'FastAPI', 'Machine Learning'],
    image: '/images/daily-kick.png',
    github: 'https://github.com/2app4jam/daily-kick-web',
    role: '프론트엔드(React), UI/UX, 기획',
    period: '2024.12.21~12.22',
    award: '스마틴앱챌린지(APPJAM) 최우수상'
  },
  {
    title: 'Speakit',
    description: '발표를 압도적으로 편안하게',
    details: [
      '발표자의 불안을 낮추고 원활한 발표를 돕는 AI 기반 발표 도우미',
      'AI 자동 대본 수정: 챗봇AI를 통한 맞춤형 대본 수정',
      'AI 가상 청중: 음성인식을 통한 실감나는 발표연습',
      '발표 불안감 해소: 상태를 입력받고, 증상에 맞는 조언 제공'
    ],
    techStack: ['React Native', 'TypeScript', 'OpenAI', 'Speech Recognition'],
    image: '/images/speakit.png',
    github: 'https://github.com/29-appjam/frontend',
    role: '프론트엔드(React Native), UI/UX, 기획, PPT',
    period: '2025.02.08~02.09',
    award: '스마틴앱챌린지(APPJAM) 최우수상'
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export const Projects = () => {
  return (
    <PageSection id="projects">
      <Content>
        <Title
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Projects
        </Title>
        <ProjectsContainer
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {projects.map((project, index) => (
            <Project key={index} variants={itemVariants}>
              <ProjectImage
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img src={project.image} alt={project.title} />
              </ProjectImage>
              <ProjectInfo>
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectDescription>{project.description}</ProjectDescription>
                {project.tech && (
                  <TechStack>
                    {project.tech.map((tech, techIndex) => (
                      <TechTag key={techIndex}>{tech}</TechTag>
                    ))}
                  </TechStack>
                )}
              </ProjectInfo>
            </Project>
          ))}
        </ProjectsContainer>
      </Content>
    </PageSection>
  );
};
