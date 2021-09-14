import { configureStore } from '@reduxjs/toolkit';
import { list } from "./redux/reducer";

export default configureStore({
    reducer: { list },
    devTools: process.env.NODE_ENV !== "production",
});
