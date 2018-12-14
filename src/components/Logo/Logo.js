import React from 'react';
import burgerLogo from '../../assets/burger-logo.png'
import './Logo.scss'


const logo = (props) => {
    return (
        <div className="logo">
            <img className="logo__image" src={burgerLogo} alt="BurgerBuilder Logo"/>
        </div>

    )
};

export default logo;