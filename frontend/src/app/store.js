import { configureStore } from "@reduxjs/toolkit";
import userReducer from '../features/idyUser/userSlice';
import registerReducer from '../features/idyUser/registerSlice';
import loginReducer from '../features/idyUser/loginSlice';
import emailReducer from '../features/idyUser/emailSlice';
import resetPasswordReducer from '../features/idyUser/resetPasswordSlice';

export const store = configureStore({
   reducer: {
      idyUser: userReducer,
      registerRequest: registerReducer,
      loginRequest: loginReducer,
      verifyEmail: emailReducer,
      resetPassword: resetPasswordReducer,
   }
})
export default store;