import { useState, useEffect } from 'react'

export const useFetch = (url) => {
    const [data, setData] = useState({})
    const [loading, setLoading] = useState(true)
    const [dummyReload, setDummyReload] = useState(0)

    useEffect(() => {
        fetch(url).then(async response => {
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