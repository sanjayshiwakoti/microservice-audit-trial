import axios from 'axios';
import {httpInterceptor} from '../utils/httpInterceptor';

export const get = url => {
  // TODO handle error
  return axios.get(url).then(response => response.data);
};

export const post = (url, body) => {
  // TODO handle error
  return axios.post(url, body).then(response => response).catch(error => {
    
    throw  error.response.data.error;
  });
};
