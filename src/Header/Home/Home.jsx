import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Home() {
    let navigate=useNavigate()
    let handleorder=()=>{
        navigate('/Signup')
    }
    return (
        <div className='Home'>
            <div className="banner">
                <img src="https://cdn.dribbble.com/users/1864688/screenshots/5025505/bmw_banner_4x.jpg" alt="" />

                <div className="absol">
                   <h1>BMW Ranks #1 In Consumer Reports' 2023 Annual Auto Brand Ranking</h1>
                </div>

            </div>
            <div className="overwrite">
                <div className="write">
                    <h1>Rating BMW Q5,Q3</h1>
                    <p> 1: Reliability of BMW Cars at First Glance</p>
                    <p>2: BMW often ranks in the top ten </p>
                    <p>3: Technology, luxury, and safety</p>
                    <button id='order'  onClick={handleorder}>Order Now</button>

                </div>
                <div className="write">
                    <h1>Rating BMW Q7,Q9</h1>
                    <p> 1: Reliability of BMW Cars at First Glance</p>
                    <p>2: BMW often ranks in the top ten </p>
                    <p>3: Technology, luxury, and safety</p>
                    <button id='order' onClick={handleorder}>Order Now</button>
                </div>
            </div>
        </div>
    )
}
