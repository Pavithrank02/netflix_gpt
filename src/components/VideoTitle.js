import React from 'react'

const VideoTitle = ({ title, overview }) => {
  return (
    <div className='w-screen aspect-video pt-[20%] px-24 absolute text-white bg-gradient-to-r from-black'>
      <h1 className='text-6xl font-bold'>{title}</h1>
      <p className='py-6 text-lg w-1/4'>{overview}</p>
      <div className='my-4'>
        <button className='px-8 py-3 mr-2 bg-white text-black font-bold rounded-md hover:opacity-80'  >▶Play</button>
        <button className='px-7 py-2 bg-slate-500 text-white rounded-md hover:opacity-80'> ℹ More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle