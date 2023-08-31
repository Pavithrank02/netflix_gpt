import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { API_OPTIONS } from '../utils/constants'
import { addMoviesDetails } from '../utils/movieSlice'


const useMovieDetails = (props) => {
  // Fetch Data from TMDB API and update store
  const dispatch = useDispatch();

  const movieDetails = useSelector(
    (store) => store.movies.movieDetails
  );

  const getMovieDetails = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie${props}?language=en-US`,
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addMoviesDetails(json));
  };

  useEffect(() => {
   getMovieDetails();
  }, []);
};

export default useMovieDetails;