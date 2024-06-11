import React, { useState, useEffect } from "react";
import UseAxiosSecure from "../../../hooks/UseAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const Subscriber = () => {
  const axiosSecure = UseAxiosSecure();
  const {
    data: subscribers = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["subscribers"],
    queryFn: async () => {
      const { data } = await axiosSecure.get("/newsletter");
      return data;
    },
  });
  if (isLoading) {
    <div>
      <div className="flex items-center justify-center h-screen">
        <div className="w-60 h-60 border-4 border-t-4 border-teal-300 rounded-full loader border-dotted"></div>
      </div>
    </div>;
  }

  return (
    <div>
      <div className="container p-2 mx-auto sm:p-4 text-gray-800">
        <h2 className="mb-4 text-2xl font-semibold leading-tight">Invoices</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full text-xs">
            <colgroup>
              <col />
              <col />
              <col />
             
            </colgroup>
            <thead className="bg-gray-300">
              <tr className="text-left">
                <th className="p-3">Index</th>

                <th className="p-3">Role</th>

                <th className="p-3">Email</th>
              </tr>
            </thead>
            <tbody>
              {subscribers.map((subscriber, index) => (
                <tr
                  key={index}
                  className="border-b border-opacity-20 border-gray-300 bg-gray-50"
                >
                  <td className="p-3">
                    <p>{index + 1}</p>
                  </td>
                  <td className="p-3">
                    <p>{subscriber.role}</p>
                  </td>
                  <td className="p-3">
                    <p>{subscriber.email}</p>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Subscriber;
