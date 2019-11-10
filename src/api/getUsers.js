import service from './index'
function getUsers ( params ){
    const url =" /user/getUsers"
    return service.get( url,params )
}