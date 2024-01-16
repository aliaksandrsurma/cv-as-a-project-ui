import React from 'react';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';
import styled from 'styled-components';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

//TODO: revise/refactor styles
const ExperienceItemContainer = styled.article`
  > p {
    margin-bottom: 0.5em;
    font-size: 0.9em;
    margin: 0 0 2em 0;
  }
`;


const ExperienceItem = ({
  data: {
    name, position, url, startDate, endDate, summary, highlights,
  },
}) => (
  <ExperienceItemContainer>
    <header>
      <h4><a href={url}>{name}</a> - {position}</h4>
      <p className="daterange"> {dayjs(startDate).format('MMMM YYYY')} - {endDate ? dayjs(endDate).format('MMMM YYYY') : 'PRESENT'}</p>
    </header>
    {summary ? (
      <Markdown
        remarkPlugins={[remarkGfm]}
        children={summary} />
    ) : null}
    {highlights ? (
      <ul className="points">
        {highlights.map((highlight) => (
          <li key={highlight}>{highlight}</li>
        ))}
      </ul>
    ) : null}
  </ExperienceItemContainer>
);

ExperienceItem.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    startDate: PropTypes.string.isRequired,
    endDate: PropTypes.string,
    summary: PropTypes.string,
    highlights: PropTypes.arrayOf(PropTypes.string.isRequired),
  }).isRequired,
};

export default ExperienceItem;
