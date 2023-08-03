import React from 'react'
import { useNavigate } from 'react-router-dom'
export default function Signup() {
  let   navigate=useNavigate()
    let handlecross=()=>{
        navigate('/Home')
      
    }
    let handlelogg=()=>{
        navigate('/Signin')
    }
  return (
    <div className='Signup'>
         <div className="parent" style={{display:'flex',justifyContent:'space-around',alignItems:'center',background:'wheat',padding:'100px',marginTop:'50px',borderRadius:'8px',boxShadow:'0 0 5px 2px gray',position:'relative'}}>
           <div className="Signup-page">
            <button id='cross' style={{position:'absolute',top:'10px',left:'10px'}} onClick={handlecross}>X</button>
                
                <div className="info">
                    <input type="text" name="" id="qwerty" placeholder='Username or email' /> <br />
                    <input type="text" name="" id="qwertyu" placeholder='password' />
                </div>
                <div className="login-btn">
                    <div className="check1">
                        <input type="checkbox" name="" id="" /> Remember me
                    </div>
                    <div className="check2">
                        <button id='blue' onClick={handlelogg}>Login</button>

                    </div>
                </div>
                <div className="register">
                    <div className="p1">Register now</div>
                    <div className="p2">Forget Password ?</div>
                </div>
                <div className="links-inter">
                <button id='clrblue'>Login with Facebook</button> <br />
                <button id='clrlight'>Login with Twitter</button> <br />
                <button id='red'>Login with Google</button>
            </div>
            </div>
            <div className="back-pick">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPZY7hs0ERSpaRnkXclEgSIISWo7OU_AvPqxC54TS_aX5dBmk4Tof2Mhaf2W0idLGAK80&usqp=CAU" alt="Something went wrong" />
            </div>
           </div>
          
    </div>
  )
}
