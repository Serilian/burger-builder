import React from 'react';
import './Toolbar.scss'
import Logo from '../../Logo/Logo'

const toolbar = (props) => {
    return (
        <header className="Toolbar">
            <div>MENU</div>
            <Logo/>
            <nav>
                ...
            </nav>
        </header>
    )
};

export default toolbar;