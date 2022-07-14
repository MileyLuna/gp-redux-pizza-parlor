import '../Checkout/Checkout.css';
import React, { useState } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';


function Checkout() {

    const dispatch = useDispatch();

    const customerInfo = useSelector(store => store.customerInfo);
    const pizzasList = useSelector(store => store.pizzas);

    const pizzaTime = (event) => {
        event.preventDefault();

        axios
            .post('/orders', {       
                customer_name: customerInfo.customerName,
                street_address: customerInfo.streetAddress,
                city: customerInfo.city,
                zip: customerInfo.zipCode,
                type: customerInfo.type,
                total: 0 //!!!!!!!!!! UPDATE
            })
            .then(response =>{
                dispatch({
                    type:'ADD_PIZZA',
                    payload: response.data
                })
            }).catch(err => {
                console.log('Error in client POST:', err);
            })
    }


    return (
        <>

            <h2>Step 3: Checkout</h2>

            <div className='container'>
                {/* <div className='info'> */}
                    <p className='information'>
                        <p>{customerInfo.customerName}</p>
                        <p>{customerInfo.streetAddress}</p>
                        <p>{customerInfo.city}, {customerInfo.zipCode}</p>
                        </p>
                {/* </div> */}

                {/* <div className='delivery'> */}
                    <p className='deliveryType'>Delivery Type</p>
                {/* </div> */}
            </div>

            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Cost</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        {pizzasList.map((pizza, i) => {
                            <td key={i}> {pizza.name}</td>,
                            <td key={i}> {pizza.price}</td>
                        })}
                    </tr>
                </tbody>
            </table>

            <h1 className='total'>Total:</h1>

            <button className='checkBtn' onClick={pizzaTime}>CHECKOUT</button>

        </>
    )
};

export default Checkout;


