import React from 'react';
import styled from 'styled-components';
import HeroBar from 'components/HeroBar/HeroBar';
import HeroHeader from 'components/HeroHeader/HeroHeader';
import HeroCube from 'components/HeroCube/HeroCube';

const HeroWrapper = styled.div`
  width: 80vw;
  margin-left: 12vw;
`;

const HeroArrow = styled.div`
  max-width: 16px;
`;

function Hero() {
  return (
    <HeroWrapper>
      <HeroBar />
      <HeroHeader />
      <HeroCube />
      <HeroArrow />
    </HeroWrapper>
  );
}

export default Hero;
