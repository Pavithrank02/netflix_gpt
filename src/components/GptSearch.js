import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptSuggestion from './GptSuggestion'
import { BG_URL } from '../utils/constants'

const GptSearch = () => {
  return (
    <>
      <div className='absolute -z-20'>
        <img
        className='h-screen object-cover'
          src={BG_URL}
          alt='Netflix Background'
        />
      </div>
      <div className=''>
        <GptSearchBar />
        <GptSuggestion />
      </div>
    </>
  )
}

export default GptSearch