import { useState, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { createUser } from '../../features/user/userSlice';
import { useNavigate } from 'react-router-dom';

import './OneTimePassCode.scss'

const Timer = ({ duration, onTimerEnd }) => {

   const [timer, setTimer] = useState(duration);

   useEffect(() => {
      let interval = null;

      if (timer > 0) {
         interval = setInterval(() => {
            setTimer((prevTimer) => prevTimer - 1);
         }, 1000);
      } else {
         onTimerEnd();
      }

      return () => {
         clearInterval(interval);
      };

   }, [timer, onTimerEnd]);

   const formatTime = (time) => {
      const minutes = Math.floor(time / 60);
      const seconds = time % 60;
      return `${minutes} Min : ${seconds.toString().padStart(2, '0')} Sec`;
   };

   return (
      <span>{formatTime(timer)}</span>
   );
};

function OneTimePassCode() {
   const dispatch = useDispatch()
   const navigate = useNavigate();
   const [emailSent, setEmailSent] = useState('');
   const [formData, setFormData] = useState({ otp: '' });
   const [errors, setErrors] = useState({});
   const [otp, setOTP] = useState('');
   const [showResend, setShowResend] = useState(false);
   const [showTimer, setshowTimer] = useState(false);

   const registerUserData = sessionStorage.getItem('registerUserData');
   const forgotEmail = sessionStorage.getItem('forgotEmail');

   const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
   };

   const handleSubmit = (e) => {
      e.preventDefault();
      if (validateForm()) {

         if (sessionStorage.getItem('registerUserData')) {
            dispatch(createUser(JSON.parse(registerUserData)));
            setEmailSent(JSON.parse(registerUserData).individual.email)
            navigate('/login');
         } else if (sessionStorage.getItem('forgotEmail')) {
            setEmailSent(forgotEmail)
            navigate('/changepassword');
         }
         setFormData({ otp: '' });
         setOTP('');
         setshowTimer(false);
         sessionStorage.clear()

      }
   };

   const generateOTP = () => {
      const newOTP = Math.floor(100000 + Math.random() * 900000).toString();
      return newOTP;
   };

   const handleTimerEnd = () => {
      setShowResend(true);
      setshowTimer(false);
   };

   const handleResendOTP = () => {
      setOTP(generateOTP())
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

   useEffect(() => {
      handleResendOTP();
   }, [])

   return (
      <div className='page-section small-page'>
         <div className='page-body'>
            <div className="panel">
               <div className="panel-header">
                  <div>Verify Email {otp}</div>
                  <small>A verification code has been sent to <strong>{emailSent}</strong></small>
               </div>
               <div className="panel-body">
                  <div className="row">
                     <div className="col-12">
                        <div className='form-group'>
                           <label className='control-label'>Verification Code</label>
                           <input type="text" className='form-control' name='otp' onChange={handleChange} value={formData.otp} />
                           {errors.otp && <div className="control-error">{errors.otp}</div>}
                           {showTimer && <div className='control-note'>The code will expire in&nbsp;&nbsp;<strong><Timer duration={300} onTimerEnd={handleTimerEnd} /></strong></div>}
                        </div>
                     </div>
                  </div>
               </div>
               <div className="panel-footer">
                  <button onClick={handleSubmit} type="button" className='btn btn-primary btn-block'>Verify</button>
                  {showResend && <button className='link' onClick={handleResendOTP}>Resend Code</button>}
               </div>
            </div>
         </div>
      </div>
   )
}

export default OneTimePassCode;