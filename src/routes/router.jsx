
import MainLayout from './../Layouts/MainLayout';
import {createBrowserRouter, } from "react-router-dom";
import Home from '../Pages/Home/Home';
import Login from '../Pages/Login/Login';
import SignUp from '../Pages/SignUp/SignUp';

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
        }
      ]
    },
  ]);