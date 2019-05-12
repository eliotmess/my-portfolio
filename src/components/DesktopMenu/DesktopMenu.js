import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import homeBtn from 'assets/images/home-btn.svg';

const DesktopMenuWrapper = styled.ul`
  position: fixed;
  bottom: 12vh;
  left: 7vw;
  display: flex;
  padding: 0;
  margin: 0;
`;

const DesktopMenuLink = styled.li`
  list-style: none;
  height: 34px;
  margin: 0 10px;
  font-size: 25px;
`;

const Home = styled.img`
  height: 30px;
  width: auto;
  border: none;
  vertical-align: bottom;
  padding-bottom: 8px;
`;

const Link = styled.a`
  text-decoration: none;
  transition: all 0.35s ease-in-out;
  color: ${({ theme }) => theme.pink};
  font-family: ${({ theme }) => theme.font.family.nunito};
  font-weight: ${({ theme }) => theme.font.weight.semiBold};
`;

const Underline = styled.span`
  position: absolute;
  border-bottom: 3px solid ${({ theme }) => theme.pink};
  z-index: -1;
  transition: all 0.35s ease-in-out;
  transform: ${props => props.transform || 'translateX(-60px)'};
  width: ${props => props.coords.width}px;
  height: ${props => props.coords.height}px;
  left: ${props => props.coords.left}px;
  top: ${props => props.coords.top}px;
`;

const menuItems = [
  {
    label: 'home',
    img: 'home',
    anchor: 'home',
  },
  {
    label: 'about me',
    anchor: 'me',
  },
  {
    label: 'my works',
    anchor: 'works',
  },
  {
    label: 'contact me',
    anchor: 'contact',
  },
];

class DesktopMenu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      active: {},
      selected: '',
      hover: {},
      transform: 'translateX(-60px)',
    };

    this.sectionRefs = {};
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleMountOrResize);
    this.handleMountOrResize();
  }

  static getDerivedStateFromProps(props, state) {
    if (props.active !== state.selected) {
      return {
        selected: props.active,
      };
    }
    return null;
  }

  componentDidUpdate(prevProps) {
    const { active } = this.props;
    const { selected } = this.state;
    if (active !== prevProps.active) {
      this.handleActive(this.sectionRefs[selected]);
    }
  }

  handleMountOrResize = () => {
    for (let item in this.sectionRefs) {
      if (this.sectionRefs[item].classList.contains('active')) {
        this.handleActive(this.sectionRefs[item]);
      }
    }
  };

  handleUnderline = e => {
    if (!e.target.parentNode.classList.contains('active')) {
      const hover = {
        width: e.target.getBoundingClientRect().width,
        height: e.target.getBoundingClientRect().height,
        left: e.target.getBoundingClientRect().left,
        top: e.target.getBoundingClientRect().top + 3,
      };
      this.setState({ hover, transform: 'none' });
    }
  };

  handleUnderlineLeft = () => {
    this.setState({ hover: {} });
  };

  handleActive = e => {
    const active = {
      width: e.getBoundingClientRect().width,
      height: e.getBoundingClientRect().height,
      left: e.getBoundingClientRect().left,
      top: e.getBoundingClientRect().top + 3,
    };
    this.setState({ active, transform: 'none' });
  };

  render() {
    const { hover, active, transform } = this.state;

    return (
      <>
        <nav>
          <DesktopMenuWrapper id="menu">
            {menuItems.map(item => (
              <DesktopMenuLink
                data-menuanchor={item.anchor}
                key={item.label}
                ref={ref => (this.sectionRefs[item.anchor] = ref)}
              >
                <Link
                  href={'#'.concat(item.anchor)}
                  onMouseEnter={e => this.handleUnderline(e)}
                  onMouseLeave={e => this.handleUnderlineLeft(e)}
                >
                  {item.img ? (
                    <Home src={homeBtn} alt={item.img} />
                  ) : (
                    item.label
                  )}
                </Link>
              </DesktopMenuLink>
            ))}
          </DesktopMenuWrapper>
        </nav>
        <Underline
          coords={hover.width ? hover : active}
          transform={transform}
        />
      </>
    );
  }
}

DesktopMenu.propTypes = {
  active: PropTypes.string,
};

DesktopMenu.defaultProps = {
  active: 'home',
};

export default DesktopMenu;
