import '../Checkout/Checkout.css';
import React, { useState } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

function Checkout({ getOrders }) {
	const dispatch = useDispatch();
	const history = useHistory();

	const customerInfo = useSelector((store) => store.customerInfo);
	const pizzasList = useSelector((store) => store.pizzasList);
	const totalCost = useSelector((store) => store.totalCost);
	console.log(customerInfo);

	const pizzaTime = (event) => {
		event.preventDefault();
		console.log(pizzasList);

		axios
			.post('/api/order', {
				customer_name: customerInfo[0].customerName,
				street_address: customerInfo[0].streetAddress,
				city: customerInfo[0].city,
				zip: customerInfo[0].zipCode,
				type: customerInfo[0].type,
				total: totalCost, //!!!!!!!!!! UPDATE
				pizzas: pizzasList,
			})
			.then((response) => {
				getOrders();
				dispatch({
					type: 'CLEAR',
				});
			})
			.catch((err) => {
				console.log('Error in client POST:', err);
			});
		history.push('/');
	};

	return (
		<>
			<h2>Step 3: Checkout</h2>
			<div className='row'>
				<ul className='customer-info'>
					<li>{customerInfo[0].customerName}</li>
					<li>{customerInfo[0].streetAddress}</li>
					<li>
						{customerInfo[0].city} {customerInfo[0].zipCode}
					</li>
				</ul>
				<div>
					<div className='deliveryType'>{customerInfo[0].type}</div>
				</div>
			</div>

			<table>
				<thead>
					<tr>
						<th>Name</th>
						<th>Cost</th>
					</tr>
				</thead>
				<tbody>
					{pizzasList.map((pizza, i) => {
						console.log(pizza);
						return (
							<tr key={i}>
								<td> {pizza.name}</td>
								<td> {pizza.price}</td>
							</tr>
						);
					})}
				</tbody>
			</table>

			<h1 className='total'>Total: {totalCost}</h1>

			<button className='checkBtn' onClick={pizzaTime}>
				CHECKOUT
			</button>
		</>
	);
}

export default Checkout;
