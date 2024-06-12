import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import UseAxiosSecure from "../../../hooks/UseAxiosSecure";
import useAuth from "../../../hooks/UseAuth";
import { useQuery } from "@tanstack/react-query";

const ManageSlot = () => {
  const axiosSecure = UseAxiosSecure();
  const { user } = useAuth();

  const { data: trainers = [], refetch,isLoading } = useQuery({
    queryKey: ["trainers"],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/trainers/email/${user.email}`);
      return data;
    },
  });

  const handleDelete = (email, value, label) => {
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
        axiosSecure
          .patch(`/deleteAvailability/${email}`, dayValue)
          .then((response) => {
            if (response.status === 200) {
              Swal.fire(
                "Deleted!",
                `Availability for ${value} has been deleted.`,
                "success"
              );
              refetch(); 
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


const { data: payments = [],  } = useQuery({
    queryKey: ["payments"],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/collectPayment&&userEmail=${user.email}&&trainerName=${trainer.name}&&day=${day.value}&&time=${time}`);
      return data;
    },
  });
  
  return (
    <div className="container mx-auto p-4">
      {trainers && trainers?.length > 0 ? (
        trainers?.map((trainer) => (
          <div key={trainer._id} className="my-4">
            <h1 className="text-2xl font-bold mb-4">{trainer?.name}</h1>
            <table className="min-w-full bg-white border border-gray-200">
              <thead>
                <tr>
                  <th className="py-2 px-4 border-b">Day</th>
                  <th className="py-2 px-4 border-b">Time</th>
                  <th className="py-2 px-4 border-b">Action</th>
                  <th className="py-2 px-4 border-b">Booked by</th>
                
                </tr>
              </thead>
              <tbody>
                { trainer && trainer?.availableDays?.map((day, index) => {
                  const time = trainer?.available_times[index];
                 

                  return (
                    <tr key={index}>
                      <td className="py-2 px-4 border-b text-center">{day?.label}</td>
                      <td className="py-2 px-4 border-b text-center">{time}</td>
                      <td className="py-2 px-4 border-b text-center">
                        <button
                          className="bg-teal-800 text-white px-4 py-2 rounded"
                          onClick={() => handleDelete(trainer?.email, day?.value, day?.label)}
                        >
                          Delete
                        </button>
                      </td>
                      <td className="py-2 px-4 border-b text-center">
                    
                      </td>
                      <td className="py-2 px-4 border-b text-center">
                       
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        ))
      ) : (
        <div>No trainers found</div>
      )}
    </div>
  );
};

export default ManageSlot;
