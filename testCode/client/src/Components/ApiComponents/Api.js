
const log = (message, error) => {
  console.error(message, error);
  throw error
};

const Api = {
  getCompaniesIndex: () => {
    return fetch("/companies").catch(log).then((response) => {
      return response.json();
    })
  },
  getCompany: (id) => {
    return fetch(`/companies/${id}`).catch(log).then((response) => {
      return response.json();
    })
  },
  createCompany: (data) => {
    return fetch("/companies", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {"Content-Type": "application/json"}
    }).catch(log).then((response) => {
      return response.json();
    })
  },
  updateCompany: ({company, id}) => {
    return fetch(`/companies/${id}`, {
      method: "PUT",
      body: JSON.stringify(company),
      headers: {"Content-Type": "application/json"}
    }).catch(log)
  },
  getPeopleIndex: (id) => {
    return fetch(`/companies/${id}/people`).catch(log).then((response) => {
      return response.json();
    })
  },
  getPerson: (id) => {
    return fetch(`/person/${id}`).catch(log).then((response) => {
      return response.json();
    })
  },
  createPerson: (data) => {
    return fetch("/person", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {"Content-Type": "application/json"}
    }).catch(log).then((response) => {
      return response.json();
    })
  },
  updatePerson: ({person, id}) => {
    return fetch(`/person/${id}`, {
      method: "PUT",
      body: JSON.stringify(person),
      headers: {"Content-Type": "application/json"}
    }).catch(log)
  }
};

export default Api;