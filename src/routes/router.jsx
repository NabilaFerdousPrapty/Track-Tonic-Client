
import MainLayout from './../Layouts/MainLayout';
import {createBrowserRouter, } from "react-router-dom";
import Home from '../Pages/Home/Home';
import Login from '../Pages/Login/Login';
import SignUp from '../Pages/SignUp/SignUp';
import AllClasses from '../Pages/AllClasses/AllClasses';
import AllTrainers from '../Pages/AllTrainers/AllTrainers';

 export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout/>,
      children:[
        {
          path:'/',
          element:<Home/>
        },{
          path:'/login',
          element:<Login/>

        },{
          path:'/signUp',
          element:<SignUp/>
        },{
          path:'/allClasses',
          element:<AllClasses/>
        },{
          path:'/allTrainers',
          element:<AllTrainers/>

        }
      ]
    },
  ]);