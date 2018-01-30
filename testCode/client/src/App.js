import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import Header from './Components/HeaderComponents/Header';
import CompanyList from './Components/CompanyListComponents/CompanyList';
import CompanyForm from './Components/CompanyFormComponents/CompanyForm';
import CompanyShow from './Components/CompanyShowComponents/CompanyShow';
import PersonForm from './Components/PersonFormComponents/PersonForm';
import ShowPersons from './Components/PersonShowComponents/PersonShow';
import CompanyEdit from './Components/CompanyEditComponents/CompanyEdit';
import PersonEdit from './Components/PersonEditComponents/PersonEdit';

const HomePage = () => (
  <div>
    <div className="row">
      <Header/>
    </div>
    <div className="row">
      <div className="col-sm-6">
        <div className="row">
          <h1>Companies</h1>
          <div className="col-sm-12">
            <CompanyList/>
          </div>
        </div>
      </div>
      <div className="col-sm-offset-1 col-sm-5">
        <CompanyForm/>
        <PersonForm/>
      </div>
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
            <Route path="/companies/:id/edit" exact component={CompanyEdit}/>
            <Route path="/companies/:id/people" component={ShowPersons}/>
            <Route path="/person/:id/edit" exact component={PersonEdit}/>
            <Redirect from="/" to="/companies" component={HomePage}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
