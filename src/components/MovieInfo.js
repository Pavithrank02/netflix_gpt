import React from 'react'
import { useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import useMovieSimilar from '../hooks/useMovieSimilar'
import MovieCard from './MovieCard'

const MovieInfo = () => {
  const history = useLocation()
  useMovieSimilar(history.pathname)

  const movieInfo = useSelector((store => store.movies?.moviesDetails))
  const movieNames = useSelector((store => store.movies?.similarMovies))
  return movieInfo && (
    <>
      <div className='absolute flex -mt-24 ml-6 md:-mt-48 md:ml-24'>
        <p className='font-bold text-white p-2'>Runtime: {movieInfo.runtime}Mins</p>
        <p className='font-bold text-white p-2'>Realeased: {movieInfo.release_date}📅</p>
        <p className='font-bold text-white p-2'>Rating: {Math.round(movieInfo.vote_average * 100) / 100}⭐</p>
      </div>
      <p className='font-bold text-3xl ml-4 md:ml-6 md:mt-2'>Similar Movies</p>
      <div className="p-4 m-4 bg-gray-700 text-white bg-opacity-2 ">
        <div className='flex flex-row overflow-x-scroll no-scrollbar '>
          {movieNames && movieNames.map((movieName, index) => (
            <div className=''>
              <MovieCard key={movieName.id} id={movieName.id} posterPath={movieName.poster_path
              } />
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default MovieInfo