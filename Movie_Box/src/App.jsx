import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [movie, setMovie] = useState({ results: [] });

  const URL =
    'https://api.themoviedb.org/3/movie/popular?api_key=b83b77e3babdd0858c05f876555ba54e';

  useEffect(() => {
    
      fetch(URL)
        .then((response) => response.json())
        .then((data) => setMovie({ results: data.results.slice(0, 12) }));
  }, [])

  console.log(movie)

  return (
    <>
      <div className="movie-section">
        <h1>Featured Movie</h1>
        <div className="movie">
          {movie.results.map((movieItem) => (
            <>
              <div key={movie.id} className="movie-list">
                <img
                  src={`https://image.tmdb.org/t/p/original/${movieItem.poster_path}`}
                  alt=""
                  />
                <div className="movie-briefing">
                  <h4>{new Date(movieItem.release_date).getFullYear()}</h4>
                  <h2>
                    {movieItem.title.length > 15
                      ? movieItem.title.slice(0, 15) + '...'
                      : movieItem.title}
                  </h2>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
}

export default App
