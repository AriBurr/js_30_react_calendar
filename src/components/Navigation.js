import React from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';

const Navigation = ({ history }) => {
  const returnHome = () => {
    history.push('/');
  };

  return (
    <Container>
      <h1 onClick={() => returnHome()}>Home</h1>
    </Container>
  );
};

const Container = styled.div`
  margin: 0;
  padding: 0;

  h1 {
    color: white;
    cursor: pointer;
    background: rgba(0, 0, 0, 0.5);
    padding-left: 1%;
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
    text-align: left;
  }
`;

export default withRouter(Navigation);
