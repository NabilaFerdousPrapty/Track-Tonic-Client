import React from "react";
import UseAxiosSecure from "../../../hooks/UseAxiosSecure";
import { FaMoneyBill } from "react-icons/fa";
import { useQuery } from "@tanstack/react-query";
import { Pie } from "react-chartjs-2";
import { Chart, ArcElement } from "chart.js";

Chart.register(ArcElement);

const Balance = () => {
  const axiosSecure = UseAxiosSecure();
  let {
    data: payment = [],
  } = useQuery({
    queryKey: ["payments"],
    queryFn: async () => {
      const { data } = await axiosSecure.get("/payments");
      return data;
    },
  });

  const totalBalance = payment.reduce(
    (total, singlePayment) => total + (singlePayment.price || 0),
    0
  );

  const {
    data: subscribers = [],
  } = useQuery({
    queryKey: ["subscribers"],
    queryFn: async () => {
      const { data } = await axiosSecure.get("/newsletter");
      return data;
    },
  });

  const totalSubscribers = subscribers.length;
  const totalPaidCustomers = payment.length;

  const pieChartData = {
    labels: ["Total Subscribers", "Total Paid Members"],
    datasets: [
      {
        label: "Subscribers vs Paid Members",
        data: [totalSubscribers, totalPaidCustomers],
        backgroundColor: ["rgba(255, 99, 132, 0.6)", "rgba(54, 162, 235, 0.6)"],
        borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
        borderWidth: 1,
      },
    ],
  };

  const pieChartOptions = {
    plugins: {
      legend: {
        display: true,
        position: "right",
        labels: {
          boxWidth: 20,
          padding: 15,
        },
      },
    },
    maintainAspectRatio: false,
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold text-center text-gray-800">
        Tracktonic Payments
      </h1>
      <p className="text-xl text-center text-gray-600 mb-6">
        Manage and track your fitness payments seamlessly
      </p>

      <h2 className="text-3xl text-center font-merriweather text-gray-700 mb-4">
        Total Balance: ${totalBalance.toFixed(2)}
      </h2>
      <div className="my-8 text-center">
        <h2 className="text-2xl font-semibold text-center mb-4">
          Subscribers vs Paid Members
        </h2>
        <p className="text-center text-teal-800 text-3xl py-3 ">
         Total Paid Members:{totalPaidCustomers} |  Total Subscribers: {totalSubscribers} 
        </p>
        <div className="h-auto max-w-7xl flex flex-col justify-between items-center mx-auto text-center">
          <div style={{ height: "200px", width: "100%" }}>
            <Pie
              data={pieChartData}
              options={pieChartOptions}
              style={{ height: "100%" }}
            />
          </div>
        </div>
        <div>
          <p className="text-center text-gray-600 text-lg">
            The above chart shows the total number of subscribers and paid
            members
          </p>
          <p>
            <span className="text-teal-800">Total Subscribers:</span> Total
            number of subscribers who have subscribed to the newsletter

          </p>
          <p>
          <span className="text-teal-800">Total Paid Members:</span> Total
          number of members who have paid for the services
          </p>
          
        </div>
      </div>
      <div>
        <h2 className="text-2xl font-semibold text-center text-gray-800">
          Recent Payments
        </h2>

      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 my-3">
        {payment.length > 0 ? (
          ((payment = payment.slice(-6)),
          payment.map((singlePayment) => (
            <div
              key={singlePayment._id}
              className="w-full max-w-sm overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800"
            >
              <img
                className="object-cover object-center w-full h-56"
                src={singlePayment.trainer_image}
                alt="avatar"
              />

              <div className="flex flex-col items-center px-6 py-3 bg-gray-900 justify-center text-center">
                <FaMoneyBill className="text-white text-3xl" />

                <h1 className="mx-3 text-lg font-semibold text-white">
                  <p>Transaction ID:</p>
                  <span className="text-base">
                    {singlePayment.transactionId}
                  </span>
                </h1>
              </div>

              <div className="px-6 py-4">
                <h1 className="text-xl font-semibold text-gray-800 dark:text-white">
                  Price paid:
                  <span className="text-base">{singlePayment.price}</span>
                </h1>

                <p className="py-2 text-gray-700 dark:text-gray-400">
                  {singlePayment.payment_date}
                </p>

                <div className="flex items-center mt-4 text-gray-700 dark:text-gray-200">
                  <svg
                    aria-label="suitcase icon"
                    className="w-6 h-6 fill-current"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M14 11H10V13H14V11Z" />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M7 5V4C7 2.89545 7.89539 2 9 2H15C16.1046 2 17 2.89545 17 4V5H20C21.6569 5 23 6.34314 23 8V18C23 19.6569 21.6569 21 20 21H4C2.34314 21 1 19.6569 1 18V8C1 6.34314 2.34314 5 4 5H7ZM9 4H15V5H9V4ZM4 7C3.44775 7 3 7.44769 3 8V14H21V8C21 7.44769 20.5522 7 20 7H4ZM3 18V16H21V18C21 18.5523 20.5522 19 20 19H4C3.44775 19 3 18.5523 3 18Z"
                    />
                  </svg>

                  <h1 className="px-2 text-sm">
                    {singlePayment.trainer_designation}
                  </h1>
                </div>

                <div className="flex items-center mt-4 text-gray-700 dark:text-gray-200">
                  <svg
                    aria-label="location pin icon"
                    className="w-6 h-6 fill-current"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M16.2721 10.2721C16.2721 12.4813 14.4813 14.2721 12.2721 14.2721C10.063 14.2721 8.27214 12.4813 8.27214 10.2721C8.27214 8.063 10.063 6.27214 12.2721 6.27214C14.4813 6.27214 16.2721 8.063 16.2721 10.2721ZM14.2721 10.2721C14.2721 11.3767 13.3767 12.2721 12.2721 12.2721C11.1676 12.2721 10.2721 11.3767 10.2721 10.2721C10.2721 9.16757 11.1676 8.27214 12.2721 8.27214C13.3767 8.27214 14.2721 9.16757 14.2721 10.2721Z"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M5.79417 16.5183C2.19424 13.0909 2.05438 7.3941 5.48178 3.79418C8.90918 0.194258 14.6059 0.0543983 18.2059 3.48179C21.8058 6.90919 21.9457 12.606 18.5183 16.2059L12.3124 22.7241L5.79417 16.5183ZM17.0698 14.8268L12.243 19.8965L7.17324 15.0698C4.3733 12.404 4.26452 7.9732 6.93028 5.17326C9.59603 2.37332 14.0268 2.26454 16.8268 4.93029C19.6267 7.59604 19.7355 12.0269 17.0698 14.8268Z"
                    />
                  </svg>

                  <h1 className="px-2 text-sm">{singlePayment.user_name}</h1>
                </div>

                <div className="flex items-center mt-4 text-gray-700 dark:text-gray-200">
                  <svg
                    aria-label="email icon"
                    className="w-6 h-6 fill-current"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M3.00977 5.83789C3.00977 5.28561 3.45748 4.83789 4.00977 4.83789H20C20.5523 4.83789 21 5.28561 21 5.83789V17.1621C21 18.2667 20.1046 19.1621 19 19.1621H5C3.89543 19.1621 3 18.2667 3 17.1621V6.16211C3 6.11449 3.00333 6.06765 3.00977 6.0218V5.83789ZM5 8.06165V17.1621H19V8.06199L14.1215 12.9405C12.9499 14.1121 11.0504 14.1121 9.87885 12.9405L5 8.06165ZM6.57232 6.80554H17.428L12.7073 11.5263C12.3168 11.9168 11.6836 11.9168 11.2931 11.5263L6.57232 6.80554Z"
                    />
                  </svg>

                  <h1 className="px-2 text-sm">
                    Brought by:
                    {singlePayment.user_email}
                  </h1>
                </div>
              </div>
            </div>
          )))
        ) : (
          <p>No payments available</p>
        )}
      </div>
     
    </div>
  );
};

export default Balance;
