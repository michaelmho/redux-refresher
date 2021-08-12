import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = { counter: 0, toggle: true };

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment(state) {
      state.counter += 1;
    },
    decrement(state) {
      state.counter -= 1;
    },
    increment5(state, action) {
      state.counter += action.payload;
    },
    toggle(state) {
      state.toggle = !state.toggle;
    },
  },
});

const store = configureStore({
  reducer: { counterSlice: counterSlice.reducer },
});

export default store;
export const counterActions = counterSlice.actions;
