import { configureStore } from "@reduxjs/toolkit";
import IdyUserReducer from '../features/IdyUser/IdyUserSlice';

export const store = configureStore({
   reducer: {
      IdyUser: IdyUserReducer,
   }
})
export default store;