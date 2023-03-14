import { createSlice } from "@reduxjs/toolkit";


const IsLoggedInSlice = createSlice({
    name: 'IsLoggedIn',
    initialState:{ IsLoggedIn : true},
    reducers: {
        login(state, action){
            state.IsLoggedIn = true;
         },logout(state, action){
            state.IsLoggedIn = false;
         }
         }
//     // }
})
export const IsLoggedInactions = IsLoggedInSlice.actions;

export default IsLoggedInSlice