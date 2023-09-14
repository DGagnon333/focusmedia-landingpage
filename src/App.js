import {BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Pricing from './pages/Pricing';
import Footer from './components/Footer.jsx';
import AugementedTour from './pages/AugementedTour';
import { Analytics } from '@vercel/analytics/react';
import { useEffect } from "react";
// import AerialPhotos from "./pages/AerialPhotos";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <div>
      <Router>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          {/* <Route path="/AerialPhotos" element={<AerialPhotos />} /> */}
          <Route path="/AugmentedTour" element={<AugementedTour />} />
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
