import React from 'react'
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptSuggestion = () => {

  const  movieResults  = useSelector((store) => store.gpt?.movieVideo);
  // console.log(movieResults)
  if (!movieResults) return null;

  return (
    <div className="p-4 m-4 bg-black text-white bg-opacity-90">
      <div>
        {movieResults.map((movieName, index) => (
          // console.log(movieName)
          <MovieList
            key={movieName.id}
            title={movieName.title}
            movies={movieResults}
          />
        ))}
      </div>
    </div>
  );
}

export default GptSuggestion