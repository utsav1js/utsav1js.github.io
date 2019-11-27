import React from 'react';
import './Header.css';
import logo from '../../assets/logo.png';

const Header = () => {
    return <header>
        <div className="header-content">
            <div className="image-container">
            <img src={logo} className="app-logo" alt="logo" />
            </div>
        </div>
    </header>
}

export default Header;