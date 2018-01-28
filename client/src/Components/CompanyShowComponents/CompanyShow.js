import React, { Component } from 'react';
import Header from '../HeaderComponents/Header';
import CompanyForm from "../CompanyFormComponents/CompanyForm";
import PersonForm from "../PersonFormComponents/PersonForm";
import { Link } from 'react-router-dom';
import Api from "../ApiComponents/Api";

class CompanyShow extends Component {
  constructor(props) {
    super(props);
    this.state = { company: [] };
  }

  componentWillMount() {
    Api.getCompany(this.props.match.params.id).then((data) => {
      //refactor this code
      let company = (
        <div>
          <div className="col-sm-12">
            <nav className="navbar navbar-light bg-primary"><h1 className="navbar-brand">{data.name}</h1></nav>
          </div>
          <div className="col-sm-offset-1 col-sm-6"><h5>Address:</h5></div>
          <div className="col-sm-offset-1 col-sm-6"><p>{data.address}</p></div>
          <div className="col-sm-offset-1 col-sm-6"><h5>Revenue:</h5></div>
          <div className="col-sm-offset-1 col-sm-6"><p>{data.revenue}</p></div>
          <div className="col-sm-offset-1 col-sm-6"><h5>Phone:</h5></div>
          <div className="col-sm-offset-1 col-sm-6"><p>{data.phone}</p></div>
          <div className="col-sm-6"><Link className="col-sm-1" to="/companies">Back</Link></div>
        </div>
      );
      this.setState({company: company});
    });
  }

  render() {
    return (
      <div>
        <Header/>
        <div className="col-sm-6">
          <div className="row">
            {this.state.company}
          </div>
        </div>
        <div className="col-sm-offset-1 col-sm-5">
          <CompanyForm/>
          <PersonForm/>
        </div>
      </div>
    )
  };
}


export default CompanyShow;