import React from "react";

const Features = () => {
  return (
    <div className="mb-12">
      <div className="text-center  mt-8">
        <h2 className="text-5xl font-bold text-gray-800">
            <span className="text-[#17ACAC] mx-1">
            Track Tonic 
            </span>Fitness Programs</h2>
        <p className="text-xl text-gray-600 font-semibold my-5">Your journey to optimal health and fitness starts here</p>
      </div>
      <section className="p-4 lg:p-8 border-4 border-blue-300 rounded-2xl">
        <div className="container mx-auto space-y-12 bg-sky-50 p-4 rounded-lg ">
          <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row hover:bg-slate-300 p-4">
            <img
              src="https://i.ibb.co/y8p9wgF/freepik-flat-geometric-gym-training-banner-20240603155759-O4-GY.png"
              alt=""
              className="h-80 bg-gray-500 aspect-video rounded-xl"
            />
            <div className="flex flex-col justify-center flex-1 p-6 bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern.svg')]">
              <span className="text-xs uppercase text-gray-600">
                Join, it's free
              </span>
              <h3 className="text-3xl font-bold">Achieve Peak Performance</h3>
              <p className="my-6 text-gray-600">
                Transform your body with our expert bodybuilding and musculation
                programs. Tailored routines to help you build strength and
                muscle mass.
              </p>
              <button type="button" className="self-start text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
                Get Started
              </button>
            </div>
          </div>
          <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row-reverse hover:bg-slate-300 p-4">
            <img
              src="https://i.ibb.co/Ws58gSj/freepik-gradient-flat-join-us-gym-rectangle-banner-202406031547356e-Lk.png"
              alt=""
              className="h-80 bg-gray-500 aspect-video rounded-xl"
            />
            <div className="flex flex-col justify-center flex-1 p-6 bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern.svg')]">
              <span className="text-xs uppercase text-gray-600">
                Join, it's free
              </span>
              <h3 className="text-3xl font-bold">Run Towards Your Goals</h3>
              <p className="my-6 text-gray-600">
                Enhance your endurance and speed with our comprehensive fitness
                running programs. Perfect for all levels, from beginners to
                seasoned runners.
              </p>
              <button type="button" className="self-start text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
                Get Started
              </button>
            </div>
          </div>
          <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row hover:bg-slate-300 p-4">
            <img
              src="https://i.ibb.co/s9w1Rdz/freepik-hand-drawn-super-sale-fitness-gym-banner-20240603155058-Xk-HQ.png"
              alt=""
              className="h-80 bg-gray-500 aspect-video rounded-xl"
            />
            <div className="flex flex-col justify-center flex-1 p-6 bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern.svg')]">
              <span className="text-xs uppercase text-gray-600">
                Join, it's free
              </span>
              <h3 className="text-3xl font-bold">Lift Your Limits</h3>
              <p className="my-6 text-gray-600">
                Discover the power of weight lifting with Track Tonic. Build
                muscle, enhance strength, and improve your overall fitness with
                our guided sessions.
              </p>
              <button type="button" className="self-start text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
                Get Started
              </button>
            </div>
          </div>
          <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row-reverse hover:bg-slate-300 p-4  ">
            <img
              src="https://i.ibb.co/khvKPJC/5184243.jpg"
              alt=""
              className="h-80  aspect-video rounded-xl"
            />
            <div className="flex flex-col justify-center flex-1 p-6 bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern.svg')] ">
              <span className="text-xs uppercase text-gray-600">
                Join, it's free
              </span>
              <h3 className="text-3xl font-bold">Find Your Balance</h3>
              <p className="my-6 text-gray-600">
                Experience classic yoga with our expert instructors. Improve
                your flexibility, reduce stress, and enhance your mental clarity
                through our yoga sessions.
              </p>
              <button type="button" className="self-start text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;
