//catch err if json parse fails
const Api = {
  getCompaniesIndex: () => {
    return fetch("/companies").then((response) => {
      return response.json();
    })
  },
  getCompany: (id) => {
    return fetch(`/companies/${id}`).then((response) => {
      return response.json();
    })
  },
  createCompany: (data) => {
    return fetch("/companies", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {"Content-Type": "application/json"}
    }).then((response) => {
      return response.json();
    })
  },
  updateCompany: (data) => {
    return fetch("/companies", {
      method: "PUT",
      body: JSON.stringify(data),
      headers: {"Content-Type": "application/json"}
    }).then((response) => {
      return response.json();
    })
  },
  getPeopleIndex: (id) => {
    return fetch(`/companies/${id}/people`).then((response) => {
      return response.json();
    })
  },
  createPerson: (data) => {
    return fetch("/person", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {"Content-Type": "application/json"}
    }).then((response) => {
      return response.json();
    })
  }
};

export default Api;