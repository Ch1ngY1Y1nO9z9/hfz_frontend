import { useState, useEffect } from "react"

export default function useAxiosFunction() {
    const [response, setResponse] = useState([])
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const [controller, setController] = useState()

    const axiosFetch = async (configObj) => {
        const { axiosInstance, method, url, requestConfig = {} } = configObj

        try {
            setLoading(true)
            const ctrl = new AbortController()
            setController(ctrl)

            const res = await axiosInstance[method.toLowerCase()](url, {
                ...requestConfig,
                signal: ctrl.signal,
            })
            setResponse(res.data)
        } catch (err) {
            setError(err.message)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        // 清除此reqeust減少暫存
        return () => controller && controller.abort()
    }, [controller])

    return [response, error, loading, axiosFetch]
}

// 使用函式版axios的設定, 送出表單等動作時使用
