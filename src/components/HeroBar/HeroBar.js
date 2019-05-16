import React from 'react';
import styled from 'styled-components';
import GitHub from 'assets/images/github.svg';
import Linkedin from 'assets/images/linkedin.svg';

const BarWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 94vw;
  display: flex;
  justify-content: flex-end;

  ${({ theme }) => theme.mq.tablet} {
    width: 86vw;
  }
`;

const BarSocial = styled.a`
  display: none;
  height: 4vh;
  width: 4vh;
  max-height: 45px;
  max-width: 45px;
  margin-left: 1.5vw;
  margin-top: 4vh;

  ${({ theme }) => theme.mq.tablet} {
    display: block;
  }
`;

const BarContact = styled.a`
  display: block;
  margin-top: 4vh;
  color: ${({ theme }) => theme.pink};
  text-decoration: none;
  font-family: ${({ theme }) => theme.font.family.nunito};
  font-weight: ${({ theme }) => theme.font.weight.bold};
  border-bottom: 1.5px solid ${({ theme }) => theme.pink};

  ${({ theme }) => theme.mq.tablet} {
    display: none;
  }
`;

const HeroBar = () => {
  return (
    <BarWrapper>
      <BarSocial href="https://github.com/eliotmess">
        <img src={GitHub} alt="github" />
      </BarSocial>
      <BarSocial href="https://www.linkedin.com/in/olejniczag">
        <img src={Linkedin} alt="linkedin" />
      </BarSocial>
      <BarContact
        onClick={() => window.scrollTo(0, document.body.scrollHeight)}
      >
        contact me
      </BarContact>
    </BarWrapper>
  );
};

export default HeroBar;
