
import { useEffect, useState } from 'react';
import ProfilePhotoDefault from '../../assets/images/profile-photo-default.jpg';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';


import './Dashboard.scss'
function Dashboard({ logInUser }) {



   const [searchValue, setSearchValue] = useState('');
   const navigate = useNavigate();


   const statusLbl = (status) => {
      let userStatus;
      if (status === "A") {
         userStatus = <div className="status active">Active</div>
      } else if (status === "H") {
         userStatus = <div className="status hold">Hold</div>
      } else if (status === "I") {
         userStatus = <div className="status inactive">InActive</div>
      } else if (status === "P") {
         userStatus = <div className="status process">Process</div>
      }
      return userStatus
   }

   const navigateForEdit = () => {
      navigate('/create');
   };

   const viewNewWindow = (url) => {
      console.log(url)
      window.open(url, '_blank');
   };





   return (
      <div className='page-section'>
         <div className="page-header">SmartIDy Dashboard</div>
         <div className='page-body'>

            <div className="live-listing">
               <div className="link-row">
                  <div className="link-col">
                     <div className="portfolio-lnk">
                        <img className='profile-picture' src={logInUser.profilePic ? logInUser.profilePic : ProfilePhotoDefault} />
                        <div className='details'>
                           <div className="individual-name">{logInUser.individual.name}</div>
                           <div className="business-name">{logInUser.business.name}</div>
                        </div>

                        {statusLbl(logInUser.status)}

                        <div className='action'>
                           <button type='button' title='Edit' className='btn btn-primary' onClick={(e) => navigateForEdit(logInUser._id)}><i className='fal fa-pencil'></i></button>

                           {logInUser.status === "A" && <button type='button' title='View' className='btn btn-primary' onClick={(e) => viewNewWindow(logInUser.config.smartIdyUrl)}><i className='fal fa-eye'></i></button>}

                        </div>
                     </div>
                  </div>



               </div>
            </div>
         </div>
      </div>
   )
}

export default Dashboard;