import React from 'react'
import './MobileNavigation.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faInfoCircle, faAddressBook } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

export function MobileNavigation() {
    return (
        <>
        <div className="mobNav">
        <Link to="/"><FontAwesomeIcon icon={faHome} className=" mobNavIcon"></FontAwesomeIcon></Link>
        <Link to="/about"><FontAwesomeIcon icon={faInfoCircle} className=" mobNavIcon"></FontAwesomeIcon></Link>
        <Link to="/contact"><FontAwesomeIcon icon={faAddressBook} className=" mobNavIcon"></FontAwesomeIcon></Link>
        </div>
        </>
    )
}


