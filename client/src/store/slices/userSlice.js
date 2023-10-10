import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
    name: 'user',
    initialState: {
        userType: ''
    },
    reducers: {
        setUserType : (state, action) => {
            return action.payload;
        }
    }
});

export const { setUserType } = userSlice.actions;

export default userSlice.reducer;