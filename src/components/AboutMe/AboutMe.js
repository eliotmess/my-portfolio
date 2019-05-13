import React from 'react';
import styled from 'styled-components';

const AboutMeWrapper = styled.div`
  width: 60%;
  padding-left: 50px;
`;

const HeadingBig = styled.h1`
  color: ${({ theme }) => theme.pink};
  font-size: ${({ theme }) => theme.font.size.l};
  font-weight: ${({ theme }) => theme.font.weight.bold};
  letter-spacing: 6px;
  margin: 0 0 10px 0;

  ${({ theme }) => theme.mq.tablet} {
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
`;

const AboutMeText = styled.p`
  color: ${({ theme }) => theme.whitey};
  font-size: ${({ theme }) => theme.font.size.m};
  text-align: justify;
  position: relative;
  z-index: 5;
`;

function AboutMe() {
  return (
    <AboutMeWrapper>
      <HeadingBig>about me_</HeadingBig>
      <AboutMeColumn>
        <AboutMeText>
          Moim celem jest współtworzenie produktów, dających użytkownikom
          odpowiedzi, jakich poszukiwali oraz pozytywne, warte zapamiętania
          doświadczenia. Umiejętności z zakresu web developmentu rozwijałem
          samodzielnie, jak też pod okiem doświadczonych programistów, tworząc
          m.in. funkcjonalne aplikacje typu CRUD. analityczne podejście do
          rozwiązywanych problemów, niezaspokojoną chęć zdobywania wiedzy i
          wrażliwość estetyczną.
        </AboutMeText>
      </AboutMeColumn>
    </AboutMeWrapper>
  );
}

export default AboutMe;
