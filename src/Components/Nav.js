
import './Nav.css'
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub} from '@fortawesome/free-brands-svg-icons'



export function Nav({ sidebar,  overlay, menuToggle }) {
   

    return (
    <>
        <div className={sidebar ? "navigation" : "navigation active"}>
            <div className="lines">
                <div className="lineswrap" onClick={menuToggle} >
                    <div className={ sidebar ? 'line line1' : "line line1 active"} ></div>
                    <div className={ sidebar ? 'line line2' : "line line2 active"} ></div>
                    <div className={ sidebar ? 'line line3' : "line line3 active"} ></div>
                </div>
               
                    <select name="language" id="language" form="languageform">
                        <option value="English">English</option>
                        <option value="German">German</option>
                    </select>
                
              
              
            </div>
            <ul className="navlinks">
                <Link to="/"><li onClick={menuToggle}>Home</li></Link>
                <Link to="/about"><li onClick={menuToggle}> About</li></Link>
                <Link to="/projects"><li onClick={menuToggle}> Projects</li></Link>
                <Link to="/contact"><li onClick={menuToggle}> Contact</li></Link>
                
            </ul>
            <div className="socials">
                    <a href="https://www.linkedin.com/in/daniel-ioan-vetu-50baab20a/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedin} className="icon"></FontAwesomeIcon></a>
                    <a href="https://github.com/vetudaniel" target="_blank" rel="noreferrer"> <FontAwesomeIcon icon={faGithub} className=" icon1"></FontAwesomeIcon></a>
            </div>
           
         
         
        </div>
            <div className={overlay ? 'overlay active' : 'overlay'} onClick={menuToggle}></div>
    </>
       
          
      
    )
}


