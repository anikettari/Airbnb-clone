import React from 'react'
import SearchIcon from '@material-ui/icons/Search';
import LanguageIcon from '@material-ui/icons/Language';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {Avatar} from '@material-ui/core';
import "./Header.css"
import {Link } from "react-router-dom";

function Header() {
    return (
        <div className="header">
        <Link to="/">
        <img  className="header__logo" src="https://1000logos.net/wp-content/uploads/2017/08/Airbnb-logo.jpg" alt="airbnb-logo" />
        </Link>
        <div className="header__center">
        <input type="text" />
        <SearchIcon />
        </div>
        <div className="header__right">
        <p>Become a Host</p>
        <LanguageIcon />
        <ExpandMoreIcon />
        <Avatar />

        </div>
            
        </div>
    )
}

export default Header
