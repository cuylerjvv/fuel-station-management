import { configureStore } from "@reduxjs/toolkit";
import shiftlistReducer from "./shiftlistReducer";
import firstdaysReducer from "./firstdaysReducer";

export default configureStore({
    reducer: {
        shiftlist: shiftlistReducer,
        firstdays: firstdaysReducer
    }
});  