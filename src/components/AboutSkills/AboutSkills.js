import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import SkillsList from 'components/AboutSkills/SkillsList';

const AboutSkillsWrapper = styled.div`
  width: 30%;
  height: 50vh;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    border: 2px solid ${({ theme }) => theme.secondaryDark};
    top: 0;
    z-index: 1;
  }

  &::after {
    content: '';
    position: absolute;
    right: 0;
    width: 9%;
    height: 43%;
    border: 2px solid ${({ theme }) => theme.primary};
    top: 0;
    z-index: 3;
  }
`;

const HeadingMedium = styled.h2`
  color: ${({ theme }) => theme.pink};
  font-size: ${({ theme }) => theme.font.size.l};
  font-weight: ${({ theme }) => theme.font.weight.bold};
  transform: translateX(50%) translateY(100%) rotate(90deg);
  position: absolute;
  right: 20px;
  letter-spacing: 6px;
  top: 20px;
  margin: 0;
  z-index: 10;
  display: inline;
`;

const AboutSkills = ({ active }) => (
  <AboutSkillsWrapper>
    <HeadingMedium>my skills</HeadingMedium>
    <SkillsList active={active} />
  </AboutSkillsWrapper>
);

AboutSkills.propTypes = {
  active: PropTypes.string.isRequired,
};

export default AboutSkills;
