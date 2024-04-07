import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';
import MainPage from './components/MainPage';
import AboutUs from './components/AboutUs';
import Coaches from './components/Coaches';

function App() {
  return (
    <>
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<MainPage/>}/>
          <Route path="/about" element={<AboutUs />} />
          <Route path="/coaches" element={<Coaches />}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
