import { useNavigate } from "react-router-dom";


const Test = ({ movieDetails }) => {
    const navigate = useNavigate()

    const HomePage = () => {
        navigate("/")
    }
  return (
    <>
      <div className="about-movie-wrapper">
        <aside>
          <div className="about-movie-logo">
            <img src="/logo.png" alt="" />
            <h3>MovieBox</h3>
          </div>
          <div className="nav-items">
            <ul>
              <li>
                <img src="/Home.png" alt="" />
                <a href="#">Home</a>
              </li>
              <li className="active">
                <img src="Movie-projector.png" alt="" />
                <a href="#">Movies</a>
              </li>
              <li>
                <img src="TV-show.png" alt="" />
                <a href="#">TV Series</a>
              </li>
              <li>
                <img src="/Calendar.png" alt="" />
                <a href="#">Upcoming</a>
              </li>
            </ul>
          </div>
          <div className="movie-quizes">
            <h5>Play movie quizes and earn free tickets</h5>
            <p>50k people are playing now</p>
            <button>Start playing</button>
          </div>
          <div className="logout">
            <img src="/Logout.png" alt="" />
            <h5 onClick={HomePage}>Logout</h5>
          </div>
        </aside>
        <div className="about-movie">
          <div
            className="info-image"
            style={{
              backgroundImage: `url(https://image.tmdb.org/t/p/original/${movieDetails.backdrop_path})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          ></div>
          <div className="about-movie-intro">
            <div className="movie-intro-title">
              <h2>{movieDetails.title} -</h2>
              <h2>{new Date(movieDetails.release_date).getFullYear()}</h2>
            </div>
            <div className="rating">
              <img src="/Star.png" alt="" />
              <h3>{movieDetails.vote_average}</h3>
            </div>
          </div>
          <div className="overview-section">
            <div className="left-side">
              <p>{movieDetails.overview}</p>
                          <div className="top-rated">
                              <div className="text">
                <h3>Top Rated Movie #{movieDetails.id}</h3>
                <h4>Awards 9 nominations</h4>
                              </div>
                              <img src="/arrow.png" alt="" />
              </div>
            </div>
            <div className="right-side">
              <button className="ticket-btn">
                <img src="/Two-tickets.png" alt="" />
                See Showtimes
              </button>
              <button className="watch-options-btn">
                <img src="/List.png" alt="" />
                More watch options
              </button>
              <div className="recommendation">
                <img src="/movie.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Test;
