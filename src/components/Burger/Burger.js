import React from 'react';
import './Burger.scss'
import BurgerIngredient from './BurgerIngredients/BurgerIngredient'


const burger = (props) => {

    const ingredients = Object.keys(props.ingredients)
        .map((igKey) => {
            return [...Array(props.ingredients[igKey])].map(
                (_, index) => {
                    return (<BurgerIngredient key={igKey + index} type={igKey}/>)
                })
        });


    return (
        <div className="Burger">
            <BurgerIngredient type="bread-top"/>
            {ingredients}
            <BurgerIngredient type="bread-bottom"/>
        </div>
    );
};

export default burger;