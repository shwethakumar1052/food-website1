import React from 'react';
import './Contact.css'
const Contact = () => {
    return (
        <div className="contact">
            <h2>Contact Us</h2>
            <form>
                <input type="text" placeholder="Your Name" required />
                <input type="email" placeholder="Your Email" required />
                <textarea placeholder="Your Message" required></textarea>
                <button type="submit">Send Message</button>
            </form>
            <div className="contact-info">
                <p>Phone: (123) 456-7890</p>
                <p>Email: info@foodbusiness.com</p>
                <p>Address: 123 Food Street, Food City, FC 12345</p>
            </div>
        </div>
    );
};

export default Contact;
