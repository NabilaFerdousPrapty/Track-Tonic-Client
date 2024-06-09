import React from "react";

const UserDashboard = () => {
  return (
    <div>
      <div className="container mx-auto">
        <h1
          style={{
            WebkitTextStrokeWidth: "1px",
            WebkitTextStrokeColor: "#FFF",
          }}
          className="lg:text-5xl text-3xl text-center font-bold text-gray-800 mt-10 font-manrope"
        >
          SHAPE YOUR IDEAL BODY
        </h1>
        <p className="text-center text-gray-600 mt-4">
          Fitness is not about being better than someone else... It's about
          being better than you used to be. Here you can track your progress,
          set your goals and achieve them.
        </p>
      </div>
      <img
        className="h-auto max-w-full mx-auto hidden md:block"
        src="https://i.ibb.co/qDzy9Vd/image-16.png"
        alt="image description"
      />
    </div>
  );
};

export default UserDashboard;
