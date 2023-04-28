
import { useState } from 'react';
import './Create.scss'
function Create() {

   const [name, setName] = useState('');
   const [errors, setErrors] = useState({});

   const handleNameChange = (event) => {
      setName(event.target.value);
   };

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
      <div>
         <h2>Create SmartIDy</h2>
         <div>
            <form onSubmit={handleSubmit}>
               <h3>Individual Information</h3>
               <table>
                  <tr>
                     <td >Name</td>
                     <td>
                        <input type="text" name='name' onChange={handleNameChange} />
                        {errors.name && <div className="error">{errors.name}</div>}
                     </td>
                  </tr>
                  <tr>
                     <td>Experties</td>
                     <td><input type="text" name='experties' /></td>
                  </tr>
                  <tr>
                     <td>Profile Picture</td>
                     <td>
                        <input type="file" name='profilePic' />
                        <button type='button'>Upload</button>
                        <button type='button'>Remove</button>
                     </td>
                  </tr>
                  <tr>
                     <td>Call</td>
                     <td><input type="tel" name='call' /></td>
                  </tr>
                  <tr>
                     <td>Email</td>
                     <td><input type="email" name='email' /></td>
                  </tr>
                  <tr>
                     <td>SMS</td>
                     <td><input type="tel" name='sms' /></td>
                  </tr>
                  <tr>
                     <td>Chat</td>
                     <td>
                        <table >
                           <tr>
                              <th>Title</th>
                              <th>Value</th>
                              <th>Action</th>
                           </tr>
                           <tr>
                              <td>
                                 <select name="title">
                                    <option value="whatsapp">WhatsApp No</option>
                                    <option value="telegram">Telegram ID</option>
                                 </select>
                              </td>
                              <td>
                                 <input type='text' name="value" />
                              </td>
                              <td>
                                 <button type='button'>Add</button>
                                 <button type='button'>Remove</button>
                              </td>
                           </tr>

                        </table>

                     </td>
                  </tr>
               </table>
               <h3>Business Information</h3>
               <table>

                  <tr>
                     <td>Name</td>
                     <td><input type="text" name='name' /></td>
                  </tr>
                  <tr>
                     <td>Business Logo</td>
                     <td>
                        <input type="file" name='logo' />
                        <button type='button'>Upload</button>
                        <button type='button'>Remove</button>
                     </td>
                  </tr>
                  <tr>
                     <td>Established Date</td>
                     <td><input type="date" name='estDate' /></td>
                  </tr>
                  <tr>
                     <td>Call</td>
                     <td><input type="tel" name='call' /></td>
                  </tr>
                  <tr>
                     <td>Email</td>
                     <td><input type="email" name='email' /></td>
                  </tr>
                  <tr>
                     <td>SMS</td>
                     <td><input type="tel" name='sms' /></td>
                  </tr>
                  <tr>
                     <td>Designation</td>
                     <td><input type="text" name='designation' /></td>
                  </tr>
                  <tr>
                     <td>GSTIN</td>
                     <td>
                        <label htmlFor="yes_gstin">
                           <input type="radio" id='yes_gstin' name='gstin' value="yes" checked={true} />
                           <span> Yes </span>
                        </label>
                        &nbsp;&nbsp;
                        <label htmlFor="no_gstin">
                           <input type="radio" id='no_gstin' name='gstin' value="no" />
                           <span> No </span>
                        </label>
                        <input type="text" name='gstin' />
                     </td>
                  </tr>
                  <tr>
                     <td>MSME</td>
                     <td>
                        <label htmlFor="yes_msme">
                           <input type="radio" id='yes_msme' name='msme' value="yes" checked={true} />
                           <span> Yes </span>
                        </label>
                        &nbsp;&nbsp;
                        <label htmlFor="no_msme">
                           <input type="radio" id='no_msme' name='msme' value="no" />
                           <span> No </span>
                        </label>
                        <input type="text" name='msme' /></td>
                  </tr>
                  <tr>
                     <td>FSSAI</td>
                     <td>
                        <label htmlFor="yes_fssai">
                           <input type="radio" id='yes_fssai' name='fssai' value="yes" checked={true} />
                           <span> Yes </span>
                        </label>
                        &nbsp;&nbsp;
                        <label htmlFor="no_fssai">
                           <input type="radio" id='no_fssai' name='fssai' value="no" />
                           <span> No </span>
                        </label>
                        <input type="text" name='fssai' />
                     </td>
                  </tr>
                  <tr>
                     <td>Address</td>
                     <td><textarea name="address" rows="3"></textarea></td>
                  </tr>
                  <tr>
                     <td>Map</td>
                     <td><input type="url" name='mapUrl' /></td>
                  </tr>
                  <tr>
                     <td>Website</td>
                     <td><input type="url" name='mapUrl' /></td>
                  </tr>
                  <tr>
                     <td>UPI ID</td>
                     <td>
                        <label htmlFor="yes_upiId">
                           <input type="radio" id='yes_upiId' name='upiId' value="yes" checked={true} />
                           <span> Yes </span>
                        </label>
                        &nbsp;&nbsp;
                        <label htmlFor="no_upiId">
                           <input type="radio" id='no_upiId' name='upiId' value="no" />
                           <span> No </span>
                        </label>
                        <input type="text" name='upiId' />
                     </td>
                  </tr>
                  <tr>
                     <td>About Business</td>
                     <td>
                        <textarea name="about" rows="3"></textarea>
                     </td>
                  </tr>
                  <tr>
                     <td>Services</td>
                     <td>
                        <label htmlFor="yes_services">
                           <input type="radio" id='yes_services' name='services' value="yes" checked={true} />
                           <span> Yes </span>
                        </label>
                        &nbsp;&nbsp;
                        <label htmlFor="no_services">
                           <input type="radio" id='no_services' name='services' value="no" />
                           <span> No </span>
                        </label>
                        <table >
                           <tr>
                              <th>Name</th>
                              <th>Action</th>
                           </tr>
                           <tr>
                              <td><input type="text" name='service1' /> </td>
                              <td>
                                 <button type='button'>Add</button>
                                 <button type='button'>Remove</button>
                              </td>
                           </tr>
                        </table>
                     </td>
                  </tr>
                  <tr>
                     <td>Chat</td>
                     <td>
                        <table >
                           <tr>
                              <th>Title</th>
                              <th>Value</th>
                              <th>Action</th>
                           </tr>
                           <tr>
                              <td>
                                 <select name="title">
                                    <option value="whatsapp">WhatsApp No</option>
                                    <option value="telegram">Telegram ID</option>
                                 </select>
                              </td>
                              <td>
                                 <input type='text' name="value" />
                              </td>
                              <td>
                                 <button type='button'>Add</button>
                                 <button type='button'>Remove</button>
                              </td>
                           </tr>
                        </table>
                     </td>
                  </tr>
                  <tr>
                     <td>Gallery</td>
                     <td>
                        <label htmlFor="yes_gallery">
                           <input type="radio" id='yes_gallery' name='gallery' value="yes" checked={true} />
                           <span> Yes </span>
                        </label>
                        &nbsp;&nbsp;
                        <label htmlFor="no_gallery">
                           <input type="radio" id='no_gallery' name='gallery' value="no" />
                           <span> No </span>
                        </label>
                        <table>
                           <tr>
                              <th>Title</th>
                              <th>Upload Image</th>
                              <th>Action</th>
                           </tr>
                           <tr>
                              <td>
                                 <input type='text' name="title" placeholder='Enter Image Title 1' />
                              </td>
                              <td>
                                 <input type='file' name="src" />
                              </td>
                              <td>
                                 <button type='button'>Upload</button>
                                 <button type='button'>Remove</button>
                              </td>
                           </tr>
                        </table>
                     </td>
                  </tr>
                  <tr>
                     <td>Videos</td>
                     <td>
                        <label htmlFor="yes_videos">
                           <input type="radio" id='yes_videos' name='videos' value="yes" checked={true} />
                           <span> Yes </span>
                        </label>
                        &nbsp;&nbsp;
                        <label htmlFor="no_videos">
                           <input type="radio" id='no_videos' name='videos' value="no" />
                           <span> No </span>
                        </label>
                        <table>
                           <tr>
                              <th>Title</th>
                              <th>Enter URL</th>
                              <th>Action</th>
                           </tr>
                           <tr>
                              <td>
                                 <input type='text' name="title" placeholder='Enter Video Title 1' />
                              </td>
                              <td>
                                 <input type='url' name="url" />
                              </td>
                              <td>
                                 <button type='button'>Add</button>
                                 <button type='button'>Remove</button>
                              </td>
                           </tr>




                        </table>
                     </td>
                  </tr>
                  <tr>
                     <td>Bank Account</td>
                     <td>
                        <label htmlFor="yes_bankAccount">
                           <input type="radio" id='yes_bankAccount' name='bankAccount' value="yes" checked={true} />
                           <span> Yes </span>
                        </label>
                        &nbsp;&nbsp;
                        <label htmlFor="no_bankAccount">
                           <input type="radio" id='no_bankAccount' name='bankAccount' value="no" />
                           <span> No </span>
                        </label>
                        <table>
                           <tr>
                              <td>Name</td>
                              <td><input type='text' name="name" /></td>
                           </tr>
                           <tr>
                              <td>Bank</td>
                              <td><input type='text' name="bank" /></td>
                           </tr>
                           <tr>
                              <td>Number</td>
                              <td><input type='text' name="number" /></td>
                           </tr>
                           <tr>
                              <td>IFSC</td>
                              <td><input type='text' name="ifsc" /></td>
                           </tr>
                           <tr>
                              <td>Account Type</td>
                              <td>
                                 <select name="type">
                                    <option value="Saving">Saving</option>
                                    <option value="Current">Current</option>
                                 </select>
                              </td>
                           </tr>
                           <tr>
                              <td>Branch</td>
                              <td><input type='text' name="branch" /></td>
                           </tr>
                        </table>
                     </td>
                  </tr>
                  <tr>
                     <td>Efiles</td>
                     <td>
                        <label htmlFor="yes_efiles">
                           <input type="radio" id='yes_efiles' name='efiles' value="yes" checked={true} />
                           <span> Yes </span>
                        </label>
                        &nbsp;&nbsp;
                        <label htmlFor="no_efiles">
                           <input type="radio" id='no_efiles' name='efiles' value="no" />
                           <span> No </span>
                        </label>
                        <table>
                           <tr>
                              <th>File Name</th>
                              <th>Upload File</th>
                              <th>Action</th>
                           </tr>
                           <tr>
                              <td>
                                 <input type='text' name="title" />
                              </td>
                              <td>
                                 <input type='file' name="src" />
                              </td>
                              <td>
                                 <button type='button'>Upload</button>
                                 <button type='button'>Remove</button>
                              </td>
                           </tr>
                        </table>
                     </td>
                  </tr>
                  <tr>
                     <td>Links</td>
                     <td>
                        <label htmlFor="yes_links">
                           <input type="radio" id='yes_links' name='links' value="yes" checked={true} />
                           <span> Yes </span>
                        </label>
                        &nbsp;&nbsp;
                        <label htmlFor="no_links">
                           <input type="radio" id='no_links' name='links' value="no" />
                           <span> No </span>
                        </label>
                        <table >
                           <tr>
                              <th>Title</th>
                              <th>Enter URL</th>
                              <th>Action</th>
                           </tr>
                           <tr>
                              <td>
                                 <input type='text' name="title" />
                              </td>
                              <td>
                                 <input type='url' name="url" />
                              </td>
                              <td>
                                 <button type='button'>Add</button>
                                 <button type='button'>Remove</button>
                              </td>
                           </tr>
                        </table>
                     </td>
                  </tr>
                  <tr>
                     <td>Business Days</td>
                     <td>
                        <label htmlFor="yes_workingDayHrs">
                           <input type="radio" id='yes_workingDayHrs' name='workingDayHrs' checked={true} />
                           <span> Yes </span>
                        </label>
                        &nbsp;&nbsp;
                        <label htmlFor="no_workingDayHrs">
                           <input type="radio" id='no_workingDayHrs' name='workingDayHrs' />
                           <span> No </span>
                        </label>
                        <table >
                           <tr>
                              <th>Working</th>
                              <th>Day</th>
                              <th>Open At</th>
                              <th>Close At</th>
                           </tr>
                           <tr>
                              <td><input type='checkbox' name="working" /></td>
                              <td>
                                 <input type='text' name="day" value="Monday" disabled />
                              </td>
                              <td>
                                 <input type='time' name="openAt" />
                              </td>
                              <td>
                                 <input type='time' name="closesAt" />
                              </td>
                           </tr>
                           <tr>
                              <td><input type='checkbox' name="working" /></td>
                              <td>
                                 <input type='text' name="day" value="Tuesday" disabled />
                              </td>
                              <td>
                                 <input type='time' name="openAt" />
                              </td>
                              <td>
                                 <input type='time' name="closesAt" />
                              </td>
                           </tr>
                           <tr>
                              <td><input type='checkbox' name="working" /></td>
                              <td>
                                 <input type='text' name="day" value="Wednesday" disabled />
                              </td>
                              <td>
                                 <input type='time' name="openAt" />
                              </td>
                              <td>
                                 <input type='time' name="closesAt" />
                              </td>
                           </tr>
                           <tr>
                              <td><input type='checkbox' name="working" /></td>
                              <td>
                                 <input type='text' name="day" value="Thursday" disabled />
                              </td>
                              <td>
                                 <input type='time' name="openAt" />
                              </td>
                              <td>
                                 <input type='time' name="closesAt" />
                              </td>
                           </tr>
                           <tr>
                              <td><input type='checkbox' name="working" /></td>
                              <td>
                                 <input type='text' name="day" value="Friday" disabled />
                              </td>
                              <td>
                                 <input type='time' name="openAt" />
                              </td>
                              <td>
                                 <input type='time' name="closesAt" />
                              </td>
                           </tr>
                           <tr>
                              <td><input type='checkbox' name="working" /></td>
                              <td>
                                 <input type='text' name="day" value="Saturday" disabled />
                              </td>
                              <td>
                                 <input type='time' name="openAt" />
                              </td>
                              <td>
                                 <input type='time' name="closesAt" />
                              </td>
                           </tr>
                           <tr>
                              <td><input type='checkbox' name="working" /></td>
                              <td>
                                 <input type='text' name="day" value="Sunday" disabled />
                              </td>
                              <td>
                                 <input type='time' name="openAt" />
                              </td>
                              <td>
                                 <input type='time' name="closesAt" />
                              </td>
                           </tr>
                        </table>
                     </td>
                  </tr>
                  <tr>
                     <td>Social</td>
                     <td>
                        <label htmlFor="yes_social">
                           <input type="radio" id='yes_social' name='social' value="yes" checked={true} />
                           <span> Yes </span>
                        </label>
                        &nbsp;&nbsp;
                        <label htmlFor="no_social">
                           <input type="radio" id='no_social' name='social' value="no" />
                           <span> No </span>
                        </label>
                        <table >
                           <tr>
                              <th>Title</th>
                              <th>url</th>
                              <th>Action</th>
                           </tr>
                           <tr>
                              <td>
                                 <select name="title">
                                    <option value="Facebook">Facebook</option>
                                    <option value="Twitter">Twitter</option>
                                    <option value="LinkedIn">LinkedIn</option>
                                    <option value="Telegram">Telegram</option>
                                    <option value="Instagram">Instagram</option>
                                    <option value="Youtube">Youtube</option>
                                    <option value="Catalogue">Catalogue</option>
                                 </select>
                              </td>
                              <td>
                                 <input type='url' name="url" />
                              </td>
                              <td>
                                 <button type="button">Add</button>
                                 <button type="button">Remove</button>
                              </td>
                           </tr>
                        </table>
                     </td>
                  </tr>
               </table>
               <h3>SmartIDy Configuration</h3>
               <table>

                  <tr>
                     <td>SmartIDyURL</td>
                     <td><input type="text" name='smartIdyURL' /></td>
                  </tr>
                  <tr>
                     <td>Language</td>
                     <td>
                        <select name="language">
                           <option value="en">English</option>
                           <option value="mr">Marathi</option>
                           <option value="hn">Hindi</option>
                        </select>
                     </td>
                  </tr>
                  <tr>
                     <td>Show Initial Profile</td>
                     <td>
                        <label htmlFor="business">
                           <input type="radio" id='business' name='IsBusinessProfile' checked={true} />
                           <span> Business </span>
                        </label>
                        &nbsp;&nbsp;
                        <label htmlFor="individual">
                           <input type="radio" id='Individual' name='IsBusinessProfile' />
                           <span> Individual </span>
                        </label>
                     </td>
                  </tr>
                  <tr>
                     <td>Profile Picture Style</td>
                     <td>
                        <label htmlFor="circle">
                           <input type="radio" id='circle' name='IsPicTypeCircle' checked={true} />
                           <span> Circle </span>
                        </label>
                        &nbsp;&nbsp;
                        <label htmlFor="square">
                           <input type="radio" id='square' name='IsPicTypeCircle' />
                           <span> Square </span>
                        </label>
                     </td>
                  </tr>
                  <tr>
                     <td>Theme</td>
                     <td>
                        <table >
                           <tr>
                              <td>
                                 Primary Color
                              </td>
                              <td>
                                 <input type='color' name="primaryColor" />
                              </td>
                           </tr>
                           <tr>
                              <td>
                                 Title Color
                              </td>
                              <td>
                                 <input type='color' name="titleColor" />
                              </td>
                           </tr>
                        </table>
                     </td>
                  </tr>

               </table>
               <div>
                  <button type="submit">Submit</button>
                  <button type="reset">Reset</button>
                  <button type="submit">Publish</button>
               </div>
            </form>
         </div>
      </div>

   )
}
export default Create;