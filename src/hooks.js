import { useState, useEffect } from 'react'
import { API_URL } from './util'

export const useFetch = (url) => {
    const [data, setData] = useState({})
    const [loading, setLoading] = useState(true)
    const [dummyReload, setDummyReload] = useState(0)

    useEffect(() => {
        fetch(API_URL + url).then(async response => {
            setLoading(false)
            if (response.ok) {
                setData(await response.json())
            }
        })
    }, [url, dummyReload])

    return {
        data, loading, reload: () => setDummyReload((dummyReload + 1) % 2)
    }
}