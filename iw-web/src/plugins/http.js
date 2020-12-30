import axios from 'axios';
let server = axios.create({
  baseURL: 'http://127.0.0.1:4523/mock/369666'
});
export default server;