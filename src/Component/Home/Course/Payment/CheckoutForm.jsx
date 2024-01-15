import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React from "react";

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }
  };
  return (
    <div>
      <form className=" shadow-lg h-[220px] p-7" onSubmit={handleSubmit}>
        <div>
          
          <input
            type="email"
            name="email"
            id="email"
            className=" mb-5 outline-none border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  "
            placeholder="Email address"
            required
          />
        </div>
        <CardElement
        className="  outline-none border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
          options={{
            style: {
              base: {
                border : "1px solid black",
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          className=" bg-blue-500 hover:bg-blue-600  mt-6 px-4 py-2 rounded-md w-full text-white"
          type="submit"
          disabled={!stripe}
        >
          Pay
        </button>
      </form>
    </div>
  );
};

export default CheckoutForm;
