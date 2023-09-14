import { createSlice } from "@reduxjs/toolkit";
const countSlice = createSlice({
  name: "count",
  initialState: { value: 0 }, // doi voi cac gia tri nguyen thuy can co {value: gia tri}, gia tri tham chieu khai bao truc tiep ([],{})
  reducers: {
    increase: (state, action) => {
      //   console.log(action);
      state.value += 1;
    },
    decrease: (state, action) => {
      state.value -= 1;
    },
  },
});

// type la name/ten reducer
export const { increase, decrease } = countSlice.actions; //export action ra ben ngoai
export default countSlice.reducer;
