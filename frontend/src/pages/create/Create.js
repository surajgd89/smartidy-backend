import { useState } from 'react';

import Individual from './Individual';
import Business from './Business';
import Configuration from './Configuration';
import './Create.scss'


function Create() {
   const [currentStep, setCurrentStep] = useState(1);
   const [individualStep, setIndividualStep] = useState(false);
   const [businessStep, setBusinessStep] = useState(false);
   const [configurationStep, setConfigurationStep] = useState(false);



   const nextStep = () => {
      setCurrentStep((nextStep) => nextStep + 1);
   };

   const prevStep = () => {
      setCurrentStep((prevStep) => prevStep - 1);
   };

   const renderStep = () => {
      switch (currentStep) {
         case 1:
            return <Individual nextStep={nextStep} setIndividualStep={setIndividualStep} />;
         case 2:
            return <Business nextStep={nextStep} prevStep={prevStep} setBusinessStep={setBusinessStep} />;
         case 3:
            return <Configuration prevStep={prevStep} setConfigurationStep={setConfigurationStep} />;
         default:
            return null;
      }
   };

   return (
      <div className='page-section small-page '>
         <div className='page-body'>
            <div className='form-statusbar'>
               <div className={`progress ${individualStep ? 'complete' : ''}`}>
                  <span className='bar'>
                     <span>1</span>
                  </span>
                  <span className='title'>Individual</span>
               </div>
               <div className={`progress ${businessStep ? 'complete' : ''}`}>
                  <span className='bar'>
                     <span>2</span>
                  </span>
                  <span className='title'>Business</span>
               </div>
               <div className={`progress ${configurationStep ? 'complete' : ''}`}>
                  <span className='bar'>
                     <span>3</span>
                  </span>
                  <span className='title'>Configuration</span>
               </div>
            </div>

            {renderStep()}

         </div>
      </div>
   )
}
export default Create;