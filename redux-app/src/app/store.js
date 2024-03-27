import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './feature/counter/counterSlice';

console.log('store');
export const store = configureStore({
    reducer: {
        counter: counterReducer,
    },
})
