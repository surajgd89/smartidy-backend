import './Header.scss'
//import HeaderLogo from '../../assets/images/SmartIDy_logo.png'
import { Link } from 'react-router-dom'

export default function Header({ isLoggedIn, logOut }) {

   return (
      <div className="welcome-sec">
         <div className="head-logo">
            {/* <img src={HeaderLogo} alt="" /> */}
            <div className='brand-name'>Smart ID</div>
         </div>
         <div className="head-desc">
            SmartIDy is a mini website for your personal and professional use whose look and feel is like a digital
            business card.
            It is smart, elegant and affordable.
         </div>

         <div className='welcome-user'>
            Welcome {isLoggedIn ? 'abcd' : 'Guest!'}
         </div>

         {isLoggedIn &&
            <div className='user-action'>
               <Link to="/create" className='btn btn-primary'>Create SmartIDy</Link>
               <Link to="/change-password" className='btn btn-primary'>Change Password</Link>
               <button onClick={logOut} className='btn btn-primary'>Logout</button>
            </div>
         }

      </div>
   )
}
