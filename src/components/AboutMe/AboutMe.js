import React from 'react';
import styled from 'styled-components';

const AboutMeWrapper = styled.div`
  width: 100%;

  ${({ theme }) => theme.mq.tablet} {
    width: 50%;
  }
`;

const HeadingBig = styled.h1`
  color: ${({ theme }) => theme.pink};
  font-size: ${({ theme }) => theme.font.size.l};
  font-weight: ${({ theme }) => theme.font.weight.bold};
  letter-spacing: 6px;
  margin: 0 0 10px 0;

  ${({ theme }) => theme.mq.wide} {
    font-size: ${({ theme }) => theme.font.size.xl};
  }
`;

const AboutMeColumn = styled.div`
  width: 90%;
  max-width: 650px;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    width: 105%;
    height: 90%;
    border: 2px solid ${({ theme }) => theme.primary};
    top: 15%;
    z-index: 3;
  }

  &::after {
    content: '';
    position: absolute;
    width: 110%;
    height: 100%;
    border: 2px solid ${({ theme }) => theme.secondaryDark};
    top: 15%;
    z-index: 1;
  }

  ${({ theme }) => theme.mq.tablet} {
    width: 100%;
  }
`;

const AboutMeText = styled.p`
  color: ${({ theme }) => theme.whitey};
  font-size: ${({ theme }) => theme.font.size.xs};
  text-align: justify;
  position: relative;
  z-index: 5;

  ${({ theme }) => theme.mq.wide} {
    font-size: ${({ theme }) => theme.font.size.s};
  }
`;

function AboutMe() {
  return (
    <AboutMeWrapper>
      <HeadingBig>about me</HeadingBig>
      <AboutMeColumn>
        <AboutMeText>
          My goal is to co-create digital products that give users the answers
          they need <em>while</em> providing remarkable experiences. I{' '}
          <em>deployed</em> my web development skills through self-study, as
          well as under the supervision of experienced coders — developing,
          among others, <em>functional</em>, progressive web apps. I pay great
          attention to details, usability, use of reliable and up-to-date tools
          and aesthetics of both, <em>code</em> and layout.
        </AboutMeText>
      </AboutMeColumn>
    </AboutMeWrapper>
  );
}

export default AboutMe;
