import React from 'react';
import { people } from '../data/arrayData';
import styled from 'styled-components';
import { Form, Table } from 'semantic-ui-react';

class Refactor extends React.Component {
  state = { age: 0, result: false, resultLoaded: false };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleOneSubmit = () => {
    const { age } = this.state;
    this.setState({
      result: people.some(p => new Date().getFullYear() - p.year >= age),
      resultLoaded: true
    });
  };

  handleAllSubmit = () => {
    const { age } = this.state;
    this.setState({
      result: people.every(p => new Date().getFullYear() - p.year >= age),
      resultLoaded: true
    });
  };

  renderResult = () => {
    const { result } = this.state;
    return result ? <p>True!</p> : <p>False!</p>;
  };

  generateHeaders = () => {
    return ['Name', 'Year'].map((h, i) => (
      <Table.HeaderCell key={i}>{h}</Table.HeaderCell>
    ));
  };

  generateRows = () => {
    return people.map((p, i) => {
      return (
        <Table.Row key={i}>
          <Table.Cell>{p.name}</Table.Cell>
          <Table.Cell>{p.year}</Table.Cell>
        </Table.Row>
      );
    });
  };

  render() {
    const { age, resultLoaded } = this.state;
    return (
      <Container>
        <Table celled>
          <Table.Header>
            <Table.Row>{this.generateHeaders()}</Table.Row>
          </Table.Header>
          <Table.Body>{this.generateRows()}</Table.Body>
        </Table>
        <Form onSubmit={this.handleOneSubmit}>
          <Form.Input
            label="One older than..."
            name="age"
            value={age}
            onChange={this.handleChange}
          />
        </Form>
        <Form onSubmit={this.handleAllSubmit}>
          <Form.Input
            label="All older than..."
            name="age"
            value={age}
            onChange={this.handleChange}
          />
        </Form>
        {resultLoaded && this.renderResult()}
      </Container>
    );
  }
}

const Container = styled.div`
  padding: 1%;
`;

export default Refactor;
