import { useState, useEffect } from "react";
import UseAxiosSecure from "../../../hooks/UseAxiosSecure";
import Swal from "sweetalert2";
import { useQuery } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import UseAxiosCommon from "../../../hooks/UseAxiosCommon";
import axios from "axios";

const Appliedtrainer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentId, setCurrentId] = useState(null);
  const axiosSecure = UseAxiosSecure();
  const axiosCommon=UseAxiosCommon();

  const {
    data: trainers = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["trainers"],
    queryFn: async () => {
      const { data } = await axiosSecure.get("/trainers/pending");
      return data;
    },
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const handleApprove = (id, email) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, approve him!",
    })
      .then((result) => {
        if (result.isConfirmed) {
          Promise.all([
            axiosCommon.patch(`/approveTrainer/${id}`),
            axiosCommon.patch(`/trainers/approve/${email}`)
          ])
          .then(([response1, response2]) => {
            const modifiedCount1 = response1.data.modifiedCount;
            const modifiedCount2 = response2.data.modifiedCount;
          //  console.log("response1",response1.data);
          //   console.log("response2",response2.data);
            if (modifiedCount1 > 0 && modifiedCount2 > 0) {
              Swal.fire({
                title: "Approved!",
                text: "Your trainer has been approved.",
                icon: "success",
                showConfirmButton: false,
              });
            } else {
              Swal.fire({
                title: "Error!",
                text: "Could not approve.",
                icon: "error",
                showConfirmButton: false,
              });
            }
            refetch();
          })
          .catch((error) => {
            console.error("Error approving trainer:", error);
            Swal.fire({
              title:'ok!',
              showConfirmButton:false
            })
            refetch();
          });
        }
      })
      .catch((error) => {
        console.error("Error with Swal confirmation:", error);
      });
  };
  

  const handleReject = (id) => {
    setCurrentId(id);
    setIsOpen(true);
  };

const onSubmit = (data) => {
  const { reason } = data;
  const postData = { reason };
  
  // console.log("Submitting rejection with data:", postData); // Add this line to debug

  axiosSecure
    .patch(`/rejectTrainer/${currentId}`, postData)
    .then((response) => {
      if (response.data.modifiedCount > 0) {
        Swal.fire({
          title: "Rejected!",
          text: "Your trainer has been rejected.",
          icon: "success",
          showConfirmButton: false,
        });
        setIsOpen(false);
        reset();
        refetch();
      } else {
        Swal.fire({
          title: "Error!",
          text: "Could not reject.",
          icon: "error",
          showConfirmButton: false,
        });
      }
    })
    .catch((error) => {
      console.error("Error rejecting trainer:", error);
      Swal.fire({
        title: "Error!",
        text: "An error occurred while rejecting the trainer.",
        icon: "error",
        showConfirmButton: false,
      });
    });
};

  if (isLoading) {
    return (
      <div>
        <div className="flex items-center justify-center h-screen">
          <div className="w-60 h-60 border-4 border-t-4 border-teal-300 rounded-full loader border-dotted"></div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <section className="container px-4 mx-auto">
        <div className="flex flex-col">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                  <thead className="bg-gray-50 dark:bg-gray-800">
                    <tr>
                      <th
                        scope="col"
                        className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        <div className="flex items-center gap-x-3">
                          <input
                            type="checkbox"
                            className="text-blue-500 border-gray-300 rounded dark:bg-gray-900 dark:ring-offset-gray-900 dark:border-gray-700"
                          />
                          <button className="flex items-center gap-x-2">
                            <span>serial</span>
                            <svg
                              className="h-3"
                              viewBox="0 0 10 11"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M2.13347 0.0999756H2.98516L5.01902 4.79058H3.86226L3.45549 3.79907H1.63772L1.24366 4.79058H0.0996094L2.13347 0.0999756ZM2.54025 1.46012L1.96822 2.92196H3.11227L2.54025 1.46012Z"
                                fill="currentColor"
                                stroke="currentColor"
                                strokeWidth="0.1"
                              />
                              <path
                                d="M0.722656 9.60832L3.09974 6.78633H0.811638V5.87109H4.35819V6.78633L2.01925 9.60832H4.43446V10.5617H0.722656V9.60832Z"
                                fill="currentColor"
                                stroke="currentColor"
                                strokeWidth="0.1"
                              />
                              <path
                                d="M8.45558 7.25664V.60832V7.40664H8.60558H9.66065C9.72481 7.40664 9.74667 7.42274 9.75141 7.42691C9.75148 7.42808 9.75146 7.42993 9.75116 7.43262C9.75001 7.44265 9.74458 7.46304 9.72525 7.49314C9.72522 7.4932 9.72518 7.49326 9.72514 7.49332L7.86959 10.3529L7.86924 10.3534C7.83227 10.4109 7.79863 10.418 7.78568 10.418C7.77272 10.418 7.73908 10.4109 7.70211 10.3534L7.70177 10.3529L5.84621 7.49332C5.84617 7.49325 5.84612 7.49318 5.84608 7.49311C5.82677 7.46302 5.82135 7.44264 5.8202 7.43262C5.81989 7.42993 5.81987 7.42808 5.81994 7.42691C5.82469 7.42274 5.84655 7.40664 5.91071 7.40664H6.96578H7.11578V7.25664V0.633865C7.11578 0.42434 7.29014 0.249976 7.49967 0.249976H8.07169C8.28121 0.249976 8.45558 0.42434 8.45558 0.633865V7.25664Z"
                                fill="currentColor"
                                stroke="currentColor"
                                strokeWidth="0.3"
                              />
                            </svg>
                          </button>
                        </div>
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        name
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        Years of experience
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        image
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        designation
                      </th>
                      <th scope="col" className="relative py-3.5 px-4">
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                    {trainers.map((trainer, index) => (
                      <tr key={trainer._id}>
                        <td className="px-4 py-4 text-sm font-medium text-gray-700 dark:text-gray-200 whitespace-nowrap">
                          <div className="inline-flex items-center gap-x-3">
                            <input
                              type="checkbox"
                              className="text-blue-500 border-gray-300 rounded dark:bg-gray-900 dark:ring-offset-gray-900 dark:border-gray-700"
                            />
                            <span>{index + 1}</span>
                          </div>
                        </td>
                        <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                          {trainer.name}
                        </td>
                        <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                          <div className="inline-flex items-center px-3 py-1 rounded-full gap-x-2 text-emerald-500 bg-emerald-100/60 dark:bg-gray-800">
                            <svg
                              width="12"
                              height="12"
                              viewBox="0 0 12 12"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M10 3L4.5 8.5L2 6"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                            <h2 className="text-sm font-normal">
                              {trainer.years_of_experience}
                            </h2>
                          </div>
                        </td>
                        <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                          <div className="flex items-center gap-x-2">
                            <img
                              className="object-cover w-8 h-8 rounded-full"
                              src={trainer.profile_image}
                              alt=""
                            />
                            <div>
                              <h2 className="text-sm font-medium text-gray-800 dark:text-white">
                                {trainer.email}
                              </h2>
                              <p className="text-xs font-normal text-gray-600 dark:text-gray-400">
                                Age:{trainer.age}
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                          {trainer.designation}
                        </td>
                        <td className="px-4 py-4 text-sm whitespace-nowrap">
                          <div className="flex items-center gap-x-6">
                            <button className="text-gray-500 transition-colors duration-200 dark:hover:text-indigo-500 dark:text-gray-300 hover:text-indigo-500 focus:outline-none">
                              {trainer.status}
                            </button>
                            {trainer.status === "pending" && (
                              <button
                                onClick={() => handleApprove(trainer._id,trainer.email)}
                                className="text-blue-500 transition-colors duration-200 hover:text-indigo-500 focus:outline-none"
                              >
                                Approve
                              </button>
                            )}
                            {trainer.status === "pending" && (
                              <button
                                onClick={() => handleReject(trainer._id)}
                                className="text-blue-500 transition-colors duration-200 hover:text-indigo-500 focus:outline-none"
                              >
                                Reject
                              </button>
                            )}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                {trainers.length === 0 && (
                  <div className="flex items-center justify-center p-5">
                    <h2 className="text-lg font-medium text-gray-500 dark:text-gray-400">
                      No trainers applied yet.
                    </h2>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
      {isOpen && (
        <div
          className="fixed inset-0 z-10 overflow-y-auto"
          aria-labelledby="modal-title"
          role="dialog"
          aria-modal="true"
        >
          <div className="flex items-end justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
            <span
              className="hidden sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <div className="relative inline-block px-4 pt-5 pb-4 overflow-hidden text-left align-bottom transition-all transform bg-white rounded-lg shadow-xl dark:bg-gray-900 sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6">
              <div>
                <div className="flex items-center justify-center"></div>
                <div className="mt-4 text-center">
                  <h3
                    className="font-medium leading-6 text-gray-800 capitalize dark:text-white"
                    id="modal-title"
                  >
                    Let us know why you are rejecting this trainer
                  </h3>
                  <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                    Your feedback will help the trainer to improve.So please
                    provide a valid reason. And If you want to approve the
                    trainer, click on the cancel button.
                  </p>
                </div>
              </div>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mt-4">
                  <label
                    htmlFor="share link"
                    className="text-sm text-gray-700 dark:text-gray-200"
                  >
                    Share link
                  </label>
                  <div className="flex items-center mt-2 -mx-1">
                    <input
                      {...register("reason", { required: true })}
                      type="text"
                      name="reason"
                      placeholder="Enter the reason"

                      className="flex-1 block h-10 px-4 mx-1 text-sm text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                    />
                    {errors.reason && (
                      <span className="text-red-700">
                        This field is required
                      </span>
                    )}
                    <button type="submit" className="hidden mx-1 text-gray-600 transition-colors duration-300 sm:block dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="mt-4 sm:mt-6 sm:flex sm:items-center sm:-mx-2">
                  <button
                    onClick={() => setIsOpen(true)}
                    className="w-full px-4 py-2 text-sm font-medium tracking-wide text-gray-700 capitalize transition-colors duration-300 transform border border-gray-200 rounded-md sm:w-1/2 sm:mx-2 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800 hover:bg-gray-100 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-40"
                  >
                    Cancel
                  </button>
                  <button className="w-full px-4 py-2 mt-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md sm:mt-0 sm:w-1/2 sm:mx-2 hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40">
                    Reject
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Appliedtrainer;
