
import Select from "react-select";
import useAuth from "../../hooks/UseAuth";
import { useForm } from "react-hook-form";
import UseAxiosSecure from "../../hooks/UseAxiosSecure";

const skillsOptions = [
  { value: "skill1", label: "Yoga Instructor" },
  { value: "skill2", label: "CrossFit" },
  { value: "skill3", label: "Nutritionist" },
  { value: "skill4", label: "Pilates Instructor" },
  { value: "skill5", label: "Fitness Instructor" },
];

const daysOptions = [
  { value: "sun", label: "Sunday" },
  { value: "mon", label: "Monday" },
  { value: "tue", label: "Tuesday" },
  { value: "wed", label: "Wednesday" },
  { value: "thu", label: "Thursday" },
  { value: "fri", label: "Friday" },
  { value: "sat", label: "Saturday" },
];

const BecomeATrainer = () => {
  const axiosSecure = UseAxiosSecure();
  const { user } = useAuth();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    const {
        name,
        age,
        experience,
        designation,
        profileImage,
        skills,
        availableDays,
        availableTime,
        location,
        qualification,
        bio,
        otherDetails,
        } = data;
        console.log(data);
    }


  return (
    <div>
      <section className="bg-white dark:bg-gray-900">
        <div className="container px-6 py-24 mx-auto lg:py-32">
          <div className="lg:flex">
            <div className="lg:w-1/2">
              <img
                className="w-auto h-7 sm:h-8"
                src="https://merakiui.com/images/logo.svg"
                alt=""
              />

              <h1 className="mt-4 text-gray-600 dark:text-gray-300 md:text-lg">
                Become a trainer
              </h1>

              <h1 className="mt-4 text-2xl font-medium text-gray-800 capitalize lg:text-3xl dark:text-white">
                By filling out the form below, you can apply to become a trainer
                at our gym.
              </h1>
            </div>

            <div className="mt-8 lg:w-1/2 lg:mt-0">
              <form
                className="w-full lg:max-w-xl"
                onSubmit={handleSubmit(onSubmit)}
              >
                <div className="relative flex items-center">
                  <span className="absolute">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </span>

                  <input
                    {...register("email", { required: true })}
                    type="email"
                    readOnly
                    value={user.email}
                    className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    placeholder="Email address"
                  />
                </div>

                <div className="relative flex items-center mt-4">
                  <input
                    type="text"
                    name="fullName"
                    {...register("name", { required: true })}
                    className="block w-full px-10 py-3 text-gray-700 bg-white border rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    placeholder="Full Name"
                  />
                  {errors.name && (
                    <span className="text-red-700">This field is required</span>
                  )}
                </div>

                <div className="flex justify-center items-center mt-4 gap-3">
                  <input
                    type="number"
                    name="age"
                    {...register("age", { required: true })}
                    className="block w-full px-10 py-3 text-gray-700 bg-white border rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    placeholder="Age"
                  />
                  {errors.age && (
                    <span className="text-red-700">This field is required</span>
                  )}

                  <input
                    type="number"
                    name="experience"
                    {...register("experience", { required: true })}
                    className="block w-full px-10 py-3 text-gray-700 bg-white border rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 "
                    placeholder="Years of Experience"
                  />
                  {errors.experience && (
                    <span className="text-red-700">This field is required</span>
                  )}
                </div>

                <div className="relative flex items-center mt-4">
                  <input
                    type="text"
                    name="designation"
                    {...register("designation", { required: true })}
                    className="block w-full px-10 py-3 text-gray-700 bg-white border rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    placeholder="Your Previous Designation"
                  />
                  {errors.designation && (
                    <span className="text-red-700">This field is required</span>
                  )}
                </div>

                <div className="relative flex items-center mt-4">
                  <input
                    type="file"
                    name="profileImage"
                    {...register("profileImage", { required: true })}
                    placeholder="Profile Image"
                    className="block w-full px-10 py-3 text-gray-700 bg-white border rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                  {errors.profileImage && (
                    <span className="text-red-700">This field is required</span>
                  )}
                </div>

                <div className=" gap-2 flex items-center mt-4 justify-center">
                  <Select
                    isMulti
                    name="skills"
                    options={skillsOptions}
                    className="block w-full"
                    classNamePrefix="select"
                    {...register("skills", { required: true })}
                    placeholder="Select Skills"
                  />
                  {errors.skills && (
                    <span className="text-red-700">This field is required</span>
                  )}
                  <Select
                    isMulti
                    {...register("availableDays", { required: true })}
                    name="availableDays"
                    options={daysOptions}
                    className="block w-full"
                    classNamePrefix="select"
                    placeholder="Select Available Days"
                  />
                  {errors.availableDays && (
                    <span className="text-red-700">This field is required</span>
                  )}
                </div>

                <div className="relative flex items-center mt-4">
                  <input
                    type="time"
                    name="availableTime"
                    {...register("availableTime", { required: true })}
                    className="block w-full px-10 py-3 text-gray-700 bg-white border rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                  {errors.availableTime && (
                    <span className="text-red-700">This field is required</span>
                  )}
                </div>

                <div className="relative flex items-center mt-4">
                  <input
                    name="location"
                    {...register("location", { required: true })}
                    className="block w-full px-10 py-3 text-gray-700 bg-white border rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    placeholder="Location"
                  />
                  {errors.location && (
                    <span className="text-red-700">This field is required</span>
                  )}
                </div>
                <div className="relative flex items-center mt-4">
                  <input
                    name="qualification"
                    {...register("qualification", { required: true })}
                    className="block w-full px-10 py-3 text-gray-700 bg-white border rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    placeholder="Qualification"
                  />
                  {errors.qualification && (
                    <span className="text-red-700">This field is required</span>
                  )}
                </div>
                <div className="relative flex items-center mt-4">
                  <input
                    name="bio"
                    {...register("bio", { required: true })}
                    className="block w-full px-10 py-3 text-gray-700 bg-white border rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    placeholder="Your Bio"
                  />
                  {errors.bio && (
                    <span className="text-red-700">This field is required</span>
                  )}
                </div>
                <div className="relative flex items-center mt-4">
                  <input
                    name="otherDetails"
                    {...register("otherDetails", { required: true })}
                    className="block w-full px-10 py-3 text-gray-700 bg-white border rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    placeholder="Any other details you want to share?"
                  />
                  {errors.otherDetails && (
                    <span className="text-red-700">This field is required</span>
                  )}
                </div>

                <div className="mt-8 md:flex md:items-center">
                  <button
                    type="submit"
                    className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg md:w-1/2 hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
                  >
                    Apply
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div className="mt-8 md:items-center justify-center flex">
            <button className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-800 rounded-lg md:w-1/2 hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50">
              Return to Home
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BecomeATrainer;
