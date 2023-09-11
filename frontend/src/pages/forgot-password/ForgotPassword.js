import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { registerRequest } from '../../features/idyUser/registerSlice';
import { resetPassword } from '../../features/idyUser/resetPasswordSlice';
import './ForgotPassword.scss'

function ForgotPassword() {
   const isRegistredUser = useSelector(state => state.registerRequest.data);
   const isResetPassword = useSelector(state => state.resetPassword.data);
   const dispatch = useDispatch()
   const navigate = useNavigate();
   const [formData, setFormData] = useState({ email: '' });
   const [errors, setErrors] = useState({});
   const notify_linkSend = () => toast.success('We have e-mailed your reset password link !');

   const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
   };

   const isValidEmail = (testcase) => {
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return regex.test(testcase);
   };

   const validateForm = () => {
      let isValid = true;
      let errors = {};
      //  Validate email
      if (formData.email === '') {
         errors.email = 'Email is required';
         isValid = false;
      } else if (!isValidEmail(formData.email)) {
         errors.email = 'Invalid email address';
         isValid = false;
      } else if (!isRegistredUser.success) {
         errors.email = isRegistredUser.message;
         isValid = false;
      }

      setErrors(errors);
      return isValid;
   };

   const handleSubmit = (e) => {
      e.preventDefault();
      if (validateForm()) {
         dispatch(resetPassword({ "email": formData.email }));
         setFormData({ email: '' });
         notify_linkSend();
      }
   }

   useEffect(() => {
      if (isValidEmail(formData.email)) {
         dispatch(registerRequest(`?individual.email=${formData.email}`));
      }
   }, [formData])

   useEffect(() => {
      if (isResetPassword.success === true) {
         navigate('/login')
      }
   }, [dispatch, isResetPassword])

   return (
      <form onSubmit={handleSubmit}>
         <div className='page-section small-page '>
            <div className='page-body'>
               <div className="panel">
                  <div className="panel-header"> Forgot Password</div>
                  <div className="panel-body">
                     <div className="row">

                        <div className="col-12">
                           <div className='form-group'>
                              <label className='control-label'>Email</label>
                              <input type="text" value={formData.email} className='form-control' name='email' onChange={handleChange} />
                              {errors.email && <div className="control-error">{errors.email}</div>}
                           </div>
                        </div>

                     </div>
                  </div>
                  <div className="panel-footer">
                     <button type="submit" className='btn btn-primary btn-block'>Reset Password</button>
                     <Link to="/login" className='link'>Back to Login</Link>
                  </div>
               </div>
            </div>
         </div>
      </form>
   )
}

export default ForgotPassword;