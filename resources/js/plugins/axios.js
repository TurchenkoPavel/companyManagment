import axios from 'axios'
import { useCookies } from "vue3-cookies";
const { cookies } = useCookies();


axios.defaults.withCredentials = true;
axios.defaults.baseURL = '/api';
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
axios.defaults.headers.common['Access-Control-Allow-Credentials'] = 'true';
axios.defaults.headers.common['Access-Control-Request-Methods'] = 'GET, POST, PUT, OPTIONS, DELETE';
axios.defaults.headers.common['Access-Control-Max-Age'] = '240';

axios.interceptors.request.use(config => {
   console.log(config.method, cookies.get('XSRF-TOKEN'));
    if ((
      config.method == 'post' || 
      config.method == 'put' || 
      config.method == 'delete'
      /* other methods you want to add here */
   ) &&
      !cookies.get('XSRF-TOKEN')) {
         console.log(123);
      return axiosInstance.get('/sanctum/csrf-cookie')
         .then(response => config);
   }
   return config;
}, error => {
   return Promise.reject(error);
});
