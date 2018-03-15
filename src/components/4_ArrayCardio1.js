import React from 'react';
import { inventors } from '../data/arrayData';
import styled from 'styled-components';
import { Button, Dropdown, Grid, Icon, Table } from 'semantic-ui-react';

class ArrayCardio extends React.Component {
  state = { view: inventors, dateAsc: true, nameAsc: true };

  resetView = () => this.setState({ view: inventors });

  handleSelection = (e, { value }) => {
    isNaN(parseInt(value.charAt(0), 10))
      ? this.filterByLocation(value)
      : this.filterByCentury(value);
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
      <div className="filter-options">
        <div>
          <strong>Filter by Century</strong> <br />
          <Dropdown
            selection
            placeholder="By Century"
            options={this.centuryOptions()}
            onChange={this.handleSelection}
          />&nbsp;
          <Icon onClick={this.resetView} name="refresh" />
        </div>
        <div>
          <strong>Filter by Location</strong> <br />
          <Dropdown
            selection
            placeholder="By Location"
            options={this.locationOptions()}
            onChange={this.handleSelection}
          />&nbsp;
          <Icon onClick={this.resetView} name="refresh" />
        </div>
      </div>
    );
  };

  sortByDate = () => {
    const { view, dateAsc } = this.state;
    const byDate = view.sort((a, b) => {
      if (dateAsc) return a.year > b.year ? 1 : -1;
      else return b.year > a.year ? 1 : -1;
    });
    this.setState({ dateAsc: !dateAsc });
    this.setState({ view: byDate });
  };

  sortByName = () => {
    const { view, nameAsc } = this.state;
    const byName = view.sort((a, b) => {
      if (nameAsc) return a.last > b.last ? 1 : -1;
      else return b.last > a.last ? 1 : -1;
    });
    this.setState({ nameAsc: !nameAsc });
    this.setState({ view: byName });
  };

  sortOptions = () => {
    return (
      <div className="sort-options">
        <Button basic onClick={this.sortByDate}>
          Sort by Birth Date
        </Button>
        <Button basic onClick={this.sortByName}>
          Sort by Last Name
        </Button>
      </div>
    );
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

  totalAge = () => {
    return inventors.reduce((total, i) => {
      return i.passed - i.year + total;
    }, 0);
  };

  countLocations = () => {
    const locations = inventors.map(i => i.location);
    const result = locations.reduce((count, l) => {
      !count[l] ? (count[l] = 1) : count[l]++;
      return count;
    }, {});
    return Object.keys(result)
      .sort()
      .map((k, i) => {
        return <div key={i}>{`${k}: ${result[k]}`}</div>;
      });
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

  render() {
    return (
      <Container>
        <Grid>
          <Grid.Column width={5}>
            {this.filterOptions()}
            {this.sortOptions()}
            <div>
              <em>
                Cumulative Lifetimes of Scientists: {this.totalAge()} years
              </em>
            </div>
          </Grid.Column>
          <Grid.Column width={5}>
            <h3>No. of Scientists by Country</h3>
            {this.countLocations()}
          </Grid.Column>
          <Grid.Column width={6} textAlign="center">
            <div className="header">
              <h1>Filter, Map, and Reduce</h1>
              <h3>with React JS</h3>
            </div>
          </Grid.Column>
        </Grid>
        <Table celled>
          <Table.Header>
            <Table.Row>{this.generateHeaders()}</Table.Row>
          </Table.Header>
          <Table.Body>{this.generateRows()}</Table.Body>
        </Table>
      </Container>
    );
  }
}

const Container = styled.div`
  padding: 1%;

  .filter-options {
    padding: 1%;
  }
  .header {
    background-color: #f9f7f3;
    line-heght: 0.25em;
    padding: 5%;
  }
  i.icon {
    cursor: pointer;
  }
`;

export default ArrayCardio;
