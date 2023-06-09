import './ResetPassword.scss'
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers, updateUser } from '../../features/idyUser/userSlice';
import bcrypt from "bcryptjs";


function ResetPassword() {

   const userData = useSelector((state) => { return state.IdyUser.data[0] });
   const dispatch = useDispatch();
   const navigate = useNavigate();
   const [formData, setFormData] = useState({ newPassword: '', confirmNewPassword: '' });
   const [errors, setErrors] = useState({});


   const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
   };

   const handleSubmit = (e) => {
      e.preventDefault();

      if (validateForm()) {

         const hashedPassword = bcrypt.hashSync(formData.newPassword, 10)

         const user = {
            ...userData,
            "password": hashedPassword,
         };

         dispatch(updateUser(user));

         setFormData({ newPassword: '', confirmNewPassword: '' });
         sessionStorage.removeItem("regdEmail");
         alert('Reset Password Successfully');
         navigate('/login');
      }

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
      }

      //  Validate Confirm password
      if (formData.confirmNewPassword === '') {
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
      const searchQuery = `?individual.email=${sessionStorage.getItem('regdEmail')}`
      dispatch(getUsers(searchQuery))
   }, [dispatch])

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
