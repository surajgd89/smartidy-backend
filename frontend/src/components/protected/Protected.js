import { Navigate, useLocation } from 'react-router-dom'

function Protected({ isLoggedIn, redirectPath = '/login', children }) {


   if (!isLoggedIn) {
      return <Navigate to={redirectPath} replace />
   }
   return children
}
export default Protected