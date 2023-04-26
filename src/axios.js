import axios from 'axios'

axios.defaults.baseURL = 'hhtp://localhost:8000';
axios.defaults.headers.common ['Authorization'] =  'Bearer' + localStorage.getItem('token');
