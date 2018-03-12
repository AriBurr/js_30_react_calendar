import React from 'react';
import { Link } from 'react-router-dom';
import calendarData from '../calendarData';
import styled from 'styled-components';
import { Image } from 'semantic-ui-react';

const PageWrapper = styled.div`
  .calendarStyle {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-auto-rows: 150px;
    grid-gap: 1em;
    margin: 0 auto;
    max-width: 85%;
  }

  h1 {
    font-weight: 800;
    font-size: 6em;
    line-height: 0.5em;
    margin-top: 0.5em;
    text-align: center;
  }

  h3 {
    font-weight: 400;
    text-align: center;
  }
`;

const Calendar = () => {
  const generateCalendar = () => {
    return calendarData.map((day, i) => {
      return <Image as={Link} src={day.image} to={day.link} key={i} />;
    });
  };

  return (
    <PageWrapper>
      <h1>React</h1>
      <h3>Javascript 30 Challenge</h3>
      <div className="calendarStyle">{generateCalendar()}</div>
    </PageWrapper>
  );
};

export default Calendar;
