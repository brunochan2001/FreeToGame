import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { GamePage, GameSinglePage } from './pages';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<GamePage />} />
        <Route path=":id" element={<GameSinglePage />} />
      </Routes>
    </Router>
  );
};

export default App;
