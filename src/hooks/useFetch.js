import { useState, useEffect } from 'react/cjs/react.development'
const useFetch = ( url ) => {
  const [data, setData] = useState([])

  const getWords = async () => {
    const json = await (await fetch(url)).json()
    setData(json)
  }
  useEffect(() => {
    getWords()
  }, [])
  return data
} 

export default useFetch
