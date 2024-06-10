import React, { useState } from 'react';
import UseAxiosSecure, { axiosSecure } from './../../../hooks/UseAxiosSecure';
import useAuth from '../../../hooks/UseAuth';
import { Link } from 'react-router-dom';

const ManageSlot = () => {
    const axiosSecure = UseAxiosSecure();
    const [trainers, setTrainers] = useState([]);
    const { user } = useAuth();
    axiosSecure.get(`/trainers/email/${user.email}`)
    .then((response)=>{
        console.log(response.data);
        setTrainers(response.data);
    })
    .catch((error)=>{
        console.log(error);
    })
    // console.log(trainers);

    return (
        <div>
           {
            trainers.map((trainer) => (
                <div key={trainer._id}>
                    <h1>{trainer.name}</h1>
                    <h2>{trainer.email}</h2>
                    <h3>{trainer.status}</h3>
                    {trainer.available_times.map((slot, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center justify-between w-full mt-4 bg-white rounded-lg shadow-md dark:bg-gray-800 my-2 gap-4 p-6"
                >
                  <div>
                    <span className="text-xs font-semibold text-blue-600 uppercase dark:text-blue-400">
                      {slot.day}
                    </span>
                    <p
                     
                      className="text-center block mt-2 text-xl font-semibold text-gray-800 transition-colors duration-300 transform dark:text-white hover:text-gray-600 hover:underline"
                      
                    >
                      {slot}
                    </p>
                    <p className="gap-6 text-sm text-blue-300 mx-3 font-bold flex-col  flex justify-center items-center ">
                    {
                      trainer.availableDays.map((day, index) => (
                        <div key={index}>
                          <span>
                          {day.label}
                          </span>
                        {
                          
                           <span className="flex items-center justify-center">
                            
                           <Link
                          to={{
                            pathname: `/booking/${trainer._id}/${slot}/${day.label}`,
                            
                          }}
                          
                             className=" font-semibold text-gray-700 dark:text-gray-200 btn "
                           >
                             <button className="bg-teal-300 px-3 py-3 rounded font-semibold text-gray-700 dark:text-gray-200">
                               Book Now
                             </button>
                           </Link>
                         </span>
                         
                        } </div>
                        
                      ))
                     }
                    </p>
                    <p>
                      {trainer.name} is available on {slot} .
                    </p>
                    <p>
                      {trainer.email} is the email to contact {trainer.name} for
                      booking.
                    </p>
                  </div>
                 
                </div>
              ))}
                </div>
            ))
                
           }
        </div>
    );
};

export default ManageSlot;