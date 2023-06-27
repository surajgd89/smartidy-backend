import { configureStore } from "@reduxjs/toolkit";
import userReducer from '../features/user/userSlice';
import isRegEmailReducer from '../features/user/isRegEmailSlice';

export const store = configureStore({
   reducer: {
      idyUser: userReducer,
      isReg: isRegEmailReducer,
   }
})
export default store;