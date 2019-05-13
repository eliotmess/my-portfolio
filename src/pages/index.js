import React, { Component } from 'react';
import styled from 'styled-components';
import ReactFullpage from '@fullpage/react-fullpage';
import MainTemplate from 'templates/MainTemplate/MainTemplate';
import DesktopMenu from 'components/DesktopMenu/DesktopMenu';
import Hero from 'pages/Hero';
import About from 'pages/About';

const Section = styled.div`
  height: 100vh;
  position: relative;
`;

class IndexPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeSection: '',
    };
  }

  setActive = activeSection => {
    this.setState({ activeSection });
  };

  render() {
    const { activeSection } = this.state;
    return (
      <MainTemplate>
        <ReactFullpage
          // arguments below: { state, fullpageApi }
          render={() => {
            return (
              <ReactFullpage.Wrapper>
                <Section className="section" data-anchor="home">
                  <Hero />
                </Section>
                <Section className="section" data-anchor="me">
                  <About active={activeSection} />
                </Section>
                <Section className="section" data-anchor="works">
                  <h1>moja $trona</h1>
                </Section>
                <Section className="section" data-anchor="contact">
                  <h1>moja $trona</h1>
                </Section>
              </ReactFullpage.Wrapper>
            );
          }}
          menu="#menu"
          anchors={['home', 'me', 'works', 'contact']}
          onLeave={(origin, destination) => this.setActive(destination.anchor)}
          licenseKey="MY_KEY"
          responsiveWidth="768"
          normalScrollElements="#skillsList"
          scrollOverflow
        />
        <DesktopMenu active={activeSection} />
      </MainTemplate>
    );
  }
}

export default IndexPage;
