import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header';
import Home from './Home';

function App() {
    return (
        <Router>
            <div className="app">
                <Routes>
                    <Route path="/checkout" element={<Checkout />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/" element={<Header /> <Home />}  />

                </Routes>
            </div>
        </Router>
    );
}

function Checkout() {
    return <h1>Checkout page</h1>;
}

function Login() {
    return <h1>Login page</h1>;
}

export default App;
