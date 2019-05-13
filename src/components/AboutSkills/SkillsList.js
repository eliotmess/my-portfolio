import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import uuid from 'uuid';
import { throttle } from 'lodash';

const SkillsWrapper = styled.div`
  overflow: auto;
  position: relative;
  padding-left: 10px;
  top: -11%;
  left: 50%;
  transform: translateX(-50%);
  z-index: 20;
  height: 120%;
  width: 45%;
  background: ${({ theme }) => theme.primary};

  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.primary};
  }

  &::-webkit-scrollbar {
    opacity: 0;
  }
`;

const SkillsListWrapper = styled.ul`
  text-align: center;
  padding: 0;
  margin: 0;
`;

const SkillsListElement = styled.li`
  color: ${({ theme }) => theme.green};
  font-size: ${({ theme }) => theme.font.size.m};
  line-height: 1.7;
  list-style: none;
`;

const mySkills = [
  'JSX',
  'Node.js',
  'JavaScript (ES6+)',
  'Adobe CC',
  'CSS3',
  'BEM',
  'RWD',
  'HTML5',
  'REST API',
  'Redux',
  'React.js',
  'Docker',
  'Gatsby.js',
  'Lodash',
  'Git',
  'npm',
  'Shell',
  'Webpack',
  'Postman',
  'Jira',
  'Enzyme',
  'bash',
  'Sass (SCSS)',
  'Socket.IO',
  'Firebase',
  'Express',
  'Bootstrap',
  'MongoDB',
  'React Router',
  'Mocha',
  'Trello',
  'Mongoose',
  'jQuery',
  'Jest',
  'Pug',
  'styled components',
];

class SkillsList extends Component {
  constructor(props) {
    super(props);
    this.skills = React.createRef();
    this.state = {
      skills: [],
      animateList: true,
      scrollTop: 1,
    };
    this.handleScrolling = throttle(this.handleScrolling, 20);
  }

  componentDidMount() {
    this.setState({ skills: mySkills });
  }

  componentDidUpdate() {
    let { animateList, scrollTop } = this.state;
    const { active } = this.props;
    if (animateList && active === 'me') {
      this.skills.current.scrollTop = ++scrollTop;
    }
  }

  handleScrolling() {
    let { scrollTop, skills } = this.state;
    scrollTop = ++scrollTop;
    setTimeout(() => {
      this.setState({ scrollTop });
    }, 0);
    if (
      this.skills.current.scrollHeight - this.skills.current.scrollTop ===
      this.skills.current.clientHeight
    ) {
      const moreSkills = skills.concat(mySkills);
      setTimeout(() => {
        this.setState({ skills: moreSkills });
      }, 200);
    }
  }

  handleManualScrollOn() {
    this.setState({ animateList: false });
  }

  handleManualScrollOff() {
    const scrollTop = this.skills.current.scrollTop;
    this.setState({ animateList: true, scrollTop });
  }

  render() {
    const { skills } = this.state;
    return (
      <SkillsWrapper
        onScroll={() => this.handleScrolling()}
        onMouseEnter={() => this.handleManualScrollOn()}
        onMouseLeave={() => this.handleManualScrollOff()}
        ref={this.skills}
        id="skillsList"
      >
        <SkillsListWrapper>
          {skills.map(el => (
            <SkillsListElement key={uuid.v4()}>{el}</SkillsListElement>
          ))}
        </SkillsListWrapper>
      </SkillsWrapper>
    );
  }
}

SkillsList.propTypes = {
  active: PropTypes.string.isRequired,
};

export default SkillsList;
