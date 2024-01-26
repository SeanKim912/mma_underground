import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';
import MainPage from './components/MainPage';
import MainGallery from './components/MainGallery';

function App() {
  return (
    <>
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<MainPage/>}/>
          <Route path="/classes" element={<MainGallery />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
