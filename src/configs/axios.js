import axios from 'axios';

const baseURL = process.env.REACT_APP_ENDPOINT,
  instance = axios.create({
    baseURL,
  });

instance.defaults.headers.common['Content-Type'] =
  'application/json; charset=UTF-8';

export default instance;
