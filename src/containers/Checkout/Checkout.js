import React, {Component} from 'react';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary'
import {Route} from 'react-router-dom';
import ContactData from "./ContactData/ContactData";

class Checkout extends Component {

    state = {
        ingredients: null,
        price: 0
    };

    componentWillMount() {

        const query = new URLSearchParams(this.props.location.search);
        const ingredients = {};
        for (let entry of query.entries()) {
            if(entry[0] === 'price') {
                this.setState({price: +entry[1]});
            } else {
                ingredients[entry[0]] = +entry[1];
            }
        }

        this.setState({ingredients: ingredients})
    }

    checkoutCancelHandler = () => {
        this.props.history.goBack();
    };

    checkoutContinueHandler = () => {
      this.props.history.replace('/checkout/contact-data');
    };

    render() {
        return (
            <div>
                <CheckoutSummary
                    onCheckoutCancel={this.checkoutCancelHandler}
                    onCheckoutContinue={this.checkoutContinueHandler}
                    ingredients={this.state.ingredients} />
                <Route path={this.props.match.path + "/contact-data"} render={(props)=>(<ContactData ingredients={this.state.ingredients} price={this.state.price} {...props}/>)}/>
            </div>
        );
    }
}

Checkout.propTypes = {};

export default Checkout;