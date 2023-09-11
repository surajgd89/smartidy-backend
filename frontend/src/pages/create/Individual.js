import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

function Individual({ nextStep, setIndividualStep }) {
   const user = useSelector(state => state.idyUser.data);
   const { individual } = user;

   //Individual=============================================
   const [errors, setErrors] = useState({});
   const [profilePic, setProfilePic] = useState('');
   const [name, setName] = useState('');
   const [experties, setExperties] = useState('');
   const [call, setCall] = useState('');
   const [email, setEmail] = useState('');
   const [sms, setSms] = useState('');


   const handleChange_ProfilePic = (e) => {
      setProfilePic(e.target.files[0]);
   };
   const handleChange_Name = (e) => {
      setName(e.target.value);
   };
   const handleChange_Experties = (e) => {
      setExperties(e.target.value);
   };
   const handleChange_Call = (e) => {
      setCall(e.target.value);
   };
   const handleChange_Email = (e) => {
      setEmail(e.target.value);
   };
   const handleChange_Sms = (e) => {
      setSms(e.target.value);
   };

   console.log(profilePic)

   const validateForm = () => {
      let isValid = true;
      let errors = {};

      if (profilePic === "" || experties === undefined) {
         errors.profilePic = 'Profile Picture is required';
         isValid = false;
      }

      if (name === "" || experties === undefined) {
         errors.name = 'Name is required';
         isValid = false;
      }

      if (experties === "" || experties === undefined) {
         errors.experties = 'Experties is required';
         isValid = false;
      }

      if (call === "" || experties === undefined) {
         errors.call = 'Call is required';
         isValid = false;
      }

      if (email === "" || experties === undefined) {
         errors.email = 'Email is required';
         isValid = false;
      }

      if (sms === "" || experties === undefined) {
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

         const individual_data = {
            "individual": {
               "profilePic": profilePic,
               "name": name,
               "experties": experties,
               "call": call,
               "email": email,
               "sms": sms,
            }
         }

         console.log(individual_data);

      }
   };

   useEffect(() => {
      if (individual) {
         setProfilePic(individual.profilePic);
         setName(individual.name);
         setExperties(individual.experties);
         setCall(individual.call);
         setEmail(individual.email);
         setSms(individual.sms);
      }
   }, [individual]);

   return (
      <form onSubmit={handleSubmit} encType="multipart/form-data">
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
                                    <input type="file" name='profilePic' onChange={handleChange_ProfilePic} accept="image/*" />
                                 </label>
                                 {errors.profilePic && <div className="control-error">{errors.profilePic}</div>}
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
                        <input type="text" name='name' className='form-control' value={name} onChange={handleChange_Name} />
                        {errors.name && <div className="control-error">{errors.name}</div>}
                     </div>
                  </div>
                  <div className="col-12">
                     <div className='form-group'>
                        <label className='control-label' >Experties</label>
                        <input type="text" name='experties' className='form-control' value={experties} onChange={handleChange_Experties} />
                        {errors.experties && <div className="control-error">{errors.experties}</div>}
                     </div>
                  </div>
                  <div className="col-12">
                     <div className='form-group'>
                        <label className='control-label' >Call</label>
                        <input type="tel" name='call' className='form-control' value={call} onChange={handleChange_Call} />
                        {errors.call && <div className="control-error">{errors.call}</div>}
                     </div>
                  </div>
                  <div className="col-12">
                     <div className='form-group'>
                        <label className='control-label' >Email</label>
                        <input type="email" name='email' className='form-control' value={email} onChange={handleChange_Email} disabled />
                        {errors.email && <div className="control-error">{errors.email}</div>}
                     </div>
                  </div>
                  <div className="col-12">
                     <div className='form-group'>
                        <label className='control-label' >SMS</label>
                        <input type="tel" name='sms' className='form-control' value={sms} onChange={handleChange_Sms} />
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
                              {/* <li>
                              <span className='title'>WhatsApp</span>:<span className='value'>9594415153</span>
                              <button type='button' title='Delete' className='btn btn-primary'><i className='fal fa-trash'></i></button>
                           </li>
                           <li>
                              <span className='title'>Telegram</span>:<span className='value'>surajpatil@1989</span>
                              <button type='button' title='Delete' className='btn btn-primary'><i className='fal fa-trash'></i></button>
                           </li> */}
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
      </form>
   )
}

export default Individual