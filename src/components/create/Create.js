
import { useState } from 'react';
import { TwitterPicker } from 'react-color';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './Create.scss'
function Create() {

   const [name, setName] = useState('');
   const [errors, setErrors] = useState({});
   const [primaryColor, setPrimaryColor] = useState('#ff6600');
   const [titleColor, setTitleColor] = useState('#411f85');
   const [establishedDate, setEstablishedDate] = useState(new Date());
   const [openAtTime, setOpenAtTime] = useState();
   const [closeAtTime, setCloseAtTime] = useState();

   const handleNameChange = (event) => {
      setName(event.target.value);
   };

   const handlePrimaryColorChange = (color, event) => {
      setPrimaryColor(color.hex)
   }

   const handleTitleColorChange = (color, event) => {
      setTitleColor(color.hex)
   }

   const handleSubmit = (event) => {
      event.preventDefault();
      const errors = {};
      console.log(`Name: ${name}`);

      if (!name) {
         errors.email = 'Email is required';
      }

      setName(errors);

      if (Object.keys(errors).length === 0) {
         // Submit the form
      }
   };

   return (
      <div className='page-section'>
         <h2 className='page-header'>Create SmartIDy</h2>
         <div className='page-body'>

            <div className="panel">
               <div className="panel-header">Individual Information</div>
               <div className="panel-body">
                  <div className="row">
                     <div className="col-6">
                        <div className='form-group'>
                           <label className='control-label' >Name</label>
                           <input type="text" name='name' className='form-control' onChange={handleNameChange} />
                           {errors.name && <div className="control-error">{errors.name}</div>}
                        </div>
                     </div>

                     <div className="col-6">
                        <div className='form-group'>
                           <label className='control-label' >Experties</label>
                           <input type="text" name='experties' className='form-control' />
                        </div>
                     </div>
                     <div className="col-6">
                        <div className='form-group'>
                           <label className='control-label' >Profile Picture</label>
                           <input type="file" name='profilePic' className='form-control' />

                        </div>
                     </div>
                     <div className="col-6">
                        <div className='form-group'>
                           <label className='control-label' >Call</label>
                           <input type="tel" name='call' className='form-control' />
                        </div>
                     </div>
                     <div className="col-6">
                        <div className='form-group'>
                           <label className='control-label' >Email</label>
                           <input type="email" name='email' className='form-control' />
                        </div>
                     </div>
                     <div className="col-6">
                        <div className='form-group'>
                           <label className='control-label' >SMS</label>
                           <input type="tel" name='sms' className='form-control' />
                        </div>
                     </div>
                     <div className="col-12">

                        <div className='form-group'>
                           <label className='control-label' >Chat</label>
                           <div className='add-values-sec'>
                              <div className="row gx-12">
                                 <div className="col">
                                    <div className='form-group'>
                                       <select name="title" className='form-control'>
                                          <option value="whatsapp">WhatsApp No</option>
                                          <option value="telegram">Telegram ID</option>
                                       </select>
                                    </div>
                                 </div>
                                 <div className="col">
                                    <div className='form-group'>
                                       <input type='text' name="value" className='form-control' />
                                    </div>
                                 </div>
                                 <div className='col-auto align-self-center'>
                                    <div className="action">
                                       <button type='button' title='Add' className='btn'><i className='fal fa-plus'></i></button>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           <ul className='list-values-sec'>
                              <li>anvd</li>
                           </ul>
                        </div>


                     </div>
                  </div>
               </div>
            </div>

            <div className="panel">
               <div className="panel-header">Business Information</div>
               <div className="panel-body">
                  <div className="row">
                     <div className="col-6">
                        <div className='form-group'>
                           <label className='control-label'>Name</label>
                           <input type="text" name='name' className='form-control' />
                        </div>
                     </div>
                     <div className="col-6">
                        <div className='form-group'>
                           <label className='control-label'>Business Logo</label>
                           <input type="file" name='logo' className='form-control' />
                        </div>
                     </div>
                     <div className="col-6">
                        <div className='form-group'>
                           <label className='control-label'>Established Date</label>

                           <DatePicker selected={establishedDate} onChange={(date) => setEstablishedDate(date)} className='form-control' />
                        </div>
                     </div>
                     <div className="col-6">
                        <div className='form-group'>
                           <label className='control-label' >Call</label>
                           <input type="tel" name='call' className='form-control' />
                        </div>
                     </div>
                     <div className="col-6">
                        <div className='form-group'>
                           <label className='control-label' >Email</label>
                           <input type="email" name='email' className='form-control' />
                        </div>
                     </div>
                     <div className="col-6">
                        <div className='form-group'>
                           <label className='control-label' >SMS</label>
                           <input type="tel" name='sms' className='form-control' />
                        </div>
                     </div>
                     <div className="col-6">
                        <div className='form-group'>
                           <label className='control-label' >Designation</label>
                           <input type="text" name='designation' className='form-control' />
                        </div>
                     </div>
                     <div className="col-6">
                        <div className='form-group'>
                           <label className='control-label' >GSTIN</label>
                           <input type="text" name='gstin' className='form-control' />
                        </div>
                     </div>
                     <div className="col-6">
                        <div className='form-group'>
                           <label className='control-label' >MSME</label>
                           <input type="text" name='msme' className='form-control' />
                        </div>
                     </div>
                     <div className="col-6">
                        <div className='form-group'>
                           <label className='control-label' >FSSAI</label>
                           <input type="text" name='fssai' className='form-control' />
                        </div>
                     </div>
                     <div className="col-6">
                        <div className='form-group'>
                           <label className='control-label' >Map URL</label>
                           <input type="url" name='mapUrl' className='form-control' />
                        </div>
                     </div>
                     <div className="col-6">
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
                           <label className='control-label' >About Business</label>
                           <textarea name="about" className='form-control' rows="4"></textarea>
                        </div>
                     </div>
                     <div className="col-6">
                        <div className='form-group'>
                           <label className='control-label' >UPI ID</label>
                           <input type="text" name='upiId' className='form-control' />
                        </div>
                     </div>
                     <div className="col-6">
                        <div className='form-group'>
                           <label className='control-label' >Payment Gateway URL</label>
                           <input type="url" name='paymentGatewayUrl' className='form-control' />
                        </div>
                     </div>
                     <div className="col-6">
                        <div className='form-group'>
                           <label className='control-label' >Payment Gateway Logo</label>
                           <input type="file" name='paymentGatewayLogo' className='form-control' />
                        </div>

                     </div>
                     <div className="col-6">
                        <div className='form-group'>
                           <label className='control-label' >Account Holder Name</label>
                           <input type="text" name='accountHolderName' className='form-control' />
                        </div>
                     </div>
                     <div className="col-6">
                        <div className='form-group'>
                           <label className='control-label' >Bank Name</label>
                           <input type="text" name='bankName' className='form-control' />
                        </div>
                     </div>
                     <div className="col-6">
                        <div className='form-group'>
                           <label className='control-label' >Account Number</label>
                           <input type="text" name='accountNumber' className='form-control' />
                        </div>
                     </div>
                     <div className="col-6">
                        <div className='form-group'>
                           <label className='control-label' >Account Type</label>
                           <select name="accountType" className='form-control'>
                              <option value="Saving">Saving</option>
                              <option value="Current">Current</option>
                           </select>
                        </div>
                     </div>
                     <div className="col-6">
                        <div className='form-group'>
                           <label className='control-label' >IFSC</label>
                           <input type="text" name='ifsc' className='form-control' />
                        </div>
                     </div>
                     <div className="col-6">
                        <div className='form-group'>
                           <label className='control-label' >Branch</label>
                           <input type="text" name='branch' className='form-control' />
                        </div>
                     </div>
                     <div className="col-12">
                        <div className='form-group'>
                           <label className='control-label'>Services</label>
                           <ul className=''>
                              <li>
                                 <div className="row">
                                    <div className="col-6">
                                       <div className='form-group'>
                                          <input type="text" name='service1' className='form-control' />
                                       </div>
                                    </div>
                                    <div className="col-6">
                                       <div>
                                          <a href=""><i className='fal fa-plus'></i></a>
                                          <a href=""><i className='fal fa-trash'></i></a>
                                       </div>
                                    </div>
                                 </div>
                              </li>
                           </ul>
                        </div>
                     </div>
                     <div className="col-12">
                        <div className='form-group'>
                           <label className='control-label' >Chat</label>
                           <ul className=''>
                              <li>
                                 <div className="row">
                                    <div className="col-6">
                                       <div className='form-group'>
                                          <select name="title" className='form-control'>
                                             <option value="whatsapp">WhatsApp No</option>
                                             <option value="telegram">Telegram ID</option>
                                          </select>
                                       </div>
                                    </div>
                                    <div className="col-6">
                                       <div className='form-group'>
                                          <input type='text' name="value" className='form-control' />
                                       </div>
                                    </div>
                                    <div className='col-12'>
                                       <a href=""><i className='fal fa-plus'></i></a>
                                       <a href=""><i className='fal fa-trash'></i></a>
                                    </div>
                                 </div>

                              </li>
                           </ul>
                        </div>
                     </div>
                     <div className="col-12">
                        <div className='form-group'>
                           <label className='control-label' >Gallery</label>
                           <ul className=''>
                              <li>
                                 <div className="row">
                                    <div className="col-6">
                                       <div className='form-group'>
                                          <input type='text' name="title" className='form-control' />
                                       </div>
                                    </div>
                                    <div className="col-6">
                                       <div className='form-group'>
                                          <input type='file' name="url" className='form-control' />
                                       </div>
                                    </div>
                                    <div className="col-12">
                                       <div>
                                          <a href=""><i className='fal fa-plus'></i></a>
                                          <a href=""><i className='fal fa-trash'></i></a>
                                       </div>
                                    </div>
                                 </div>



                              </li>
                           </ul>
                        </div>
                     </div>
                     <div className="col-12">
                        <div className='form-group'>
                           <label className='control-label' >Videos</label>
                           <ul className=''>
                              <li>
                                 <div className="row">
                                    <div className="col-6">
                                       <div className='form-group'>
                                          <input type='text' name="title" className='form-control' />
                                       </div>
                                    </div>
                                    <div className="col-6">
                                       <div className='form-group'>
                                          <input type='url' name="url" className='form-control' />
                                       </div>
                                    </div>
                                    <div className="col-6">
                                       <div >
                                          <a href=""><i className='fal fa-plus'></i></a>
                                          <a href=""><i className='fal fa-trash'></i></a>
                                       </div>
                                    </div>
                                 </div>



                              </li>
                           </ul>
                        </div>

                     </div>
                     <div className="col-12">
                        <div className='form-group'>
                           <label className='control-label' >E-Files</label>
                           <ul className=''>
                              <li>
                                 <div className="row">
                                    <div className="col-6">
                                       <div className='form-group'>
                                          <input type='text' name="title" className='form-control' />
                                       </div>
                                    </div>
                                    <div className="col-6">
                                       <div className='form-group'>
                                          <input type='file' name="url" className='form-control' />
                                       </div>
                                    </div>
                                    <div className="col-6">
                                       <div>
                                          <a href=""><i className='fal fa-plus'></i></a>
                                          <a href=""><i className='fal fa-trash'></i></a>
                                       </div>
                                    </div>
                                 </div>

                              </li>
                           </ul>
                        </div>

                     </div>
                     <div className="col-12">
                        <div className='form-group'>
                           <label className='control-label' >Links</label>
                           <ul className=''>
                              <li>
                                 <div className="row">
                                    <div className="col-6">
                                       <div className='form-group'>
                                          <input type='text' name="title" className='form-control' />
                                       </div>
                                    </div>
                                    <div className="col-6">
                                       <div className='form-group'>
                                          <input type='url' name="url" className='form-control' />
                                       </div>
                                    </div>
                                    <div className="col-6">
                                       <div>
                                          <a href=""><i className='fal fa-plus'></i></a>
                                          <a href=""><i className='fal fa-trash'></i></a>
                                       </div>
                                    </div>
                                 </div>
                              </li>
                           </ul>
                        </div>
                     </div>
                     <div className="col-12">
                        <div className='form-group'>
                           <label className='control-label' >Social</label>
                           <ul className=''>
                              <li>
                                 <div className="row">
                                    <div className="col-6">
                                       <div className='form-group'>
                                          <select name="title" className='form-control'>
                                             <option value="Facebook">Facebook</option>
                                             <option value="Twitter">Twitter</option>
                                             <option value="LinkedIn">LinkedIn</option>
                                             <option value="Telegram">Telegram</option>
                                             <option value="Instagram">Instagram</option>
                                             <option value="Youtube">Youtube</option>
                                             <option value="Catalogue">Catalogue</option>
                                          </select>
                                       </div></div>
                                    <div className="col-6">
                                       <div className='form-group'>
                                          <input type='text' name="value" className='form-control' />
                                       </div></div>
                                    <div className="col-6">
                                       <div>
                                          <a href=""><i className='fal fa-plus'></i></a>
                                          <a href=""><i className='fal fa-trash'></i></a>
                                       </div>
                                    </div>
                                 </div>





                              </li>
                           </ul>
                        </div>
                     </div>

                     <div className="col-12">
                        <div className='form-group'>
                           <label className='control-label' >Business Days & Hrs</label>
                           <ul>
                              <li>
                                 <div className="row">
                                    <div className="col-6">
                                       <div className='form-group'>
                                          <label className='control-label' >Open At</label>


                                          <DatePicker
                                             selected={openAtTime}
                                             onChange={(date) => setOpenAtTime(date)}
                                             showTimeSelect
                                             showTimeSelectOnly
                                             timeIntervals={15}
                                             timeCaption="Time"
                                             dateFormat="h:mm aa"
                                             className='form-control'
                                          />
                                       </div>
                                    </div>
                                    <div className="col-6">
                                       <div className='form-group'>
                                          <label className='control-label' >Close At</label>

                                          <DatePicker
                                             selected={closeAtTime}
                                             onChange={(date) => setCloseAtTime(date)}
                                             showTimeSelect
                                             showTimeSelectOnly
                                             timeIntervals={15}
                                             timeCaption="Time"
                                             dateFormat="h:mm aa"
                                             className='form-control'
                                          />
                                       </div>
                                    </div>
                                    <div className="col-12">
                                       <div>
                                          <label htmlFor="Mon"><input id='Mon' type="checkbox" name="Mon" /> Mon</label>
                                          <label htmlFor="Tue"><input id='Tue' type="checkbox" name="Tue" /> Tue</label>
                                          <label htmlFor="Wed"><input id='Wed' type="checkbox" name="Wed" /> Wed</label>
                                          <label htmlFor="Thu"><input id='Thu' type="checkbox" name="Thu" /> Thu</label>
                                          <label htmlFor="Fri"><input id='Fri' type="checkbox" name="Fri" /> Fri</label>
                                          <label htmlFor="Sat"><input id='Sat' type="checkbox" name="Sat" /> Sat</label>
                                          <label htmlFor="Sun"><input id='Sun' type="checkbox" name="Sun" /> Sun</label>
                                       </div>
                                    </div>
                                    <div className="col-12">
                                       <div>
                                          <a href=""><i className='fal fa-plus'></i></a>
                                          <a href=""><i className='fal fa-trash'></i></a>
                                       </div>
                                    </div>

                                 </div>




                              </li>
                           </ul>
                        </div>

                     </div>
                  </div>
               </div>
            </div>

            <div className="panel">
               <div className="panel-header">SmartIDy Configuration</div>
               <div className="panel-body">
                  <div className="row">
                     <div className="col-6">
                        <div className='form-group'>
                           <label className='control-label' >SmartIDyURL</label>
                           <input type="text" name='smartIdyUrl' className='form-control' />
                        </div>
                     </div>
                     <div className="col-6">
                        <div className='form-group'>
                           <label className='control-label' >Language</label>
                           <select name="language" className='form-control'>
                              <option value="en">English</option>
                              <option value="mr">मराठी</option>
                              <option value="hn">हिंदी</option>
                           </select>
                        </div>
                     </div>
                     <div className="col-6">
                        <div className='form-group'>
                           <label className='control-label' >Show Initial Profile</label>
                           <div className='radio-group'>
                              <label htmlFor="business">
                                 <input type="radio" id='business' name='IsBusinessProfile' checked={true} />
                                 <span> Business </span>
                              </label>
                              &nbsp;&nbsp;
                              <label htmlFor="individual">
                                 <input type="radio" id='Individual' name='IsBusinessProfile' />
                                 <span> Individual </span>
                              </label>
                           </div>
                        </div>
                     </div>
                     <div className="col-6">
                        <div className='form-group'>
                           <label className='control-label' >Profile Picture Style</label>
                           <div className='radio-group'>
                              <label htmlFor="circle">
                                 <input type="radio" id='circle' name='IsPicTypeCircle' checked={true} />
                                 <span> Circle </span>
                              </label>
                              &nbsp;&nbsp;
                              <label htmlFor="square">
                                 <input type="radio" id='square' name='IsPicTypeCircle' />
                                 <span> Square </span>
                              </label>
                           </div>
                        </div>
                     </div>
                     <div className="col-6">
                        <div className='form-group'>
                           <label className='control-label' >Theme Primary Color</label>
                           <TwitterPicker onChange={handlePrimaryColorChange} color={primaryColor} />
                        </div>
                     </div>
                     <div className="col-6">
                        <div className='form-group'>
                           <label className='control-label' >Theme Title Color</label>
                           <TwitterPicker onChange={handleTitleColorChange} color={titleColor} />
                        </div>
                     </div>
                  </div>
               </div>
            </div>

         </div>
         <div className='page-footer'>
            <button type="submit" className='btn' onClick={handleSubmit}>Submit</button>
            <button type="reset" className='btn'>Reset</button>
            <button type="submit" className='btn'>Publish</button>
         </div>
      </div>

   )
}
export default Create;