import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import Api from "../ApiComponents/Api";
import Header from "../HeaderComponents/Header";

class PersonEdit extends Component {
  constructor() {
    super();
    this.state = {
      companyNames: [],
      company: {},
      name: "",
      email: "",
      companyId: "",
      redirect: false
    };
  }

  componentWillMount() {
    Api.getPerson(this.props.match.params.id).then((person) => {
      this.setState({
          name: person.name,
          email: person.email,
          companyId: person.companyId
        }
      )
    });

    Api.getCompaniesIndex().then((data) => {
      let companyNames = data.map(function (company) {
        return {name: company.name, id: company._id};
      });
      this.setState({
          companyNames: companyNames,
          value: this.state.companyId
        }
      )
    });
  }

  submit = () => {
    let data = {name: this.state.name, email: this.state.email, companyId: this.state.value};
    Api.updatePerson({person: data, id: this.props.match.params.id}).then(() => {
      this.setState({redirect: true})
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
      return (<Redirect to={`/companies/${this.state.companyId}/people`}/>);
    }

    return (
      <div>
        <Header/>
        <div className="row">
          <div className="col-sm-6">
            <div className="row panel panel-default">
              <div className="col-sm-12">
                <h2>Edit Person</h2>
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
          </div>
        </div>
      </div>
    );
  }
}

export default PersonEdit;