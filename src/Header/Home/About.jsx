import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function About() {
    let navigate= useNavigate()
    let handleherecl=()=>{
        navigate('/Signup')
    }
  return (
    <div className='About'>
        <div className="include">
            <h1>
In contrast to a landing page, your About Us page is the ideal place to accommodate a number of objectives:</h1>
<p>Communicate the story of your business and why you started it.
Describe the customers or the cause that your business serves.
Explain your business model or how your products are made.Communicate the story of your business and why you started it.
Describe the customers or the cause that your business serves.
Explain your business model or how your products are made.Communicate the story of your business and why you started it.
Describe the customers or the cause that your business serves.
Explain your business model or how your products are made.Communicate the story of your business and why you started it.
Describe the customers or the cause that your business serves.
Explain your business model or how your products are made.Communicate the story of your business and why you started it.
Describe the customers or the cause that your business serves.
Explain your business model or how your products are made.</p>
<button id='here' onClick={handleherecl}>Click here</button>
        </div>
         <div className="menu-img">
            <img src="https://i.pinimg.com/736x/02/f3/5d/02f35d5d9afdd899e7eda002c22d3b4d.jpg" alt="" />
            <img src="https://m.media-amazon.com/images/I/711SyP1Qk+S.jpg" alt="" />
            <img src="https://preview.thenewsmarket.com/Previews/GNML/StillAssets/1920x1440/580025_v2.jpg" alt="" />
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
