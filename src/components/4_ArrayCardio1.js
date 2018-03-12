import React from 'react';
import { inventors } from '../data/4_ArrayData';
import styled from 'styled-components';
import { Table } from 'semantic-ui-react';

class ArrayCardio extends React.Component {
  generateHeaders = () => {
    const headers = ['First', 'Last', 'Born', 'Passed'];
    return headers.map(h => <Table.HeaderCell>{h}</Table.HeaderCell>);
  };

  generateRows = () => {
    return inventors.map( i => {
      return (
        <Table.Row>
          <Table.Cell>{i.first}</Table.Cell>
          <Table.Cell>{i.last}</Table.Cell>
          <Table.Cell>{i.year}</Table.Cell>
          <Table.Cell>{i.passed}</Table.Cell>
        </Table.Row>
      );
    })
  };

  render() {
    return (
      <Table celled>
        <Table.Header>
          <Table.Row>{this.generateHeaders()}</Table.Row>
        </Table.Header>
        <Table.Body>{this.generateRows()}</Table.Body>
      </Table>
    );
  }
}

export default ArrayCardio;

//     // Array.prototype.filter()
//     // 1. Filter the list of inventors for those who were born in the 1500's

//     // Array.prototype.map()
//     // 2. Give us an array of the inventors' first and last names

//     // Array.prototype.sort()
//     // 3. Sort the inventors by birthdate, oldest to youngest

//     // Array.prototype.reduce()
//     // 4. How many years did all the inventors live?
//     // 5. Sort the inventors by years lived

//     // 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
//     // https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris

//     // 7. sort Exercise
//     // Sort the people alphabetically by last name

//     // 8. Reduce Exercise
//     // Sum up the instances of each of these
//     const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];
