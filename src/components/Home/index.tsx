import './Home.css';
import Me from './Me';
import ScrollDown from './ScrollDown';
import Social from './Social';

function Home() {
  return (
    <section className="home section" id="home">
      <div className="home-container container grid">
        <div className="home-content grid">
          <Social />
          <div className="home-img" />
          <Me />
        </div>
        <ScrollDown />
      </div>
    </section>
  );
}

export default Home;
