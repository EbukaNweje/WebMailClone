import React, { useEffect, useState } from 'react'
import "./login.css"
import { useTranslation } from "react-i18next";
import i18next from 'i18next';
import cookies from 'js-cookie'


const languages = [
  {
    code: "fr",
    name: "Français",
  },
  {
    code: "en",
    name: "English",
  },
  {
    code: "cs",
    name: "čeština ",
  },
  {
    code: "ar",
    name: "العربية ",
    dir: "rtl"
  },
  {
    code: "da",
    name: "dansk",
  },
  {
    code: "de",
    name: "Deutsch",
  },
  {
    code: "el",
    name: "Ελληνικά",
  },
  {
    code: "es",
    name: "español",
  },
  {
    code: "es_419",
    name: "español latinoamericano",
  },
  {
    code: "es_es",
    name: "español de España",
  },
  {
    code: "fi",
    name: "suomi",
  },
  {
    code: "fi",
    name: "Filipino",
  },
  {
    code: "fi",
    name: "עברית",
  },
  {
    code: "fi",
    name: "magyar",
  },
  {
    code: "fi",
    name: "Bahasa Indonesia",
  },
  {
    code: "fi",
    name: "italiano",
  },
  {
    code: "fi",
    name: "日本語",
  },
  {
    code: "fi",
    name: "한국어",
  },
  {
    code: "fi",
    name: "Bahasa Melayu",
  },
  {
    code: "fi",
    name: "norsk bokmål",
  },
  {
    code: "fi",
    name: "Nederlands",
  },
  {
    code: "fi",
    name: "polski",
  },
  {
    code: "fi",
    name: "português",
  },
  {
    code: "fi",
    name: "português do Brasil",
  },
  {
    code: "fi",
    name: "română",
  },
  {
    code: "fi",
    name: "русский",
  },
  {
    code: "fi",
    name: "svenska",
  },
  {
    code: "fi",
    name: "ไทย",
  },
  {
    code: "fi",
    name: "Türkçe",
  },
  {
    code: "fi",
    name: "українська",
  },
  {
    code: "fi",
    name: "Tiếng Việt",
  },
  {
    code: "fi",
    name: "中文",
  },
  {
    code: "fi",
    name: "中文（台湾）",
  },
]

const Login = () => {

  const { t } = useTranslation()
  const currentLanguageCode = cookies.get('i18next') || 'en'
  const currentLanguage = languages.find(l => l.code === currentLanguageCode)

  useEffect( ()=>{
    document.body.dir = currentLanguage.dir || 'ltr'
    document.title = t('title')
  },[currentLanguage, t])

  const [showLocales, setShowLocales] = useState(true)

  return (
    <>
    
        <div className='Login'>
            <div className='first'>
              <div className='login-status'>
                <div className='login-status-icon'></div>
                <div className='login-status-message'>
                  {t("login-status-message")}
                </div>
              </div>
                {
                  showLocales ? <div className='firstBottom'>
                  <div className='webmail-logo'></div>
                  <div className='login-form'>
                    <div className='login-form-input-container'>
                      <label>{t("email_address")}</label>
                      <div className='login-form-input'>
                        <div className='login-form-input-userlogo'></div>
                        <input type='text'
                          placeholder={t("enter_email_address")}
                        />
                      </div>
                    </div>
                    <div className='login-form-input-container'>
                      <label>{t("password")}</label>
                      <div className='login-form-input'>
                        <div className='login-form-input-passwordlogo'></div>
                        <input type='password'
                          placeholder={t("enter_password")}
                        />
                      </div>
                    </div>
                  </div>
                  <button className='login-button'>{t("login")}</button>
                  <div className='login-reset-password'>{t("reset_password")}</div>
                </div> : null
                }
            </div>

            {
              showLocales ? <div className='second'>
                <ul>
                  <li onClick={()=> i18next.changeLanguage(languages[1].code)}> { languages[1].name} </li>
                  <li onClick={()=> i18next.changeLanguage(languages[3].code)}> { languages[3].name} </li>
                  <li onClick={()=> i18next.changeLanguage(languages[2].code)}> { languages[2].name} </li>
                  <li onClick={()=> i18next.changeLanguage(languages[4].code)}> { languages[4].name} </li>
                  <li onClick={()=> i18next.changeLanguage(languages[5].code)}> { languages[5].name} </li>
                  <li onClick={()=> i18next.changeLanguage(languages[6].code)}> { languages[6].name} </li>
                  <li onClick={()=> i18next.changeLanguage(languages[7].code)}> { languages[7].name} </li>
                  <li onClick={()=> i18next.changeLanguage(languages[8].code)}> { languages[8].name} </li>
                  <li onClick={()=> i18next.changeLanguage(languages[9].code)}> { languages[9].name} </li>
                  <li style={{fontWeight: "600", fontSize: "20px"}} onClick={()=>setShowLocales(false)}>...</li>
                </ul>
              </div> : null
            }

            {
              !showLocales ? <div className='list-of-locales'>
                <div className='locales-top'>
                  <div>{t("select_locale")}</div>
                  <div className='close-locales' onClick={()=> setShowLocales(true)}>{t("close_locale")}</div>
                </div>
                <div className='locales-bottom'>
                  {
                    languages.map(({ code, name})=> (

                      <div className='locale-cell' onClick={()=> {i18next.changeLanguage(code)}}>{name}</div>
                    ))
                  }
                </div>
              </div>: null
            }

            {
              showLocales ? <div className='second2'>
              <div>Select a locale:</div>
              <button className='locale-button' onClick={()=> setShowLocales(false)}>English</button>
            </div> : null
            }

            <div className='third'>
              <div className='login-footer-logo'></div>
              <div style={{fontSize: "10px"}}>Copyright© 2024 cPanel, L.L.C.</div>
              <div className='privacy-policy'>Privacy Policy</div>
            </div>
        </div>
    
    </>
  )
}

export default Login;