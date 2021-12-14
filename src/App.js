import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import './App.css';
import stack from "./stack.jpg";
import ReactAnime from 'react-animejs'
const {Anime} = ReactAnime









function App() {




  return (
    <div className="App">
      <div className="custom-shape-divider-top-1639464226">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M649.97 0L550.03 0 599.91 54.12 649.97 0z" className="shape-fill"></path>
        </svg>
      </div>
      <div className="introContainer" >
        <h1>Hi!</h1><span className="emoji">&#128075;</span>
        

      </div>
      
      <p >My name is <span className="D">D</span>aniel <span className="V">V</span>etu and I am an aspiring self-taught web developer.</p>
      <h3>I am currently learning the PERN Stack.</h3>

      <div className="stack">
        <img src={stack} alt="stack" style={{opacity:0}}/>
      </div>
      
      <div className="socialsWrap">
        <FontAwesomeIcon icon={faLinkedin} className="icon"></FontAwesomeIcon>
        <FontAwesomeIcon icon={faGithub} className="icon1"></FontAwesomeIcon>
      </div>


      <div className="custom-shape-divider-bottom-1639463989">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="100 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
        </svg>
      </div>
     
      
      
      
      
      
      <Anime
           initial={[
             {
               targets:'.introContainer',
               translateY:25
             },
         
            { //2nd
              targets: "p",
              opacity:1,
             
            },
            {
              targets:'h3',
              opacity:1,
            },
            { //3rd
              targets: "img",
              opacity:1
            },
            {
              targets:'.socialsWrap',
              opacity:1
            }
            
          ]}
    >
    
    </Anime>
    </div>
  );
  
}


export default App;
