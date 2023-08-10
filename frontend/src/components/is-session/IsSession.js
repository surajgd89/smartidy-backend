import { Navigate } from 'react-router-dom';

function IsSession({ isLoggedIn, children }) {

   if (isLoggedIn) {
      return <Navigate to='/create' replace />;
   }

   return children;
}
export default IsSession