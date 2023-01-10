import { createSlice } from "@reduxjs/toolkit";

const initialState={
    numOfCake:10
}

const cakeSlice=createSlice({
    name:'cake',
    initialState,
    reducers:{
        ordered:state=>{
            state.numOfCake--
        },
        restocked:state=>{
            state.numOfCake++
        }
    }
})

export const {ordered,restocked}=cakeSlice.actions
export default cakeSlice.reducer