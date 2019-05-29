import axios from 'axios';

const baseURL = '/api',
  instance = axios.create({
    baseURL,
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
  });

export default instance;
