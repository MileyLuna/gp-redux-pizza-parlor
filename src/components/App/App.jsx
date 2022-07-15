import React, { useEffect } from 'react';
import axios from 'axios';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import Admin from '../Admin/Admin';
import './App.css';
import CreateOrder from '../CreateOrder/CreateOrder';
import Checkout from '../Checkout/Checkout';
import CustomerInfo from '../CustomerInfo/CustomerInfo';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function App() {
	const dispatch = useDispatch();
	const totalCost = useSelector((state) => state.totalCost);

	const getPizzas = () => {
		axios
			.get('/api/pizza')
			.then((response) => {
				dispatch({ type: 'GET_PIZZA', payload: response.data });
			})
			.catch((err) => alert('Error in get', err));
	};

	const getOrders = () => {
		axios
			.get('/api/order')
			.then((response) => {
				dispatch({ type: 'GET_ORDERS', payload: response.data });
			})
			.catch((err) => alert('Error in get', err));
	};

	useEffect(() => {
		getPizzas();
		getOrders();
	}, []);

	return (
		<Router>
			<div className='App'>
				<header className='App-header'>
					<h1 className='App-title'>Prime Pizza</h1>
					<ShoppingCartIcon className='cartIcon' />
					<h2 className='totalCost'>{totalCost}</h2>
					<ul>
						<li className='nav'>
							<Link className='link' to='/'>
								Home
							</Link>
						</li>
						<li className='nav'>
							<Link className='link' to='/admin'>
								Admin
							</Link>
						</li>
						<li className='nav'>
							<Link className='link' to='/info'>
								Customer Info
							</Link>
						</li>
					</ul>
				</header>
				<Route path='/' exact>
					<CreateOrder />
				</Route>
				<Route path='/checkout' exact>
					<Checkout getOrders={getOrders} />
				</Route>
				<Route path='/admin' exact>
					<Admin />
				</Route>
				<Route path='/info'>
					<CustomerInfo />
				</Route>
			</div>
		</Router>
	);
}

export default App;
