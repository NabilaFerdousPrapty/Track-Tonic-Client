import React from 'react';
import useAuth from './UseAuth';
import UseAxiosSecure from './UseAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const UseTrainer = () => {
    const {user}=useAuth();
    const axiosSecure=UseAxiosSecure()
    const {data:isTrainer,isPending:isAdminLoading}=useQuery({
        queryKey: [user?.email,'isTrainer'],
        queryFn: async () => {
            const response=await axiosSecure.get(`/users//${user.email}`)
            // console.log(response.data);
            return response.data?.admin;
        },
    })
    return [isAdmin,isAdminLoading]
};

export default UseTrainer;