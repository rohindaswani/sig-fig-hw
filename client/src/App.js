import React, { Component } from 'react';
import Header from './Components/HeaderComponents/Header';
import CompanyList from './Components/CompanyListComponents/CompanyList';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <hr />
        <CompanyList />
      </div>
    );
  }
}

export default App;
