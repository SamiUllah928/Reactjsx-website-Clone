import React, { useState } from 'react'

export default function Mainpage({ e, f, g, h }) {
    let [set, useset] = useState(true)
    let [vara, setvara] = useState(true)

    let toggle = set === true ? 'Hide' : 'Show'
    let picked = vara === true ? 'Hide' : 'Show'
    let handlePerform = () => {
        useset(!set)
    }
    let handlepicked=()=>{
        setvara(!vara)
    }
    return (
        <div className='Mainpage'>
            <div className="export">
                <div className="property" style={{ visibility: set === true ? 'visible' : 'hidden' }}>
                    <h1>{e}</h1>
                    <h2>{f}</h2>
                    <p>{g}</p>
                    <h5>{h}</h5>
                </div>
            <button onClick={handlePerform} id='img-btn'>{toggle}</button>

            </div>
           <div className="second">
           <div className="main-pick" style={{visibility: vara===true ? 'visible' : 'hidden'}}>
                <img src="https://www.topgear.com/sites/default/files/2022/09/1-BMW-3-Series.jpg" alt="" />
            </div>
            <button onClick={handlepicked} id='img-btn'>{picked}</button>

           </div>

        </div>
    )
}
