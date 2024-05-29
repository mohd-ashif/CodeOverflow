import React from 'react'
import { useState } from 'react'
import  icon  from '../../assets/icon.png'
import AboutAuth from './AboutAuth'

const Auth = () => {
  const [isSignup, setIsSignUp] = useState(true)

  const handleSwitch = ()=> {
    setIsSignUp(!isSignup)
  }
  return (
    <>

      <section className='auth-section'>
        <div className="auth-container-2">
        {isSignup && <AboutAuth />}
          {!isSignup && <img src={icon} alt="stack overflow" className='login-logo' />}

          <form >
            {
              isSignup  &&   <label htmlFor="name">
              <h4> Name</h4>
              <input type="text" name='name' id='name' />
            </label>
            }
            <label htmlFor="email">
              <h4> Email</h4>
              <input type="text" name='email' id='email' />
            </label>
            <label htmlFor="password">
              <div style={{ color : "#007ac6", display: "flex", justifyContent:"space-between"}}>
              <h4> Password</h4>
              {!isSignup &&  <h4>forgot password </h4>}

              </div>
             
              <input type="text" name='password' id='password' /> 
              {
                isSignup  && <p style={{color : "#666767" ,  fontSize:"13px"}}> password must be contain at least eight <br />
                 characters, including at least 1 letter and 1 number </p>
              }

            </label>
            {
              isSignup &&  (<label htmlFor='check'><input type="checkbox" id='check'/> 
              <p style={{fontSize:"13px"}}>Opt-in to recieve occasional product updates ,<br /> user reaserch invitaion company announce ment, <br />
               and digests </p>
               </label>)
            }
            
            <button type='submit' className='auth-btn'> {isSignup ? 'Sign up' : "Login"} </button>
            {
              isSignup &&  ( <p style={{color : "#666767" ,  fontSize:"13px"}}> By clicking "Sign up" , you agree to our
                 <span style={{color : "#007ac6"}}> terms of <br /> service </span> 
              , <span style={{color : "#007ac6"}}> privacy policy </span>
                and <span style={{color : "#007ac6"}}> cookie policy </span> 
              </p>)
            }
          </form>
          <p>
          {isSignup ? "Already have an account?" : "Don't have an account?"}
          <button
            type="button"
            className="handle-switch-btn"
            onClick={handleSwitch}
          >
            {isSignup ? "Log in" : "sign up"}
          </button>
        </p>
        </div>

      </section>

    </>

  )
}

export default Auth   