
import { useState } from "react";

function ForgotPassword() {

   const [email, setEmail] = useState('');
   const [errors, setErrors] = useState({});

   const handleEmailChange = (event) => {
      setEmail(event.target.value);
   };

   const handleSubmit = (event) => {
      event.preventDefault();
      const errors = {};
      console.log(`Email: ${email}`);

      if (!email) {
         errors.email = 'Email is required';
      } else if (!/\S+@\S+\.\S+/.test(email)) {
         errors.email = 'Email is invalid';
      }

      setErrors(errors);

      if (Object.keys(errors).length === 0) {
         // Submit the form
      }
   };

   return (

      <div>
         <h2>Forgot Password</h2>
         <div>
            <form onSubmit={handleSubmit}>
               <div>
                  Please enter your registred email. We will send you a link to reset your password.
               </div>
               <div>
                  <label>
                     Email:
                  </label>
                  <input type="text" value={email} onChange={handleEmailChange} />
                  {errors.email && <div className="error">{errors.email}</div>}
               </div>
               <button type="submit">Reset Password</button>
            </form>
         </div>
      </div>

   )
}
export default ForgotPassword;