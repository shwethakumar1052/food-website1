import React from 'react';

const Footer = () => {
    return (
        <footer>
            <div className="footer-links">
                <a href="/menu">Menu</a>
                <a href="/cart">Cart</a>
                <a href="/contact">Contact</a>
            </div>
            <div className="social-media">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
            </div>
            <p>&copy; 2023 Food Business. All rights reserved.</p>
        </footer>
    );
};

export default Footer;
