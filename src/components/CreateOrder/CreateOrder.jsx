import { useSelector } from 'react-redux';
import './CreateOrder.css';
import CreateOrderItem from '../CreateOrderItem/CreateOrderItem';
import { useHistory } from 'react-router-dom';

function CreateOrder() {
	const history = useHistory();
	const getPizzas = useSelector((state) => state.getPizzas);

	const handleNext = () => {
		history.push('/info');
	};

	return (
		<>
			<h1>Step 1: Select your pizza</h1>
			{getPizzas.map((pizza) => (
				<CreateOrderItem pizza={pizza} key={pizza.id} />
			))}
			<button className='nextButton' onClick={handleNext}>
				NEXT
			</button>
		</>
	);
}

export default CreateOrder;
