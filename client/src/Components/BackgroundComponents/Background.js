import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import Api from '../ApiComponents/Api';
import PeopleShow from "../PeopleShowComponents/PeopleShow";

class CompanyItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="col-sm-12">
          <nav className="navbar navbar-light bg-primary"><h1 className="navbar-brand"><a className="no-decoration" href={`/companies/${this.props.id}`}>{this.props.name}</a></h1></nav>
        </div>
        <div className="col-sm-offset-1 col-sm-6"><h5>Address:</h5></div>
        <div className="col-sm-offset-1 col-sm-6"><p>{this.props.address}</p></div>
        <div className="col-sm-offset-1 col-sm-6"><h5>Revenue:</h5></div>
        <div className="col-sm-offset-1 col-sm-6"><p>{this.props.revenue}</p></div>
        <div className="col-sm-offset-1 col-sm-6"><h5>Phone:</h5></div>
        <div className="col-sm-offset-1 col-sm-6"><p>{this.props.phone}</p></div>
        <div className="col-sm-6"><Link to={`/companies/${this.props.id}/people`}>People who work here</Link></div>

        <Route path={`/companies/${this.props.id}/people`} exact component={PeopleShow} company={this.props.name}/>
      </div>
    )
  }
}

class Background extends Component{
  constructor() {
    super();
    this.state = {
      companyComponents: [],
      companies: []
    }
  }

  componentWillMount() {
    Api.getCompaniesIndex().then((data) => {
      let companies = [];
      let companyComponents = data.map(function(company, index) {
        companies.push(company);
        return(
          <div key={index} className="row">
            <CompanyItem name={company.name} address={company.address} revenue={company.revenue} phone={company.phone} id={company._id}/>
          </div>
        )
      });
      this.setState({companyComponents: companyComponents, companies: companies});
    });
  }

  render() {
    return(
      <div>
        {this.state.companyComponents}
      </div>
    )

  }
}

export default Background;