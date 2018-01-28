import React, { Component } from 'react';
import Header from '../HeaderComponents/Header';
import CompanyForm from "../CompanyFormComponents/CompanyForm";
import PersonForm from "../PersonFormComponents/PersonForm";
import { Link } from 'react-router-dom';
import Api from "../ApiComponents/Api";

class PeopleShow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      people: [],
      company: {}
    };
  }

  componentWillMount() {
    Api.getCompany(this.props.match.params.id).then((company) => {
      Api.getPeopleIndex(this.props.match.params.id).then((people) => {
        let peopleComponents = people.map((person, index) => {
          return (
            <li key={index}>{person.name}</li>
          )
        });
        this.setState({company: company, people: people, peopleComponents: peopleComponents});
      });
    });
  };

  render() {
    return (
      <div>
        <Header/>
        <div className="col-sm-6">
          <div className="row">
            <div className="col-sm-12">
              <nav className="navbar navbar-light bg-primary"><h1 className="navbar-brand">People at {this.state.company.name}</h1></nav>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-4">
              <ul>
                {this.state.peopleComponents}
              </ul>
            </div>
          </div>
          <div className="row"><div className="col-sm-6"><Link className="col-sm-1" to={`/companies/${this.props.match.params.id}`}>Back</Link></div></div>
        </div>
        <div className="col-sm-offset-1 col-sm-5">
          <CompanyForm/>
          <PersonForm/>
        </div>
      </div>
    )
  };
}


export default PeopleShow;
