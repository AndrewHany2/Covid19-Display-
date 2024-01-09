import { useState, useEffect } from 'react'
import axios, { type AxiosResponse } from 'axios'

// Define the type for the fetched data
interface FetchResult<T> {
  data: any
  loading: boolean
  error: unknown
  fetch: (url: string) => Promise<void> // Function to trigger data fetching
}

// Custom invokable hook for data fetching with Axios
const useFetch = <T>(): FetchResult<T> => {
  const [data, setData] = useState<T | null>(null)
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<unknown>(null)

  const fetch = async (url: string): Promise<void> => {
    setLoading(true)
    try {
      const response: AxiosResponse<T> = await axios.get(url)
      setData(response.data)
    } catch (error) {
      setError(error)
    } finally {
      setLoading(false)
    }
  }

  return { data, loading, error, fetch }
}

export default useFetch
