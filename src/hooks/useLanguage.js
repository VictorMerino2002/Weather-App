import { useEffect, useState } from "react"

export const useLanguage = (defaultLanguage = 'en') => {
    const [language, setLanguage] = useState(defaultLanguage)

    useEffect(() => {
        const lang = localStorage.getItem('lang')
        if (lang) setLanguage(lang)
    },[])

    return [language, (lang) => {
        setLanguage(lang)
        localStorage.setItem('lang',lang)
    }]
}