import React from 'react'
import { useSelector } from 'react-redux'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer'
import SecondaryContainer from './SecondaryContainer'
import usePopularMovies from '../hooks/usePopularMovies'
import useTrendingMovies from '../hooks/useTrendingMovies'
import Header from './Header'
import GptSearch from './GptSearch'


const Browse = () => {

  const showGptSearch = useSelector(store => store.gpt.showGpt)

  useNowPlayingMovies()
  usePopularMovies()
  useTrendingMovies()

  return (
    <div>
      <Header />
      {showGptSearch ? <GptSearch /> : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}

    </div>
  )
}

export default Browse