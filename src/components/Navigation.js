import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import { calendarData } from '../calendarData';
import { Menu, Icon } from 'semantic-ui-react';

const Navigation = ({ history, location }) => {

  const filterLink = () => {
    const pathname = location.pathname;
    if (pathname !== '/') {
      return calendarData.find(project => {
        return project.path === pathname;
      }).link;
    } else {
      return 'https://github.com/AriBurr/js_30_react_calendar';
    }
  };

  return (
    <Menu attached inverted>
      <Menu.Item as={Link} to="/">
        Home
      </Menu.Item>
      <Menu.Item position="right" as={Link} to={filterLink()} target="_blank">
        <Icon name="github" size="large" />
      </Menu.Item>
    </Menu>
  );
};

export default withRouter(Navigation);
