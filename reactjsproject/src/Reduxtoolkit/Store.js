import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../Reduxtoolkit/Slice"
export const store=configureStore({
    reducer:{cartItems:productReducer}
})