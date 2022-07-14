import './CreateOrder.css';

function CreateOrder() {
	return (
		<>
			<h1>Step 1: Select your pizza</h1>
			<div className='pizzaCard'>
				<div className='cardInfo'>
					<img src='images/pizza_photo.png' />
					<h2 className='pizzaName'>Pizza Marinara</h2>
					<p className='pizzaDescription'>
						No cheese pizza with marinara, garlic, and red peppers.
					</p>
					<h3 className='pizzaPrice'>$12.99</h3>
					<button className='pizzaAdd'>Add</button>
				</div>
			</div>
			<div className='pizzaCard'>
				<div className='cardInfo'>
					<img src='images/pizza_photo.png' />
					<h2 className='pizzaName'>Onamonapizza</h2>
					<p className='pizzaDescription'>Cheese, BBQ sauce, and artichokes.</p>
					<h3 className='pizzaPrice'>$14.99</h3>
					<button className='pizzaAdd'>Add</button>
				</div>
			</div>
			<div className='pizzaCard'>
				<div className='cardInfo'>
					<img src='images/pizza_photo.png' />
					<h2 className='pizzaName'>Pepperoni</h2>
					<p className='pizzaDescription'>Classic Pizza with cheese and pepperoni.</p>
					<h3 className='pizzaPrice'>$13.99</h3>
					<button className='pizzaAdd'>Add</button>
				</div>
			</div>

			<button className='nextButton'>NEXT</button>
		</>
	);
}

export default CreateOrder;
