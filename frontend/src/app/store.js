import { configureStore } from '@reduxjs/toolkit';
import IsLoggedInSlice from '../reducers/IsLoggedIn';

export const store = configureStore({
  reducer: IsLoggedInSlice.reducer
});

