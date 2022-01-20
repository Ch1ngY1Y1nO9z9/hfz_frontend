// 執行狀態修改處理
// 此處都是在定義物件中的值,不需要再寫成物件, 否則會變成undefined
export default function themeReducer(prev=true, action){
    // 初始化狀態時執行
    switch (action.type){
        case undefined:
            return prev
        case 'ChangeTheme':
            return action.data
        default:
            return prev
    }
}