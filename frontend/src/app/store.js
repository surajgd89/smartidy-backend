import { configureStore } from "@reduxjs/toolkit";
import userReducer from '../features/user/userSlice';
import loginReducer from '../features/login/loginSlice';
import registerReducer from '../features/register/registerSlice';

export const store = configureStore({
   reducer: {
      idyUser: userReducer,
      idyLoginUser: loginReducer,
      idyRegisterUser: registerReducer,
   }
})
export default store;