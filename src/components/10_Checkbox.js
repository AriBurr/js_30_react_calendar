import React from 'react';
import styled from 'styled-components';

class Checkbox extends React.Component {
  state = { checkboxes: [] };

  componentDidMount() {
    const checkboxes = document.querySelectorAll(
      '.inbox input[type="checkbox"]'
    );
    this.setState({ checkboxes: checkboxes });
  }

  handleCheck = e => {
    const { checkboxes } = this.state;
    const checked = e.target;
    let inBetween = false;
    if (e.shiftKey && checked.checked) {
      checkboxes.forEach(checkbox => {
        if (checkbox === checked || checkbox === lastChecked)
          inBetween = !inBetween;
        if (!inBetween) checkbox.checked = true;
      });
      let lastChecked = checked;
    }
  };

  generateCheckboxes = () => {
    return [
      'This is an inbox layout.',
      'Check one item',
      'Hold down your Shift key',
      'Check a lower item',
      'Everything inbetween should also be set to checked',
      'Try to do it without any libraries',
      'Just regular JavaScript',
      'Good luck',
      'Remember to tweet your results!'
    ].map((input, i) => {
      return (
        <div key={i} className="item">
          <input id={i + 1} type="checkbox" onClick={this.handleCheck} />
          <p>{input}</p>
        </div>
      );
    });
  };

  render() {
    return (
      <Container>
        <div className="inbox">{this.generateCheckboxes()}</div>
      </Container>
    );
  }
}

const Container = styled.div`
  background: #ffc600;
  padding: 1%;

  .inbox {
    max-width: 400px;
    margin: 50px auto;
    background: white;
    border-radius: 5px;
    box-shadow: 10px 10px 0 rgba(0, 0, 0, 0.1);
  }

  .item {
    display: flex;
    align-items: center;
    border-bottom: 1px solid #f1f1f1;
  }

  .item:last-child {
    border-bottom: 0;
  }

  input:checked + p {
    /: #f9f9f9;
    text-decoration: line-through;
  }

  input[type='checkbox'] {
    margin: 20px;
  }

  p {
    margin: 0;
    padding: 20px;
    transition: background 0.2s;
    flex: 1;
    font-family: 'helvetica neue';
    font-size: 20px;
    font-weight: 200;
    border-left: 1px solid #d1e2ff;
  }
`;

export default Checkbox;
