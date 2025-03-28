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

const GradeSection = styled.div`
  margin-bottom: 2rem;

  &:last-child {
    margin-bottom: 0;
  }
`;

const GradeTitle = styled.h3`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.text};
  margin-bottom: 1rem;
  font-weight: 500;
`;

const SubjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1rem;
`;

const SubjectCard = styled(motion.a)`
  padding: 1rem;
  background: ${({ theme }) => theme.background};
  border-radius: 0.5rem;
  border: 1px solid ${({ theme }) => theme.cardHover};
  text-decoration: none;
  color: ${({ theme }) => theme.text};
  transition: all 0.3s ease;

  &:hover {
    border-color: ${({ theme }) => theme.primary};
    transform: translateY(-2px);
  }
`;

interface Subject {
  name: string;
  link: string;
}

interface GradeSubjects {
  grade: string;
  subjects: Subject[];
}

const subjects: GradeSubjects[] = [
  {
    grade: "1학년",
    subjects: [
      { name: "프로그래밍", link: "https://www.notion.so/dd5b32c364144468a3cde6668333ef6a" },
      { name: "웹프로그래밍기초", link: "https://www.notion.so/230bd4403d124a21b57c3a2c8e8c6de6" },
      { name: "자료구조", link: "https://www.notion.so/3af736c7f2084fe8a98b7f72791dcca1" },
      { name: "데이터베이스", link: "https://www.notion.so/9fd0779be48746dc99b86218296a773b" },
      { name: "인공지능기초", link: "https://www.notion.so/65e927ec280849ff907011b33fc06b3a" }
    ]
  },
  {
    grade: "2학년",
    subjects: [
      { name: "소프트웨어공학", link: "https://www.notion.so/1b238762d45680649954d6d0760a612a" },
      { name: "자바프로그래밍", link: "https://www.notion.so/1b238762d456803db36ed56d54ad7b75" },
      { name: "웹프로그래밍", link: "https://www.notion.so/1b238762d456805c9626c80e2aa14ca2" },
      { name: "디자인", link: "https://www.notion.so/1b238762d45680e8a54cc38ef7b8965b" }
    ]
  },
  {
    grade: "3학년",
    subjects: []
  }
];

export const Subject = () => {
  return (
    <Section>
      <Title>SUBJECT</Title>
      {subjects.map((gradeSection, gradeIndex) => (
        <GradeSection key={gradeIndex}>
          <GradeTitle>{gradeSection.grade}</GradeTitle>
          <SubjectsGrid>
            {gradeSection.subjects.map((subject, subjectIndex) => (
              <SubjectCard
                key={subjectIndex}
                href={subject.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: subjectIndex * 0.1 }}
                viewport={{ once: true }}
              >
                {subject.name}
              </SubjectCard>
            ))}
          </SubjectsGrid>
        </GradeSection>
      ))}
    </Section>
  );
};
