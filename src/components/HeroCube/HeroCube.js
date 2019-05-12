import React, { Component } from 'react';
import styled from 'styled-components';
import uuid from 'uuid';
import cube1 from 'assets/images/cube/6.jpg';
import cube2 from 'assets/images/cube/7.jpg';
import cube3 from 'assets/images/cube/8.jpg';
import cube4 from 'assets/images/cube/9.jpg';
import cube5 from 'assets/images/cube/10.jpg';
import cube6 from 'assets/images/cube/11.jpg';

const CubePan = styled.div`
  position: absolute;
  opacity: 0.8;
  top: 0;
  left: 0;
  height: 300px;
  width: 300px;
  background-size: cover;
  background-image: url(${props => props.img});
  transform: ${props => props.transform};
`;

const cubePans = [
  {
    img: `${cube1}`,
    transform: 'translateX(-50%) translateY(-50%) translateZ(150px)',
  },
  {
    img: `${cube2}`,
    transform:
      'translateX(-50%) translateY(-50%) rotateY(90deg) translateZ(150px)',
  },
  {
    img: `${cube3}`,
    transform:
      'translateX(-50%) translateY(-50%) rotateY(-90deg) translateZ(150px)',
  },
  {
    img: `${cube4}`,
    transform:
      'translateX(-50%) translateY(-50%) rotateX(90deg) translateZ(150px)',
  },
  {
    img: `${cube5}`,
    transform:
      'translateX(-50%) translateY(-50%) rotateX(-90deg) translateZ(150px)',
  },
  {
    img: `${cube6}`,
    transform:
      'translateX(-50%) translateY(-50%) rotateY(-180deg) translateZ(150px)',
  },
];

const CubeWrapper = styled.div`
  height: 100vh;
  width: 130vh;
  z-index: 99;
`;

class HeroCube extends Component {
  constructor(props) {
    super(props);
    this.state = {
      midX: 0,
      midY: 0,
      animate: true,
    };
  }

  onRotate() {
    const { animate } = this.state;
    const cube = document.getElementById('cube');
    const cubeStyles = window.getComputedStyle(cube, null);
    const currStyles = cubeStyles.getPropertyValue('transform');

    let values = currStyles.split('(')[1];
    values = values.split(')')[0];
    values = values.split(',');
    // console.log(values);
    const a = values[5];
    const b = values[6];
    // const c = values[2];
    // const d = values[1];

    const midY = Math.round(Math.atan2(b, a) * (180 / Math.PI));
    // const midX = Math.round(Math.atan2(d, c) * (180/Math.PI));
    // console.log(midX, midY);

    this.setState({ animate: !animate, midX: midY, midY });
  }

  onStopRotate() {
    const { animate } = this.state;
    this.setState({ animate: !animate });
  }

  handleRotate(e) {
    const { animate } = this.state;
    if (!animate) {
      const x = e.pageX;
      const y = e.pageY;
      const midX = x - window.innerWidth / 2;
      const midY = y - window.innerHeight / 2;
      let { midX: posX, midY: posY } = this.state;
      posX > midX ? posX++ : posX--;
      posY < midY ? posY-- : posY++;
      this.setState({ midX: posX, midY: posX });
    }
  }

  render() {
    const { midX, midY, animate } = this.state;

    const Section = styled.section`
      position: absolute;
      top: 60vh;
      right: 25vw;

      transform-style: preserve-3d;
      backface-visibility: hidden;
      animation: ${animate ? `rotate 12s linear infinite` : ``};
      transform: rotateX(${midY}deg) rotateY(${midX}deg);

      @keyframes rotate {
        0% {
          transform: rotateX(${midY}deg) rotateY(${midX}deg);
        }
        100% {
          transform: rotateX(${midY + 360}deg) rotateY(${midX + 360}deg);
        }
      }
    `;

    return (
      <CubeWrapper
        onMouseMove={e => this.handleRotate(e)}
        onMouseUp={() => !animate && this.onStopRotate()}
        onMouseDown={e => this.onRotate(e)}
      >
        <Section id="cube">
          {cubePans.map(pan => (
            <CubePan transform={pan.transform} img={pan.img} key={uuid.v4()} />
          ))}
        </Section>
      </CubeWrapper>
    );
  }
}

export default HeroCube;
