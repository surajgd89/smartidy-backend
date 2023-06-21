import { NavLink } from 'react-router-dom';
import './Navbar.scss';

function Navbar({ isLoggedIn, logOut }) {
   return (
      <div className='navbar'>
         <div className='nav-links'>




            {isLoggedIn ?
               <>
                  <NavLink to="/home">Home</NavLink>
                  <NavLink to="/create">Create</NavLink>
                  <NavLink to="/change-password">Change Password</NavLink>
                  <NavLink to="/login" onClick={logOut}>Logout</NavLink>
               </>
               :
               <>
                  <NavLink to="/">Home</NavLink>
                  <NavLink to="/login">Login</NavLink>
                  <NavLink to="/register">Register</NavLink>
               </>
            }

         </div>
      </div>
   )
}

export default Navbar;