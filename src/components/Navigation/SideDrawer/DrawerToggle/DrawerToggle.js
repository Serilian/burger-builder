import React from 'react';
import './DrawerToggle.scss';

const drawerToggle = (props) => {
    return (
        <div onClick={props.clicked}>MENU</div>
    )
};

export default drawerToggle ;