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

  ${({ theme }) => theme.mq.tablet} {
    width: 48%;
    margin: 0;
  }

  ${({ theme }) => theme.mq.wide} {
    width: 32%;
  }
`;

const WorkCardImg = styled.div`
  height: 61.8%;
  width: 100%;
  background: ${({ theme }) => theme.secondaryDark};
`;

const WorkCardInfo = styled.div`
  height: 38.2%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 3% 5%;
`;

const WorkCardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  line-height: 1.6;
  margin-top: 10px;
`;

const WorkCardBasic = styled.div`
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.whitey};
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
`;

const WorkCardLink = styled.a`
  color: ${({ theme }) => theme.whitey};
  font-size: ${({ theme }) => theme.font.size.xxs};
  margin: 8px 20px 6px 0;

  &:hover {
    cursor: pointer;
    color: ${({ theme }) => theme.green};
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
  padding: 1px 4px;
  border-radius: 9px;
  margin: 13px 8px 0 0;
  color: ${({ theme }) => theme.primary};
  font-weight: ${({ theme }) => theme.font.weight.semiBold};
  font-size: ${({ theme }) => theme.font.size.xxs};

  ${({ theme }) => theme.mq.wide} {
    font-size: ${({ theme }) => theme.font.size.xxs};
  }

  ${({ theme }) => theme.mq.huge} {
    font-size: ${({ theme }) => theme.font.size.xs};
  }
`;

const WorkCard = ({ project }) => {
  const { name, demo, github, date, tech } = project;
  return (
    <WorkCardWrapper>
      <WorkCardImg />
      <WorkCardInfo>
        <WorkCardHeader>
          <WorkCardBasic>
            <WorkCardName>{name}</WorkCardName>
            <WorkCardLinks>
              <WorkCardLink href={demo}>demo</WorkCardLink>
              <WorkCardLink href={github}>GitHub</WorkCardLink>
            </WorkCardLinks>
          </WorkCardBasic>
          <WorkCardDate>{date}</WorkCardDate>
        </WorkCardHeader>
        <WorkCardTech>
          {tech !== undefined &&
            tech.map(item => (
              <TechThumbnail key={uuid.v4()}>{item}</TechThumbnail>
            ))}
        </WorkCardTech>
      </WorkCardInfo>
    </WorkCardWrapper>
  );
};

WorkCard.propTypes = {
  project: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.array])
  ).isRequired,
};

export default WorkCard;
