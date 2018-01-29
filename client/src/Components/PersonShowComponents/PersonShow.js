import React, {Component} from 'react';
import Header from '../HeaderComponents/Header';
import {Link} from 'react-router-dom';
import Api from "../ApiComponents/Api";
import CompanyForm from '../CompanyFormComponents/CompanyForm';

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
          return (<li key={index}>{person.name}</li>)
        });
        this.setState({company: company, people: people, peopleComponents: peopleComponents});
      });
    });
  };

  render() {
    return (
      <div>
        <div className="row">
          <Header/>
        </div>
        <div className="row">
          <div className="col-sm-6">
            <div className="row panel panel-default">
              <div className="col-sm-12 panel-heading">
                <div className="panel-title">People at {this.state.company.name}</div>
              </div>
              <div className="col-sm-4 panel-body">
                <ul>
                  {this.state.peopleComponents}
                </ul>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-6"><Link className="col-sm-1"
                                              to={`/companies/${this.props.match.params.id}`}>Back</Link></div>
            </div>
          </div>
          <div className="col-sm-offset-1 col-sm-5">
            <CompanyForm/>
          </div>
        </div>
      </div>
    )
  };
}


export default PeopleShow;
