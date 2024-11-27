import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import Menu from './components/Menu';
import OrderCustomization from './components/OrderCustomization';
import ShoppingCart from './components/ShoppingCart';
import AboutUs from './components/AboutUs';
import SignUp from './components/SignUp';
import Login from './components/Login';
import Footer from './components/Footer';
import Feedback from './components/Feedback';
import Contact from './components/Contact';
import './App.css';

const App = () => {
    return (
        <Router>
            <div className="App">
                <header>
                    <h1>Food Business</h1>
                    <nav>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/menu">Menu</Link></li>
                            <li><Link to="/about">About Us</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                            <li><Link to="/feedback">Feedback</Link></li>
                        </ul>
                    </nav>
                </header>
                <main>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/menu" element={<Menu />} />
                        <Route path="/customize/:id" element={<OrderCustomization />} />
                        <Route path="/cart" element={<ShoppingCart />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/feedback" element={<Feedback />} />
                        <Route path="/about" element={<AboutUs />} />
                        <Route path="/signup" element={<SignUp />} />
                        <Route path="/login" element={<Login />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    );
};

export default App;
