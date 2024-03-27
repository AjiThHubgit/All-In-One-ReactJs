import { createSlice } from "@reduxjs/toolkit";

console.log('counterSlice');
const initialState = {
    count: 0
}
    debugger;
export const counterSlice = createSlice({
    name: 'Counter',
    initialState,
    reducers: {
        increment: (state) => {
            state.count += 1;
        },
        decrement: (state) => {
            state.count -= 1;
        },
        reset: (state) => {
            state.count = 0;
        },
        incrementByAmount: (state, action) => {
            state.count += action.payload;
        }
    }
})

export const { increment, decrement, reset, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;