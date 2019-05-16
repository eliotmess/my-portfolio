import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import AboutSkills from 'components/AboutSkills/AboutSkills';
import AboutMe from 'components/AboutMe/AboutMe';

const AboutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding-top: 30%;
  padding-bottom: 8%;
  margin: 0 7vw 0 7vw;
  font-family: ${({ theme }) => theme.font.family.nunito};

  ${({ theme }) => theme.mq.tablet} {
    flex-direction: row-reverse;
    padding-top: 0;
  }
`;

const About = ({ active }) => (
  <AboutWrapper>
    <AboutMe />
    <AboutSkills active={active} />
  </AboutWrapper>
);

About.propTypes = {
  active: PropTypes.string.isRequired,
};

export default About;
