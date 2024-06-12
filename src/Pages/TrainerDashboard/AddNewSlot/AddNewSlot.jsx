import { useState } from "react";
import Select from "react-select";
import Swal from "sweetalert2";
import UseAxiosSecure from "../../../hooks/UseAxiosSecure";
import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/UseAuth";

const daysOptions = [
  { value: "sun", label: "Sunday" },
  { value: "mon", label: "Monday" },
  { value: "tue", label: "Tuesday" },
  { value: "wed", label: "Wednesday" },
  { value: "thu", label: "Thursday" },
  { value: "fri", label: "Friday" },
  { value: "sat", label: "Saturday" },
];

const classList = [
  { value: "Nutrition", label: "Nutrition" },
  { value: "Yoga", label: "Yoga" },
  { value: "Healthy life", label: "Healthy life" },
];

const AddNewSlot = () => {
  const { user } = useAuth();
  const axiosSecure = UseAxiosSecure();
  const [availableDays, setAvailableDays] = useState([]);
  const [availableTimes, setAvailableTimes] = useState([""]);
  const [slotName, setSlotName] = useState("");
  const [slotDescription, setSlotDescription] = useState("");
  const [includes, setIncludes] = useState("");
  const { register, handleSubmit } = useForm();

  const handleAddTime = () => {
    setAvailableTimes([...availableTimes, ""]);
  };

  const handleRemoveTime = (index) => {
    setAvailableTimes(availableTimes.filter((_, i) => i !== index));
  };

  const handleTimeChange = (value, index) => {
    const newTimes = [...availableTimes];
    newTimes[index] = value;
    setAvailableTimes(newTimes);
  };

  const onSubmit = () => {
    const trainerData = {
      availableDays,
      available_times: availableTimes,
      includes: includes,
      slot_name: slotName,
      slot_description: slotDescription,
      
    };
    console.log(trainerData);
    axiosSecure
      .patch(`/updateAvailability/${user.email}`, trainerData)
      .then((response) => {
        console.log(response);
        Swal.fire({
          icon: "success",
          title: "Available days and times updated",
          text: "Your available days and times have been updated successfully",
        });
        setAvailableDays([]);
        setAvailableTimes([""]);
      })
      .catch((error) => {
        console.log(error);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
        });
      });
  };

  return (
    <div className="my-0">
      <form onSubmit={handleSubmit(onSubmit)}>
        <section className="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-100">
          <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-14 lg:flex-row lg:justify-between">
            <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
              <h1 className="text-5xl font-bold leading-none sm:text-6xl">
                Add New Slot
              </h1>
              <p className="mt-2 mb-4 text-lg">
                Welcome to the Add New Slot page. Here you can add new slots for
                your availability. You can add multiple days and times for your
                availability. You can also remove the added times if you want.
                Go to manage slot to remove the added slots.
              </p>
            </div>
            <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-56 sm:h-80 lg:h-72 xl:h-112 2xl:h-128">
              <img
                src="https://i.ibb.co/ZKvC1g1/zero-waste-template-hand-drawn-cartoon-flat-illustration-with-durable-and-reusable-items-or-products.jpg"
                alt=""
                className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
              />
            </div>
          </div>
        </section>
        <div className="my-3 bg-teal-100 p-6 rounded-2xl">
          <input
            type="text"
            name="slot_name"
            placeholder="Slot Name"
            value={slotName}
            onChange={(e) => setSlotName(e.target.value)}
            className="block w-full px-10 py-3 text-gray-700 bg-white border rounded-lg"
          />
          <input
            type="number"
            name="slot_description"
            placeholder="Time"
            value={slotDescription}
            onChange={(e) => setSlotDescription(e.target.value)}
            className="block w-full px-10 py-3 text-gray-700 bg-white border rounded-lg"
          />
          <Select
            isMulti
            options={daysOptions}
            className="block w-full mt-4"
            classNamePrefix="select"
            value={availableDays}
            onChange={(selected) => setAvailableDays(selected)}
            placeholder="Select Available Days"
          />
          {availableTimes.map((time, index) => (
            <div className="relative flex items-center mt-4" key={index}>
              <input
                type="time"
                value={time}
                onChange={(e) => handleTimeChange(e.target.value, index)}
                className="block w-full px-10 py-3 text-gray-700 bg-white border rounded-lg"
              />
              {index > 0 && (
                <button
                  type="button"
                  onClick={() => handleRemoveTime(index)}
                  className="ml-2 text-red-500"
                >
                  Remove
                </button>
              )}
            </div>
          ))}
          <button
            type="button"
            onClick={handleAddTime}
            className="mt-2 bg-teal-700 text-white rounded-md px-5 py-3"
          >
            Add Time
          </button>
          <Select
            isMulti
            options={classList}
            onChange={(selected) => setIncludes(selected)}
            className="block w-full mt-4"
            classNamePrefix="select"
            placeholder="Select Classes"
          />
          <button
            type="submit"
            className="mt-2 text-white rounded-md px-5 py-3 bg-gray-800"
          >
            Update Availability
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddNewSlot;
