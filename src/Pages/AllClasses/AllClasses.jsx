import { Link, useLoaderData } from "react-router-dom";
import UseAxiosCommon from "../../hooks/UseAxiosCommon";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useQuery } from "@tanstack/react-query";
import { FaSearch } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { Button } from "flowbite-react";

const SuggestedTrainers = ({ designation }) => {
  const axiosCommon = UseAxiosCommon();
  const { data: trainers = [] } = useQuery({
    queryKey: ["trainers", designation],
    queryFn: async () => {
      const { data } = await axiosCommon.get(
        `/suggestedTrainers/${designation}`
      );
      return data;
    },
    keepPreviousData: true,
  });
  
  // Limit the number of trainers to 6
  const limitedTrainers = trainers.slice(0, 5);

  // console.log(limitedTrainers);
  
  return (
    <div>
      <h3 className="text-lg font-semibold mt-4">Suggested Trainers:</h3>
      <ul className="list-disc pl-5 ">
        {limitedTrainers.map((trainer, index) => (
          <button
            key={trainer._id}
            className={`mt-${index !== 0 ? '4' : '0'} text-sm font-medium leading-5 text-center text-white capitalize bg-teal-200 rounded-lg hover:bg-teal-100 lg:mx-0 lg:w-auto focus:outline-none`}
          >
            <Link to={`/allTrainers/${trainer._id}`}>
              <img src={trainer.profile_image} alt="" className="max-w-20 h-24 rounded-lg" />
            </Link>
          </button>
        ))}
        {trainers.length === 0 && (
          <p>No Recommendation found for this class</p>
        )}
      </ul>
    </div>
  );
  
};


const AllClasses = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const axiosCommon = UseAxiosCommon();
  const classesCount = useLoaderData();
  const { count } = classesCount;

  const classesPerPage = 6;
  const numberOfPages = Math.ceil(count / classesPerPage);
  const pages = [...Array(numberOfPages).keys()];

  const { data: classes = [], refetch } = useQuery({
    queryKey: ["classes", currentPage, searchQuery],
    queryFn: async () => {
      const { data } = await axiosCommon.get(
        `/classes?page=${
          currentPage - 1
        }&size=${classesPerPage}&search=${searchQuery}`
      );
      return data;
    },
    keepPreviousData: true,
  });
console.log(classes);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    const { search } = data;
    setSearchQuery(search);
    setCurrentPage(1); // Reset to first page on new search
    reset();
  };

  useEffect(() => {
    refetch();
  }, [currentPage, searchQuery, refetch]);

  return (
    <div>
      <Helmet>
        <title>Track Tonic || All classes</title>
      </Helmet>
      <section className="bg-teal-50 rounded-2xl py-3 my-4">
        <div className="container px-6 py-16 mx-auto text-center">
          <div className="max-w-lg mx-auto">
            <h1 className="text-3xl font-semibold text-gray-800 dark:text-white lg:text-4xl">
              <span className="text-teal-600">All Classes</span>
            </h1>
            <p className="mt-6 text-gray-500 dark:text-gray-300">
              Choose from a variety of classes to suit your needs. Here are some
              of the classes we offer. So what are you waiting for? Start your
              fitness journey today!
            </p>
            <div className="flex flex-col justify-center items-center border border-teal-300 p-5 rounded-xl">
              <button className="px-5 py-2 mt-6 text-sm font-medium leading-5 text-center text-white capitalize bg-blue-600 rounded-lg hover:bg-blue-500 lg:mx-0 lg:w-auto focus:outline-none">
                Start 14-Day free trial
              </button>
              <div className="flex justify-between items-center">
                <h2 className="text-3xl">
                  <span className="text-teal-600">Search</span> for your class
                </h2>
                <fieldset className="w-full space-y-1 text-gray-800">
                  <label htmlFor="Search" className="hidden">
                    Search
                  </label>
                  <div className="relative flex items-center">
                    <form onSubmit={handleSubmit(onSubmit)} action="">
                      <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                        <button
                          type="submit"
                          title="search"
                          className="p-1 focus:outline-none focus:ring"
                        >
                          <FaSearch className="w-4 h-4" />
                        </button>
                      </span>
                      <input
                        type="search"
                        name="Search"
                        id="Search"
                        {...register("search", { required: true })}
                        placeholder="Search..."
                        className="w-32 py-2 pl-10 text-sm rounded-md sm:w-auto focus:outline-none bg-gray-100 text-gray-800 focus:bg-gray-50 focus:border-indigo-600"
                      />
                     
                    </form>
                  </div>
                </fieldset>
              </div>
              <p className="mt-3 text-sm text-gray-400">
                No need to pay now. Cancel anytime.
              </p>
            </div>
          </div>
          <div className="flex justify-center mt-10">
            <img
              className="object-cover w-full h-96 rounded-xl lg:w-4/5"
              src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80"
              alt="Hero"
            />
          </div>
        </div>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 my-10">
        {classes.map((classItem) => (
          <div
            key={classItem._id}
            className="flex flex-col overflow-hidden bg-white rounded shadow-xl text-slate-500 shadow-slate-200 sm:flex-row max-w-4xl mx-auto sm:mx-0 py-5  px-2"
          >
          <div className="w-3/4">
          <figure >
              <img
                src={classItem?.image}
                alt="card image"
                className="object-cover object-center min-h-36 aspect-auto w-60 rounded-lg shadow-md"
              />
            </figure>
            <SuggestedTrainers designation={classItem?.trainer_designation} />
          </div>
            <div className="flex-1 p-6 sm:mx-6 sm:px-0">
              <header className="flex gap-4 mb-4">
                <a
                  href="#"
                  className="relative inline-flex items-center justify-center w-12 h-12 text-white rounded-full"
                >
                  <img
                    src={classItem?.trainer_image}
                    alt="user name"
                    title="user name"
                    width="48"
                    height="48"
                    className="max-w-full rounded-full"
                  />
                </a>
                <div>
                  <h3 className="text-xl font-medium text-slate-700">
                    {classItem?.class_name}
                  </h3>
                  <p className="text-sm text-slate-400">
                    By {classItem?.trainer_name}, {classItem?.trainer_designation}
                  </p>
                </div>
              </header>
              <p className="text-xl text-teal-600 font-semibold text-justify px-3">
                Description:{" "}
                <span className="text-sm text-gray-800">
                  {classItem?.details.slice(0, 130)}...
                </span>
              </p>
             
            </div>
          </div>
        ))}
        
      </div>
      {
          classes.length === 0 && (
            <p className="text-3xl font-merriweather font-extrabold text-center text-teal-700">No classes found</p>
          )
        }
      <div className="flex justify-center mt-4">
        {pages.map((page) => (
          <button
            key={page}
            onClick={() => setCurrentPage(page + 1)}
            className={`px-3 py-1 mx-1 border rounded ${
              currentPage === page + 1
                ? "bg-teal-500 text-white"
                : "bg-white text-black"
            }`}
          >
            {page + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default AllClasses;
