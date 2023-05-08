
import { useState } from 'react';
import DatePicker from "react-datepicker";
import './Register.scss'
import axios from 'axios';

function Register() {

   const [formData, setFormData] = useState({
      email: '',
      mobile: '',
      dob: '',
      password: '',
      confirmPassword: '',
   });

   const [errors, setErrors] = useState({});

   const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
   };

   const handleSubmit = (e) => {
      e.preventDefault();
      if (validateForm()) {
         let formatingDate = new Date(formData.dob).toLocaleDateString();
         formData.dob = formatingDate;

         console.log('Form submitted:', formData);

         setFormData({
            email: '',
            mobile: '',
            dob: '',
            password: '',
            confirmPassword: '',
         })
      }
   };



   const validateForm = () => {
      let isValid = true;
      let errors = {};

      const isValidEmail = (email) => {
         const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

         return regex.test(email);
      };

      const isValidMobile = (mobile) => {
         const regex = /^[0-9]{10}$/;
         return regex.test(mobile);
      };

      const isValidPassword = (password) => {
         const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
         return regex.test(password);
      };

      // 1. Validate email
      if (formData.email === '') {
         errors.email = 'Email is required';
         isValid = false;
      } else if (!isValidEmail(formData.email)) {
         errors.email = 'Invalid email address';
         isValid = false;
      }

      // 2. Validate mobile
      if (formData.mobile === '') {
         errors.mobile = 'Mobile is required';
         isValid = false;
      } else if (!isValidMobile(formData.mobile)) {
         errors.mobile = 'Invalid Mobile Number.';
         isValid = false;
      }

      // 3. Validate dob
      if (formData.dob === '') {
         errors.dob = 'DOB is required';
         isValid = false;
      }

      // 4. Validate password
      if (formData.password === '') {
         errors.password = 'Password is required';
         isValid = false;
      } else if (!isValidPassword(formData.password)) {
         errors.confirmPassword = 'Password is invalid.';
         isValid = false;
      }

      // 5. Validate confirm password
      if (formData.confirmPassword === '') {
         errors.confirmPassword = 'Confirm Password is required';
         isValid = false;
      } else if (formData.password !== formData.confirmPassword) {
         errors.confirmPassword = 'Passwords do not match';
         isValid = false;
      }

      setErrors(errors);
      return isValid;
   };




   return (

      <div className='page-section small-page '>
         <div className='page-body'>
            <div className="panel">
               <div className="panel-header">Create Your Account</div>
               <div className="panel-body">
                  <div className="row">

                     <div className="col-12">
                        <div className='form-group'>
                           <label className='control-label'>Email</label>
                           <input type="text" value={formData.email} className='form-control' name='email' onChange={handleChange} />
                           {errors.email && <div className="control-error">{errors.email}</div>}
                        </div>
                     </div>

                     <div className="col-12">
                        <div className='form-group'>
                           <label className='control-label'>Mobile</label>
                           <input type="text" value={formData.mobile} className='form-control' name='mobile' onChange={handleChange} />
                           {errors.mobile && <div className="control-error">{errors.mobile}</div>}
                        </div>
                     </div>
                     <div className="col-12">
                        <div className='form-group'>
                           <label className='control-label'>Date of Birth</label>
                           <DatePicker dateFormat="dd/MM/yyyy" selected={formData.dob} popperModifiers={[
                              {
                                 name: 'arrow',
                                 options: {
                                    padding: ({ popper }) => ({
                                       right: popper.width - 32,
                                    }),
                                 },
                              }
                           ]} onChange={(date) => { setFormData({ ...formData, ['dob']: date }) }} className='form-control' />
                           {errors.dob && <div className="control-error">{errors.dob}</div>}
                        </div>
                     </div>

                     <div className="col-12">
                        <div className='form-group'>
                           <label className='control-label'>Password</label>
                           <input type="password" value={formData.password} className='form-control' name='password' onChange={handleChange} />
                           {errors.password && <div className="control-error">{errors.password}</div>}
                           <ul className='password-rules'>
                              <li><i className="far fa-check"></i><span>At least 8 characters long</span></li>
                              <li><i className="far fa-check"></i><span>Contains at least one lowercase letter</span></li>
                              <li><i className="far fa-check"></i><span>Contains at least one uppercase letter</span></li>
                              <li><i className="far fa-check"></i><span>Contains at least one numeric digit</span></li>
                              <li><i className="far fa-check"></i><span>Contains at least one special character from <strong>@$!%*?&</strong></span></li>
                           </ul>
                        </div>
                     </div>
                     <div className="col-12">
                        <div className='form-group'>
                           <label className='control-label'>Confirm Password</label>
                           <input type="password" value={formData.confirmPassword} className='form-control' name='confirmPassword' onChange={handleChange} />
                           {errors.confirmPassword && <div className="control-error">{errors.confirmPassword}</div>}
                        </div>
                     </div>

                  </div>
               </div>
               <div className="panel-footer">
                  <button onClick={handleSubmit} type="button" className='btn btn-primary btn-block'>Register</button>
               </div>
            </div>
         </div>
      </div>

   )
}


export default Register