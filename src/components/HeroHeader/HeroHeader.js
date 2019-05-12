import React from 'react';
import styled from 'styled-components';

const HeaderName = styled.h1`
  color: ${({ theme }) => theme.green};
  font-size: ${({ theme }) => theme.font.size.xl};
  font-weight: ${({ theme }) => theme.font.weight.bold};
  margin: 0;
`;

const SubHeaderRole = styled.h2`
  color: ${({ theme }) => theme.green};
  font-size: ${({ theme }) => theme.font.size.l};
  font-weight: ${({ theme }) => theme.font.weight.light};
  margin: 0;
  text-shadow: 0 0 1px ${({ theme }) => theme.green},
    0 0 3px ${({ theme }) => theme.green}, 0 0 5px ${({ theme }) => theme.green};
`;

const HeaderWrapper = styled.div`
  position: absolute;
  font-family: ${({ theme }) => theme.font.family.nunito};
  top: 29vh;
  left: 7vw;
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
