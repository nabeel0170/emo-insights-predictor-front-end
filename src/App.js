
import React from 'react';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Login from './pages/login';
import Home from './pages/emo-home';
import './syles/resetDefault.css';

function App() {
  return (
   <>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
   </>
  );
}

export default App;