import React from 'react';
import Header from './components/Header';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from './Pages/Home';
import './App.css';
import Graphics from './Pages/Graphics';
import Cloud from './Pages/Cloud';
import Data from './Pages/Data';
import Office from './Pages/Office';
import WebDev from './Pages/WebDev';
import Ai from './Pages/Ai';


function App() {
  return (
    <div>

      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="graphics" element={<Graphics />} />
          <Route path="cloud" element={<Cloud />} />
          <Route path="data" element={<Data />} />
          <Route path="office" element={<Office />} />
          <Route path="webdev" element={<WebDev />} />
          <Route path="ai" element={<Ai />} />
        </Routes>
        <footer className="bg-dark text-white text-center py-4 mt-5">
          <p>&copy; 2026 Quantum TechBridge. All rights reserved.</p>
          <p className="small">Empowering the next generation of tech professionals.</p>
        </footer>
      </BrowserRouter>



    </div>
  );
}

export default App;