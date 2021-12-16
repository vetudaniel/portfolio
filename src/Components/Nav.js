import React, { useState } from 'react';
import './Nav.css'
import { Link } from 'react-router-dom';



export function Nav() {
    const [sidebar, setSidebar] = useState(true)
    const showSidebar = () => setSidebar(!sidebar);

    return (
        <>
        <div className={sidebar ? "navigation" : "navigation active"}>
            <div className="lines">
                <div className="lineswrap" onClick={showSidebar}>
                    <div className="line line1"></div>
                    <div className="line line2"></div>
                    <div className="line line3"></div>
                </div>
                
            </div>
            <ul className="navlinks">
                <Link to="/"><li onClick={showSidebar}>Home</li></Link>
                <Link to="/about"><li onClick={showSidebar}> About</li></Link>
                <Link to="/projects"><li onClick={showSidebar}> Projects</li></Link>
                <Link to="/contact"><li onClick={showSidebar}> Contact</li></Link>
            </ul>



         {/* ANIMATION */}

      
        </div>
        
        </>
    )
}


