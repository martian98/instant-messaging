import http from '@/plugins/http';

export function login(param) {
  return http.post('/login', param);
}
export function register(param) {
  return http.post('/register', param);
}