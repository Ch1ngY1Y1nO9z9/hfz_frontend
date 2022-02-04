const defaultUser = {
    login: false,
    user_name: '',
    yubis: 0,
    cards: [],
    access_token: ''
}

export default function statusReducer(prev=defaultUser, action){

    // 初始化狀態時執行
    switch (action.type){
        case 'login':
            return action.data
        case 'logout':
            return {}
        default:
            return prev
    }
}