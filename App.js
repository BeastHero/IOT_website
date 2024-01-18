import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import AboutUs from './components/About';
import Team from './components/Team';
import Pricing from './components/Pricing';
import Blog from './components/Blog';
import Footer from './components/Footer';


function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<AboutUs />} />
          <Route path='/team' element={<Team />} />
          <Route path='/pricing' element={<Pricing />} />
          <Route path='/blog' element={<Blog />} />

        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
