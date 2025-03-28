import styled from 'styled-components';
import { motion } from 'framer-motion';

const IntroduceSection = styled.section`
  position: relative;
  background: ${({ theme }) => theme.background};

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 100%;
    background: linear-gradient(
      45deg,
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
`;

const Title = styled(motion.h2)`
  font-size: 2.5rem;
  color: ${({ theme }) => theme.primary};
  margin-bottom: 2rem;
  text-align: center;
`;

const Text = styled(motion.p)`
  font-size: 1.125rem;
  line-height: 1.8;
  color: ${({ theme }) => theme.text};
  margin-bottom: 1.5rem;
  text-align: justify;

  strong {
    color: ${({ theme }) => theme.primary};
    font-weight: 600;
  }
`;

const Highlight = styled(motion.div)`
  display: inline-block;
  padding: 0.25rem 1rem;
  background: ${({ theme }) => theme.selection};
  border-radius: 9999px;
  color: ${({ theme }) => theme.primary};
  font-weight: 500;
  margin: 0.25rem;
`;

const HighlightContainer = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  justify-content: center;
  margin-top: 2rem;
`;

export const Introduce = () => {
  const highlights = [
    "Problem Solver",
    "Clean Code",
    "Team Player",
    "Fast Learner",
    "Creative",
    "Passionate"
  ];

  return (
    <IntroduceSection>
      <div className="container">
        <Content>
          <Title
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            About Me
          </Title>
          <Text
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            대구소프트웨어마이스터고등학교에서 <strong>웹 프로그래밍</strong>을 전공하고 있는 <strong>신지윤</strong>입니다.
            저는 항상 새로운 기술을 배우고 적용하는 것에 큰 열정을 가지고 있으며, 특히 <strong>프론트엔드 개발</strong>에 깊은 관심을 가지고 있습니다.
          </Text>
          <Text
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            학교에서의 다양한 프로젝트 경험을 통해 <strong>팀 협업</strong>의 중요성을 깊이 이해하게 되었고,
            효율적인 의사소통과 문제 해결 능력을 키워왔습니다. 또한, <strong>클린 코드</strong>와 <strong>사용자 경험</strong>을
            중시하는 개발 철학을 가지고 있습니다.
          </Text>
          <HighlightContainer
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {highlights.map((highlight, index) => (
              <Highlight
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
              >
                {highlight}
              </Highlight>
            ))}
          </HighlightContainer>
        </Content>
      </div>
    </IntroduceSection>
  );
};
