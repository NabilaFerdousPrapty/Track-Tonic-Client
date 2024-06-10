import { useState } from "react";
import { FaBackward, FaHome, FaShoppingBag } from "react-icons/fa";
import { FaMoneyBill1Wave, FaP, FaRegMessage, FaTrailer, FaUser } from "react-icons/fa6";
import { IoMdMenu } from "react-icons/io";
import { MdPostAdd } from "react-icons/md";
import { Link, NavLink, Outlet } from "react-router-dom";
import { FaNewspaper } from "react-icons/fa6";
import UseAdmin from "../hooks/UseAdmin";
import { MdManageHistory } from "react-icons/md";
import { VscGitStashApply } from "react-icons/vsc";
import { MdOnDeviceTraining } from "react-icons/md";
import { FaBookReader } from "react-icons/fa";
import { MdRateReview } from "react-icons/md";
import { FiActivity } from "react-icons/fi";
import UseTrainer from './../hooks/UseTrainer';
import { MdMoreTime } from "react-icons/md";

const DashBoard = () => {
  const [isAdmin, isAdminLoading] = UseAdmin();
  const [isTrainer, isTrainerLoading] = UseTrainer();

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const renderAdminLinks = () => (
    <ul className="pt-2 pb-4 space-y-1 text-lg gap-4">
      <li className="rounded-sm">
        <NavLink to={"userDashboard"} className="flex items-center p-2 space-x-3 rounded-md">
          <FaHome className="w-5 h-5 text-gray-600" />
          <span> Home</span>
        </NavLink>
      </li>
      <li className="rounded-sm">
        <NavLink to={'subscribers'} className="flex items-center p-2 space-x-3 rounded-md">
          <FaNewspaper className="w-5 h-5 text-gray-600" />
          <span>All Newsletter subscribers</span>
        </NavLink>
      </li>
      <li className="rounded-sm">
        <NavLink to={'allTrainers'} className="flex items-center p-2 space-x-3 rounded-md">
          <MdOnDeviceTraining className="w-5 h-5 text-gray-600" />
          All Trainers
        </NavLink>
      </li>
      <li className="rounded-sm">
        <NavLink to={'appliedTrainer'} href="#" className="flex items-center p-2 space-x-3 rounded-md">
          <VscGitStashApply className="w-5 h-5 text-gray-600" />
          Applied Trainer
        </NavLink>
      </li>
      <li className="rounded-sm  text-gray-900">
        <NavLink to={'balance'} href="#" className="flex items-center p-2 space-x-3 rounded-md">
          <FaMoneyBill1Wave className="w-5 h-5 text-gray-600" />
          <span>Balance</span>
        </NavLink>
      </li>
      <li className="rounded-sm  text-gray-900">
        <NavLink to={'profilePage'} className="flex items-center p-2 space-x-3 rounded-md">
          <FaUser className="w-5 h-5 text-gray-600" />
          <span>Profile Page</span>
        </NavLink>
      </li>
      <li className="rounded-sm">
        <NavLink to={'addForum'} href="#" className="flex items-center p-2 space-x-3 rounded-md">
         <MdPostAdd className="w-5 h-5 text-gray-600" />
          Add new Forum
        </NavLink>
      </li>
      <li className="rounded-sm">
        <NavLink to={'addNewClass'} href="#" className="flex items-center p-2 space-x-3 rounded-md">
          <FaBookReader className="w-5 h-5 text-gray-600" />
          <span>Add new Class</span>
        </NavLink>
      </li>
      <li className="rounded-sm">
        <NavLink to={'/'} className="flex items-center p-2 space-x-3 rounded-md">
          <FaBackward className="w-5 h-5 text-gray-600" />
          <span>Back to Home</span>
        </NavLink>
      </li>
    </ul>
  );

  const renderTrainerLinks = () => (
    <ul className="pt-2 pb-4 space-y-1 text-lg gap-4">
      <li className="rounded-sm">
        <NavLink to={"userDashboard"} className="flex items-center p-2 space-x-3 rounded-md">
          <FaHome className="w-5 h-5 text-gray-600" />
          <span> Home</span>
        </NavLink>
      </li>
      <li className="rounded-sm">
        <NavLink to={'manageSlot'} className="flex items-center p-2 space-x-3 rounded-md">
         <MdManageHistory className="w-5 h-5 text-gray-600" />
          <span>ManageSlots</span>
        </NavLink>
      </li>
      <li className="rounded-sm">
        <NavLink to={'addNew'} className="flex items-center p-2 space-x-3 rounded-md">
          <MdMoreTime className="w-5 h-5 text-gray-600" />
          Add New slot
        </NavLink>
      </li>
      <li className="rounded-sm">
        <NavLink to={'addForum'} href="#" className="flex items-center p-2 space-x-3 rounded-md">
         <MdPostAdd className="w-5 h-5 text-gray-600" />
          Add new Forum
        </NavLink>
      </li>
      <li className="rounded-sm  text-gray-900">
        <NavLink to={'profilePage'} className="flex items-center p-2 space-x-3 rounded-md">
          <FaUser className="w-5 h-5 text-gray-600" />
          <span>Profile Page</span>
        </NavLink>
      </li>
      <li className="rounded-sm">
        <NavLink to={'activityLog'} className="flex items-center p-2 space-x-3 rounded-md">
          <FiActivity className="w-5 h-5 text-gray-600" />
          <span>Activity Log page</span>
        </NavLink>
      </li>
      <li className="rounded-sm">
        <NavLink to={'addReview'} className="flex items-center p-2 space-x-3 rounded-md">
          <MdRateReview className="w-5 h-5 text-gray-600" />
          <span>Add review</span>
        </NavLink>
      </li>

   
      <li className="rounded-sm">
        <NavLink to={'/'} className="flex items-center p-2 space-x-3 rounded-md">
          <FaBackward className="w-5 h-5 text-gray-600" />
          <span>Back to Home</span>
        </NavLink>
      </li>
    </ul>
  );

  const renderMemberLinks = () => (
    <ul className="pt-2 pb-4 space-y-1 text-lg gap-4">
      <li className="rounded-sm">
        <NavLink to={"yourPlan"} className="flex items-center p-2 space-x-3 rounded-md">
          <FaHome className="w-5 h-5 text-gray-600" />
          <span>Home</span>
        </NavLink>
      </li>
      <li className="rounded-sm">
        <NavLink  className="flex items-center p-2 space-x-3 rounded-md">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current text-gray-600">
            <path d="M479.6,399.716l-81.084-81.084-62.368-25.767A175.014,175.014,0,0,0,368,192c0-97.047-78.953-176-176-176S16,94.953,16,192,94.953,368,192,368a175.034,175.034,0,0,0,101.619-32.377l25.7,62.2L400.4,478.911a56,56,0,1,0,79.2-79.195ZM48,192c0-79.4,64.6-144,144-144s144,64.6,144,144S271.4,336,192,336,48,271.4,48,192ZM456.971,456.284a24.028,24.028,0,0,1-33.942,0l-76.572-76.572-23.894-57.835L380.4,345.771l76.573,76.572A24.028,24.028,0,0,1,456.971,456.284Z"></path>
          </svg>
          <span>Search</span>
        </NavLink>
      </li>
      <li className="rounded-sm">
        <NavLink to={'activityLog'} className="flex items-center p-2 space-x-3 rounded-md">
          <FiActivity className="w-5 h-5 text-gray-600" />
          <span>Activity Log page</span>
        </NavLink>
      </li>
      <li className="rounded-sm">
        <NavLink to={'bookedTrainer'} className="flex items-center p-2 space-x-3 rounded-md">
          <FaTrailer className="w-5 h-5 text-gray-600" />
          <span>Booked Trainer</span>
        </NavLink>
      </li>
      <li className="rounded-sm  text-gray-900">
        <NavLink to={'profilePage'} className="flex items-center p-2 space-x-3 rounded-md">
          <FaUser className="w-5 h-5 text-gray-600" />
          <span>Profile Page</span>
        </NavLink>
      </li>
      <li className="rounded-sm">
        <NavLink to={'addReview'} className="flex items-center p-2 space-x-3 rounded-md">
          <MdRateReview className="w-5 h-5 text-gray-600" />
          <span>Add review</span>
        </NavLink>
      </li>
      <li className="rounded-sm">
        <NavLink to={'/'} className="flex items-center p-2 space-x-3 rounded-md">
          <FaBackward className="w-5 h-5 text-gray-600" />
          <span>Back to Home</span>
        </NavLink>
      </li>
    </ul>
  );

  return (
    <div className="flex bg-gray-50 m-2 rounded-3xl h-screen">
      <div className="relative md:hidden">
        <button className="absolute left-1 top-1" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
          <IoMdMenu className="w-8 h-8 fill-current text-gray-800" />
        </button>
      </div>
      <div className={`fixed z-30 inset-y-0 left-0 w-80 bg-teal-100 p-3 text-gray-800 transform transition-transform duration-300 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:relative md:translate-x-0`}>
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h2>Dashboard</h2>
            <button className="p-2 md:hidden" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
              <IoMdMenu className="w-5 h-5 fill-current text-gray-800" />
            </button>
          </div>
          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center py-4">
              <button type="submit" className="p-2 focus:outline-none focus:ring">
                <svg fill="currentColor" viewBox="0 0 512 512" className="w-5 h-5 text-gray-600">
                  <path d="M479.6,399.716l-81.084-81.084-62.368-25.767A175.014,175.014,0,0,0,368,192c0-97.047-78.953-176-176-176S16,94.953,16,192,94.953,368,192,368a175.034,175.034,0,0,0,101.619-32.377l25.7,62.2L400.4,478.911a56,56,0,1,0,79.2-79.195ZM48,192c0-79.4,64.6-144,144-144s144,64.6,144,144S271.4,336,192,336,48,271.4,48,192ZM456.971,456.284a24.028,24.028,0,0,1-33.942,0l-76.572-76.572-23.894-57.835L380.4,345.771l76.573,76.572A24.028,24.028,0,0,1,456.971,456.284Z"></path>
                </svg>
              </button>
            </span>
            <input
              type="search"
              name="Search"
              placeholder="Search..."
              className="w-full py-2 pl-10 text-sm border-transparent rounded-md focus:outline-none bg-gray-100 text-gray-800 focus:bg-gray-50"
            />
          </div>
          <div className="flex-1">
            {!isAdminLoading && isAdmin ? renderAdminLinks() : !isTrainerLoading && isTrainer ? renderTrainerLinks() : renderMemberLinks()}
          </div>
        </div>
      </div>
      <div className="flex-1 p-10">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default DashBoard;
