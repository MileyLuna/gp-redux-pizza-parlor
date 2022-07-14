//useState
import { useState } from 'react';
import { useDispatch } from 'react-redux';

//CSS
import '../CustomerInfo/CustomerInfo.css';

const dispatch = useDispatch();

export default function CustomerInfo() {
    //useStates
    const [customerName, setCustomerName] = useState('');
    const [streetAddress, setStreetAddress] = useState('');
    const [city, setCity] = useState('');
    const [zipCode, setZipCode] = useState('');
    const [type, setType] = useState('Delivery');

    //handleSubmit
    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch({
            type: 'SUBMIT_CUSTOMERS',
            payload: {
                customerName,
                streetAddress,
                city,
                zipCode,
                type,
            },
        });
    };

    //handleType => Pickup / Delivery
    const handleType = (event) => {
        setType(event.target.value);
    };

    //clearInputs
    const clearInputs = () => {
        setsetCustomerName('');
        setStreetAddress('');
        setCity('');
        setZipCode('');
        setType('Delivery');
    };

    return (
        <>
            <h1>Step 2: Customer Information</h1>
            <div className="form-container">
                <form onSubmit={handleSubmit}>
                    <div className="form-customer">
                        <input
                            type="string"
                            value={customerName}
                            onChange={(event) =>
                                setCustomerName(event.target.value)
                            }
                            placeholder="Name"
                        ></input>
                        <input
                            type="string"
                            value={streetAddress}
                            onChange={(event) =>
                                setStreetAddress(event.target.value)
                            }
                            placeholder="Street Address"
                        ></input>
                        <input
                            type="string"
                            value={city}
                            onChange={(event) => setCity(event.target.value)}
                            placeholder="City"
                        ></input>
                        <input
                            type="string"
                            value={zipCode}
                            onChange={(event) => setZipCode(event.target.value)}
                            placeholder="Zip Code"
                        ></input>
                    </div>
                    <div className="form-type">
                        <input
                            id="pickup"
                            type="radio"
                            value="Pickup"
                            checked={type === 'Pickup'}
                            onChange={handleType}
                        ></input>
                        <label htmlFor="pickup">Pickup</label>
                        <input
                            id="delivery"
                            type="radio"
                            value="Delivery"
                            checked={type === 'Delivery'}
                            onChange={handleType}
                        ></input>
                        <label htmlFor="delivery">Delivery</label>
                    </div>
                </form>
            </div>
        </>
    );
}
