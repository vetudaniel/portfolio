import React from 'react'
import './About.css'
import OwlCarousel from 'react-owl-carousel';  

import 'owl.carousel/dist/assets/owl.carousel.css';  

import 'owl.carousel/dist/assets/owl.theme.default.css';  

import img from '../utils/coverfoto.jpg'


export function About() {
  
    return (
        <div className="wrap">
            <div className="hero">
                <OwlCarousel>
                    <img src={img} alt="lol"/>
                </OwlCarousel>
            </div>
        </div>
    )
}
