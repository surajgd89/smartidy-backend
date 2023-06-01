import { NavLink } from 'react-router-dom';
import './Navbar.scss'



function Navbar() {

   return (
      <div className='navbar'>
         <div className='nav-links'>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/create">Create</NavLink>
            <NavLink to="/login">Logout</NavLink>
            <NavLink to="/changepassword">Change Password</NavLink>
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/register">Register</NavLink>
         </div>
      </div>
   )
}

export default Navbar;