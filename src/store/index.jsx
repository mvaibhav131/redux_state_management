
import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./Reducer/themeReducer";

const store = configureStore({
    reducer:{
        theme:themeReducer,
        // Add more reducer here
    },
});

export default store;