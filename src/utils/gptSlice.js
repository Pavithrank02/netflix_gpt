import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGpt: false
  },
  reducers: {
    toggleGptSearch: (state) => {
      state.showGpt = !state.showGpt
    },
    addGptMovieResult: (state, action) => {
      const { movieNames, movieResults } = action.payload;
      state.movieNames = movieNames;
      state.movieResults = movieResults;
    },
  }
})

export const { toggleGptSearch, addGptMovieResult } = gptSlice.actions
export default gptSlice.reducer