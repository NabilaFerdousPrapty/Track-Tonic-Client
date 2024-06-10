import React, { useEffect, useState } from "react";
import UseAxiosSecure from "./../../../hooks/UseAxiosSecure";
import useAuth from "../../../hooks/UseAuth";
import { FaEye } from "react-icons/fa";

const ActivityLog = () => {
  const axiosSecure = UseAxiosSecure();
  const { user } = useAuth();
  const [trainers, setTrainers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTrainers = async () => {
      try {
        const response = await axiosSecure.get( `/trainers/${user.email}/pending`);
        setTrainers(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching trainers:", error);
        setLoading(false);
      }
    };

    fetchTrainers();
  }, [axiosSecure]);

  const handleOpenModal = (message) => {
    // Open modal and display rejection message or feedback provided by admin
    console.log("Rejection message:", message);
  };

  return (
    <div>
      <h1>Activity Log</h1>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <ul>
          {trainers.map((trainer) => (
            <li key={trainer._id}>
              <span>{trainer.name}</span>
              <span>{trainer.email}</span>
              <span>{trainer.status}</span>
              {trainer.status === "Rejected" && (
                <button onClick={() => handleOpenModal(trainer.rejectionMessage)}>
                  <FaEye />
                </button>
              )}
            </li>
          ))}
          {
            trainers.length === 0 && <div>No trainers available</div>
          }
        </ul>
      )}
    </div>
  );
};

export default ActivityLog;
