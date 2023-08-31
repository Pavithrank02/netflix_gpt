import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { API_OPTIONS } from '../utils/constants'
import { addSimilarMovies } from '../utils/movieSlice'


const useMovieSimilar = (props) => {
  console.log("props", props)
  // Fetch Data from TMDB API and update store
  const dispatch = useDispatch();

  const similarMovies = useSelector(
    (store) => store.movies.similarMovies
  );

  const getSimilarMovies = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie${props}/similar?language=en-US&page=1`,
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addSimilarMovies(json.results));
  };

  useEffect(() => {
    getSimilarMovies();
  }, []);
};

export default useMovieSimilar;