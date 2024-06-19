import React, { useEffect, useState } from 'react';
import UseAxiosCommon from '../../../hooks/UseAxiosCommon';
import { useQuery } from '@tanstack/react-query';

const FeaturedClasses = () => {

  const axiosCommon = UseAxiosCommon();

  const { data: classes = [],isLoading } = useQuery({
    queryKey: ["classes"],
    queryFn: async () => {
      const { data } = await axiosCommon.get("/featuredClasses");
      return data;
    },
  });
  if (isLoading) {
    return <div className="flex items-center justify-center h-screen">
      <div className="w-64 h-60 border-t-2 border-b-2 border-blue-500 rounded-full animate-spin"></div>
    </div>
    
  }
  

  return (
    <div className="container bg-teal-100 p-5 my-4">
      <h2 className="text-3xl font-bold mb-4 text-center">Featured Classes</h2>
      <p className='text-center'>
        Here are some of our featured classes. These classes are popular among our users. Book your
        slot now!
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {classes.map((classItem) => (
          <div key={classItem?._id} className="bg-white shadow-md rounded-lg p-4">
            <img src={classItem?.image} alt={classItem?.class_name} className="w-full h-48 object-cover rounded-t-lg" />
            <h3 className="text-xl font-semibold mt-2">{classItem?.class_name}</h3>
            <p className="text-gray-700 mt-2">{classItem?.details?.slice(0,180)}.....</p>
            <p className="text-gray-600 mt-1">Total Bookings: {classItem?.total_bookings}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedClasses;
