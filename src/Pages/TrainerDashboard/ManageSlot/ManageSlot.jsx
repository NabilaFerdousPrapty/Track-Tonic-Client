import React from "react";
import Swal from "sweetalert2";
import UseAxiosSecure from "./../../../hooks/UseAxiosSecure";
import useAuth from "../../../hooks/UseAuth";
import { useQuery } from "@tanstack/react-query";

const ManageSlot = () => {
  const axiosSecure = UseAxiosSecure();
  const { user } = useAuth();
  const { data: trainers = [], refetch } = useQuery({
    queryKey: ["trainers"],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/trainers/email/${encodeURIComponent(user.email)}`);
      return data;
    },
  });
  console.log(trainers);

  const handleDelete = (email, value,label) => {
    const dayValue = {
      value: value,
      label: label,
    };

    Swal.fire({
      title: "Confirm Deletion",
      text: `Are you sure you want to delete ${value} availability for ${email}?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        console.log(dayValue);
        axiosSecure
          .patch(`/deleteAvailability/${encodeURIComponent(email)}`, dayValue)
          .then((response) => {
            if (response.status === 200) {
              Swal.fire(
                "Deleted!",
                `Availability for ${value} has been deleted.`,
                "success"
              );
              refetch(); // Refetch data to update the UI
            } else {
              Swal.fire("Error!", "Failed to delete availability.", "error");
            }
          })
          .catch((error) => {
            console.log(error);
            Swal.fire("Error!", "Failed to delete availability.", "error");
          });
      }
    });
  };

  return (
    <div>
      {trainers.map((trainer) => (
        <div key={trainer._id}>
          <h1>{trainer.name}</h1>
          <h2>{trainer.email}</h2>
          <h3>{trainer.status}</h3>
          {trainer.availableDays.map((day, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-between w-full mt-4 bg-white rounded-lg shadow-md dark:bg-gray-800 my-2 gap-4 p-6"
            >
              <div>
                <span className="text-xs font-semibold text-blue-600 uppercase dark:text-blue-400">
                  {day.label}
                </span>
                <p className="text-center block mt-2 text-xl font-semibold text-gray-800 transition-colors duration-300 transform dark:text-white hover:text-gray-600 hover:underline">
                  {trainer.available_times[index]}
                </p>
                <p className="gap-6 text-sm text-blue-300 mx-3 font-bold flex-col  flex justify-center items-center ">
                  <div key={index}>
                    <span className="flex items-center justify-center">
                      <button
                        className="bg-teal-800 text-white px-7 py-3 rounded-xl"
                        onClick={() => handleDelete(trainer.email, day.value,day.label)}
                      >
                        Delete Day or Time
                      </button>
                    </span>
                  </div>
                </p>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default ManageSlot;
