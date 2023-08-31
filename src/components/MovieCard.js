import React from 'react'
import { useNavigate } from 'react-router-dom'
import { IMG_CDN } from '../utils/constants'
import { useDispatch } from 'react-redux'
import { addMoviesDetails } from '../utils/movieSlice'

const MovieCard = ({id, posterPath }) => {
  const navigate = useNavigate()

  const handleLink = () => {
    navigate(`/${id}`)
  }
  return (
    <div className='w-36 pr-4 cursor-pointer hover:opacity-70' onClick={handleLink}>
      <img
        alt='Movie card'
        src={IMG_CDN + posterPath}
      />
    </div>
  )
}

export default MovieCard