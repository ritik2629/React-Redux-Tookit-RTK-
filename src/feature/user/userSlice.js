import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState={
    loading:false,
    users:[],
    error:null
}

export const fetchUser=createAsyncThunk('user/fetchuser',()=>{
    return axios.get('https://jsonplaceholder.typicode.com/users')
    .then((response)=>response.data.map((user)=>user.id))
})
   
const userSlice=createSlice({
    name:'user',
    initialState,
    extraReducers:builder=>{
        builder.addCase(fetchUser.pending,state=>{
            state.loading=true
        })
        builder.addCase(fetchUser.fulfilled,(state,action)=>{
            state.loading=false,
            state.users=action.payload
            state.error=null
        })
        builder.addCase(fetchUser.rejected,(state,action)=>{
            state.loading=false
            state.users=[]
            state.error=action.error.message
        })
    }
})

export default userSlice.reducer;