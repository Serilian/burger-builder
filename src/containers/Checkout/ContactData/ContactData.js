import React, {Component} from 'react';
import './ContactData.scss';
import axios from '../../../axios-orders';
import Spinner from '../../../components/UI/Spinner/Spinner'

class ContactData extends Component {

    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postalCode: ''
        },
        loading: false
    };

    orderHandler = (e) => {
        e.preventDefault();
        console.log(this.state.ingredients);
        this.setState({loading: true});
        const {ingredients} = this.state;
        const order = {
            ingredients: ingredients,
            price: this.props.price.toFixed(3),
            customer: {
                name: this.state.name,
                address: this.state.address,
                email: this.state.email
            },
            delivery: 'ASAP'
        };
        axios.post('/orders.json', order)
            .then(resp => {
                console.log(resp);
                this.setState({
                    loading: false
                });
                this.props.history.push('/');
            })
            .catch(err => {
                this.setState({
                    loading: false
                })
            });
    };

    render() {
        let form = (
            <form>
                <input name="name" placeholder="your name"/>
                <input name="email" placeholder="your email" type="email"/>
                <input name="street" placeholder="street"/>
                <input name="postalCode" placeholder="post code"/>
                <button onClick={this.orderHandler} className="Success">Submit</button>
            </form>
        );
        if (this.state.loading) {
            form = (<Spinner/>)
        }

        return (
            <div className="ContactData">
                <h4>Enter your contact data</h4>
                {form}
            </div>
        );
    }
}

export default ContactData;