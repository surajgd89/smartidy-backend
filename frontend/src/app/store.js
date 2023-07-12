import { configureStore } from "@reduxjs/toolkit";
import userReducer from '../features/idyUser/userSlice';
import registerReducer from '../features/idyUser/registerSlice';
import loginReducer from '../features/idyUser/loginSlice';

export const store = configureStore({
   reducer: {
      idyUser: userReducer,
      registerRequest: registerReducer,
      loginRequest: loginReducer,
   }
})
export default store;