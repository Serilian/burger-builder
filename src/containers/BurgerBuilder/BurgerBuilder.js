import React, {Component} from 'react';
import './BurgerBuilder.scss'
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import axios from '../../axios-orders';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler'


const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.6
};

class BurgerBuilder extends Component {

    constructor(props) {
        super(props);
        this.state = {
            ingredients: null,
            totalPrice: 4,
            purchasable: false,
            purchasing: false,
            loading: false,
            error: false
        };
    }

    componentDidMount() {
        axios.get('https://burger-builder-73852.firebaseio.com/ingredients.json')
            .then(resp => {
                this.setState({ingredients: resp.data});
                console.log(resp.data)
            })
            .catch(error => {
                this.setState({error: true})
                console.log(error)
            });
    }

    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;
        const updatedIngredients = {...this.state.ingredients};
        updatedIngredients[type] = updatedCount;
        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;


        this.setState({
            ingredients: updatedIngredients,
            totalPrice: newPrice
        });
        this.updatePurchaseState(updatedIngredients);
    };

    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        if (oldCount <= 0) {
            return;
        }

        const updatedCount = oldCount - 1;
        const updatedIngredients = {...this.state.ingredients};
        updatedIngredients[type] = updatedCount;
        const priceDeduction = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceDeduction;

        this.setState({
            ingredients: updatedIngredients,
            totalPrice: newPrice
        });
        this.updatePurchaseState(updatedIngredients);
    };

    updatePurchaseState = (updatedIngredients) => {
        const ingredients = {...updatedIngredients};
        const sum = Object.keys(ingredients).map(
            (key) => {
                return ingredients[key];
            }
        )
            .reduce((sum, el) => {
                return sum + el;
            }, 0);

        this.setState({purchasable: sum > 0})

    };

    purchaseHandler = () => {
        this.setState({purchasing: true});
    };

    purchaseCancelHandler = () => {
        this.setState({purchasing: false})
    };

    purchaseContinueHandler = () => {
        // // alert('You bought delicious burger')
        // this.setState({loading: true});
        // const {ingredients} = this.state;
        // const {totalPrice} = this.state;
        // const order = {
        //     ingredients: ingredients,
        //     price: totalPrice.toFixed(3),
        //     customer: {
        //         name: 'Filip',
        //         address: 'Test Address',
        //         email: 'test@test.com'
        //     },
        //     delivery: 'ASAP'
        // };
        // axios.post('/orders.json', order)
        //     .then(resp => {
        //         console.log(resp);
        //         this.setState({
        //             purchasing: false,
        //             loading: false
        //         })
        //     })
        //     .catch(err => {
        //         this.setState({
        //             purchasing: false,
        //             loading: false
        //         })
        //     });

        this.props.history.push('/checkout');

    };

    render() {

        const disabledInfo = {
            ...this.state.ingredients
        };

        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0;
        }

        let orderSummary = null;

        let burger = this.state.error ? <p>Ingredients cant be loaded</p> : <Spinner/>;

        if (this.state.ingredients) {
            burger = (
                <>
                    <Burger ingredients={this.state.ingredients}/>
                    <BuildControls
                        totalPrice={this.state.totalPrice}
                        ingredientAdded={this.addIngredientHandler}
                        ingredientRemoved={this.removeIngredientHandler}
                        disabled={disabledInfo}
                        purchasable={this.state.purchasable}
                        ordered={this.purchaseHandler}
                    />
                </>);
            orderSummary = (<OrderSummary
                continueClicked={this.purchaseContinueHandler}
                backClicked={this.purchaseCancelHandler}
                totalPrice={this.state.totalPrice}
                ingredients={this.state.ingredients}/>);
        }

        if (this.state.loading) {
            orderSummary = <Spinner/>;
        }

        return (
            <>
                <Modal show={this.state.purchasing}
                       modalClosed={this.purchaseCancelHandler}
                >
                    {orderSummary}
                </Modal>
                {burger}
            </>
        );
    }

}

export default withErrorHandler(BurgerBuilder, axios);