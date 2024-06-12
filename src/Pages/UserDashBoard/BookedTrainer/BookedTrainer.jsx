import { useEffect, useState } from "react";
import UseAxiosSecure from "./../../../hooks/UseAxiosSecure";
import useAuth from "../../../hooks/UseAuth";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";

const BookedTrainer = () => {
  const axiosSecure = UseAxiosSecure();
  const { user } = useAuth();
  const [trainers, setTrainers] = useState([]);
  const [loading, setLoading] = useState(true);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const onSubmit = (data) => {
    const { name, photo, email, rating, review, feature } = data;
    const date = new Date().toDateString();
    const reviewData = {
      name,
      email,
      rating,
      date,
      review,
      feature,
      image: photo,
    };
    console.log(reviewData);
    axiosSecure
      .post("/reviews", reviewData)
      .then((response) => {
        console.log(response);
        Swal.fire({
          icon: "success",
          title: "Review Added",
          text: "Your review has been added successfully",
        });
        closeModal();
      })
      .catch((error) => {
        console.log(error);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
        });
      });
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosSecure.get(`/payments/${user.email}`);
        setTrainers(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, [axiosSecure, user.email]);
  console.log(trainers);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {trainers.map((trainer) => (
        <div
          key={trainer._id}
          className="flex flex-col overflow-hidden bg-white rounded shadow-md text-slate-500 shadow-slate-200 sm:flex-row my-5 p-8"
        >
          <figure className="flex-1 bg-slate-300 rounded-xl my-5 p-5">
            <img
              src={
                trainer.trainer_image || "https://picsum.photos/id/118/800/600"
              }
              alt={trainer.trainer_name}
              className="object-cover h-52 aspect-auto mx-auto rounded-xl"
            />
          </figure>
          <div className="flex-1 p-6 sm:mx-6 sm:px-0">
            <header className="flex gap-4 mb-4">
              <a
                href="#"
                className="relative inline-flex items-center justify-center w-12 h-12 text-white rounded-full"
              >
                <img
                  src={trainer.user_image || "https://i.pravatar.cc/48?img=24"}
                  alt={trainer.user_name}
                  title={trainer.user_name}
                  width="48"
                  height="48"
                  className="max-w-full rounded-full"
                />
              </a>
              <div>
                <h3 className="text-xl font-medium text-slate-700">
                  {trainer?.slot_name.date}, {trainer?.slot_name.time}
                </h3>
                <p className="text-sm text-slate-400">
                  By {trainer?.user_name},on {trainer?.date}
                </p>
              </div>
            </header>
            <p>
              {trainer.package_name} brought in ${trainer?.price}
            </p>
            <p>
              <span className="font-semibold">Trainer:</span> {trainer?.trainer_name}

            </p>
            <p>
              <span className="font-semibold">Designation:</span> {trainer?.trainer_designation}
            </p>
            <button
              onClick={openModal}
              className="px-6 my-5 py-2 mx-auto tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80"
            >
              Add Review
            </button>
          </div>
        </div>
      ))}
      {trainers.length === 0 && (
        <div className="text-5xl text-center font-semibold">
          No trainers booked yet
        </div>
      )}

      {isModalOpen && (
        <div className="fixed inset-0 z-10 overflow-y-auto bg-gray-800 bg-opacity-50 flex justify-center items-center">
          <div className="relative bg-white w-full max-w-md p-6 rounded-lg">
            <button
              onClick={closeModal}
              className="absolute top-0 right-0 m-4 text-gray-600 hover:text-gray-900"
            >
              Close
            </button>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Username
                </label>
                <input
                  {...register("name", { required: true })}
                  type="text"
                  id="name"
                  value={user.displayName}
                  className="block w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:border-blue-400 focus:ring focus:ring-blue-300"
                />
                {errors.name && (
                  <p className="mt-2 text-sm text-red-600">
                    This field is required
                  </p>
                )}
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email address
                </label>
                <input
                  type="email"
                  id="email"
                  readOnly
                  value={user.email}
                  className="block w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:border-blue-400 focus:ring focus:ring-blue-300"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="photo"
                  className="block text-sm font-medium text-gray-700"
                >
                  Photo URL
                </label>
                <input
                  {...register("photo", { required: true })}
                  type="url"
                  id="photo"
                  className="block w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:border-blue-400 focus:ring focus:ring-blue-300"
                />
                {errors.photo && (
                  <p className="mt-2 text-sm text-red-600">
                    This field is required
                  </p>
                )}
              </div>
              <div className="mb-4">
                <label
                  htmlFor="feature"
                  className="block text-sm font-medium text-gray-700"
                >
                  Feature
                </label>
                <input
                  {...register("feature", { required: true })}
                  type="text"
                  id="feature"
                  className="block w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:border-blue-400 focus:ring focus:ring-blue-300"
                />
                {errors.feature && (
                  <p className="mt-2 text-sm text-red-600">
                    This field is required
                  </p>
                )}
              </div>
              <div className="mb-4">
                <label
                  htmlFor="rating"
                  className="block text-sm font-medium text-gray-700"
                >
                  Rating
                </label>
                <input
                  {...register("rating", { required: true })}
                  type="number"
                  id="rating"
                  className="block w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:border-blue-400 focus:ring focus:ring-blue-300"
                />
                {errors.rating && (
                  <p className="mt-2 text-sm text-red-600">
                    This field is required
                  </p>
                )}
              </div>
              <div className="mb-4">
                <label
                  htmlFor="review"
                  className="block text-sm font-medium text-gray-700"
                >
                  Review
                </label>
                <textarea
                  {...register("review", { required: true })}
                  id="review"
                  rows="4"
                  className="block w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:border-blue-400 focus:ring focus:ring-blue-300"
                ></textarea>
                {errors.review && (
                  <p className="mt-2 text-sm text-red-600">
                    This field is required
                  </p>
                )}
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80"
              >
                Add Review
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookedTrainer;
