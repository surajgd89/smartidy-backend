import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { createUser } from '../../features/user/userSlice';
import { useNavigate } from 'react-router-dom';
import Timer from '../timer/Timer';
import OtpGenerator from '../otp-generator/OtpGenerator';
import './OneTimePassword.scss'

function OneTimePassword() {
   const dispatch = useDispatch()
   const navigate = useNavigate();

   const [sendEmail, setSendEmail] = useState('');
   const [formData, setFormData] = useState({ otp: '' });
   const [errors, setErrors] = useState({});
   const [otp, setOTP] = useState('');
   const [showResend, setShowResend] = useState(false);
   const [showTimer, setshowTimer] = useState(false);


   const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
   };

   const registerUser = sessionStorage.getItem('registerUser');
   const regdEmail = sessionStorage.getItem('regdEmail');



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
         if (sessionStorage.getItem('registerUser')) {
            dispatch(createUser(JSON.parse(registerUser)));
            sessionStorage.removeItem("registerUser");
            navigate('/login');
         }
         if (sessionStorage.getItem('regdEmail')) {            
            navigate('/reset-password');
         }
         setFormData({ otp: '' });
         setOTP('');
         setshowTimer(false);
      }
   };

   useEffect(() => {
      handleResendOTP();
      if (sessionStorage.getItem('registerUser')) {
         setSendEmail(JSON.parse(registerUser).individual.email)
      }
      if (sessionStorage.getItem('regdEmail')) {
         setSendEmail(regdEmail)
      }
   }, [])

   return (
      <div className='page-section small-page'>
         <div className='page-body'>
            <div className="panel">
               <div className="panel-header">
                  <div>One Time Password {otp}</div>
                  <small>A OTP has been sent to <strong>{sendEmail}</strong></small>
               </div>
               <div className="panel-body">
                  <div className="row">
                     <div className="col-12">
                        <div className='form-group'>
                           <label className='control-label'>Enter OTP</label>
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

export default OneTimePassword;