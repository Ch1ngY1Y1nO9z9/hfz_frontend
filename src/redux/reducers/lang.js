// 取得初始化資料
import locale from '../defaultLang.json'

const initData = {lang:'en', locale}


export default function lang(prev=initData, action) {
    const {type, data} = action

    switch (type) {
        case "ChangeLang" :
            return data
        default:
            return prev
    }
}