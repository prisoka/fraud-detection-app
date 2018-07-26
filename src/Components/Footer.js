import React, { Component } from 'react';
import Copyright from './Copyright';

class Footer extends Component {
  render() {
    return (
      <footer className="page-footer font-small">
        <div className="footer-copyright text-center py-3">
          <Copyright year="2018"/>
        </div>
      </footer>
    );
  }
}

export default Footer;
