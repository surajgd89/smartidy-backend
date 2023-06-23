import { NavLink } from 'react-router-dom';
import './Navbar.scss';

function Navbar() {
   return (
      <div className='navbar'>
         <div className='nav-links'>
            <NavLink to="/dashboard">Dashboard</NavLink>
            <NavLink to="/create">Create SmartIDy</NavLink>
         </div>
      </div>
   )
}

export default Navbar;