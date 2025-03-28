import styled from 'styled-components';
import { motion } from 'framer-motion';
import { PageSection } from './PageSection';

const Content = styled.div`
  max-width: 1200px;
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

const SkillsGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const SkillCategory = styled(motion.div)`
  background: ${({ theme }) => theme.card};
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 1rem;
  padding: 2rem;
  box-shadow: ${({ theme }) => theme.shadow};
`;

const CategoryTitle = styled.h3`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.primary};
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const SkillList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
`;

const SkillItem = styled(motion.div)`
  background: ${({ theme }) => theme.background};
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 0.5rem;
  padding: 1rem;
`;

const SkillName = styled.h4`
  font-size: 1rem;
  color: ${({ theme }) => theme.text};
  margin-bottom: 0.5rem;
`;

const ProgressBar = styled(motion.div)`
  height: 6px;
  background: ${({ theme }) => theme.border};
  border-radius: 3px;
  overflow: hidden;
`;

const Progress = styled(motion.div)<{ level: number }>`
  height: 100%;
  background: ${({ theme }) => theme.primary};
  width: ${({ level }) => level}%;
`;

const skillsData = [
  {
    category: "Frontend",
    icon: "💻",
    skills: [
      { name: "React", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "Next.js", level: 80 },
      { name: "HTML/CSS", level: 95 },
      { name: "JavaScript", level: 90 },
      { name: "Styled Components", level: 85 }
    ]
  },
  {
    category: "Backend",
    icon: "⚙️",
    skills: [
      { name: "Node.js", level: 80 },
      { name: "Express", level: 75 },
      { name: "Spring Boot", level: 70 },
      { name: "MySQL", level: 75 },
      { name: "MongoDB", level: 70 },
      { name: "REST API", level: 85 }
    ]
  },
  {
    category: "Tools & Others",
    icon: "🛠️",
    skills: [
      { name: "Git", level: 85 },
      { name: "Docker", level: 70 },
      { name: "AWS", level: 65 },
      { name: "Jest", level: 75 },
      { name: "Figma", level: 70 },
      { name: "Agile/Scrum", level: 80 }
    ]
  }
];

export const Skills = () => {
  return (
    <PageSection id="skills">
      <Content>
        <Title
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          SKILLS
        </Title>
        <SkillsGrid
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {skillsData.map((category, index) => (
            <SkillCategory
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
            >
              <CategoryTitle>
                <span>{category.icon}</span>
                {category.category}
              </CategoryTitle>
              <SkillList>
                {category.skills.map((skill, skillIndex) => (
                  <SkillItem
                    key={skillIndex}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.4 + skillIndex * 0.05 }}
                  >
                    <SkillName>{skill.name}</SkillName>
                    <ProgressBar>
                      <Progress
                        level={skill.level}
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: 0.5 + skillIndex * 0.05 }}
                      />
                    </ProgressBar>
                  </SkillItem>
                ))}
              </SkillList>
            </SkillCategory>
          ))}
        </SkillsGrid>
      </Content>
    </PageSection>
  );
};
