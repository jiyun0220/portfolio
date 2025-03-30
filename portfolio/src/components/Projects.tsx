import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { PageSection } from './PageSection';
import { ProjectCard } from './ProjectCard';

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

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  width: 100%;
`;

const projects = [
  {
    title: '도담도담',
    description: '개발 동아리인 B1ND팀에서 개발한 스마트 학교 관리 서비스입니다. iOS 앱 개발을 담당하여 Swift와 SwiftUI를 활용해 깔끔하고 직관적인 UI를 구현했습니다.',
    details: [
      'Swift와 SwiftUI를 사용한 모던한 UI/UX 구현',
      'MVVM 아키텍처와 Clean Architecture 적용',
      'Tuist를 활용한 모듈화 및 의존성 관리',
      'Alamofire와 Moya를 활용한 네트워크 계층 구현',
      'SwiftInject를 사용한 의존성 주입',
      'Swift Concurrency를 활용한 비동기 처리'
    ],
    techStack: ['Swift & SwiftUI', 'Alamofire & Moya', 'MVVM', 'Tuist', 'clean-architecture', 'SwiftInject', 'swift-concurency'],
    image: '/assets/B1ND.webp',
    github: 'https://github.com/B1ND-7th',
    role: 'iOS 앱 개발',
    period: '2024.03 - 현재',
    award: ''
  },
  {
    title: 'Portfolio Website',
    description: '현재 보고 계신 포트폴리오 웹사이트입니다. React와 TypeScript를 사용하여 개발하였으며, 다양한 인터랙티브 요소를 추가하였습니다.',
    details: [
      'React와 TypeScript를 활용한 모던한 웹 개발',
      'Styled Components를 사용한 스타일링',
      'Framer Motion을 활용한 부드러운 애니메이션',
      '다크 모드 지원',
      '반응형 디자인 구현'
    ],
    techStack: ['React', 'TypeScript', 'Styled Components', 'Framer Motion'],
    image: '/assets/web.png',
    github: 'https://github.com/jiyun0220/portfolio',
    role: '프론트엔드 개발',
    period: '2024.03',
    award: ''
  },
  {
    title: 'Daily Kick',
    description: '완벽한 하루를 위한 작은 변화. 사용자의 일정을 분석해 자투리 시간을 효율적으로 활용할 수 있도록 돕는 AI 기반 플래너 관리 서비스입니다.',
    details: [
      'React와 TypeScript를 활용한 프론트엔드 개발',
      'FastAPI를 활용한 백엔드 개발',
      '머신러닝 모델을 활용한 일정 분석',
      '사용자 맞춤형 추천 시스템 구현',
      'UI/UX 디자인'
    ],
    techStack: ['React', 'TypeScript', 'FastAPI', 'Machine Learning'],
    image: '/assets/DailyKick.svg',
    github: 'https://github.com/jiyun0220/DailyKick',
    role: '프론트엔드 개발 & UI/UX 디자인',
    period: '2024.12',
    award: '스마틴앱챌린지(APPJAM) 최우수상'
  },
  {
    title: 'Speakit',
    description: '발표를 압도적으로 편안하게. 발표자의 불안을 낮추고 원활한 발표를 돕는 AI 기반 발표 도우미입니다.',
    details: [
      'React Native와 TypeScript를 활용한 크로스 플랫폼 앱 개발',
      'OpenAI API를 활용한 자동 대본 수정 기능',
      'Speech Recognition을 활용한 음성 인식',
      '가상 청중 기능 구현',
      '발표 불안감 해소를 위한 UI/UX 디자인'
    ],
    techStack: ['React Native', 'TypeScript', 'OpenAI', 'Speech Recognition'],
    image: '/assets/Speakit.svg',
    github: 'https://github.com/jiyun0220/Speakit',
    role: '프론트엔드 개발',
    period: '2025.02',
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
          PROJECTS
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
                <TechStack>
                  {project.techStack.map((tech, techIndex) => (
                    <TechTag key={techIndex}>{tech}</TechTag>
                  ))}
                </TechStack>
              </ProjectInfo>
            </Project>
          ))}
        </ProjectsContainer>
      </Content>
    </PageSection>
  );
};
