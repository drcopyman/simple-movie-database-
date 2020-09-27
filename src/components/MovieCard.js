import React from 'react';

const img_path = 'https://image.tmdb.org/t/p/w500';
const MovieCard = ({ title , vote_average , overview , poster_path}) => {
    return (
        <div className="movie-card">
            <img src={`${img_path}/${poster_path}`} alt={`${title}`}/>
        </div>
    );
}

export default MovieCard;
