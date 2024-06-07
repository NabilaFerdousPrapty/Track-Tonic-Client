import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import UseAxiosCommon from "../../../hooks/UseAxiosCommon";

const TrainerDetails = () => {
  const { id } = useParams(); // Access the dynamic route parameter (trainer ID)
  const axiosCommon = UseAxiosCommon();
  const [trainer, setTrainer] = useState(null);

  useEffect(() => {
    const fetchTrainer = async () => {
      try {
        const { data } = await axiosCommon.get(`trainers/${id}`); // Fetch trainer data by ID
        setTrainer(data);
      } catch (error) {
        console.error("Error fetching trainer data:", error);
      }
    };

    fetchTrainer();
  }, [axiosCommon, id]);
  console.log(trainer);
  return (
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
                 {
                    trainer.designation
                 }
                </span>
                <a
                  href="#"
                  className="block mt-2 text-xl font-semibold text-gray-800 transition-colors duration-300 transform dark:text-white hover:text-gray-600 hover:underline"
                  tabindex="0"
                  role="link"
                >
                 {
                    trainer.other_info
                 }
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
              <div className="flex  justify-between items-center my-5">
                  {
                    trainer.social_media_links.map((link, index) => (
                      <a
                        key={index}
                        href={link.url}
                        className="mx-2 text-sky-400 dark:text-sky-300 hover:text-sky-500 dark:hover:text-sky-400 transition-colors duration-300"
                        tabindex="0"
                        role="link"
                      >
                        Social Media
                      </a>
                    ))
                  }
                  </div>
            </div>
          </div>
          <div >
            {
                trainer.available_slots.map((slot, index) => (
                    <div key={index} className="flex flex-col items-center justify-between w-full mt-4 bg-white rounded-lg shadow-md dark:bg-gray-800 my-2 gap-4 p-6" >
                        <div>
                        <span className="text-xs font-semibold text-blue-600 uppercase dark:text-blue-400">
                            {slot.day}
                        </span>
                        <a
                            href="#"
                            className="block mt-2 text-xl font-semibold text-gray-800 transition-colors duration-300 transform dark:text-white hover:text-gray-600 hover:underline"
                            tabindex="0"
                            role="link"
                        >
                           {slot}
                        </a>
                       <p>
                        {trainer.name} is available on {slot} .
                       </p>
                       <p>
                        {trainer.email} is the email to contact {trainer.name} for booking.
                       </p>
                        </div>
                        <div className="flex items-center justify-center">
                       <Link to={`/book/${trainer._id}`} className="mx-2 font-semibold text-gray-700 dark:text-gray-200 btn my-5">
                       <button
                            
                            className="bg-teal-300 px-3 py-3 rounded mx-2 font-semibold text-gray-700 dark:text-gray-200"
                            
                            
                        >
                            Book Now
                        </button>
                        </Link>
                        </div>
                    </div>
                    ))
            }
          </div>
        </div>
      ) : (
        <p>
            <span>Loading...</span>
        </p>
      )}
    </div>
  );
};

export default TrainerDetails;
