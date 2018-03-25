import React from 'react';
import styled from 'styled-components';

class KeyDetection extends React.Component {
  state = { secretCode: 'abc', pressed: [], win: false, input: '' };

  componentDidUpdate() {
    const { secretCode, pressed, win } = this.state;
    if (!win && pressed.join('').includes(secretCode)) {
      this.setState({ win: true });
      setTimeout(() => {
        this.setState({ win: false, pressed: [], input: '' });
      }, 5000);
    }
  }

  handleChange = e => {
    const { pressed, input } = this.state;
    this.setState({ pressed: [...pressed, e.key], input: input + e.key });
  };

  render() {
    const { win, input } = this.state;
    return (
      <Container>
        <span>
          <input value={input} onKeyUp={this.handleChange} />
          <div>{win && 'DING DING DING!!!'}</div>
        </span>
      </Container>
    );
  }
}

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

export default KeyDetection;
