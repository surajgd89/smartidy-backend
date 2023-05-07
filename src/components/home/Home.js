import axios from 'axios';
import { useEffect, useState } from 'react';
import ProfilePhotoDefault from '../../assets/images/profile-photo-default.jpg';
import { useNavigate } from 'react-router-dom';

import './Home.scss'
export default function Home() {

   const url = "http://localhost:3000/users";
   const [users, setUsers] = useState([]);
   const [searchValue, setSearchValue] = useState('');
   const navigate = useNavigate();

   const navigateForEdit = () => {
      console.log(url)
      navigate('/create');
   };

   const viewNewWindow = (url) => {
      console.log(url)
      window.open(url, '_blank');
   };

   const getUsers = async () => {
      try {
         const response = await axios.get(url)
         setUsers(response.data);
      } catch (error) {
         console.log(error)
      }
   }

   const statusLbl = (status) => {

      let htmlStatus = <div className="status process">Process</div>

      if (status === "A") {
         htmlStatus = <div className="status active">Active</div>
      } else if (status === "H") {
         htmlStatus = <div className="status hold">Hold</div>
      } else if (status === "I") {
         htmlStatus = <div className="status inactive">InActive</div>
      }

      return htmlStatus
   }

   useEffect(() => {
      getUsers()
   }, []);


   return (
      <div className='page-section'>
         <div className="page-header">Live SmartIDy Users</div>
         <div className='page-body'>
            <div className="form-group">
               <input
                  type="text"
                  placeholder="Search by Individual Name..."
                  value={searchValue}
                  className="form-control"
                  onChange={(e) => setSearchValue(e.target.value)}
               />
            </div>
            <div className="live-listing">
               <div className="link-row">
                  {users.filter((user) =>
                     user.individual.name.toLowerCase().includes(searchValue.toLowerCase())
                  ).map((user) => {
                     return (
                        <div className="link-col">
                           <div className="portfolio-lnk">

                              <img className='profile-picture' src={user.profilePic != null ? user.profilePic : ProfilePhotoDefault} />

                              <div className='details'>
                                 <div className="individual-name">{user.individual.name}</div>
                                 <div className="business-name">{user.business.name}</div>
                              </div>
                              {statusLbl(user.status)}
                              <div className='action'>
                                 <button type='button' title='Edit' className='btn btn-primary' onClick={(e) => navigateForEdit(user.userId)}><i className='fal fa-pencil'></i></button>
                                 <button type='button' title='View' className='btn btn-primary' onClick={(e) => viewNewWindow(user.config.smartIdyUrl)}><i className='fal fa-eye'></i></button>
                              </div>
                           </div>
                        </div>
                     )
                  })}
               </div>
            </div>
         </div>
      </div>






   )
}
