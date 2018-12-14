import React from 'react';
import './OrderSummary.scss'

const orderSummary = (props) => {

    const ingredientSummary = Object.keys(props.ingredients)
        .map(key =>{
            return (
                <li key={key}><span className="ingredient-label">{key}</span>: {props.ingredients[key]}</li>)
        });

    return (
        <div className="order-summary">
            <h3>Your order</h3>
            <p>Delicious Burger with following ingredients:</p>
            <ul className="order-summary__list">
                {ingredientSummary}
            </ul>
            <h4>Total price: {props.totalPrice.toFixed(2)} USD</h4>
            <h4>Proceed to checkout ?</h4>
            <div className="button-list">
            <button className="Success" onClick={props.continueClicked}>Yes</button>
            <button className="Danger" onClick={props.backClicked}>Go back</button>
            </div>
        </div>
    )
};

export default orderSummary;