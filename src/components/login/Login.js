import { Link } from 'react-router-dom';
import './Login.scss'
import { useState } from 'react';

function Login() {

   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const [errors, setErrors] = useState({});

   const handleEmailChange = (event) => {
      setEmail(event.target.value);
   };

   const handlePasswordChange = (event) => {
      setPassword(event.target.value);
   };

   const handleSubmit = (event) => {
      event.preventDefault();
      const errors = {};
      console.log(`email: ${email}, Password: ${password}`);


      if (!email) {
         errors.email = 'Email is required';
      }

      if (!password) {
         errors.password = 'Password is required';
      }

      setErrors(errors);

      if (Object.keys(errors).length === 0) {
         // Submit the form
      }
   };

   return (
      <div className='form-section'>
         <h2 className='form-header'>Login to Your Account</h2>
         <div className='form-body'>
            <div className='form-group'>
               <label className='control-label'>Email</label>
               <input type="text" value={email} onChange={handleEmailChange} className='form-control' />
               {errors.email && <div className="control-error">{errors.email}</div>}
            </div>
            <div className='form-group'>
               <label className='control-label'>Password</label>
               <input type="password" value={password} onChange={handlePasswordChange} className='form-control' />
               {errors.password && <div className="control-error">{errors.password}</div>}
            </div>

         </div>
         <div className='form-footer'>
            <button type="submit" onClick={handleSubmit} className='btn btn-block'>Login</button>
            <Link to="/forgotpassword" className='link'>Forgot Password</Link>
         </div>
      </div >
   );
}

export default Login;
