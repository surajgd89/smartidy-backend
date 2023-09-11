import { useState } from 'react';
import { TwitterPicker } from 'react-color';
import { useSelector } from 'react-redux';

function Configuration({ prevStep, setConfigurationStep }) {
   const { config } = useSelector(state => state.idyUser.data);
   //Configuration=============================================
   const [errors, setErrors] = useState({});
   const [PrimaryColor, setPrimaryColor] = useState('#ff6600');
   const [TitleColor, setTitleColor] = useState('#411f85');

   const handlePrimaryColorChange = (color, event) => {
      setPrimaryColor(color.hex)
   }
   const handleTitleColorChange = (color, event) => {
      setTitleColor(color.hex)
   }

   const handleSubmit = (e) => {
      e.preventDefault();
      setConfigurationStep(true)

      const errors = {};

      if (!PrimaryColor) {
         errors.PrimaryColor = 'Primary Color is required';
      }

      if (!TitleColor) {
         errors.TitleColor = 'Title Color is required';
      }

      setErrors(errors);

      if (Object.keys(errors).length === 0) {
         // Submit the form
      }
   };

   return (
      <form onSubmit={handleSubmit}>
         <div className="panel step step-3">
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
                        <TwitterPicker onChange={handlePrimaryColorChange} color={PrimaryColor} colors={['#FF6600']} />
                     </div>
                  </div>
                  <div className="col-12">
                     <div className='form-group'>
                        <label className='control-label' >Theme Title Color</label>
                        <TwitterPicker onChange={handleTitleColorChange} color={TitleColor} colors={['#411F85']} />
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
               <button type="reset" className='btn btn-secondary' onClick={prevStep} >Back</button>
               <button type="submit" className='btn btn-primary' onClick={handleSubmit}>Save</button>
               <button type="button" className='btn btn-primary'>Publish</button>
            </div>
         </div>
      </form>
   )
}

export default Configuration