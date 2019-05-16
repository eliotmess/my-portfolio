import React from 'react';
import styled from 'styled-components';
import HeroBar from 'components/HeroBar/HeroBar';
import HeroHeader from 'components/HeroHeader/HeroHeader';
import HeroCube from 'components/HeroCube/HeroCube';
import HeroArrow from 'components/HeroArrow/HeroArrow';

const HeroWrapper = styled.div`
  width: 80vw;
  margin-left: 12vw;
`;

const Hero = () => {
  return (
    <HeroWrapper>
      <HeroBar />
      <HeroHeader />
      <HeroCube />
      <HeroArrow />
    </HeroWrapper>
  );
};

export default Hero;
