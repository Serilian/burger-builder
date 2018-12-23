import './CheckoutSummary.scss';
import React from 'react';
import  Burger from '../../Burger/Burger'

const orderSummary = (props) => {
    return (
        <div className="checkout-summary">
            <h1>We hope it tastes great!</h1>
            <div className="checkout-summary__preview">
                <Burger ingredients={props.ingredients}/>
            </div>
            <div className="button-list">
                <button className='Success' >CONTINUE</button>
                <button className="Danger" >CANCEL</button>
            </div>
        </div>
    );
};

export default orderSummary;