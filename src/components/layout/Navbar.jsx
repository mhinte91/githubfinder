import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Navbar extends Component {
  static defaultProps = {
    title: 'Github Finder',
    icon: 'fab fa-github'
  };

  static propTyps = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
  };

  render() {
    return (
      <div className='navbar bg-primary'>
        <h1>
          <i className={this.props.icon} /> {this.props.title}
        </h1>
      </div>
    );
  }
}

export default Navbar;
