import React, { useState } from "react";
import UseAxiosSecure from "./../../../hooks/UseAxiosSecure";
import useAuth from "../../../hooks/UseAuth";
import { FaEye } from "react-icons/fa";
import { useQuery } from "@tanstack/react-query";

const ActivityLog = () => {
  const axiosSecure = UseAxiosSecure();
  const { user } = useAuth();
  const [selectedMessage, setSelectedMessage] = useState("Wait for the admin to approve your request");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { data: trainers = [], isLoading: isTrainersLoading } = useQuery({
    queryKey: ["trainers"],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/pendingTrainers/${user.email}`);
      return data;
    },
  });

  const { data: rejectedTrainers = [], isLoading: isRejectedLoading } = useQuery({
    queryKey: ["rejectedTrainer"],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/rejectedTrainers/${user.email}`);
      return data;
    },
  });

  const isLoading = isTrainersLoading || isRejectedLoading;

  const handleOpenModal = (message) => {
    setSelectedMessage(message);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedMessage("");
  };

  return (
    <div>
      <div className="py-7 my-5">
        <h1 className="text-2xl font-semibold text-gray-800 dark:text-white text-center">Activity Log</h1>
        <p className="text-xl text-center my-2">
          Here you can see the activity log of your account. You can see the status of your request to be a trainer.
        </p>
      </div>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <>
          <ul>
            {trainers.length === 0 && rejectedTrainers.length === 0 ? (
              <div>
                <h1 className="text-center">
                  No Activity Found.You have not applied to be trainer yet.Apply now to be a trainer.
                  And wait for the admin to approve your request.
                </h1>
              </div>
            ) : (
              <>
                {trainers.map((trainer) => (
                  <div key={trainer._id} className="max-w-2xl px-8 py-4 bg-white rounded-lg shadow-md dark:bg-gray-800">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-light text-gray-600 dark:text-gray-400">
                        {trainer.designation}
                      </span>
                      <span
                        className="px-3 py-1 text-sm font-bold text-gray-100 transition-colors duration-300 transform bg-gray-600 rounded cursor-pointer hover:bg-gray-500"
                        role="button"
                      >
                        {trainer.status}
                      </span>
                    </div>
                    <div className="mt-2">
                      <span className="text-xl font-bold text-gray-700 dark:text-white">
                        {trainer.name}
                      </span>
                      <p className="mt-2 text-gray-600 dark:text-gray-300">
                        {trainer.email}
                      </p>
                    </div>
                    <div className="flex items-center justify-between mt-4">
                      
                      <div className="flex items-center">
                        <img
                          className="hidden object-cover w-10 h-10 mx-4 rounded-full sm:block"
                          src={trainer.profile_image}
                          alt="avatar"
                        />
                        <span
                          className="font-bold text-gray-700 cursor-pointer dark:text-gray-200"
                          role="link"
                        >
                          {trainer.name}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
                {rejectedTrainers.map((trainer) => (
                  <div key={trainer._id} className="max-w-2xl px-8 py-4 bg-white rounded-lg shadow-md dark:bg-gray-800">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-light text-gray-600 dark:text-gray-400">
                        {trainer.designation}
                      </span>
                      <span
                        className="px-3 py-1 text-sm font-bold text-gray-100 transition-colors duration-300 transform bg-red-600 rounded cursor-pointer hover:bg-red-500"
                        role="button"
                      >
                        {trainer.status}
                      </span>
                    </div>
                    <div className="mt-2">
                      <span className="text-xl font-bold text-gray-700 dark:text-white">
                        {trainer.name}
                      </span>
                      <p className="mt-2 text-gray-600 dark:text-gray-300">
                        {trainer.email}
                      </p>
                    </div>
                    <div className="flex items-center justify-between mt-4">
                      <span
                        className="text-blue-600 dark:text-blue-400 hover:underline cursor-pointer"
                        role="button"
                        onClick={() => handleOpenModal(trainer.reason)}
                      >
                        <FaEye />
                      </span>
                      <div className="flex items-center">
                        <img
                          className="hidden object-cover w-10 h-10 mx-4 rounded-full sm:block"
                          src={trainer.profile_image}
                          alt="avatar"
                        />
                        <span
                          className="font-bold text-gray-700 cursor-pointer dark:text-gray-200"
                          role="link"
                        >
                          {trainer.name}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </>
            )}
          </ul>
          {isModalOpen && (
            <div className="fixed inset-0 z-10 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
              <div className="flex items-end justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
                <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
                <div className="relative inline-block px-4 pt-5 pb-4 overflow-hidden text-left align-bottom transition-all transform bg-white rounded-lg shadow-xl rtl:text-right dark:bg-gray-900 sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6">
                  <div>
                    <div className="flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-gray-700 dark:text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                      </svg>
                    </div>
                    <div className="mt-2 text-center">
                      <h3 className="text-lg font-medium leading-6 text-gray-800 capitalize dark:text-white" id="modal-title">
                        Message
                      </h3>
                      <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                        {selectedMessage}
                      </p>
                    </div>
                  </div>
                  <div className="mt-5 sm:flex sm:items-center sm:justify-between">
                    <button
                      onClick={handleCloseModal}
                      className="w-full px-4 py-2 mt-2 text-sm font-medium tracking-wide text-gray-700 capitalize transition-colors duration-300 transform border border-gray-200 rounded-md sm:mt-0 sm:w-auto sm:mx-2 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800 hover:bg-gray-100 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-40"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default ActivityLog;
