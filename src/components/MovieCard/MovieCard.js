import React from "react";
import "./MovieCard-Style.scss";
const img_path = "https://image.tmdb.org/t/p/w500";
const MovieCard = ({ title, vote_average, overview, poster_path }) => {
  return (
    <div className="movie-card">
      <img src={`${img_path}/${poster_path}`} alt={`${title}`} />
      <div className="movie-info">
        <h3>{`${title}`}</h3>
        <span>{`${vote_average}`}</span>
      </div>

      <div className="movie-overview">
        <h3>Overview :</h3>
        <p>{overview}</p>
      </div>
    </div>
  );
};

export default MovieCard;
