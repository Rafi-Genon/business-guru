import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import SplitForm from '../SplitForm/SplitForm';
const stripePromise = loadStripe('pk_test_51Ih5XSCv7eBK1tkwxfTmSb8hQhmQKZRtalInHUic1esrobLKkngt6kEsFF8csjOkMPOEDcL22hYQHVbfz84du3Sq00C0tPyD6n');

const ProcessPayment = ({placeOrder}) => {
    return (
        <Elements stripe={stripePromise}>
            <SplitForm placeOrder={placeOrder}></SplitForm>
        </Elements>
    );
};

export default ProcessPayment;