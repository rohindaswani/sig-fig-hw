import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import Api from '../ApiComponents/Api';

class CompanyForm extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      address: "",
      revenue: "",
      phone: "",
      id: "",
      redirect: false
    }
  }

  submit = () => {
    let data = {
      name: this.state.name,
      address: this.state.address,
      revenue: this.state.revenue,
      phone: this.state.phone
    };
    Api.createCompany(data).then((company) => {
      this.setState({redirect: true, id: company._id})
    })
  };

  onChange = (event) => {
    const state = this.state;
    state[event.target.name] = event.target.value;
    this.setState(state);
  };

  render() {
    if (this.state.redirect) {
      return (<Redirect to={`/companies/${this.state.id}`}/>);
    }

    return (
      <div className="row panel panel-default">
        <div className="col-sm-12">
          <h2>Create New Company</h2>
          <div className="form-group">
            <label>Name</label>
            <input type="text" name="name" className="form-control" placeholder="Enter Name"
                   value={this.state.name} onChange={this.onChange}/>
          </div>
          <div className="form-group">
            <label>Address</label>
            <input type="text" name="address" className="form-control" placeholder="Enter Address"
                   value={this.state.address} onChange={this.onChange}/>
          </div>
          <div className="form-group">
            <label>Revenue</label>
            <input type="text" name="revenue" className="form-control" placeholder="Enter Revenue"
                   value={this.state.revenue} onChange={this.onChange}/>
          </div>
          <div className="form-group">
            <label>Phone</label>
            <input type="text" name="phone" className="form-control" placeholder="Enter Phone"
                   value={this.state.phone} onChange={this.onChange}/>
          </div>
          <div className="form-group" onClick={this.submit}>
            <button className="btn btn-primary">Save</button>
          </div>
        </div>
      </div>
    );
  }
}

export default CompanyForm;