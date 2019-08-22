import React, { Component } from 'react';
import Aux from '../../../hoc/Aux';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component {
    componentWillUpdate(){
        console.log('AAAA');
    }


    render(){
        const ingredientSummary = Object.keys(this.props.ingredients)
            .map(igKey => {
                return <li key={igKey}>
                        <span style={{textTransform: 'capitalize'}}>{igKey}</span>: {this.props.ingredients[igKey]}
                    </li>
            });

        return(
            <Aux>
                <h3>Tu pedido!</h3>
                <p>Tu hamburguesa tiene:</p>
                <ul>
                    {ingredientSummary}
                </ul> 
                <p><strong>Precio Final: ${this.props.price.toFixed(2)}</strong></p>
                <p>Continúe hacia el Checkout</p> 
                <Button btnType="Danger" clicked={this.props.purchaseCancelled}>CANCELAR</Button>
                <Button btnType="Success" clicked={this.props.purchaseContinued}>PAGAR</Button>
            </Aux>
        );
    }
}

export default OrderSummary;