import React from 'react';

const ShoppingCart = ({ cartItems }) => {
    return (
        <div className="cart">
            <h2>Your Cart</h2>
            {cartItems.length === 0 ? (
                <p>Your cart is empty</p>
            ) : (
                <div>
                    {cartItems.map(item => (
                        <div key={item.id}>
                            <h3>{item.name}</h3>
                            <p>Quantity: {item.quantity}</p>
                            <p>Price: ${item.price}</p>
                        </div>
                    ))}
                    <button>Checkout</button>
                </div>
            )}
        </div>
    );
};

export default ShoppingCart;