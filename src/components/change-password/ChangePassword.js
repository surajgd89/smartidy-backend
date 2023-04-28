
import { useState } from 'react';

function ChangePassword() {
   const [oldPassword, setOldPassword] = useState('');
   const [newPassword, setNewPassword] = useState('');
   const [confirmNewPassword, setConfirmNewPassword] = useState('');
   const [errors, setErrors] = useState({});

   const handleOldPassword = (event) => {
      setOldPassword(event.target.value);
   };

   const handleNewPassword = (event) => {
      setNewPassword(event.target.value);
   };

   const handleConfirmNewPassword = (event) => {
      setConfirmNewPassword(event.target.value);
   };

   const handleSubmit = (event) => {
      event.preventDefault();
      const errors = {};
      console.log(`Old Password: ${oldPassword}, New Password: ${newPassword}, Confirm New Password: ${confirmNewPassword} `);

      if (!oldPassword) {
         errors.oldPassword = 'Old Password is required';
      }

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
         <h2>
            Change Password
         </h2>
         <div>
            <form onSubmit={handleSubmit}>
               <div>
                  <label>
                     Old Password:
                  </label>
                  <input type="password" value={oldPassword} onChange={handleOldPassword} />
                  {errors.oldPassword && <div className="error">{errors.oldPassword}</div>}
               </div>

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
   );
}

export default ChangePassword;