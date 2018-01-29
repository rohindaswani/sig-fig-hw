import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import Api from '../ApiComponents/Api';
import Header from "../HeaderComponents/Header";

class CompanyEdit extends Component {
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

  componentWillMount() {
    Api.getCompany(this.props.match.params.id).then((data) => {
      this.setState({
        company: data,
        name: data.name,
        address: data.address,
        revenue: data.revenue,
        phone: data.phone,
        id: data._id
      });
    });
  }

  submit = () => {
    let data = {
      name: this.state.name,
      address: this.state.address,
      revenue: this.state.revenue,
      phone: this.state.phone
    };
    Api.updateCompany({company: data, id: this.state.id}).then(() => {
      this.setState({redirect: true})
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
      <div>
        <Header/>
        <div className="row">
          <div className="col-sm-6">
            <div className="row panel panel-default">
              <div className="col-sm-12">
                <h2>Edit Company</h2>
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
          </div>
        </div>
      </div>
    );
  }
}

export default CompanyEdit;