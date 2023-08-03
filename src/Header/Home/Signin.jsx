import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Signin() {
  let navigate=useNavigate()
  let handlesignpro=()=>{
    navigate('/Profile')
  }
  let handleforgete=()=>{
    navigate('/Signup')
  }
  return (
    <div className='Signin'>
        <h1 id='welcome'>Welcome back!</h1>
         <div className="main-sign">
          <h1>Sign in</h1>
            <p>Stay updated on your professional world</p>
            <div className="info">
                <input type="text" name="" id="qwerty" placeholder='Username or email' /> <br />
                <input type="text" name="" id="qwertyu" placeholder='password' />
            </div>
            {/* <div className="login-btn">
                <div className="check1">
                </div>
                <div className="check2">
                </div>
            </div>   */}
          <p id='parag' onClick={handleforgete}>  forget password</p>
            <div className="links-inter">
                <button id='clrblue' onClick={handlesignpro}>sign in</button> <br />

            </div>
          </div>
    </div>
  )
}
