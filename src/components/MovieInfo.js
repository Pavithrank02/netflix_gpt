import React from 'react'
import { useSelector } from 'react-redux'
import useMovieDetails from '../hooks/useMovieDetails'
import { useLocation } from 'react-router-dom'
import useMovieSimilar from '../hooks/useMovieSimilar'
import MovieList from './MovieList'

const MovieInfo = () => {
  const history = useLocation()
  useMovieSimilar(history.pathname)

const movieInfo = useSelector((store => store.movies?.moviesDetails))
const movieNames = useSelector((store => store.movies?.similarMovies))
  return movieInfo && (
    <>
      <div className='absolute flex -mt-32 ml-24'>
        <p className='font-bold text-white p-2'>Runtime: {movieInfo.runtime}Mins</p>
        <p className='font-bold text-white p-2'>Realeased: {movieInfo.release_date}📅</p>
        <p className='font-bold text-white p-2'>Rating: {Math.round(movieInfo.vote_average * 100) / 100}⭐</p>
      </div>
      <div className="p-4 m-4 bg-black text-white bg-opacity-90">
        <div>
          {movieNames && movieNames.map((movieName, index) => (
console.log("h", movieNames)
            // <MovieList
            //   key={movieName.id}
            //   title={movieName.title}
            //   movies={movieNames}
            // />
          ))}
        </div>
      </div>
    </>
  )
}

export default MovieInfo