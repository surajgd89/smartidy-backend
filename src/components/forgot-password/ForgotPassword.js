
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


      <div className='page-section small-page'>
         <div className='page-body'>
            <div className="panel">
               <div className="panel-header"> Forgot Password</div>
               <div className="panel-body">
                  <div className="row">
                     <div className="col-12">
                        <div className="form-group">
                           <label className="control-label">Email</label>
                           <input type="text" value={email} className="form-control" onChange={handleEmailChange} />
                           {errors.email && <div className="control-error">{errors.email}</div>}
                        </div>
                     </div>
                  </div>
               </div>
               <div className="panel-footer">
                  <button onSubmit={handleSubmit} type="submit" className='btn btn-block'>Reset Password</button>
               </div>
            </div>
         </div>
      </div>



   )
}
export default ForgotPassword;