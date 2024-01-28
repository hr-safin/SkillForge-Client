import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxiosSecure from './useAxiosSecure';

const useAllUser = () => {
    const axiosSecure = useAxiosSecure()
    const {data : users = [], refetch} = useQuery({
        queryKey : ["users"],
        queryFn : async () => {
            const res = axiosSecure.get("/allUser")
            return res.data
        }
    })
    return [users, refetch]
};

export default useAllUser;