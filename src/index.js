import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';

import { applyMiddleware, createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

const carts = (state = [], action) => {
	switch (action.type) {
		case 'ADD_TO_CART':
			return [...state, action.payload];
		default:
			return state;
	}
};

const orders = (state = [], action) => {
	switch (action.type) {
		case 'GET_ORDERS':
			return action.payload;
		default:
			return state;
	}
};

const getPizzas = (state = [], action) => {
	switch (action.type) {
		case 'GET_PIZZA':
			return action.payload;
		default:
			return state;
	}
};

const pizzasList = (state = [], action) => {
	switch (action.type) {
		case 'ADD_PIZZA':
			return [...state, action.payload];
		case 'REMOVE_PIZZA':
			return state.filter((pizza) => pizza !== action.payload);
		default:
			return state;
	}
};

const customerInfo = (state = [], action) => {
	switch (action.type) {
		case 'SUBMIT_CUSTOMERS':
			return [action.type];
		default:
			return state;
	}
};

const storeInstance = createStore(
	combineReducers({
		carts,
		customerInfo,
		pizzasList,
		orders,
		getPizzas,
	}),
	applyMiddleware(logger)
);

ReactDOM.render(
	<Provider store={storeInstance}>
		<App />
	</Provider>,
	document.getElementById('root')
);
