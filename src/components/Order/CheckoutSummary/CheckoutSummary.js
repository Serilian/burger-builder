import './CheckoutSummary.scss';
import React from 'react';
import  Burger from '../../Burger/Burger'

const checkoutSummary = (props) => {
    return (
        <div className="checkout-summary">
            <h1>We hope it tastes great!</h1>
            <div className="checkout-summary__preview">
                <Burger ingredients={props.ingredients}/>
            </div>
            <div className="button-list">
                <button onClick={props.onCheckoutContinue} className='Success' >CONTINUE</button>
                <button onClick={props.onCheckoutCancel} className="Danger" >CANCEL</button>
            </div>
        </div>
    );
};

export default checkoutSummary;