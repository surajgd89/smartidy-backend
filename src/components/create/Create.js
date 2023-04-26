import './Create.scss'
export default function Create() {
   return (
      <div className='create-form'>
         <form>
            <table>

               <tr>
                  <th colSpan="2">Individual Information</th>
               </tr>


               <tr>
                  <td width="200">Name</td>
                  <td><input type="text" name='name' /></td>
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


               <tr>
                  <th colSpan="2">Business Information</th>
               </tr>



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
                  <td><input type="text" name='gstin' /></td>
               </tr>
               <tr>
                  <td>MSME</td>
                  <td><input type="text" name='msme' /></td>
               </tr>
               <tr>
                  <td>FSSAI</td>
                  <td><input type="text" name='fssai' /></td>
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
                  <td><input type="text" name='upiId' /></td>
               </tr>

               <tr>
                  <td>About Business</td>
                  <td>

                     <table >
                        <tr>
                           <th>Paragraph</th>
                           <th>Action</th>
                        </tr>
                        <tr>
                           <td><textarea name="about1" rows="3"></textarea></td>
                           <td>
                              <button type='button'>Add</button>
                              <button type='button'>Remove</button>
                           </td>
                        </tr>




                     </table>

                  </td>
               </tr>
               <tr>
                  <td>Services</td>
                  <td>
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
                     <table >
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
                     <table >
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
                        <input type="radio" id='yes_bankAccount' name='bankAccount' value="yes" />
                        <span> Yes </span>
                     </label>
                     &nbsp;&nbsp;
                     <label htmlFor="no_bankAccount">
                        <input type="radio" id='no_bankAccount' name='bankAccount' value="no" />
                        <span> No </span>
                     </label>
                     <table >

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
                        <input type="radio" id='yes_efiles' name='efiles' value="yes" />
                        <span> Yes </span>
                     </label>
                     &nbsp;&nbsp;
                     <label htmlFor="no_efiles">
                        <input type="radio" id='no_efiles' name='efiles' value="no" />
                        <span> No </span>
                     </label>

                     <table >
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
                        <input type="radio" id='yes_links' name='links' value="yes" />
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
                  <td>Business Working Days</td>
                  <td>
                     <label htmlFor="yes_workingDayHrs">
                        <input type="radio" id='yes_workingDayHrs' name='workingDayHrs' />
                        <span> Yes </span>
                     </label>
                     &nbsp;&nbsp;
                     <label htmlFor="no_workingDayHrs">
                        <input type="radio" id='no_workingDayHrs' name='workingDayHrs' />
                        <span> No </span>
                     </label>
                     <table >
                        <tr>
                           <th>Closed</th>
                           <th>Day</th>
                           <th>Open At</th>
                           <th>Close At</th>

                        </tr>
                        <tr>
                           <td><input type='checkbox' name="closed" /></td>
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
                           <td><input type='checkbox' name="closed" /></td>
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
                           <td><input type='checkbox' name="closed" /></td>
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
                           <td><input type='checkbox' name="closed" /></td>
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
                           <td><input type='checkbox' name="closed" /></td>
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
                           <td><input type='checkbox' name="closed" /></td>
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
                           <td><input type='checkbox' name="closed" /></td>
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
                        <input type="radio" id='yes_social' name='social' value="yes" />
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

               <tr>
                  <th colSpan="2">SmartIDy Configuration</th>
               </tr>

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
                  <td>Show First Profile</td>
                  <td>
                     <label htmlFor="business">
                        <input type="radio" id='business' name='IsBusinessProfile' />
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
                  <td>Profile Picture Type</td>
                  <td>
                     <label htmlFor="circle">
                        <input type="radio" id='circle' name='IsPicTypeCircle' />
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

               <tr>
                  <td colSpan="2">
                     <button type="submit">Save</button>
                     <button type="reset">Cancel</button>
                     <button type="submit">Publish</button>
                  </td>
               </tr>


            </table>
         </form>
      </div>
   )
}
