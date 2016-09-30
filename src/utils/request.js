require('es6-promise').polyfill();
import 'isomorphic-fetch';

export default function request(url, options = {}) {

  if (
      options.method === 'POST' ||
      options.method === 'PUT' ||
      options.method === 'PATCH'
    ) {
    options.headers = {
      ...options.headers,
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    };
    options.body = JSON.stringify(options.body);
  }

  return fetch(`${url}`, options)
    .then(checkStatus)
    .then(parseJSON)
    .then((data) => ({ data }))
    .catch((error) => ({ error }));
}

function parseJSON(response) {
  return response.json();
}


function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  const error = new Error(response.statusText);
  error.response = response;
  throw error;
}
