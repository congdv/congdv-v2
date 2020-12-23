import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { scrollConfig } from 'config';
import sr from 'utils/scrollReveal';

const StyledAboutSection = styled.section`
  max-width: 900px;

  .inner {
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-gap: 50px;

    @media (max-width: 768px) {
      display: block;
    }
  }
`;
const StyledText = styled.div`
  ul.skills-list {
    display: grid;
    grid-template-columns: repeat(2, minmax(140px, 200px));
    padding: 0;
    margin: 20px 0 0 0;
    overflow: hidden;
    list-style: none;

    li {
      position: relative;
      margin-bottom: 10px;
      padding-left: 20px;
      font-family: var(--font-mono);
      font-size: var(--fz-xs);

      &:before {
        content: '▹';
        position: absolute;
        left: 0;
        color: var(--green);
        font-size: var(--fz-sm);
        line-height: 12px;
      }
    }
  }
`;
const StyledPic = styled.div`
  max-width: 300px;

  @media (max-width: 768px) {
    margin: 50px auto 0;
    width: 70%;
  }

  .wrapper {
    display: block;
    width: 100%;
  }
`;

const About = () => {
  const revealContainer = useRef(null);

  useEffect(() => {
    sr.reveal(revealContainer.current, scrollConfig());
  }, []);

  const skills = [
    'JavaScript (ES6+)',
    'HTML & (S)CSS',
    'React',
    'Vue',
    'Node.js',
    'NestJS',
    'TypeScript',
    'Express',
    'MongoDB',
    'MySQL',
    'AWS',
    'Python',
    'Java',
    'C/C++',
    'C#',
  ];

  return (
    <StyledAboutSection id="about" ref={revealContainer}>
      <h2 className="numbered-heading">About Me</h2>

      <div className="inner">
        <StyledText>
          <div>
            <p>Hi there! I'm Cong, a software engineer currently based in Waterloo, ON, Canada.</p>

            <p>
              I taught myself how to make software first as a hobby to solve all the problems that I see in my daily
              life, and later as a software developer.
            </p>

            <p>
              I enjoy learning about new and exciting technologies and using them to build some interesting projects.
            </p>
          </div>
        </StyledText>
        <StyledText>
          <div>
            <p>Here are a few technologies I've been working with recently:</p>
            <ul className="skills-list">{skills && skills.map((skill, i) => <li key={i}>{skill}</li>)}</ul>
          </div>
        </StyledText>
      </div>
    </StyledAboutSection>
  );
};

export default About;
