import React from 'react';
import './Layout.scss'
import Toolbar from '../Navigation/Toolbar/Toolbar'
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

const layout = (props) => (
    <>
        <Toolbar/>
        <SideDrawer/>
        <div>Toolbar, SideDrawer, Backdrop</div>
        <main className="Content">
            {props.children}
        </main>
    </>
);

export default layout;