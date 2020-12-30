import axios from 'axios';
let server = axios.create({
  base: ''
});
export default server;