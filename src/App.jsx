import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import ParticlesBackground from './components/ParticlesBackground';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <ParticlesBackground />
      <Navbar />
      <main className="main-content">
        <Routes>
          {/* Direct all paths to the unified single-page layout to avoid route mismatches */}
          <Route path="/*" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
