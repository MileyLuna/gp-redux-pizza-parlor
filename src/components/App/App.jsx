import React from 'react';
import axios from 'axios';
import './App.css';


import Checkout from '../Checkout/Checkout';


function App() {

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Prime Pizza</h1>
      </header>

    <Checkout />

    </div>
  );
}

export default App;
