import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import Header from './Components/HeaderComponents/Header';
import CompanyList from './Components/CompanyListComponents/CompanyList';
import CompanyForm from './Components/CompanyFormComponents/CompanyForm';
import PersonForm from './Components/PersonFormComponents/PersonForm';
import CompanyShow from './Components/CompanyShowComponents/CompanyShow';
import PeopleShow from './Components/PersonShowComponents/PersonShow';
import './App.css';

const HomePage = () => (
  <div>
    <Header/>
    <div className="col-sm-6">
      <div className="row">
        <h1>Companies</h1>
        <CompanyList/>
      </div>
    </div>
    <div className="col-sm-offset-1 col-sm-5">
      <CompanyForm/>
      <PersonForm/>
    </div>
  </div>
);

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <Switch>
            <Route path="/companies" exact component={HomePage}/>
            <Route path="/companies/:id" exact component={CompanyShow}/>
            <Route path="/companies/:id/people" component={PeopleShow}/>
            <Redirect from="/" to="/companies" component={HomePage}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
