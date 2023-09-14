import { createSlice } from "@reduxjs/toolkit";

export const randomSlice = createSlice({
  name: "random",
  initialState: [],
  reducers: {
    // khai bao cac reducer
    random: (state, action) => {
      console.log(action);
      //   console.log(action);
      state.push(action.payload);
    },
  },
});
// export cac reducer
export const { random } = randomSlice.actions;
export default randomSlice.reducer;
