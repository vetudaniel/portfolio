
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
          
          <div className="homeHero">
              <p className="name">My name is <span className="D">D</span>aniel <span className="V">V</span>etu and I am an aspiring self-taught web developer.</p>
              <p className="interests">I am interested in all things tech related but especially in software-developement and anything internet-related.</p>
              <h2>Currently I am learning the PERN Stack.</h2>
          </div>
          <div className="stack">
            <Stack id="stack"/>
          </div>
        </div>
        <Anime
           initial={[
             {
               targets:'.introContainer',
               translateY:25
             },
         
            { 
              targets: ".name ",
              opacity:1,
            },
            { 
              targets: ".interests ",
              opacity:1,
            },
            {
              targets:'h2',
              opacity:1,
            },
            {
              targets:'.stack',
              opacity:1,
              translateY:35
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
