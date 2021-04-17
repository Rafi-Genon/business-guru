import React, { useMemo, useState } from "react";
import {
    useStripe,
    useElements,
    CardNumberElement,
    CardCvcElement,
    CardExpiryElement
} from "@stripe/react-stripe-js";

// import useResponsiveFontSize from "../../useResponsiveFontSize";

const useOptions = () => {
    //   const fontSize = useResponsiveFontSize();
    const options = useMemo(
        () => ({
            style: {
                base: {
                    fontSize: '16px',
                    color: "#424770",
                    letterSpacing: "0.025em",
                    fontFamily: "Source Code Pro, monospace",
                    "::placeholder": {
                        color: "#aab7c4"
                    }
                },
                invalid: {
                    color: "#9e2146"
                }
            }
        }),
        []
    );

    return options;
};

const SplitForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const options = useOptions();

    const [paymentError, serPaymentError] = useState(null)
    const [paymentSuccess, serPaymentSuccess] = useState(null)
    const handleSubmit = async event => {
        event.preventDefault();

        if (!stripe || !elements) {
            // Stripe.js has not loaded yet. Make sure to disable
            // form submission until Stripe.js has loaded.
            return;
        }

        const payload = await stripe.createPaymentMethod({
            type: "card",
            card: elements.getElement(CardNumberElement)
        });
        console.log("[PaymentMethod]", payload);
        if (payload.error) {
            serPaymentError(payload.error.message);
            serPaymentSuccess(null)
        }
        else {
            serPaymentSuccess(payload.paymentMethod.id);
            serPaymentError(null)
        }
    };

    return (
        <form className="ml-5" onSubmit={handleSubmit}>
            <label className="payment-lable" style={{ width: '60%' }}>
                Card number
        <CardNumberElement
                    options={options}
                    onReady={() => {
                        // console.log("CardNumberElement [ready]");
                    }}
                    onChange={event => {
                        // console.log("CardNumberElement [change]", event);
                    }}
                    onBlur={() => {
                        // console.log("CardNumberElement [blur]");
                    }}
                    onFocus={() => {
                        // console.log("CardNumberElement [focus]");
                    }}
                />
            </label>
            <br />
            <label className="payment-lable" style={{ width: '60%' }}>
                Expiration date
        <CardExpiryElement
                    options={options}
                    onReady={() => {
                        // console.log("CardNumberElement [ready]");
                    }}
                    onChange={event => {
                        // console.log("CardNumberElement [change]", event);
                    }}
                    onBlur={() => {
                        // console.log("CardNumberElement [blur]");
                    }}
                    onFocus={() => {
                        // console.log("CardNumberElement [focus]");
                    }}
                />
            </label>
            <br />
            <label className="payment-lable" style={{ width: '60%' }}>
                CVC
        <CardCvcElement
                    options={options}
                    onReady={() => {
                        // console.log("CardNumberElement [ready]");
                    }}
                    onChange={event => {
                        // console.log("CardNumberElement [change]", event);
                    }}
                    onBlur={() => {
                        // console.log("CardNumberElement [blur]");
                    }}
                    onFocus={() => {
                        // console.log("CardNumberElement [focus]");
                    }}
                />
            </label>
            <br />
            <button id="pay-button" type="submit" disabled={!stripe}>
                Pay
      </button>
            {
                paymentError && <p className="text-danger">{paymentError}</p>
            }
            {
                paymentSuccess&& <p className="text-success">Your payment successfully done</p>
            }
        </form>

    );
};

export default SplitForm;