import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import UseAxiosCommon from "../../../hooks/UseAxiosCommon";
import useAuth from "../../../hooks/UseAuth";
import UseAxiosSecure from "../../../hooks/UseAxiosSecure";

const TrainerDetails = () => {
  const { user, setUser } = useAuth();
  const { id } = useParams(); // Access the dynamic route parameter (trainer ID)
  const axiosCommon = UseAxiosCommon();
  const [loading, setLoading] = useState(true);
  const axiosSecure = UseAxiosSecure();
  const [trainer, setTrainer] = useState(null);

  useEffect(() => {
    const fetchTrainer = async () => {
      try {
        const { data } = await axiosCommon.get(`trainers/${id}`); // Fetch trainer data by ID
        setTrainer(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching trainer data:", error);
        setLoading(false);
      }
    };

    fetchTrainer();
  }, [axiosCommon, id]);
  // console.log(trainer);
  
  if(loading){
    return<div className="flex items-center justify-center h-screen">
      <div className="w-52 h-52 border-t-2 border-b-2 border-blue-500 rounded-full animate-spin"></div>
    </div>
  }
  return (
    <div>
      <div>
        {trainer ? (
          <div className="grid grid-cols-1 lg:grid-cols-4 p-5 my-4">
            <div className="max-w-2xl overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800 col-span-3">
              <img
                className="object-cover w-full h-screen"
                src={trainer.profile_image}
                alt="Article"
              />

              <div className="p-6">
                <div>
                  <span className="text-xs font-medium text-blue-600 uppercase dark:text-blue-400">
                    {trainer.designation}
                  </span>
                  <a
                    href="#"
                    className="block mt-2 text-xl font-semibold text-gray-800 transition-colors duration-300 transform dark:text-white hover:text-gray-600 hover:underline"
                    tabindex="0"
                    role="link"
                  >
                    {trainer.other_info}
                  </a>
                  <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                    {trainer.bio}
                  </p>
                  <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 font-merriweather font-semibold text-center">
                    {trainer.background_and_qualifications}
                  </p>
                </div>

                <div className="mt-4 text-center">
                  <div className="flex items-center justify-center">
                    <div className="flex items-center justify-center">
                      <a
                        href="#"
                        className="mx-2 font-semibold text-gray-700 dark:text-gray-200"
                        tabindex="0"
                        role="link"
                      >
                        {trainer.name}
                      </a>
                    </div>
                    <span className="mx-1 text-xs text-gray-600 dark:text-gray-300">
                      {trainer.location}
                    </span>
                  </div>
                </div>
               
              </div>
            </div>
            <div>
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
          </div>
        ) : (
          <p>
            <span>Loading...</span>
          </p>
        )}
      </div>
      <section className="bg-gray-100 dark:bg-gray-800 lg:py-12 lg:flex lg:justify-center">
        <div className="overflow-hidden bg-white dark:bg-gray-900 lg:mx-8 lg:flex lg:max-w-6xl lg:w-full lg:shadow-md lg:rounded-xl">
          <div className="lg:w-1/2">
            <div
              className="h-64 bg-cover lg:h-full"
                style={{
                    backgroundImage:
                        "url('https://i.ibb.co/MBC4gFG/online-registration-blue-background-3d-render-975254-866.jpg')",
                    }}
            >
                
            </div>
          </div>

          <div className="max-w-xl px-6 py-12 lg:max-w-5xl lg:w-1/2">
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white md:text-3xl">
              Build Your New <span className="text-blue-500">Become A trainer</span>
            </h2>

            <p className="mt-4 text-gray-500 dark:text-gray-300">
              If you are a fitness enthusiast and want to become a trainer, you
                can join our team. We are looking for passionate and dedicated
                individuals who are willing to help others achieve their fitness
                goals. We offer competitive pay and flexible hours. Apply now!
            </p>

            <div className="inline-flex w-full mt-6 sm:w-auto">
              <Link
                to="/becomeATrainer"
                className="inline-flex items-center justify-center w-full px-6 py-2 text-sm text-white duration-300 bg-gray-800 rounded-lg hover:bg-gray-700 focus:ring focus:ring-gray-300 focus:ring-opacity-80"
              >
                Become a Trainer
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TrainerDetails;
