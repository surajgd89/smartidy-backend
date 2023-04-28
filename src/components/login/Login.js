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
      <div>
         <h2>Login</h2>
         <div>
            <form onSubmit={handleSubmit}>
               <div>
                  <label>
                     Email:
                  </label>
                  <input type="text" value={email} onChange={handleEmailChange} />
                  {errors.email && <div className="error">{errors.email}</div>}
               </div>

               <div>
                  <label>
                     Password:
                  </label>
                  <input type="password" value={password} onChange={handlePasswordChange} />
                  {errors.password && <div className="error">{errors.password}</div>}
               </div>
               <div>
                  <Link to="/forgotpassword">Forgot Password</Link>
               </div>
               <button type="submit">Login</button>
            </form>
         </div>
      </div>
   );
}

export default Login;
