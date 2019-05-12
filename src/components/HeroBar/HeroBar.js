import React from 'react';
import styled from 'styled-components';
import GitHub from 'assets/images/github.svg';
import Linkedin from 'assets/images/linkedin.svg';

const BarWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 86vw;
  display: flex;
  justify-content: flex-end;
`;

const BarSocial = styled.a`
  height: 4vh;
  width: 4vh;
  max-height: 45px;
  max-width: 45px;
  margin-left: 1.5vw;
  margin-top: 4vh;
`;

function HeroBar() {
  return (
    <BarWrapper>
      <BarSocial href="https://github.com/eliotmess">
        <img src={GitHub} alt="github" />
      </BarSocial>
      <BarSocial href="https://www.linkedin.com/in/olejniczag">
        <img src={Linkedin} alt="linkedin" />
      </BarSocial>
    </BarWrapper>
  );
}

export default HeroBar;
