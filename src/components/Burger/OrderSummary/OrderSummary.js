import React, { Fragment, Component } from 'react';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component {
    //Could be a functional component but doesn't have to, we leave class here for debugging process
    componentWillUpdate(){
        console.log('[OrderSummary will update]');
    }

    render() {
        const ingredientSummary = Object.keys(this.props.ingredients)
        .map(igKey => {
            return ( <li key={igKey}><span style={{textTransform: 'capitalize'}}>{igKey}</span>: {this.props.ingredients[igKey]}</li> );
        });

        return(
            <Fragment>
            <h3>Your Order</h3>
            <p> A delicious burgere with the following ingredients</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p><strong>Total Price: {this.props.price.toFixed(2)} $</strong></p>
            <p>Continue to Checkout?</p>
            <Button btnType="Danger" clicked={this.props.purchaseCancelled}>CANCEL</Button>
            <Button btnType="Success" clicked={this.props.purchaseContinued}>CONTINUE</Button>
        </Fragment>
        );
    }
};

export default OrderSummary;