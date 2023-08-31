import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {},
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload
    },
    addTrailerVideo: (state, action) => {
      state.trailerVideo = action.payload
    },
    addPopularVideo: (state, action) => {
      state.popularVideo = action.payload
    },
    addTrendingMovies: (state, action) => {
      state.trendingMovies = action.payload
    },
    addMoviesDetails: (state, action) => {
      state.moviesDetails = action.payload
    },

  }
})

export const { addNowPlayingMovies, addTrailerVideo, addPopularVideo, addTrendingMovies, addMoviesDetails } = movieSlice.actions
export default movieSlice.reducer