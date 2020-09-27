import React, { useState, useEffect } from "react";
import axios from "axios";

import "./App-Style.scss";

import HeaderLogo from './assets/logo.svg';
import MovieCard from "./components/MovieCard/MovieCard";
import Footer from './components/Footer/Footer';

const CallPopularAPI =
  "https://api.themoviedb.org/3/trending/all/week?api_key=229a6a0f891df5bf1176a4668af885c6";

function App() {
  const [MovieData, setMovieData] = useState([]);
  const [SceachFill, setSceachFill] = useState('');
  const CallAPISceach = 
`https://api.themoviedb.org/3/search/movie?api_key=229a6a0f891df5bf1176a4668af885c6&language=en-US&query=${SceachFill}&page=1&include_adult=false`
  
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

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if(SceachFill) {
      axios
      .get(CallAPISceach)
      .then((res) => {
        setMovieData(res.data.results);
      })
      .catch((e) => {
        console.log(e);
      });
      setSceachFill('')
    }
    
  };

  const handleChange = (e) => {
    setSceachFill(e.target.value);
    
  }
  return (
    <div>
      <header>
        <img src={HeaderLogo} alt="Logo"/>
        <form onSubmit={handleOnSubmit}>
          <input 
          className="search" 
          type="search" 
          placeholder="Search..."  
          value={SceachFill}
          onChange={handleChange}
          />
        </form>
      </header>
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
      <Footer/>
    </div>
  );
}

export default App;
