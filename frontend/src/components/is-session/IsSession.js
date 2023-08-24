import { useEffect } from 'react';
import { Navigate, useLocation } from 'react-router-dom';


function IsSession({ isLoggedIn, sendOTP, children }) {

   const location = useLocation()

   if (isLoggedIn) {
      return <Navigate to='/create' replace />;
   }

   if (sendOTP === false) {
      return <Navigate to='/login' replace />;
   }



   return children;
}

export default IsSession