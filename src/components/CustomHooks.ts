import { useState, useEffect } from 'react'
import axios, { type AxiosResponse } from 'axios'

interface FetchResult<T> {
  data: T | null
  loading: boolean
}

const useFetch = <T>(url: string): FetchResult<T> => {
  const [data, setData] = useState<T | null>(null)
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      try {
        const response: AxiosResponse<T> = await axios.get(url)
        setData(response.data)
        setLoading(false)
      } catch (error) {
        console.error('Error fetching data:', error)
        setLoading(false)
      }
    }
    void fetchData()
  }, [url])

  return { data, loading }
}

export default useFetch
