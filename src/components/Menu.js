import React from 'react';

const Menu = () => {
    const menuItems = [
        { id: 1, name: 'Pizza', category: 'Main Course', price: 12.99, img: 'link_to_image' },
        { id: 2, name: 'Salad', category: 'Starters', price: 8.99, img: 'link_to_image' },
        // Add more items
    ];

    return (
        <div className="menu">
            <h2>Our Menu</h2>
            <div className="menu-items">
                {menuItems.map(item => (
                    <div key={item.id} className="menu-item">
                        <img src={item.img} alt={item.name} />
                        <h3>{item.name}</h3>
                        <p>${item.price}</p>
                        <button>Add to Cart</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Menu;