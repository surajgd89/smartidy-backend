import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createUser } from '../../features/idyUser/userSlice';
import { verifyEmail } from '../../features/idyUser/emailSlice';

import { useNavigate } from 'react-router-dom';
import Timer from '../../components/timer/Timer';
import OtpGenerator from '../../components/otp-generator/OtpGenerator';
import './OneTimePassword.scss'

function OneTimePassword() {
   const dispatch = useDispatch()
   const navigate = useNavigate();

   const isVerifyEmail = useSelector(state => state.verifyEmail.data);

   const [formData, setFormData] = useState({ otp: '' });
   const [errors, setErrors] = useState({});
   const [otp, setOTP] = useState('');
   const [showResend, setShowResend] = useState(false);
   const [showTimer, setshowTimer] = useState(false);


   const queryParameters = new URLSearchParams(window.location.search)
   const name = queryParameters.get("name");
   const email = queryParameters.get("email");
   const call = queryParameters.get("call");
   const password = queryParameters.get("password");


   const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
   };

   const handleTimerEnd = () => {
      setShowResend(true);
      setshowTimer(false);
   };

   const handleResendOTP = () => {
      setOTP(OtpGenerator())
      setshowTimer(true);
      setShowResend(false);
   };

   const validateForm = () => {
      let isValid = true;
      let errors = {};

      const isValidOtp = (otp) => {
         const regex = /^\d{6}$/;
         return regex.test(otp);
      };

      //  Validate otp
      if (!isValidOtp(formData.otp) || otp === '') {
         errors.otp = 'Please enter valid code';
         isValid = false;
      } else if (otp != formData.otp) {
         errors.otp = 'Incorrect Code';
         isValid = false;
      }

      setErrors(errors);
      return isValid;
   };

   const handleSubmit = (e) => {
      e.preventDefault();
      if (validateForm()) {

         const registerUser = {
            "password": password,
            "individual": {
               "name": name,
               "email": email,
               "call": call,
            }
         }

         if (isVerifyEmail.success) {
            dispatch(createUser(registerUser));
            navigate('/login');
         }

         setFormData({ otp: '' });
         setOTP('');
         setshowTimer(false);
      }
   };


   useEffect(() => {
      if (showTimer) {
         dispatch(verifyEmail({ "email": email, "otp": otp }));
      }
   }, [showTimer])


   return (
      <div className='page-section small-page'>
         <div className='page-body'>
            <div className="panel">
               <div className="panel-header">
                  <div>One Time Password</div>
                  <small>A OTP has been sent to your email <strong>{email}</strong></small>
               </div>
               <div className="panel-body">
                  <div className="row">
                     <div className="col-12">
                        <div className='form-group'>
                           <label className='control-label'>Enter OTP</label>
                           <input type="text" className='form-control' name='otp' onChange={handleChange} value={formData.otp} />
                           {errors.otp && <div className="control-error">{errors.otp}</div>}
                           {showTimer && <div className='control-note'>The OTP will expire in&nbsp;&nbsp;<strong><Timer duration={60} onTimerEnd={handleTimerEnd} /></strong></div>}
                        </div>
                     </div>
                  </div>
               </div>
               <div className="panel-footer">
                  <button onClick={handleResendOTP} type="button" className='btn btn-secondary'>Send OTP</button>
                  <button onClick={handleSubmit} type="button" className='btn btn-primary'>Verify</button>
                  {showResend && <button className='link' onClick={handleResendOTP}>Resend OTP</button>}
               </div>
            </div>
         </div>
      </div>
   )
}

export default OneTimePassword;