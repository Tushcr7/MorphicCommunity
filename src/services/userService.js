import { HTTP } from '@/services/index'

export function login (user) {
  const auth = {
    username: user.username,
    password: user.password
  }
  return HTTP.post('/v1/auth/username', auth)
}

export function register (user) {
  const auth = {
    username: user.username,
    password: user.password,
    email: user.email,
    first_name: user.firstName,
    last_name: user.lastName
  }
  return HTTP.post('/v1/register/username', auth)
}

export function resetPassword (body) {
  return HTTP.post('/v1/auth/username/password_reset/request', body)
}
