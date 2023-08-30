import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGpt: false
  },
  reducers: {
    toggleGptSearch: (state, action) => {
      state.showGpt = !state.showGpt
    }, 
    addGptMovieResult: (state, action) => {
      state.movieVideo = action.payload
    },
  }
})

export const {toggleGptSearch, addGptMovieResult} = gptSlice.actions
export default gptSlice.reducer