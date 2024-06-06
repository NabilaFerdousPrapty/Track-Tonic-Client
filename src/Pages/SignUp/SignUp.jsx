import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/img.png";
import { useForm } from "react-hook-form";
import useAuth from "./../../hooks/UseAuth";
import Swal from "sweetalert2";
const SignUp = () => {
  const { signInWithGoogle, createUser, updateUserProfile } = useAuth();
  const navigate=useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const regex =/^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{7,}$/;
    if (data.password === data.confirmPassword) {
      createUser(data.email, data.password);
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Password and Confirm Password must be same!",
      });
      return;
    }
    if (regex.test(data.password)) {
      createUser(data.email, data.password)
        .then((userCredential) => {
          updateUserProfile(data.name, data.photo);
          Swal.fire({
            icon: "success",
            title: "Congratulation",
            text: "Your account has been created successfully!",
          });
          
          navigate('/')
          
          
        })
        .catch((error) => {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: error.message,
          });
          return;
        });
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Password must contain at least 1 uppercase letter, 1 lowercase letter, 1 number and 1 special character!",
      });
      return;
    }
  };

  return (
    <div className=" h-screen flex flex-row-reverse justify-center my-10 border-2 border-green-100 p-5 rounded-2xl font-merriweather">
      <div
        className="hidden lg:block lg:w-[45%] bg-cover rounded-2xl"
        style={{
          backgroundImage: "url(https://i.ibb.co/K07sg7r/Data-security-05.jpg)",
        }}
      >
        <div className="flex items-center h-full px-20 bg-gray-400 bg-opacity-40 text-center justify-center rounded-2xl">
          <div>
            <h2 className="text-2xl font-bold  sm:text-3xl">Track Tonic</h2>
            <p className="max-w-xl mt-3 text-slate-700 font-semibold">
              Fitness is not about being better than someone else, it's about
              being better than you used to be.Congratulation on taking the
              first step towards a healthier lifestyle. So what are you waiting
              for? Let's get started.
            </p>
          </div>
        </div>
      </div>

      <div className="flex items-center w-full max-w-xl px-6 mx-auto lg:w-[55%]">
        <div className="flex-1">
          <div className="text-center">
            <div className="flex justify-center mx-auto">
              <img className="w-auto lg:h-28 h-8" src={logo} alt=" UI Logo" />
            </div>
            <p className="mt-3 text-gray-500 dark:text-gray-300 font-bold">
              Welcome to Track Tonic
            </p>
          </div>

          <div className="mt-8">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm text-gray-600 dark:text-gray-200"
                >
                  Name of the User
                </label>
                <input
                  {...register("name", { required: true })}
                  type="text"
                  name="name"
                  id="name"
                  placeholder="example name"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                />
                {errors.name && (
                  <span className="text-red-700">This field is required</span>
                )}
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm text-gray-600 dark:text-gray-200"
                >
                  Email Address
                </label>
                <input
                  {...register("email", { required: true })}
                  type="email"
                  name="email"
                  id="email"
                  placeholder="example@example.com"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                />
                {errors.email && (
                  <span className="text-red-700">This field is required</span>
                )}
              </div>
              <div>
                <label
                  htmlFor="photo"
                  className="block mb-2 text-sm text-gray-600 dark:text-gray-200"
                >
                  Photo Url
                </label>
                <input
                  {...register("photo", { required: true })}
                  type="url"
                  name="photo"
                  id="photo"
                  placeholder="example@example.com"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                />
                {errors.photo && (
                  <span className="text-red-700">This field is required</span>
                )}
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="">
                  <div className="flex justify-between mb-2">
                    <label
                      htmlFor="password"
                      className="text-sm text-gray-600 dark:text-gray-200"
                    >
                      Password
                    </label>
                  </div>
                  <input
                    {...register("password", { required: true })}
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Your Password"
                    className="block w-full md:px-10 px-20  py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                  {errors.password && (
                    <span className="text-red-700">This field is required</span>
                  )}
                </div>
                <div className="">
                  <div className="flex justify-between mb-2">
                    <label
                      htmlFor="password"
                      className="text-sm text-gray-600 dark:text-gray-200"
                    >
                      Confirm Password
                    </label>
                  </div>
                  <input
                    {...register("confirmPassword", { required: true })}
                    type="password"
                    name="confirmPassword"
                    id="confirmPassword"
                    placeholder="Confirm Your Password"
                    className="block w-full md:px-10 px-20 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                  {errors.confirmPassword && (
                    <span className="text-red-700">This field is required</span>
                  )}
                </div>
              </div>

              <div className="mt-6">
                <button
                  type="submit"
                  className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-300 transform bg-[#17acac] rounded-lg hover:bg-blue-400 focus:outline-none focus:bg-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-50"
                >
                  Sign up
                </button>
              </div>
            </form>

            <Link
              to={"/login"}
              className="mt-6 text-sm text-center text-gray-400"
            >
              Already have an account ?{" "}
              <a
                href="#"
                className="text-blue-500 focus:outline-none focus:underline hover:underline"
              >
                Sign in
              </a>
              .
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
