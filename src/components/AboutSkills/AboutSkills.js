import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import SkillsList from 'components/AboutSkills/SkillsList';

const AboutSkillsWrapper = styled.div`
  width: 100%;
  height: 45vh;
  position: relative;
  margin-top: 250px;

  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    border: 2px solid ${({ theme }) => theme.secondaryDark};
    top: 30%;
    z-index: 1;
  }

  &::after {
    position: absolute;
    right: 0;
    width: 70px;
    height: 230px;
    border: 2px solid ${({ theme }) => theme.primary};
    top: 0;
    z-index: 3;
  }

  ${({ theme }) => theme.mq.tablet} {
    width: 40%;
    margin-top: 0;

    &::before {
      top: 0;
    }

    &::after {
      content: '';
    }
  }

  ${({ theme }) => theme.mq.wide} {
    width: 30%;
    &::after {
      height: 265px;
    }
  }
`;

const HeadingMedium = styled.h2`
  color: ${({ theme }) => theme.pink};
  font-size: ${({ theme }) => theme.font.size.m};
  font-weight: ${({ theme }) => theme.font.weight.bold};
  letter-spacing: 6px;
  margin: 0;
  z-index: 10;
  display: inline;
  width: max-content;

  ${({ theme }) => theme.mq.tablet} {
    transform: translateX(50%) translateY(100%) rotate(90deg);
    position: absolute;
    right: 20px;
    top: 20px;
  }

  ${({ theme }) => theme.mq.wide} {
    font-size: ${({ theme }) => theme.font.size.l};
  }
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
