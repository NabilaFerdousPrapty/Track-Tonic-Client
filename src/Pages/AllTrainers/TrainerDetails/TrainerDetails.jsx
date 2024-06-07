import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
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

  return (
    <div>
      {trainer ? (
        <div>
          <h2>{trainer.name}</h2>
          <p>{trainer.designation}</p>
        
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default TrainerDetails;
