import React from 'react';
import './Feedback.css';

const Feedback = () => {
    return (
        <div className="feedback">
            <h2>We Value Your Feedback</h2>
            <p>Please let us know your thoughts, suggestions, or any issues you encountered with our service.</p>
            <form className="feedback-form">
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" placeholder="Your Name" required />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" placeholder="Your Email" required />
                </div>
                <div className="form-group">
                    <label htmlFor="rating">Rating</label>
                    <select id="rating" required>
                        <option value="">Rate Us</option>
                        <option value="excellent">Excellent</option>
                        <option value="good">Good</option>
                        <option value="average">Average</option>
                        <option value="poor">Poor</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea id="message" placeholder="Your Feedback" required></textarea>
                </div>
                <button type="submit" className="submit-button">Submit Feedback</button>
            </form>
        </div>
    );
};

export default Feedback;
