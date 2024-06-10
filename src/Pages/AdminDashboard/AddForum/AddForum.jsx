import React, { useState } from "react";
import logo from "../../../assets/img.png";
import { useForm } from "react-hook-form";
const AddForum = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    const {}=data

  };

  return (
    <div>
      <div className="flex w-full max-w-full mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 lg:max-w-4xl ">
        <div className="w-full px-6 py-2 md:px-8 ">
          <div className="flex justify-center mx-auto">
            <img className="w-auto h-20 " src={logo} alt="" />
          </div>

          <p className="mt-3 text-xl text-center text-gray-600 dark:text-gray-200">
            Add Forum data
          </p>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mt-4">
              <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">
                Post Name
              </label>
              <input
               {...register("post_name", { required: true })}
                name="post_name"
                className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
                type="text"
              />
               {errors.post_name && (
                <span className="text-red-700">This field is required</span>
              )}
            </div>

            <div className="mt-4">
              <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">
                Image URL
              </label>
              <input
                name="image"
                {...register("image", { required: true })}
                className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
                type="url"
              />
                 {errors.image && (
                <span className="text-red-700">This field is required</span>
              )}
            </div>

            <div className="mt-4">
              <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">
                Details
              </label>
              <textarea
               {...register("details", { required: true })}
                name="details"
                className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
                rows="4"
              ></textarea>
                 {errors.details && (
                <span className="text-red-700">This field is required</span>
              )}
            </div>

            <div className="mt-4">
              <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">
                Author Name
              </label>
              <input
               {...register("author_name", { required: true })}
                name="author_name"
                className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300focus:outline-none focus:ring focus:ring-blue-300"
                type="text"
              />
                 {errors.author_name && (
                <span className="text-red-700">This field is required</span>
              )}
            </div>

            <div className="mt-4">
              <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">
                Author Image URL
              </label>
              <input
               {...register("author_image", { required: true })}
                name="author_image"
                className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
                type="text"
              />
                 {errors.author_image && (
                <span className="text-red-700">This field is required</span>
              )}
            </div>

            <div className="mt-4">
              <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">
                Author Email
              </label>
              <input
              
               {...register("author_email", { required: true })}
                name="author_email"
                className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
                type="email"
              />
                 {errors.author_email && (
                <span className="text-red-700">This field is required</span>
              )}
            </div>

            <div className="mt-4">
              <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">
                Other Info
              </label>
              <input
               {...register("other_info", { required: true })}
                name="other_info"
                className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
                type="text"
              />
                 {errors.other_info && (
                <span className="text-red-700">This field is required</span>
              )}
            </div>

            <div className="mt-6">
              <button type="submit" className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddForum;
