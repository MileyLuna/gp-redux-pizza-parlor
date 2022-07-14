import { useSelector } from 'react-redux';
import './CreateOrder.css';
import CreateOrderItem from '../CreateOrderItem/CreateOrderItem';

function CreateOrder() {
	const getPizzas = useSelector((state) => state.getPizzas);

	return (
		<>
			<h1>Step 1: Select your pizza</h1>
			{getPizzas.map((pizza) => (
				<CreateOrderItem pizza={pizza} key={pizza.id} />
			))}
			<button className='nextButton'>NEXT</button>
		</>
	);
}

export default CreateOrder;
