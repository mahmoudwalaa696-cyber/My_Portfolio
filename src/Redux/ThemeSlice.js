import { createSlice } from "@reduxjs/toolkit";

// عند تعريف الـ slice
const initialState = {
  mode: localStorage.getItem("theme") || "light"
};

const ThemeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.mode = state.mode === "light" ? "dark" : "light";
      localStorage.setItem("theme", state.mode);
    }
  }
});

export const { toggleTheme } = ThemeSlice.actions

export default ThemeSlice .reducer