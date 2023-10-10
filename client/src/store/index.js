import { configureStore } from '@reduxjs/toolkit';
import userReducers from './slices/userSlice';

const store = configureStore({
    reducer: {
        userReducers
    }
});

export default store;