
import { useState } from 'react';
import { TwitterPicker } from 'react-color';
import DatePicker from "react-datepicker";
import axios from 'axios';
import "react-datepicker/dist/react-datepicker.css";
import './Create.scss'

function Create() {

   //Individual=============================================
   const [iErrors, set_iErrors] = useState({});
   const [iName, set_iName] = useState('');
   const [iExperties, set_iExperties] = useState('');
   const [iCall, set_iCall] = useState('');
   const [iEmail, set_iEmail] = useState('');
   const [iSms, set_iSms] = useState('');

   const handleChange_iName = (event) => {
      set_iName(event.target.value);
   };
   const handleChange_iExperties = (event) => {
      set_iExperties(event.target.value);
   };
   const handleChange_iCall = (event) => {
      set_iCall(event.target.value);
   };
   const handleChange_iEmail = (event) => {
      set_iEmail(event.target.value);
   };
   const handleChange_iSms = (event) => {
      set_iSms(event.target.value);
   };
   const handleClick_Individual = (event) => {
      event.preventDefault();
      const iErrors = {};

      if (!iName) {
         iErrors.iName = 'Name is required';
      }

      if (!iExperties) {
         iErrors.iExperties = 'Experties is required';
      }

      if (!iCall) {
         iErrors.iCall = 'Call is required';
      }

      if (!iEmail) {
         iErrors.iEmail = 'Email is required';
      }

      if (!iSms) {
         iErrors.iSms = 'Sms is required';
      }

      set_iErrors(iErrors);

      if (Object.keys(iErrors).length === 0) {
         // Submit the form

         axios.post('http://localhost:3000/users', {
            "individual": {
               "name": iName,
               "experties": iExperties,
               "call": iCall,
               "email": iEmail,
               "sms": iSms,
            }
         }).then(response => {
            set_iName('');
            set_iExperties('');
            set_iCall('');
            set_iEmail('');
            set_iSms('');
         }).catch(error => {
            console.log(error.response.data);
         });
      }
   };


   //Business=============================================
   const [bErrors, set_bErrors] = useState({});
   const [establishedDate, setEstablishedDate] = useState(new Date());
   const [openAtTime, setOpenAtTime] = useState();
   const [closeAtTime, setCloseAtTime] = useState();
   //Configuration=============================================
   const [cErrors, set_cErrors] = useState({});
   const [cPrimaryColor, set_cPrimaryColor] = useState('#ff6600');
   const [cTitleColor, set_cTitleColor] = useState('#411f85');

   const handlePrimaryColorChange = (color, event) => {
      set_cPrimaryColor(color.hex)
   }
   const handleTitleColorChange = (color, event) => {
      set_cTitleColor(color.hex)
   }

   const handleClick_Configuration = (event) => {
      event.preventDefault();
      const cErrors = {};



      if (!cPrimaryColor) {
         cErrors.cPrimaryColor = 'Primary Color is required';
      }

      if (!cTitleColor) {
         cErrors.cTitleColor = 'Title Color is required';
      }


      set_iErrors(cErrors);

      if (Object.keys(iErrors).length === 0) {
         // Submit the form

         axios.post('http://localhost:3000/users', {
            "individual": {
               "name": iName,
               "experties": iExperties,
               "call": iCall,
               "email": iEmail,
               "sms": iSms,
            }
         }).then(response => {
            set_iName('');
            set_iExperties('');
            set_iCall('');
            set_iEmail('');
            set_iSms('');
         }).catch(error => {
            console.log(error.response.data);
         });
      }
   };


   return (
      <div className='page-section small-page '>
         <h2 className='page-header'>Create SmartIDy</h2>
         <div className='page-body'>

            <div className='form-statusbar'>
               <div className="progress">
                  <span className='bar'>
                     <span>1</span>
                  </span>
                  <span className='title'>Individual</span>
               </div>
               <div className="progress">
                  <span className='bar'>
                     <span>2</span>
                  </span>
                  <span className='title'>Business</span>
               </div>
               <div className="progress">
                  <span className='bar'>
                     <span>3</span>
                  </span>
                  <span className='title'>Configuration</span>
               </div>
            </div>

            <div className="panel">
               <div className="panel-header">Individual Information</div>
               <div className="panel-body">
                  <div className="row">

                     <div className="col-12">
                        <div className='values-grouping'>
                           <div className='form-group'>
                              <label className='control-label' >Profile Picture</label>
                              <div className='add-values-sec'>
                                 <div className='form-group'>
                                    <label htmlFor="profilePic" className="drop-container">
                                       <span className="drop-title">Drop files here</span>
                                       OR
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
                           <input type="text" name='iName' className='form-control' value={iName} onChange={handleChange_iName} />
                           {iErrors.iName && <div className="control-error">{iErrors.iName}</div>}
                        </div>
                     </div>
                     <div className="col-12">
                        <div className='form-group'>
                           <label className='control-label' >Experties</label>
                           <input type="text" name='iExperties' className='form-control' value={iExperties} onChange={handleChange_iExperties} />
                           {iErrors.iExperties && <div className="control-error">{iErrors.iExperties}</div>}
                        </div>
                     </div>

                     <div className="col-12">
                        <div className='form-group'>
                           <label className='control-label' >Call</label>
                           <input type="tel" name='iCall' className='form-control' value={iCall} onChange={handleChange_iCall} />
                           {iErrors.iCall && <div className="control-error">{iErrors.iCall}</div>}
                        </div>
                     </div>
                     <div className="col-12">
                        <div className='form-group'>
                           <label className='control-label' >Email</label>
                           <input type="email" name='iEmail' className='form-control' value={iEmail} onChange={handleChange_iEmail} />
                           {iErrors.iEmail && <div className="control-error">{iErrors.iEmail}</div>}
                        </div>
                     </div>
                     <div className="col-12">
                        <div className='form-group'>
                           <label className='control-label' >SMS</label>
                           <input type="tel" name='iSms' className='form-control' value={iSms} onChange={handleChange_iSms} />
                           {iErrors.iSms && <div className="control-error">{iErrors.iSms}</div>}
                        </div>
                     </div>





                     <div className="col-12">
                        <div className='values-grouping'>
                           <div className='form-group'>
                              <label className='control-label' >Chat</label>
                              <div className='add-values-sec'>
                                 <div className='form-group'>
                                    <select name="title" className='form-control'>
                                       <option value="whatsapp">WhatsApp No</option>
                                       <option value="telegram">Telegram ID</option>
                                    </select>
                                    <span className='control-error'>Error Message</span>
                                 </div>
                                 <div className='form-group'>
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
                                    <span className='title'>Telegram</span>:<span className='value'>9594415153</span>
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
                  <button type="submit" className='btn btn-primary btn-block' onClick={handleClick_Individual}>Save & Proceed </button>
               </div>
            </div>

            <div className="panel">
               <div className="panel-header">Business Information</div>
               <div className="panel-body">
                  <div className="row">
                     <div className="col-12">
                        <div className='values-grouping'>

                           <div className='form-group'>
                              <label className='control-label' >Business Logo</label>
                              <div className='add-values-sec'>
                                 <div className='form-group'>
                                    <label htmlFor="BusinessLogo" className="drop-container">
                                       <span className="drop-title">Drop files here</span>
                                       OR
                                       <input type="file" id="BusinessLogo" name='BusinessLogo' accept="image/*" required />
                                    </label>
                                    <span className='control-error'>Error Message</span>
                                 </div>
                                 <div className="action">
                                    <button type='button' className='btn btn-primary'><i className='fal fa-plus'></i> Upload Business Logo</button>
                                 </div>
                              </div>
                              <ul className='list-values-sec'>
                                 <li>
                                    <img src="https://fakeimg.pl/250x80/" alt="" className='business-logo' />
                                    <button type='button' title='Delete' className='btn btn-primary'><i className='fal fa-trash'></i></button>
                                 </li>
                              </ul>
                           </div>
                        </div>

                     </div>

                     <div className="col-12">
                        <div className='form-group'>
                           <label className='control-label'> Name</label>
                           <input type="text" name='name' className='form-control' />
                        </div>
                     </div>

                     <div className="col-12">
                        <div className='form-group'>
                           <label className='control-label' >Designation</label>
                           <input type="text" name='designation' className='form-control' />
                        </div>
                     </div>

                     <div className="col-12">
                        <div className='form-group'>
                           <label className='control-label' >About</label>
                           <textarea name="about" className='form-control' rows="4"></textarea>
                        </div>
                     </div>

                     <div className="col-12">
                        <div className='form-group'>
                           <label className='control-label'>Established In</label>

                           <DatePicker selected={establishedDate} popperModifiers={[
                              {
                                 name: 'arrow',
                                 options: {
                                    padding: ({ popper }) => ({
                                       right: popper.width - 32,
                                    }),
                                 },
                              }
                           ]} onChange={(date) => setEstablishedDate(date)} className='form-control' />
                        </div>
                     </div>
                     <div className="col-12">
                        <div className='form-group'>
                           <label className='control-label' >Call</label>
                           <input type="tel" name='call' className='form-control' />
                        </div>
                     </div>
                     <div className="col-12">
                        <div className='form-group'>
                           <label className='control-label' >Email</label>
                           <input type="email" name='email' className='form-control' />
                        </div>
                     </div>
                     <div className="col-12">
                        <div className='form-group'>
                           <label className='control-label' >SMS</label>
                           <input type="tel" name='sms' className='form-control' />
                        </div>
                     </div>

                     <div className="col-12">
                        <div className='values-grouping'>
                           <div className='form-group'>
                              <label className='control-label' >Chat</label>
                              <div className='add-values-sec'>
                                 <div className='form-group'>
                                    <select name="title" className='form-control'>
                                       <option value="whatsapp">WhatsApp No</option>
                                       <option value="telegram">Telegram ID</option>
                                    </select>
                                    <span className='control-error'>Error Message</span>
                                 </div>
                                 <div className='form-group'>
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
                                    <span className='title'>Telegram</span>:<span className='value'>9594415153</span>
                                    <button type='button' title='Delete' className='btn btn-primary'><i className='fal fa-trash'></i></button>
                                 </li>
                              </ul>
                           </div>
                        </div>

                     </div>

                     <div className="col-12">
                        <div className='form-group'>
                           <label className='control-label' >Website</label>
                           <input type="url" name='websiteUrl' className='form-control' />
                        </div>
                     </div>

                     <div className="col-12">
                        <div className='form-group'>
                           <label className='control-label' >Address</label>
                           <textarea name="address" className='form-control' rows="4"></textarea>
                        </div>
                     </div>

                     <div className="col-12">
                        <div className='form-group'>
                           <label className='control-label' >Map URL</label>
                           <input type="url" name='mapUrl' className='form-control' />
                        </div>
                     </div>


                     <div className="col-12">
                        <div className='form-group'>
                           <label className='control-label' >GSTIN</label>
                           <input type="text" name='gstin' className='form-control' />
                        </div>
                     </div>
                     <div className="col-12">
                        <div className='form-group'>
                           <label className='control-label' >MSME</label>
                           <input type="text" name='msme' className='form-control' />
                        </div>
                     </div>
                     <div className="col-12">
                        <div className='form-group'>
                           <label className='control-label' >FSSAI</label>
                           <input type="text" name='fssai' className='form-control' />
                        </div>
                     </div>




                     <div className="col-12">
                        <div className='values-grouping'>

                           <div className='form-group'>
                              <label className='control-label' >
                                 <span>UPI</span>
                                 <label class="custom-switch"><input type="checkbox" /><span class="checkmark"></span></label>
                              </label>
                              <div className='add-values-sec'>
                                 <div className='form-group'>
                                    <label className='control-label' >UPI Address</label>
                                    <input type="text" name='upiId' className='form-control' />
                                 </div>
                              </div>

                           </div>
                        </div>
                     </div>



                     <div className="col-12">
                        <div className='values-grouping'>

                           <div className='form-group'>
                              <label className='control-label' >
                                 <span>Payment Gateway</span>
                                 <label class="custom-switch"><input type="checkbox" /><span class="checkmark"></span></label>
                              </label>
                              <div className='add-values-sec'>
                                 <div className='form-group'>
                                    <label className='control-label' >Link</label>
                                    <input type="url" name='paymentGatewayUrl' className='form-control' />
                                 </div>
                                 <div className='form-group'>
                                    <label className='control-label' >Logo</label>
                                    <label htmlFor="paymentGatewayLogo" className="drop-container">
                                       <span className="drop-title">Drop files here</span>
                                       OR
                                       <input type="file" id="paymentGatewayLogo" name='paymentGatewayLogo' accept="image/*" required />
                                    </label>
                                    <span className='control-error'>Error Message</span>
                                 </div>
                                 <div className="action">
                                    <button type='button' className='btn btn-primary'><i className='fal fa-plus'></i> Upload Payment Gateway Logo</button>
                                 </div>
                              </div>
                              <ul className='list-values-sec'>
                                 <li>
                                    <img src="https://fakeimg.pl/250x60/" alt="" className='pg-logo' />
                                    <button type='button' title='Delete' className='btn btn-primary'><i className='fal fa-trash'></i></button>
                                 </li>
                              </ul>
                           </div>
                        </div>
                     </div>







                     <div className="col-12">
                        <div className="values-grouping">
                           <div className='form-group'>
                              <label className='control-label' >
                                 <span>Account Details</span>
                                 <label class="custom-switch"><input type="checkbox" /><span class="checkmark"></span></label>
                              </label>
                              <div className='add-values-sec'>
                                 <div className='form-group'>
                                    <label className='control-label' >Account Holder Name</label>
                                    <input type="text" name='accountHolderName' className='form-control' />
                                 </div>
                                 <div className='form-group'>
                                    <label className='control-label' >Bank Name</label>
                                    <input type="text" name='bankName' className='form-control' />
                                 </div>
                                 <div className='form-group'>
                                    <label className='control-label' >Account Number</label>
                                    <input type="text" name='accountNumber' className='form-control' />
                                 </div>
                                 <div className='form-group'>
                                    <label className='control-label' >Account Type</label>
                                    <select name="accountType" className='form-control'>
                                       <option value="Saving">Saving</option>
                                       <option value="Current">Current</option>
                                    </select>
                                 </div>
                                 <div className='form-group'>
                                    <label className='control-label' >IFSC</label>
                                    <input type="text" name='ifsc' className='form-control' />
                                 </div>
                                 <div className='form-group'>
                                    <label className='control-label' >Branch</label>
                                    <input type="text" name='branch' className='form-control' />
                                 </div>

                              </div>

                           </div>

                        </div>
                     </div>

                     <div className="col-12">
                        <div className='values-grouping'>
                           <div className='form-group'>
                              <label className='control-label' >
                                 <span>Services</span>
                                 <label class="custom-switch"><input type="checkbox" /><span class="checkmark"></span></label>
                              </label>
                              <div className='add-values-sec'>
                                 <div className='form-group'>
                                    <input type="text" name='service' className='form-control' />
                                    <span className='control-error'>Error Message</span>
                                 </div>
                                 <div className="action">
                                    <button type='button' className='btn btn-primary'><i className='fal fa-plus'></i>Add Service</button>
                                 </div>
                              </div>
                              <ul className='list-values-sec'>
                                 <li>
                                    <span className='value'>Service 1</span>
                                    <button type='button' title='Delete' className='btn btn-primary'><i className='fal fa-trash'></i></button>
                                 </li>
                                 <li>
                                    <span className='value'>Service 2</span>
                                    <button type='button' title='Delete' className='btn btn-primary'><i className='fal fa-trash'></i></button>
                                 </li>
                              </ul>
                           </div>
                        </div>

                     </div>



                     <div className="col-12">
                        <div className='values-grouping'>
                           <div className='form-group'>
                              <label className='control-label' >
                                 <span>Gallery</span>
                                 <label class="custom-switch"><input type="checkbox" /><span class="checkmark"></span></label></label>
                              <div className='add-values-sec'>
                                 <div className='form-group'>
                                    <input type='text' name="title" className='form-control' />
                                    <span className='control-error'>Error Message</span>
                                 </div>
                                 <div className='form-group'>
                                    <label htmlFor="galleryImg" className="drop-container">
                                       <span className="drop-title">Drop files here</span>
                                       OR
                                       <input type="file" id="galleryImg" name='galleryImg' accept="image/*" required />
                                    </label>
                                    <span className='control-error'>Error Message</span>
                                 </div>
                                 <div className="action">
                                    <button type='button' className='btn btn-primary'><i className='fal fa-plus'></i> Add Images</button>
                                 </div>
                              </div>
                              <ul className='list-values-sec'>
                                 <li>
                                    <span className='gallery-img'><img src="https://fakeimg.pl/80x80/" alt="" className='gallery-img' /></span><span className='title'>Image 1</span>:<span className='value'>img1.png</span>
                                    <button type='button' title='Delete' className='btn btn-primary'><i className='fal fa-trash'></i></button>
                                 </li>
                                 <li>
                                    <span className='gallery-img'><img src="https://fakeimg.pl/80x80/" alt="" className='gallery-img' /></span><span className='title'>Image 2</span>:<span className='value'>img2.png</span>
                                    <button type='button' title='Delete' className='btn btn-primary'><i className='fal fa-trash'></i></button>
                                 </li>
                              </ul>
                           </div>
                        </div>
                     </div>



                     <div className="col-12">
                        <div className='values-grouping'>
                           <div className='form-group'>
                              <label className='control-label' >
                                 <span>Videos</span>
                                 <label class="custom-switch"><input type="checkbox" /><span class="checkmark"></span></label>
                              </label>
                              <div className='add-values-sec'>
                                 <div className='form-group'>
                                    <label className='control-label' >Title</label>
                                    <input type='text' name="title" className='form-control' />
                                    <span className='control-error'>Error Message</span>
                                 </div>
                                 <div className='form-group'>
                                    <label className='control-label' >URL</label>
                                    <input type='url' name="url" className='form-control' />
                                    <span className='control-error'>Error Message</span>
                                 </div>
                                 <div className="action">
                                    <button type='button' className='btn btn-primary'><i className='fal fa-plus'></i>Add Videos URL</button>
                                 </div>
                              </div>
                              <ul className='list-values-sec'>
                                 <li>
                                    <span className='title'>Video 1</span>:<span className='value'>video1.mp4</span>
                                    <button type='button' title='Delete' className='btn btn-primary'><i className='fal fa-trash'></i></button>
                                 </li>
                                 <li>
                                    <span className='title'>Video 2</span>:<span className='value'>video2.mp4</span>
                                    <button type='button' title='Delete' className='btn btn-primary'><i className='fal fa-trash'></i></button>
                                 </li>
                              </ul>
                           </div>
                        </div>

                     </div>

                     <div className="col-12">
                        <div className='values-grouping'>
                           <div className='form-group'>
                              <label className='control-label' >
                                 <span>E-Files</span>
                                 <label class="custom-switch"><input type="checkbox" /><span class="checkmark"></span></label>
                              </label>
                              <div className='add-values-sec'>
                                 <div className='form-group'>
                                    <label className='control-label' >Title</label>
                                    <input type='text' name="title" className='form-control' />
                                    <span className='control-error'>Error Message</span>
                                 </div>
                                 <div class="form-group">
                                    <label for="galleryImg" class="drop-container">
                                       <span class="drop-title">Drop files here</span>OR<input type="file" id="eFile" name="eFile" accept="image/*" />
                                    </label>
                                    <span class="control-error">Error Message</span>
                                 </div>

                                 <div className="action">
                                    <button type='button' className='btn btn-primary'><i className='fal fa-plus'></i>Add E-Files</button>
                                 </div>
                              </div>
                              <ul className='list-values-sec'>
                                 <li>
                                    <span className='title'>File 1</span>:<span className='value'>file1.doc</span>
                                    <button type='button' title='Delete' className='btn btn-primary'><i className='fal fa-trash'></i></button>
                                 </li>
                                 <li>
                                    <span className='title'>File 2</span>:<span className='value'>file2.xls</span>
                                    <button type='button' title='Delete' className='btn btn-primary'><i className='fal fa-trash'></i></button>
                                 </li>
                              </ul>
                           </div>
                        </div>

                     </div>

                     <div className="col-12">
                        <div className='values-grouping'>
                           <div className='form-group'>
                              <label className='control-label' >
                                 <span>Links</span>
                                 <label class="custom-switch"><input type="checkbox" /><span class="checkmark"></span></label>
                              </label>
                              <div className='add-values-sec'>
                                 <div className='form-group'>
                                    <label className="control-label">Title</label>
                                    <input type='text' name="title" className='form-control' />
                                    <span className='control-error'>Error Message</span>
                                 </div>
                                 <div className='form-group'>
                                    <label className="control-label">Link</label>
                                    <input type='url' name="url" className='form-control' />
                                    <span className='control-error'>Error Message</span>
                                 </div>
                                 <div className="action">
                                    <button type='button' className='btn btn-primary'><i className='fal fa-plus'></i>Add Links</button>
                                 </div>
                              </div>
                              <ul className='list-values-sec'>
                                 <li>
                                    <span className='title'>Website</span>:<span className='value'>www.example.com</span>
                                    <button type='button' title='Delete' className='btn btn-primary'><i className='fal fa-trash'></i></button>
                                 </li>

                              </ul>
                           </div>
                        </div>

                     </div>


                     <div className="col-12">
                        <div className='values-grouping'>
                           <div className='form-group'>
                              <label className='control-label' >
                                 <span>Social</span>
                                 <label class="custom-switch"><input type="checkbox" /><span class="checkmark"></span></label>
                              </label>
                              <div className='add-values-sec'>
                                 <div className='form-group'>
                                    <label className="control-label">Network</label>
                                    <select name="title" className='form-control'>
                                       <option value="Facebook">Facebook</option>
                                       <option value="Twitter">Twitter</option>
                                       <option value="LinkedIn">LinkedIn</option>
                                       <option value="Telegram">Telegram</option>
                                       <option value="Instagram">Instagram</option>
                                       <option value="Youtube">Youtube</option>
                                       <option value="Catalogue">Catalogue</option>
                                    </select>
                                    <span className='control-error'>Error Message</span>
                                 </div>
                                 <div className='form-group'>
                                    <label className="control-label">Link</label>
                                    <input type='text' name="value" className='form-control' />
                                    <span className='control-error'>Error Message</span>
                                 </div>
                                 <div className="action">
                                    <button type='button' className='btn btn-primary'><i className='fal fa-plus'></i>Add Social URL</button>
                                 </div>
                              </div>
                              <ul className='list-values-sec'>
                                 <li>
                                    <span className='title'>Facebook</span>:<span className='value'>www.example.com</span>
                                    <button type='button' title='Delete' className='btn btn-primary'><i className='fal fa-trash'></i></button>
                                 </li>
                                 <li>
                                    <span className='title'>Twitter</span>:<span className='value'>www.example.com</span>
                                    <button type='button' title='Delete' className='btn btn-primary'><i className='fal fa-trash'></i></button>
                                 </li>
                              </ul>
                           </div>
                        </div>

                     </div>

                     <div className="col-12">
                        <div className='values-grouping'>
                           <div className='form-group'>
                              <label className='control-label' >
                                 <span>Business Hrs & Days</span>
                                 <label class="custom-switch"><input type="checkbox" /><span class="checkmark"></span></label>

                              </label>
                              <div className='add-values-sec'>
                                 <div className='form-group'>
                                    <label className="control-label">Open At</label>
                                    <DatePicker
                                       selected={openAtTime}
                                       onChange={(date) => setOpenAtTime(date)}
                                       showTimeSelect
                                       showTimeSelectOnly
                                       popperModifiers={[
                                          {
                                             name: 'arrow',
                                             options: {
                                                padding: ({ popper }) => ({
                                                   right: popper.width - 32,
                                                }),
                                             },
                                          }
                                       ]}
                                       timeIntervals={15}
                                       timeCaption="Time"
                                       dateFormat="h:mm aa"
                                       className='form-control'

                                    />
                                    <span className='control-error'>Error Message</span>
                                 </div>
                                 <div className='form-group'>
                                    <label className="control-label">Close At</label>
                                    <DatePicker
                                       selected={closeAtTime}
                                       onChange={(date) => setCloseAtTime(date)}
                                       showTimeSelect
                                       showTimeSelectOnly
                                       popperModifiers={[
                                          {
                                             name: 'arrow',
                                             options: {
                                                padding: ({ popper }) => ({
                                                   right: popper.width - 32,
                                                }),
                                             },
                                          }
                                       ]}
                                       timeIntervals={15}
                                       timeCaption="Time"
                                       dateFormat="h:mm aa"
                                       className='form-control'

                                    />
                                    <span className='control-error'>Error Message</span>
                                 </div>
                                 <div className="checkbox-group">

                                    <label className="custom-checkbox"><input type="checkbox" name="mon" /><span className="checkmark"></span><small>Mon</small></label>
                                    <label className="custom-checkbox"><input type="checkbox" name="tue" /><span className="checkmark"></span><small>Tue</small></label>
                                    <label className="custom-checkbox"><input type="checkbox" name="wed" /><span className="checkmark"></span><small>Wed</small></label>
                                    <label className="custom-checkbox"><input type="checkbox" name="thu" /><span className="checkmark"></span><small>Thu</small></label>
                                    <label className="custom-checkbox"><input type="checkbox" name="fri" /><span className="checkmark"></span><small>Fri</small></label>
                                    <label className="custom-checkbox"><input type="checkbox" name="sat" /><span className="checkmark"></span><small>Sat</small></label>
                                    <label className="custom-checkbox"><input type="checkbox" name="sun" /><span className="checkmark"></span><small>Sun</small></label>
                                 </div>
                                 <div className="action">
                                    <button type='button' className='btn btn-primary'><i className='fal fa-plus'></i>Add Business Hrs & Days</button>
                                 </div>

                              </div>

                              <ul className='list-values-sec'>
                                 <li>
                                    <span className='title'>Monday</span>:<span className='value'>9:00 AM to 6:00 PM</span>
                                    <button type='button' title='Delete' className='btn btn-primary'><i className='fal fa-trash'></i></button>
                                 </li>
                                 <li>
                                    <span className='title'>Tuesday</span>:<span className='value'>9:00 AM to 6:00 PM</span>
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
                  <button type="submit" className='btn btn-primary btn-block'>Save & Proceed </button>
               </div>
            </div>

            <div className="panel">
               <div className="panel-header">SmartIDy Configuration</div>
               <div className="panel-body">
                  <div className="row">
                     <div className="col-12">
                        <div className='form-group'>
                           <label className='control-label' >Language</label>
                           <select name="language" className='form-control'>
                              <option value="en">English</option>
                              <option value="mr">मराठी</option>
                              <option value="hn">हिंदी</option>
                           </select>
                        </div>
                     </div>
                     <div className="col-12">
                        <div className='form-group'>
                           <label className='control-label' >Show Initial Profile</label>
                           <div className='radio-group'>
                              <label className='custom-radio'>
                                 <input type="radio" name='IsBusinessProfile' defaultChecked />
                                 <span className="checkmark"></span>
                                 <small> Business </small>
                              </label>

                              <label className='custom-radio'>
                                 <input type="radio" name='IsBusinessProfile' />
                                 <span className="checkmark"></span>
                                 <small> Individual </small>
                              </label>
                           </div>
                        </div>
                     </div>
                     <div className="col-12">
                        <div className='form-group'>
                           <label className='control-label' >Profile Picture Style</label>
                           <div className='radio-group'>
                              <label className='custom-radio'>
                                 <input type="radio" name='IsPicTypeCircle' defaultChecked />
                                 <span className="checkmark"></span>
                                 <small> Circle </small>
                              </label>

                              <label className='custom-radio'>
                                 <input type="radio" name='IsPicTypeCircle' />
                                 <span className="checkmark"></span>
                                 <small> Square </small>
                              </label>
                           </div>
                        </div>
                     </div>
                     <div className="col-12">
                        <div className='form-group'>
                           <label className='control-label' >Theme Primary Color</label>
                           <TwitterPicker onChange={handlePrimaryColorChange} color={cPrimaryColor} />
                        </div>
                     </div>
                     <div className="col-12">
                        <div className='form-group'>
                           <label className='control-label' >Theme Title Color</label>
                           <TwitterPicker onChange={handleTitleColorChange} color={cTitleColor} />
                        </div>
                     </div>
                     {/* <div className="col-12">
                        <div className='form-group'>
                           <label className='control-label' >SmartIDy Status</label>
                           <select name="language" className='form-control'>
                              <option value="A">Active</option>
                              <option value="H">Hold</option>
                              <option value="I">Inactive</option>
                              <option value="P">Inprocess</option>
                           </select>
                        </div>
                     </div> */}
                  </div>
               </div>
               <div className="panel-footer">
                  <button type="submit" className='btn btn-primary' onClick={handleClick_Configuration}>Submit</button>
                  <button type="reset" className='btn btn-secondary'>Reset</button>
                  <button type="submit" className='btn btn-primary'>Publish</button>
               </div>
            </div>

         </div>

      </div>

   )
}
export default Create;