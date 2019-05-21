import React from 'react';
import styled from 'styled-components';
import { map } from 'lodash';
import './arrowsStyle.css';
import WorkCard from 'components/WorkCard/WorkCard';
import { projects_wide, projects_two_cols, projects_one_col } from './Projects';

const WorksWrapper = styled.div`
  display: flex;
  align-items: space-between;
  position: relative;
  padding-top: 230px;
  font-family: ${({ theme }) => theme.font.family.nunito};

  ${({ theme }) => theme.mq.tablet} {
    padding: 0;
  }
`;

const Slide = styled.div`
  padding: 0 10vw;
`;

const HeadingBig = styled.h1`
  color: ${({ theme }) => theme.pink};
  font-size: ${({ theme }) => theme.font.size.l};
  font-weight: ${({ theme }) => theme.font.weight.bold};
  letter-spacing: 6px;
  margin: 0 0 10px 0;
  position: absolute;
  top: 260px;
  left: 11.33vw;

  ${({ theme }) => theme.mq.tablet} {
    top: 12vh;
  }

  ${({ theme }) => theme.mq.wide} {
    top: 10vh;
    font-size: ${({ theme }) => theme.font.size.xl};
  }
`;

function Works() {
  let projects = projects_wide;
  if (
    typeof window !== `undefined` &&
    window.innerWidth >= 768 &&
    window.innerWidth < 1280
  )
    projects = projects_two_cols;
  if (typeof window !== `undefined` && window.innerWidth < 768)
    projects = projects_one_col;

  return (
    <WorksWrapper>
      <HeadingBig>my works</HeadingBig>
      {map(projects, projectObj => (
        <Slide key={projectObj.id} className="slide">
          {projectObj.works.map(project => (
            <WorkCard key={project.id} project={project} />
          ))}
        </Slide>
      ))}
    </WorksWrapper>
  );
}

export default Works;
