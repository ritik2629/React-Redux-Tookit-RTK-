import { createSlice } from "@reduxjs/toolkit";

const initialState={
    numOfIcecream:20
}

const icecreamSlice=createSlice({
    name:'icecream',
    initialState,
    reducers:{
        ordered:state=>{
            state.numOfIcecream--
        },
        restocked:state=>{
            state.numOfIcecream++
        }
    },
    extraReducers:builder=>{
        builder.addCase('cake/ordered',state=>{
            state.numOfIcecream--
        })
    }
})

export const {ordered,restocked} =icecreamSlice.actions
export default icecreamSlice.reducer