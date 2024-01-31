import React from 'react'
import "./login.css"

const Login = () => {
  return (
    <>
    
        <div className='Login'>
            <div className='first'>
              <div className='login-status'>
                <div className='login-status-icon'></div>
                <div className='login-status-message'>
                  The desired locale has been saved to your browser. 
                  To change the locale in this browser again, select another locale on this screen.
                </div>
              </div>
                <div className='firstBottom'>
                  <div className='webmail-logo'></div>
                  <div className='login-form'>
                    <div className='login-form-input-container'>
                      <label>Email Address</label>
                      <div className='login-form-input'>
                        <div className='login-form-input-userlogo'></div>
                        <input type='text'
                          placeholder='Enter your email address.'
                        />
                      </div>
                    </div>
                    <div className='login-form-input-container'>
                      <label>Password</label>
                      <div className='login-form-input'>
                        <div className='login-form-input-passwordlogo'></div>
                        <input type='password'
                          placeholder='Enter your email password.'
                        />
                      </div>
                    </div>
                  </div>
                  <button className='login-button'>Login</button>
                  <div className='login-reset-password'>Reset Password</div>
                </div>
            </div>

            <div className='second'></div>
            <div className='second2'>
              <div>Select a locale:</div>
              <button className='locale-button'>English</button>
            </div>

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