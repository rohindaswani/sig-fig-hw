import React, { Component } from 'react';
import Header from '../HeaderComponents/Header';
import { Link, Route } from 'react-router-dom';
import Api from "../ApiComponents/Api";
import PersonShow from "../PersonShowComponents/PersonShow";
import PersonForm from '../PersonFormComponents/PersonForm';

class CompanyShow extends Component {
  constructor(props) {
    super(props);
    this.state = { company: [] };
  }

  componentWillMount() {
    Api.getCompany(this.props.match.params.id).then((data) => {
      let company = (
        <div>
          <div className="col-sm-12 panel-heading">
            <div className="panel-title">{data.name}</div>
          </div>
          <div className="col-sm-offset-1 col-sm-6"><h5>Address:</h5></div>
          <div className="col-sm-offset-1 col-sm-6"><p>{data.address}</p></div>
          <div className="col-sm-offset-1 col-sm-6"><h5>Revenue:</h5></div>
          <div className="col-sm-offset-1 col-sm-6"><p>{data.revenue}</p></div>
          <div className="col-sm-offset-1 col-sm-6"><h5>Phone:</h5></div>
          <div className="col-sm-offset-1 col-sm-6"><p>{data.phone}</p></div>
          <div className="col-sm-12 panel-footer"><Link to={`/companies/${this.props.match.params.id}/people`}>People who work here</Link></div>
          <Route path={`/companies/${this.props.id}/people`} exact component={PersonShow} company={this.props.name}/>
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
          <div className="row panel panel-default">
            {this.state.company}
          </div>
          <div className="row"><Link className="col-sm-1" to="/companies">Back</Link></div>
        </div>
        <div className="col-sm-offset-1 col-sm-5">
          <PersonForm/>
        </div>
      </div>
    )
  };
}


export default CompanyShow;