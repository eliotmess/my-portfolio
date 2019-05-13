import React from 'react';
import styled from 'styled-components';

const ArrowWrapper = styled.div`
  display: block;
  position: absolute;
  bottom: 2vh;
  left: 50%;
  transform: translateX(50%);
  padding-top: 52px;
`;

const ArrowDown = styled.span`
  display: block;
  margin: 0 auto;
  width: 9px;
  height: 38px;

  &:after {
    content: '';
    display: block;
    margin: 0;
    padding: 0;
    width: 9px;
    height: 9px;
    border-top: 1.5px solid ${({ theme }) => theme.secondary};
    border-right: 1.5px solid ${({ theme }) => theme.secondary};
    behavior: url(-ms-transform.htc);
    transform: rotate(135deg);
  }

  &:before {
    content: ' ';
    position: absolute;
    top: 0px;
    left: 50%;
    margin-left: -0.5px;
    width: 1.5px;
    height: 60px;
    background: ${({ theme }) => theme.secondary};
  }
`;

function HeroArrow() {
  return (
    <ArrowWrapper>
      <ArrowDown />
    </ArrowWrapper>
  );
}

export default HeroArrow;
