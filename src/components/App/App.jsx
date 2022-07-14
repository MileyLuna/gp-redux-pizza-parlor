import React from 'react';
import axios from 'axios';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import Admin from '../Admin/Admin';
import './App.css';
import CreateOrder from '../CreateOrder/CreateOrder';
import Checkout from '../Checkout/Checkout';
import CustomerInfo from '../CustomerInfo/CustomerInfo';

function App() {
    return (
        <Router>
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">Prime Pizza</h1>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/admin">Admin</Link>
                        </li>
                        <li>
                            <Link to="/checkout">Checkout</Link>
                        </li>
                    </ul>
                </header>
                <Route path="/" exact>
                    <CreateOrder />
                </Route>
                <Route path="/checkout" exact>
                    <Checkout />
                </Route>
                <Route path="/admin" exact>
                    <Admin />
                </Route>
                <Route path="/info">
                    <CustomerInfo />
                </Route>
            </div>
        </Router>
    );
}

export default App;
