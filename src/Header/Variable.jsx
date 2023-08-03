import React from 'react'
import Header from './Header'

export default function Variable() {
    const a = "Home"
    const b = "Menu"
    const c = "Profile"
    const d = "About us"
    return (
        <div className='Variable'>
            <Header a={a} b={b} c={c} d={d} />
        </div>
    )
}
