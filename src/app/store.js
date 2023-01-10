import { configureStore } from "@reduxjs/toolkit";
import cakeSlice from "../feature/cake/cakeSlice";
import logger from "redux-logger";
import icecreamSlice from "../feature/Icecream/icecreamSlice";
import userSlice from "../feature/user/userSlice";
const store=configureStore({
    reducer:{
        cake:cakeSlice,
        icecream:icecreamSlice,
        user:userSlice
    },
    middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(logger)
})

export default store;