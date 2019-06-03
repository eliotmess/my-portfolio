import React, { Component } from 'react';
import styled from 'styled-components';
import ReactFullpage from '@fullpage/react-fullpage';
import MainTemplate from 'templates/MainTemplate/MainTemplate';
import DesktopMenu from 'components/DesktopMenu/DesktopMenu';
import Hero from 'templates/Hero/Hero';
import About from 'templates/About/About';
import Works from 'templates/Works/Works';
import Contact from 'templates/Contact/Contact';

const Section = styled.div``;

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

  handleReload = () => {
    setTimeout(() => {
      location.reload();
    }, 100);
  };

  render() {
    const { activeSection } = this.state;
    return (
      <MainTemplate>
        <ReactFullpage
          render={() => {
            return (
              <ReactFullpage.Wrapper>
                <Section className="section">
                  <Hero data-anchor="home" />
                </Section>
                <Section className="section">
                  <About data-anchor="me" active={activeSection} />
                </Section>
                <Section className="section">
                  <Works data-anchor="works" />
                </Section>
                <Section className="section">
                  <Contact data-anchor="contact" />
                </Section>
              </ReactFullpage.Wrapper>
            );
          }}
          menu="#menu"
          anchors={['home', 'me', 'works', 'contact']}
          onLeave={(origin, destination) => this.setActive(destination.anchor)}
          afterResize={() => this.handleReload()}
          licenseKey="353F9FAE-C0114C78-81A3C604-567CBBBD"
          responsiveWidth="796"
          normalScrollElements=".skillsList"
          continuousHorizontal
        />
        <DesktopMenu active={activeSection} />
      </MainTemplate>
    );
  }
}

export default IndexPage;
