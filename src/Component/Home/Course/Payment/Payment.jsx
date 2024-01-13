import React, {  useEffect } from 'react';
import useAxiosPublic from '../../../../Hook/useAxiosPublic';
import { useParams } from 'react-router-dom';


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
        <div>
            ihkjkkj
        </div>
    );
};

export default Payment;