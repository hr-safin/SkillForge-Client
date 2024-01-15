import React, {  useEffect } from 'react';
import useAxiosPublic from '../../../../Hook/useAxiosPublic';
import { useParams } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';
import {CardElement, Elements, useElements, useStripe} from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';


const stripePromise = loadStripe("pk_test_51OEWOiDrduCbZi0VLPT7T9eLn2TvSS9tXvPPjYobROOoRrllCLoTp2vyShnGnVvM7ahdy3x44PvHK3tQZXfFNR6P00oSh3z0UK")

const Payment = () => {
    window.scrollTo(0, 0);
    const {id} = useParams()
    const axiosPublic =  useAxiosPublic()
    console.log(id)
    useEffect(() => {
        axiosPublic.get(`/payment/${id}`)
        .then(res => {
            console.log(res.data)
        })
    }, [])


    return (
        <div className=' max-w-sm mx-auto pt-[230px] md:pt-[280px]  h-screen'>
            <Elements stripe={stripePromise}>
              <CheckoutForm />
            </Elements>
        </div>
    );
};

export default Payment;