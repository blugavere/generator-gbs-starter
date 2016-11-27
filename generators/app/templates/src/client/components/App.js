const React = require('react');
const { Component, PropTypes } = React;
import 'bootstrap/dist/css/bootstrap.css';
// import '../styles/styles.css';
import { connect } from 'react-redux';
import Navbar from './Navbar';

const mapStateToProps = state => ({
});

class App extends Component {
  render() {
    const { location } = this.props;
    return (
      <div>
        <Navbar location={location} />
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  location: PropTypes.object.isRequired,
  children: PropTypes.object.isRequired
};

module.exports = connect(mapStateToProps)(App);
