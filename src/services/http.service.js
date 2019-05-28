const localUrl = 'http://127.0.0.1:3000/api/v1';
const herokuUrl = ' https://politico-software.herokuapp.com/api/v1';
const url = `${herokuUrl}`;

const auth = (type = 'signup', data) => {
  return window
    .fetch(`${url}/auth/${type}`, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    .then(res => res.json())
    .then(res => res)
    .catch(err => err);
};
const fetchItem = (type = 'parties', data) => {
  return window
    .fetch(`${url}/${type}`, {
      method: 'GET',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    .then(res => res.json())
    .then(res => res)
    .catch(err => err);
};
const postItem = (type = 'interest', data) => {
  return window
    .fetch(`${url}/${type}/`, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    .then(res => res.json())
    .then(res => res)
    .catch(err => err);
};
export default {
  auth,
  fetchItem,
  postItem,
};
