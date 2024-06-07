import React from 'react';
import UseAdmin from '../../hooks/UseAdmin';
import useAuth from '../../hooks/UseAuth';
import { Navigate, useLocation } from 'react-router-dom';

const AdminRoute = ({children}) => {
    const {user,loading}=useAuth();
    const [isAdmin,isAdminLoading]=UseAdmin();
    const location = useLocation();
  if (loading|| isAdminLoading) {
    return (
      <div className="flex flex-col justify-center items-center">
        <div>
        <span className="loading loading-dots loading-xs"></span>
        <span className="loading loading-dots loading-sm"></span>
        <span className="loading loading-dots loading-md"></span>
        <span className="loading loading-dots loading-lg"></span>
        </div>
        <div className="flex flex-col m-8 rounded shadow-md w-60 sm:w-80 animate-pulse h-96">
            
          <div className="h-48 rounded-t bg-gray-300"></div>
          <div className="flex-1 px-4 py-8 space-y-4 sm:p-8 bg-gray-50">
            <div className="w-full h-6 rounded bg-gray-300"></div>
            <div className="w-full h-6 rounded bg-gray-300"></div>
            <div className="w-3/4 h-6 rounded bg-gray-300"></div>
          </div>
        </div>
      </div>
    );
  }
  if (user && isAdmin) {
    return children;
  } else {
    return <Navigate state={location.pathname || "/"} replace to="/login" />;
  }
};

export default AdminRoute;