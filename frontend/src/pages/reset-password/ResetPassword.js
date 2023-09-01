import './ResetPassword.scss'
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers, updateUser } from '../../features/idyUser/userSlice';
import bcrypt from "bcryptjs";
import jwt_decode from "jwt-decode";
import { toast } from 'react-toastify';


function ResetPassword() {

   const user = useSelector(state => state.idyUser.data[0]);

   const dispatch = useDispatch();
   const navigate = useNavigate();
   const [formData, setFormData] = useState({ newPassword: '', confirmNewPassword: '' });
   const [errors, setErrors] = useState({});

   const [expired, setExpired] = useState(false);
   const [invalid, setInvalid] = useState(false);

   const { search } = useLocation();
   const queryParams = new URLSearchParams(search)
   const resetToken = queryParams.get("token");

   const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
   };

   const validateForm = () => {
      let isValid = true;
      let errors = {};

      const isValidPassword = (testcase) => {
         const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
         return regex.test(testcase);
      };

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

   const notify_passwordChanged = () => toast.success('Password Changed Successfully');
   const notify_tokenExpired = () => toast.error('Reset Password Link Expired');
   const notify_InvalidLink = () => toast.error('Invalid Reset Password Link');

   const handleSubmit = (e) => {
      e.preventDefault();
      if (validateForm()) {
         const hashed = bcrypt.hashSync(formData.newPassword, 10);
         const updateData = { ...user, "password": hashed }
         dispatch(updateUser(updateData));
         setFormData({ newPassword: '', confirmNewPassword: '' });
         setExpired(true)
         notify_passwordChanged();
         navigate('/login');
      }
   };



   useEffect(() => {

      try {
         const decoded = jwt_decode(resetToken);

         dispatch(getUsers(`?individual.email=${decoded.mail}`));

         if (Date.now() >= Number(decoded.exp * 1000)) {
            setExpired(true)
         }

      } catch (error) {
         setInvalid(true)
      }

      if (expired === true) {
         notify_tokenExpired();
         navigate('/login')
      }

      if (invalid === true) {
         notify_InvalidLink();
         navigate('/login')
      }


   }, [expired, invalid])



   return (
      <div className='page-section small-page'>
         <div className='page-body'>
            <div className="panel">
               <div className="panel-header"> Reset Password </div>
               <div className="panel-body">
                  <div className="row">
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

export default ResetPassword;
