import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = "Ingles";

const languageSlice = createSlice({
  name: "language",
  initialState: { value: initialStateValue },
  reducers: {
    changeLanguage: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { changeLanguage } = languageSlice.actions;
export default languageSlice.reducer;
