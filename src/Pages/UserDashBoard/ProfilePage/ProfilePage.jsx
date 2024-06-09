import React, { useState, useEffect } from "react";
import useAuth from "../../../hooks/UseAuth";
import { Link } from "react-router-dom";
import { updateProfile } from "firebase/auth";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const ProfilePage = () => {
  const { user, updateUserProfile } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("");
  const [photo, setPhoto] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    // Initialize form fields with user data
    setName(user?.displayName || "");
    setPhoto(user?.photoURL || "");
  }, [user]);

  const onSubmit = (data) => {
    const { name, photo } = data;
    updateUserProfile(name, photo)
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Profile Updated Successfully",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: error.message,
        });
      });
  };

  const convertToLocalDateString = (timestamp) => {
    return new Date(Number(timestamp)).toLocaleString();
  };

  return (
    <div>
      <h1 className="text-2xl font-semibold text-gray-800">Profile</h1>
      <p>This is your profile page. You can see your details here.</p>
      <div className="max-w-md p-8 sm:flex sm:space-x-6 bg-teal-100 text-gray-800  rounded-2xl">
        <div className="flex-shrink-0 w-full mb-6 h-44 sm:h-32 sm:w-32 sm:mb-0">
          <img
            src={user?.photoURL}
            alt=""
            className="object-cover object-center w-full h-full rounded bg-gray-500"
          />
        </div>
        <div className="flex flex-col space-y-4">
          <div>
            <h2 className="text-2xl font-semibold">{user?.displayName}</h2>
            <span className="text-sm text-gray-600"></span>
          </div>
          <div className="space-y-1">
            <span className="flex items-center space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                aria-label="Email address"
                className="w-4 h-4"
              >
                <path
                  fill="currentColor"
                  d="M274.6,25.623a32.006,32.006,0,0,0-37.2,0L16,183.766V496H496V183.766ZM464,402.693,339.97,322.96,464,226.492ZM256,51.662,454.429,193.4,311.434,304.615,256,268.979l-55.434,35.636L57.571,193.4ZM48,226.492,172.03,322.96,48,402.693ZM464,464H48V440.735L256,307.021,464,440.735Z"
                ></path>
              </svg>
              <span className="text-gray-600">{user?.email}</span>
            </span>
            <span className="flex items-center space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                aria-label="Phonenumber"
                className="w-4 h-4"
              >
                <path
                  fill="currentColor"
                  d="M449.366,89.648l-.685-.428L362.088,46.559,268.625,171.176l43,57.337a88.529,88.529,0,0,1-83.115,83.114l-57.336-43L46.558,362.088l42.306,85.869.356.725.429.684a25.085,25.085,0,0,0,21.393,11.857h22.344A327.836,327.836,0,0,0,461.222,133.386V111.041A25.084,25.084,0,0,0,449.366,89.648Zm-20.144,43.738c0,163.125-132.712,295.837-295.836,295.837h-18.08L87,371.76l84.18-63.135,46.867,35.149h5.333a120.535,120.535,0,0,0,120.4-120.4v-5.333l-35.149-46.866L371.759,87l57.463,28.311Z"
                ></path>
              </svg>
              <span className="text-gray-600">+25 381 77 983</span>
            </span>
            <div className="space-y-1">
              <div className="flex items-center space-x-2">
                <span className="font-semibold">Created At: </span>
                <span className="text-gray-600">
                  {convertToLocalDateString(user?.reloadUserInfo.createdAt)}
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="font-semibold">Last Login At: </span>
                <span className="text-gray-600">
                  {convertToLocalDateString(user?.reloadUserInfo.lastLoginAt)}
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="font-semibold">Token Expiration Time: </span>
                <span className="text-gray-600">
                  {convertToLocalDateString(
                    user?.stsTokenManager?.expirationTime
                  )}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative flex justify-center my-4">
        <button
          onClick={() => setIsOpen(true)}
          className="px-6 py-2 mx-auto tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80"
        >
          Update Your Profile
        </button>

        {isOpen && (
          <div
            className="fixed inset-0 z-10 overflow-y-auto"
            aria-labelledby="modal-title"
            role="dialog"
            aria-modal="true"
          >
            <div className="flex items-end justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
              <span
                className="hidden sm:inline-block sm:h-screen sm:align-middle"
                aria-hidden="true"
              >
                &#8203;
              </span>

              <div className="relative inline-block px-4 pt-5 pb-4 overflow-hidden text-left align-bottom transition-all transform bg-white rounded-lg shadow-xl dark:bg-gray-900 sm:my-8 sm:w-full sm:max-w-sm sm:p-6 sm:align-middle">
                <h3
                  className="text-lg font-medium leading-6 text-gray-800 capitalize dark:text-white"
                  id="modal-title"
                >
                  Your Info
                </h3>
                <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                  You can update your profile here.
                </p>

                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="mt-4"
                  action="#"
                >
                  <label
                    htmlFor="emails-list"
                    className="text-sm text-gray-700 dark:text-gray-200"
                  >
                    Email address
                  </label>

                  <label className="block mt-3" htmlFor="email">
                    <input
                      readOnly
                      value={user?.email}
                      type="email"
                      name="email"
                      id="email"
                      className="block w-full px-4 py-3 text-sm text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300"
                    />
                  </label>

                  <label className="block mt-3" htmlFor="name">
                    <input
                      {...register("name", { required: true })}
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Your Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="block w-full px-4 py-3 text-sm text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300"
                    />
                    {errors.name && (
                      <span className="text-red-700">
                        This field is required
                      </span>
                    )}
                  </label>

                  <label className="block mt-3" htmlFor="photo">
                    <input
                      {...register("photo", { required: true })}
                      type="url"
                      name="photo"
                      id="photo"
                      placeholder="Your Photo URL"
                      value={photo}
                      onChange={(e) => setPhoto(e.target.value)}
                      className="block w-full px-4 py-3 text-sm text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300"
                    />
                    {errors.photo && (
                      <span className="text-red-700">
                        This field is required
                      </span>
                    )}
                  </label>

                  <div className="mt-4 sm:flex sm:items-center sm:-mx-2">
                    <button
                      type="button"
                      onClick={() => setIsOpen(false)}
                      className="w-full px-4 py-2 text-sm font-medium tracking-wide text-gray-700 capitalize transition-colors duration-300 transform border border-gray-200 rounded-md sm:w-1/2 sm:mx-2 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800 hover:bg-gray-100 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-40"
                    >
                      Cancel
                    </button>

                    <button
                      type="submit"
                      className="w-full px-4 py-2 mt-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md sm:mt-0 sm:w-1/2 sm:mx-2 hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
                    >
                      Update
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfilePage;
