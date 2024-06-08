
import useAuth from './UseAuth';
import UseAxiosSecure from './UseAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const UseTrainer = () => {
    const {user}=useAuth();
    const axiosSecure=UseAxiosSecure()
    const {data:isTrainer,isPending:isAdminLoading}=useQuery({
        queryKey: [user?.email,'isTrainer'],
        queryFn: async () => {
            const response=await axiosSecure.get(`/users/trainer/${user.email}`)
            // console.log(response.data);
            return response.data?.trainer;
        },
    })
    return [isTrainer,isAdminLoading]
};

export default UseTrainer;