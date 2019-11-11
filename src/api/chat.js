import service from './index'
export function getmessage ( params ){
    const url ="/messageLog/getMessage"
    return service.get( url,params )
}

export function getUnReadMessage(params) {
    const url ="/messageLog/getUnReadMessage"
    return service.get( url,params )
}