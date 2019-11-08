import service from './index'

export function register(data) {
  const url = '/user/add'
  return service.post(url, data)
}