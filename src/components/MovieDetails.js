import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import useMovieDetails from '../hooks/useMovieDetails'
import VideoPlayer from './VideoPlayer'
import MovieInfo from './MovieInfo'

const MovieDetails = () => {
  const history = useLocation()
  // console.log(history)
  useMovieDetails(history.pathname)

  return (
    <div>
      <VideoPlayer />
      <MovieInfo />
    </div>
  )
}

export default MovieDetails