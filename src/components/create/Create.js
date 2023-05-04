
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
                        <div className='form-group'>
                           <label className='control-label' >Name</label>
                           <input type="text" name='name' className='form-control' onChange={handleNameChange} />
                           {errors.name && <div className="control-error">{errors.name}</div>}
                        </div>
                     </div>

                     <div className="col-12">
                        <div className='form-group'>
                           <label className='control-label' >Experties</label>
                           <input type="text" name='experties' className='form-control' />
                        </div>
                     </div>

                     <div className="col-12">
                        <div className='values-grouping'>
                           <div className='form-group'>
                              <label className='control-label' >Profile Picture</label>
                              <div className='add-values-sec'>
                                 <div className='form-group'>
                                    <label htmlFor="profilePic" class="drop-container">
                                       <span class="drop-title">Drop files here</span>
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
                  </div>
               </div>
               <div className="panel-footer">
                  <button type="submit" className='btn btn-primary btn-block'>Save & Proceed </button>
               </div>
            </div>

            <div className="panel">
               <div className="panel-header">Business Information</div>
               <div className="panel-body">
                  <div className="row">
                     <div className="col-12">
                        <div className='form-group'>
                           <label className='control-label'>Name</label>
                           <input type="text" name='name' className='form-control' />
                        </div>
                     </div>
                     <div className="col-12">
                        <div className='values-grouping'>

                           <div className='form-group'>
                              <label className='control-label' >Business Logo</label>
                              <div className='add-values-sec'>
                                 <div className='form-group'>
                                    <label htmlFor="BusinessLogo" class="drop-container">
                                       <span class="drop-title">Drop files here</span>
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
                           <label className='control-label'>Established Date</label>

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
                        <div className='form-group'>
                           <label className='control-label' >Designation</label>
                           <input type="text" name='designation' className='form-control' />
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
                        <div className='form-group'>
                           <label className='control-label' >Map URL</label>
                           <input type="url" name='mapUrl' className='form-control' />
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
                           <label className='control-label' >About Business</label>
                           <textarea name="about" className='form-control' rows="4"></textarea>
                        </div>
                     </div>
                     <div className="col-12">
                        <div className='form-group'>
                           <label className='control-label' >UPI ID</label>
                           <input type="text" name='upiId' className='form-control' />
                        </div>
                     </div>

                     <div className="col-12">
                        <div className='form-group'>
                           <label className='control-label' >Payment Gateway Link</label>
                           <input type="url" name='paymentGatewayUrl' className='form-control' />
                        </div>
                     </div>

                     <div className="col-12">
                        <div className='values-grouping'>

                           <div className='form-group'>
                              <label className='control-label' >Payment Gateway Logo</label>
                              <div className='add-values-sec'>
                                 <div className='form-group'>

                                    <label htmlFor="paymentGatewayLogo" class="drop-container">
                                       <span class="drop-title">Drop files here</span>
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
                        <div className='form-group'>
                           <label className='control-label' >If you want to show bank account details ?</label>
                           <div class="switch-group">
                              <label class="custom-switch yes-no">
                                 <input type="checkbox" defaultChecked />
                                 <span class="checkmark"></span>
                              </label>
                           </div>
                        </div>
                     </div>

                     <div className="col-12">
                        <div className="values-grouping">
                           <div className="col-12">
                              <div className='form-group'>
                                 <label className='control-label' >Account Holder Name</label>
                                 <input type="text" name='accountHolderName' className='form-control' />
                              </div>
                           </div>
                           <div className="col-12">
                              <div className='form-group'>
                                 <label className='control-label' >Bank Name</label>
                                 <input type="text" name='bankName' className='form-control' />
                              </div>
                           </div>
                           <div className="col-12">
                              <div className='form-group'>
                                 <label className='control-label' >Account Number</label>
                                 <input type="text" name='accountNumber' className='form-control' />
                              </div>
                           </div>
                           <div className="col-12">
                              <div className='form-group'>
                                 <label className='control-label' >Account Type</label>
                                 <select name="accountType" className='form-control'>
                                    <option value="Saving">Saving</option>
                                    <option value="Current">Current</option>
                                 </select>
                              </div>
                           </div>
                           <div className="col-12">
                              <div className='form-group'>
                                 <label className='control-label' >IFSC</label>
                                 <input type="text" name='ifsc' className='form-control' />
                              </div>
                           </div>
                           <div className="col-12">
                              <div className='form-group'>
                                 <label className='control-label' >Branch</label>
                                 <input type="text" name='branch' className='form-control' />
                              </div>
                           </div>
                        </div>
                     </div>

                     <div className="col-12">
                        <div className='values-grouping'>
                           <div className='form-group'>
                              <label className='control-label' >Services</label>
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
                        <div className='values-grouping'>
                           <div className='form-group'>
                              <label className='control-label' >Gallery</label>
                              <div className='add-values-sec'>
                                 <div className='form-group'>
                                    <input type='text' name="title" className='form-control' />
                                    <span className='control-error'>Error Message</span>
                                 </div>
                                 <div className='form-group'>
                                    <input type='file' name="url" className='form-control' />
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
                              <label className='control-label' >Videos</label>
                              <div className='add-values-sec'>
                                 <div className='form-group'>
                                    <input type='text' name="title" className='form-control' />
                                    <span className='control-error'>Error Message</span>
                                 </div>
                                 <div className='form-group'>
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
                              <label className='control-label' >E-Files</label>
                              <div className='add-values-sec'>
                                 <div className='form-group'>
                                    <input type='text' name="title" className='form-control' />
                                    <span className='control-error'>Error Message</span>
                                 </div>
                                 <div className='form-group'>
                                    <input type='url' name="url" className='form-control' />
                                    <span className='control-error'>Error Message</span>
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
                              <label className='control-label' >Links</label>
                              <div className='add-values-sec'>
                                 <div className='form-group'>
                                    <input type='text' name="title" className='form-control' />
                                    <span className='control-error'>Error Message</span>
                                 </div>
                                 <div className='form-group'>
                                    <input type='url' name="url" className='form-control' />
                                    <span className='control-error'>Error Message</span>
                                 </div>
                                 <div className="action">
                                    <button type='button' className='btn btn-primary'><i className='fal fa-plus'></i>Add Links</button>
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
                              <label className='control-label' >Social</label>
                              <div className='add-values-sec'>
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
                                    <span className='control-error'>Error Message</span>
                                 </div>
                                 <div className='form-group'>
                                    <input type='text' name="value" className='form-control' />
                                    <span className='control-error'>Error Message</span>
                                 </div>
                                 <div className="action">
                                    <button type='button' className='btn btn-primary'><i className='fal fa-plus'></i>Add Social URL</button>
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
                              <label className='control-label' >Business Hrs & Days</label>
                              <div className='add-values-sec'>
                                 <div className='form-group'>

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
                                       placeholderText='Open At'
                                    />
                                    <span className='control-error'>Error Message</span>
                                 </div>
                                 <div className='form-group'>
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
                                       placeholderText='Close At'
                                    />
                                    <span className='control-error'>Error Message</span>
                                 </div>
                                 <div className="checkbox-group">

                                    <label className="custom-checkbox"><input type="checkbox" name="mon" /><span class="checkmark"></span><small>Mon</small></label>
                                    <label className="custom-checkbox"><input type="checkbox" name="tue" /><span class="checkmark"></span><small>Tue</small></label>
                                    <label className="custom-checkbox"><input type="checkbox" name="wed" /><span class="checkmark"></span><small>Wed</small></label>
                                    <label className="custom-checkbox"><input type="checkbox" name="thu" /><span class="checkmark"></span><small>Thu</small></label>
                                    <label className="custom-checkbox"><input type="checkbox" name="fri" /><span class="checkmark"></span><small>Fri</small></label>
                                    <label className="custom-checkbox"><input type="checkbox" name="sat" /><span class="checkmark"></span><small>Sat</small></label>
                                    <label className="custom-checkbox"><input type="checkbox" name="sun" /><span class="checkmark"></span><small>Sun</small></label>
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
                  <button type="submit" className='btn btn-primary btn-block'>Save & Proceed </button>
               </div>
            </div>

            <div className="panel">
               <div className="panel-header">SmartIDy Configuration</div>
               <div className="panel-body">
                  <div className="row">
                     <div className="col-12">
                        <div className='form-group'>
                           <label className='control-label' >SmartIDyURL</label>
                           <input type="text" name='smartIdyUrl' className='form-control' />
                        </div>
                     </div>
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
                                 <span class="checkmark"></span>
                                 <small> Business </small>
                              </label>

                              <label className='custom-radio'>
                                 <input type="radio" name='IsBusinessProfile' />
                                 <span class="checkmark"></span>
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
                                 <span class="checkmark"></span>
                                 <small> Circle </small>
                              </label>

                              <label className='custom-radio'>
                                 <input type="radio" name='IsPicTypeCircle' />
                                 <span class="checkmark"></span>
                                 <small> Square </small>
                              </label>
                           </div>
                        </div>
                     </div>
                     <div className="col-12">
                        <div className='form-group'>
                           <label className='control-label' >Theme Primary Color</label>
                           <TwitterPicker onChange={handlePrimaryColorChange} color={primaryColor} />
                        </div>
                     </div>
                     <div className="col-12">
                        <div className='form-group'>
                           <label className='control-label' >Theme Title Color</label>
                           <TwitterPicker onChange={handleTitleColorChange} color={titleColor} />
                        </div>
                     </div>
                     <div className="col-12">
                        <div className='form-group'>
                           <label className='control-label' >SmartIDy Status</label>
                           <select name="language" className='form-control'>
                              <option value="active">Active</option>
                              <option value="hold">Hold</option>
                              <option value="inactive">Inactive</option>
                           </select>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="panel-footer">
                  <button type="submit" className='btn btn-primary' onClick={handleSubmit}>Submit</button>
                  <button type="reset" className='btn btn-secondary'>Reset</button>
                  <button type="submit" className='btn btn-primary'>Publish</button>
               </div>
            </div>

         </div>

      </div>

   )
}
export default Create;