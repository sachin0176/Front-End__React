import React from "react";
import './Header.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTruck } from "@fortawesome/free-solid-svg-icons";
import {faLinkedin, faInstagram, faFacebook, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Header =()=>{

    return <div className="header">
        <div className="header-left">

            <p><FontAwesomeIcon className="icon" icon={faTruck} /></p>
            <p>Free Delivery</p>
            <p>|</p>
            <p>Return Policy</p>
            </div>
        
    

      <div className="header-right">
        <p>Login</p>
        <p>Follow us</p>
            <FontAwesomeIcon className="icon" icon={faInstagram} />
            <FontAwesomeIcon className="icon" icon={faFacebook} />
            <FontAwesomeIcon className="icon" icon={faTwitter} />
            <FontAwesomeIcon className="icon" icon={faSearch} />
            <FontAwesomeIcon className="icon" icon={faLinkedin} />
            
        </div>
    </div>
}
export default Header;