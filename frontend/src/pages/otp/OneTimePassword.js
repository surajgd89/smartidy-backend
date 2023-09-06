import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useRef } from 'react';
import Timer from '../../components/timer/Timer';
import OtpGenerator from '../../components/otp-generator/OtpGenerator';
import { useDispatch, useSelector } from 'react-redux';
import { createUser } from '../../features/idyUser/userSlice';
import { verifyEmail } from '../../features/idyUser/emailSlice';
import './OneTimePassword.scss'

function OneTimePassword() {
   const isVerifyEmail = useSelector(state => state.verifyEmail.data);
   const dispatch = useDispatch()
   const navigate = useNavigate();
   const { state } = useLocation()
   const { name, email, mobile, password } = state;
   const refElm_BtnOTP = useRef();
   const refElm_BtnVerify = useRef();
   const [formData, setFormData] = useState({ otp: '' });
   const [errors, setErrors] = useState({});
   const [otp, setOTP] = useState('');
   const [showTimer, setshowTimer] = useState(false);
   const notify_OTPSend = () => toast.success('OTP Send Successfully');
   const notify_Registred = () => toast.success('Registration Successful');

   const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
   };

   const handleTimerEnd = () => {
      setshowTimer(false);
   };

   const handleResendOTP = () => {
      setOTP(OtpGenerator())
      notify_OTPSend();
      setshowTimer(true);
      btnDisable();
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
               "call": mobile,
            }
         }

         if (isVerifyEmail.success) {
            dispatch(createUser(registerUser));
         }

         notify_Registred();
         navigate('/login')
         setFormData({ otp: '' });
         setOTP('');
         setshowTimer(false);
      }
   };

   const btnDisable = () => {
      if (refElm_BtnOTP.current) {
         refElm_BtnOTP.current.disabled = true;
         refElm_BtnVerify.current.disabled = false;
      }
   };

   useEffect(() => {
      if (showTimer === false) {
         refElm_BtnOTP.current.disabled = false;
         refElm_BtnVerify.current.disabled = true;
      }

      if (showTimer) {
         refElm_BtnOTP.current.innerText = "Resend OTP";
      }

   }, [showTimer]);

   useEffect(() => {
      if (otp != '') {
         dispatch(verifyEmail({ "email": email, "otp": otp }));
      }
   }, [otp]);

   return (
      <div className='page-section small-page'>
         <div className='page-body'>
            <div className="panel">
               <div className="panel-header">
                  <div>One Time Password</div>
                  {showTimer && <small>A OTP has been sent to your email <strong>{email}</strong></small>}
               </div>
               <div className="panel-body">
                  <div className="row">
                     <div className="col-12">
                        <div className='form-group'>
                           <label className='control-label'>Enter OTP</label>
                           <input type="text" className='form-control' name='otp' onChange={handleChange} value={formData.otp} />
                           {errors.otp && <div className="control-error">{errors.otp}</div>}
                           {showTimer && <div className='control-note'>The OTP will expire in&nbsp;&nbsp;<strong><Timer duration={300} onTimerEnd={handleTimerEnd} /></strong></div>}
                        </div>
                     </div>
                  </div>
               </div>
               <div className="panel-footer">
                  <button onClick={handleResendOTP} ref={refElm_BtnOTP} type="button" className='btn btn-secondary'>Send OTP</button>
                  <button onClick={handleSubmit} ref={refElm_BtnVerify} type="button" className='btn btn-primary'>Verify</button>
               </div>
            </div>
         </div>

      </div>
   )
}
export default OneTimePassword;