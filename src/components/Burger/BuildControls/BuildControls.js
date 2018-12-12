import React from 'react';
import './BuildControls.scss'
import BuildControl from './BuildControl/BuildControl'

const controls = [
    {label: 'Salad', type: 'salad'},
    {label: 'Bacon', type: 'bacon'},
    {label: 'Cheese', type: 'cheese'},
    {label: 'Meat', type: 'meat'},
];

const buildControls = (props) => {
    return (
        <div className="BuildControls">
            <p>Current price: <strong>{props.totalPrice.toFixed(2)}</strong> USD</p>

            {controls.map(control => {
                return (
                    <BuildControl
                        key={control.label}
                        label={control.label}
                        added={() => props.ingredientAdded(control.type)}
                        removed={()=> props.ingredientRemoved(control.type)}
                        disabled={props.disabled[control.type]}
                    />
                )
            })}

            <button disabled={!props.purchasable} className="checkout-btn">ORDER NOW</button>
        </div>
    )
};

export default buildControls;