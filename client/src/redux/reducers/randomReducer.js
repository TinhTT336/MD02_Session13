import { ACT_RANDOM } from "../constrains";

const initialState = [];
export const randomReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACT_RANDOM:
      return [...state, action.payload];
    default:
      return state;
  }
};
