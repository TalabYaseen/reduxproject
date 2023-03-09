import { createSlice } from "@reduxjs/toolkit";


const UserInfo = createSlice({
    name: 'UserInfo',
    initialState:{ user : {}},
    reducers: {
        login(state, action){
            state.user = res.data;
         },
         }
//     // }
})
export const useractions = UserInfo.actions;

export default UserInfo