import React from 'react';

const OrderCustomization = ({ item }) => {
    return (
        <div className="customization">
            <h2>Customize Your Order for {item.name}</h2>
            {/* Add customization options here */}
            <button>Add to Cart</button>
        </div>
    );
};

export default OrderCustomization;