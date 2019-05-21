import React from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid';
import styled from 'styled-components';

const WorkCardWrapper = styled.div`
  width: 96%;
  height: 50%;
  margin: -20% 2% 0 2%;
  display: flex;
  flex-direction: column;
  float: left;
  color: ${({ theme }) => theme.whitey};

  ${({ theme }) => theme.mq.tablet} {
    width: 48%;
    margin: 0 1%;
  }

  ${({ theme }) => theme.mq.wide} {
    width: 32%;
    margin: 0 1.33%;
  }
`;

const WorkCardHead = styled.div`
  position: relative;
  height: 61.8%;
  width: 100%;
  max-height: 370px;
  overflow: hidden;
  background: ${({ theme }) => theme.primary};
`;

const WorkCardImg = styled.img`
  height: auto;
  width: 100%;
  object-fit: cover;
`;

const WorkCardBody = styled.div`
  height: 38.2%;
  display: flex;
  flex-direction: column;
  padding: 2% 5%;
`;

const WorkCardInfo = styled.div`
  display: flex;
  justify-content: space-between;
  line-height: 1.6;
  margin: 3% 0 5% 0;
`;

const WorkCardName = styled.p`
  display: flex;
  margin: 0;
  font-size: ${({ theme }) => theme.font.size.xs};

  ${({ theme }) => theme.mq.huge} {
    font-size: ${({ theme }) => theme.font.size.s};
  }
`;

const WorkCardLinks = styled.div`
  display: flex;
  position: absolute;
  bottom: 10%;
  transform: translateY(50%);

  &::before {
    content: '';
    top: -40%;
    left: 0;
    right: 0;
    height: 50%;
    background: ${({ theme }) => theme.secondary};
    opacity: 0;
    position: absolute;
    z-index: -1;
    transition: 300ms ease-out;
  }

  &::after {
    content: '';
    left: 0;
    right: 0;
    bottom: -40%;
    height: 50%;
    background: ${({ theme }) => theme.secondary};
    opacity: 0;
    position: absolute;
    z-index: -1;
    transition: 300ms ease-out;
  }

  ${/* sc-selector */ WorkCardWrapper}:hover & {
    &::before {
      top: 0;
      opacity: 0.65;
      transition: 300ms ease-out;
    }

    &::after {
      bottom: 0;
      opacity: 0.65;
      transition: 300ms ease-out;
    }
  }

  ${({ theme }) => theme.mq.desktop} {
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    height: 100%;
    bottom: 50%;
  }
`;

const WorkCardLink = styled.button`
  color: ${({ theme }) => theme.primary};
  font-size: ${({ theme }) => theme.font.size.xxs};
  padding: 5px 0;
  width: 60px;
  margin: 10px 5px;
  border: none;
  outline: none;
  border-radius: 30px;
  background: ${({ theme }) => theme.green};
  opacity: 1;
  transition: 400ms ease-out;

  &:hover {
    cursor: pointer;
    font-weight: ${({ theme }) => theme.font.weight.semiBold};
  }

  ${/* sc-selector */ WorkCardWrapper}:hover & {
    opacity: 1;
    transition: 400ms ease-out;
    background: ${({ theme }) => theme.pink};
  }

  ${({ theme }) => theme.mq.desktop} {
    padding: 10px 0;
    opacity: 0;
    width: 200px;
  }

  ${({ theme }) => theme.mq.huge} {
    font-size: ${({ theme }) => theme.font.size.xs};
  }
`;

const WorkCardDate = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.secondary};
  font-size: ${({ theme }) => theme.font.size.xs};

  ${({ theme }) => theme.mq.huge} {
    font-size: ${({ theme }) => theme.font.size.s};
  }
`;

const WorkCardTech = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const TechThumbnail = styled.div`
  background: ${({ theme }) => theme.green};
  padding: 3px 9px;
  border-radius: 24px;
  margin: 0 8px 8px 0;
  color: ${({ theme }) => theme.primary};
  font-weight: ${({ theme }) => theme.font.weight.semiBold};
  font-size: ${({ theme }) => theme.font.size.xxs};

  ${({ theme }) => theme.mq.wide} {
    font-size: ${({ theme }) => theme.font.size.xxs};
  }

  ${({ theme }) => theme.mq.huge} {
    margin: 0 12px 12px 0;
    font-size: ${({ theme }) => theme.font.size.xs};
  }
`;

const WorkCard = ({ project }) => {
  const { name, demo, github, date, tech, img } = project;

  return (
    <WorkCardWrapper>
      <WorkCardHead>
        <WorkCardImg src={img} />
        <WorkCardLinks>
          <a href={demo}>
            <WorkCardLink>demo</WorkCardLink>
          </a>
          <a href={github}>
            <WorkCardLink>GitHub</WorkCardLink>
          </a>
        </WorkCardLinks>
      </WorkCardHead>
      <WorkCardBody>
        <WorkCardInfo>
          <WorkCardName>{name}</WorkCardName>
          <WorkCardDate>{date}</WorkCardDate>
        </WorkCardInfo>
        <WorkCardTech>
          {tech !== undefined &&
            tech.map(item => (
              <TechThumbnail key={uuid.v4()}>{item}</TechThumbnail>
            ))}
        </WorkCardTech>
      </WorkCardBody>
    </WorkCardWrapper>
  );
};

WorkCard.propTypes = {
  project: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.array, PropTypes.object])
  ).isRequired,
};

export default WorkCard;
