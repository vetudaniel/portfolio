import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import {Nav} from './Components/Nav.js'
import './App.css';
import {ReactComponent as Stack} from './utils/qwe.svg';


import ReactAnime from 'react-animejs'

const {Anime} = ReactAnime









function App() {




  return (
    <div className="App">
      {/* NAV */}
      <Nav/>
      {/* TOP SVG */}
      <div className="custom-shape-divider-top-1639539555">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="shape-fill"></path>
        </svg>
      </div>
      {/* BOT SVG */}
      <div className="custom-shape-divider-bottom-1639539052">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
        </svg>
      </div>


     <div className="wrap">
      
      <div className="introContainer" >
          <h1>Hi!</h1><span className="emoji">&#128075;</span>
        </div>
        
        <p className="name">My name is <span className="D">D</span>aniel <span className="V">V</span>etu and I am an aspiring self-taught web developer.</p>
        <h3>I am currently learning the PERN Stack.</h3>

        <div className="stack">
        <Stack id="stack"/>
        </div>
        
        
        <div className="socialsWrap">
          <FontAwesomeIcon icon={faLinkedin} className="icon"></FontAwesomeIcon>
          <FontAwesomeIcon icon={faGithub} className=" icon1"></FontAwesomeIcon>
        </div>
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
  );
  
}


export default App;
