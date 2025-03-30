import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';

interface ProjectCardProps {
  title: string;
  description: string;
  details: string[];
  techStack: string[];
  image: string;
  github: string;
  role: string;
  period: string;
  award: string;
}

const Card = styled(motion.div)`
  background: ${({ theme }) => theme.background};
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
  }
`;

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 200px;
  overflow: hidden;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
  
  ${Card}:hover & {
    transform: scale(1.05);
  }
`;

const Content = styled.div`
  padding: 1.5rem;
`;

const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
  background: linear-gradient(45deg, ${({ theme }) => theme.primary}, ${({ theme }) => theme.accent});
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Description = styled.p`
  color: ${({ theme }) => theme.secondary};
  margin-bottom: 1rem;
  font-size: 1.1rem;
`;

const DetailsList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin-bottom: 1rem;
`;

const DetailItem = styled.li`
  color: ${({ theme }) => theme.text};
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
  position: relative;
  padding-left: 1rem;
  
  &:before {
    content: '•';
    position: absolute;
    left: 0;
    color: ${({ theme }) => theme.primary};
  }
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
`;

const TechTag = styled.span`
  background: ${({ theme }) => theme.card};
  color: ${({ theme }) => theme.primary};
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;
  font-size: 0.8rem;
  font-weight: 500;
`;

const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 1rem;
  border-top: 1px solid ${({ theme }) => theme.border};
`;

const Role = styled.span`
  color: ${({ theme }) => theme.secondary};
  font-size: 0.9rem;
`;

const Period = styled.span`
  color: ${({ theme }) => theme.secondary};
  font-size: 0.9rem;
`;

const Award = styled.div`
  background: linear-gradient(45deg, ${({ theme }) => theme.primary}, ${({ theme }) => theme.accent});
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 9999px;
  font-size: 0.8rem;
  font-weight: 500;
  margin-top: 1rem;
  display: inline-block;
`;

const GithubLink = styled.a`
  color: ${({ theme }) => theme.primary};
  font-size: 1.5rem;
  transition: color 0.2s ease;
  
  &:hover {
    color: ${({ theme }) => theme.accent};
  }
`;

const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6
    }
  }
};

export const ProjectCard = ({
  title,
  description,
  details,
  techStack,
  image,
  github,
  role,
  period,
  award
}: ProjectCardProps) => {
  return (
    <Card variants={item}>
      <ImageContainer>
        <Image src={image} alt={title} />
      </ImageContainer>
      <Content>
        <ProjectTitle>{title}</ProjectTitle>
        <Description>{description}</Description>
        <DetailsList>
          {details.map((detail, index) => (
            <DetailItem key={index}>{detail}</DetailItem>
          ))}
        </DetailsList>
        <TechStack>
          {techStack.map((tech, index) => (
            <TechTag key={index}>{tech}</TechTag>
          ))}
        </TechStack>
        <Footer>
          <div>
            <Role>{role}</Role>
            <Period>{period}</Period>
          </div>
          <GithubLink href={github} target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </GithubLink>
        </Footer>
        {award && <Award>{award}</Award>}
      </Content>
    </Card>
  );
};
