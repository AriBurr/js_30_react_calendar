import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  text-align: center;
  background: #193549;
  color: white;
  font-family: 'helvetica neue', sans-serif;
  font-weight: 100;
  font-size: 50px;
  height: 100vh;

  .controls {
    margin-bottom: 50px;
  }

  input {
    width: 100px;
  }

  img {
    padding: ${props => props.children[0]._self.state.spacing}px;
    background: ${props => props.children[0]._self.state.base};
    filter: blur(${props => props.children[0]._self.state.blur}px);
  }

  .hl {
    color: ${props => props.children[0]._self.state.base};
  }
`;

class CSSVariables extends React.Component {
  state = { spacing: '10', blur: '10', base: '#ffc600' };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <Container>
        <h2>
          Update CSS Variables with <span className="hl">React JS</span>
        </h2>
        <div className="controls">
          <label htmlFor="spacing">Spacing:</label>
          <input
            id="spacing"
            type="range"
            name="spacing"
            min="10"
            max="200"
            defaultValue="10"
            data-sizing="px"
            onChange={this.handleChange}
          />
          <label htmlFor="blur">Blur:</label>
          <input
            id="blur"
            type="range"
            name="blur"
            min="0"
            max="25"
            defaultValue="10"
            data-sizing="px"
            onChange={this.handleChange}
          />
          <label htmlFor="base">Base Color</label>
          <input
            id="base"
            type="color"
            name="base"
            defaultValue="#ffc600"
            onChange={this.handleChange}
          />
        </div>
        <img
          src="https://source.unsplash.com/7bwQXzbF6KE/800x500"
          alt="cityscape"
        />
      </Container>
    );
  }
}

export default CSSVariables;
