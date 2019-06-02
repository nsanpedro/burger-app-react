import React from 'react';
import Aux from '../../../hoc/Aux';
import Button from '../../UI/Button/Button';


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
            <Button btnType="Danger" clicked={props.purchaseCancelled}>CANCELAR</Button>
            <Button btnType="Success" clicked={props.purchaseContinued}>PAGAR</Button>
        </Aux>
    )
}

export default orderSummary;