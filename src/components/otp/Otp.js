import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createUser } from '../../features/user/userSlice';
import { useNavigate } from 'react-router-dom';

import './Otp.scss'

function Otp() {
   const dispatch = useDispatch()
   const navigate = useNavigate();
   const [formData, setFormData] = useState({ otp: '' });
   const [errors, setErrors] = useState({});
   const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
   };

   const handleSubmit = (e) => {
      e.preventDefault();
      if (validateForm()) {
         const registerData = sessionStorage.getItem('registerData');
         const postData = JSON.parse(registerData);
         dispatch(createUser(postData));
         navigate('/login');
      }
   };

   const validateForm = () => {
      let isValid = true;
      let errors = {};
      const isValidOtp = (otp) => {
         const regex = /^\d{6}$/;
         return regex.test(otp);
      };

      //  Validate otp
      if (!isValidOtp(formData.otp)) {
         errors.otp = 'Please enter valid code';
         isValid = false;
      }

      setErrors(errors);
      return isValid;
   };


   return (
      <div className='page-section small-page '>
         <div className='page-body'>
            <div className="panel">
               <div className="panel-header">
                  <div>Verify Email Address</div>
                  <small>A verification code has been sent to <strong>suraj.gd89@gmail.com</strong></small>
               </div>
               <div className="panel-body">
                  <div className="row">
                     <div className="col-12">
                        <div className='form-group'>
                           <label className='control-label'>Verification Code</label>
                           <input type="text" className='form-control' name='otp' onChange={handleChange} />
                           {errors.otp && <div className="control-error">{errors.otp}</div>}
                           <div className='control-note'>The code will expire in 5 min : 00 Sec</div>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="panel-footer">
                  <button onClick={handleSubmit} type="button" className='btn btn-primary btn-block'>Verify</button>
                  <a href="#" className='link'>Resend Code</a>
               </div>
            </div>
         </div>
      </div >
   )
}

export default Otp;