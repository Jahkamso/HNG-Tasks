const Hero = () => {
  return (
    <>
      <div className="hero-container">
        <header>
          <div className="logo-section">
            <img src="./logo.png" alt="" />
            <h2>MovieBox</h2>
          </div>
          <div className="input-section">
            <input type="text" placeholder="What do you want to watch" />
            <img src="/search.svg" alt="" />
          </div>
          <div className="sign-in">
            <a style={{ color: 'white' }}>Sign In</a>
            <div className="img-circle">
              <img src="/menu-icon.svg" alt="" />
            </div>
          </div>
        </header>
        <div className="hero-content">
          <h1>
            John Wick 3 : <br /> Parabellum
          </h1>
          <p>
            John Wick is on the run after killing a member of the international
            assassins' guild, and with a $14 million price tag on his head, he
            is the target of hit men and women everywhere.
                  </p>
                  <div className="btn">
                      <img src="/play.svg" alt="" />
                      <button>
                          Watch Trailer
                      </button>
                  </div>
        </div>
      </div>
    </>
  );
};
export default Hero;
