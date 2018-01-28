import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import Button from '../ButtonComponent/Button';

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

  submit = (event) => {
    fetch("/companies", {
      method: "POST",
      body: JSON.stringify({name: this.state.name, address: this.state.address, revenue: this.state.revenue, phone: this.state.phone}),
      headers: { "Content-Type": "application/json" }
    }).then((response) => {
      return response.json();
    }).then((company) => {
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
      <div className="row">
        <div className="col-sm-12">
          <h2>Create New Company</h2>
          <div className="form-group">
            <label>Name</label>
            <input type="text" name="name" className="form-control" id="companyName" placeholder="Enter Name"
                   value={this.state.name} onChange={this.onChange}/>
          </div>
          <div className="form-group">
            <label>Address</label>
            <input type="text" name="address" className="form-control" id="companyAddress" placeholder="Enter Address"
                   value={this.state.address} onChange={this.onChange}/>
          </div>
          <div className="form-group">
            <label>Revenue</label>
            <input type="text" name="revenue" className="form-control" id="companyRevenue" placeholder="Enter Revenue"
                   value={this.state.revenue} onChange={this.onChange}/>
          </div>
          <div className="form-group">
            <label>Phone</label>
            <input type="text" name="phone" className="form-control" id="companyPhone" placeholder="Enter Phone"
                   value={this.state.phone} onChange={this.onChange}/>
          </div>
          {/*//This is weird*/}
          <div className="form-group" onClick={this.submit}>
            <Button class="btn btn-primary" value="Save"/>
          </div>
        </div>
      </div>


    );
  }
}

export default CompanyForm;