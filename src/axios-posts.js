import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://posts-management-188e5-default-rtdb.firebaseio.com',
});

export default instance;
