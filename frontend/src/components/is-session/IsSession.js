import { Navigate } from 'react-router-dom';

function IsSession({ isLoggedIn, isSendOtp, children }) {

   if (isLoggedIn) {
      return <Navigate to='/create' replace />;
   }


   if (isSendOtp === 'false') {
      return <Navigate to='/login' replace />;
   }

   return children;
}

export default IsSession