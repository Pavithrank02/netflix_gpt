import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import useMovieDetails from '../hooks/useMovieDetails'
import Header from './Header'
import GptSearch from './GptSearch'

const MovieDetails = () => {
  const dispatch = useDispatch()
  let location = useLocation();
  // useMovieDetails(location.pathname)
  return (
    <div>
      <Header />

    </div>
  )
}

export default MovieDetails