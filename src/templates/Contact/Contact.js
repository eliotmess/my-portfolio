import React from 'react';
import styled from 'styled-components';
import gatsby from 'assets/images/gatsby-icon.png';
import halfcircle from 'assets/images/circ.svg';

const ContactWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  height: 100%;
  padding: 36vh 7vw 20vh 7vw;
  font-family: ${({ theme }) => theme.font.family.nunito};

  ${({ theme }) => theme.mq.tablet} {
    padding: 16vh 7vw 0 7vw;
  }
`;

const ContactHeading = styled.h1`
  color: ${({ theme }) => theme.pink};
  font-size: ${({ theme }) => theme.font.size.l};
  font-weight: ${({ theme }) => theme.font.weight.bold};
  letter-spacing: 6px;
  margin: 0;

  ${({ theme }) => theme.mq.wide} {
    font-size: ${({ theme }) => theme.font.size.xl};
  }
`;

const ContactText = styled.div`
  color: ${({ theme }) => theme.whitey};
  font-size: ${({ theme }) => theme.font.size.xs};
  word-break: break-word;
  position: relative;

  &::before {
    position: absolute;
    top: 10vh;
    bottom: 10vh;
    left: 0;
    border-left: 2px solid ${({ theme }) => theme.secondaryDark};
  }

  ${({ theme }) => theme.mq.tablet} {
    letter-spacing: 2px;
    font-size: ${({ theme }) => theme.font.size.s};

    &::before {
      content: '';
    }
  }
`;

const ContactInfo = styled.p`
  margin: 5vh 0;
`;

const ContactData = styled.p`
  margin: 2vh 0;

  ${({ theme }) => theme.mq.tablet} {
    margin: 1vh 0 1vh 30px;
  }
`;

const ContactLink = styled.a`
  color: ${({ theme }) => theme.whitey};
  text-decoration: none;

  &:hover {
    cursor: pointer;
    color: ${({ theme }) => theme.green};
  }
`;

const Footer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  right: 0;
  left: 0;
  text-align: center;
  padding: 0 10px;
  bottom: 2vh;

  ${({ theme }) => theme.mq.tablet} {
    align-items: baseline;
    flex-direction: row;
    right: 8vw;
    left: auto;
  }
`;

const FooterText = styled.p`
  color: ${({ theme }) => theme.secondary};
  font-weight: ${({ theme }) => theme.font.weight.semiBold};
  font-size: ${({ theme }) => theme.font.size.xxs};
  margin: 0;
  word-spacing: 3px;

  ${({ theme }) => theme.mq.tablet} {
    margin-right: 5px;
  }
`;

const GatsbyLogo = styled.img`
  height: 18px;

  ${({ theme }) => theme.mq.tablet} {
    vertical-align: sub;
  }
`;

const Circle = styled.img`
  position: absolute;
  display: none;
  right: -37vh;
  height: 80vh;
  top: 50%;
  transform: translateY(-50%);

  ${({ theme }) => theme.mq.wide} {
    display: block;
  }
`;

const Contact = () => (
  <ContactWrapper>
    <ContactHeading>contact me</ContactHeading>
    <ContactText>
      <ContactInfo>You can reach me via:</ContactInfo>
      <ContactData>
        e-mail:{' '}
        <ContactLink href="mailto:olejniczak.g@proton.com">
          olejniczak.g[at]protonmail.com
        </ContactLink>
      </ContactData>
      <ContactData>
        LinkedIn:{' '}
        <ContactLink href="https://linkedin.com/in/olejniczag">
          linkedin.com/in/olejniczag
        </ContactLink>
      </ContactData>
      <ContactData>
        GitHub:{' '}
        <ContactLink href="https://github.com/eliotmess">
          github.com/eliotmess
        </ContactLink>
      </ContactData>
      <ContactInfo>
        Just leave me a message and I promise to answer.
      </ContactInfo>
    </ContactText>
    <Footer>
      <FooterText>
        made with <GatsbyLogo src={gatsby} alt="gatsby-logo" /> and 🧛{' '}
      </FooterText>
      <FooterText>© Grzegorz Olejniczak, 2019</FooterText>
    </Footer>
    <Circle src={halfcircle} alt="halfcircle" />
  </ContactWrapper>
);

export default Contact;
