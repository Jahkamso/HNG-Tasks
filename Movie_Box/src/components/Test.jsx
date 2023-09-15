const Test = ({ movieDetails }) => {
  return (
    <>
      <div className="about-movie">
        <div
          className="info-image"
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original/${movieDetails.backdrop_path})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        ></div>
        <h2>{movieDetails.title}</h2>
        <div className="overview-section">
          <div className="left-side">
            <p>{movieDetails.overview}</p>
                  </div>
                  <div className="right-side">
                      <button>See Showtimes</button>
                      <button>See Showtimes</button>
                  </div>
        </div>
      </div>
    </>
  );
};
export default Test;
