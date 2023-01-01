import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const userData = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.push(action.payload);
      // console.log(action);
    },
    deleteUser: (state, action) => {
      const { id } = action.payload;
      const deleteUser = state.find((user) => user.id === id);
      if (deleteUser) {
        return state.filter((user) => user.id !== id);
      }
    },
    Checklist: (state, action) => {
        const { id } = action.payload;
        const getState = state;
        const selected = state.filter((user) => user.id === id);
        if (selected) {
          let check = selected[0].complete ? false : true;
          return void getState.map((val) => {
            if (val.id === id) {
              val.complete = check;
            }
          });
        }
      },
  },
});
export const { addUser, deleteUser,Checklist } = userData.actions;
export default userData.reducer;
