import  { useEffect, useState } from "react";
import UseAxiosSecure from "./../../../hooks/UseAxiosSecure";
import useAuth from "../../../hooks/UseAuth";

const BookedTrainer = () => {
  const axiosSecure = UseAxiosSecure();
  const { user } = useAuth();
  const [trainers, setTrainers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosSecure.get(`/payments/${user.email}`);
        setTrainers(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, [axiosSecure, user.email]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {trainers.map((trainer) => (
        <div
          key={trainer._id}
          className="flex flex-col overflow-hidden bg-white rounded shadow-md text-slate-500 shadow-slate-200 sm:flex-row my-5 p-8"
        >
          <figure className="flex-1 bg-slate-300 rounded-xl my-5 p-5">
            <img
              src={trainer.trainer_image || "https://picsum.photos/id/118/800/600"}
              alt={trainer.trainer_name}
              className="object-cover h-52 aspect-auto mx-auto rounded-xl"
            />
          </figure>
          <div className="flex-1 p-6 sm:mx-6 sm:px-0">
            <header className="flex gap-4 mb-4">
              <a
                href="#"
                className="relative inline-flex items-center justify-center w-12 h-12 text-white rounded-full"
              >
                <img
                  src={trainer.user_image || "https://i.pravatar.cc/48?img=24"}
                  alt={trainer.user_name}
                  title={trainer.user_name}
                  width="48"
                  height="48"
                  className="max-w-full rounded-full"
                />
              </a>
              <div>
                <h3 className="text-xl font-medium text-slate-700">
                  {trainer.slot_name.date}, {trainer.slot_name.time}
                </h3>
                <p className="text-sm text-slate-400">
                  By {trainer.user_name},{" "}
                  {new Date(trainer.date).toLocaleDateString()}
                </p>
              </div>
            </header>
            <p>
              {trainer.package_name} - ${trainer.price}
            </p>
          </div>
        </div>
      ))}
      {
        trainers.length === 0 && <div className="text-5xl text-center font-semibold">No trainers booked yet</div>
      }
    </div>
  );
};

export default BookedTrainer;
