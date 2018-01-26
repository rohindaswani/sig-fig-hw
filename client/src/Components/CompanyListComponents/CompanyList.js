import React, { Component } from 'react';
import Background from '../BackgroundComponents/Background'
import './CompanyList.css';

class CompanyList extends Component {

  render() {
    return (
      <div>
        <div>
          <h2>Companies</h2>
          <Background />
        </div>
      </div>
    )
  }
}

export default CompanyList;