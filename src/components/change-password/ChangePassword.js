
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

      <div className='page-section small-page'>

         <div className='page-body'>

            <div className="panel">
               <div className="panel-header"> Change Password</div>
               <div className="panel-body">
                  <div className="row">
                     <div className="col-12">
                        <div className='form-group'>
                           <label className='control-label'>
                              Old Password
                           </label>
                           <input type="password" value={oldPassword} className='form-control' onChange={handleOldPassword} />
                           {errors.oldPassword && <div className="control-error">{errors.oldPassword}</div>}
                        </div>
                     </div>
                     <div className="col-12">
                        <div className='form-group'>
                           <label className='control-label'>
                              New Password
                           </label>
                           <input type="password" value={newPassword} className='form-control' onChange={handleNewPassword} />
                           {errors.newPassword && <div className="control-error">{errors.newPassword}</div>}
                        </div>
                     </div>
                     <div className="col-12">
                        <div className='form-group'>
                           <label className='control-label'>
                              Confirm New Password
                           </label>
                           <input type="password" value={confirmNewPassword} className='form-control' onChange={handleConfirmNewPassword} />
                           {errors.confirmNewPassword && <div className="control-error">{errors.confirmNewPassword}</div>}
                        </div>
                     </div>
                  </div>
               </div>
               <div className="panel-footer">
                  <button type="submit" className='btn btn-block' onClick={handleSubmit}>Update Password</button>
               </div>
            </div>

         </div>

      </div>
   );
}

export default ChangePassword;