// import { Elements } from '@stripe/react-stripe-js';
// import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useNavigation } from 'react-day-picker';
import { useLoaderData } from 'react-router-dom';
import GetLoader from '../../../shared/GetLoader/GetLoader';
import CheckOutForm from './CheckOutForm';




const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);

const Payment = () => {
    const order = useLoaderData();
    console.log(order)
    // const navigation = useNavigation();
  
    // if(navigation.state === "loading"){
    //     return <div className='text-center'>
    //         <GetLoader></GetLoader>
    //     </div>
    // }
    return (
        <div>
            <h3 className="text-3xl">Payment for {order.product} </h3>
            <p className="text-xl">Please pay <strong>$ {order.price}</strong> for getting the product </p>
            <div className='w-96 my-12'>
                <Elements stripe={stripePromise}>
                    <CheckOutForm
                        order={order}
                    />
                </Elements>
            </div>
        </div>
    );
};

export default Payment;