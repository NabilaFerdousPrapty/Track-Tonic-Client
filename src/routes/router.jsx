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
        element: <Home />,
      },
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
      {
        path: "userDashboard",
        element: <UserDashboard />,
      },
    ],
  },
]);
