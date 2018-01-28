// import React from 'react';

//catch err if json parse fails
const Api = {
  getCompaniesIndex: () => { return fetch("/companies").then((response) => { return response.json(); }) },
  getCompany: (id) => { return fetch(`/companies/${id}`).then((response) => { return response.json(); }) },
  getPeopleIndex: (id) => { return fetch(`/companies/${id}/people`).then((response) => { return response.json(); }) },
};

export default Api;