import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://burger-builder-73852.firebaseio.com/'
});
  
export default instance;