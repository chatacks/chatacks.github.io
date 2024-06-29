function ScrollDown() {
  return (
    <div className="home-scroll">
      <a href="#about" className="home-scroll-button button--flex" aria-label="Clique">
        <svg
          width="32px"
          height="32px"
          className="home-scroll-mouse"
          viewBox="0 0 247 390"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          style={ {
            fillRule: 'evenodd',
            clipRule: 'evenodd',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeMiterlimit: 1.5,
          } }
        >
          <path
            className="wheel"
            d="M123.359,79.775l0,72.843"
            style={ {
              fill: 'none',
              stroke: 'var(--title-color)',
              strokeWidth: '20px',
            } }
          />
          <path
            id="mouse"
            d={ `M236.717,123.359c0,-62.565 -50.794,-113.359 -113.358,-113.359
              c-62.565,0 -113.359,50.794 -113.359,113.359l0,143.237
              c0,62.565 50.794,113.359 113.359,113.359
              c62.564,0 113.358,-50.794 113.358,-113.359l0,-143.237Z` }
            style={ {
              fill: 'none',
              stroke: 'var(--title-color)',
              strokeWidth: '20px',
            } }
          />
        </svg>
        <span className="home-scroll-name">Scroll Down</span>
        <i className="uil uil-arrow-down home-scroll-arrow" />
      </a>
    </div>
  );
}

export default ScrollDown;
