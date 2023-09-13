import React from 'react'
import { useSelector } from 'react-redux'
import VideoTitle from './VideoTitle'
import VideoBackground from './VideoBackground'
import { useLocation } from 'react-router-dom'


const VideoPlayer = () => {
  const history = useLocation()
  const movies = useSelector((store) => store.movies?.moviesDetails)
  if (!movies) return;

  return (
    <div className='pt-[30%] bg-black md:pt-0'>
      <VideoTitle title={movies.original_title} overview={movies.overview} />
      <VideoBackground movieId={history.pathname} />
    </div>
  )
}

export default VideoPlayer