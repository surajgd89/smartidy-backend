import './Create.scss'
export default function Create() {
   return (
      <div>
         <form>
            <table cellPadding={5} cellSpacing={0} border={1}>

               <tr>
                  <th colSpan="2">Individual</th>
               </tr>


               <tr>
                  <td>Name</td>
                  <td><input type="text" name='name' /></td>
               </tr>
               <tr>
                  <td>Experties</td>
                  <td><input type="text" name='experties' /></td>
               </tr>
               <tr>
                  <td>Profile Picture</td>
                  <td><input type="file" name='profilePic' /></td>
               </tr>
               <tr>
                  <td>Mobile</td>
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
                  <td>Chat Application</td>
                  <td>
                     <table cellPadding={5} cellSpacing={0} border={1}>
                        <tr>
                           <th>Title</th>
                           <th>Value</th>
                        </tr>
                        <tr>
                           <td>
                              WhatsApp No.
                           </td>
                           <td>
                              <input type='tel' name="whatsapp" />
                           </td>
                        </tr>
                        <tr>
                           <td>
                              Telegram ID
                           </td>
                           <td>
                              <input type='text' name="telegram" />
                           </td>
                        </tr>
                     </table>

                  </td>
               </tr>

               <tr>
                  <th colSpan="2">Business</th>
               </tr>



               <tr>
                  <td>Name</td>
                  <td><input type="text" name='name' /></td>
               </tr>
               <tr>
                  <td>Business Logo</td>
                  <td><input type="file" name='logo' /></td>
               </tr>
               <tr>
                  <td>Established Date</td>
                  <td><input type="date" name='estDate' /></td>
               </tr>
               <tr>
                  <td>Mobile</td>
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
                  <td>Desgnation</td>
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
                  <td>Map URL</td>
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

                     <table cellPadding={5} cellSpacing={0} border={1} width="100%">
                        <tr>
                           <th>Paragraph 1</th>
                           <td><textarea name="about1" rows="3"></textarea></td>
                        </tr>

                        <tr>
                           <th>Paragraph 2</th>
                           <td><textarea name="about2" rows="3"></textarea></td>
                        </tr>

                        <tr>
                           <th>Paragraph 3</th>
                           <td><textarea name="about3" rows="3"></textarea></td>
                        </tr>


                     </table>

                  </td>
               </tr>
               <tr>
                  <td>Services</td>
                  <td>
                     <table cellPadding={5} cellSpacing={0} border={1} width="100%">
                        <tr>
                           <th>Service 1</th>
                           <td><input type="text" name='services1' /> </td>
                        </tr>
                        <tr>
                           <th>Service 2</th>
                           <td><input type="text" name='services2' /> </td>
                        </tr>
                        <tr>
                           <th>Service 3</th>
                           <td><input type="text" name='services3' /> </td>
                        </tr>
                        <tr>
                           <th>Service 4</th>
                           <td><input type="text" name='services4' /> </td>
                        </tr>
                        <tr>
                           <th>Service 5</th>
                           <td><input type="text" name='services5' /> </td>
                        </tr>
                        <tr>
                           <th>Service 6</th>
                           <td><input type="text" name='services6' /> </td>
                        </tr>
                     </table>
                  </td>
               </tr>
               <tr>
                  <td>Chat Application</td>
                  <td>
                     <table cellPadding={5} cellSpacing={0} border={1}>
                        <tr>
                           <th>Title</th>
                           <th>Value</th>
                        </tr>
                        <tr>
                           <td>
                              WhatsApp No.
                           </td>
                           <td>
                              <input type='tel' name="whatsapp" />
                           </td>
                        </tr>
                        <tr>
                           <td>
                              Telegram ID
                           </td>
                           <td>
                              <input type='text' name="telegram" />
                           </td>
                        </tr>
                     </table>

                  </td>
               </tr>

               <tr>
                  <td>Gallery</td>
                  <td>
                     <table cellPadding={5} cellSpacing={0} border={1}>
                        <tr>
                           <th>Title</th>
                           <th>Upload Image</th>
                        </tr>
                        <tr>
                           <td>
                              <input type='text' name="title" placeholder='Enter Image Title 1' />
                           </td>
                           <td>
                              <input type='file' name="src" />
                           </td>
                        </tr>

                        <tr>
                           <td>
                              <input type='text' name="title" placeholder='Enter Image Title 2' />
                           </td>
                           <td>
                              <input type='file' name="src" />
                           </td>
                        </tr>

                        <tr>
                           <td>
                              <input type='text' name="title" placeholder='Enter Image Title 3' />
                           </td>
                           <td>
                              <input type='file' name="src" />
                           </td>
                        </tr>

                        <tr>
                           <td>
                              <input type='text' name="title" placeholder='Enter Image Title 4' />
                           </td>
                           <td>
                              <input type='file' name="src" />
                           </td>
                        </tr>

                        <tr>
                           <td>
                              <input type='text' name="title" placeholder='Enter Image Title 5' />
                           </td>
                           <td>
                              <input type='file' name="src" />
                           </td>
                        </tr>

                        <tr>
                           <td>
                              <input type='text' name="title" placeholder='Enter Image Title 6' />
                           </td>
                           <td>
                              <input type='file' name="src" />
                           </td>
                        </tr>

                     </table>

                  </td>
               </tr>

               <tr>
                  <td>Videos</td>
                  <td>
                     <table cellPadding={5} cellSpacing={0} border={1}>
                        <tr>
                           <th>Title</th>
                           <th>Enter URL</th>
                        </tr>
                        <tr>
                           <td>
                              <input type='text' name="title" placeholder='Enter Video Title 1' />
                           </td>
                           <td>
                              <input type='url' name="url" />
                           </td>
                        </tr>

                        <tr>
                           <td>
                              <input type='text' name="title" placeholder='Enter Video Title 2' />
                           </td>
                           <td>
                              <input type='url' name="url" />
                           </td>
                        </tr>

                        <tr>
                           <td>
                              <input type='text' name="title" placeholder='Enter Video Title 3' />
                           </td>
                           <td>
                              <input type='url' name="url" />
                           </td>
                        </tr>

                        <tr>
                           <td>
                              <input type='text' name="title" placeholder='Enter Video Title 4' />
                           </td>
                           <td>
                              <input type='url' name="url" />
                           </td>
                        </tr>

                        <tr>
                           <td>
                              <input type='text' name="title" placeholder='Enter Video Title 5' />
                           </td>
                           <td>
                              <input type='url' name="url" />
                           </td>
                        </tr>

                        <tr>
                           <td>
                              <input type='text' name="title" placeholder='Enter Video Title 6' />
                           </td>
                           <td>
                              <input type='url' name="url" />
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
                     <table cellPadding={5} cellSpacing={0} border={1}>

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
                     <table cellPadding={5} cellSpacing={0} border={1}>
                        <tr>
                           <td>
                              <form>
                                 <input type='text' name="title" />
                                 <input type='file' name="src" />
                                 <input type='submit' value="Add" />
                              </form>
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
                     <table cellPadding={5} cellSpacing={0} border={1}>
                        <tr>
                           <th>Title</th>
                           <th>Enter URL</th>
                        </tr>
                        <tr>
                           <td>
                              <input type='text' name="title" placeholder='Enter URL 1' />
                           </td>
                           <td>
                              <input type='url' name="url" />
                           </td>
                        </tr>

                        <tr>
                           <td>
                              <input type='text' name="title" placeholder='Enter URL 2' />
                           </td>
                           <td>
                              <input type='url' name="url" />
                           </td>
                        </tr>

                        <tr>
                           <td>
                              <input type='text' name="title" placeholder='Enter URL 3' />
                           </td>
                           <td>
                              <input type='url' name="url" />
                           </td>
                        </tr>

                        <tr>
                           <td>
                              <input type='text' name="title" placeholder='Enter URL 4' />
                           </td>
                           <td>
                              <input type='url' name="url" />
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
                     <table cellPadding={5} cellSpacing={0} border={1}>
                        <tr>
                           <th>Closed</th>
                           <th>Day</th>
                           <th>Open</th>
                           <th>Close</th>

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

                     <table cellPadding={5} cellSpacing={0} border={1}>
                        <tr>
                           <th>Title</th>
                           <th>url</th>
                        </tr>
                        <tr>
                           <td>
                              <input type='text' name="title" value="Facebook" readonly={true} />
                           </td>
                           <td>
                              <input type='url' name="url" />
                           </td>
                        </tr>

                        <tr>
                           <td>
                              <input type='text' name="title" value="Twitter" readonly={true} />
                           </td>
                           <td>
                              <input type='url' name="url" />
                           </td>
                        </tr>

                        <tr>
                           <td>
                              <input type='text' name="title" value="LinkedIn" readonly={true} />
                           </td>
                           <td>
                              <input type='url' name="url" />
                           </td>
                        </tr>

                        <tr>
                           <td>
                              <input type='text' name="title" value="Telegram" readonly={true} />
                           </td>
                           <td>
                              <input type='url' name="url" />
                           </td>
                        </tr>

                        <tr>
                           <td>
                              <input type='text' name="title" value="Instagram" readonly={true} />
                           </td>
                           <td>
                              <input type='url' name="url" />
                           </td>
                        </tr>

                        <tr>
                           <td>
                              <input type='text' name="title" value="Youtube" readonly={true} />
                           </td>
                           <td>
                              <input type='url' name="url" />
                           </td>
                        </tr>

                        <tr>
                           <td>
                              <input type='text' name="title" value="Catalogue" readonly={true} />
                           </td>
                           <td>
                              <input type='url' name="url" />
                           </td>
                        </tr>

                     </table>


                  </td>
               </tr>

               <tr>
                  <th colSpan="2">Configuration</th>
               </tr>

               <tr>
                  <td>smartIdyURL</td>
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
                        <span>Business</span>
                     </label>
                     <label htmlFor="individual">
                        <input type="radio" id='Individual' name='IsBusinessProfile' />
                        <span>Individual</span>
                     </label>
                  </td>
               </tr>

               <tr>
                  <td>Profile Picture Type</td>
                  <td>
                     <label htmlFor="circle">
                        <input type="radio" id='circle' name='IsPicTypeCircle' />
                        <span>Circle</span>
                     </label>
                     <label htmlFor="square">
                        <input type="radio" id='square' name='IsPicTypeCircle' />
                        <span>Square</span>
                     </label>
                  </td>
               </tr>

               <tr>
                  <td>Theme</td>
                  <td>


                     <table cellPadding={5} cellSpacing={0} border={1}>
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
         </form>
      </div>
   )
}
