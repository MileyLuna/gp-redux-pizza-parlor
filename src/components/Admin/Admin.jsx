import { useSelector } from 'react-redux';
import './Admin.css';

function Admin() {
	const orders = useSelector((state) => state.orders);
	return (
		<div>
			<header id='adminHeader'>
				<h1>Admin Page</h1>
			</header>
			<table>
				<thead>
					<tr>
						<th>Name</th>
						<th>Order Placed At</th>
						<th>Type</th>
						<th>Cost</th>
					</tr>
				</thead>
				<tbody>
					{orders.map((order) => {
						const { customer_name, time, type, total } = order;
						return (
							<tr key={order.id}>
								<td>{customer_name}</td>
								<td>{time}</td>
								<td>{type}</td>
								<td>${total}</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>
	);
}

export default Admin;
