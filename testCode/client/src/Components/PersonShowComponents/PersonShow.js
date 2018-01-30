import React, {Component} from 'react';
import Header from '../HeaderComponents/Header';
import {Link, Route, Redirect} from 'react-router-dom';
import Api from "../ApiComponents/Api";
import CompanyForm from '../CompanyFormComponents/CompanyForm';
import PersonEdit from '../PersonEditComponents/PersonEdit';

const ShowPerson = (props) => {
  let person = props.people.find((p) => { return p.name === props.selectedName });
  return(
    <div>
      <hr/>
      <div className="col-sm-offset-1 col-sm-8"><h5>Name:</h5></div>
      <div className="col-sm-offset-1 col-sm-8"><p>{person.name}</p></div>
      <div className="col-sm-offset-1 col-sm-8"><h5>Email:</h5></div>
      <div className="col-sm-offset-1 col-sm-8"><p>{person.email}</p></div>
      <div className="col-sm-offset-1 col-sm-8"><h5>Company:</h5></div>
      <div className="col-sm-offset-1 col-sm-8"><p>{props.companyName}</p></div>
      <div className="col-sm-offset-1 col-sm-8"><Link to={`/person/${person._id}/edit`}>Edit</Link></div>
      <Route path={`person/:id/edit`} exact component={PersonEdit}/>
    </div>
  );
};

class ShowPersons extends Component {
  constructor(props) {
    super(props);
    this.state = {
      people: [],
      company: {},
      show: false,
      redirect: false
    };
  }

  deletePerson = (id) => {
    let personId = id;
    return () => {
      Api.deletePerson(personId).then(() => {
        this.setState({redirect: true});
      })
    };
  };

  onClick = (event) => {
    event.preventDefault();
    this.setState({show: !this.state.show, selectedName: event.target.text});
  };

  componentWillMount() {
    Api.getCompany(this.props.match.params.id).then((company) => {
      Api.getPeopleIndex(this.props.match.params.id).then((people) => {
        let peopleComponents = people.map((person, index) => {
          return (
            <li key={index}><a onClick={this.onClick} href='#'>{person.name}</a><a className="pull-right" href="#" onClick={this.deletePerson(person._id)}>Delete</a></li>
          )
        });
        this.setState({company: company, people: people, peopleComponents: peopleComponents});
      });
    });
  };

  render() {
    if (this.state.redirect) {
      return (<Redirect to={`/companies/${this.props.match.params.id}`}/>);
    }
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
              <div className="col-sm-12 panel-body">
                <ul>
                  {this.state.peopleComponents}
                </ul>
                {this.state.show && <ShowPerson selectedName={this.state.selectedName} people={this.state.people} companyName={this.state.company.name} companyId={this.props.match.params.id}/>}
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


export default ShowPersons;
