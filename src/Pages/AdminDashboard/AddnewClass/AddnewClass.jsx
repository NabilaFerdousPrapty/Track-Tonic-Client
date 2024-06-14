import React, { useState } from "react";
import logo from "../../../assets/img.png";
import { useForm } from "react-hook-form";
import UseAxiosSecure from "../../../hooks/UseAxiosSecure";
import Swal from "sweetalert2";
const AddNewClass = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm();
  const axiosSecure=UseAxiosSecure();

  const onSubmit = (data) => {
    const {
      class_name,
      image,
      details,
      trainer_name,
      trainer_image,
      trainer_designation,
      class_type,
    }=data
    const postData={
      class_name,
      image,
      details,
      trainer_name,
      trainer_image,
      trainer_designation,
      total_bookings:0,
      class_type,
    }
    axiosSecure.post("/classes",postData).then((response)=>{
      // console.log(response.data);
      if (response.data.insertedId) {
        Swal.fire({
          title: "Success",
          text: "Class data added successfully",
          icon: "success",
          confirmButtonText: "Ok",
        });
        
      }
      reset();
    }).catch((error)=>{
      Swal.fire({
        title: "Error",
        text: "Something went wrong",
        icon: "error",
        confirmButtonText: "Ok",
      });


      // console.log(error);
    }
    )
  }
  return (
    <div className="flex w-full max-w-full mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 lg:max-w-4xl">
      <div className="w-full px-6 py-2 md:px-8 ">
        <div className="flex justify-center mx-auto">
          <img className="w-auto h-20 " src={logo} alt="" />
        </div>

        <p className="mt-3 text-xl text-center text-gray-600 dark:text-gray-200">
          Add New Class
        </p>

       <form onSubmit={handleSubmit(onSubmit)} action="">
       <div className="mt-4">
          <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">
            Class Name
          </label>
          <input
            name="classname"
            {...register("class_name", { required: true })}
            className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
            type="text"
          />
          {errors.class_name && (
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
            className="block w-full px-4 py-1 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
            type="text"
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
            name="details"
            {...register("details", { required: true })}
            className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
            rows="4"
          ></textarea>
          {errors.details && (
            <span className="text-red-700">This field is required</span>
          )}
        </div>

        <div className="mt-4">
          <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">
            Trainer Name
          </label>
          <input
            name="trainer_name"
            {...register("trainer_name", { required: true })}
            className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
            type="text"
          />
          {errors.trainer_name && (
            <span className="text-red-700">This field is required</span>
          )}
        </div>

        <div className="mt-4">
          <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">
            Trainer Image URL
          </label>
          <input
            name="trainer_image"
            {...register("trainer_image", { required: true })}
            className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
            type="text"
          />
          {errors.trainer_image && (
            <span className="text-red-700">This field is required</span>
          )}
        </div>

        <div className="mt-4">
          <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">
            Trainer Designation
          </label>
          <input
            name="trainer_designation"
            {...register("trainer_designation", { required: true })}
            className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
            type="text"
          />
          {errors.trainer_designation && (
            <span className="text-red-700">This field is required</span>
          )}
        </div>

      
        <div className="mt-4">
          <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">
            Class Type
          </label>
          <input
            name="class_type"
            {...register("class_type", { required: true })}
            className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
            type="text"
          />
        </div>

        <div className="mt-6">
          <button type="submit" className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50">
            Submit
          </button>
        </div>
       </form>
      </div>
    </div>
  );
};

export default AddNewClass;
