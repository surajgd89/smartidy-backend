import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateUser } from '../../features/idyUser/userSlice';

function Individual({ nextStep, setIndividualStep }) {
   const user = useSelector(state => state.idyUser.data);
   const { individual } = user;
   const dispatch = useDispatch();

   const [formData, setFormData] = useState({});
   const [errors, setErrors] = useState({});

   const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });

   };

   const handleFileChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.files[0] });
   };

   const validateForm = () => {
      let isValid = true;
      let errors = {};

      if (formData.profilePic === "" || formData.profilePic === undefined) {
         errors.profilePic = 'Profile Picture is required';
         isValid = false;
      }

      if (formData.name === "" || formData.name === undefined) {
         errors.name = 'Name is required';
         isValid = false;
      }

      if (formData.experties === "" || formData.experties === undefined) {
         errors.experties = 'Experties is required';
         isValid = false;
      }

      if (formData.call === "" || formData.call === undefined) {
         errors.call = 'Call is required';
         isValid = false;
      }

      if (formData.email === "" || formData.email === undefined) {
         errors.email = 'Email is required';
         isValid = false;
      }

      if (formData.sms === "" || formData.sms === undefined) {
         errors.sms = 'Sms is required';
         isValid = false;
      }

      setErrors(errors);
      return isValid;
   };

   const handleSubmit = (e) => {
      e.preventDefault();
      if (validateForm()) {
         nextStep()
         setIndividualStep(true);
         const updateData = { ...user, "individual": { ...formData } }
         console.log(updateData)
         dispatch(updateUser(updateData));
      }
   };

   useEffect(() => {
      if (individual) {
         setFormData({ ...individual });
      }
   }, [individual]);

   return (
      <form onSubmit={handleSubmit}>
         <div className="panel step step-1">
            <div className="panel-header">Individual Information</div>
            <div className="panel-body">
               <div className="row">
                  <div className="col-12">
                     <div className='values-grouping'>
                        <div className='form-group'>
                           <div className='heading' >Profile Picture</div>
                           <div className='add-values-sec'>
                              <div className='form-group'>
                                 <label className="drop-container">
                                    <span className="drop-title">Upload Profile Picture</span>
                                    <input type="file" name='profilePic' onChange={handleFileChange} accept=".png,.jpg,.jpeg" />
                                 </label>
                                 {errors.profilePic && <div className="control-error">{errors.profilePic}</div>}
                              </div>
                           </div>
                           <ul className='list-values-sec'>
                              <li>
                                 <img src={formData.profilePic !== "" ? URL.createObjectURL(formData.profilePic) : "https://fakeimg.pl/150x150/"} alt="" className='profile-pic' />
                                 <button type='button' title='Delete' className='btn btn-primary'><i className='fal fa-trash'></i></button>
                              </li>
                           </ul>
                        </div>
                     </div>
                  </div>
                  <div className="col-12">
                     <div className='form-group'>
                        <label className='control-label' >Name</label>
                        <input type="text" name='name' className='form-control' defaultValue={formData.name} onChange={handleChange} />
                        {errors.name && <div className="control-error">{errors.name}</div>}
                     </div>
                  </div>
                  <div className="col-12">
                     <div className='form-group'>
                        <label className='control-label' >Experties</label>
                        <input type="text" name='experties' className='form-control' defaultValue={formData.experties} onChange={handleChange} />
                        {errors.experties && <div className="control-error">{errors.experties}</div>}
                     </div>
                  </div>
                  <div className="col-12">
                     <div className='form-group'>
                        <label className='control-label' >Call</label>
                        <input type="tel" name='call' className='form-control' defaultValue={formData.call} onChange={handleChange} />
                        {errors.call && <div className="control-error">{errors.call}</div>}
                     </div>
                  </div>
                  <div className="col-12">
                     <div className='form-group'>
                        <label className='control-label' >Email</label>
                        <input type="email" name='email' className='form-control' defaultValue={formData.email} onChange={handleChange} disabled />
                        {errors.email && <div className="control-error">{errors.email}</div>}
                     </div>
                  </div>
                  <div className="col-12">
                     <div className='form-group'>
                        <label className='control-label' >SMS</label>
                        <input type="tel" name='sms' className='form-control' defaultValue={formData.sms} onChange={handleChange} />
                        {errors.sms && <div className="control-error">{errors.sms}</div>}
                     </div>
                  </div>
                  <div className="col-12">
                     <div className='values-grouping'>
                        <div className='form-group'>
                           <div className='heading' >Chat</div>
                           <div className='add-values-sec'>
                              <div className='form-group'>
                                 <label className='control-label' >Network</label>
                                 <select name="title" className='form-control'>
                                    <option value="whatsapp">WhatsApp</option>
                                    <option value="telegram">Telegram</option>
                                 </select>
                                 <span className='control-error'></span>
                              </div>
                              <div className='form-group'>
                                 <label className='control-label' >Telegram ID / WhatsApp Number</label>
                                 <input type='text' name="value" className='form-control' />
                                 <span className='control-error'></span>
                              </div>
                              <div className="action">
                                 <button type='button' className='btn btn-primary'><i className='fal fa-plus'></i> Add Chat</button>
                              </div>
                           </div>
                           <ul className='list-values-sec'>
                              <li>
                                 <span className='title'>WhatsApp</span>:<span className='value'>9594415153</span>
                                 <button type='button' title='Delete' className='btn btn-primary'><i className='fal fa-trash'></i></button>
                              </li>
                              <li>
                                 <span className='title'>Telegram</span>:<span className='value'>surajpatil@1989</span>
                                 <button type='button' title='Delete' className='btn btn-primary'><i className='fal fa-trash'></i></button>
                              </li>
                           </ul>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div className="panel-footer">
               <button type="submit" className='btn btn-primary'>Save & Proceed </button>
            </div>
         </div>
      </form >
   )
}

export default Individual