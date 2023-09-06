import React from 'react'
import { useTranslation } from 'react-i18next'

export default function DropDown() {
    const { t } = useTranslation()
    function changeLanguage(lang: string) {
        localStorage.setItem("locales", lang)
        window.location.reload();
    }
    return (
        <div className="dropdown" style={{ position: 'relative', bottom: '70%', right: '0' }}>
            <button
                className="btn btn-primary dropdown-toggle"
                type="button"
                id="dropdownMenuButton"
                data-mdb-toggle="dropdown"
                aria-expanded="false"
                style={{ backgroundColor: 'blue' }}
            >
                {t('languages')}
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <li style={{ cursor: 'pointer' }}><span onClick={() => {
                    changeLanguage('vi')
                }}
                    className="dropdown-item">VietNamese</span></li>
                <li style={{ cursor: 'pointer' }}><span onClick={() => {
                    changeLanguage('en')
                }}
                    className="dropdown-item">English</span></li>
                <li style={{ cursor: 'pointer' }}><span onClick={() => {
                    changeLanguage('jp')
                }}
                    className="dropdown-item">Japanese</span></li>
            </ul>
        </div>
    )
}
