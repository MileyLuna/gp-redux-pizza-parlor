import React from 'react';
import axios from 'axios';
import { HashRouter as Router, Route, Link } from "react-router-dom";
import Admin from '../Admin/Admin';
import './App.css';


import Checkout from '../Checkout/Checkout';


function App() {

  return (
    <Router >
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Prime Pizza</h1>
      </header>


    <Checkout />


  
      <img src='images/pizza_photo.png' />
      <p>Pizza is great.</p>
      <ul>
        <li>
          {/* <Link to='/Admin'>Admin</Link> */}
        </li>
      </ul>
    
      <Route path="/Admin" exact>
        <Admin />
      </Route>

    </div>
    </Router>

  );
}

export default App;
