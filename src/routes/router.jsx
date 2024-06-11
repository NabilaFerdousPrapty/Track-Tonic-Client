import MainLayout from "./../Layouts/MainLayout";
import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import AllClasses from "../Pages/AllClasses/AllClasses";
import AllTrainers from "../Pages/AllTrainers/AllTrainers";
import PrivateRoute from "./Private/PrivateRoute";
import TrainerDetails from "../Pages/AllTrainers/TrainerDetails/TrainerDetails";
import DashBoard from "../Layouts/DashBoard";
import BecomeATrainer from "../Pages/BecomeATrainer/BecomeATrainer";
import ErrorPage from "../Pages/Error/ErrorPage";
import UserDashboard from "../Pages/Dashboard/UserDashboard";
import PostDetails from "../Pages/Home/LatestCommunity/PostDetails/PostDetails";
import { axiosSecure } from "../hooks/UseAxiosSecure";
import Community from "../Pages/Community/Community";
import ActivityLog from "../Pages/UserDashBoard/AcitivityLog/ActivityLog";
import BookedTrainer from "../Pages/UserDashBoard/BookedTrainer/BookedTrainer";
import ProfilePage from "../Pages/UserDashBoard/ProfilePage/ProfilePage";
import AddReview from "../Pages/UserDashBoard/AddReview/AddReview";
import BookATrainer from "../Pages/BookATrainer/BookATrainer";
import PaymentPage from "../Pages/PaymentPage/PaymentPage";
import Subscriber from "../Pages/AdminDashboard/Subscribers/Subscriber";
import Appliedtrainer from "../Pages/AdminDashboard/Appliedtrainer/Appliedtrainer";

import Balance from "../Pages/AdminDashboard/Balance/Balance";
import AddnewClass from "../Pages/AdminDashboard/AddnewClass/AddnewClass";
import AddForum from "../Pages/AdminDashboard/AddForum/AddForum";
import ManageSlot from "../Pages/TrainerDashboard/ManageSlot/ManageSlot";
import AddNewSlot from "../Pages/TrainerDashboard/AddNewSlot/AddNewSlot";
import ViewAllTrainer from "../Pages/AdminDashboard/ViewAllTrainers/ViewAllTrainer";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signUp",
        element: <SignUp />,
      },
      {
        path: "/allClasses",
        element: <AllClasses />,
        loader: async () => {
          try {
            const response = await axiosSecure.get("/classesCount");
            return response.data;
          } catch (error) {
            console.error("Error loading classes:", error);
            throw new Error("Failed to load classes data");
          }
        }
      },
      {
        path: "/allTrainers",
        element: <AllTrainers />,
      },
      {
        path: "/allTrainers/:id",
        element: <TrainerDetails />,
      },
      {
        path: "/becomeATrainer",
        element: (
          <PrivateRoute>
            <BecomeATrainer />
          </PrivateRoute>
        ),
      },{
        path:"/booking/:id/:time/:date",
        element:<PrivateRoute>
          <BookATrainer/>
        </PrivateRoute>,
       

      },{

        path:'/payment',
        element:<PrivateRoute>
          <PaymentPage/>
        </PrivateRoute>
      },
      {
        path: "/community",
        element:<Community/>,
        loader: async () => {
          try {
            const response = await axiosSecure.get("/postsCount");
            return response.data;
          } catch (error) {
            console.error('Error loading items:', error);
            throw new Error('Failed to load item data');
          }
        }
      },{
        path: "/posts/:id",
        element: <PostDetails />,
        loader: async ({ params }) => {
          try {
            const response = await axiosSecure.get(`/posts/${params.id}`);
            return response.data;
          } catch (error) {
            console.error('Error loading item:', error);
            throw new Error('Failed to load item data');
          }
        }
      }
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <DashBoard></DashBoard>
      </PrivateRoute>
    ),
    errorElement: <ErrorPage />,
    children: [
      //user routes
      {
        path: "yourPlan",
        element: <UserDashboard />,
      },{
        path:'activityLog',
        element:<ActivityLog/>
      },{
        path:'bookedTrainer',
        element:<BookedTrainer/>
      },{
        path:'profilePage',
        element:<ProfilePage/>
      },{
        path:'addReview',
        element:<AddReview/>
      },
      //Admin routes
      {
        path:'subscribers',
        element:<Subscriber/>
      },{
        path:'allTrainers',
        element:<ViewAllTrainer/>
      },{
        path:'appliedTrainer',
        element:<Appliedtrainer/>
      },{
        path:'balance',
        element:<Balance/>
      },{
        path:'addNewClass',
        element:<AddnewClass/>
      },{
        path:'addForum',
        element:<AddForum/>
      },
      //Trainee routes
      {
        path:'manageSlot',
        element:<ManageSlot/>
      },{
        path:'addNew',
        element:<AddNewSlot/>

      }
    ],
  },
]);
