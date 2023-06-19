import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Register.scss'
import { useNavigate } from 'react-router-dom';
import bcrypt from "bcryptjs";
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from '../../features/user/userSlice';


function Register() {
   const dispatch = useDispatch();
   const userError = useSelector(state => state.idyUser.error);
   const navigate = useNavigate();

   const [formData, setFormData] = useState({ name: '', email: '', mobile: '', password: '', confirmPassword: '' });
   const [errors, setErrors] = useState({});

   const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
   };

   const handleSubmit = (e) => {
      e.preventDefault();


      if (validateForm()) {
         const hashedPassword = bcrypt.hashSync(formData.password, 10)

         const registerUser = {
            "password": hashedPassword,
            "individual": {
               "name": formData.name,
               "email": formData.email,
               "call": formData.mobile
            }
         }

         sessionStorage.setItem('registerUser', JSON.stringify(registerUser));


         setFormData({ name: '', email: '', mobile: '', password: '', confirmPassword: '' })
         navigate('/otp');
      }
   };

   const validateForm = () => {
      let isValid = true;
      let errors = {};

      const isValidEmail = (testcase) => {
         const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
         return regex.test(testcase);
      };

      const isValidMobile = (testcase) => {
         const regex = /^[0-9]{10}$/;
         return regex.test(testcase);
      };

      const isValidPassword = (testcase) => {
         const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
         return regex.test(testcase);
      };



      //  Validate name
      if (formData.name === '') {
         errors.name = 'Name is required';
         isValid = false;
      }

      //  Validate email
      if (formData.email === '') {
         errors.email = 'Email is required';
         isValid = false;
      } else if (!isValidEmail(formData.email)) {
         errors.email = 'Invalid email address';
         isValid = false;
      } else if (userError != '') {
         errors.email = 'Email Already Registred.';
         isValid = false;
      }

      //  Validate mobile
      if (formData.mobile === '') {
         errors.mobile = 'Mobile is required';
         isValid = false;
      } else if (!isValidMobile(formData.mobile)) {
         errors.mobile = 'Invalid Mobile Number.';
         isValid = false;
      }

      //  Validate password
      if (formData.password === '') {
         errors.password = 'Password is required';
         isValid = false;
      } else if (!isValidPassword(formData.password)) {
         errors.password = 'Password is invalid.';
         isValid = false;
      }

      //  Validate confirm password
      if (formData.confirmPassword === '') {
         errors.confirmPassword = 'Confirm Password is required';
         isValid = false;
      } else if (formData.password !== formData.confirmPassword) {
         errors.confirmPassword = 'Passwords do not match';
         isValid = false;
      }

      setErrors(errors);
      return isValid;
   };

   useEffect(() => {
      dispatch(getUser());
   }, [dispatch]);


   return (
      <div className='page-section small-page '>
         <div className='page-body'>
            <div className="panel">
               <div className="panel-header">Create Your Account</div>
               <div className="panel-body">
                  <div className="row">

                     <div className="col-12">
                        <div className='form-group'>
                           <label className='control-label'>Name</label>
                           <input type="text" value={formData.name} className='form-control' name='name' onChange={handleChange} />
                           {errors.name && <div className="control-error">{errors.name}</div>}
                        </div>
                     </div>

                     <div className="col-12">
                        <div className='form-group'>
                           <label className='control-label'>Email</label>
                           <input type="text" value={formData.email} className='form-control' name='email' onChange={handleChange} />
                           {errors.email && <div className="control-error">{errors.email}</div>}

                        </div>
                     </div>

                     <div className="col-12">
                        <div className='form-group'>
                           <label className='control-label'>Mobile</label>
                           <input type="text" value={formData.mobile} className='form-control' name='mobile' onChange={handleChange} />
                           {errors.mobile && <div className="control-error">{errors.mobile}</div>}
                        </div>
                     </div>

                     <div className="col-12">
                        <div className='form-group'>
                           <label className='control-label'>Password</label>
                           <input type="password" className='form-control' value={formData.password} name='password' onChange={handleChange} />
                           {errors.password && <div className="control-error">{errors.password}</div>}
                           <ul className='password-rules'>
                              <li><i className="far fa-check"></i><span>At least 8 characters long</span></li>
                              <li><i className="far fa-check"></i><span>Contains at least one lowercase letter</span></li>
                              <li><i className="far fa-check"></i><span>Contains at least one uppercase letter</span></li>
                              <li><i className="far fa-check"></i><span>Contains at least one numeric digit</span></li>
                              <li><i className="far fa-check"></i><span>Contains at least one special character from <strong>@$!%*?&</strong></span></li>
                           </ul>
                        </div>
                     </div>
                     <div className="col-12">
                        <div className='form-group'>
                           <label className='control-label'>Confirm Password</label>
                           <input type="password" className='form-control' value={formData.confirmPassword} name='confirmPassword' onChange={handleChange} />
                           {errors.confirmPassword && <div className="control-error">{errors.confirmPassword}</div>}
                        </div>
                     </div>

                  </div>
               </div>
               <div className="panel-footer">
                  <button onClick={handleSubmit} type="button" className='btn btn-primary btn-block'>Register</button>
               </div>

            </div>
            <div className='page-link'>Already have an account ? <Link to="/login" className='link'>Login</Link></div>
         </div>

      </div>
   )
}
export default Register;

