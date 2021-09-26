import React from 'react';

const Cart = (props) => {
    const { cart } = props;

    /* 
    
    const { cart } = props;
    const totalReducer = (previous, product) => previous + product.price;
    const total = cart.reduce(totalReducer, 0);
    
    
    */
    let total = 0;
    for (const product of cart) {
        total = total + product.price;
    }
    const shipping = 15;
    const tax = (total + shipping) * 0.10;
    const grandTotal = shipping + tax + total;
    return (
        <div>
            <h5>Order Summary:</h5>
            <p>Items Order:{props.cart.length}</p>
            <br />
            <h4>Total:{total.toFixed(2)}</h4>
            <p>Shipping{shipping}</p>
            <p>tax{tax.toFixed(2)}</p>
            <p>Grand Total:{grandTotal.toFixed(2)}</p>
        </div>
    );
};

export default Cart;