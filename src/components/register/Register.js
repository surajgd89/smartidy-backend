
import { useState } from 'react';
import './Register.scss'
import axios from 'axios';

function Register() {
   const [name, setName] = useState('');
   const [email, setEmail] = useState('');
   const [mobile, setMobile] = useState('');
   const [dob, setDob] = useState('');
   const [password, setPassword] = useState('');
   const [confirmPassword, setConfirmPassword] = useState('');

   const [errors, setErrors] = useState({});


   function handleNameChange(event) {
      setName(event.target.value);
   }

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
         'name': name,
         'email': email,
         'mobile': mobile,
         'dob': dob,
         'password': password,
      })


      if (!name) {
         errors.email = 'Name is required';
      }

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
            name: name,
            email: email,
            mobile: mobile,
            dob: dob,
            password: password,
         })
            .then(response => {
               console.log(response.data);
               setName('')
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
      <div>
         <h2>Register</h2>
         <div>
            <form onSubmit={handleSubmit} id='registerForm'>
               <div>
                  <label>Name:</label>
                  <input type="text" value={name} onChange={handleNameChange} />
                  {errors.name && <div className="error">{errors.name}</div>}
               </div>
               <div>
                  <label>Email:</label>
                  <input type="email" value={email} onChange={handleEmailChange} />
                  {errors.email && <div className="error">{errors.email}</div>}
               </div>

               <div>
                  <label>Mobile:</label>
                  <input type="tel" value={mobile} onChange={handleMobileChange} />
                  {errors.mobile && <div className="error">{errors.mobile}</div>}
               </div>

               <div>
                  <label>Date of Birth:</label>
                  <input type="date" value={dob} onChange={handleDobChange} />
                  {errors.dob && <div className="error">{errors.dob}</div>}
               </div>

               <div>
                  <label>Password:</label>
                  <input type="password" value={password} onChange={handlePasswordChange} />
                  {errors.password && <div className="error">{errors.password}</div>}
               </div>

               <div>
                  <label>Confirm Password:</label>
                  <input type="password" value={confirmPassword} onChange={handleConfirmPasswordChange} />
                  {errors.confirmPassword && <div className="error">{errors.confirmPassword}</div>}
               </div>

               <button type="submit">Register</button>
            </form>
         </div>
      </div>
   )
}




export default Register