import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Classes from './pages/Classes';
import OurTeam from './pages/OurTeam';
import Pricing from './pages/Pricing'
import Registration from './pages/Registration';
import SuccessMessage from './components/SuccessMessage';
import Gym from './pages/Gym';



function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
        <Route path="/gym" element={<Gym />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
           <Route path="/" element={<Classes />} />
          <Route path="/team" element={<OurTeam />} /> 
          <Route path="/pricing" element={<Pricing />} /> 
          

          <Route path="/register" element={<Registration />} /> 
          <Route path="/success" element={<SuccessMessage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;





