export const ChangeStatus = (data) =>{
    if(data.status === 'login'){
        return {type: 'login', data}
    }else if(data.status === 'logout'){
        return {type: 'logout', data}
    }
}