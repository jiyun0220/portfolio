import styled from 'styled-components';
import { motion } from 'framer-motion';
import { PageSection } from './PageSection';

const Content = styled.div`
  max-width: 1200px;
  width: 100%;
  display: flex;
  align-items: center;
  gap: 4rem;
  padding: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 2rem;
    text-align: center;
  }
`;

const ImageContainer = styled(motion.div)`
  flex: 1;
  position: relative;
  perspective: 1000px;
`;

const Image = styled(motion.img)`
  width: 100%;
  max-width: 400px;
  height: auto;
  border-radius: 1rem;
  box-shadow: ${({ theme }) => theme.shadow};
`;

const Info = styled(motion.div)`
  flex: 1;
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
  font-size: 1.125rem;
  line-height: 1.8;
  color: ${({ theme }) => theme.text};
  margin-bottom: 2rem;
`;

const SocialLinks = styled(motion.div)`
  display: flex;
  gap: 1.5rem;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const SocialLink = styled(motion.a)`
  color: ${({ theme }) => theme.text};
  font-size: 1.5rem;
  transition: color 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

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

export const About = () => {
  return (
    <PageSection id="about">
      <Content>
        <ImageContainer
          initial={{ rotateY: -15 }}
          whileHover={{ rotateY: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            src="/images/profile.jpg"
            alt="Profile"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
          />
        </ImageContainer>
        <Info variants={containerVariants} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <Title variants={itemVariants}>About Me</Title>
          <Description variants={itemVariants}>
            안녕하세요! 저는 대구소프트웨어마이스터고등학교에서 웹 개발을 공부하고 있는 학생입니다.
            프론트엔드 개발에 관심이 많으며, 사용자 경험을 개선하는 것에 열정을 가지고 있습니다.
            React와 TypeScript를 주로 사용하며, 최신 웹 기술과 트렌드를 학습하고 적용하는 것을 좋아합니다.
          </Description>
          <SocialLinks variants={containerVariants}>
            <SocialLink
              href="https://github.com/jiyun0220"
              target="_blank"
              rel="noopener noreferrer"
              variants={itemVariants}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <i className="fab fa-github"></i>
            </SocialLink>
            <SocialLink
              href="mailto:your.email@example.com"
              variants={itemVariants}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <i className="fas fa-envelope"></i>
            </SocialLink>
          </SocialLinks>
        </Info>
      </Content>
    </PageSection>
  );
};
