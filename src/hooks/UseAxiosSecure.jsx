/* eslint-disable react-refresh/only-export-components */
import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from "./UseAuth";

export const axiosSecure=axios.create({
    baseURL:import.meta.env.VITE_API_URL,
    
});
const UseAxiosSecure = () => {
    const navigate=useNavigate();
    const {LogOut}=useAuth();
    axiosSecure.interceptors.request.use(function (config) {
        // Do something before request is sent
        const token=localStorage.getItem('access-token');
        // console.log('Request sent',token);
        config.headers.authorization=`Bearer ${token}`;
        return config;
      }, function (error) {
        // Do something with request error
        return Promise.reject(error);
      });

      //for 401 and 403 error
      axiosSecure.interceptors.response.use(function (response) {
        // Any status code that lie within the range of 2xx cause this function to trigger
        // Do something with response data
        return response;
      }, async (error)=> {
        // Any status codes that falls outside the range of 2xx cause this function to trigger
        // Do something with response error
        const status=error.response.status;
        console.log('Error',status);
        if(status===401 || status===403){
          localStorage.removeItem('access-token');
          await LogOut();
          navigate('/login');
        }
        return Promise.reject(error);
      });
    return axiosSecure;
};

export default UseAxiosSecure;