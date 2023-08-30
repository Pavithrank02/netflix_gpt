import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptSuggestion from './GptSuggestion'
import { BG_URL } from '../utils/constants'

const GptSearch = () => {
  return (
    <div>
      <div className='absolute -z-20'>
        <img
          src={BG_URL}
          alt='Netflix Logo'
        />
      </div>
      <GptSearchBar />
      <GptSuggestion />
    </div>
  )
}

export default GptSearch