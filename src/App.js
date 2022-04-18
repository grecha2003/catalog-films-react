import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Navigation from './Components/Navigation';
import Home from './routes/Home';
import About from './routes/About';
import Detail from './Components/Detail';

import './App.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" exact={true} element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/movie/:id" element={<Detail />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
