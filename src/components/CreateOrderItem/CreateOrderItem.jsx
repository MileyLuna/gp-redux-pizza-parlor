import './CreateOrderItem.css';

function CreateOrderItem({ pizza }) {
	return (
		<>
			<div className='pizzaCard'>
				<div className='cardInfo'>
					<img src={pizza.image_path} />
					<h2 className='pizzaName'>{pizza.name}</h2>
					<p className='pizzaDescription'>{pizza.description}</p>
					<h3 className='pizzaPrice'>${pizza.price}</h3>
					<button className='pizzaAdd'>Add</button>
				</div>
			</div>
		</>
	);
}

export default CreateOrderItem;
