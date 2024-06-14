import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../../assets/img.png";
import { useForm } from "react-hook-form";
import useAuth from "./../../hooks/UseAuth";
import Swal from "sweetalert2";
import UseAxiosCommon from "../../hooks/UseAxiosCommon";
import { Helmet } from "react-helmet-async";
const SignUp = () => {
  const axiosCommon=UseAxiosCommon();
  const { signInWithGoogle, createUser, updateUserProfile,user,setUser } = useAuth();
  const navigate=useNavigate();
  const location=useLocation();
  const {
    register,
    handleSubmit,
    
    reset,
    formState: { errors },
  } = useForm();
  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        
        const userInfo={
          name:user.displayName,
          email:user.email,
          role:'member',
        }
        axiosCommon.post('/users',userInfo)
        .then((res)=>{
          // console.log(res.data)
          if (res.data.insertedId) {
            Swal.fire({
              icon: "success",
              title: "Congratulation",
              text: "Your account has been created successfully!",
            });
            reset();
            navigate(location?.state ? location.state : "/")
          }
        }
        )
      
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        reset();
        Swal.fire({
          icon: 'error',
          title: 'Login Failed',
          text: errorMessage,
        })
      });
  }

  const onSubmit = (data) => {
    const regex =/^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{7,}$/;
    if (data.password !== data.confirmPassword) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Password and Confirm Password must be same!",
      });
      
      reset();
      return;
    }
    if (regex.test(data.password)) {
      createUser(data.email, data.password)
        .then((userCredential) => {
          updateUserProfile(data.name, data.photo)
          setUser(userCredential.user)
          const userInfo={
            name:data.name,
            email:data.email,
            role:'member',
            
          }
          axiosCommon.post('/users',userInfo)
          .then((res)=>{
            // console.log(res.data)
            if (res.data.insertedId) {
              Swal.fire({
                icon: "success",
                title: "Congratulation",
                text: "Your account has been created successfully!",
              });
              reset();
              navigate('/')
            }
          })

          
          
          
        })
        .catch((error) => {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: error.message,
          });
          reset();
          return;
        });
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Password must contain at least 1 uppercase letter, 1 lowercase letter, 1 number and 1 special character!",
      });
      reset();
      return;
    }
  };

  return (
    <div className=" h-screen flex flex-row-reverse justify-center my-10 border-2 border-green-100 p-5 rounded-2xl font-merriweather">
      <Helmet>
      <title>Track Tonic || Sign Up</title>
    </Helmet>
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
            <div className="my-7 bg-slate-100 rounded-xl p-11">
            <button onClick={handleGoogleSignIn}
            
            className="flex items-center justify-center mt-4 text-gray-600 transition-colors duration-300 transform border rounded-lg dark:border-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600 w-full bg-teal-200"
          >
            <div className="px-4 py-2">
              <svg className="w-6 h-6" viewBox="0 0 40 40">
                <path
                  d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                  fill="#FFC107"
                />
                <path
                  d="M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z"
                  fill="#FF3D00"
                />
                <path
                  d="M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z"
                  fill="#4CAF50"
                />
                <path
                  d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758C26.0142 27.975 26.015 27.975 26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                  fill="#1976D2"
                />
              </svg>
            </div>

            <span className="w-5/6 px-4 py-3 font-bold text-center">
              Sign in with Google
            </span>
          </button>
            </div>
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
