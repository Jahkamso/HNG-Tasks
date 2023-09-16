import { useNavigate } from "react-router-dom";

const MovieCard = ({ movie, movieDetails, movieSelect }) => {

  const navigate = useNavigate()

  const pageRoute = (id) => {
    navigate("/test")
  }

  return (
    <>
      <div className="movie-section">
        <h1 onClick={() => {
          pageRoute()
        }}>Featured Movie</h1>
        <div className="movie">
          {movie.results.map((movieItem) => (
            <>
              <div
                key={movieItem.id}
                data-testid="movie-card"
                className="movie-cards"
                onClick={() => {
                  movieSelect(movieItem.id)
                  pageRoute(movieItem.id);
                }}
              >
                <img
                  data-testid="movie-poster"
                  src={`https://image.tmdb.org/t/p/original/${movieItem.poster_path}`}
                  alt=""
                />
                {/* <img className="heart-icon" src="/heart.svg" alt="" /> */}
                <div className="movie-briefing">
                  <h4 data-testid="movie-release-date">
                    {new Date(movieItem.release_date).getFullYear()}
                  </h4>
                  <h2 data-testid="movie-title">
                    {movieItem.title}
                  </h2>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
};
export default MovieCard;
