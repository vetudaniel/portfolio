import React, { useState } from 'react';
import './Nav.css'



export function Nav() {
    const [sidebar, setSidebar] = useState(false)
    const showSidebar = () => setSidebar(!sidebar);

    return (
        <>
        <div className={sidebar ? "navigation" : "navigation"+" active"}>
            <div className="lines">
                <div className="lineswrap" onClick={showSidebar}>
                    <div className="line line1"></div>
                    <div className="line line2"></div>
                    <div className="line line3"></div>
                </div>
                
            </div>
            <ul className="navlinks">
                <li>About</li>
                <li>Projects</li>
                <li>Contact</li>
                
            </ul>



         {/* ANIMATION */}

      
        </div>
        
        </>
    )
}


