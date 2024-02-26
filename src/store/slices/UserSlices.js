import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const loginUser = createSlice({
  name: "user",
  initialState: [],
  reducers: {
    addUser: (state, action) => {
      state.push(action.payload);
      console.log("action", action.payload);
    },
  },
});

export default loginUser.reducer;
export const { addUser } = loginUser.actions;
