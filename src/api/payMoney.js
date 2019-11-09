import service from './index'
export function payMoney(params) {
    const url = '/checkOrder'
    return service.get(url,params)
  }