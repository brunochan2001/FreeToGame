import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { theme } from './lib/theme';
import { GamePage, GameSinglePage } from './pages';

const App: React.FC = () => {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Routes>
          <Route path="/" element={<GamePage />} />
          <Route path=":id" element={<GameSinglePage />} />
        </Routes>
      </ThemeProvider>
    </Router>
  );
};

export default App;
