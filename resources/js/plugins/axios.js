import axios from 'axios'


axios.interceptors.request.use(config => {
    console.log('test interceptors')
   return config;
}, error => {
   return Promise.reject(error);
});
