import { createSlice } from "@reduxjs/toolkit";
const CounterReducer = createSlice({
    name:'counter',
    initialState:{
        value:0
    },
    reducers:{
        increase:(state)=>{
            state.value = state.value +1 

        },
        decrease:(state)=>{
            state.value =state.value -1 
        },
        reset:(state)=>{
          state.value = 0
        }
    }
});

export const {increase,decrease,reset} = CounterReducer.actions
export default CounterReducer.reducer