import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import AboutSkills from 'components/AboutSkills/AboutSkills';
import AboutMe from 'components/AboutMe/AboutMe';

const AboutWrapper = styled.div`
  display: flex;
  width: 86vw;
  margin: 0 7vw 0 7vw;
  font-family: ${({ theme }) => theme.font.family.nunito};
`;

const About = ({ active }) => (
  <AboutWrapper>
    <AboutSkills active={active} />
    <AboutMe />
  </AboutWrapper>
);

About.propTypes = {
  active: PropTypes.string.isRequired,
};

export default About;
