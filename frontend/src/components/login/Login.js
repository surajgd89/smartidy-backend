import { Link } from 'react-router-dom';
import './Login.scss'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { updateUser } from '../../features/user/userSlice';
import bcrypt from "bcryptjs";

function Login() {

   const userData = useSelector((state) => state.idyUser.data);
   const dispatch = useDispatch();
   const navigate = useNavigate();
   const [formData, setFormData] = useState({ email: '', password: '' });
   const [errors, setErrors] = useState({});
   const [userUpdate, setUserUpdate] = useState({});


   const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
   };



   const handleSubmit = (e) => {
      e.preventDefault();

      if (validateForm()) {
         // const isMatch = bcrypt.compareSync(password, user.password);
         setFormData({ email: '', password: '' })
         const updateData = { ...userUpdate, "isLoggedIn": true }
         dispatch(updateUser(updateData));
         navigate('/create');
      }
   };

   const validateForm = () => {
      let isValid = true;
      let errors = {};


      const isValidEmail = (testcase) => {
         const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
         return regex.test(testcase);
      };



      //  Validate email
      if (formData.email === '') {
         errors.email = 'Email is required';
         isValid = false;
      } else if (!isValidEmail(formData.email)) {
         errors.email = 'Invalid email address';
         isValid = false;
      }

      //  Validate password
      if (formData.password === '') {
         errors.password = 'Password is required';
         isValid = false;
      }



      setErrors(errors);
      return isValid;
   };



   return (
      <div className='page-section small-page'>

         <div className='page-body'>

            <div className="panel">
               <div className="panel-header">Login to Your Account</div>

               <div className="panel-body">

                  <div className="row">
                     <div className="col-12">
                        <div className='form-group'>
                           <label className='control-label'>Email</label>
                           <input type="text" value={formData.email} name='email' onChange={handleChange} className='form-control' />
                           {errors.email && <div className="control-error">{errors.email}</div>}
                        </div>
                     </div>
                     <div className="col-12">
                        <div className='form-group'>
                           <label className='control-label'>Password</label>
                           <input type="password" value={formData.password} name='password' onChange={handleChange} className='form-control' />
                           {errors.password && <div className="control-error">{errors.password}</div>}
                        </div>
                     </div>
                  </div>

               </div>
               <div className="panel-footer">
                  <button type="button" onClick={handleSubmit} className='btn btn-primary btn-block'>Login</button>
                  <Link to="/forgotpassword" className='link'>Forgot Password</Link>
               </div>
            </div>
         </div>

      </div >
   );
}

export default Login;
