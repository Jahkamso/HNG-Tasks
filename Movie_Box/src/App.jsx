import { useEffect, useState } from 'react';
import './App.css';
import Home from './Home';
import Test from './components/test';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  const [movie, setMovie] = useState({ results: [] });
  const [movieDetails, setMovieDetails] = useState([]);

  const movieSelect = async (id) => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=b83b77e3babdd0858c05f876555ba54e`
    );
    const data = await response.json();
    setMovieDetails(data);
    console.log(data);
  };

  const URL =
    'https://api.themoviedb.org/3/movie/top_rated?api_key=b83b77e3babdd0858c05f876555ba54e';

  useEffect(() => {
    fetch(URL)
      .then((response) => response.json())
      .then((data) => setMovie({ results: data.results.slice(0, 12) }));
  }, []);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                movie={movie}
                movieDetails={movieDetails}
                movieSelect={movieSelect}
              />
            }
          ></Route>
          <Route path="/test" element={<Test movieDetails={movieDetails} />}></Route>
        </Routes>
      </BrowserRouter>
      {/* <Hero /> */}
      {/* <MovieCard movie={movie} movieDetails={movieDetails} movieSelect={movieSelect} /> */}
    </>
  );
}

export default App;
