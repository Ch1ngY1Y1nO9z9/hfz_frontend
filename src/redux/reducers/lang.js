const initData = {lang:'en'}


export default function lang(prev=initData, action) {
    const {type, data} = action
    
    switch (type) {
        case "ChangeLang" :
            return data
        default:
            return prev
    }
}