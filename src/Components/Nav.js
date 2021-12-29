import React, { useState } from 'react';
import './Nav.css'
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'



export function Nav() {
    const [sidebar, setSidebar] = useState(true)
    
    const showSidebar = () => setSidebar(!sidebar);

    return (
        
        <div className={sidebar ? "navigation" : "navigation active"}>
            <div className="lines">
                <div className="lineswrap" onClick={showSidebar}>
                    <div className={ sidebar ? 'line line1' : "line line1 active"} ></div>
                    <div className={ sidebar ? 'line line2' : "line line2 active"} ></div>
                    <div className={ sidebar ? 'line line3' : "line line3 active"} ></div>
                </div>
              
            </div>
            <ul className="navlinks">
                <Link to="/"><li onClick={showSidebar}>Home</li></Link>
                <Link to="/about"><li onClick={showSidebar}> About</li></Link>
                <Link to="/projects"><li onClick={showSidebar}> Projects</li></Link>
                <Link to="/contact"><li onClick={showSidebar}> Contact</li></Link>
                <div className="socials">
                    <a href="https://www.linkedin.com/in/daniel-ioan-vetu-50baab20a/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedin} className="icon"></FontAwesomeIcon></a>
                    <a href="https://github.com/vetudaniel" target="_blank" rel="noreferrer"> <FontAwesomeIcon icon={faGithub} className=" icon1"></FontAwesomeIcon></a>
                </div>
            </ul>
            
            
        </div>
       
       
          
      
    )
}


