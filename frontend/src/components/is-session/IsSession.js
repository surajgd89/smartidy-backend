import { Navigate } from 'react-router-dom';

function IsSession({ isLoggedIn, sendOTP, children }) {

   if (isLoggedIn) {
      return <Navigate to='/create' replace />;
   }

   if (sendOTP === false) {
      return <Navigate to='/login' replace />;
   }



   return children;
}

export default IsSession