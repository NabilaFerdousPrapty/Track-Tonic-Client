import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/img.png';
const SignUp = () => {
    return (
        <div className=" h-screen flex justify-center my-10 border-2 border-green-100 p-5 rounded-2xl">
            <div      className="hidden lg:block lg:w-[55%] bg-cover rounded-lg"
                style={{ backgroundImage: 'url(https://i.ibb.co/K07sg7r/Data-security-05.jpg)' }}        >
                <div className="flex items-center h-full px-20 bg-gray-900 bg-opacity-40 text-center justify-center">
                    <div>
                        <h2 className="text-2xl font-bold  sm:text-3xl">
                            Track Tonic
                        </h2>
                        <p className="max-w-xl mt-3 text-gray-700 font-semibold">
                           Fitness is not about being better than someone else, it's about being better than you used to be.Congratulation on taking the first step towards a healthier lifestyle. So what are you waiting for? Let's get started.
                        </p>
                    </div>
                </div>
            </div>

            <div className="flex items-center w-full max-w-md px-6 mx-auto lg:w-2/6">
                <div className="flex-1">
                    <div className="text-center">
                        <div className="flex justify-center mx-auto">
                            <img className="w-auto lg:h-20 h-8" src={logo}alt="Meraki UI Logo" />
                        </div>
                        <p className="mt-3 text-gray-500 dark:text-gray-300">
                            Welcome to Track Tonic
                        </p>
                    </div>

                    <div className="mt-8">
                        <form>
                            <div>
                                <label
                                    htmlFor="email"
                                    className="block mb-2 text-sm text-gray-600 dark:text-gray-200"
                                >
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    placeholder="example@example.com"
                                    className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                                />
                            </div>

                            <div className="mt-6">
                                <div className="flex justify-between mb-2">
                                    <label htmlFor="password" className="text-sm text-gray-600 dark:text-gray-200">
                                        Password
                                    </label>
                                    <a
                                        href="#"
                                        className="text-sm text-gray-400 focus:text-blue-500 hover:text-blue-500 hover:underline"
                                    >
                                        Forgot password?
                                    </a>
                                </div>
                                <input
                                    type="password"
                                    name="password"
                                    id="password"
                                    placeholder="Your Password"
                                    className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                                />
                            </div>

                            <div className="mt-6">
                                <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:bg-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                                    Sign in
                                </button>
                            </div>
                        </form>

                        <Link to={'/login'} className="mt-6 text-sm text-center text-gray-400">
                            Already have an account ?{' '}
                            <a href="#" className="text-blue-500 focus:outline-none focus:underline hover:underline">
                                Sign in
                            </a>.
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
