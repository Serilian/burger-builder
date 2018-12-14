import React from 'react';
import './NavigationItems.scss'
import NavigationItem from './NavigationItem/NavigationItem'

const navigationItems = (props) => {
    return (
        <ul className="navigation-items">
            <NavigationItem
                link="/" active>Burger Builder</NavigationItem>
            <NavigationItem
                link="/" active={false}>Checkout</NavigationItem>
        </ul>
    )
};

export default navigationItems;