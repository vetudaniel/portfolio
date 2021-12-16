import React from 'react'
import './About.css'
import img from '../utils/coverfoto.jpg'

export function About() {
    return (
        <div className="wrap">
            <img src={img} style={{width:250, borderRadius:'35px'}} alt="devFoto"/>
            <h1>About Me</h1>
            <p>I am a self-taught web developer</p>
        </div>
    )
}
