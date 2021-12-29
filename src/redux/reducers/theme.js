// 執行狀態修改處理
// 此處都是在定義物件中的值,不需要再寫成物件, 否則會變成undefined
export default function themeReducer(prev=true, action){
    // 初始化狀態時執行
    if(action.data === undefined) return prev
    // 非初次執行則直接將資料放入
    return action.data
}