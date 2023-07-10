import { Link } from 'react-router-dom';
import './Login.scss'
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logInUser } from '../../features/idyUser/logInUserSlice';

function Login({ logIn }) {
   const islogInUser = useSelector(state => state.logInUser.data);
   const dispatch = useDispatch();

   const navigate = useNavigate();
   const [formData, setFormData] = useState({ email: '', password: '' });
   const [errors, setErrors] = useState({});

   const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
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

      //Match User
      if (!islogInUser && formData.password !== '' && formData.email !== '') {
         errors.isUser = 'Incorrect email or password';
         isValid = false;
      }

      setErrors(errors);
      return isValid;
   };

   const handleSubmit = () => {

      if (validateForm()) {
         dispatch(logInUser(formData));
         logIn();
         setFormData({ email: '', password: '' });
         navigate('/create');
      }
   };



   return (
      <div className='page-section small-page'>
         <div className='page-body'>
            <div className="panel">
               <div className="panel-header">Login to Your Account</div>

               <div className="panel-body">
                  {errors.isUser && <div className="panel-error">{errors.isUser}</div>}
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
                  <Link to="/forgot-password" className='link'>Forgot Password</Link>
               </div>
            </div>
            <div className='page-link'>Don't have an account ? <Link to="/register" className='link'>Register</Link></div>
         </div>
      </div >
   );
}

export default Login;
