import React from 'react'
import bmw from './bmw.png'
import { useNavigate } from 'react-router-dom'
export default function Header({ a, b, c, d }) {
    let navigate = useNavigate()

    let handlehme = () => {
        navigate('/')
    }
    let handlesignin=()=>{
        navigate('/Signin')
    }
    let handlesignup=()=>{
        navigate('/Signup')
    }
    let handleprofl=()=>{
        navigate('/Profile')
    }
    let handlemenue=()=>{
        navigate('/Menu')
    }
    let handleabou=()=>{
        navigate('/About')
    }
    return (
        <div className='Header'>
            <div className="pick">
                <img src={bmw} alt="Something went wrong" />
            </div>
            <div className="links">
                <ul>
                    <li onClick={handlehme}>{a}</li>
                    <li onClick={handlemenue}>{b}</li>
                    <li onClick={handleprofl}>{c}</li>
                    <li onClick={handleabou}>{d}</li>
                </ul>

            </div>
            <div className="btn">
                <button onClick={handlesignup} >Signup</button>
                <button onClick={handlesignin}>Signin </button>
            </div>
        </div>
    )
}
