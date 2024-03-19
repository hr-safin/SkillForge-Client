import React from 'react';
import axios from 'axios';

const axiosSecure = axios.create({
    baseURL : "https://skill-forge-server.vercel.app"
})
const useAxiosSecure = () => {
    return axiosSecure
};

export default useAxiosSecure;