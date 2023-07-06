import { useState } from 'react';
import './Create.scss'

import Individual from './Individual';
import Business from './Business';
import Configuration from './Configuration';



function Create() {

   const [individualForm, setIndividualForm] = useState(true);
   const [businessForm, setBusinessForm] = useState(false);
   const [configurationForm, setConfigurationForm] = useState(false);


   // if (individualForm) {
   //    setBusinessForm(false)
   //    setConfigurationForm(false)
   // } else if (businessForm) {
   //    setIndividualForm(false)
   //    setConfigurationForm(false)
   // } else if (configurationForm) {
   //    setIndividualForm(false)
   //    setBusinessForm(false)
   // }

   return (
      <div className='page-section small-page '>
         <h2 className='page-header'>Create SmartIDy</h2>
         <div className='page-body'>
            <div className='form-statusbar'>
               <div className={`progress ${true ? 'complete' : ''}`}>
                  <span className='bar'>
                     <span>1</span>
                  </span>
                  <span className='title'>Individual</span>
               </div>
               <div className={`progress ${true ? 'complete' : ''}`}>
                  <span className='bar'>
                     <span>2</span>
                  </span>
                  <span className='title'>Business</span>
               </div>
               <div className={`progress ${true ? 'complete' : ''}`}>
                  <span className='bar'>
                     <span>3</span>
                  </span>
                  <span className='title'>Configuration</span>
               </div>
            </div>

            <Individual />
            <Business />
            <Configuration />

         </div>
      </div>
   )
}
export default Create;