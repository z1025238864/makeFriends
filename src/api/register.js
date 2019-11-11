import service from './index'
export function register(data) {
  const url = '/user/register'
  return service.post(url,data)
}