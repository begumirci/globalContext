import axios from 'axios';

const BASEURL_HACKERRANK_API = 'https://jsonmock.hackerrank.com/api/',
  BASEURL_JSON_PLACEHOLDER_API = 'https://jsonplaceholder.typicode.com/';

export const hackerrankAPI = axios.create({
  baseURL: BASEURL_HACKERRANK_API,
});

export const jsonPlaceholderAPI = axios.create({
  baseURL: BASEURL_JSON_PLACEHOLDER_API,
});

hackerrankAPI.interceptors.response.use((response) => response.data);
