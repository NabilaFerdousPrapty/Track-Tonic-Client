import React from "react";
import useAuth from "../../../hooks/UseAuth";
import { MdOutlineGeneratingTokens } from "react-icons/md";
import UseAxiosSecure from "../../../hooks/UseAxiosSecure";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import {  FaPhotoFilm } from "react-icons/fa6";
import { MdOutlineFeaturedPlayList } from "react-icons/md";

const AddReview = () => {
  const { user, setUser } = useAuth();
  const axiosSecure = UseAxiosSecure();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const { name,photo, email, rating, review,feature } = data;
    const date = new Date().toDateString();
    const reviewData = {
      name,
      email,
      rating,
      date,
      review,
      feature,
        image:photo,
    };
    // console.log(reviewData);
    axiosSecure
      .post("/reviews", reviewData)
      .then((response) => {
        // console.log(response);
        Swal.fire({
          icon: "success",
          title: "Review Added",
          text: "Your review has been added successfully",
        });
      })
      .catch((error) => {
        // console.log(error);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
        });
      });
  };

  return (
    <div>
      <div>
        <div>
          <section className="bg-white dark:bg-gray-900">
            <div className="container flex items-center justify-center min-h-screen px-6 mx-auto">
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="w-full max-w-lg"
              >
                <div className="flex justify-center mx-auto">
                  <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-200">
                    Add a Review
                  </h2>
                </div>

                <div className="relative flex items-center mt-8">
                  <span className="absolute">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                  </span>

                  <input
                    type="text"
                    {...register("name", { required: true })}
                    className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    placeholder="Username"
                    value={user.displayName}
                  />
                  {errors.name && (
                    <span className="text-red-700">This field is required</span>
                  )}
                </div>

                <div className="relative flex items-center mt-6">
                  <span className="absolute">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </span>

                  <input
                    type="email"
                    readOnly
                    value={user.email}
                    className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    placeholder="Email address"
                  />
                </div>
                <div className="relative flex items-center mt-6">
                  <span className="absolute">
                    
                    <FaPhotoFilm className="ml-3 text-gray-400 text-xl"/>
                  </span>

                  <input
                    type="url"
                    {...register("photo", { required: true })}
                    value={user.photoURL}
                    className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    placeholder="photo url"
                  />
                  {errors.photo && (
                    <span className="text-red-700">This field is required</span>
                  )}
                </div>
                <div className="relative flex items-center mt-6">
                  <span className="absolute">
                  <MdOutlineFeaturedPlayList className="ml-3 text-gray-400 text-xl" />
                  </span>

                  <input
                    type="text"
                    {...register("feature", { required: true })}
                   
                    className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    placeholder="tell us about the feature you are reviewing"
                  />
                  {errors.feature && (
                    <span className="text-red-700">This field is required</span>
                  )}
                </div>

                <div className="relative flex items-center mt-4">
                  <span className="absolute">
                  < MdOutlineGeneratingTokens className="ml-3 text-gray-400 text-xl" />
                  </span>

                  <input
                    type="number"
                    {...register("rating", { required: true })}
                    className="block w-full px-10 py-3 text-gray-700 bg-white border rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    placeholder="rating out of 5"
                  />
                  {errors.rating && (
                    <span className="text-red-700">This field is required</span>
                  )}
                </div>
                <div className="relative flex items-center mt-4">
                  <span className="absolute">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M12 19l-7-7 3-3 1.5 1.5L12 16l6.5-6.5L18 10z"
                      />
                    </svg>
                  </span>

                  <input
                    type="text"
                    {...register("review", { required: true })}
                    className="block w-full px-10 py-10 text-gray-700 bg-white border rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    placeholder="your review"
                  />
                  {errors.review && (
                    <span className="text-red-700">This field is required</span>
                  )}
                </div>

                <div className="mt-6">
                  <button
                    type="submit"
                    className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
                  >
                    Add Review
                  </button>
                </div>
              </form>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default AddReview;
