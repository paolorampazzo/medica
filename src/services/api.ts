import axios from 'axios';

const api = axios.create({
  baseURL: 'https://mallubackend.herokuapp.com/',
});

export default api;
