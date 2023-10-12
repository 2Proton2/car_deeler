import { configureStore } from '@reduxjs/toolkit';
import userReducers from './slices/userSlice';
import authReducers from './slices/authSlice';

const store = configureStore({
    reducer: {
        userReducers,
        authReducers
    }
});

export default store;