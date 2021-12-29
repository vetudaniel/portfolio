import React from 'react'
import './About.css'
import img from '../utils/coverfoto.jpg'
import ReactAnime from 'react-animejs'
const {Anime} = ReactAnime

export function About() {
    return (
        <div className="wrap">
            <div className="hero">
                <img src={img} alt="hero-img" style={{width:"270px", borderRadius:'1rem'}}/>
                <h1><span className="font">A</span>bout <span className="font">M</span>e</h1>
               
               
            </div>
        </div>
    )
}
