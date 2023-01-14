import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux/es/exports";
import { TypedUseSelectorHook } from "react-redux/es/types";
import PersonSlice from "./slice/personSlice";


export type RootState = ReturnType<typeof store.getState>
export const store = configureStore({
    reducer: {
        person: PersonSlice.reducer
    }, 
    
})

export const useAppDispatch: ()=> typeof store.dispatch=useDispatch;
export const useAppSelector:TypedUseSelectorHook<ReturnType<typeof store.getState>>=useSelector