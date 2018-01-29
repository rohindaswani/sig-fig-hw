import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import Api from '../ApiComponents/Api';
import PersonShow from "../PersonShowComponents/PersonShow";
import CompanyShow from "../CompanyShowComponents/CompanyShow";
import './CompanyList.css';

const CompanyItem = (props) => (
  <div>
    <div className="col-sm-12 panel-heading"><div className="panel-title"><Link className="no-decoration" to={`/companies/${props.id}`}>{props.name}</Link></div></div>
    <div className="row"><div className="col-sm-offset-1 col-sm-6"><h5>Address:</h5></div></div>
    <div className="row"><div className="col-sm-offset-1 col-sm-6"><p>{props.address}</p></div></div>
    <div className="row"><div className="col-sm-offset-1 col-sm-6"><h5>Revenue:</h5></div></div>
    <div className="row"><div className="col-sm-offset-1 col-sm-6"><p>{props.revenue}</p></div></div>
    <div className="row"><div className="col-sm-offset-1 col-sm-6"><h5>Phone:</h5></div></div>
    <div className="row"><div className="col-sm-offset-1 col-sm-6"><p>{props.phone}</p></div></div>
    <div className="col-sm-12 panel-footer"><Link to={`/companies/${props.id}/people`}>People who work here</Link></div>

    <Route path={`companies/${props.id}`} exact component={CompanyShow}/>
    <Route path={`/companies/${props.id}/people`} exact component={PersonShow} company={props.name}/>
  </div>
);

class CompanyList extends Component{
  constructor(props) {
    super(props);
    this.state = {
      componentList: [],
      companies: []
    }
  }

  componentWillMount() {
    Api.getCompaniesIndex().then((data) => {
      let componentList = data.map(function(company, index) {
        return(
          <div key={index} className="row panel panel-default">
            <CompanyItem name={company.name} address={company.address} revenue={company.revenue} phone={company.phone} id={company._id}/>
          </div>
        )
      });
      this.setState({componentList: componentList, companies: data});
    });
  }

  render() {
    return(
      <div>
        {this.state.componentList}
      </div>
    )

  }
}

export default CompanyList;