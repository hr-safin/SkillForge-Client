import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useAxiosPublic from '../../../Hook/useAxiosPublic';

const Enroll = () => {
    
    window.scrollTo(0,0)
    const {id} = useParams()
    const axiosPublic = useAxiosPublic()
    const [enroll, setEnroll] = useState([])

    useEffect(() => {
        axiosPublic.get(`/enroll/${id}`)
        .then(res => {
            console.log(res.data)
            setEnroll(res.data)
        })
    }, [])
    return (
        <div>
            
        </div>
    );
};

export default Enroll;