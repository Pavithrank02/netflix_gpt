import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import useMovieDetails from '../hooks/useMovieDetails'
import VideoPlayer from './VideoPlayer'
import MovieInfo from './MovieInfo'
import { Logo } from '../utils/constants'

const MovieDetails = () => {
  const history = useLocation()
  const navigate = useNavigate()
  // console.log(history)
  useMovieDetails(history.pathname)
  const handleClick = () => {
    navigate('/browse')
  }

  return (
    <div className='flex flex-col bg-black text-white w-screen'>
      <div className='absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between'>
       <img
       onClick={handleClick}
        className=' w-44 mx-auto md:mx-0 z-10 cursor-pointer'
        src={Logo} />
      </div>
      <VideoPlayer />
      <MovieInfo />
    </div>
  )
}

export default MovieDetails