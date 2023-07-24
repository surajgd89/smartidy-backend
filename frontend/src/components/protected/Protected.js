import { Navigate, useLocation } from 'react-router-dom';

function Protected({ isLoggedIn, redirectPath = '/login', children }) {

   const { pathname } = useLocation();

   if (!isLoggedIn) {
      return <Navigate to={redirectPath} replace />
   }


   return children
}
export default Protected