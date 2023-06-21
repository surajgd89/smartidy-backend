import './Header.scss'
import HeaderLogo from '../../assets/images/SmartIDy_logo.png'

export default function Header({ isLoggedIn }) {
   return (
      <div className="welcome-sec">
         <div className="head-logo">
            <img src={HeaderLogo} alt="" />
         </div>
         <div className="head-desc">
            SmartIDy is a mini website for your personal and professional use whose look and feel is like a digital
            business card.
            It is smart, elegant and affordable.
         </div>

         <div className='welcome-user'>
            Welcome {isLoggedIn ? 'Surya' : 'Guest!'}
         </div>

      </div>
   )
}
