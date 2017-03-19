import 'whatwg-fetch';
import getBaseUrl from './baseUrl';

const baseUrl = getBaseUrl();

function onSuccess(response) {
  return response.json();
}

function onError(error) {
  console.log(error); // eslint-disable-line no-console
}

function get(url) {
  return fetch(baseUrl + url).then(onSuccess, onError);
}


export const getUsers = () => get('users');
