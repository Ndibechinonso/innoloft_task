import rootReducer from "./rootReducer";
import { createSlice, configureStore } from '@reduxjs/toolkit'

const store = configureStore({reducer: rootReducer})

export default store;