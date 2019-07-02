import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://35.247.140.157',
});

export default axiosInstance;
