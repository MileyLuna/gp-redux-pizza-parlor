import { useState } from 'react';
import { useDispatch } from 'react-redux';
import './CreateOrderItem.css';

function CreateOrderItem({ pizza }) {
	const [isClicked, setIsClicked] = useState(false);
	const dispatch = useDispatch();

	const handleAdd = () => {
		dispatch({
			type: 'ADD_PIZZA',
			payload: { id: pizza.id, quantity: 1, name: pizza.name, price: pizza.price },
		});
		dispatch({ type: 'ADD_COST', payload: Number(pizza.price) });
		setIsClicked(!isClicked);
	};

	const handleRemove = () => {
		dispatch({ type: 'REMOVE_PIZZA', payload: pizza.name });
		dispatch({ type: 'REMOVE_COST', payload: Number(pizza.price) });
		setIsClicked(!isClicked);
	};

	return (
		<>
			<div className='pizzaCard'>
				<div className='cardInfo'>
					<img src={pizza.image_path} />
					<h2 className='pizzaName'>{pizza.name}</h2>
					<p className='pizzaDescription'>{pizza.description}</p>
					<h3 className='pizzaPrice'>${pizza.price}</h3>
					{!isClicked ? (
						<button className='pizzaAdd' onClick={handleAdd}>
							Add
						</button>
					) : (
						<button className='pizzaAdd' onClick={handleRemove}>
							REMOVE
						</button>
					)}
				</div>
			</div>
		</>
	);
}

export default CreateOrderItem;
