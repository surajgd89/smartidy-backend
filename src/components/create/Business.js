import { useState } from 'react';
import DatePicker from "react-datepicker";
import axios from 'axios';



function Business() {

   //Business=============================================
   const [errors, setErrors] = useState({});
   const [establishedDate, setEstablishedDate] = useState(new Date());
   const [openAtTime, setOpenAtTime] = useState();
   const [closeAtTime, setCloseAtTime] = useState();
   return (
      <div className="panel">
         <div className="panel-header">Business Information</div>
         <div className="panel-body">
            <div className="row">
               <div className="col-12">
                  <div className='values-grouping'>

                     <div className='form-group'>
                        <div className='heading' >Business Logo</div>
                        <div className='add-values-sec'>
                           <div className='form-group'>

                              <label htmlFor="BusinessLogo" className="drop-container">
                                 <span className="drop-title">Upload Business Logo</span>

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
                  <div className='values-grouping'>
                     <div className='form-group'>
                        <div className='heading' >Chat</div>

                        <div className='add-values-sec'>
                           <div className='form-group'>
                              <label className='control-label' >Network</label>
                              <select name="title" className='form-control'>
                                 <option value="whatsapp">WhatsApp No</option>
                                 <option value="telegram">Telegram ID</option>
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
                        <div className='heading' >
                           <span>Website</span>
                           <label class="custom-switch"><input type="checkbox" /><span class="checkmark"></span></label>
                        </div>
                        <div className='add-values-sec'>
                           <div className='form-group'>

                              <input type="text" name='websiteUrl' className='form-control' />
                           </div>
                        </div>

                     </div>
                  </div>
               </div>


               <div className="col-12">
                  <div className='values-grouping'>

                     <div className='form-group'>
                        <div className='heading' >
                           <span>GSTIN</span>
                           <label class="custom-switch"><input type="checkbox" /><span class="checkmark"></span></label>
                        </div>
                        <div className='add-values-sec'>
                           <div className='form-group'>

                              <input type="text" name='gstin' className='form-control' />
                           </div>
                        </div>

                     </div>
                  </div>
               </div>



               <div className="col-12">
                  <div className='values-grouping'>

                     <div className='form-group'>
                        <div className='heading' >
                           <span>MSME</span>
                           <label class="custom-switch"><input type="checkbox" /><span class="checkmark"></span></label>
                        </div>
                        <div className='add-values-sec'>
                           <div className='form-group'>

                              <input type="text" name='msme' className='form-control' />
                           </div>
                        </div>

                     </div>
                  </div>
               </div>

               <div className="col-12">
                  <div className='values-grouping'>

                     <div className='form-group'>
                        <div className='heading' >
                           <span>FSSAI</span>
                           <label class="custom-switch"><input type="checkbox" /><span class="checkmark"></span></label>
                        </div>
                        <div className='add-values-sec'>
                           <div className='form-group'>

                              <input type="text" name='msme' className='form-control' />
                           </div>
                        </div>

                     </div>
                  </div>
               </div>


               <div className="col-12">
                  <div className='values-grouping'>

                     <div className='form-group'>
                        <div className='heading' >
                           <span>UPI</span>
                           <label class="custom-switch"><input type="checkbox" /><span class="checkmark"></span></label>
                        </div>
                        <div className='add-values-sec'>
                           <div className='form-group'>

                              <input type="text" name='upiId' className='form-control' />
                           </div>
                        </div>

                     </div>
                  </div>
               </div>



               <div className="col-12">
                  <div className='values-grouping'>

                     <div className='form-group'>
                        <div className='heading' >
                           <span>Payment Gateway</span>
                           <label class="custom-switch"><input type="checkbox" /><span class="checkmark"></span></label>
                        </div>
                        <div className='add-values-sec'>
                           <div className='form-group'>
                              <label className='control-label' >Pay Link</label>
                              <input type="url" name='paymentGatewayUrl' className='form-control' />
                           </div>
                           <div className='form-group'>

                              <label htmlFor="paymentGatewayLogo" className="drop-container">
                                 <span className="drop-title">Upload Payment Gateway Logo</span>
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
                        <div className='heading' >
                           <span>Account Details</span>
                           <label class="custom-switch"><input type="checkbox" /><span class="checkmark"></span></label>
                        </div>
                        <div className='add-values-sec'>
                           <div className='form-group'>
                              <label className='control-label' >Name</label>
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
                        <div className='heading' >
                           <span>Services</span>
                           <label class="custom-switch"><input type="checkbox" /><span class="checkmark"></span></label>
                        </div>
                        <div className='add-values-sec'>
                           <div className='form-group'>
                              <label className='control-label' >Name</label>
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
                        <div className='heading' >
                           <span>Gallery</span>
                           <label class="custom-switch"><input type="checkbox" /><span class="checkmark"></span></label></div>
                        <div className='add-values-sec'>
                           <div className='form-group'>
                              <label className='control-label' >Title</label>
                              <input type='text' name="title" className='form-control' />
                              <span className='control-error'>Error Message</span>
                           </div>
                           <div className='form-group'>
                              <label htmlFor="galleryImg" className="drop-container">
                                 <span className="drop-title">Upload Gallery Images</span>
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
                        <div className='heading' >
                           <span>Videos</span>
                           <label class="custom-switch"><input type="checkbox" /><span class="checkmark"></span></label>
                        </div>
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
                        <div className='heading' >
                           <span>E-Files</span>
                           <label class="custom-switch"><input type="checkbox" /><span class="checkmark"></span></label>
                        </div>
                        <div className='add-values-sec'>
                           <div className='form-group'>
                              <label className='control-label' >Title</label>
                              <input type='text' name="title" className='form-control' />
                              <span className='control-error'>Error Message</span>
                           </div>
                           <div class="form-group">

                              <label for="galleryImg" class="drop-container">
                                 <span class="drop-title">Upload Files</span><input type="file" id="eFile" name="eFile" accept="image/*" />
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
                        <div className='heading' >
                           <span>Links</span>
                           <label class="custom-switch"><input type="checkbox" /><span class="checkmark"></span></label>
                        </div>
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
                        <div className='heading' >
                           <span>Social</span>
                           <label class="custom-switch"><input type="checkbox" /><span class="checkmark"></span></label>
                        </div>
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
                        <div className='heading' >
                           <span>Business Hrs & Days</span>
                           <label class="custom-switch"><input type="checkbox" /><span class="checkmark"></span></label>

                        </div>
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
                           <div className="form-group">
                              <label className="control-label">Day's</label>
                              <div className="checkbox-group">
                                 <label className="custom-checkbox"><input type="checkbox" name="mon" /><span className="checkmark"></span><small>Mon</small></label>
                                 <label className="custom-checkbox"><input type="checkbox" name="tue" /><span className="checkmark"></span><small>Tue</small></label>
                                 <label className="custom-checkbox"><input type="checkbox" name="wed" /><span className="checkmark"></span><small>Wed</small></label>
                                 <label className="custom-checkbox"><input type="checkbox" name="thu" /><span className="checkmark"></span><small>Thu</small></label>
                                 <label className="custom-checkbox"><input type="checkbox" name="fri" /><span className="checkmark"></span><small>Fri</small></label>
                                 <label className="custom-checkbox"><input type="checkbox" name="sat" /><span className="checkmark"></span><small>Sat</small></label>
                                 <label className="custom-checkbox"><input type="checkbox" name="sun" /><span className="checkmark"></span><small>Sun</small></label>
                              </div>
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
            <button type="submit" className='btn btn-primary'>Save & Proceed</button>
         </div>
      </div>
   )
}

export default Business