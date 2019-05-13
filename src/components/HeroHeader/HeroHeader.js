import React from 'react';
import styled from 'styled-components';

const HeaderName = styled.h1`
  color: ${({ theme }) => theme.green};
  font-size: ${({ theme }) => theme.font.size.l};
  font-weight: ${({ theme }) => theme.font.weight.bold};
  margin: 0 0 10px 0;

  ${({ theme }) => theme.mq.tablet} {
    font-size: ${({ theme }) => theme.font.size.xl};
  }

  ${({ theme }) => theme.mq.huge} {
    font-size: ${({ theme }) => theme.font.size.xxl};
  }
`;

const SubHeaderRole = styled.h2`
  color: ${({ theme }) => theme.green};
  font-size: ${({ theme }) => theme.font.size.m};
  font-weight: ${({ theme }) => theme.font.weight.light};
  margin: 0;
  text-shadow: 0 0 1px ${({ theme }) => theme.green},
    0 0 3px ${({ theme }) => theme.green}, 0 0 5px ${({ theme }) => theme.green};

  ${({ theme }) => theme.mq.tablet} {
    font-size: ${({ theme }) => theme.font.size.l};
  }

  ${({ theme }) => theme.mq.huge} {
    font-size: ${({ theme }) => theme.font.size.xl};
  }
`;

const HeaderWrapper = styled.div`
  position: absolute;
  font-family: ${({ theme }) => theme.font.family.nunito};
  top: 35vh;
  left: 3vw;

  ${({ theme }) => theme.mq.tablet} {
    top: 25vh;
    left: 7vw;
  }
`;

function HeroHeader() {
  return (
    <HeaderWrapper>
      <HeaderName>GRZEGORZ OLEJNICZAK</HeaderName>
      <SubHeaderRole>Front-End Developer</SubHeaderRole>
    </HeaderWrapper>
  );
}

export default HeroHeader;
