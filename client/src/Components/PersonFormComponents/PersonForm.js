import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import Api from "../ApiComponents/Api";

class PersonForm extends Component {
  constructor() {
    super();
    this.state = {
      companyNames: [],
      name: "",
      email: "",
      id: "",
      redirect: false
    };
  }

  componentWillMount() {
    Api.getCompaniesIndex().then((data) => {
      let companyNames = data.map(function (company) {
        return {name: company.name, id: company._id};
      });
      this.setState({
          companyNames: companyNames,
          value: companyNames[0].id
        }
      )
    });
  }

  submit = () => {
    let data = {name: this.state.name, email: this.state.email, companyId: this.state.value};
    Api.createPerson(data).then((person) => {
      this.setState({redirect: true, id: this.state.value})
    })
  };

  onChange = (event) => {
    const state = this.state;
    state[event.target.name] = event.target.value;
    this.setState(state);
  };

  onSelectChange = (event) => {
    this.setState({value: event.target.value});
  };

  render() {
    if (this.state.redirect) {
      return (<Redirect to={`/companies/${this.state.value}/people`}/>);
    }

    return (
      <div className="row panel panel-default">
        <div className="col-sm-12">
          <h2>Create New Person</h2>
          <div className="form-group">
            <label>Name</label>
            <input type="text" name="name" className="form-control" placeholder="Enter Name"
                   value={this.state.name} onChange={this.onChange}/>
          </div>
          <div className="form-group">
            <label>Email</label>
            <input type="email" name="email" className="form-control" placeholder="Enter Email"
                   value={this.state.email} onChange={this.onChange}/>
          </div>
          <div className="form-group">
            <label>Company</label>
            <select name="id" value={this.state.value} onChange={this.onSelectChange} className="form-control">
              {this.state.companyNames.map((company, index) => <option key={index}
                                                                       value={company.id}>{company.name}</option>)}
            </select>
          </div>
          <div className="form-group" onClick={this.submit}>
            <button className="btn btn-primary">Save</button>
          </div>
        </div>
      </div>
    );
  }
}

export default PersonForm;