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
      },
      {
        path: "/community",
        element:<Community/>,
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
      }
    ],
  },
]);
