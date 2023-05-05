import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {
    name: "",
    email: "",
    phone: "",
  },
  plan: {},
  addon: [],
  total: 0,
};
const planSlice = createSlice({
  name: "plan",
  initialState,
  reducers: {
    planUpdate: (state, action) => {
      state.plan = action.payload;
    },
    addonUpdate: (state, action) => {
      state.addon = action.payload;
    },
    getTotal: (state, action) => {
      let i = 0;
      state.addon.map((item) => {
        i += item.price;
      });

      state.total = parseInt(state.plan.price) + parseInt(i);
      console.log(state.total);
    },
  },
});
export const { addonUpdate, planUpdate, getTotal } = planSlice.actions;
export default planSlice.reducer;
