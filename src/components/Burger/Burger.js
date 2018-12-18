import React from 'react';
import './Burger.scss'
import BurgerIngredient from './BurgerIngredients/BurgerIngredient'

const burger = (props) => {

    let ingredients = Object.keys(props.ingredients)
        .map((igKey) => {
            return [...Array(props.ingredients[igKey])].map(
                (_, index) => {
                    return (<BurgerIngredient key={igKey + index} type={igKey}/>)
                })
        })
        .reduce((arr, el)=>{
            return arr.concat(el);
        }, []);

    if(ingredients.length ===0 ) {
        ingredients = <p>Please start adding ingredients</p>
    }

    return (
        <div className="Burger">
            <BurgerIngredient type="bread-top"/>
            {ingredients}
            <BurgerIngredient type="bread-bottom"/>
        </div>
    );
};

export default burger;