import React from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import { Icon } from 'semantic-ui-react';

const Container = styled.div`
  h1 {
    color: white;
    cursor: pointer;
    background: rgba(0, 0, 0, 0.5);
    padding-left: 1%;
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
    text-align: left;
  }
`;

const Navigation = ({ history }) => {
  const returnHome = () => {
    history.push('/');
  };

  return (
    <Container>
      <h1 onClick={() => returnHome()}>
        <Icon name="arrow left" size="small" />
        Back
      </h1>
    </Container>
  );
};

export default withRouter(Navigation);
