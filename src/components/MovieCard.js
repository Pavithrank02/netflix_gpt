import React from 'react'
import { useNavigate } from 'react-router-dom'
import { IMG_CDN } from '../utils/constants'
import { useDispatch } from 'react-redux'
import { addMoviesDetails } from '../utils/movieSlice'

const MovieCard = ({id, posterPath }) => {
  const navigate = useNavigate()

  const handleLink = () => {
    console.log("clicked id number", id)
    navigate(`/${id}`)
    console.log("clicked")
  }
  return (
    <div className='w-36 pr-4 cursor-pointer' onClick={handleLink}>
      <img
        alt='Movie card'
        src={IMG_CDN + posterPath}
      />
    </div>
  )
}

export default MovieCard