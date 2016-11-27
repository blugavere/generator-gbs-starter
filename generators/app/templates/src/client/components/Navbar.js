
const React = require('react');
const PropTypes = React.PropTypes;
const Link = require('react-router').Link;
const connect = require('react-redux').connect;
import { LinkContainer } from 'react-router-bootstrap';

import {
  Nav, Navbar,
  NavbarBrand,
  NavDropdown, NavItem, MenuItem
} from 'react-bootstrap';

class Navigation extends React.Component {
  static propTypes() {
    return {
      location: PropTypes.object.isRequired
    };
  }
  render() {
    const {pathname} = this.props.location;

    const routes = [
      { route: '/home', label: 'Home' }
    ];

    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <Link className="navbar-brand" to="/">
              Sample App
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
          {routes.map(x => {
            return (<LinkContainer key={x.route} to={x.route}>
              <NavItem>{x.label}</NavItem>
            </LinkContainer>)
          })}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({

});

export default connect(mapStateToProps)(Navigation);