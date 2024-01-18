import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useContext, useEffect, useRef, useState } from "react";
import useAxiosPublic from "../../../../Hook/useAxiosPublic";
import { AuthContext } from "../../../../AuthProvider/AuthProvider";
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'
import { useNavigate } from "react-router-dom";

const CheckoutForm = ({ total, enroll }) => {
  const [error, setError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const stripe = useStripe();
  const elements = useElements();
  const axiosPublic = useAxiosPublic();
  const {user} = useContext(AuthContext)
  const formRef = useRef(null)
  const navigate = useNavigate()
  useEffect(() => {
    if (total > 0) {
      axiosPublic
        .post("/create-payment-intent", { price: total })
        .then((res) => {
         
          console.log(res.data);
          setClientSecret(res.data.clientSecret);
        });
    }
  }, [axiosPublic, total]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("[error]", error);
      setError(error.message);
    } else {
      console.log("[paymentMethod]", paymentMethod);
      setError("");
    }

    // confirm payment

    const {paymentIntent, error: confirmError} = await stripe.confirmCardPayment(clientSecret,{
        payment_method : {
            card : card,
            billing_details : {
                email : user?.email || "anonymous",
                name : user?.displayName || "anonymous"
            }
        }
    })

    if(confirmError){
        console.log("confirmError", confirmError)
    }

    else{
        console.log("paymentIntent", paymentIntent)

         const formData = e.target
         const name = formData.value.name
         const email = formData.value.email

         const enrollInfo = {name, email}

        if(paymentIntent.status === "succeeded"){
            // Swal.fire({
            //     title: "Payment Successful!",
            //     text: `Your Transaction Id is ${paymentIntent.id}`,
            //     icon: "success"
            //   });
            navigate("/paymentSuccessful")

            // axiosPublic.post("/enrolled")

            formRef.current.reset()
        }
    }
  };
  return (
    <div>
      <form
        ref={formRef}
        className=" shadow-lg h-[295px] p-7 border rounded-md"
        onSubmit={handleSubmit}
      >
        <div>
          <input
            type="text"
            name="name"
            id="name"
            className=" mb-5 outline-none border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  "
            placeholder="Your name"
            required
          />
        </div>
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
          className="flex items-center gap-2 justify-center bg-blue-500 hover:bg-blue-600  mt-6 px-4 py-2 rounded-md w-full text-white"
          type="submit"
          disabled={!stripe || !clientSecret}
        >
          Pay <span>${total}</span>
        </button>
        <p className=" pt-2 text-sm text-red-600">{error}</p>
      </form>
    </div>
  );
};

export default CheckoutForm;
