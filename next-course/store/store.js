import { configureStore } from '@reduxjk/toolkit';
import uiReducer from './uiSlice';

export const store = configureStore({
    reducer: {
        ui: uiReducer,
    },
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware({
            serializableCheck: false,
            immutableCheck: false,
        }),
});