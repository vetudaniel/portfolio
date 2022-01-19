import React from 'react'
import './MobileNavigation.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faInfoCircle, faAddressBook, faWrench} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

export function MobileNavigation() {
    return (
        <>
        <div className="mobNav">
        <Link to="/"><FontAwesomeIcon icon={faHome} className=" mobNavIcon"></FontAwesomeIcon><span className="mobmenuspan">Home</span></Link>
        <Link to="/about"><FontAwesomeIcon icon={faInfoCircle} className=" mobNavIcon"></FontAwesomeIcon><span className="mobmenuspan">About</span></Link>
        <Link to="/contact"><FontAwesomeIcon icon={faAddressBook} className=" mobNavIcon"></FontAwesomeIcon><span className="mobmenuspan">Contact</span></Link>
        <Link to="/projects"><FontAwesomeIcon icon={faWrench} className=" mobNavIcon"></FontAwesomeIcon><span className="mobmenuspan">Projects</span></Link>
        </div>
        </>
    )
}


