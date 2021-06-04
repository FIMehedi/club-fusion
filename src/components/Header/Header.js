import React from 'react';
import './Header.css'
import headerBgImg from '../../img/football-stadium-thumbnail.jpg'

const Header = ({ badge, stadium }) => {

    const headerBg = {
        backgroundImage: `url(${stadium ? stadium : headerBgImg})`, // if club has own stadium then show it header
        backgroundPosition: stadium && 'center'
    }

    return (
        <header className="header">
            <div className="header-bg" style={headerBg}></div>
            {
                badge
                    ? // if badge loaded
                    <div className="logo"><img src={badge} alt="" /></div>
                    : // else
                    <h1 className="logo">Club Fusion</h1>
            }
        </header>
    );
};

export default Header;