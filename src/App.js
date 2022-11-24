import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import Presupuestos from './pages/Presupuestos';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/presupuestos" element={<Presupuestos />} />
      </Routes>
    </Router>
  );
}

export default App;
