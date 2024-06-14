/* eslint-disable react/prop-types */
import { useEffect, useState } from "react"
import { languages } from "../services/languages"
import "./SelectLanguage.css"

export const SelectLanguage = ({setLanguage, themeClass}) => {

    const [selectedLanguage, setSelectedLanguage] = useState('')
    const [modal,setModal] = useState(false)

    useEffect(() => {
        if (selectedLanguage) return

        const storedLang = localStorage.getItem('lang')

        if (storedLang) setSelectedLanguage(storedLang)
    },[selectedLanguage])

    const handleChange = (event) => {
        const newLanguage = event.target.value
        setSelectedLanguage(newLanguage)
        setLanguage(newLanguage)
    } 


    return (
        <>
        <button className="settingsBtn" onClick={() => setModal(!modal) }><i className="fa-solid fa-sliders"></i></button>

        {modal && (
            <div className={`selectLanguage ${themeClass}`}>
            <label htmlFor="language">Select Language:</label>
            <select id="language" name="language" value={selectedLanguage} onChange={handleChange}>
                {languages.map((language) => (
                    <option key={language.code} value={language.code} onClick={() => setLanguage(language.code)}>{language.name}</option>
                ))}
            </select>
            <button onClick={() => setModal(false)}><i className="fa-solid fa-xmark"></i></button>
            </div>
        )}
        </>
    )
}