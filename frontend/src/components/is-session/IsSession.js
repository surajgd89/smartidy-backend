import { Navigate, useLocation } from 'react-router-dom';

function IsSession({ isLoggedIn, children }) {

   const { search } = useLocation();

   console.log(search)

   if (isLoggedIn) {
      return <Navigate to='/create' replace />;
   }

   return children;
}
export default IsSession