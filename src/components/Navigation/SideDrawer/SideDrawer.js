import React from 'react';
import Logo from '../../Logo/Logo'
import NavigationItems from '../../Navigation/NavigationItems/NavigationItems'
import './SideDrawer.scss'

const sideDrawer = (props) => {


    return (
        <div className="side-drawer">
            <Logo />
            <nav>
                <NavigationItems />
            </nav>
        </div>
    )
};

export default sideDrawer;