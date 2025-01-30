import './App.css';
import Navbar from './pages/Navbar';
import Hero from './pages/Hero';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Footer from './pages/Footer';

function App() {
  return (
    <div >
      <Navbar/>
      <Hero/>
      <Home/>
      <About/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
