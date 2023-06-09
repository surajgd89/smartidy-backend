import './ChangePassword.scss'
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers, updateUser } from '../../features/idyUser/userSlice';
import bcrypt from "bcryptjs";

function ChangePassword() {
   const userData = useSelector((state) => state.idyUser.data);
   const dispatch = useDispatch();
   const navigate = useNavigate();
   const [formData, setFormData] = useState({ currentPassword: '', newPassword: '', confirmNewPassword: '' });
   const [errors, setErrors] = useState({});
   const [userUpdate, setUserUpdate] = useState({});

   const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
   };

   const handleSubmit = (e) => {
      e.preventDefault();

      if (validateForm()) {
         const updateData = { ...userUpdate, "changePass": true }
         dispatch(updateUser(updateData));
         setFormData({ currentPassword: '', newPassword: '', confirmNewPassword: '' });
         sessionStorage.removeItem("regdEmail");
         alert('Change Password Successfully');
         navigate('/home');
      }
   };

   const validateForm = () => {
      let isValid = true;
      let errors = {};

      const isValidPassword = (testcase) => {
         const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
         return regex.test(testcase);
      };

      const isCheckUser = (email, currentPassword) => {
         return userData.some((user) => {
            if (user.individual.email === email && bcrypt.compareSync(currentPassword, user.password)) {
               setUserUpdate(user);
               return true
            }
            return false
         });
      };

      //  Current password
      if (formData.currentPassword === '') {
         errors.currentPassword = 'Password is required';
         isValid = false;
      } else if (!isCheckUser(sessionStorage.getItem('regdEmail'), formData.currentPassword)) {
         errors.currentPassword = 'Incorrect Password';
         isValid = false;
      }

      //  Validate new password
      if (formData.newPassword === '') {
         errors.newPassword = 'Password is required';
         isValid = false;
      } else if (!isValidPassword(formData.newPassword)) {
         errors.newPassword = 'Password is invalid.';
         isValid = false;
      } else if (formData.currentPassword === formData.newPassword) {
         errors.newPassword = 'New password cannot be the same as your old password';
         isValid = false;
      } else if (formData.confirmNewPassword === '') {
         errors.confirmNewPassword = 'Confirm Password is required';
         isValid = false;
      } else if (formData.newPassword !== formData.confirmNewPassword) {
         errors.confirmNewPassword = 'Passwords do not match';
         isValid = false;
      }

      setErrors(errors);
      return isValid;
   };

   useEffect(() => {
      dispatch(getUsers())
   }, [dispatch]);


   return (

      <div className='page-section small-page'>
         <div className='page-body'>
            <div className="panel">
               <div className="panel-header"> Change Password</div>
               <div className="panel-body">

                  <div className="row">
                     <div className="col-12">
                        <div className='form-group'>
                           <label className='control-label'>
                              Current Password
                           </label>
                           <input type="password" value={formData.currentPassword} name='currentPassword' className='form-control' onChange={handleChange} />
                           {errors.currentPassword && <div className="control-error">{errors.currentPassword}</div>}
                        </div>
                     </div>
                     <div className="col-12">
                        <div className='form-group'>
                           <label className='control-label'>
                              New Password
                           </label>
                           <input type="password" value={formData.newPassword} name='newPassword' className='form-control' onChange={handleChange} />
                           {errors.newPassword && <div className="control-error">{errors.newPassword}</div>}
                        </div>
                     </div>
                     <div className="col-12">
                        <div className='form-group'>
                           <label className='control-label'>
                              Confirm New Password
                           </label>
                           <input type="password" value={formData.confirmNewPassword} name='confirmNewPassword' className='form-control' onChange={handleChange} />
                           {errors.confirmNewPassword && <div className="control-error">{errors.confirmNewPassword}</div>}
                        </div>
                     </div>
                  </div>
               </div>
               <div className="panel-footer">
                  <button type="button" className='btn btn-primary btn-block' onClick={handleSubmit}>Update Password</button>
               </div>
            </div>

         </div>

      </div>
   );
}

export default ChangePassword;