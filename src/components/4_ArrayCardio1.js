import React from 'react';
import { inventors } from '../data/4_ArrayData';
import { Dropdown, Table } from 'semantic-ui-react';

class ArrayCardio extends React.Component {
  state = { view: inventors };

  handleCenturySelection = (e, { value }) => {
    this.filterByCentury(value);
  };

  handleLocationSelection = (e, { value }) => {
    this.filterByLocation(value);
  };

  centuryOptions = () => {
    const years = inventors.map(i => i.year);
    const centuries = [
      ...new Set(years.map(y => y.toString().slice(0, 2) + '00'))
    ];
    return centuries.map((century, i) => {
      return { key: i, text: century, value: century };
    });
  };

  locationOptions = () => {
    const locations = [...new Set(inventors.map(i => i.location))];
    return locations.map((location, i) => {
      return { key: i, text: location, value: location };
    });
  };

  filterOptions = () => {
    return (
      <div>
        <Dropdown
          selection
          placeholder="By Century"
          options={this.centuryOptions()}
          onChange={this.handleCenturySelection}
        />
        <Dropdown
          selection
          placeholder="By Location"
          options={this.locationOptions()}
          onChange={this.handleLocationSelection}
        />
      </div>
    );
  };

  generateHeaders = () => {
    const headers = ['First', 'Last', 'Location', 'Born', 'Passed'];
    return headers.map((h, i) => (
      <Table.HeaderCell key={i}>{h}</Table.HeaderCell>
    ));
  };

  generateRows = () => {
    const { view } = this.state;
    return view.map((inventor, i) => {
      return (
        <Table.Row key={i}>
          <Table.Cell>{inventor.first}</Table.Cell>
          <Table.Cell>{inventor.last}</Table.Cell>
          <Table.Cell>{inventor.location}</Table.Cell>
          <Table.Cell>{inventor.year}</Table.Cell>
          <Table.Cell>{inventor.passed}</Table.Cell>
        </Table.Row>
      );
    });
  };

  filterByCentury = value => {
    const byCentury = inventors.filter(i => {
      return i.year.toString().slice(0, 2) === value.slice(0, 2);
    });
    this.setState({ view: byCentury });
  };

  filterByLocation = value => {
    const byLocation = inventors.filter(i => i.location === value);
    this.setState({ view: byLocation });
  };

  render() {
    return (
      <div>
        {this.filterOptions()}
        <Table celled>
          <Table.Header>
            <Table.Row>{this.generateHeaders()}</Table.Row>
          </Table.Header>
          <Table.Body>{this.generateRows()}</Table.Body>
        </Table>
      </div>
    );
  }
}

export default ArrayCardio;

//     // Array.prototype.sort()
//     // 3. Sort the inventors by birthdate, oldest to youngest

//     // Array.prototype.reduce()
//     // 4. How many years did all the inventors live?
//     // 5. Sort the inventors by years lived

//     // 7. sort Exercise
//     // Sort the people alphabetically by last name

//     // 8. Reduce Exercise
//     // Sum up the instances of each of these
//     const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];
