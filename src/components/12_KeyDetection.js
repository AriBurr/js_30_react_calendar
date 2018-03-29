import React from 'react';
import styled from 'styled-components';
import { Icon } from 'semantic-ui-react';

class KeyDetection extends React.Component {
  state = { secretCode: 'abc', pressed: [], win: false, input: '' };

  componentDidUpdate() {
    const { secretCode, pressed, win } = this.state;
    if (!win && pressed.join('').includes(secretCode)) {
      this.setState({ win: true });
      setTimeout(() => {
        this.setState({ win: false, pressed: [], input: '' });
      }, 3000);
    }
  }

  handleReset = () => this.setState({ win: false, pressed: [], input: '' });

  handleChange = e => {
    const { pressed, input } = this.state;
    this.setState({ pressed: [...pressed, e.key], input: input + e.key });
  };

  render() {
    const { win, input } = this.state;
    return (
      <Container>
        <span>
          <div className="header">
            <h2>Guess the Secret Code!</h2>
          </div>
          <div className="input-wrap">
            <input value={input} onKeyUp={this.handleChange} />
            <Icon name="refresh" onClick={this.handleReset} />
            <h3>{win && 'DING DING DING!!!'}</h3>
          </div>
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
    box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.5);
    margin-right: 1em;
    padding: 1em;
  }

  i.icon {
    cursor: pointer;
  }

  span {
    box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.25);
  }

  .header {
    background-color: #eef0f2;
    padding: 3%;
  }

  .input-wrap {
    background-color: #fafaff;
    margin-top: 5%;
    padding: 5%;
  }
`;

export default KeyDetection;
