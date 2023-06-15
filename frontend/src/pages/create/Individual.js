import axios from 'axios';
import { useState } from 'react';

function Individual() {

   //Individual=============================================
   const [errors, setErrors] = useState({});
   const [name, setName] = useState('');
   const [experties, setExperties] = useState('');
   const [call, setCall] = useState('');
   const [email, setEmail] = useState('');
   const [sms, setSms] = useState('');

   const handleChangeName = (event) => {
      setName(event.target.value);
   };
   const handleChangeExperties = (event) => {
      setExperties(event.target.value);
   };
   const handleChangeCall = (event) => {
      setCall(event.target.value);
   };
   const handleChangeEmail = (event) => {
      setEmail(event.target.value);
   };
   const handleChangeSms = (event) => {
      setSms(event.target.value);
   };
   const handleClickIndividual = (event) => {
      event.preventDefault();
      const errors = {};

      if (!name) {
         errors.name = 'Name is required';
      }

      if (!experties) {
         errors.experties = 'Experties is required';
      }

      if (!call) {
         errors.call = 'Call is required';
      }

      if (!email) {
         errors.email = 'Email is required';
      }

      if (!sms) {
         errors.sms = 'Sms is required';
      }

      setErrors(errors);

      if (Object.keys(errors).length === 0) {
         // Submit the form

         axios.post('http://localhost:3000/users', {
            "individual": {
               "name": name,
               "experties": experties,
               "call": call,
               "email": email,
               "sms": sms,
            }
         }).then(response => {
            setName('');
            setExperties('');
            setCall('');
            setEmail('');
            setSms('');
         }).catch(error => {
            console.log(error.response.data);
         });
      }
   };

   return (
      <div className="panel">
         <div className="panel-header">Individual Information</div>
         <div className="panel-body">
            <div className="row">
               <div className="col-12">
                  <div className='values-grouping'>
                     <div className='form-group'>
                        <div className='heading' >Profile Picture</div>
                        <div className='add-values-sec'>
                           <div className='form-group'>
                              <label htmlFor="profilePic" className="drop-container">
                                 <span className="drop-title">Upload Profile Picture</span>
                                 <input type="file" id="profilePic" name='profilePic' accept="image/*" required />
                              </label>
                              <span className='control-error'>Error Message</span>
                           </div>
                           <div className="action">
                              <button type='button' className='btn btn-primary'><i className='fal fa-plus'></i> Upload Profile Picture</button>
                           </div>
                        </div>
                        <ul className='list-values-sec'>
                           <li>
                              <img src="https://fakeimg.pl/150x150/" alt="" className='profile-pic' />
                              <button type='button' title='Delete' className='btn btn-primary'><i className='fal fa-trash'></i></button>
                           </li>
                        </ul>
                     </div>
                  </div>
               </div>
               <div className="col-12">
                  <div className='form-group'>
                     <label className='control-label' >Name</label>
                     <input type="text" name='name' className='form-control' value={name} onChange={handleChangeName} />
                     {errors.name && <div className="control-error">{errors.name}</div>}
                  </div>
               </div>
               <div className="col-12">
                  <div className='form-group'>
                     <label className='control-label' >Experties</label>
                     <input type="text" name='experties' className='form-control' value={experties} onChange={handleChangeExperties} />
                     {errors.experties && <div className="control-error">{errors.experties}</div>}
                  </div>
               </div>
               <div className="col-12">
                  <div className='form-group'>
                     <label className='control-label' >Call</label>
                     <input type="tel" name='call' className='form-control' value={call} onChange={handleChangeCall} />
                     {errors.call && <div className="control-error">{errors.call}</div>}
                  </div>
               </div>
               <div className="col-12">
                  <div className='form-group'>
                     <label className='control-label' >Email</label>
                     <input type="email" name='email' className='form-control' value={email} onChange={handleChangeEmail} />
                     {errors.email && <div className="control-error">{errors.email}</div>}
                  </div>
               </div>
               <div className="col-12">
                  <div className='form-group'>
                     <label className='control-label' >SMS</label>
                     <input type="tel" name='sms' className='form-control' value={sms} onChange={handleChangeSms} />
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
                              <span className='control-error'>Error Message</span>
                           </div>
                           <div className='form-group'>
                              <label className='control-label' >Telegram ID / WhatsApp Number</label>
                              <input type='text' name="value" className='form-control' />
                              <span className='control-error'>Error Message</span>
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
            <button type="reset" className='btn btn-secondary'>Reset</button>
            <button type="submit" className='btn btn-primary' onClick={handleClickIndividual}>Save & Proceed </button>
         </div>
      </div>
   )
}

export default Individual