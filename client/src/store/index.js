import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import storeSlice from "./slices/storeSlice";
const store = configureStore({
    reducer: {
        store: storeSlice,
    },
});
export default store;
export const useAppDispatch = useDispatch.withTypes();
export const useAppSelector = useSelector;
