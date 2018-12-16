import React, {Component} from 'react';
import './OrderSummary.scss'

class OrderSummary extends Component {

    render() {
        const ingredientSummary = Object.keys(this.props.ingredients)
            .map(key => {
                return (
                    <li key={key}><span className="ingredient-label">{key}</span>: {this.props.ingredients[key]}</li>)
            });

        return (
            <div className="order-summary">
                <h3>Your order</h3>
                <p>Delicious Burger with following ingredients:</p>
                <ul className="order-summary__list">
                    {ingredientSummary}
                </ul>
                <h4>Total price: {this.props.totalPrice.toFixed(2)} USD</h4>
                <h4>Proceed to checkout ?</h4>
                <div className="button-list">
                    <button className="Success" onClick={this.props.continueClicked}>Yes</button>
                    <button className="Danger" onClick={this.props.backClicked}>Go back</button>
                </div>
            </div>
        )
    };
}


export default OrderSummary;