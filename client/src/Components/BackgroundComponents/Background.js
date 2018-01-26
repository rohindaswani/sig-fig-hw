import React, { Component } from 'react';

class Background extends Component{
  constructor() {
    super();
    this.state = {
      companies: []
    }
  }

  componentWillMount() {
    console.log("this", this);
    fetch('/companies').then((response) => {
      return response.json();
    }).then((data) => {
      console.log("responseJson", data);
      let companies = data.map(function(company, index) {
        return(
          <div key={index}>
            <h1>{company.name}</h1>
            <p>{company.address}</p>
            <p>{company.revenue}</p>
            <p>{company.phone}</p>
          </div>
        )
      });
      this.setState({companies: companies});
    });
  }

  render() {
    return(
      <div>
        {this.state.companies}
      </div>
    )

  }
}

export default Background;