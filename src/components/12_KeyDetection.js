import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10%;
  text-align: center;

  input {
    border: 0;
    box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.2);
  }
`;

class KeyDetection extends React.Component {
  state = { secretCode: 'abc', pressed: [], win: false };

  handleChange = e => {
    const { secretCode, pressed } = this.state;
    this.setState({ pressed: [...pressed, e.key] });
    if (pressed.join('').includes(secretCode))
      this.setState({ win: true })
  };

  render() {
    const { win } = this.state;
    return (
      <Container>
        <span>
          <input onKeyUp={this.handleChange} />
          <div>{ win && 'DING DING DING!!!' }</div>
        </span>
      </Container>
    );
  }
}

export default KeyDetection;
