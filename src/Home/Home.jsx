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



            <div className="profilio">
                <div className="build">
                    <h1 id='black'>Special Board BMW</h1>
                    <p>Bayerische Motoren Werke AG, abbreviated as BMW, is a German multinational manufacturer of luxury vehicles and motorcycles headquartered in Munich, Bavaria, Germany. The company was founded in 1916 as a manufacturer of aircraft engines, which it produced from 1917 to 1918 </p>
                </div>
                <div className="build-up">
                    <h1 id='black'>Contact Us</h1>
                    <p>Address: GM Market Place #34 Street BB Colony</p>
                    <p>Phone: +234-(456)-789</p>
                    <p>ShowCase: #000 334 643 975</p>
                </div>
                <div className="lenks">
                    <h1 id='black'>For more Updates</h1>
                    <ul>
                        <li><i class="fa-brands fa-facebook"></i> Facebook</li>
                        <li> <i class="fa-brands fa-instagram"></i> Instagram</li>
                        <li> <i class="fa-brands fa-twitter"></i> Twitter</li>
                        <li> <i class="fa-brands fa-linkedin"></i> Linkedin</li>
                    </ul>
                </div>

            </div>
        </div>
    )
}
