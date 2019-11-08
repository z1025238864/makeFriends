import service from './index'

export function login(data) {
  const url = '/user/login'
  return service.post(url, data)
}