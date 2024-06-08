import { useState } from "react";
import { FaHome, FaShoppingBag } from "react-icons/fa";
import { FaRegMessage } from "react-icons/fa6";
import { IoMdMenu } from "react-icons/io";
import { Link, NavLink, Outlet } from "react-router-dom";
import UseAdmin from "../hooks/UseAdmin";

const DashBoard = () => {
  // const [isAdmin] = [true];
  // const [isTrainer] = [false];
  const [isAdmin ,isAdminLoading]=UseAdmin()
  console.log(isAdmin,isAdminLoading);

  
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex bg-gray-50 m-2 rounded-3xl h-screen">
      <div className="flex-1 md:hidden">
        <button className="p-2" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
          <IoMdMenu className="w-8 h-8 fill-current text-gray-800" />
        </button>
      </div>
      <div className={`fixed z-30 inset-y-0 left-0 w-60 bg-teal-100 p-3 text-gray-800 transform transition-transform duration-300 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:relative md:translate-x-0`}>
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
            {
              isAdmin ? <ul className="pt-2 pb-4 space-y-1 text-sm">
              <li className="rounded-sm">
                <NavLink to={"userDashboard"} className="flex items-center p-2 space-x-3 rounded-md">
                  <FaHome className="w-5 h-5 text-gray-600" />
                  <span>Admin Home</span>
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
                <NavLink  className="flex items-center p-2 space-x-3 rounded-md">
                  <FaRegMessage className="w-5 h-5 text-gray-600" />
                  <span>Chat</span>
                </NavLink>
              </li>
              <li className="rounded-sm">
                <NavLink href="#" className="flex items-center p-2 space-x-3 rounded-md">
                  <FaShoppingBag className="w-5 h-5 text-gray-600" />
                  <span>Orders</span>
                </NavLink>
              </li>
              <li className="rounded-sm bg-gray-100 text-gray-900">
                <NavLink href="#" className="flex items-center p-2 space-x-3 rounded-md">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current text-gray-600">
                    <path d="M453.122,79.012a128,128,0,0,0-181.087.068l-15.511,15.7L241.142,79.114l-.1-.1a128,128,0,0,0-181.02,0l-6.91,6.91a128,128,0,0,0,0,181.019L235.485,449.314l20.595,21.578.491-.492.533.533L276.4,450.574,460.032,266.94a128.147,128.147,0,0,0,0-181.019ZM437.4,244.313,256.571,425.146,75.738,244.313a96,96,0,0,1,0-135.764l6.911-6.91a96,96,0,0,1,135.713-.051l38.093,38.787,38.274-38.736a96,96,0,0,1,135.765,0l6.91,6.909A96.11,96.11,0,0,1,437.4,244.313Z"></path>
                  </svg>
                  <span>Wishlist</span>
                </NavLink>
              </li>
              <li className="rounded-sm">
                <NavLink href="#" className="flex items-center p-2 space-x-3 rounded-md">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current text-gray-600">
                    <path d="M448.205,392.507c30.519-27.2,47.8-63.455,47.8-101.078,0-39.984-18.718-77.378-52.707-105.3C410.218,158.963,366.432,144,320,144s-90.218,14.963-123.293,42.131C162.718,214.051,144,251.445,144,291.429s18.718,77.378,52.707,105.3c33.075,27.168,76.861,42.13,123.293,42.13,6.187,0,12.412-.273,18.585-.816l10.546,9.141A199.849,199.849,0,0,0,480,496h16V461.943l-4.686-4.685A199.17,199.17,0,0,1,448.205,392.507ZM320,432c-41.056,0-79.489-13.9-108.276-39.167C183.087,366.42,168,330.97,168,291.429s15.087-75,43.724-101.4C240.511,164.9,278.944,151,320,151c41.057,0,79.49,13.9,108.276,39.167,27.76,24.406,43.724,59.855,43.724,98.282,0,29.964-12.485,58.878-35.139,82.733L432,382.058V456a167.8,167.8,0,0,0-51.276-36.514l-7.8-3.179-37.134,37.134C329.88,430.413,324.971,432,320,432Zm0-240a40,40,0,1,0,40,40A40,40,0,0,0,320,192Zm144,232h-8.686a230.77,230.77,0,0,0-65.037-41.808,66.631,66.631,0,0,1,19.07-21.4A139.513,139.513,0,0,0,416,343.263c0-67.35-53.15-122.263-118.924-122.263s-118.924,54.913-118.924,122.263,53.15,122.263,118.924,122.263a139.516,139.516,0,0,0,47.048-8.243,99.767,99.767,0,0,0,21.4-12.127,66.578,66.578,0,0,1,20.33-22.7A197.917,197.917,0,0,1,464,496h-8V452.058Zm0,0" />
                  </svg>
                  <span>Messages</span>
                </NavLink>
              </li>
            </ul> :
           <ul className="pt-2 pb-4 space-y-1 text-sm">
              <li className="rounded-sm">
                <NavLink to={"userDashboard"} className="flex items-center p-2 space-x-3 rounded-md">
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
                <NavLink  className="flex items-center p-2 space-x-3 rounded-md">
                  <FaRegMessage className="w-5 h-5 text-gray-600" />
                  <span>Chat</span>
                </NavLink>
              </li>
              <li className="rounded-sm">
                <NavLink href="#" className="flex items-center p-2 space-x-3 rounded-md">
                  <FaShoppingBag className="w-5 h-5 text-gray-600" />
                  <span>Orders</span>
                </NavLink>
              </li>
              <li className="rounded-sm bg-gray-100 text-gray-900">
                <NavLink href="#" className="flex items-center p-2 space-x-3 rounded-md">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current text-gray-600">
                    <path d="M453.122,79.012a128,128,0,0,0-181.087.068l-15.511,15.7L241.142,79.114l-.1-.1a128,128,0,0,0-181.02,0l-6.91,6.91a128,128,0,0,0,0,181.019L235.485,449.314l20.595,21.578.491-.492.533.533L276.4,450.574,460.032,266.94a128.147,128.147,0,0,0,0-181.019ZM437.4,244.313,256.571,425.146,75.738,244.313a96,96,0,0,1,0-135.764l6.911-6.91a96,96,0,0,1,135.713-.051l38.093,38.787,38.274-38.736a96,96,0,0,1,135.765,0l6.91,6.909A96.11,96.11,0,0,1,437.4,244.313Z"></path>
                  </svg>
                  <span>Wishlist</span>
                </NavLink>
              </li>
              <li className="rounded-sm">
                <NavLink href="#" className="flex items-center p-2 space-x-3 rounded-md">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current text-gray-600">
                    <path d="M448.205,392.507c30.519-27.2,47.8-63.455,47.8-101.078,0-39.984-18.718-77.378-52.707-105.3C410.218,158.963,366.432,144,320,144s-90.218,14.963-123.293,42.131C162.718,214.051,144,251.445,144,291.429s18.718,77.378,52.707,105.3c33.075,27.168,76.861,42.13,123.293,42.13,6.187,0,12.412-.273,18.585-.816l10.546,9.141A199.849,199.849,0,0,0,480,496h16V461.943l-4.686-4.685A199.17,199.17,0,0,1,448.205,392.507ZM320,432c-41.056,0-79.489-13.9-108.276-39.167C183.087,366.42,168,330.97,168,291.429s15.087-75,43.724-101.4C240.511,164.9,278.944,151,320,151c41.057,0,79.49,13.9,108.276,39.167,27.76,24.406,43.724,59.855,43.724,98.282,0,29.964-12.485,58.878-35.139,82.733L432,382.058V456a167.8,167.8,0,0,0-51.276-36.514l-7.8-3.179-37.134,37.134C329.88,430.413,324.971,432,320,432Zm0-240a40,40,0,1,0,40,40A40,40,0,0,0,320,192Zm144,232h-8.686a230.77,230.77,0,0,0-65.037-41.808,66.631,66.631,0,0,1,19.07-21.4A139.513,139.513,0,0,0,416,343.263c0-67.35-53.15-122.263-118.924-122.263s-118.924,54.913-118.924,122.263,53.15,122.263,118.924,122.263a139.516,139.516,0,0,0,47.048-8.243,99.767,99.767,0,0,0,21.4-12.127,66.578,66.578,0,0,1,20.33-22.7A197.917,197.917,0,0,1,464,496h-8V452.058Zm0,0" />
                  </svg>
                  <span>Messages</span>
                </NavLink>
              </li>
            </ul> 
            }
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
