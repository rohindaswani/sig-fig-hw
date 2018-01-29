import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './Header';

class Header extends Component {
  render() {
    return(
      <div>
        <Link className="no-decoration" to="/" style={{textDecoration: 'none', color: 'black'}}><h1>SigFig RPT</h1></Link>
        <hr/>
      </div>
    )
  }
}

export default Header;