import axios from 'axios';

axios.interceptors.request.use(function (config) {
    config.headers = {'x-request-id': process.env.MSA_TRANSACTION_KEY};    
    return config;
  }, function (error) {
    return Promise.reject(error);
  });