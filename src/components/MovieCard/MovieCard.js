import React from "react";
import "./MovieCard-Style.scss";
const img_path = "https://image.tmdb.org/t/p/w500";

const MovieCard = ({ title, vote_average, overview, poster_path }) => {
  
  const tagVote = () => {
    if (vote_average >= 8) {
        return 'good'    
    } else if (vote_average < 8 && vote_average > 5) {
      return 'normal'
    } else {
      return 'bad'
    }
  };
  return (
    <div className="movie-card">
      <img src={`${img_path}/${poster_path}`} alt={`${title}`} />
      <div className="movie-info">
        <h3>{`${title}`}</h3>
        <span className={`tag ${tagVote()}`}>{`${vote_average}`}</span>
      </div>

      <div className="movie-overview">
        <h3>Overview :</h3>
        <p>{overview}</p>
      </div>
    </div>
  );
};

export default MovieCard;
