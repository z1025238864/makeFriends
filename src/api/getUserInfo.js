import service from './index'

export function getUserInfo(url) {

  return service.get(url)
}