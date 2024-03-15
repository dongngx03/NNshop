import { configureStore } from "@reduxjs/toolkit";
import products from "./slices/ProductSlice";

const store = configureStore({
    reducer : {
        products : products.reducer
    }
})

export default store