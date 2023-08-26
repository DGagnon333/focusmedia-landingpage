import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Pricing from './pages/Pricing';
import Footer from './components/Footer.jsx';
import { Analytics } from '@vercel/analytics/react';

function App() {
  return (
    <div>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Pricing" element={<Pricing />} />
      </Routes>
      <Footer />
    </Router>
      <Analytics />
    </div>
  );
}

export default App;
