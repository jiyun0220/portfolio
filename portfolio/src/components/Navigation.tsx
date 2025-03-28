import { useState, useEffect } from 'react';
import styled from 'styled-components';

const NavigationContainer = styled.nav`
  position: fixed;
  right: 2rem;
  top: 50%;
  transform: translateY(-50%);
  z-index: 100;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

interface NavDotProps {
  active: boolean;
}

const NavDot = styled.a<NavDotProps>`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: ${({ theme, active }) => active ? theme.text : `${theme.text}40`};
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.text};
    transform: scale(1.2);
  }
`;

const sections = [
  { id: 'hero', label: 'Hero' },
  { id: 'about', label: 'About' },
  { id: 'education', label: 'Education' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'activities', label: 'Activities' },
  { id: 'awards', label: 'Awards' },
  { id: 'contact', label: 'Contact' }
];

export const Navigation = () => {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const windowHeight = window.innerHeight;
      
      sections.forEach(({ id }) => {
        const element = document.getElementById(id);
        if (element) {
          const { top, bottom } = element.getBoundingClientRect();
          if (top <= windowHeight / 2 && bottom >= windowHeight / 2) {
            setActiveSection(id);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <NavigationContainer>
      {sections.map(({ id, label }) => (
        <NavDot
          key={id}
          href={`#${id}`}
          active={activeSection === id}
          title={label}
        />
      ))}
    </NavigationContainer>
  );
};
