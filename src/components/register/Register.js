
import { useState } from 'react';
import './Register.scss'
import axios from 'axios';

function Register() {

   const [email, setEmail] = useState('');
   const [mobile, setMobile] = useState('');
   const [dob, setDob] = useState('');
   const [password, setPassword] = useState('');
   const [confirmPassword, setConfirmPassword] = useState('');

   const [errors, setErrors] = useState({});



   function handleEmailChange(event) {
      setEmail(event.target.value);
   }

   function handleMobileChange(event) {
      setMobile(event.target.value);
   }

   function handleMobileChange(event) {
      setMobile(event.target.value);
   }

   function handleDobChange(event) {
      setDob(event.target.value);
   }

   function handlePasswordChange(event) {
      setPassword(event.target.value);
   }

   function handleConfirmPasswordChange(event) {
      setConfirmPassword(event.target.value);
   }


   function handleSubmit(event) {
      event.preventDefault();
      const errors = {};

      setErrors(errors);

      console.log({

         'email': email,
         'mobile': mobile,
         'dob': dob,
         'password': password,
      })




      if (!email) {
         errors.email = 'Email is required';
      }

      if (!mobile) {
         errors.mobile = 'Mobile is required';
      }

      if (!dob) {
         errors.dob = 'DOB is required';
      }

      if (!password) {
         errors.password = 'Password is required';
      }

      if (!confirmPassword) {
         errors.confirmPassword = 'Confirm Password is required';
      }

      if (confirmPassword !== password) {
         errors.confirmPassword = 'Password Mismatch';
      }


      if (Object.keys(errors).length === 0) {
         // Submit the form

         axios.post('http://localhost:3000/register', {

            email: email,
            mobile: mobile,
            dob: dob,
            password: password,
         })
            .then(response => {
               console.log(response.data);

               setEmail('')
               setMobile('')
               setDob('')
               setPassword('')
               setConfirmPassword('')
            })
            .catch(error => {
               console.log(error.response.data);
            });
      }

   }

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
                           <input type="email" value={email} className='form-control' onChange={handleEmailChange} />
                           {errors.email && <div className="control-error">{errors.email}</div>}
                        </div>
                     </div>

                     <div className="col-12">
                        <div className='form-group'>
                           <label className='control-label'>Mobile</label>
                           <input type="tel" value={mobile} className='form-control' onChange={handleMobileChange} />
                           {errors.mobile && <div className="control-error">{errors.mobile}</div>}
                        </div>
                     </div>
                     <div className="col-12">
                        <div className='form-group'>
                           <label className='control-label'>Date of Birth</label>
                           <input type="date" value={dob} className='form-control' onChange={handleDobChange} />
                           {errors.dob && <div className="control-error">{errors.dob}</div>}
                        </div>
                     </div>

                     <div className="col-12">
                        <div className='form-group'>
                           <label className='control-label'>Password</label>
                           <input type="password" value={password} className='form-control' onChange={handlePasswordChange} />
                           {errors.password && <div className="control-error">{errors.password}</div>}
                        </div>
                     </div>
                     <div className="col-12">
                        <div className='form-group'>
                           <label className='control-label'>Confirm Password</label>
                           <input type="password" value={confirmPassword} className='form-control' onChange={handleConfirmPasswordChange} />
                           {errors.confirmPassword && <div className="control-error">{errors.confirmPassword}</div>}
                        </div>
                     </div>

                  </div>
               </div>
               <div className="panel-footer">
                  <button onClick={handleSubmit} type="submit" className='btn btn-block'>Register</button>
               </div>
            </div>




         </div>

      </div>
   )
}




export default Register