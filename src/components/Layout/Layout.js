import React from 'react';
import  './Layout.scss'
import Toolbar from '../Navigation/Toolbar/Toolbar'

const layout = (props) => (
    <>
        <Toolbar />
        <div>Toolbar, SideDrawer, Backdrop</div>
        <main className="Content">
            {props.children}
        </main>
    </>
);

export default layout;