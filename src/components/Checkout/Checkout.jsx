import '../Checkout/Checkout.css';
import React, { useState } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';


function Checkout() {

    const cart = useSelector(store => store.cart);


    return (
        <>

            <h1>Step 3: Checkout</h1>

            <div className='container'>
                {/* <div className='info'> */}
                    <p className='customerInfo'>Customer Information</p>
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
                    </tr>
                </tbody>
            </table>

            <p className='total'>Total</p>

            <button className='checkBtn'>CHECKOUT</button>

        </>
    )
};

export default Checkout;


