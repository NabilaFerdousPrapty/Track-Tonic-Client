import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import UseAxiosCommon from "../../hooks/UseAxiosCommon";

const AllClasses = () => {
  const [classes, setClasses] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [classesPerPage] = useState(6);
  const [loading, setLoading] = useState(false);
  const axiosCommon = UseAxiosCommon();

  useEffect(() => {
    const fetchClasses = async () => {
      setLoading(true);
      try {
        const response = await axiosCommon.get(`/classes`);
        setClasses(response.data);
      } catch (error) {
        console.error("Error fetching classes:", error);
        // Handle error here (e.g., display an error message)
      } finally {
        setLoading(false);
      }
    };

    fetchClasses();
  }, [axiosCommon, currentPage, classesPerPage]);

  const handleClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const renderTrainers = (trainers) => {
    return trainers.slice(0, 5).map((trainer) => (
      <Link to={`/trainer/${trainer._id}`} key={trainer._id}>
        <img
          src={trainer.image}
          alt={trainer.name}
          className="w-16 h-16 rounded-full mr-2"
        />
      </Link>
    ));
  };

  // Logic for pagination
  const indexOfLastClass = currentPage * classesPerPage;
  const indexOfFirstClass = indexOfLastClass - classesPerPage;
  const currentClasses = classes.slice(indexOfFirstClass, indexOfLastClass);

  // Render classes or loading message
  let content;
  if (loading) {
    content = <div>Loading...</div>;
  } else if (currentClasses.length === 0) {
    content = <div>No classes available.</div>;
  } else {
    content = currentClasses.map((classItem) => (
        <div key={classItem._id} className="flex flex-col overflow-hidden bg-white rounded shadow-md text-slate-500 shadow-slate-200 sm:flex-row mb-4">
          {/* Image */}
          <figure className="flex-1">
            <img
              src={classItem.image}
              alt={classItem.class_name}
              className="object-cover min-h-full aspect-auto"
            />
          </figure>
          {/* Body */}
          <div className="flex-1 p-6 sm:mx-6 sm:px-0">
            <header className="flex gap-4 mb-4">
              {/* Trainer Avatar */}
              {classItem.trainer ? (
                <Link to={`/trainer/${classItem.trainer._id}`} className="relative inline-flex items-center justify-center w-12 h-12 text-white rounded-full">
                  <img
                    src={classItem.trainer.image}
                    alt={classItem.trainer.name}
                    title={classItem.trainer.name}
                    width="48"
                    height="48"
                    className="max-w-full rounded-full"
                  />
                </Link>
              ) : (
                <div className="w-12 h-12 rounded-full bg-gray-200"></div> // Placeholder for missing trainer avatar
              )}
              {/* Class Name and Date */}
              <div>
                <h3 className="text-xl font-medium text-slate-700">{classItem.class_name}</h3>
                {classItem.trainer && (
                  <p className="text-sm text-slate-400">By {classItem.trainer.name}, {classItem.date}</p>
                )}
              </div>
            </header>
            {/* Class Description */}
            <p>{classItem.details}</p>
          </div>
        </div>
      ));
      
  }

  // Render pagination buttons
  const paginationButtons = Array.from({
    length: Math.ceil(classes.length / classesPerPage),
  }).map((_, index) => (
    <button
      key={index}
      onClick={() => handleClick(index + 1)}
      className={`mx-1 px-3 py-1 rounded-md ${
        currentPage === index + 1
          ? "bg-blue-500 text-white"
          : "bg-gray-200 text-gray-700 hover:bg-gray-300"
      }`}
    >
      {index + 1}
    </button>
  ));

  // Render component
  return (
    <div>
      <h2>All Classes</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {content}
      </div>
      {/* Pagination */}
      <div className="mt-4 flex justify-center">{paginationButtons}</div>
    </div>
  );
};

export default AllClasses;
