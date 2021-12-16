
import {ReactComponent as Stack} from '../utils/qwe.svg';
import React from 'react'
import './Home.css'
import ReactAnime from 'react-animejs'

const {Anime} = ReactAnime

export  function Home() {
    return (
        <div className="wrap" >
      
        <div className="introContainer">
          <div className="hi">
            <h1>Hi!</h1><span className="emoji">&#128075;</span>
          </div>
          
          <div className="hero">
            <p className="name">My name is <span className="D">D</span>aniel <span className="V">V</span>etu and I am an aspiring self-taught web developer.</p>
              <h3>I am currently learning the Pern stack </h3>
          </div>
        </div>
      
        <div className="stack">
         <Stack id="stack"/>
        </div>
        
        
       

         {/* ANIMATIONS */}
      <Anime
           initial={[
             {
               targets:'.introContainer',
               translateY:25
             },
         
            { //2nd
              targets: ".name",
              opacity:1,
             
            },
            {
              targets:'h3',
              opacity:1,
            },
            {
              targets:'.stack',
              opacity:1,
              translateY:35
            },
            {
              targets:'.socialsWrap',
              opacity:1
            },
            {
              targets:'.icon, .icon1',
              opacity:1
            }
            
          ]}
    >
    
    </Anime>
     </div>

     
    )
}
