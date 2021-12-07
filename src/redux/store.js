import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/user";
import themeReducer from "./slices/theme";
import languageReducer from "./slices/language";

const store = configureStore({
  reducer: {
    user: userReducer,
    theme: themeReducer,
    language: languageReducer,
  },
});

export default store;