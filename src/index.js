import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';

import { applyMiddleware, createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

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

const totalCost = (state = 0, action) => {
	switch (action.type) {
		case 'ADD_COST':
			return Math.round((state + action.payload) * 1e12) / 1e12;
		case 'REMOVE_COST':
			return Math.round((state - action.payload) * 1e12) / 1e12;
		case 'CLEAR':
			return 0;
		default:
			return state;
	}
};

const pizzasList = (state = [], action) => {
	switch (action.type) {
		case 'ADD_PIZZA':
			return [...state, action.payload];
		case 'REMOVE_PIZZA':
			return state.filter((pizza) => pizza.name !== action.payload);
		case 'CLEAR':
			return [];
		default:
			return state;
	}
};

const customerInfo = (state = [], action) => {
	switch (action.type) {
		case 'SUBMIT_CUSTOMERS':
			return [action.payload];
		case 'CLEAR':
			return [];
		default:
			return state;
	}
};

const storeInstance = createStore(
	combineReducers({
		customerInfo,
		pizzasList,
		orders,
		getPizzas,
		totalCost,
	}),
	applyMiddleware(logger)
);

ReactDOM.render(
	<Provider store={storeInstance}>
		<App />
	</Provider>,
	document.getElementById('root')
);
