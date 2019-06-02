import React from 'react';
import Aux from '../../../hoc/Aux';


const orderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients)
            .map(igKey => {
                return <li key={igKey}>
                        <span style={{textTransform: 'capitalize'}}>{igKey}</span>: {props.ingredients[igKey]}
                    </li>
            });

    return (
        <Aux>
            <h3>Tu pedido!</h3>
            <p>Tu hamburguesa tiene:</p>
            <ul>
                {ingredientSummary}
            </ul> 
            <p>Continúe hacia el Checkout</p> 
        </Aux>
    )
}

export default orderSummary;