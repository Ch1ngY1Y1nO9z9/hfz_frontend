import { useState, useEffect } from "react"

export default function useAxios(configObj) {
  // 使用此hook時要傳入的obj要有的東西
  const { axiosInstance, method, url, requestConfig = {} } = configObj

  const [response, setResponse] = useState([])
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(true)

  const [reload, setReload] = useState(0)

  const refetch = () => setReload(prev => prev +1);


  useEffect(() => {
    // 此控制器常數為控制是否取消request
    const controller = new AbortController()

    const fetchData = async () => {
      try {
        const res = await axiosInstance[method.toLowerCase()](url, {
          ...requestConfig,
          signal: controller.signal,
        })
        setResponse(res.data)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchData()

    // 清除此reqeust減少暫存
    return () => controller.abort()

    // eslint-disable-next-line
  },[reload])

  return [response, error, loading, refetch]
}

// 使用axios時會用到的基礎設定
