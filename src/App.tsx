import './App.css';
import About from './components/About';
import Header from './components/Header';
import Home from './components/Home';
import Qualification from './components/Qualification';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  return (
    <>
      <Header />
      <main className="main">
        <Home />
        <About />
        <Skills />
        <Qualification />
        <Contact />
      </main>
    </>
  );
}

export default App;
