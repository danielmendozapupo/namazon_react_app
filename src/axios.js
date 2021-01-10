import axios from 'axios';

const instance = axios.create({
     baseURL: 'http://localhost:8080'  // The url of the API (cloud function)
     });

export default instance;