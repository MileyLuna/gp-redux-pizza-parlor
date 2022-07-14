import React from 'react';
import axios from 'axios';
import './App.css';
import CreateOrder from '../CreateOrder/CreateOrder';

function App() {
	return (
		<div className='App'>
			<header className='App-header'>
				<h1 className='App-title'>Prime Pizza</h1>
			</header>

			<CreateOrder />
		</div>
	);
}

export default App;
