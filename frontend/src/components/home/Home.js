
import { useEffect, useState } from 'react';
import ProfilePhotoDefault from '../../assets/images/profile-photo-default.jpg';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getUser } from '../../features/user/userSlice';

import './Home.scss'
function Home() {


   //User
   const userData = useSelector((state) => { return state.idyUser.data });
   const loading = useSelector((state) => { return state.idyUser.loading });
   const error = useSelector((state) => { return state.idyUser.error });
   const dispatch = useDispatch();
   const [searchValue, setSearchValue] = useState('');
   const navigate = useNavigate();


   const handle_getUser = () => {
      dispatch(getUser());
   };

   // const handle_CreateUser = () => {
   //    dispatch(createUser({ 'userId': 'surya' }));
   // };

   // const handle_UpdateUser = (id, userData) => {
   //    dispatch(updateUser({ id, userData }));
   // };

   // const handle_DeleteUser = (id) => {
   //    dispatch(deleteUser(id));
   // };

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

   useEffect(() => {
      handle_getUser();
   }, [dispatch]);


   if (loading) {
      return <div>Loading...</div>;
   }

   if (error) {
      return <div>Error: {error}</div>;
   }


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
                  {userData.filter((filter) => filter.individual.name.toLowerCase().includes(searchValue.toLowerCase())).map((user, index) => {
                     if (user.status) {
                        return (
                           <div className="link-col" key={index}>
                              <div className="portfolio-lnk">
                                 <img className='profile-picture' src={user.profilePic ? user.profilePic : ProfilePhotoDefault} />
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
                     }
                  })}
               </div>
            </div>
         </div>
      </div>
   )
}

export default Home;