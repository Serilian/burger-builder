import React from 'react';
import Logo from '../../Logo/Logo'
import NavigationItems from '../../Navigation/NavigationItems/NavigationItems'
import './SideDrawer.scss'
import Backdrop from '../../UI/Backdrop/Backdrop';

const sideDrawer = (props) => {

    let attachedClasses = ['side-drawer', 'closed'];

    if (props.open) {
        attachedClasses = ['side-drawer', 'open']
    }


    return (
        <>
            <Backdrop show={props.open} clicked={props.closed}/>
            <div className={attachedClasses.join(' ')}>
                <Logo/>
                <nav>
                    <NavigationItems/>
                </nav>
            </div>
        </>
    )
};

export default sideDrawer;