import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import GameSelection from './components/Game_Selection';
import Plinko from './components/Plinko';

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<GameSelection />} />
        <Route path="/Plinko" element={<Plinko />} />
        {/* Define other routes as needed */}
      </Routes>
    </>
  );
};

export default App;
