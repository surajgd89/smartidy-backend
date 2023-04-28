import { useState } from "react";

function ResetPassword() {

   const [newPassword, setNewPassword] = useState('');
   const [confirmNewPassword, setConfirmNewPassword] = useState('');
   const [errors, setErrors] = useState({});

   const handleNewPassword = (event) => {
      setNewPassword(event.target.value);
   };

   const handleConfirmNewPassword = (event) => {
      setConfirmNewPassword(event.target.value);
   };


   const handleSubmit = (event) => {
      event.preventDefault();
      const errors = {};
      console.log(`New Password: ${newPassword}, Confirm New Password: ${confirmNewPassword}`);

      if (!newPassword) {
         errors.newPassword = 'New Password is required';
      }

      if (!confirmNewPassword) {
         errors.confirmNewPassword = 'Confirm New Password is required';
      }

      setErrors(errors);

      if (Object.keys(errors).length === 0) {
         // Submit the form
      }
   };

   return (

      <div>
         <h2>Reset Password</h2>
         <div>
            <form onSubmit={handleSubmit}>

               <div>
                  <label>
                     New Password:
                  </label>
                  <input type="password" value={newPassword} onChange={handleNewPassword} />
                  {errors.newPassword && <div className="error">{errors.newPassword}</div>}
               </div>

               <div>
                  <label>
                     Confirm New Password:
                  </label>
                  <input type="password" value={confirmNewPassword} onChange={handleConfirmNewPassword} />
                  {errors.confirmNewPassword && <div className="error">{errors.confirmNewPassword}</div>}
               </div>

               <button type="submit">Update Password</button>
            </form>
         </div>

      </div>





   )
}
export default ResetPassword;