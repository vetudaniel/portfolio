import React from 'react'
import './MobileNavigation.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faHome, faInfoCircle, faAddressBook } from '@fortawesome/free-solid-svg-icons'

export function MobileNavigation() {
    return (
        <>
        <div className="mobNav">
        <FontAwesomeIcon icon={faHome} className=" mobNavIcon"></FontAwesomeIcon>
        <FontAwesomeIcon icon={faInfoCircle} className=" mobNavIcon"></FontAwesomeIcon>
        <FontAwesomeIcon icon={faAddressBook} className=" mobNavIcon"></FontAwesomeIcon>
        </div>
        </>
    )
}


