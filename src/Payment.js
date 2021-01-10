import React, {useEffect, useState} from "react";
import './Payment.css'
import {useStateValue} from "./StateProvider";
import userService from "./services/user.service";
import ProductCart from "./ProductCart";
import {Link, useHistory} from "react-router-dom";
import {CardElement, useElements, useStripe} from "@stripe/react-stripe-js";
import CurrencyFormat from 'react-currency-format';
import {getBasketTotal} from './reducer'
import axios from "axios";


function Payment(){
    const [{basket}, dispatch] = useStateValue();
    const history = useHistory();

    const theUser = userService().User;
    const stripe = useStripe();
    const elements = useElements();

    const [succeeded, SetSucceeded] = useState(false)
    const [processing, setProcessing] = useState(false)
    const [error,setError] = useState(null);
    const [disabled, setDisabled] = useState(true)
    const [clientSecret, setClientSecret] = useState(true)

    useEffect(()=>{
        //generate the special stri[e secret which allows us to charge a customer
        const getClientSecret = async ()=>{
            /* They create an axios.js
            *
            * import axios from 'axios';
            *
            * const instance = axios.create({
            * baseURL: '...'  // The url of the API (cloud function)
            * });
            *
            * export default instance;
            * */

            //Stripe expects the total in a currencies subunits
            const response = await axios.post(`/payments/create?total=${getBasketTotal(basket) * 100}`);
            setClientSecret(response.data.clientSecret);
        }
        getClientSecret();
    }, [basket])


    const handleSubmit = async (event) =>{
        //do the fancy stripe stuff...
        event.preventDefault();
        setProcessing(true);

        const payload = await stripe.confirmCardPayment(clientSecret,{
            payment_method:{
            card: elements.getElement(CardElement)
            }
        }).then(({paymentIntent})=>{
            //paymentIntent = payment confirmation
            SetSucceeded(true);
            setError(null);
            setProcessing(false);



            dispatch({
                type: 'EMPTY_BASKET'
            })

            history.replace('/orders')
        })

    }

    const handleChange = event =>{
        //Listen for changes in the CardElement
        //and display any errors as the customer types their card details
        setDisabled(event.empty);
        setError(event.error ? event.error.message : '');

    }

    return(
        <div className={'payment'}>
            <h1>
                Checkout(<Link to={'/checkout'}>{basket?.length} items</Link>)
            </h1>

            <div className={'payment_container'}>
                {/*Payment section - delivery address*/}
                <div className={'payment_section'}>
                    <div className={'payment_title'}>
                        <h3>Delivery Address</h3>
                    </div>
                    <div className={'payment_address'}>
                        <p>{theUser?.email}</p>
                        <p>123 React Lane</p>
                        <p>Los Angeles, CA</p>
                    </div>
                </div>
                {/*Payment section - Review Items*/}
                <div className={'payment_section'}>
                    <div className={'payment_title'}>
                        <h3>Review and delivery </h3>
                    </div>
                    <div className={'payment_items'}>
                        {basket.map(item =>(
                            < ProductCart/*CheckoutProduct*/
                                id={item.id}
                                title = {item.title}
                                image = {item.image}
                                price = {item.price}
                            // rating = {item.rating}
                            />
                        ))}
                    </div>
                </div>
                {/*Payment section - Payment Method*/}
                <div className={'payment_section'}>
                    <div className={'payment_title'}>
                        <h3>Payment Method</h3>
                    </div>
                    <div className={'payment_details'}>
                        {/*Stripe magic will go*/}

                        <form onSubmit={handleSubmit}>
                            <CardElement onChange={handleChange}/>

                            <div className={'payment_priceContainer'}>
                                <CurrencyFormat
                                    renderText ={(value) =>(
                                        <h3>Order Total: {value}</h3>
                                    )}
                                    decimalScale={2}
                                    value={getBasketTotal(basket)}
                                    displayType={'text'}
                                    thousandSeparator={true}
                                    prefix={"$"}
                                />
                                <button disabled={processing || disabled || succeeded}>
                                    <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                                </button>
                            </div>

                            {/*Errors*/}
                            {error && <div>{error}</div>}
                        </form>

                    </div>
                </div>
            </div>
        </div>
    )
}
export default Payment;