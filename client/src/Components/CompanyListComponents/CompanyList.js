import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import Api from '../ApiComponents/Api';
import PersonShow from "../PersonShowComponents/PersonShow";
import './CompanyList.css';

const CompanyItem = (props) => (
  <div>
    <div className="col-sm-12 panel-heading">
      <div className="panel-title"><a className="no-decoration" href={`/companies/${props.id}`}>{props.name}</a></div>
    </div>
    <div className="col-sm-offset-1 col-sm-6"><h5>Address:</h5></div>
    <div className="col-sm-offset-1 col-sm-6"><p>{props.address}</p></div>
    <div className="col-sm-offset-1 col-sm-6"><h5>Revenue:</h5></div>
    <div className="col-sm-offset-1 col-sm-6"><p>{props.revenue}</p></div>
    <div className="col-sm-offset-1 col-sm-6"><h5>Phone:</h5></div>
    <div className="col-sm-offset-1 col-sm-6"><p>{props.phone}</p></div>
    <div className="col-sm-12 panel-footer"><Link to={`/companies/${props.id}/people`}>People who work here</Link></div>

    <Route path={`/companies/${props.id}/people`} exact component={PersonShow} company={props.name}/>
  </div>
);

class Background extends Component{
  constructor(props) {
    super(props);
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
          <div key={index} className="row panel panel-default">
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

class CompanyList extends Component {

  render() {
    return (
      <div className="col-sm-">
        <Background/>
      </div>
    )
  }
}

export default CompanyList;