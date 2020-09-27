import React, { useState, useEffect } from "react";
import axios from "axios";

import "./App-Style.scss";
import MovieCard from "./components/MovieCard/MovieCard";

const CallPopularAPI =
  "https://api.themoviedb.org/3/trending/all/week?api_key=229a6a0f891df5bf1176a4668af885c6";

function App() {
  const [MovieData, setMovieData] = useState([]);

  useEffect(() => {
    axios
      .get(CallPopularAPI)
      .then((res) => {
        setMovieData(res.data.results);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <div className="movie-container">
      {MovieData.map((movie) => (
        <MovieCard
          key={movie.id}
          title={movie.title}
          vote_average={movie.vote_average}
          overview={movie.overview}
          poster_path={movie.poster_path}
        ></MovieCard>
      ))}
    </div>
  );
}

export default App;
