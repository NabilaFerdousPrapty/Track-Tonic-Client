
import MainLayout from './../Layouts/MainLayout';
import {createBrowserRouter, } from "react-router-dom";
import Home from '../Pages/Home/Home';

 export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout/>,
      children:[
        {
          path:'/',
          element:<Home/>
        }
      ]
    },
  ]);