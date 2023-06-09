
import { useEffect, useState } from 'react';
import './ForgotPassword.scss'
import { useDispatch, useSelector } from 'react-redux';

import { Link, useNavigate } from 'react-router-dom';
import { registerRequest } from '../../features/idyUser/registerSlice';

function ForgotPassword() {
   const isRegistredUser = useSelector(state => state.registerRequest.data);
   const dispatch = useDispatch()
   const navigate = useNavigate();

   const [formData, setFormData] = useState({ email: '' });
   const [errors, setErrors] = useState({});

   const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
   };

   const handleSubmit = (e) => {
      e.preventDefault();

      if (validateForm()) {
         sessionStorage.setItem('regdEmail', formData.email);
         setFormData({ email: '' })
         navigate('/otp');
      }
   }


   const validateForm = () => {
      let isValid = true;
      let errors = {};

      const isValidEmail = (testcase) => {
         const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
         return regex.test(testcase);
      };


      //  Validate email
      if (formData.email === '') {
         errors.email = 'Email is required';
         isValid = false;
      } else if (!isValidEmail(formData.email)) {
         errors.email = 'Invalid email address';
         isValid = false;
      } else if (!isRegistredUser) {
         errors.email = 'Incorrect email address';
         isValid = false;
      }

      setErrors(errors);
      return isValid;
   };


   useEffect(() => {
      dispatch(registerRequest(`?individual.email=${formData.email}`))
   }, [dispatch, handleSubmit]);



   return (
      <div className='page-section small-page '>
         <div className='page-body'>
            <div className="panel">
               <div className="panel-header"> Forgot Password</div>
               <div className="panel-body">
                  <div className="row">
                     <div className="col-12">
                        <div className="form-group">
                           <label className="control-label">Email</label>
                           <input type="text" value={formData.email} className="form-control" name="email" onChange={handleChange} />
                           {errors.email && <div className="control-error">{errors.email}</div>}
                        </div>
                     </div>
                  </div>
               </div>
               <div className="panel-footer">
                  <button onClick={handleSubmit} type="button" className='btn btn-primary btn-block'>Reset Password</button>
                  <Link to="/login" className='link'>Back to Login</Link>
               </div>
            </div>
         </div>
      </div>
   )

}

export default ForgotPassword;